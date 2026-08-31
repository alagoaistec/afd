window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["exam-20"] = {
  "id": "exam-20",
  "title": "Simulado Final — Revisão Geral",
  "topic": "Simulado Geral",
  "type": "mcq",
  "questions": [
    {
      "q": "Qual das seguintes é a definição mais correta de análise forense digital, combinando os elementos centrais apresentados ao longo da sebenta?",
      "options": [
        "Uma série metódica de técnicas e procedimentos para recolher, preservar, analisar e documentar evidências digitais de forma admissível em tribunal",
        "Um processo de instalação de sistemas operativos em servidores",
        "Um serviço de reparação de hardware danificado",
        "Um conjunto de técnicas de marketing digital"
      ],
      "correct": 0,
      "exp": [
        "Correto — esta é a síntese central das várias definições apresentadas na sebenta (Kruse & Heiser, Hailey, definição genérica de computer forensics).",
        "Errado — instalar sistemas operativos destruiria a evidência original.",
        "Errado — não tem relação com reparação de hardware.",
        "Errado — não tem relação com marketing digital."
      ]
    },
    {
      "q": "Quantas etapas compõem o modelo NIST 800-86 apresentado na sebenta?",
      "options": [
        "4",
        "6",
        "8",
        "10"
      ],
      "correct": 0,
      "exp": [
        "Correto — o NIST 800-86 é composto por 4 etapas: identificação, preservação, análise e apresentação das evidências.",
        "Errado — não corresponde ao número correto de etapas.",
        "Errado — não corresponde ao número correto de etapas.",
        "Errado — não corresponde ao número correto de etapas."
      ]
    },
    {
      "q": "Qual formato de imagem forense é uma cópia bit a bit sem acréscimos/exclusões e sem metadados, segundo a sebenta?",
      "options": [
        "Raw (dd)",
        "E01",
        "AFF",
        "SMART"
      ],
      "correct": 0,
      "exp": [
        "Correto — o formato Raw (dd) é definido como cópia bit a bit sem acréscimos/exclusões e sem metadados.",
        "Errado — o E01 (EnCase) é diferente e mais comum atualmente, mas não é a descrição correta pedida.",
        "Errado — o AFF é um formato de código aberto, mas não corresponde à descrição pedida.",
        "Errado — o SMART é usado sobretudo em Linux, não corresponde à descrição pedida."
      ]
    },
    {
      "q": "Qual é a principal desvantagem da criptografia assimétrica face à simétrica?",
      "options": [
        "O desempenho — é muito mais lenta",
        "Não pode ser usada para autenticação",
        "Nunca pode ser combinada com hash",
        "Não existe qualquer desvantagem"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica que a principal desvantagem da criptografia assimétrica é o desempenho, sendo muito mais lenta que a simétrica.",
        "Errado — a criptografia assimétrica é precisamente vantajosa para autenticação e não repúdio.",
        "Errado — a sebenta indica que para garantir integridade se usa o par de chaves em conjunto com hash.",
        "Errado — a desvantagem do desempenho é explicitamente referida na sebenta."
      ]
    },
    {
      "q": "Segundo a ordem de volatilidade, qual componente deve ser recolhido primeiro, quando o sistema está ligado?",
      "options": [
        "Memória RAM",
        "Disco rígido",
        "DVD gravado",
        "Backup em fita magnética arquivada"
      ],
      "correct": 0,
      "exp": [
        "Correto — a memória RAM é o componente mais volátil e deve ser recolhida em primeiro lugar quando o sistema está ligado.",
        "Errado — o disco rígido é menos volátil e deve ser recolhido depois da RAM.",
        "Errado — um DVD gravado é um meio não volátil, de baixa prioridade nesta ordem.",
        "Errado — um backup arquivado é o meio menos volátil de todos os listados."
      ]
    },
    {
      "q": "Qual é o princípio dos 5 princípios de obtenção da prova diretamente associado à cadeia de custódia?",
      "options": [
        "Princípio 4 – Confiável",
        "Princípio 1 – Legalidade",
        "Princípio 2 – Autêntica",
        "Princípio 5 – Acreditável"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Princípio 4, Confiável, está diretamente associado à cadeia de custódia, segundo a sebenta.",
        "Errado — o Princípio 1 refere-se à admissibilidade legal, não diretamente à cadeia de custódia.",
        "Errado — o Princípio 2 refere-se à relação entre indício e incidente.",
        "Errado — o Princípio 5 refere-se a ser compreensiva e plausível."
      ]
    },
    {
      "q": "Que ferramenta é descrita na sebenta como solução de investigação de disco rígido rápida, completa e eficiente, com interface gráfica?",
      "options": [
        "Autopsy",
        "Volatility",
        "certutil",
        "Notepad"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Autopsy é descrito como solução de investigação de disco rígido rápida, completa e eficiente.",
        "Errado — o Volatility é uma ferramenta de análise de memória, não de disco.",
        "Errado — o certutil é um comando de linha para calcular hashes, não uma ferramenta gráfica de investigação de disco.",
        "Errado — o Notepad é um editor de texto simples, sem função forense."
      ]
    },
    {
      "q": "Que comando do Volatility exibe informações básicas sobre a imagem de memória analisada?",
      "options": [
        "imageinfo",
        "pslist",
        "netscan",
        "dumpfiles"
      ],
      "correct": 0,
      "exp": [
        "Correto — 'imageinfo' exibe informações básicas sobre a imagem de memória.",
        "Errado — 'pslist' lista processos em execução, não informação geral da imagem.",
        "Errado — 'netscan' analisa ligações de rede ativas, não informação geral da imagem.",
        "Errado — 'dumpfiles' extrai arquivos da memória, não mostra informação geral da imagem."
      ]
    },
    {
      "q": "Qual artefacto do registo do Windows regista programas lançados a partir da janela 'Executar' (Run)?",
      "options": [
        "RunMRU",
        "ShellBags",
        "Recycle Bin",
        "Amcache"
      ],
      "correct": 0,
      "exp": [
        "Correto — a chave RunMRU regista programas lançados a partir da janela Run.",
        "Errado — os ShellBags registam pastas navegadas no Explorador, não execuções via Run.",
        "Errado — a Reciclagem regista ficheiros eliminados, não execuções via Run.",
        "Errado — o Amcache regista execução de aplicações de forma mais ampla, mas não é especificamente a chave associada à janela Run."
      ]
    },
    {
      "q": "Qual é o objetivo essencial da investigação forense digital, segundo a sebenta?",
      "options": [
        "Explicar o estado atual de um artefacto digital",
        "Provar sempre a culpa do suspeito",
        "Apagar vestígios de um incidente",
        "Vender dados a terceiros"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta afirma que o objetivo da investigação forense digital é explicar o estado atual de um artefacto digital.",
        "Errado — cabe ao tribunal decidir a culpa, não ao investigador, como ilustrado no caso 'Sala de Chá'.",
        "Errado — apagar vestígios contraria completamente os princípios forenses.",
        "Errado — vender dados violaria confidencialidade e ética profissional."
      ]
    },
    {
      "q": "Segundo a sebenta, qual é a fórmula apresentada para Ameaça/Crime?",
      "options": [
        "Vontade + Capacidade + Oportunidade",
        "Dinheiro + Tempo + Sorte",
        "Lei + Polícia + Juiz",
        "Hardware + Software + Rede"
      ],
      "correct": 0,
      "exp": [
        "Correto — a fórmula apresentada é Ameaça/Crime = Vontade + Capacidade + Oportunidade.",
        "Errado — não corresponde à fórmula apresentada na sebenta.",
        "Errado — não corresponde à fórmula apresentada na sebenta.",
        "Errado — não corresponde à fórmula apresentada na sebenta."
      ]
    },
    {
      "q": "Que ficheiro do registo (hive) contém informação sobre as contas de utilizador locais (SAM)?",
      "options": [
        "C:\\Windows\\system32\\config\\sam",
        "C:\\Windows\\system32\\config\\software",
        "C:\\Windows\\Fonts",
        "C:\\Program Files"
      ],
      "correct": 0,
      "exp": [
        "Correto — o hive SAM, com informação de contas de utilizador locais, está em C:\\Windows\\system32\\config\\sam.",
        "Errado — esse é o caminho do hive SOFTWARE, não do SAM.",
        "Errado — a pasta de Fontes não tem relação com o registo.",
        "Errado — Program Files contém programas instalados, não hives do registo."
      ]
    },
    {
      "q": "Qual das seguintes é uma boa prática expressa na regra #4 da sebenta sobre obtenção de prova?",
      "options": [
        "Documentar, documentar, documentar",
        "Apagar tudo rapidamente",
        "Ignorar a cadeia de custódia",
        "Trabalhar sempre sem qualquer supervisão"
      ],
      "correct": 0,
      "exp": [
        "Correto — a regra #4 é 'Documentar Documentar documentar', enfatizando a importância crítica da documentação.",
        "Errado — apagar dados contraria completamente os princípios forenses.",
        "Errado — a cadeia de custódia é indispensável, nunca deve ser ignorada.",
        "Errado — a regra #1 exige que apenas equipas autorizadas/acreditadas atuem sobre os dados."
      ]
    },
    {
      "q": "Qual algoritmo de hash é apontado na sebenta como tendo sofrido um ataque de colisão demonstrado publicamente em shattered.io?",
      "options": [
        "SHA-1",
        "AES-256",
        "RSA-2048",
        "DES"
      ],
      "correct": 0,
      "exp": [
        "Correto — o SHA-1 é o algoritmo cujas limitações (colisões) são ilustradas pelo exemplo shattered.io na sebenta.",
        "Errado — o AES-256 é um algoritmo de cifragem simétrica, não de hash, e não é o referido neste exemplo.",
        "Errado — o RSA é um algoritmo de criptografia assimétrica, não de hash, e não é o referido neste exemplo.",
        "Errado — o DES é um algoritmo de cifragem simétrica, não de hash, e não é o referido neste exemplo."
      ]
    },
    {
      "q": "Qual foi o elemento decisivo que revelou a identidade do BTK Killer (Dennis Rader)?",
      "options": [
        "Metadados de um ficheiro Word apagado, entregue numa disquete",
        "Uma confissão espontânea em direto na televisão",
        "Impressões digitais na cena do crime",
        "Um erro de digitação numa carta manuscrita"
      ],
      "correct": 0,
      "exp": [
        "Correto — os metadados de um ficheiro Word apagado, contido numa disquete, revelaram a verdadeira identidade de Dennis Rader.",
        "Errado — não houve confissão espontânea em televisão neste caso.",
        "Errado — não foram impressões digitais físicas que resolveram o caso.",
        "Errado — não foi um erro de digitação manuscrita, mas sim metadados digitais."
      ]
    },
    {
      "q": "Qual é o significado da sigla DFRWS, uma das frameworks de investigação apresentadas na sebenta?",
      "options": [
        "Digital Forensics Research (Workshop/Conference)",
        "Data File Recovery Web Server",
        "Digital Firewall Restoration Web Service",
        "Data Forensics Rapid Wireless Scan"
      ],
      "correct": 0,
      "exp": [
        "Correto — DFRWS corresponde a Digital Forensics Research Workshop/Conference.",
        "Errado — não é o significado real da sigla.",
        "Errado — não é o significado real da sigla.",
        "Errado — não é o significado real da sigla."
      ]
    },
    {
      "q": "Qual das seguintes ferramentas é usada especificamente para pesquisar metadados de documentos publicamente disponíveis online?",
      "options": [
        "FOCA",
        "Volatility",
        "certutil",
        "Autopsy"
      ],
      "correct": 0,
      "exp": [
        "Correto — o FOCA é a ferramenta referida na sebenta para explorar metadados de documentos publicamente disponíveis, muito usada em OSINT.",
        "Errado — o Volatility é uma ferramenta de análise de memória.",
        "Errado — o certutil é um comando de cálculo de hash, não de extração de metadados de OSINT.",
        "Errado — o Autopsy é uma plataforma de investigação de disco, não especializada em OSINT de metadados."
      ]
    },
    {
      "q": "Qual das seguintes é uma das três subpartes principais da Cloud Forensics referidas na sebenta?",
      "options": [
        "Legal",
        "Musical",
        "Culinária",
        "Desportiva"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica Técnica, Organizacional e Legal como as três subpartes principais da Cloud Forensics.",
        "Errado — não tem qualquer relação com a categorização apresentada.",
        "Errado — não tem qualquer relação com a categorização apresentada.",
        "Errado — não tem qualquer relação com a categorização apresentada."
      ]
    },
    {
      "q": "Segundo o SANS Poster, ao aceder simplesmente a um ficheiro (sem o modificar) em NTFS no Windows 7 ou superior, o timestamp de Access é tipicamente:",
      "options": [
        "Sem alteração (No Change)",
        "Sempre atualizado para o momento do acesso",
        "Sempre apagado",
        "Convertido automaticamente para UTC-12"
      ],
      "correct": 0,
      "exp": [
        "Correto — a partir do Windows 7 em NTFS, o simples acesso tipicamente não altera o timestamp de Access, devido a uma mudança no comportamento padrão do sistema de ficheiros.",
        "Errado — esse era o comportamento em versões mais antigas, não o padrão a partir do Windows 7.",
        "Errado — o timestamp não é apagado, apenas mantém o valor anterior.",
        "Errado — não há conversão automática de fuso horário associada a este comportamento."
      ]
    },
    {
      "q": "Segundo as guidelines da INTERPOL, se um computador estiver LIGADO na cena, qual é a orientação geral?",
      "options": [
        "Não desligar, isolar da rede e verificar sistemas anti-forenses antes de agir",
        "Desligar sempre imediatamente, sem exceções",
        "Reiniciar para confirmar que está a funcionar",
        "Ignorar completamente o dispositivo"
      ],
      "correct": 0,
      "exp": [
        "Correto — as guidelines recomendam não desligar, isolar da rede e verificar sistemas anti-forenses (apagamento remoto/local) antes de qualquer outra ação.",
        "Errado — desligar imediatamente sem preservar dados voláteis contraria a ordem de volatilidade e a orientação da guideline.",
        "Errado — reiniciar alteraria e potencialmente destruiria evidência volátil crítica.",
        "Errado — ignorar um dispositivo ligado relevante comprometeria a completude da investigação."
      ]
    }
  ]
};
