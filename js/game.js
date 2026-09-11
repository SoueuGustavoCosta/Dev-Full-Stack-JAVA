// Lógica principal do jogo - Jornada Java Full Stack
const STORAGE_KEY = "jornada-java-fullstack-save";

const XP_MC_TF = 10;
const XP_OPEN = 15;
const XP_STREAK_BONUS = 5;

const BADGE_DEFS = [
  { id: "iniciante", label: "🏆 Iniciante", check: s => s.completedPhases.length >= 5 },
  { id: "em-fogo", label: "🔥 Em Fogo", check: s => s.bestStreak >= 3 },
  { id: "mestre-java", label: "🎓 Mestre Java", check: s => s.completedPhases.length >= PHASES.length },
  { id: "debugger-pro", label: "🐛 Debugger Pro", check: s => s.totalQuestions >= 15 && (s.correctQuestions / s.totalQuestions) >= 0.9 }
];

let state = loadState();
let currentPhaseIndex = null;
let phaseAnswers = { q0: false, q1: false, q2: false };

function defaultState() {
  return {
    playerName: "",
    xp: 0,
    completedPhases: [],
    streak: 0,
    bestStreak: 0,
    totalQuestions: 0,
    correctQuestions: 0,
    badges: []
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return { ...defaultState(), ...parsed };
  } catch (e) {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function launchConfetti() {
  const layer = document.getElementById("confetti-layer");
  const colors = ["#7c5cff", "#ffb020", "#33d17a", "#ff5c7a", "#4cc9f0"];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (2 + Math.random() * 1.5) + "s";
    piece.style.animationDelay = (Math.random() * 0.3) + "s";
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 4000);
  }
}

function checkBadges() {
  const newlyEarned = [];
  BADGE_DEFS.forEach(b => {
    if (!state.badges.includes(b.id) && b.check(state)) {
      state.badges.push(b.id);
      newlyEarned.push(b);
    }
  });
  return newlyEarned;
}

function renderBadges(containerId) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  state.badges.forEach(id => {
    const def = BADGE_DEFS.find(b => b.id === id);
    if (!def) return;
    const span = document.createElement("span");
    span.className = "badge";
    span.textContent = def.label;
    el.appendChild(span);
  });
}

// ---------- TELA INICIAL ----------
function initStartScreen() {
  document.getElementById("professor-welcome").textContent = PROFESSOR.random(PROFESSOR.welcome);

  const nameInput = document.getElementById("player-name");
  if (state.playerName) nameInput.value = state.playerName;

  document.getElementById("btn-start").addEventListener("click", () => {
    const name = nameInput.value.trim() || "Dev";
    state.playerName = name;
    saveState();
    renderTrail();
    showScreen("screen-trail");
  });
}

// ---------- TRILHA ----------
function renderTrail() {
  document.getElementById("trail-player-name").textContent = `Olá, ${state.playerName}! 👋`;
  document.getElementById("xp-total").textContent = state.xp;

  const completed = state.completedPhases.length;
  document.getElementById("trail-progress-text").textContent = `Fase ${completed} de ${PHASES.length}`;

  const pct = Math.round((completed / PHASES.length) * 100);
  document.getElementById("progress-bar").style.width = pct + "%";

  renderBadges("badges");

  const trailEl = document.getElementById("trail");
  trailEl.innerHTML = "";

  PHASES.forEach((phase, idx) => {
    const isDone = state.completedPhases.includes(phase.id);
    const isUnlocked = idx === 0 || state.completedPhases.includes(PHASES[idx - 1].id);
    const isCurrent = isUnlocked && !isDone;

    const div = document.createElement("div");
    div.className = "trail-step" + (isDone ? " done" : "") + (isCurrent ? " current" : "") + (!isUnlocked ? " locked" : "");

    div.innerHTML = `
      <span class="icon">${isDone ? "✅" : phase.icon}</span>
      <div class="info">
        <div class="name">Fase ${phase.id}: ${phase.title}</div>
        <div class="status">${isDone ? "Concluída" : isUnlocked ? "Disponível" : "Bloqueada"}</div>
      </div>
    `;

    if (isUnlocked) {
      div.addEventListener("click", () => openPhase(idx));
    }

    trailEl.appendChild(div);
  });

  if (completed >= PHASES.length) {
    setTimeout(showFinalScreen, 300);
  }
}

