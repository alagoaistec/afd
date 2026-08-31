window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["real-2"] = {
  "id": "real-2",
  "title": "Exame Real — Recuperação 2024/2025",
  "type": "real",
  "description": "Transcrição do enunciado real de Análise Forense Digital (ISTEC, CTeSP CiberSegurança, 1º Ano/2º Semestre, Recuperação 2024/2025). As respostas e justificações do Grupo I e os pontos-chave dos Grupos II/III são um apoio de estudo elaborado a partir da sebenta e não uma grelha de correção oficial — confirma sempre com o docente.",
  "groups": [
    {
      "name": "Grupo I — Verdadeiro ou Falso (7 Valores)",
      "instructions": "10 perguntas. Cada pergunta vale 0.7 valores: 0.2 pela classificação V/F e 0.5 pela justificação. Carrega em Verdadeiro ou Falso para ver a justificação de estudo.",
      "type": "vf",
      "items": [
        {
          "q": "A análise forense digital é uma série metódica de técnicas e procedimentos para recolher provas com foco em equipamento informático e em vários dispositivos de armazenamento.",
          "answer": true,
          "justification": "Corresponde quase textualmente à definição de computer forensics apresentada na sebenta: 'série metódica de técnicas e procedimentos para recolher provas de equipamento informático, em vários dispositivos de armazenamento e/ou suportes digitais'."
        },
        {
          "q": "O objetivo da informática forense passa pela capacidade de recuperação de ficheiros apagados.",
          "answer": true,
          "justification": "A recuperação de ficheiros apagados, encriptados ou corrompidos é um dos objetivos explicitamente listados na sebenta para a informática forense (entre outros, como identificar dados e provar factos)."
        },
        {
          "q": "O tempo de criação de uma imagem digital forense é inversamente proporcional ao tamanho do dispositivo em análise.",
          "answer": false,
          "justification": "É diretamente proporcional: quanto maior o dispositivo a copiar bit a bit, mais tempo demora a criação da imagem forense — não o inverso."
        },
        {
          "q": "Em qualquer outro tipo de investigação, no domínio da informática forense deve-se, de uma forma simplista, perante um determinado caso/âmbito de investigação Criminal conseguir responder aos denominados 5W.",
          "answer": true,
          "justification": "O modelo 5W2H da sebenta (Onde, Quem, O quê, Quando, Porquê + Como/Quanto) inclui precisamente estas cinco perguntas essenciais ('5W') que qualquer investigação deve conseguir responder."
        },
        {
          "q": "Na análise digital forense o modelo NIST 800-86 é composto por 6 etapas.",
          "answer": false,
          "justification": "O modelo NIST 800-86 apresentado na sebenta é composto por 4 etapas: identificação, preservação, análise e apresentação das evidências — não 6."
        },
        {
          "q": "Durante o transporte de uma prova digital é importante garantir que a identidade da evidência não foi modificada.",
          "answer": true,
          "justification": "É uma boa prática explícita da sebenta e está diretamente relacionada com o Princípio 4 (Confiável) dos princípios de obtenção da prova, associado à cadeia de custódia."
        },
        {
          "q": "Com uma imagem forense de todo o disco rígido efetuada com FTK Imager irei conseguir recuperar todos os ficheiros que tinha apagado de forma acidental.",
          "answer": false,
          "justification": "A afirmação usa o absoluto 'todos os ficheiros' — a recuperação de ficheiros apagados depende de não terem sido sobrescritos e de outros fatores técnicos, não sendo por isso garantida a 100%."
        },
        {
          "q": "Depois do Collection de uma evidência o Autopsy é a ferramenta que melhor se ajusta para se utilizar na investigação por keywords e metadados.",
          "answer": false,
          "justification": "O Autopsy oferece muito mais do que pesquisa por keywords/metadados (Timeline Analysis, Hash Filtering, Data Carving, Web Artifacts, IOCs, etc.); apresentá-lo apenas por essa capacidade e como 'a melhor' sem qualquer comparação é uma simplificação não sustentada."
        },
        {
          "q": "A framework DFRWS - Digital Forensics Research Conference apresenta uma lógica de trabalho estruturada em matriz com as funções e respetivas tarefas de baixo nível de especificidade que devem ser realizadas numa investigação.",
          "answer": true,
          "justification": "Corresponde exatamente à descrição da framework DFRWS apresentada na sebenta: matriz organizada por Funções e Tarefas."
        },
        {
          "q": "O Autopsy é uma ferramenta gráfica de suporte e análise de uma investigação, no entanto não permite um trabalho em equipa de investigadores, catalogação de casos e associação de evidências a vários casos.",
          "answer": false,
          "justification": "O Autopsy suporta precisamente a organização e gestão de casos de investigação; afirmar que 'não permite' este tipo de trabalho contraria as suas capacidades reais."
        }
      ]
    },
    {
      "name": "Grupo II — Desenvolvimento (10 Valores)",
      "instructions": "4 perguntas de desenvolvimento, 2.5 valores cada. Justifica sempre com exemplos sempre que possível.",
      "type": "open",
      "items": [
        {
          "q": "Por que é e para que serve informática forense ou análise forense digital? Detalhe e defina os níveis de preservação e níveis de risco na conservação de uma evidência. Apresente 3 exemplos de possíveis evidências digitais.",
          "points": [
            "Definição/propósito: série metódica de técnicas e procedimentos para recolher, preservar, analisar e apresentar provas de equipamento informático e dispositivos de armazenamento de forma admissível em tribunal.",
            "Serve para: procurar/identificar dados num computador, recuperar ficheiros apagados/encriptados/corrompidos, provar factos e cumprir princípios de conformidade legal/privacidade.",
            "Níveis de preservação: Online/Volátil (menor controlo — ex.: memória RAM, ligações de rede ativas, perdem-se se o sistema for desligado) vs Offline/Não volátil (maior controlo — ex.: disco rígido desligado, mais estável para preservação).",
            "Níveis de risco: proporcionais à volatilidade — dados mais voláteis têm maior risco de perda se não recolhidos de imediato e pela ordem correta (RAM antes do disco); dados menos voláteis têm menor risco imediato, mas continuam sujeitos a alteração se manipulados sem cuidado.",
            "3 exemplos de evidência digital (sebenta): e-mails; registos de transações em ATM; logs de sistemas/bases de dados."
          ]
        },
        {
          "q": "O que são os metadados? Adicionalmente explique para que servem os metadados no contexto da análise forense digital. Apresente um cenário prático em que os metadados foram cruciais para a resolução de um incidente.",
          "points": [
            "Definição: 'dados sobre os dados' — informação que descreve um ficheiro ou sistema de ficheiros, não estando facilmente disponível sem processamento (ex.: autor, data de criação/modificação/acesso, geolocalização, histórico de revisões).",
            "Dois tipos: metadados do sistema de ficheiros (datas MACB) e metadados do próprio ficheiro (propriedades Office, EXIF de imagens).",
            "Utilidade forense: reconstrução da linha temporal, verificação de autenticidade, deteção de anomalias/manipulação (timestomping) e correlação de evidência com o incidente (Princípio 'Autêntica').",
            "Cenário prático: o caso do BTK Killer (Dennis Rader) — os metadados de um ficheiro Word apagado, entregue numa disquete considerada 'não rastreável', permitiram à polícia identificar a sua verdadeira identidade.",
            "Ferramenta de exemplo: o FOCA, referido na sebenta, extrai metadados de documentos publicamente disponíveis (útil em OSINT e em auditorias de exposição de informação)."
          ]
        },
        {
          "q": "No contexto de um ataque, o atacante de forma mais ou menos direta tenta usar técnicas para ocultação de informação. Quais os objetivos da utilização dessas técnicas por parte dos atacantes e como se relacionam com o processo de investigação forense? Qual a relação da esteganografia e da criptografia com a aplicação de técnicas de ocultação de informação por parte dos atacantes?",
          "points": [
            "Objetivo das técnicas de ocultação/anti-forenses: dificultar a deteção, atribuição e reconstrução dos factos pelo investigador (ex.: esteganografia, serviços de comunicação anónima).",
            "Relação com a investigação: exige indo além da análise superficial ('iceberg de dados'), aplicando técnicas de deteção mais profundas (análise de anomalias de tamanho, assinaturas de ficheiro, timestamps MACB).",
            "Esteganografia vs criptografia: a criptografia torna o conteúdo ilegível sem a chave; a esteganografia oculta a própria existência da informação dentro de outro ficheiro. São técnicas distintas mas complementares.",
            "Uso combinado por atacantes: cifrar a informação e depois escondê-la esteganograficamente, dificultando simultaneamente a deteção e a decifragem.",
            "Desafio adicional (Lição 4 do caso Sala de Chá): dados anti-forenses podem estar parciais, corrompidos ou ruidosos, exigindo técnicas adequadas de recuperação e análise."
          ]
        },
        {
          "q": "Indique e descreva os princípios essenciais para a obtenção de uma prova digital. Em que formatos digitais poderei criar uma imagem forense, alinhada com os princípios para a obtenção de prova, através da utilização do FTK Imager?",
          "points": [
            "Princípio 1 – Legalidade: admissível conforme a lei.",
            "Princípio 2 – Autêntica: relação clara entre indício e incidente.",
            "Princípio 3 – Completa: cobre o caso na sua totalidade.",
            "Princípio 4 – Confiável: cadeia de custódia rigorosa.",
            "Princípio 5 – Acreditável: compreensiva e plausível.",
            "Formatos de imagem no FTK Imager: Raw/dd (cópia bit a bit, sem metadados); SMART (Linux, menos comum); E01 (EnCase, o mais comum); AFF (Advanced Forensic Format, código aberto).",
            "Alinhamento: a função de verificação de integridade do FTK Imager (relatório de hash antes/depois da criação da imagem) reforça diretamente o Princípio 4 (Confiável)."
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
            "Boas práticas de preservação do paciente/vítima zero: isolar da rede sem desligar se ainda ligado; verificar processos anti-forenses/apagamento remoto; documentar exaustivamente o estado do sistema (regra #4); aplicar a regra #1 (só equipas autorizadas atuam) e a ordem de volatilidade (RAM antes de disco).",
            "Recolha: imagem forense bit a bit (FTK Imager, formato E01 ou Raw/dd), cálculo de hash antes/depois da cópia, início imediato da cadeia de custódia (bag & tag).",
            "Metodologia completa: modelo NIST 800-86 — Identificação (paciente zero e servidores afetados) > Preservação (imagem + hash + cadeia de custódia) > Análise (logs, timeline, artefactos de rede/memória) > Apresentação (relatório às autoridades).",
            "Justificação com framework: DFRWS/NIST 800-86 garantem uma estrutura reprodutível e defensável (Princípios Autêntica e Acreditável), essencial para aceitação do relatório pelas autoridades e em tribunal.",
            "Ferramentas/técnicas por fase: Identificação — Volatility/Sysinternals (processos, netscan); Preservação — FTK Imager + hashing; Análise — Autopsy (timeline, keyword search, IOCs), Wireshark/NetworkMiner (tráfego de exfiltração), Prefetch/Amcache/Shimcache (execução do ransomware); Apresentação — relatório estruturado com metodologia e cadeia de custódia documentada.",
            "Nota: correlacionar timestamps MACB entre servidores para reconstruir a linha temporal da cifragem em cascata a partir do paciente zero e identificar o vetor de exploração inicial no servidor exposto."
          ]
        }
      ]
    }
  ]
};
