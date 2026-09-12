// Falas do Professor "Bug Master"
const PROFESSOR = {
  name: "Professor Bug Master",
  avatar: "🎓",
  welcome: [
    "Bem-vindo! Preparado pra essa jornada? Spoiler: vai ter MUITO bug no caminho 🐛",
    "Eu sou o Bug Master, seu guia nessa aventura. Já aviso: café é obrigatório ☕",
    "17 fases te separam de virar um Java Full Stack Developer. Bora nessa?"
  ],
  correctAnswers: [
    "Mandou bem! Nem o compilador reclamaria dessa resposta! ✅",
    "Isso aí! Você tá compilando sem erros hoje! 🎉",
    "Acertou! Bug nenhum sobrevive ao seu código! 🐛💥",
    "Perfeito! Continua assim que você chega no `git push --force` da vida! 😄"
  ],
  wrongAnswers: [
    "Ops! Isso deu StackOverflow... na sua resposta! Mas relaxa, bora revisar 😅",
    "Quase! Até o melhor dev erra um `;` de vez em quando 🐛",
    "Não foi dessa vez, mas todo erro é só um teste que ainda não passou!",
    "Hmm, essa resposta não compilou. Bora tentar de novo na próxima!"
  ],
  openAnswer: [
    "Ótima reflexão! Continue assim! 🙌",
    "Gostei do seu raciocínio! Isso é pensar como dev de verdade!",
    "Boa! Guarda essa resposta, você vai lembrar dela na sua carreira!",
    "Excelente! Reflexões assim é que separam quem só copia código de quem entende!"
  ],
  phaseComplete: [
    "Mais uma fase concluída! Você tá voando! 🚀",
    "Boa! Bug Master aprova essa evolução!",
    "Fase completa! O próximo desafio já tá te esperando..."
  ],
  finalMessage: "Você fez a jornada INTEIRA! Não é todo dia que vejo alguém tão DETERMINADO! Agora você sabe o caminho para se tornar um JAVA FULL STACK DEVELOPER de VERDADE! (ou pelo menos sabe como se tornar um kkkk) 🎓🚀",

  random(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
};
