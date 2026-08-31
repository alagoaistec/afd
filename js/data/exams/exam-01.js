window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["exam-01"] = {
  "id": "exam-01",
  "title": "Fundamentos da Análise Forense Digital",
  "topic": "Fundamentos",
  "type": "mcq",
  "questions": [
    {
      "q": "Qual das seguintes é a definição mais correta de informática forense (computer forensics)?",
      "options": [
        "Uma série metódica de técnicas e procedimentos para recolher provas de equipamento informático e dispositivos de armazenamento, apresentáveis em tribunal de forma coerente",
        "Um conjunto de ferramentas antivírus usadas para limpar sistemas infetados",
        "O processo de instalar sistemas operativos em máquinas apreendidas",
        "Uma técnica de backup automático de servidores empresariais"
      ],
      "correct": 0,
      "exp": [
        "Correto — é exatamente a definição dada na sebenta: técnicas e procedimentos metódicos para recolher provas apresentáveis num processo legal.",
        "Errado — antivírus não têm relação com a definição de informática forense; forense é sobre recolha e análise de prova, não remoção de malware.",
        "Errado — instalar sistemas operativos destruiria a evidência original; a forense digital preocupa-se precisamente com preservar o estado original.",
        "Errado — backups são cópias de rotina, não seguem os princípios de cadeia de custódia e integridade exigidos numa investigação forense."
      ]
    },
    {
      "q": "Qual é a sequência correta das fases de um processo de informática forense apresentada na sebenta?",
      "options": [
        "Collection > Preparation > Analysis > Examination > Reporting",
        "Preparation > Collection > Examination > Analysis > Reporting",
        "Analysis > Collection > Preparation > Reporting > Examination",
        "Reporting > Preparation > Collection > Examination > Analysis"
      ],
      "correct": 1,
      "exp": [
        "Errado — a preparação tem de ocorrer antes da recolha, nunca depois.",
        "Correto — Preparation > Collection > Examination > Analysis > Reporting é a sequência apresentada na definição de computer forensics.",
        "Errado — a análise só pode ocorrer depois da recolha e do exame dos dados, não no início.",
        "Errado — o relatório é sempre a última fase, nunca a primeira."
      ]
    },
    {
      "q": "Segundo a sebenta, em que ano foi relatado o primeiro crime informático, dando origem à lei dos computadores da Florida?",
      "options": [
        "1965",
        "1978",
        "1995",
        "2001"
      ],
      "correct": 1,
      "exp": [
        "Errado — em 1965 a informática ainda não tinha enquadramento legal específico para crimes informáticos.",
        "Correto — 1978 é o ano indicado na sebenta para o primeiro crime informático relatado, associado à lei da Florida.",
        "Errado — nos anos 90 é que o termo 'ciência forense digital' se tornou reconhecido, mas o primeiro crime é anterior.",
        "Errado — no início do século XXI surgiram as políticas nacionais, mas o primeiro crime relatado é de 1978."
      ]
    },
    {
      "q": "Só nos anos 90 é que a análise forense digital se tornou um termo reconhecido. Quando surgiram as primeiras políticas nacionais sobre a matéria?",
      "options": [
        "Ainda na década de 1970",
        "Durante a década de 1980",
        "No início do século XXI",
        "Nunca chegaram a existir políticas nacionais"
      ],
      "correct": 2,
      "exp": [
        "Errado — nos anos 70 nem sequer o termo era usado.",
        "Errado — nos anos 80 o conceito ainda não existia formalmente.",
        "Correto — a sebenta indica que só no início do século XXI surgiram políticas nacionais sobre análise forense digital.",
        "Errado — a sebenta refere explicitamente o surgimento dessas políticas no início do século XXI."
      ]
    },
    {
      "q": "O que representa o modelo '5W2H' aplicado a uma investigação forense digital?",
      "options": [
        "Um conjunto de algoritmos de encriptação usados na aquisição de imagens",
        "Uma checklist de hardware necessário para montar um laboratório forense",
        "Perguntas estruturantes (o quê, quem, onde, quando, porquê, como, quanto) para responder ao âmbito de uma investigação",
        "Um standard de formatação de discos rígidos antes da análise"
      ],
      "correct": 2,
      "exp": [
        "Errado — não tem relação com algoritmos de encriptação.",
        "Errado — não é uma checklist de hardware, mas um modelo de perguntas de investigação.",
        "Correto — de forma simplista, o investigador deve conseguir responder às perguntas denominadas 5W2H perante um caso/âmbito de investigação criminal.",
        "Errado — formatar um disco destruiria a evidência, o que viola os princípios forenses."
      ]
    },
    {
      "q": "Nos modelos de preservação de evidência apresentados na sebenta, o que caracteriza o estado 'Online / Volátil'?",
      "options": [
        "Maior controlo sobre a evidência",
        "Menor controlo sobre a evidência",
        "Impossibilidade total de recolha de dados",
        "Ausência de necessidade de cadeia de custódia"
      ],
      "correct": 1,
      "exp": [
        "Errado — é o estado 'Offline / Não Volátil' que está associado a maior (+) controlo.",
        "Correto — 'Online / Volátil' está associado a menor (-) controlo, uma vez que os dados podem alterar-se ou perder-se a qualquer momento.",
        "Errado — ainda é possível recolher dados voláteis (ex.: memória RAM), só que com mais risco e menos controlo.",
        "Errado — a cadeia de custódia é sempre necessária, independentemente da volatilidade da evidência."
      ]
    },
    {
      "q": "Segundo Warren G. Kruse II & Jay G. Heiser, a Análise Forense Digital corresponde a:",
      "options": [
        "Apenas à recuperação de ficheiros apagados de um disco rígido",
        "Aquisição, preservação, identificação, extração, restauração, análise e documentação de evidências computacionais",
        "Um serviço comercial de backup em cloud para empresas",
        "A instalação de firewalls e sistemas de deteção de intrusão"
      ],
      "correct": 1,
      "exp": [
        "Errado — a recuperação de ficheiros é apenas uma parte, a definição destes autores é bem mais abrangente.",
        "Correto — esta é literalmente a definição citada na sebenta, atribuída a Warren G. Kruse II & Jay G. Heiser.",
        "Errado — backup em cloud não corresponde à definição de análise forense digital.",
        "Errado — firewalls e IDS são mecanismos de segurança preventivos, não de investigação forense."
      ]
    },
    {
      "q": "Segundo Steve Hailey (Cybersecurity Institute), a definição de análise forense digital inclui explicitamente:",
      "options": [
        "A criação de novos algoritmos de hash",
        "A preservação, identificação, coleta, interpretação e documentação de evidências, incluindo regras de evidência e processo legal",
        "A monitorização em tempo real de tráfego de rede apenas",
        "A gestão de patches de segurança em servidores"
      ],
      "correct": 1,
      "exp": [
        "Errado — não tem relação com a criação de algoritmos de hash.",
        "Correto — Hailey enfatiza a preservação, identificação, coleta, interpretação e documentação, incluindo as regras de evidência e o processo legal.",
        "Errado — a definição de Hailey é mais ampla do que só monitorização de rede.",
        "Errado — gestão de patches é uma atividade de segurança operacional, não de análise forense."
      ]
    },
    {
      "q": "Qual das seguintes NÃO é apontada na sebenta como um desafio da análise forense digital?",
      "options": [
        "Falta de standards e diversidade tecnológica",
        "Volume de armazenamento e utilização de criptografia/anonimização",
        "Legislação e computação em cloud",
        "Excesso de investigadores certificados disponíveis no mercado"
      ],
      "correct": 3,
      "exp": [
        "Errado como resposta pedida — a falta de standards é, de facto, um desafio real referido na sebenta.",
        "Errado como resposta pedida — armazenamento, anonimização e criptografia são desafios explicitamente listados.",
        "Errado como resposta pedida — legislação e cloud são desafios explicitamente listados na sebenta.",
        "Correto — a sebenta nunca refere 'excesso de investigadores' como desafio; pelo contrário, refere falta de treino de excelência e de padronização."
      ]
    },
    {
      "q": "A sebenta refere que a informática forense é, em certa medida, 'mais uma arte do que ciência'. Isto deve-se principalmente a:",
      "options": [
        "Não existir padronização das ferramentas nem das técnicas",
        "Não ser possível usar computadores para investigar crimes",
        "Ser proibida a utilização de ferramentas open source",
        "Os investigadores nunca precisarem de formação técnica"
      ],
      "correct": 0,
      "exp": [
        "Correto — a falta de padronização de ferramentas e a necessidade de treino de excelência tornam a prática mais próxima de uma arte do que de uma ciência exata.",
        "Errado — obviamente computadores são usados, é precisamente o objeto de estudo.",
        "Errado — ferramentas open source como Autopsy e Volatility são amplamente usadas e recomendadas.",
        "Errado — a sebenta sublinha exatamente o oposto: é necessário treino de excelência."
      ]
    },
    {
      "q": "James Borek compara a informática forense computacional a:",
      "options": [
        "Um levantamento na cena de um crime ou a autópsia da vítima",
        "Uma simples auditoria financeira anual",
        "Um teste de penetração automatizado",
        "Um processo de certificação ISO 27001"
      ],
      "correct": 0,
      "exp": [
        "Correto — a citação de James Borek referida na sebenta equipara a informática forense ao levantamento numa cena de crime ou à autópsia da vítima.",
        "Errado — a citação não faz qualquer referência a auditorias financeiras.",
        "Errado — não se trata de pentesting automatizado, mas de investigação após um incidente.",
        "Errado — não é sobre certificação de normas de gestão de segurança."
      ]
    },
    {
      "q": "No contexto da recuperação de dados em análise forense, qual a diferença entre nível físico e nível lógico?",
      "options": [
        "Não existe diferença, são sinónimos",
        "O nível físico recupera dados de setores danificados do disco; o nível lógico recupera ficheiros apagados ou danificados",
        "O nível físico só funciona em smartphones; o nível lógico só em discos rígidos",
        "O nível lógico exige sempre destruir o disco original"
      ],
      "correct": 1,
      "exp": [
        "Errado — são conceitos distintos com técnicas diferentes.",
        "Correto — a recuperação a nível físico foca setores danificados/defeituosos; a nível lógico foca ficheiros apagados ou corrompidos no sistema de ficheiros.",
        "Errado — ambos os níveis podem aplicar-se a diferentes tipos de dispositivos de armazenamento.",
        "Errado — nenhuma técnica forense legítima exige destruir a evidência original."
      ]
    },
    {
      "q": "Na análise de ficheiros como técnica de análise forense digital, que tipo de informação pode ser extraída dos metadados de uma imagem?",
      "options": [
        "Apenas o tamanho do ficheiro em bytes",
        "Data e hora de criação/modificação/acesso e informação de geolocalização",
        "O número de vezes que o ficheiro foi partilhado por email",
        "O nome do fabricante do disco rígido onde está guardado"
      ],
      "correct": 1,
      "exp": [
        "Errado — o tamanho é apenas um atributo básico, não o foco da análise de metadados referida na sebenta.",
        "Correto — a sebenta refere explicitamente datas de criação/modificação/acesso e geolocalização em ficheiros de imagem e vídeo.",
        "Errado — o número de partilhas por email não é, por norma, um metadado do próprio ficheiro.",
        "Errado — o fabricante do disco não é um metadado do ficheiro em si."
      ]
    },
    {
      "q": "A preservação de evidências digitais, segundo a sebenta, deve envolver principalmente:",
      "options": [
        "A eliminação de cópias redundantes para poupar espaço",
        "A criação de uma cópia bit a bit e o uso de técnicas de criptografia para proteger a evidência",
        "A publicação imediata dos dados online para transparência",
        "A conversão de todos os ficheiros para formato PDF"
      ],
      "correct": 1,
      "exp": [
        "Errado — eliminar cópias vai contra o princípio de preservação da evidência.",
        "Correto — a sebenta indica a criação de uma cópia bit a bit do dispositivo e a utilização de criptografia para proteger a evidência.",
        "Errado — publicar dados sensíveis online viola confidencialidade e cadeia de custódia.",
        "Errado — converter ficheiros altera-os e pode destruir metadados relevantes."
      ]
    },
    {
      "q": "Segundo a Lei do CiberCrime referida na sebenta, para que um ato seja considerado cibercrime este tem de ser:",
      "options": [
        "Sempre acidental",
        "Intencional e não acidental, com meios tecnológicos essenciais à prática do crime",
        "Cometido apenas por menores de idade",
        "Praticado exclusivamente contra instituições bancárias"
      ],
      "correct": 1,
      "exp": [
        "Errado — a sebenta é explícita: o ato deve ser intencional e não acidental.",
        "Correto — CiberCrime corresponde a factos previstos na Lei do CiberCrime em que os meios tecnológicos são essenciais à prática do crime, de forma intencional.",
        "Errado — não há restrição de idade na definição.",
        "Errado — pode ter como alvo pessoas, propriedade ou governos, não só bancos."
      ]
    },
    {
      "q": "Quais são os três aspetos fundamentais de um cibercrime referidos na sebenta?",
      "options": [
        "Ferramentas usadas no crime, alvo do crime e linha do tempo",
        "Cor do dispositivo, marca do computador e sistema operativo",
        "Localização GPS, idade da vítima e hora do dia",
        "Preço do equipamento, garantia e fabricante"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica ferramentas usadas no crime, alvo do crime e linha do tempo como aspetos fundamentais.",
        "Errado — cor ou marca do dispositivo não são aspetos forenses relevantes.",
        "Errado — a idade da vítima ou a hora não são, por si só, os aspetos fundamentais listados.",
        "Errado — o preço do equipamento é irrelevante para a investigação forense."
      ]
    },
    {
      "q": "Qual destas NÃO é apresentada na sebenta como uma motivação típica para cometer cibercrime?",
      "options": [
        "Testes ou aprendizagem prática por script kiddies",
        "Vingança ou outras razões maliciosas",
        "Espionagem corporativa ou governamental",
        "Obrigação contratual imposta por um empregador legítimo"
      ],
      "correct": 3,
      "exp": [
        "Errado como resposta pedida — script kiddies a testar/aprender é uma motivação listada na sebenta.",
        "Errado como resposta pedida — vingança é explicitamente referida como motivação.",
        "Errado como resposta pedida — espionagem corporativa/governamental é explicitamente referida.",
        "Correto — a sebenta não refere 'obrigação contratual de um empregador legítimo' como motivação para cibercrime; isso seria uma atividade legal, não um crime."
      ]
    },
    {
      "q": "O objetivo da investigação forense digital, segundo a sebenta, é essencialmente:",
      "options": [
        "Provar sempre a culpa do suspeito",
        "Explicar o estado atual de um artefacto digital",
        "Apagar todos os vestígios de um incidente",
        "Vender os dados encontrados a terceiros"
      ],
      "correct": 1,
      "exp": [
        "Errado — o investigador não tenta provar culpa a priori; isso é papel do tribunal, como o caso de estudo 'Sala de Chá' também ilustra.",
        "Correto — a sebenta afirma que o objetivo da investigação forense digital é explicar o estado atual de um artefacto digital.",
        "Errado — apagar vestígios seria destruição de prova, o oposto do objetivo forense.",
        "Errado — vender dados violaria confidencialidade e ética profissional do investigador."
      ]
    },
    {
      "q": "Em relação à conduta do investigador forense, a sebenta destaca principalmente:",
      "options": [
        "A necessidade de divulgar publicamente todos os casos investigados",
        "A integridade ética e moral e a confidencialidade como características essenciais",
        "A obrigatoriedade de trabalhar sempre sozinho, sem supervisão",
        "A prioridade de velocidade sobre qualquer outro critério"
      ],
      "correct": 1,
      "exp": [
        "Errado — pelo contrário, a discussão de detalhes só deve ocorrer com pessoas autorizadas.",
        "Correto — a sebenta destaca que o profissional deve demonstrar o mais alto nível de integridade ética/moral, sendo a confidencialidade essencial.",
        "Errado — não há essa exigência; aliás, equipas e laboratórios organizados são recomendados.",
        "Errado — a credibilidade da investigação depende do rigor, não apenas da velocidade."
      ]
    },
    {
      "q": "Um exemplo de evidência digital referido explicitamente na sebenta inclui:",
      "options": [
        "Apenas fotografias impressas em papel",
        "E-mails, registos de transações em ATM, logs de sistemas e bases de dados",
        "Exclusivamente conversas presenciais gravadas em áudio analógico",
        "Apenas cartas manuscritas"
      ],
      "correct": 1,
      "exp": [
        "Errado — fotografias impressas não são evidência digital.",
        "Correto — a sebenta lista e-mails, fotografias digitais, registos de transações em ATM, logs de sistemas, bases de dados, backups e dados de comunicações.",
        "Errado — áudio analógico não se enquadra em 'formato digital'.",
        "Errado — cartas manuscritas são evidência física/documental, não digital."
      ]
    }
  ]
};
