window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["exam-14"] = {
  "id": "exam-14",
  "title": "Ordem de Volatilidade e Recolha de Prova",
  "topic": "Recolha de Prova",
  "type": "mcq",
  "questions": [
    {
      "q": "Segundo a sebenta, qual deve ser a ordem geral de extração de dados numa investigação, em termos de volatilidade?",
      "options": [
        "Dos componentes mais voláteis (ex.: RAM) para os menos voláteis (ex.: disco rígido)",
        "Dos componentes menos voláteis para os mais voláteis, sem exceção",
        "É indiferente, pode ser em qualquer ordem",
        "Apenas o disco rígido deve ser considerado, ignorando a memória"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica que a extração deve iniciar-se pelos componentes mais voláteis (ex.: memória RAM) até aos menos voláteis (ex.: disco rígido).",
        "Errado — é exatamente o oposto da boa prática recomendada.",
        "Errado — a ordem é crítica, uma vez que dados voláteis podem perder-se rapidamente se não forem recolhidos primeiro.",
        "Errado — a memória RAM é uma fonte de evidência crítica e não deve ser ignorada quando o sistema está ligado."
      ]
    },
    {
      "q": "Por que a memória RAM deve ser recolhida antes do disco rígido, quando aplicável?",
      "options": [
        "Porque é o dado mais volátil, perdendo-se assim que o sistema é desligado",
        "Porque a RAM demora sempre mais tempo a copiar do que o disco",
        "Porque a lei obriga a começar sempre pela RAM, independentemente do contexto técnico",
        "Não há qualquer razão técnica para esta ordem"
      ],
      "correct": 0,
      "exp": [
        "Correto — a RAM é o dado mais volátil listado, perdendo-se imediatamente ao desligar o sistema, pelo que deve ser priorizada quando o dispositivo está ligado.",
        "Errado — a razão não está relacionada com o tempo de cópia, mas sim com a volatilidade dos dados.",
        "Errado — a razão é técnica (volatilidade), não uma imposição legal arbitrária.",
        "Errado — existe uma razão técnica clara: preservar dados que se perderiam rapidamente."
      ]
    },
    {
      "q": "Qual das seguintes é a primeira etapa de uma possível sequência de extração apresentada na sebenta, quando o computador está ligado?",
      "options": [
        "Identificação do conteúdo da memória RAM",
        "Formatação do disco rígido",
        "Desligar imediatamente o computador",
        "Reinstalar o sistema operativo"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta apresenta a identificação do conteúdo da memória RAM como o primeiro passo, aplicável apenas quando o computador está ligado.",
        "Errado — formatar destruiria toda a evidência, sendo o oposto do procedimento correto.",
        "Errado — desligar imediatamente sem recolher a RAM primeiro perde dados voláteis importantes.",
        "Errado — reinstalar o sistema destruiria completamente a evidência original."
      ]
    },
    {
      "q": "Depois de identificar o conteúdo da memória RAM, qual é o próximo elemento a identificar segundo a sequência apresentada na sebenta?",
      "options": [
        "As interfaces de rede ativas",
        "O modelo do monitor",
        "A cor da caixa do computador",
        "O número de série da impressora"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica a identificação das interfaces de rede ativas como o passo seguinte na sequência de extração.",
        "Errado — o modelo do monitor não é um dado forense relevante na sequência de volatilidade.",
        "Errado — a cor da caixa não tem qualquer relevância forense.",
        "Errado — o número de série da impressora não faz parte desta sequência."
      ]
    },
    {
      "q": "Depois das interfaces de rede, a sebenta indica que se deve identificar:",
      "options": [
        "Os processos em execução no sistema operativo e o seu respetivo estado",
        "Apenas o número de cores impressas no último mês",
        "Apenas a versão do BIOS instalada",
        "Apenas o histórico de chamadas telefónicas"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica a identificação dos processos em execução e do seu estado como o passo seguinte na sequência.",
        "Errado — não tem relação com dados de impressão.",
        "Errado — a versão do BIOS não é o foco principal desta etapa da sequência.",
        "Errado — o histórico de chamadas não faz parte desta sequência de recolha do sistema."
      ]
    },
    {
      "q": "Segundo a sebenta, a listagem de que portos deve ser feita durante a recolha de prova digital?",
      "options": [
        "Portos TCP e UDP ativos à espera de ligações",
        "Apenas portas USB físicas do computador",
        "Apenas portas de áudio (jack)",
        "Apenas portas HDMI"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta refere a listagem dos portos TCP e UDP ativos à espera de ligações como parte da sequência de recolha.",
        "Errado — refere-se a portos de rede lógicos, não a portas físicas USB.",
        "Errado — não tem relação com portas de áudio físicas.",
        "Errado — não tem relação com portas HDMI físicas."
      ]
    },
    {
      "q": "Qual das seguintes deve também ser listada durante a recolha de prova, segundo a sebenta, relativamente aos utilizadores do sistema?",
      "options": [
        "Os utilizadores ativos e registados no Sistema Operativo",
        "Apenas o email pessoal do administrador de TI",
        "Apenas o número de telefone do proprietário",
        "Apenas a morada de faturação"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica a listagem dos utilizadores ativos e registados no sistema operativo como parte da sequência de recolha.",
        "Errado — não é este o foco da recolha de prova nesta etapa.",
        "Errado — não é este o foco da recolha de prova nesta etapa.",
        "Errado — não é este o foco da recolha de prova nesta etapa."
      ]
    },
    {
      "q": "Depois dos utilizadores, quais ficheiros relacionados com memória/hibernação devem ser considerados, segundo a sebenta?",
      "options": [
        "pagefile.sys, swapfile.sys e hiberfile.sys",
        "Apenas o ficheiro boot.ini",
        "Apenas o ficheiro win.ini",
        "Apenas o ficheiro hosts"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta refere pagefile.sys (paginação), swapfile.sys (áreas de swap) e hiberfile.sys (hibernação) como conteúdos relevantes a considerar.",
        "Errado — não é o ficheiro específico referido nesta etapa.",
        "Errado — não é o ficheiro específico referido nesta etapa.",
        "Errado — não é o ficheiro específico referido nesta etapa."
      ]
    },
    {
      "q": "Além dos ficheiros de paginação, o que mais deve ser considerado na recolha, relativamente ao sistema de ficheiros, segundo a sebenta?",
      "options": [
        "Informação detalhada sobre ficheiros e diretorias armazenadas, como data de criação e modificação",
        "Apenas o nome do fabricante da placa-mãe",
        "Apenas o número de série da fonte de alimentação",
        "Apenas o modelo da placa gráfica"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta refere o conteúdo do sistema de ficheiros e dos vários volumes, com especial relevância para datas de criação/modificação dos ficheiros e diretorias.",
        "Errado — não é este o foco da sequência de recolha apresentada.",
        "Errado — não é este o foco da sequência de recolha apresentada.",
        "Errado — não é este o foco da sequência de recolha apresentada."
      ]
    },
    {
      "q": "Segundo a sebenta, quais componentes de hardware/software configurados também devem ser recolhidos como parte da investigação?",
      "options": [
        "Configuração de clientes de email e de hardware (ex.: USB) ligados ao sistema",
        "Apenas o histórico de compras online",
        "Apenas o nome da operadora de telecomunicações",
        "Apenas a lista de canais de televisão configurados"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica a configuração de componentes de software (ex.: cliente de email) e hardware (ex.: USB) como relevantes a recolher.",
        "Errado — não é este o foco da sequência apresentada na sebenta.",
        "Errado — não é este o foco da sequência apresentada.",
        "Errado — não é este o foco da sequência apresentada."
      ]
    },
    {
      "q": "Qual das seguintes é a razão principal para minimizar a 'invasão' do sistema-alvo durante a recolha de prova digital?",
      "options": [
        "Reduzir alterações não intencionais que possam comprometer a integridade e admissibilidade da evidência",
        "Poupar espaço em disco no computador do investigador",
        "Reduzir o consumo de eletricidade do laboratório",
        "Acelerar a velocidade da internet do laboratório"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta explica que minimizar a invasão reduz o risco de alterar dados, o que é essencial para preservar a integridade e a admissibilidade legal da evidência.",
        "Errado — não tem relação com o espaço em disco do investigador.",
        "Errado — não tem relação com consumo elétrico do laboratório.",
        "Errado — não tem relação com a velocidade de internet do laboratório."
      ]
    },
    {
      "q": "Qual das seguintes NÃO deve ser considerada uma prática recomendada na recolha de prova digital, segundo os princípios apresentados na sebenta?",
      "options": [
        "Recolher primeiro os dados mais voláteis",
        "Documentar exaustivamente cada passo do processo",
        "Recolher a memória RAM antes do disco rígido, quando possível",
        "Desligar imediatamente o computador sem qualquer análise prévia da memória, mesmo com dados voláteis relevantes"
      ],
      "correct": 3,
      "exp": [
        "Errado como resposta pedida — recolher os dados mais voláteis primeiro é, de facto, uma boa prática recomendada.",
        "Errado como resposta pedida — documentar exaustivamente (regra #4, 'Documentar documentar documentar') é uma boa prática essencial.",
        "Errado como resposta pedida — priorizar a RAM face ao disco é uma boa prática, dada a sua maior volatilidade.",
        "Correto — desligar imediatamente sem considerar a recolha prévia de dados voláteis relevantes contraria diretamente a boa prática da ordem de volatilidade apresentada na sebenta."
      ]
    },
    {
      "q": "No exercício Lab 3 sobre memdump, qual é o principal objetivo pedagógico da atividade?",
      "options": [
        "Praticar a captura e análise de memória, identificando processos e comunicações ativas com ferramentas como Volatility ou Sysinternals",
        "Aprender a formatar um disco rígido rapidamente",
        "Aprender a instalar um novo sistema operativo do zero",
        "Aprender a configurar uma impressora de rede"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Lab 3 foca a captura e análise de memdump, usando utilitários chave para analisar processos e comunicações ativas, produzindo um relatório da metodologia seguida.",
        "Errado — não é o objetivo do exercício, que se foca em análise de memória, não formatação de discos.",
        "Errado — não é o objetivo do exercício.",
        "Errado — não tem relação com o exercício de análise de memória."
      ]
    },
    {
      "q": "Um investigador que recolhe primeiro o disco rígido e só depois desliga o computador para 'garantir segurança', perdendo a memória RAM, comete que erro?",
      "options": [
        "Inverte a ordem de volatilidade recomendada, arriscando perder dados voláteis importantes (ex.: chaves de decifragem em memória)",
        "Nenhum erro, é o procedimento correto e recomendado",
        "Um erro apenas estético, sem qualquer impacto na investigação",
        "Um erro que só é relevante em sistemas Linux"
      ],
      "correct": 0,
      "exp": [
        "Correto — ao desligar o computador antes de capturar a RAM, perde-se permanentemente dados voláteis importantes, como possíveis credenciais ou chaves em memória, contrariando a ordem de volatilidade recomendada.",
        "Errado — a sebenta é clara: deve seguir-se a ordem do mais volátil para o menos volátil.",
        "Errado — este erro pode ter impacto real na investigação, ao perder evidência potencialmente crítica e irrecuperável.",
        "Errado — o princípio da ordem de volatilidade aplica-se a qualquer sistema operativo, incluindo Windows e Linux."
      ]
    },
    {
      "q": "Qual das seguintes situações justifica que a recolha de memória RAM só é aplicável quando o computador está ligado?",
      "options": [
        "Porque a memória RAM perde todo o seu conteúdo assim que o dispositivo é desligado (é uma memória volátil)",
        "Porque a memória RAM está sempre guardada permanentemente no disco",
        "Porque não existe qualquer diferença entre RAM e disco rígido",
        "Porque a RAM só existe em portáteis, não em computadores de secretária"
      ],
      "correct": 0,
      "exp": [
        "Correto — a memória RAM é volátil por natureza, perdendo o seu conteúdo assim que a alimentação elétrica é interrompida, daí só ser possível recolher enquanto o sistema está ligado.",
        "Errado — é precisamente o oposto: a RAM não é armazenamento persistente como o disco.",
        "Errado — há uma diferença fundamental de volatilidade entre RAM e disco rígido.",
        "Errado — a RAM existe tanto em portáteis como em computadores de secretária."
      ]
    },
    {
      "q": "Qual é a relação entre a ordem de volatilidade e o princípio de 'mínima invasão' apresentados na sebenta?",
      "options": [
        "Ambos visam preservar a integridade e maximizar a quantidade de evidência válida recolhida, minimizando alterações desnecessárias",
        "São princípios totalmente opostos e incompatíveis entre si",
        "Não têm qualquer relação um com o outro",
        "Aplicam-se apenas a investigações em ambiente de nuvem"
      ],
      "correct": 0,
      "exp": [
        "Correto — ambos os princípios trabalham em conjunto: recolher primeiro o mais volátil evita perder evidência, enquanto minimizar a invasão evita alterar/danificar a evidência restante.",
        "Errado — pelo contrário, complementam-se dentro da mesma filosofia de preservação de evidência.",
        "Errado — há uma relação direta entre estes dois princípios, ambos ligados à preservação da evidência.",
        "Errado — aplicam-se a qualquer contexto de investigação forense digital, não apenas cloud."
      ]
    },
    {
      "q": "Durante a recolha de interfaces de rede ativas, qual é o valor forense desta informação?",
      "options": [
        "Pode indicar ligações em curso, possíveis exfiltrações de dados ou comunicação com servidores externos maliciosos",
        "Serve apenas para verificar a marca da placa de rede",
        "Serve apenas para calcular o preço da fatura de internet",
        "Não tem qualquer valor forense relevante"
      ],
      "correct": 0,
      "exp": [
        "Correto — identificar interfaces de rede ativas pode revelar ligações em curso, possíveis exfiltrações de dados ou comunicação com infraestrutura maliciosa, sendo altamente relevante em investigações de incidentes.",
        "Errado — não é esse o objetivo forense desta recolha.",
        "Errado — não tem relação com faturação de internet.",
        "Errado — tem valor forense significativo, especialmente em investigações de intrusão ou exfiltração."
      ]
    },
    {
      "q": "Qual é o risco de recolher primeiro o disco rígido (menos volátil) e só depois considerar a memória RAM (mais volátil) num sistema ainda ligado?",
      "options": [
        "Durante o tempo gasto a copiar o disco, dados voláteis na RAM podem mudar ou perder-se, comprometendo evidência crítica",
        "Não existe qualquer risco associado a esta ordem",
        "O disco rígido deixaria de funcionar permanentemente",
        "A RAM aumentaria automaticamente de tamanho"
      ],
      "correct": 0,
      "exp": [
        "Correto — enquanto se copia o disco (processo que pode demorar), o sistema continua ativo e o conteúdo da RAM pode alterar-se ou perder-se, daí a recomendação de recolher primeiro os dados mais voláteis.",
        "Errado — existe um risco real e documentado de perda de evidência volátil.",
        "Errado — copiar o disco rígido corretamente não o danifica permanentemente.",
        "Errado — a RAM não aumenta de tamanho por causa da ordem de recolha; o risco é de perda de conteúdo, não de alteração de capacidade."
      ]
    },
    {
      "q": "Qual das seguintes opções melhor resume o motivo pelo qual a sebenta insiste tanto na ordem de volatilidade como princípio de recolha de prova?",
      "options": [
        "Porque a evidência digital tem naturezas muito diferentes de persistência, e ignorar essa ordem pode causar perda irreversível de dados relevantes",
        "Porque é apenas uma formalidade burocrática sem qualquer impacto técnico real",
        "Porque só se aplica a investigações realizadas fora de Portugal",
        "Porque a ordem de recolha nunca influencia o resultado final da investigação"
      ],
      "correct": 0,
      "exp": [
        "Correto — diferentes tipos de evidência têm diferentes graus de persistência; ignorar a ordem de volatilidade pode causar perda irreversível de dados essenciais à investigação.",
        "Errado — tem impacto técnico real e direto na qualidade e completude da evidência recolhida.",
        "Errado — o princípio aplica-se universalmente, independentemente da jurisdição.",
        "Errado — a ordem de recolha pode determinar se dados voláteis cruciais são ou não preservados."
      ]
    },
    {
      "q": "Por que os processos em execução e o seu estado devem ser documentados o mais cedo possível numa investigação em sistema ligado?",
      "options": [
        "Porque processos maliciosos ou temporários podem terminar ou desaparecer se o sistema continuar em execução ou for desligado",
        "Porque os processos nunca mudam de estado, independentemente do tempo",
        "Porque a lista de processos não tem qualquer valor probatório",
        "Porque só é possível ver processos depois de o sistema ser desligado"
      ],
      "correct": 0,
      "exp": [
        "Correto — processos maliciosos ou de curta duração podem desaparecer se não forem documentados rapidamente, sendo por isso um dado com elevada volatilidade prática.",
        "Errado — os processos mudam constantemente de estado enquanto o sistema está em execução.",
        "Errado — a lista de processos ativos pode ter enorme valor probatório numa investigação de intrusão ou malware.",
        "Errado — é precisamente o oposto: os processos só podem ser vistos enquanto o sistema está ligado e em execução."
      ]
    }
  ]
};
