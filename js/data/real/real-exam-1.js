window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["real-1"] = {
  "id": "real-1",
  "title": "Exame Real — Época Normal 2024/2025",
  "type": "real",
  "description": "Transcrição do enunciado real de Análise Forense Digital (ISTEC, CTeSP CiberSegurança, 1º Ano/2º Semestre, Época Normal 2024/2025). As respostas e justificações do Grupo I e os pontos-chave dos Grupos II/III são um apoio de estudo elaborado a partir da sebenta e não uma grelha de correção oficial — confirma sempre com o docente.",
  "groups": [
    {
      "name": "Grupo I — Verdadeiro ou Falso (7 Valores)",
      "instructions": "10 perguntas. Cada pergunta vale 0.7 valores: 0.2 pela classificação V/F e 0.5 pela justificação. Carrega em Verdadeiro ou Falso para ver a justificação de estudo.",
      "type": "vf",
      "items": [
        {
          "q": "O objetivo da informática forense passa pela capacidade de recuperação de ficheiros apagados.",
          "answer": true,
          "justification": "A sebenta lista explicitamente a 'recuperação de ficheiros apagados, encriptados ou corrompidos' entre os objetivos da informática forense — não é o único objetivo (há também procura/identificação de dados, prova de factos e conformidade legal), mas é um dos objetivos centrais explicitamente referidos."
        },
        {
          "q": "A framework DFRWS - Digital Forensics Research Conference apresenta uma lógica de trabalho estruturada em matriz com as funções e respetivas tarefas de baixo nível de especificidade que devem ser realizadas numa investigação.",
          "answer": true,
          "justification": "Corresponde à descrição da sebenta sobre o DFRWS: uma matriz organizada por Funções e Tarefas de baixo nível de especificidade."
        },
        {
          "q": "A análise forense digital é uma série metódica de técnicas e procedimentos para recolher provas com foco em dispositivos de armazenamento.",
          "answer": true,
          "justification": "Alinha-se com a definição da sebenta ('série metódica de técnicas e procedimentos para recolher provas de equipamento informático, em vários dispositivos de armazenamento e/ou suportes digitais'); esta versão da frase simplifica a definição, omitindo 'equipamento informático', mas mantém o essencial correto."
        },
        {
          "q": "O tempo de criação de uma imagem digital forense é inversamente proporcional ao tamanho do dispositivo em análise.",
          "answer": false,
          "justification": "É o oposto: quanto maior o dispositivo (mais dados a copiar bit a bit), mais tempo demora a criação da imagem — a relação é diretamente proporcional ao tamanho, não inversamente proporcional."
        },
        {
          "q": "Em qualquer outro tipo de investigação, no domínio da informática forense deve-se, de uma forma simplista, perante um determinado caso/âmbito de investigação Criminal conseguir responder aos denominados 5W.",
          "answer": true,
          "justification": "A sebenta apresenta o modelo 5W2H (Onde, Quem, O quê, Quando, Porquê + How/Quanto) como as perguntas estruturantes que a investigação deve conseguir responder; o '5W' aqui refere-se a esse mesmo conjunto de perguntas essenciais (Onde, Quem, O quê, Quando, Porquê)."
        },
        {
          "q": "Com uma imagem forense de todo o disco rígido efetuada com FTK Imager irei conseguir recuperar todos os ficheiros que tinha apagado de forma acidental.",
          "answer": false,
          "justification": "A afirmação é absoluta ('todos os ficheiros') — a recuperação de ficheiros apagados depende de estes não terem sido sobrescritos por novos dados e de outros fatores técnicos (sistema de ficheiros, tempo decorrido, etc.), pelo que não há garantia de recuperar 100% dos ficheiros apagados."
        },
        {
          "q": "Depois do Collection de uma evidência o Autopsy é a ferramenta que melhor se ajusta para se utilizar na investigação por keywords e metadados.",
          "answer": false,
          "justification": "O Autopsy é uma plataforma de análise muito mais abrangente do que apenas pesquisa por keywords/metadados — inclui Timeline Analysis, Hash Filtering, Web Artifacts, Data Carving, Multimedia e deteção de Indicators of Compromise; reduzir as suas capacidades a apenas 'keywords e metadados' e afirmá-lo como 'a ferramenta que melhor se ajusta' sem comparação é uma simplificação não sustentada pela sebenta."
        },
        {
          "q": "O Autopsy é uma ferramenta gráfica de suporte e análise de uma investigação, no entanto não permite um trabalho em equipa de investigadores, catalogação de casos e associação de evidências a vários casos.",
          "answer": false,
          "justification": "O Autopsy é conhecido precisamente por suportar a organização e catalogação de casos (permite criar e gerir 'cases', associar dados a investigações), pelo que afirmar que 'não permite' este tipo de trabalho está incorreto."
        },
        {
          "q": "Na análise digital forense o modelo NIST 800-68 é composto por 4 etapas.",
          "answer": false,
          "justification": "A sebenta associa as 4 etapas (identificação, preservação, análise, apresentação das evidências) ao modelo NIST 800-86, não ao NIST 800-68 — a referência ao standard está incorreta nesta afirmação."
        },
        {
          "q": "Durante o transporte de uma prova digital é importante garantir que a identidade da evidência não foi modificada.",
          "answer": true,
          "justification": "Corresponde diretamente à boa prática apresentada na sebenta sobre o transporte de prova digital e está alinhado com o Princípio 4 (Confiável / cadeia de custódia) dos princípios de obtenção da prova."
        }
      ]
    },
    {
      "name": "Grupo II — Desenvolvimento (10 Valores)",
      "instructions": "4 perguntas de desenvolvimento, 2.5 valores cada. Justifica sempre com exemplos sempre que possível.",
      "type": "open",
      "items": [
        {
          "q": "O que são os metadados? Adicionalmente explique para que servem os metadados no contexto da análise forense digital. Apresente um cenário prático em que os metadados foram cruciais para a resolução de um incidente.",
          "points": [
            "Definição: metadados são 'dados sobre os dados' — informação que descreve um ficheiro ou sistema de ficheiros (autor, datas de criação/modificação/acesso, geolocalização, histórico de revisões, etc.), não estando facilmente disponíveis à primeira vista.",
            "Dois tipos: metadados do sistema de ficheiros (ex.: datas MACB geridas pelo NTFS/FAT) e metadados do próprio ficheiro (ex.: propriedades de um documento Office ou dados EXIF de uma imagem).",
            "Utilidade forense: permitem reconstruir a linha temporal de eventos, identificar autoria, detetar alterações/anomalias e correlacionar evidência com o incidente investigado (relaciona-se com o Princípio 'Autêntica').",
            "Cenário prático (referido na sebenta): o caso do BTK Killer (Dennis Rader) — os metadados de um ficheiro Microsoft Word apagado, entregue numa disquete, permitiram à polícia identificar a sua verdadeira identidade, apesar de ele acreditar que a disquete era 'não rastreável'.",
            "Ferramenta de exemplo: o FOCA é referido na sebenta como exemplo prático de exploração de metadados de documentos publicamente disponíveis (OSINT)."
          ]
        },
        {
          "q": "Por que é e para que serve informática forense ou análise forense digital? Detalhe e defina os níveis de preservação e níveis de risco na conservação de uma evidência. Apresente 3 exemplos de possíveis evidências digitais.",
          "points": [
            "Definição/propósito: série metódica de técnicas e procedimentos para recolher, preservar, analisar e apresentar provas de equipamento informático e dispositivos de armazenamento, de forma admissível em tribunal (definições de Kruse & Heiser e Hailey).",
            "Serve para: procurar/identificar dados, recuperar ficheiros apagados/encriptados/corrompidos, provar factos (cível ou criminal), e cumprir requisitos legais de conformidade e privacidade.",
            "Níveis de preservação (modelo Online vs Offline): Online/Volátil = menor controlo (dados podem alterar-se a qualquer momento, ex.: RAM, ligações ativas); Offline/Não volátil = maior controlo (dados persistentes, ex.: disco rígido desligado).",
            "Níveis de risco na conservação: quanto mais volátil a evidência, maior o risco de perda/alteração se não for recolhida rapidamente e com a ordem correta (RAM antes do disco); quanto menos volátil, menor o risco imediato, mas ainda exige cuidados de cadeia de custódia.",
            "3 exemplos de evidência digital (sebenta): e-mails; fotografias/registos de transações em ATM; logs de sistemas ou bases de dados/backups."
          ]
        },
        {
          "q": "No contexto de um ataque, o atacante de forma mais ou menos direta tenta usar técnicas de ocultação de informação. Quais os objetivos da utilização de técnicas de ocultação por parte dos atacantes e como se relacionam com o processo de investigação forense? Qual a relação da esteganografia e da criptografia com a aplicação de técnicas de ocultação de informação por parte dos atacantes?",
          "points": [
            "Objetivo das técnicas anti-forenses/de ocultação: dificultar ou impedir a deteção, atribuição e reconstrução dos factos por parte do investigador — exemplos referidos na sebenta: esteganografia e serviços de comunicação anónima.",
            "Relação com a investigação forense: obrigam o investigador a ir além da análise superficial ('iceberg de dados' — lição 2 do caso Sala de Chá), aplicando técnicas mais profundas de deteção (ex.: análise de anomalias de tamanho/sistema de ficheiros, análise de assinatura de ficheiros, timestomping).",
            "Esteganografia vs criptografia: a criptografia torna a informação ilegível sem a chave (esconde o *conteúdo*), enquanto a esteganografia esconde a própria *existência* da informação, embutindo-a dentro de outro ficheiro (ex.: imagem, áudio) de forma impercetível.",
            "Complementaridade: um atacante pode combinar ambas — cifrar a informação e depois escondê-la dentro de outro ficheiro através de esteganografia, dificultando tanto a deteção como a decifragem.",
            "Desafio para o investigador (Lição 4 do caso Sala de Chá): dados anti-forenses podem ser parciais, corrompidos ou ruidosos, exigindo técnicas adequadas para os recuperar e analisar."
          ]
        },
        {
          "q": "Indique e descreva os princípios essenciais para a obtenção de uma prova digital. Em que formatos digitais poderei criar uma imagem forense, alinhada com os princípios para a obtenção de prova, através da utilização do FTK Imager?",
          "points": [
            "Princípio 1 – Legalidade: a prova deve ser admissível conforme a lei.",
            "Princípio 2 – Autêntica: deve existir uma relação clara entre o indício e o incidente.",
            "Princípio 3 – Completa: deve cobrir o caso na sua totalidade.",
            "Princípio 4 – Confiável: assente numa cadeia de custódia rigorosa.",
            "Princípio 5 – Acreditável: compreensiva e plausível.",
            "Formatos de imagem no FTK Imager: Raw/dd (cópia bit a bit, sem acréscimos/exclusões, sem metadados); SMART (usado sobretudo em Linux, menos popular); E01 (EnCase Forensic Evidence/Image File, formato mais comum); AFF (Advanced Forensic Format, código aberto).",
            "Alinhamento com os princípios: o FTK Imager cumpre o Princípio 4 (Confiável) através da verificação de integridade incorporada, que gera um relatório de hash comparando a evidência antes/depois da criação da imagem."
          ]
        }
      ]
    },
    {
      "name": "Grupo III — Caso de Estudo (3 Valores)",
      "instructions": "Uma empresa hospitalar sofreu um ataque por parte de um grupo hacker que explorou uma vulnerabilidade num servidor exposto. Foram comprometidos ficheiros clínicos, detetada atividade suspeita de exfiltração de dados e identificados vários servidores afetados por ransomware. Os especialistas de segurança conseguiram identificar o dispositivo considerado como paciente/vítima zero, que terá desencadeado o processo de cifragem dos restantes dispositivos e que, no final, também ficou cifrado. Face à gravidade do incidente, o caso foi comunicado às autoridades, que solicitaram a entrega das evidências digitais para realização de uma análise forense.\n\nDescreva: as boas práticas na preservação/recolha do dispositivo paciente/vítima zero; a metodologia completa a aplicar na investigação; a justificação dessa metodologia com base numa framework forense; e as ferramentas/técnicas adequadas a cada fase.",
      "type": "open",
      "items": [
        {
          "q": "Descreva a resposta completa ao caso de estudo do ataque hospitalar (boas práticas de preservação do paciente zero, metodologia, framework e ferramentas por fase).",
          "points": [
            "Boas práticas de preservação do paciente/vítima zero: isolar o dispositivo da rede (evitar mais propagação/exfiltração) sem o desligar se ainda estiver ligado; verificar sinais de processos anti-forenses/apagamento remoto; documentar o estado exato do ecrã e do sistema; aplicar a regra #1 (só equipas autorizadas atuam sobre os dados) e a ordem de volatilidade (RAM antes de disco).",
            "Recolha: criar imagem forense bit a bit do dispositivo (ex.: com FTK Imager, formato E01 ou Raw/dd), calcular hash (MD5/SHA) antes e depois da cópia para garantir integridade, e iniciar de imediato a cadeia de custódia (bag & tag).",
            "Metodologia completa: seguir o modelo NIST 800-86 — Identificação (localizar o paciente zero e demais servidores afetados) > Preservação (imagem forense + hashing + cadeia de custódia) > Análise (exame de logs, timeline, artefactos de rede e memória) > Apresentação (relatório para as autoridades).",
            "Justificação com framework: o DFRWS ou o NIST 800-86 fornecem uma estrutura reprodutível e defensável (Princípio 2 – Autêntica, e Princípio 5 – Acreditável), essencial para que o relatório seja aceite pelas autoridades e, mais tarde, em tribunal.",
            "Ferramentas/técnicas por fase: Identificação — Volatility/Sysinternals para processos e ligações de rede ativas, netscan; Preservação — FTK Imager para imagem forense e hash; Análise — Autopsy (timeline, keyword search, indicadores de compromisso), Wireshark/NetworkMiner para tráfego de exfiltração, análise de registo do Windows (execução de programas: Prefetch/Amcache/Shimcache) para identificar como o ransomware foi executado; Apresentação — relatório estruturado com metodologia, achados e cadeia de custódia documentada.",
            "Nota sobre ransomware: importante identificar o vetor de exploração inicial (vulnerabilidade no servidor exposto) e correlacionar timestamps (MACB) entre servidores para reconstruir a linha temporal da cifragem em cascata a partir do paciente zero."
          ]
        }
      ]
    }
  ]
};
