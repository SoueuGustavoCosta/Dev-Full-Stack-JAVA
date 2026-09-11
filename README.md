# 🚀 Jornada Java Full Stack

Mini-jogo educativo e interativo que ensina o roadmap completo para se tornar um desenvolvedor Java Full Stack, guiado pelo Professor **"Bug Master"** 🎓.

Jogue online pelo GitHub Pages (ative em Settings → Pages, branch `main`, pasta `/`) ou abra `index.html` diretamente no navegador.

## Como jogar

1. Digite seu nome e clique em **Começar Jornada**.
2. Avance pela trilha de **17 fases**, cada uma cobrindo um tema do roadmap Full Stack (Java, Git, POO, Arquitetura, Banco de Dados, Spring Boot, APIs REST, Segurança, Design, Frontend, Testes, Docker, CI/CD, Monitoramento e IA/LLMs).
3. Em cada fase, o Professor explica o conteúdo com bom humor e você responde **3 perguntas**: múltipla escolha, verdadeiro/falso e uma reflexão aberta.
4. Ganhe XP, badges e avance até completar a jornada e receber seu certificado.

Seu progresso é salvo automaticamente no `localStorage` do navegador.

## Estrutura de arquivos

```
├── index.html          # Interface do jogo
├── css/
│   └── style.css       # Estilos e animações
└── js/
    ├── game.js          # Lógica principal (estado, trilha, fases, XP)
    ├── phases.js         # Conteúdo e perguntas das 17 fases
    └── professor.js       # Falas e piadas do Professor Bug Master
```

## Tecnologias

100% HTML, CSS e JavaScript puro — sem backend, sem dependências, sem build. Roda em qualquer navegador e é hospedado gratuitamente no GitHub Pages.

## Sistema de XP e conquistas

- Pergunta de múltipla escolha ou V/F correta: **+10 XP**
- Pergunta aberta (reflexão): **+15 XP**
- Sequência de acertos (streak): **+5 XP extra**
- Badges: 🏆 Iniciante, 🔥 Em Fogo, 🎓 Mestre Java, 🐛 Debugger Pro

## Desenvolvimento

Quer adicionar novas fases ou temas? Edite `js/phases.js` seguindo a mesma estrutura (título, piada, conteúdo, tópicos e 3 perguntas) e adicione o link, se quiser, a leituras complementares.
