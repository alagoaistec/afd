window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["mock-2"] = {
  "id": "mock-2",
  "title": "Simulado B — Compromisso de Conta de Email (BEC)",
  "type": "real",
  "description": "Exame simulado no formato exato do exame real, com perguntas semelhantes às reais mas diferentes — construído a partir da sebenta para treino em condições próximas das do exame.",
  "groups": [
    {
      "name": "Grupo I — Verdadeiro ou Falso (7 Valores)",
      "instructions": "10 perguntas. Cada pergunta vale 0.7 valores: 0.2 pela classificação V/F e 0.5 pela justificação.",
      "type": "vf",
      "items": [
        {
          "q": "O campo 'Received-SPF' de um cabeçalho de email ajuda a verificar se o servidor de envio estava autorizado a enviar mensagens em nome do domínio declarado.",
          "answer": true,
          "justification": "O SPF (Sender Policy Framework), registado no cabeçalho como Received-SPF, serve exatamente para esta verificação, ajudando a detetar spoofing."
        },
        {
          "q": "O 'pharming' e o 'phishing' são exatamente a mesma técnica, sem qualquer diferença entre eles.",
          "answer": false,
          "justification": "Apesar de relacionados, o pharming redireciona o tráfego para um site falso (ex.: via manipulação de DNS) muitas vezes sem exigir ação da vítima, enquanto o phishing tipicamente depende de enganar a vítima para clicar num link ou fornecer dados."
        },
        {
          "q": "A análise forense digital de um email deve sempre incluir a execução dos anexos suspeitos no computador do investigador, para confirmar rapidamente se contêm malware.",
          "answer": false,
          "justification": "Executar anexos suspeitos no sistema do investigador é uma prática perigosa e contrária às boas práticas forenses — arrisca comprometer o próprio sistema de análise; deve usar-se um ambiente isolado (sandbox) e técnicas seguras de análise estática/dinâmica."
        },
        {
          "q": "Segundo o modelo NIST 800-86, a fase de 'apresentação' deve ocorrer antes da fase de 'análise' das evidências.",
          "answer": false,
          "justification": "A ordem correta é identificação, preservação, análise e só depois apresentação — a análise tem sempre de preceder a apresentação dos resultados."
        },
        {
          "q": "A regra de boas práticas 'Documentar, documentar, documentar' aplica-se apenas à fase final de um caso, não sendo necessária durante a recolha inicial da evidência.",
          "answer": false,
          "justification": "A documentação exaustiva deve ocorrer ao longo de todo o processo de investigação, desde a recolha inicial até ao relatório final, e não apenas na fase final."
        },
        {
          "q": "O DKIM-Signature é um mecanismo de assinatura criptográfica usado para ajudar a verificar a autenticidade e integridade de um email.",
          "answer": true,
          "justification": "O DKIM (DomainKeys Identified Mail) usa assinatura criptográfica associada ao domínio de envio para este fim, sendo um dos campos de autenticação analisados na investigação de email."
        },
        {
          "q": "Recuperar a chave privada de um par assimétrico é normalmente mais rápido do que recuperar uma chave simétrica do mesmo nível de segurança, pois as chaves assimétricas são sempre mais curtas.",
          "answer": false,
          "justification": "É o oposto: as chaves assimétricas costumam ser bastante mais longas (ex.: 2048/4096 bits) do que as simétricas equivalentes em segurança (ex.: 128/256 bits), precisamente por serem baseadas em problemas matemáticos diferentes; não existe essa relação direta de rapidez descrita."
        },
        {
          "q": "Um dos objetivos de uma investigação de email forensics é reconstruir o 'travel path' (caminho percorrido) da mensagem através das linhas 'Received' do cabeçalho.",
          "answer": true,
          "justification": "As linhas 'Received' registam cada servidor pelo qual o email passou, permitindo reconstruir o seu percurso — é exatamente esse o objetivo desta técnica de análise."
        },
        {
          "q": "Segundo os princípios de obtenção da prova, o Princípio 3 ('Completa') exige que a investigação cubra o caso na sua totalidade, e não apenas os elementos mais convenientes para uma conclusão pré-definida.",
          "answer": true,
          "justification": "Corresponde à definição do Princípio 3 e alinha-se com a lição 1 do caso 'Sala de Chá': o investigador deve revelar factos, não 'provar' uma conclusão predefinida."
        },
        {
          "q": "É impossível detetar um ataque de spoofing de email através da análise do cabeçalho, sendo necessário sempre um exame forense do disco rígido do remetente.",
          "answer": false,
          "justification": "Muitos indicadores de spoofing são detetáveis diretamente na análise do cabeçalho (ex.: falhas em SPF/DKIM, endereço 'From' inconsistente com 'Return-Path', X-Originating-IP suspeito), sem necessitar de acesso ao disco do remetente."
        }
      ]
    },
    {
      "name": "Grupo II — Desenvolvimento (10 Valores)",
      "instructions": "4 perguntas de desenvolvimento, 2.5 valores cada. Justifica sempre que possível com exemplos.",
      "type": "open",
      "items": [
        {
          "q": "Descreva as principais técnicas de análise forense de um email (cabeçalho, conteúdo, anexos, registos e metadados) e explique como se complementam para determinar a autenticidade de uma mensagem suspeita.",
          "points": [
            "Análise de cabeçalho: IP de origem, servidor de envio, campos de autenticação (SPF, DKIM, DMARC) — ajuda a rastrear a origem e detetar spoofing.",
            "Análise de conteúdo: pistas sobre identidade do remetente, natureza da mensagem, palavras-chave suspeitas.",
            "Recuperação de anexos: análise estática/dinâmica em ambiente isolado para identificar malware.",
            "Análise de registo (logs): servidor, firewall e tráfego de rede, para confirmar envio/receção e tentativas de acesso não autorizado.",
            "Análise de metadados: datas, discrepâncias temporais e outros indícios de manipulação.",
            "Complementaridade: nenhuma técnica isolada é conclusiva; a força da análise vem da correlação entre todas estas fontes, tal como referido na sebenta sobre a importância de profissionais treinados garantirem a integridade e admissibilidade da evidência."
          ]
        },
        {
          "q": "O que são metadados e qual a sua relevância numa investigação de fraude por email (Business Email Compromise)? Explique como o histórico de revisões ou propriedades de um documento anexo podem ser cruciais.",
          "points": [
            "Metadados: 'dados sobre os dados' — informação sobre autoria, datas, histórico, não visível diretamente no conteúdo.",
            "Relevância em BEC: um documento anexo (ex.: fatura fraudulenta) pode ter metadados que revelam o verdadeiro autor, o computador/software usado, ou datas inconsistentes com a história apresentada pelo atacante.",
            "Exemplo/analogia com o caso BTK: tal como os metadados de um ficheiro Word apagado revelaram a identidade de Dennis Rader, os metadados de um documento fraudulento podem revelar pistas sobre quem o criou, mesmo que o atacante tenha tentado ocultar a sua identidade no corpo do email.",
            "Ferramentas: Exiftool ou FOCA podem ser usadas para extrair estes metadados de documentos anexados."
          ]
        },
        {
          "q": "Explique a diferença entre criptografia e esteganografia no contexto da ocultação de informação por parte de atacantes, e como estas técnicas podem dificultar uma investigação forense.",
          "points": [
            "Criptografia: torna o conteúdo ilegível sem a chave (esconde o significado, não a existência da mensagem).",
            "Esteganografia: oculta a própria existência da informação, escondendo-a dentro de outro ficheiro (imagem, áudio, etc.).",
            "Dificuldade acrescida: um atacante pode usar ambas em conjunto, dificultando tanto a deteção (esteganografia) como a decifragem (criptografia) da informação.",
            "Impacto na investigação: obriga a técnicas de deteção mais profundas (análise de anomalias no tamanho/estrutura de ficheiros, ferramentas especializadas de deteção de esteganografia), indo além da análise superficial ('iceberg de dados')."
          ]
        },
        {
          "q": "Descreva o processo de aquisição de uma imagem forense com o FTK Imager, incluindo a escolha da fonte, do formato de imagem e a validação de integridade, relacionando cada etapa com os princípios de obtenção da prova.",
          "points": [
            "Select Source: escolher entre drive físico ou lógico, consoante a evidência.",
            "Select Drive: escolher a unidade de origem e definir o destino (idealmente um disco separado, com múltiplas cópias criadas para evitar perda de evidência).",
            "Select Image Type: escolher o formato — Raw/dd, SMART, E01 ou AFF, consoante as necessidades do caso.",
            "Validação de integridade: gerar hash antes e depois da criação da imagem, para confirmar que a cópia é fiel ao original.",
            "Relação com os princípios: esta sequência sustenta sobretudo o Princípio 4 (Confiável — cadeia de custódia e integridade verificável) e o Princípio 1 (Legalidade — desde que realizado com autorização adequada)."
          ]
        }
      ]
    },
    {
      "name": "Grupo III — Caso de Estudo (3 Valores)",
      "instructions": "Uma empresa de contabilidade recebeu um email, aparentemente do seu diretor financeiro, a solicitar uma transferência bancária urgente para um novo fornecedor. O funcionário responsável efetuou a transferência de 45.000€. Posteriormente, confirmou-se que o diretor financeiro nunca enviou tal email e que a sua conta de email pode ter sido comprometida ou o email foi falsificado (spoofing). A empresa contratou uma equipa de análise forense digital para investigar o incidente e determinar como ocorreu o ataque.\n\nDescreva: as boas práticas na preservação da evidência digital (conta de email, computador do funcionário, o próprio email fraudulento); a metodologia de investigação a aplicar (identifique e justifique com uma framework); as técnicas específicas de análise de email a utilizar para determinar se houve spoofing ou comprometimento real da conta; e as ferramentas adequadas a cada fase.",
      "type": "open",
      "items": [
        {
          "q": "Descreva a resposta completa ao caso de estudo do compromisso de email (BEC).",
          "points": [
            "Boas práticas de preservação: preservar o email fraudulento original com todos os cabeçalhos (não apenas reencaminhar, que pode alterar cabeçalhos), documentar o estado do computador do funcionário, e não alterar as definições da conta de email do diretor financeiro antes da análise (regra #1 — só equipas autorizadas atuam).",
            "Metodologia: NIST 800-86 — Identificação (email fraudulento, conta do diretor financeiro, computador do funcionário) > Preservação (cópia forense dos cabeçalhos, imagem do computador com FTK Imager, hash) > Análise (cabeçalhos, logs do servidor de email, artefactos do computador) > Apresentação (relatório com conclusões e recomendações).",
            "Técnicas de análise de email: verificar SPF/DKIM/DMARC (falha nestes indica spoofing mais provável do que compromisso real da conta); analisar o 'travel path' via linhas Received; comparar o X-Originating-IP com os IPs habituais de acesso do diretor financeiro; verificar logs de autenticação da conta (login suspeito indicaria compromisso real, não spoofing).",
            "Distinção spoofing vs conta comprometida: se os cabeçalhos de autenticação (SPF/DKIM) falharem e a mensagem não passar pelos servidores legítimos da empresa, é mais provável spoofing; se os logs mostrarem um login legítimo mas de uma localização/IP anómalo, é mais provável um comprometimento real da conta (possivelmente via phishing anterior).",
            "Ferramentas por fase: mxtoolbox.com/EmailHeaders.aspx ou mha.azurewebsites.net para análise de cabeçalho; FTK Imager para preservação do computador do funcionário; Autopsy/Volatility para análise de artefactos e memória, caso se suspeite de malware associado ao ataque inicial."
          ]
        }
      ]
    }
  ]
};
