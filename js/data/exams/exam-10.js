window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["exam-10"] = {
  "id": "exam-10",
  "title": "Email Forensics: Cabeçalhos e Ataques",
  "topic": "Email Forensics",
  "type": "mcq",
  "questions": [
    {
      "q": "O que é 'phishing', no contexto de email forensics?",
      "options": [
        "Um tipo de ataque em que o atacante engana a vítima para revelar informação sensível, fazendo-se passar por uma entidade legítima",
        "Um formato de ficheiro de imagem",
        "Um protocolo de rede para transferência de ficheiros",
        "Um comando do Windows para reiniciar o sistema"
      ],
      "correct": 0,
      "exp": [
        "Correto — o phishing é um dos três tipos de e-mail forensics referidos na sebenta, consistindo em enganar a vítima para obter informação sensível fazendo-se passar por entidade legítima.",
        "Errado — não é um formato de imagem.",
        "Errado — não é um protocolo de transferência de ficheiros.",
        "Errado — não é um comando do sistema operativo."
      ]
    },
    {
      "q": "O 'spoofing' de email refere-se tipicamente a:",
      "options": [
        "Falsificar o endereço do remetente para que o email pareça vir de outra fonte",
        "Comprimir o tamanho dos anexos",
        "Traduzir automaticamente o email para outro idioma",
        "Aumentar a velocidade de entrega do email"
      ],
      "correct": 0,
      "exp": [
        "Correto — spoofing consiste em falsificar informação (como o remetente) para que o email pareça vir de uma fonte diferente da real; é um dos três tipos de email forensics referidos na sebenta.",
        "Errado — não tem relação com compressão de anexos.",
        "Errado — não tem relação com tradução automática.",
        "Errado — não tem relação com a velocidade de entrega."
      ]
    },
    {
      "q": "Qual dos seguintes campos de cabeçalho de email identifica o endereço IP de origem do remetente, sendo útil para rastrear a origem?",
      "options": [
        "X-Originating-IP",
        "Subject",
        "CC",
        "Reply-To"
      ],
      "correct": 0,
      "exp": [
        "Correto — o X-Originating-IP é o campo referido na sebenta que contém o endereço IP de origem, usado para rastrear o email.",
        "Errado — o campo Subject contém apenas o assunto do email, não informação de IP.",
        "Errado — o campo CC lista destinatários em cópia, não informação de IP.",
        "Errado — o campo Reply-To indica para onde as respostas devem ser enviadas, não a origem IP."
      ]
    },
    {
      "q": "O campo 'DKIM-Signature' num cabeçalho de email serve principalmente para:",
      "options": [
        "Ajudar a verificar a autenticidade e integridade do email através de assinatura criptográfica",
        "Definir a cor de fundo do email",
        "Definir o tamanho da fonte usada",
        "Contar o número de vezes que o email foi aberto"
      ],
      "correct": 0,
      "exp": [
        "Correto — DKIM (DomainKeys Identified Mail) usa assinatura criptográfica para ajudar a verificar autenticidade/integridade do email, sendo um dos campos de autenticação listados na sebenta.",
        "Errado — não tem relação com formatação visual do email.",
        "Errado — não tem relação com formatação de texto.",
        "Errado — não conta aberturas de email; isso seria feito por outros mecanismos (pixels de rastreio), não pelo DKIM."
      ]
    },
    {
      "q": "O campo 'Received-SPF' num cabeçalho de email está relacionado com:",
      "options": [
        "A verificação de que o servidor de envio está autorizado a enviar emails em nome desse domínio",
        "A cor do texto do email",
        "O número de destinatários em CC",
        "O tamanho do anexo em megabytes"
      ],
      "correct": 0,
      "exp": [
        "Correto — o SPF (Sender Policy Framework) verifica se o servidor que enviou o email está autorizado a fazê-lo em nome do domínio declarado, ajudando a detetar spoofing.",
        "Errado — não tem relação com formatação visual.",
        "Errado — não tem relação com número de destinatários.",
        "Errado — não tem relação com o tamanho de anexos."
      ]
    },
    {
      "q": "Segundo a sebenta, quais ferramentas online podem ser usadas para analisar cabeçalhos de email de forma automatizada?",
      "options": [
        "mxtoolbox.com/EmailHeaders.aspx e mha.azurewebsites.net",
        "Netflix e Amazon Prime",
        "Spotify e Apple Music",
        "TikTok e Instagram"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica estas duas ferramentas online específicas para análise de cabeçalhos de email.",
        "Errado — são serviços de streaming de vídeo, sem relação com análise de email.",
        "Errado — são serviços de streaming de música, sem relação com análise de email.",
        "Errado — são redes sociais, sem relação com análise de cabeçalhos de email."
      ]
    },
    {
      "q": "O que é a análise de conteúdo, como técnica de análise forense de um email, segundo a sebenta?",
      "options": [
        "Analisar o corpo do email em busca de pistas sobre a identidade do remetente e a natureza da mensagem, incluindo palavras-chave suspeitas",
        "Contar quantas letras maiúsculas o email contém",
        "Verificar apenas a cor de fundo escolhida",
        "Medir o tempo que o utilizador demorou a escrever o email"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta descreve a análise de conteúdo como a análise do corpo do email em busca de pistas sobre identidade, natureza da mensagem e palavras-chave suspeitas.",
        "Errado — não é esse o foco da análise de conteúdo descrita.",
        "Errado — não é esse o foco descrito na sebenta.",
        "Errado — não é referida qualquer medição de tempo de escrita."
      ]
    },
    {
      "q": "Na 'recuperação de anexos' como técnica de análise forense de email, o que se pretende identificar?",
      "options": [
        "Se os anexos contêm malware ou outros conteúdos maliciosos",
        "Apenas o tamanho médio dos anexos em bytes",
        "Apenas se o anexo está a cores ou a preto e branco",
        "Apenas a resolução de imagens anexadas"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta explica que os anexos podem ser extraídos e analisados para identificar se contêm malware ou outros conteúdos maliciosos.",
        "Errado — não é esse o foco principal descrito na sebenta.",
        "Errado — não é esse o foco principal desta técnica.",
        "Errado — não é esse o foco principal desta técnica."
      ]
    },
    {
      "q": "A 'análise de registo' (logs) como técnica forense de email permite verificar principalmente:",
      "options": [
        "Se o email foi enviado/recebido e se houve tentativas de acesso não autorizadas",
        "Apenas a cor da interface do cliente de email",
        "Apenas o número de fontes disponíveis",
        "Apenas o país de fabrico do computador"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica que registos de servidor, firewall e tráfego de rede podem ser analisados para verificar envio/receção do email e tentativas de acesso não autorizado.",
        "Errado — não é esse o foco da análise de registos.",
        "Errado — não é esse o foco da análise de registos.",
        "Errado — não é esse o foco da análise de registos."
      ]
    },
    {
      "q": "Por que motivo a sebenta reforça que a análise forense de email deve ser conduzida por profissionais treinados?",
      "options": [
        "Para garantir a integridade e admissibilidade das evidências recolhidas",
        "Porque a lei exige que só programadores possam abrir emails",
        "Porque só assim se consegue instalar o cliente de email corretamente",
        "Não há qualquer razão relevante apontada"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta afirma que a análise forense de email deve ser feita por profissionais treinados para garantir a integridade e admissibilidade das evidências recolhidas.",
        "Errado — não é essa a razão apontada na sebenta.",
        "Errado — não tem relação com instalação de software.",
        "Errado — a sebenta apresenta claramente essa razão relacionada com integridade e admissibilidade."
      ]
    },
    {
      "q": "Qual das seguintes ferramentas é referida na sebenta como um link auxiliar relacionado com testes/exercícios de emails no contexto do exercício de análise forense apresentado?",
      "options": [
        "emkei.cz",
        "github.com",
        "stackoverflow.com",
        "wikipedia.org"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta refere emkei.cz como link auxiliar no contexto do exercício de análise forense de email.",
        "Errado — não é o link auxiliar referido neste contexto específico.",
        "Errado — não é o link auxiliar referido neste contexto específico.",
        "Errado — não é o link auxiliar referido neste contexto específico."
      ]
    },
    {
      "q": "Qual dos seguintes campos de cabeçalho identifica o caminho de retorno de um email, útil para rastrear bounces (devoluções)?",
      "options": [
        "Return Path",
        "Subject",
        "Bcc oculto sempre visível",
        "Font-Size"
      ],
      "correct": 0,
      "exp": [
        "Correto — 'Return Path' é o campo listado na sebenta relacionado com o caminho de retorno usado em devoluções de email.",
        "Errado — o Subject apenas contém o assunto, não informação de retorno.",
        "Errado — o Bcc é oculto por definição, não é revelado nos cabeçalhos por defeito.",
        "Errado — não é um campo de cabeçalho de email, é um atributo de formatação genérico."
      ]
    },
    {
      "q": "No material 'Practical Windows Forensics', a análise de email inclui verificar 'mismatched sender addresses'. Isto refere-se a:",
      "options": [
        "Discrepâncias entre o endereço de email exibido e o endereço real de origem, indicando possível fraude/spoofing",
        "Diferenças de fuso horário entre remetente e destinatário",
        "O tamanho do ecrã usado para ler o email",
        "O número de pastas de email criadas pelo utilizador"
      ],
      "correct": 0,
      "exp": [
        "Correto — 'mismatched sender addresses' refere-se a discrepâncias entre o endereço exibido e o endereço real de origem, um forte indicador de fraude ou spoofing.",
        "Errado — não tem relação com fusos horários.",
        "Errado — não tem relação com o tamanho do ecrã.",
        "Errado — não tem relação com organização de pastas de email."
      ]
    },
    {
      "q": "Segundo o material de apoio, o 'Email Travel Path' (caminho percorrido pelo email) é reconstruído principalmente a partir de:",
      "options": [
        "Linhas 'Received' presentes no cabeçalho, que mostram cada servidor por onde o email passou",
        "Apenas do assunto do email",
        "Apenas da cor de fundo do email",
        "Apenas do nome do anexo"
      ],
      "correct": 0,
      "exp": [
        "Correto — as linhas 'Received' no cabeçalho registam cada servidor pelo qual o email passou, permitindo reconstruir o seu caminho.",
        "Errado — o assunto não contém informação de encaminhamento do email.",
        "Errado — a cor de fundo não contém informação de encaminhamento.",
        "Errado — o nome do anexo não contém informação de encaminhamento do email."
      ]
    },
    {
      "q": "'Pharming', um dos três tipos de email/web forensics referidos, distingue-se do phishing por:",
      "options": [
        "Redirecionar o tráfego de um site legítimo para um site falso, geralmente sem exigir ação direta da vítima (ex.: através de manipulação de DNS)",
        "Ser exatamente idêntico ao phishing, sem qualquer diferença",
        "Aplicar-se apenas a mensagens SMS",
        "Nunca envolver sites falsificados"
      ],
      "correct": 0,
      "exp": [
        "Correto — o pharming redireciona o tráfego (ex.: via manipulação de DNS) para um site falso, muitas vezes sem exigir que a vítima clique num link malicioso, ao contrário do phishing tradicional.",
        "Errado — apesar de relacionados, pharming e phishing têm mecanismos distintos.",
        "Errado — não está restrito a SMS (isso seria mais próximo de 'smishing').",
        "Errado — o pharming está, por definição, associado a sites falsificados."
      ]
    },
    {
      "q": "Ao investigar um email suspeito de phishing, qual é o primeiro passo lógico e mais seguro recomendado pela abordagem forense?",
      "options": [
        "Analisar o cabeçalho e os metadados sem executar quaisquer anexos ou links",
        "Clicar imediatamente em todos os links para ver o que acontece",
        "Reencaminhar o email para todos os colegas sem qualquer análise",
        "Apagar imediatamente o email sem qualquer registo"
      ],
      "correct": 0,
      "exp": [
        "Correto — a abordagem forense segura começa pela análise de cabeçalho/metadados, sem executar anexos ou clicar em links que possam comprometer o sistema do investigador.",
        "Errado — clicar em links pode comprometer o sistema do investigador e destruir indicadores importantes.",
        "Errado — reencaminhar sem análise prévia pode propagar risco e não segue metodologia forense.",
        "Errado — apagar sem documentar destruiria a evidência, violando os princípios forenses."
      ]
    },
    {
      "q": "Qual é a relevância forense da data e hora presentes no cabeçalho de um email?",
      "options": [
        "Podem ser analisadas para determinar autenticidade e identificar discrepâncias ou anomalias temporais",
        "Não têm qualquer relevância forense",
        "Servem apenas para ordenar visualmente a caixa de entrada",
        "São sempre falsificadas e por isso inúteis"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica que os metadados de data/hora podem ser analisados para determinar autenticidade e identificar discrepâncias ou anomalias.",
        "Errado — têm relevância direta na análise de metadados de um email.",
        "Errado — o seu valor forense vai muito além da simples ordenação visual.",
        "Errado — nem sempre são falsificadas; quando o são, essa própria discrepância é um indicador forense valioso."
      ]
    },
    {
      "q": "Qual é a utilidade forense de identificar o cliente de email ('Email Client') usado para enviar uma mensagem, segundo o material de apoio?",
      "options": [
        "Pode fornecer pistas adicionais sobre o dispositivo, software ou comportamento do remetente",
        "Não tem qualquer utilidade forense",
        "Serve apenas para escolher a cor do tema da interface",
        "Serve apenas para determinar o preço do software usado"
      ],
      "correct": 0,
      "exp": [
        "Correto — identificar o cliente de email usado pode fornecer pistas adicionais sobre o dispositivo, sistema ou comportamento do remetente, sendo um artefacto de investigação relevante.",
        "Errado — tem utilidade forense direta na reconstrução do perfil do remetente.",
        "Errado — não é essa a finalidade forense desta informação.",
        "Errado — não é essa a finalidade forense desta informação."
      ]
    },
    {
      "q": "O campo 'Message-Id' de um cabeçalho de email serve para:",
      "options": [
        "Identificar de forma única cada mensagem enviada, útil para correlacionar registos entre servidores",
        "Indicar a cor do texto do assunto",
        "Contar o número de destinatários em BCC",
        "Definir o fuso horário do destinatário"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Message-Id é um identificador único da mensagem, permitindo correlacionar o mesmo email em diferentes registos/servidores durante uma investigação.",
        "Errado — não tem relação com formatação de texto.",
        "Errado — não conta destinatários em BCC.",
        "Errado — não define fuso horário do destinatário."
      ]
    },
    {
      "q": "Complete: um email com endereço de remetente 'suporte@banc0-online.com' (com um zero em vez da letra 'o') é um exemplo típico de:",
      "options": [
        "Um ataque de spoofing/phishing com domínio visualmente semelhante ao legítimo",
        "Um erro de digitação sem qualquer intenção maliciosa",
        "Um email totalmente seguro e de confiança",
        "Uma funcionalidade normal de encaminhamento automático"
      ],
      "correct": 0,
      "exp": [
        "Correto — a substituição de caracteres para imitar visualmente um domínio legítimo é uma técnica clássica de phishing/spoofing, exatamente o tipo de indício analisado na deteção de emails fraudulentos.",
        "Errado — este tipo de padrão sistemático de substituição é característico de ataques deliberados, não de erros aleatórios.",
        "Errado — pelo contrário, este é um forte indicador de risco a investigar.",
        "Errado — não corresponde a nenhuma funcionalidade legítima de encaminhamento automático."
      ]
    }
  ]
};