// ---------- FASE ----------
function openPhase(idx) {
  currentPhaseIndex = idx;
  phaseAnswers = { q0: false, q1: false, q2: false };

  const phase = PHASES[idx];
  document.getElementById("phase-joke").textContent = phase.joke;
  document.getElementById("phase-title").textContent = `Fase ${phase.id}: ${phase.title}`;
  document.getElementById("phase-summary").textContent = phase.content.summary;

  const topicsEl = document.getElementById("phase-topics");
  topicsEl.innerHTML = "";
  phase.content.topics.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    topicsEl.appendChild(li);
  });

  renderQuestions(phase);

  const nextBtn = document.getElementById("btn-next-phase");
  nextBtn.disabled = true;
  nextBtn.textContent = idx === PHASES.length - 1 ? "Concluir Jornada 🏁" : "Próxima Etapa ➡️";

  showScreen("screen-phase");
}

function renderQuestions(phase) {
  const area = document.getElementById("questions-area");
  area.innerHTML = "";

  phase.questions.forEach((q, qIdx) => {
    const block = document.createElement("div");
    block.className = "question-block";
    block.id = `question-${qIdx}`;

    if (q.type === "mc") {
      block.innerHTML = `<h4>Pergunta ${qIdx + 1}: ${q.question}</h4>` +
        q.options.map((opt, i) =>
          `<button class="option-btn" data-index="${i}">${opt}</button>`
        ).join("") +
        `<div class="feedback" id="feedback-${qIdx}"></div>`;

      area.appendChild(block);

      block.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          if (phaseAnswers[`q${qIdx}`]) return;
          const chosen = parseInt(btn.dataset.index, 10);
          const isCorrect = chosen === q.correct;
          answerQuestion(qIdx, isCorrect, XP_MC_TF);

          block.querySelectorAll(".option-btn").forEach((b, i) => {
            b.disabled = true;
            if (i === q.correct) b.classList.add("correct");
            else if (i === chosen && !isCorrect) b.classList.add("wrong");
          });

          const fb = document.getElementById(`feedback-${qIdx}`);
          fb.textContent = isCorrect ? PROFESSOR.random(PROFESSOR.correctAnswers) : PROFESSOR.random(PROFESSOR.wrongAnswers);
          fb.className = "feedback " + (isCorrect ? "correct" : "wrong");
        });
      });

    } else if (q.type === "tf") {
      block.innerHTML = `<h4>Pergunta ${qIdx + 1} (Verdadeiro ou Falso): ${q.question}</h4>` +
        `<button class="option-btn" data-value="true">Verdadeiro</button>` +
        `<button class="option-btn" data-value="false">Falso</button>` +
        `<div class="feedback" id="feedback-${qIdx}"></div>`;

      area.appendChild(block);

      block.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          if (phaseAnswers[`q${qIdx}`]) return;
          const chosen = btn.dataset.value === "true";
          const isCorrect = chosen === q.correct;
          answerQuestion(qIdx, isCorrect, XP_MC_TF);

          block.querySelectorAll(".option-btn").forEach(b => {
            b.disabled = true;
            const bVal = b.dataset.value === "true";
            if (bVal === q.correct) b.classList.add("correct");
            else if (bVal === chosen && !isCorrect) b.classList.add("wrong");
          });

          const fb = document.getElementById(`feedback-${qIdx}`);
          fb.textContent = q.explanation || (isCorrect ? PROFESSOR.random(PROFESSOR.correctAnswers) : PROFESSOR.random(PROFESSOR.wrongAnswers));
          fb.className = "feedback " + (isCorrect ? "correct" : "wrong");
        });
      });

    } else if (q.type === "open") {
      block.innerHTML = `<h4>Pergunta ${qIdx + 1} (Reflexão): ${q.question}</h4>` +
        `<textarea id="open-answer-${qIdx}" placeholder="Escreva sua resposta..."></textarea>` +
        `<button class="btn btn-primary" id="submit-open-${qIdx}">Enviar resposta</button>` +
        `<div class="feedback" id="feedback-${qIdx}"></div>`;

      area.appendChild(block);

      document.getElementById(`submit-open-${qIdx}`).addEventListener("click", () => {
        if (phaseAnswers[`q${qIdx}`]) return;
        const textarea = document.getElementById(`open-answer-${qIdx}`);
        const text = textarea.value.trim();
        if (text.length < 3) {
          showToast("Escreva uma resposta um pouco mais completa 🙂");
          return;
        }
        textarea.disabled = true;
        document.getElementById(`submit-open-${qIdx}`).disabled = true;

        answerQuestion(qIdx, true, XP_OPEN);

        const fb = document.getElementById(`feedback-${qIdx}`);
        fb.textContent = PROFESSOR.random(PROFESSOR.openAnswer);
        fb.className = "feedback correct";
      });
    }
  });
}

