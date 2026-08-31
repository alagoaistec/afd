window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["mock-3"] = {
  "id": "mock-3",
  "title": "Simulado C — Exfiltração de Dados via Cloud",
  "type": "real",
  "description": "Exame simulado no formato exato do exame real, com perguntas semelhantes às reais mas diferentes — construído a partir da sebenta para treino em condições próximas das do exame.",
  "groups": [
    {
      "name": "Grupo I — Verdadeiro ou Falso (7 Valores)",
      "instructions": "10 perguntas. Cada pergunta vale 0.7 valores: 0.2 pela classificação V/F e 0.5 pela justificação.",
      "type": "vf",
      "items": [
        {
          "q": "A Cloud Forensics resulta da aplicação da análise forense digital num contexto de Cloud Computing, envolvendo componentes técnicas, organizacionais e legais.",
          "answer": true,
          "justification": "Corresponde exatamente à definição e às três subpartes principais (Técnica, Organizacional, Legal) apresentadas na sebenta para a Cloud Forensics."
        },
        {
          "q": "O Volatility Forensics é uma ferramenta paga e de código fechado, exclusiva de investigadores certificados.",
          "answer": false,
          "justification": "A sebenta descreve o Volatility Forensics como uma ferramenta de código aberto (open source), disponível no site oficial ou no GitHub."
        },
        {
          "q": "O comando 'netscan' do Volatility é usado para analisar as ligações de rede ativas presentes numa imagem de memória.",
          "answer": true,
          "justification": "Corresponde exatamente à descrição do comando 'netscan' apresentada na sebenta."
        },
        {
          "q": "Segundo a sebenta, os desafios da análise forense digital incluem a falta de standards e a diversidade tecnológica, mas não incluem questões relacionadas com a cloud.",
          "answer": false,
          "justification": "A sebenta lista explicitamente a 'Cloud' como um dos desafios da análise forense digital, juntamente com armazenamento, tempo, anonimização, criptografia e legislação."
        },
        {
          "q": "A recolha de prova digital deve ser realizada com a máxima invasão possível no sistema-alvo, para garantir que nenhuma informação escapa à análise.",
          "answer": false,
          "justification": "É o oposto: a recolha deve ser feita com a mínima invasão e destruição possível no sistema-alvo, para preservar a integridade da evidência."
        },
        {
          "q": "O princípio 'Acreditável' dos princípios de obtenção da prova exige que a prova seja compreensiva e plausível.",
          "answer": true,
          "justification": "Corresponde exatamente à definição do Princípio 5 (Acreditável) apresentado na sebenta."
        },
        {
          "q": "Um investigador que identifica interfaces de rede ativas durante a recolha de prova está a seguir uma prática irrelevante, sem qualquer valor forense.",
          "answer": false,
          "justification": "Pelo contrário, a identificação de interfaces de rede ativas pode revelar ligações em curso, possíveis exfiltrações de dados ou comunicação com infraestrutura maliciosa, tendo elevado valor forense, especialmente em casos de exfiltração via cloud."
        },
        {
          "q": "As guidelines da INTERPOL indicam que os discos de destino para imagens forenses devem, idealmente, ser novos ou apagados de forma segura antes de serem usados.",
          "answer": true,
          "justification": "Corresponde à recomendação explícita das guidelines: usar discos novos ou, no mínimo, apagados de forma segura com sobrescrita de um padrão conhecido, para evitar contaminação de dados."
        },
        {
          "q": "Em qualquer investigação forense digital que envolva dados armazenados na cloud, as questões legais/jurisdicionais são irrelevantes, bastando o consentimento técnico do fornecedor de cloud.",
          "answer": false,
          "justification": "A sebenta identifica explicitamente a dimensão 'Legal' como uma das três subpartes essenciais da Cloud Forensics, sendo a jurisdição e o enquadramento legal fatores centrais, não irrelevantes, especialmente quando os dados estão armazenados noutro país."
        },
        {
          "q": "A análise de logs de acesso e de tráfego de rede pode ajudar a confirmar se houve exfiltração de dados para um serviço de armazenamento na cloud não autorizado.",
          "answer": true,
          "justification": "A análise de registos (logs) de firewall e de tráfego de rede é uma técnica explicitamente referida na sebenta para identificar atividades suspeitas, incluindo transferências de dados não autorizadas."
        }
      ]
    },
    {
      "name": "Grupo II — Desenvolvimento (10 Valores)",
      "instructions": "4 perguntas de desenvolvimento, 2.5 valores cada. Justifica sempre que possível com exemplos.",
      "type": "open",
      "items": [
        {
          "q": "Explique o que é a Cloud Forensics e descreva as três subpartes principais (técnica, organizacional e legal) que devem ser compreendidas para lidar com uma investigação envolvendo dados na cloud.",
          "points": [
            "Definição: resulta da mistura da aplicação da digital forensics num contexto de Cloud Computing.",
            "Técnica: como aceder, preservar e analisar dados que não estão fisicamente sob o controlo direto do investigador (ex.: recorrer a APIs do fornecedor, exportações de logs).",
            "Organizacional: relação entre a organização investigada e o fornecedor de cloud (contratos, SLAs, quem tem acesso a quê).",
            "Legal: jurisdição dos dados (podem estar armazenados noutro país), enquadramento legal aplicável, necessidade de cooperação internacional/mandados.",
            "Desafio geral: a natureza distribuída e partilhada da cloud dificulta a aplicação direta dos princípios tradicionais (ex.: imagem forense bit a bit de um disco físico) sem a colaboração do fornecedor."
          ]
        },
        {
          "q": "Descreva o que é o Volatility Forensics, os seus passos básicos de utilização e pelo menos três comandos relevantes, explicando para que servem no contexto de uma investigação de exfiltração de dados.",
          "points": [
            "Definição: ferramenta de código aberto para análise de memória em investigações forenses.",
            "Passos básicos: capturar imagem de memória > executar o Volatility na linha de comandos > escolher perfil adequado ao SO > executar comandos de análise.",
            "imageinfo: exibe informação básica sobre a imagem de memória, necessária para confirmar o perfil correto.",
            "pslist: lista processos em execução — pode revelar software de exfiltração ou acesso não autorizado em execução no momento da captura.",
            "netscan: analisa ligações de rede ativas — pode revelar ligações a serviços de cloud não autorizados usados para exfiltração.",
            "dumpfiles: extrai arquivos da memória — pode recuperar ficheiros que estavam a ser processados/enviados no momento da captura."
          ]
        },
        {
          "q": "Explique a ordem de volatilidade na recolha de prova digital e por que é especialmente crítica numa investigação de exfiltração de dados através de uma ligação de rede ativa.",
          "points": [
            "Ordem geral: dos componentes mais voláteis (RAM) para os menos voláteis (disco rígido).",
            "Sequência: memória RAM > interfaces de rede ativas > processos em execução > portos TCP/UDP ativos > utilizadores registados > ficheiros de paginação/hibernação > sistema de ficheiros > configurações de hardware/software.",
            "Criticidade na exfiltração via rede: as ligações de rede ativas e os processos responsáveis pela exfiltração são extremamente voláteis — se o sistema for desligado ou a ligação de rede terminar antes da recolha, esta evidência pode perder-se de forma irreversível, ao contrário dos ficheiros já gravados em disco.",
            "Ferramenta relevante: o comando 'netscan' do Volatility, aplicado a uma captura de memória feita atempadamente, é essencial para capturar este tipo de evidência antes que desapareça."
          ]
        },
        {
          "q": "Descreva os princípios de obtenção da prova digital e explique como a sua aplicação difere ligeiramente quando a evidência está armazenada num serviço de cloud fora do controlo físico direto da organização investigada.",
          "points": [
            "Os 5 princípios: Legalidade, Autêntica, Completa, Confiável, Acreditável — aplicam-se sempre, independentemente de a evidência estar localmente ou na cloud.",
            "Diferença na Legalidade: pode ser necessário considerar jurisdições adicionais e obter autorização/cooperação do fornecedor de cloud, dado que os dados podem estar fisicamente armazenados noutro país.",
            "Diferença na Confiável/cadeia de custódia: em vez de uma imagem forense bit a bit tradicional de um disco físico, pode ser necessário recorrer a exportações/logs fornecidos pelo prestador de serviços cloud, documentando cuidadosamente o processo e a fonte para manter a cadeia de custódia.",
            "Diferença na Completa: pode ser mais difícil garantir a completude, já que o acesso aos dados na cloud depende da cooperação e das políticas de retenção do fornecedor."
          ]
        }
      ]
    },
    {
      "name": "Grupo III — Caso de Estudo (3 Valores)",
      "instructions": "Uma startup de tecnologia detetou um volume anómalo de tráfego de saída de um dos seus servidores internos, direcionado para um serviço de armazenamento na cloud desconhecido da equipa de TI. A análise inicial sugere que uma base de dados de clientes, contendo dados pessoais, pode ter sido copiada e enviada para fora da organização. O servidor continua ligado no momento em que a equipa de segurança é chamada. A gestão de topo pediu uma investigação forense completa e um relatório para cumprir obrigações de notificação de incidente de proteção de dados.\n\nDescreva: as boas práticas a seguir dado que o servidor está ainda ligado; a metodologia de investigação a aplicar (identifique e justifique com uma framework); as ferramentas e técnicas mais adequadas para identificar o que foi exfiltrado e para onde; e como garantiria a cadeia de custódia ao longo de todo o processo.",
      "type": "open",
      "items": [
        {
          "q": "Descreva a resposta completa ao caso de estudo da exfiltração via cloud.",
          "points": [
            "Boas práticas com servidor ligado: não desligar; isolar da rede (ou monitorizar de forma controlada) para impedir mais exfiltração; verificar sinais de sistemas anti-forenses; seguir a ordem de volatilidade, começando pela captura de memória RAM e das ligações de rede ativas (netscan) antes de qualquer outra ação.",
            "Metodologia: NIST 800-86 — Identificação (servidor, base de dados, destino do tráfego suspeito) > Preservação (captura de memória com FTK Imager/Volatility, imagem forense do disco, hashing) > Análise (correlação de logs de rede, processos, artefactos do sistema) > Apresentação (relatório para a gestão e para cumprimento de obrigações regulatórias).",
            "Ferramentas e técnicas: Volatility (pslist, netscan, dumpfiles) para identificar o processo responsável e a ligação de rede usada; Wireshark/NetworkMiner para analisar capturas de tráfego, se disponíveis; análise de logs do servidor e da base de dados para determinar que registos foram acedidos/exportados; FTK Imager para preservar o disco após a captura de memória.",
            "Cadeia de custódia: documentar cada ação tomada (regra #4 — documentar, documentar, documentar), calcular e registar hashes de cada imagem/captura, limitar o acesso à evidência a pessoal autorizado (regra #1), e manter um registo cronológico de quem manuseou cada cópia da evidência, desde a recolha até à apresentação do relatório final."
          ]
        }
      ]
    }
  ]
};
