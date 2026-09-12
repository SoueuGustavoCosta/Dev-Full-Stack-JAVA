// Dados das 17 fases da Jornada Java Full Stack
const PHASES = [
  {
    id: 1,
    title: "Fundamentos Java",
    icon: "🐛",
    joke: "Java? Mais que um café! É uma linguagem que te deixa CAFEINADO de código! ☕",
    content: {
      summary: "Aqui você aprende a sintaxe básica: variáveis, tipos primitivos, operadores e estrutura de um programa Java.",
      topics: ["Variáveis e tipos primitivos", "Operadores", "Estrutura de classes e main()", "Compilação e execução (javac/java)"]
    },
    questions: [
      {
        type: "mc",
        question: "Qual é a extensão de um arquivo Java?",
        options: [".js", ".java", ".coffee"],
        correct: 1
      },
      {
        type: "tf",
        question: "Variáveis podem mudar de tipo durante a execução em Java.",
        correct: false,
        explanation: "Errado! Java é fortemente tipado — uma vez declarado o tipo, ele não muda."
      },
      {
        type: "open",
        question: "Qual foi (ou seria) seu primeiro programa em Java?"
      }
    ]
  },
  {
    id: 2,
    title: "Git & Versionamento",
    icon: "🌱",
    joke: "Git é tipo o ctrl+z dos devs, mas TURBINADO! 🚀",
    content: {
      summary: "Git controla o histórico do seu código. GitHub é onde você hospeda esse histórico na nuvem para colaborar com o mundo.",
      topics: ["Commits e histórico", "Branches", "Merge e conflitos", "Repositórios remotos (GitHub)"]
    },
    questions: [
      {
        type: "mc",
        question: "O que é uma branch no Git?",
        options: ["Um tipo de commit", "Uma linha de desenvolvimento independente", "Um arquivo de configuração"],
        correct: 1
      },
      {
        type: "tf",
        question: "Git e GitHub são a mesma coisa.",
        correct: false,
        explanation: "Errado! Git é a ferramenta local de versionamento, GitHub é o serviço online que hospeda repositórios Git."
      },
      {
        type: "open",
        question: "Por que você acha importante versionar o código?"
      }
    ]
  },
  {
    id: 3,
    title: "Lógica de Programação",
    icon: "📚",
    joke: "Lógica sem algoritmo é como café sem açúcar... amargo demais! 😅",
    content: {
      summary: "Estruturas de dados e algoritmos são a base de qualquer solução de software: arrays, listas, laços e condicionais.",
      topics: ["Arrays e listas", "Laços (for, while)", "Condicionais", "Recursão"]
    },
    questions: [
      {
        type: "mc",
        question: "O que armazena um array?",
        options: ["Apenas um valor", "Uma coleção de valores do mesmo tipo", "Somente texto"],
        correct: 1
      },
      {
        type: "tf",
        question: "Recursão é quando uma função chama a si mesma.",
        correct: true,
        explanation: "Correto! E precisa de uma condição de parada, senão vira loop infinito."
      },
      {
        type: "open",
        question: "Descreva um problema do dia a dia que poderia ser resolvido com um algoritmo simples."
      }
    ]
  },
  {
    id: 4,
    title: "Programação Orientada a Objetos",
    icon: "🏗️",
    joke: "POO não é banheiro! É Programação Orientada a... SUCESSO! 💪",
    content: {
      summary: "POO organiza o código em objetos que têm atributos e comportamentos, usando classes, herança, encapsulamento e polimorfismo.",
      topics: ["Classes e objetos", "Herança", "Encapsulamento", "Polimorfismo"]
    },
    questions: [
      {
        type: "mc",
        question: "O que é herança em POO?",
        options: [
          "Uma classe recebendo atributos e métodos de outra",
          "Um tipo de variável",
          "Um erro de compilação"
        ],
        correct: 0
      },
      {
        type: "tf",
        question: "Encapsulamento significa expor todos os atributos de uma classe publicamente.",
        correct: false,
        explanation: "Errado! Encapsulamento é justamente proteger os dados, controlando o acesso via métodos (getters/setters)."
      },
      {
        type: "open",
        question: "Dê um exemplo de herança no mundo real."
      }
    ]
  },
  {
    id: 5,
    title: "Arquitetura de Software",
    icon: "💾",
    joke: "Se seu código for um caos, a arquitetura é a REFORMINHA que salva tudo! 🏗️",
    content: {
      summary: "Boas arquiteturas organizam o código em camadas e padrões que facilitam manutenção, testes e evolução do sistema.",
      topics: ["Princípios SOLID", "Padrão MVC", "Separação de camadas", "Design Patterns"]
    },
    questions: [
      {
        type: "mc",
        question: "SOLID é um conjunto de:",
        options: ["Frameworks", "Princípios de design orientado a objetos", "Bancos de dados"],
        correct: 1
      },
      {
        type: "tf",
        question: "MVC separa a aplicação em Model, View e Controller.",
        correct: true,
        explanation: "Correto! Model (dados), View (interface) e Controller (lógica de controle)."
      },
      {
        type: "open",
        question: "Como você organizaria as pastas de um projeto grande?"
      }
    ]
  },
  {
    id: 6,
    title: "Banco de Dados & SQL",
    icon: "🌐",
    joke: "Banco de dados é como organizar sua bagunça... mas PROFISSIONAL! 💾",
    content: {
      summary: "Bancos relacionais organizam dados em tabelas e usam SQL para consultar, inserir e relacionar informações.",
      topics: ["Tabelas e chaves primárias/estrangeiras", "Comandos SQL (SELECT, INSERT, UPDATE)", "Relacionamentos (1:1, 1:N, N:N)", "PostgreSQL"]
    },
    questions: [
      {
        type: "mc",
        question: "Qual tipo de relacionamento existe entre 'Cliente' e 'Pedidos' (um cliente pode ter vários pedidos)?",
        options: ["1:1", "1:N", "N:N"],
        correct: 1
      },
      {
        type: "tf",
        question: "Índices em um banco de dados só servem para deixar a tabela mais bonita.",
        correct: false,
        explanation: "Errado! Índices aceleram buscas, mas têm custo em inserções/atualizações."
      },
      {
        type: "open",
        question: "Desenhe (em texto) uma tabela simples para cadastrar usuários."
      }
    ]
  },
  {
    id: 7,
    title: "PostgreSQL na Prática",
    icon: "🔐",
    joke: "PostgreSQL é tipo o elefante da sala: forte, confiável e nunca esquece nada! 🐘",
    content: {
      summary: "PostgreSQL é um dos bancos relacionais mais usados no mercado, com suporte robusto a transações e tipos avançados.",
      topics: ["Transações (ACID)", "JOINs", "Constraints", "Ferramentas de administração"]
    },
    questions: [
      {
        type: "mc",
        question: "O que faz um JOIN em SQL?",
        options: ["Deleta registros", "Combina dados de duas ou mais tabelas", "Cria uma nova tabela vazia"],
        correct: 1
      },
      {
        type: "tf",
        question: "ACID garante que transações sejam consistentes e confiáveis.",
        correct: true,
        explanation: "Correto! Atomicidade, Consistência, Isolamento e Durabilidade."
      },
      {
        type: "open",
        question: "Que tipo de constraint você usaria para evitar e-mails duplicados?"
      }
    ]
  },
  {
    id: 8,
    title: "Spring Boot",
    icon: "🎨",
    joke: "Spring Boot? Mais como Spring BOOM! 💥 Tá pronto pra EXPLODIR de produtividade!",
    content: {
      summary: "Spring Boot é um framework Java que facilita a criação de aplicações e APIs prontas para produção com configuração mínima.",
      topics: ["Injeção de dependência", "Anotações (@RestController, @Service)", "application.properties", "Auto-configuração"]
    },
    questions: [
      {
        type: "mc",
        question: "Qual anotação define um controlador REST no Spring Boot?",
        options: ["@RestController", "@Database", "@HtmlPage"],
        correct: 0
      },
      {
        type: "tf",
        question: "Spring Boot exige configuração manual de servidor para rodar uma API.",
        correct: false,
        explanation: "Errado! Spring Boot já vem com um servidor embutido (Tomcat, por padrão)."
      },
      {
        type: "open",
        question: "Qual API você criaria com Spring Boot?"
      }
    ]
  },
  {
    id: 9,
    title: "APIs REST",
    icon: "⚙️",
    joke: "REST não é de descansar! É de Representational State Transfer... mas pode tirar uma soneca depois 😴",
    content: {
      summary: "APIs REST expõem recursos via HTTP, usando verbos como GET, POST, PUT e DELETE, e devolvem dados normalmente em JSON.",
      topics: ["Verbos HTTP", "Status codes", "JSON", "Endpoints e recursos"]
    },
    questions: [
      {
        type: "mc",
        question: "Qual verbo HTTP é usado para criar um novo recurso?",
        options: ["GET", "POST", "DELETE"],
        correct: 1
      },
      {
        type: "tf",
        question: "O status code 404 significa 'recurso não encontrado'.",
        correct: true,
        explanation: "Correto! 404 Not Found é exatamente isso."
      },
      {
        type: "open",
        question: "Qual API você criaria para o seu projeto dos sonhos?"
      }
    ]
  },
  {
    id: 10,
    title: "Segurança & Autenticação",
    icon: "📦",
    joke: "JWT? É tipo um VIP pass criptografado pra sua API! 🔐",
    content: {
      summary: "Segurança envolve autenticar quem é o usuário (login) e autorizar o que ele pode fazer, usando tokens como JWT e criptografia de senhas.",
      topics: ["JWT (JSON Web Token)", "Spring Security", "BCrypt", "Autenticação vs Autorização"]
    },
    questions: [
      {
        type: "mc",
        question: "O que o JWT carrega tipicamente?",
        options: ["Apenas uma senha em texto puro", "Informações do usuário assinadas digitalmente", "Um arquivo de imagem"],
        correct: 1
      },
      {
        type: "tf",
        question: "BCrypt é usado para armazenar senhas de forma segura (com hash).",
        correct: true,
        explanation: "Correto! Nunca guarde senha em texto puro — sempre use hash com salt, como o BCrypt."
      },
      {
        type: "open",
        question: "Qual é o maior risco de segurança que você conhece em aplicações web?"
      }
    ]
  },
  {
    id: 11,
    title: "Design & Prototipagem",
    icon: "🚀",
    joke: "Desenhar antes de codar é como ler a receita antes de fazer bolo! 🎨",
    content: {
      summary: "Antes de programar a tela, é bom prototipar: pensar em UX, wireframes e fluxo de telas.",
      topics: ["Wireframes", "UI vs UX", "Ferramentas de prototipagem (Figma)", "Fluxo do usuário"]
    },
    questions: [
      {
        type: "mc",
        question: "Qual ferramenta é famosa para prototipagem de interfaces?",
        options: ["Figma", "PostgreSQL", "Docker"],
        correct: 0
      },
      {
        type: "tf",
        question: "Prototipar antes de codar é uma perda de tempo.",
        correct: false,
        explanation: "Errado! Prototipar economiza retrabalho ao validar a ideia antes de escrever código."
      },
      {
        type: "open",
        question: "Desenhe em texto (ASCII art) uma tela simples de login."
      }
    ]
  },
  {
    id: 12,
    title: "Frontend Web",
    icon: "🐛",
    joke: "HTML, CSS, JS... a trilogia que faz a web BRILHAR! ✨",
    content: {
      summary: "O frontend é o que o usuário vê e interage: estrutura (HTML), estilo (CSS) e comportamento (JavaScript).",
      topics: ["HTML semântico", "CSS e responsividade", "JavaScript", "Frameworks (React, Angular, Vue)"]
    },
    questions: [
      {
        type: "mc",
        question: "Qual tecnologia é responsável pelo comportamento interativo de uma página?",
        options: ["HTML", "CSS", "JavaScript"],
        correct: 2
      },
      {
        type: "tf",
        question: "CSS é usado para definir a estrutura lógica de uma página.",
        correct: false,
        explanation: "Errado! CSS cuida do estilo visual; HTML define a estrutura."
      },
      {
        type: "open",
        question: "Qual framework frontend você gostaria de aprender?"
      }
    ]
  },
  {
    id: 13,
    title: "Testes",
    icon: "🌱",
    joke: "Testes? É como pedir pro bug vir BATER NA SUA PORTA! 🚪 Bater mesmo!",
    content: {
      summary: "Testes automatizados garantem que seu código funciona como esperado e continua funcionando depois de mudanças.",
      topics: ["JUnit", "TDD (Test-Driven Development)", "Testes unitários vs integração", "Cobertura de código"]
    },
    questions: [
      {
        type: "mc",
        question: "Qual biblioteca é usada para testes unitários em Java?",
        options: ["JUnit", "Bootstrap", "Redis"],
        correct: 0
      },
      {
        type: "tf",
        question: "TDD significa escrever o teste antes do código de produção.",
        correct: true,
        explanation: "Correto! Test-Driven Development: primeiro o teste falha, depois você faz o código passar."
      },
      {
        type: "open",
        question: "Por que testar seu código é importante?"
      }
    ]
  },
  {
    id: 14,
    title: "Docker",
    icon: "📚",
    joke: "Docker? É tipo um container... mas pro seu código, NÃO pra sapato! 🐳",
    content: {
      summary: "Docker empacota sua aplicação e suas dependências em containers, garantindo que ela rode igual em qualquer ambiente.",
      topics: ["Imagens e containers", "Dockerfile", "docker-compose", "Portabilidade"]
    },
    questions: [
      {
        type: "mc",
        question: "O que é uma imagem Docker?",
        options: ["Um arquivo de foto", "Um molde/template para criar containers", "Um tipo de banco de dados"],
        correct: 1
      },
      {
        type: "tf",
        question: "Um container Docker roda isolado, com suas próprias dependências.",
        correct: true,
        explanation: "Correto! Isso é justamente o que garante 'funciona na minha máquina... e na sua também'."
      },
      {
        type: "open",
        question: "Como você deployaria uma aplicação usando Docker?"
      }
    ]
  },
  {
    id: 15,
    title: "CI/CD",
    icon: "🏗️",
    joke: "CI/CD é tipo uma esteira de fábrica: o código entra bagunçado e sai testado e pronto pra usar! 🏭",
    content: {
      summary: "CI/CD automatiza a integração, testes e entrega do código, reduzindo erros manuais no deploy.",
      topics: ["Integração Contínua (CI)", "Entrega/Deploy Contínuo (CD)", "Pipelines", "GitHub Actions"]
    },
    questions: [
      {
        type: "mc",
        question: "O que significa CI?",
        options: ["Continuous Integration", "Computer Interface", "Code Injection"],
        correct: 0
      },
      {
        type: "tf",
        question: "CI/CD elimina totalmente a necessidade de testes manuais em qualquer cenário.",
        correct: false,
        explanation: "Errado! CI/CD automatiza muito, mas testes exploratórios manuais ainda têm seu valor."
      },
      {
        type: "open",
        question: "Como você automatizaria o deploy de uma aplicação?"
      }
    ]
  },
  {
    id: 16,
    title: "Monitoramento & Logs",
    icon: "💾",
    joke: "Log é tipo o DIÁRIO da sua aplicação! 📔 Sabe o que ela fez o dia inteiro!",
    content: {
      summary: "Monitoramento e logs ajudam a entender o comportamento da aplicação em produção e detectar problemas rapidamente.",
      topics: ["Logs estruturados", "Prometheus e Grafana", "Alertas", "ELK Stack"]
    },
    questions: [
      {
        type: "mc",
        question: "Qual ferramenta é usada para visualizar métricas em dashboards?",
        options: ["Grafana", "JUnit", "Docker Hub"],
        correct: 0
      },
      {
        type: "tf",
        question: "ELK Stack é usado para coletar, armazenar e analisar logs.",
        correct: true,
        explanation: "Correto! Elasticsearch, Logstash e Kibana formam o ELK Stack."
      },
      {
        type: "open",
        question: "Que métrica você monitoraria em uma API de produção?"
      }
    ]
  },
  {
    id: 17,
    title: "Complementos & IA/LLMs",
    icon: "🌐",
    joke: "IA? Agora seu código vai ter INTELIGÊNCIA ARTIFICIAL... e você vai ficar desempregado! 😂 (brincadeira, vai só ficar mais produtivo!)",
    content: {
      summary: "Cache, filas e LLMs são ferramentas complementares que aumentam performance e adicionam inteligência às aplicações modernas.",
      topics: ["Cache (Redis)", "Filas de mensagens", "LLMs e IA generativa", "Integração de IA em APIs"]
    },
    questions: [
      {
        type: "mc",
        question: "Redis é usado principalmente para:",
        options: ["Cache e armazenamento em memória rápido", "Editar imagens", "Compilar código Java"],
        correct: 0
      },
      {
        type: "tf",
        question: "Filas de mensagens ajudam a processar tarefas de forma assíncrona.",
        correct: true,
        explanation: "Correto! Filas desacoplam produtores e consumidores de tarefas, melhorando escalabilidade."
      },
      {
        type: "open",
        question: "Como você usaria IA em um projeto seu?"
      }
    ]
  }
];