function answerQuestion(qIdx, isCorrect, baseXp) {
  phaseAnswers[`q${qIdx}`] = true;

  state.totalQuestions++;
  let earned = baseXp;

  if (isCorrect) {
    state.correctQuestions++;
    state.streak++;
    if (state.streak >= 2) earned += XP_STREAK_BONUS;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
  } else {
    state.streak = 0;
  }

  state.xp += earned;
  document.getElementById("xp-total") && (document.getElementById("xp-total").textContent = state.xp);
  saveState();

  const allAnswered = Object.values(phaseAnswers).every(Boolean);
  if (allAnswered) {
    document.getElementById("btn-next-phase").disabled = false;
  }
}

function completePhase() {
  const phase = PHASES[currentPhaseIndex];
  if (!state.completedPhases.includes(phase.id)) {
    state.completedPhases.push(phase.id);
  }

  const newBadges = checkBadges();
  saveState();

  showToast(PROFESSOR.random(PROFESSOR.phaseComplete));
  launchConfetti();

  if (newBadges.length > 0) {
    setTimeout(() => showToast("Nova conquista: " + newBadges.map(b => b.label).join(", ")), 1600);
  }

  renderTrail();

  if (state.completedPhases.length >= PHASES.length) {
    setTimeout(showFinalScreen, 900);
  } else {
    showScreen("screen-trail");
  }
}

// ---------- TELA FINAL ----------
function showFinalScreen() {
  document.getElementById("final-message").textContent = PROFESSOR.finalMessage;
  document.getElementById("final-stats").textContent =
    `${state.playerName}, você conquistou ${state.xp} XP em ${PHASES.length} fases! ` +
    `Acertos: ${state.correctQuestions}/${state.totalQuestions}.`;
  renderBadges("final-badges");
  launchConfetti();
  showScreen("screen-final");
}

function generateCertificateText() {
  return `🎓 Certificado Jornada Java Full Stack\n` +
    `${state.playerName} completou todas as 17 fases!\n` +
    `XP total: ${state.xp} | Badges: ${state.badges.length}\n` +
    `#JornadaJavaFullStack`;
}

// ---------- EVENTOS GLOBAIS ----------
function initGlobalButtons() {
  document.getElementById("btn-next-phase").addEventListener("click", completePhase);
  document.getElementById("btn-back-trail").addEventListener("click", () => {
    renderTrail();
    showScreen("screen-trail");
  });

  document.getElementById("btn-restart").addEventListener("click", () => {
    if (confirm("Tem certeza que quer recomeçar a jornada? Seu progresso será apagado.")) {
      localStorage.removeItem(STORAGE_KEY);
      state = defaultState();
      showScreen("screen-start");
      initStartScreen();
    }
  });

  document.getElementById("btn-share").addEventListener("click", async () => {
    const text = generateCertificateText();
    try {
      if (navigator.share) {
        await navigator.share({ text });
      } else {
        await navigator.clipboard.writeText(text);
        showToast("Certificado copiado para a área de transferência!");
      }
    } catch (e) {
      showToast("Não foi possível compartilhar, mas parabéns pela conquista! 🎉");
    }
  });

  const repoLink = document.getElementById("btn-repo");
  repoLink.href = window.location.origin + window.location.pathname.replace(/index\.html$/, "");
}

// ---------- INICIALIZAÇÃO ----------
document.addEventListener("DOMContentLoaded", () => {
  initStartScreen();
  initGlobalButtons();

  if (state.playerName && state.completedPhases.length < PHASES.length) {
    renderTrail();
    showScreen("screen-trail");
  } else if (state.playerName && state.completedPhases.length >= PHASES.length) {
    showFinalScreen();
  } else {
    showScreen("screen-start");
  }
});
