window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["exam-08"] = {
  "id": "exam-08",
  "title": "Ferramentas Forenses: Autopsy, Sleuth Kit e Comparação",
  "topic": "Ferramentas Forenses",
  "type": "mcq",
  "questions": [
    {
      "q": "O que é o Autopsy, segundo a sebenta e o material de apoio?",
      "options": [
        "Uma solução de investigação de disco rígido rápida, completa e eficiente, com interface gráfica sobre o The Sleuth Kit",
        "Um antivírus para telemóveis Android",
        "Um serviço de streaming de música",
        "Um editor de vídeo profissional"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta descreve o Autopsy como uma solução de investigação de disco rígido rápida, completa e eficiente; é a plataforma gráfica sobre o The Sleuth Kit e outras ferramentas forenses.",
        "Errado — não é um antivírus para telemóveis.",
        "Errado — não tem qualquer relação com streaming de música.",
        "Errado — não é um editor de vídeo."
      ]
    },
    {
      "q": "A afirmação 'O Autopsy é a ferramenta que melhor se ajusta para investigação por keywords e metadados, logo após o Collection de uma evidência' é:",
      "options": [
        "Uma descrição precisa e completa de todas as capacidades do Autopsy",
        "Uma simplificação que ignora que o Autopsy serve sobretudo na fase de Examination/Analysis, com muitas outras capacidades além de keywords e metadados",
        "Totalmente inaplicável ao Autopsy",
        "Válida apenas para ficheiros de vídeo"
      ],
      "correct": 1,
      "exp": [
        "Errado — reduzir o Autopsy a pesquisa por keywords e metadados ignora capacidades como timeline analysis, hash filtering, data carving e deteção de indicadores de compromisso.",
        "Correto — este tipo de afirmação absoluta aparece nos exames reais como V/F a analisar criticamente: o Autopsy tem um leque de funcionalidades muito mais amplo do que apenas keywords/metadados.",
        "Errado — a pesquisa por keywords e metadados é, de facto, uma das funcionalidades do Autopsy, apenas não é a única nem exclusiva.",
        "Errado — o Autopsy trabalha com muito mais do que ficheiros de vídeo."
      ]
    },
    {
      "q": "Quais das seguintes funcionalidades são atribuídas ao Autopsy no material de apoio (Forensics Tools for Windows)?",
      "options": [
        "Time Line Analysis, Hash Filtering, Keyword Search, Web Artifacts, Data Carving, Multimedia e Indicators of Compromise",
        "Apenas edição de fotografias",
        "Apenas gestão de emails corporativos",
        "Apenas criação de apresentações de PowerPoint"
      ],
      "correct": 0,
      "exp": [
        "Correto — o material de apoio lista estas funcionalidades: Time Line Analysis, Hash Filtering, Keyword Search, Web Artifacts, Data Carving, Multimedia e Indicators of Compromise.",
        "Errado — o Autopsy não é uma ferramenta de edição de fotografias.",
        "Errado — não é uma ferramenta de gestão de emails corporativos.",
        "Errado — não tem relação com criação de apresentações."
      ]
    },
    {
      "q": "Ao adicionar uma fonte de dados (Add Data Source) no Autopsy, que tipo de origem pode ser selecionada?",
      "options": [
        "Disk Image ou VM File",
        "Apenas ficheiros .docx",
        "Apenas páginas web ao vivo",
        "Apenas contas de redes sociais"
      ],
      "correct": 0,
      "exp": [
        "Correto — segundo o material de apoio, ao lançar o Autopsy escolhe-se 'Disk Image or VM File' e seleciona-se o caminho para a imagem.",
        "Errado — não está limitado a ficheiros .docx.",
        "Errado — o Autopsy analisa imagens forenses, não páginas web ao vivo diretamente.",
        "Errado — não analisa diretamente contas de redes sociais."
      ]
    },
    {
      "q": "O que é o The Sleuth Kit (TSK), segundo a sebenta?",
      "options": [
        "Utilitários baseados em Unix e Windows que extraem dados dos sistemas de computador",
        "Um serviço de email gratuito",
        "Um jogo de simulação forense",
        "Uma extensão de navegador para bloquear anúncios"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta define o The Sleuth Kit como utilitários baseados em Unix e Windows que extraem dados dos sistemas de computador.",
        "Errado — não é um serviço de email.",
        "Errado — não é um jogo, é uma ferramenta forense real.",
        "Errado — não tem relação com bloqueio de anúncios."
      ]
    },
    {
      "q": "Que ferramenta é referida na sebenta como um software relevante para pesquisar metadados publicamente expostos de documentos (ex.: em sites institucionais)?",
      "options": [
        "FOCA",
        "Wireshark",
        "Volatility",
        "Autopsy"
      ],
      "correct": 0,
      "exp": [
        "Correto — o FOCA (github.com/ElevenPaths/FOCA) é referido na sebenta como exemplo prático de utilização de metadados.",
        "Errado — o Wireshark é uma ferramenta de análise de tráfego de rede, não de metadados de documentos.",
        "Errado — o Volatility é uma ferramenta de análise de memória, não de metadados de documentos.",
        "Errado — o Autopsy é uma plataforma forense de disco, não uma ferramenta especializada em metadados públicos."
      ]
    },
    {
      "q": "Segundo o material de apoio (Forensics Tools for Windows), qual das seguintes é uma ferramenta específica para analisar ShellBags?",
      "options": [
        "Shellbags Explorer",
        "USBDeview",
        "Wireshark",
        "NetworkMiner"
      ],
      "correct": 0,
      "exp": [
        "Correto — 'Shellbags Explorer' é listado no material de apoio como ferramenta dedicada à análise de ShellBags.",
        "Errado — USBDeview foca dispositivos USB, não ShellBags.",
        "Errado — Wireshark é uma ferramenta de captura/análise de rede.",
        "Errado — NetworkMiner é uma ferramenta de análise de tráfego de rede."
      ]
    },
    {
      "q": "Qual ferramenta listada no material de apoio é usada especificamente para analisar dispositivos USB montados/ligados a um sistema Windows?",
      "options": [
        "USBDeview",
        "PECmd",
        "JLECmd",
        "Bstrings"
      ],
      "correct": 0,
      "exp": [
        "Correto — o USBDeview é listado como ferramenta orientada à análise de dispositivos USB.",
        "Errado — PECmd é usado para analisar ficheiros de Prefetch, não dispositivos USB.",
        "Errado — JLECmd é usado para analisar Jump Lists, não dispositivos USB.",
        "Errado — Bstrings é usado para pesquisa de strings binárias, não especificamente para USB."
      ]
    },
    {
      "q": "Qual das seguintes ferramentas de análise de memória é referida tanto na sebenta como no material de apoio (Forensics Tools for Windows)?",
      "options": [
        "Volatility",
        "Illustrator",
        "Premiere Pro",
        "InDesign"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Volatility é referido em ambos os materiais como ferramenta de análise de memória (memory forensics).",
        "Errado — Illustrator é software de design gráfico, sem relação forense.",
        "Errado — Premiere Pro é software de edição de vídeo, sem relação forense.",
        "Errado — InDesign é software de design editorial, sem relação forense."
      ]
    },
    {
      "q": "No material de apoio, quais ferramentas são referidas como específicas para o sistema operativo Linux/CentOS (e não Windows)?",
      "options": [
        "Guymager, Ddrescue, Foremost e Extundelete",
        "FTK Imager e Autopsy",
        "Registry Explorer e RECmd",
        "AppCompatCacheParser e AmcacheParser"
      ],
      "correct": 0,
      "exp": [
        "Correto — Guymager, Ddrescue, Foremost e Extundelete estão listados na secção de ferramentas para CentOS 7 (Linux).",
        "Errado — FTK Imager e Autopsy estão listados na secção de ferramentas Windows.",
        "Errado — Registry Explorer/RECmd são ferramentas Windows, relacionadas com o registo.",
        "Errado — AppCompatCacheParser e AmcacheParser são ferramentas Windows para análise do Shimcache/Amcache."
      ]
    },
    {
      "q": "Qual das seguintes ferramentas Windows é referida no material de apoio para extração e análise da Master File Table (MFT) do NTFS?",
      "options": [
        "AnalyzeMFT",
        "Wireshark",
        "USBDeview",
        "Sysmon"
      ],
      "correct": 0,
      "exp": [
        "Correto — o AnalyzeMFT é listado especificamente para extrair e analisar a Master File Table (MFT) de sistemas NTFS.",
        "Errado — o Wireshark analisa tráfego de rede, não a MFT.",
        "Errado — o USBDeview analisa dispositivos USB, não a MFT.",
        "Errado — o Sysmon monitoriza eventos do sistema em tempo real, não a MFT."
      ]
    },
    {
      "q": "Qual é a principal diferença de propósito entre o FTK Imager e o Autopsy, segundo o conjunto de materiais da unidade curricular?",
      "options": [
        "O FTK Imager foca principalmente a aquisição/criação de imagens forenses; o Autopsy foca principalmente a análise e investigação sobre essas imagens",
        "São exatamente a mesma ferramenta com nomes diferentes",
        "O FTK Imager só funciona em telemóveis; o Autopsy só em computadores",
        "O Autopsy substitui totalmente a necessidade de criar uma imagem forense"
      ],
      "correct": 0,
      "exp": [
        "Correto — o FTK Imager é usado sobretudo na fase de aquisição (criar a imagem/cópia forense), enquanto o Autopsy é usado na fase de exame/análise dessa imagem.",
        "Errado — são ferramentas distintas com propósitos complementares, não idênticos.",
        "Errado — nenhuma das ferramentas está limitada dessa forma por tipo de dispositivo.",
        "Errado — o Autopsy analisa uma imagem, mas normalmente essa imagem precisa de ser criada previamente (ex.: com FTK Imager)."
      ]
    },
    {
      "q": "A afirmação 'O Autopsy é uma ferramenta gráfica de suporte e análise de uma investigação, no entanto não permite um trabalho em equipa de investigadores, catalogação de casos e associação de evidências a vários casos' é:",
      "options": [
        "Falsa — o Autopsy suporta efetivamente organização de casos, sendo esta descrição uma limitação incorretamente atribuída à ferramenta nos exames como pegadinha",
        "Sempre verdadeira e sem exceções",
        "Aplicável apenas à versão gratuita mais antiga sem qualquer dúvida",
        "Impossível de avaliar sem mais contexto"
      ],
      "correct": 0,
      "exp": [
        "Correto — esta afirmação surge literalmente num dos exames reais desta unidade curricular como uma pergunta V/F a considerar criticamente; o Autopsy é conhecido por suportar organização/catalogação de casos, contrariando a limitação descrita.",
        "Errado — a afirmação não corresponde às capacidades reais tipicamente descritas para ferramentas forenses gráficas modernas como o Autopsy.",
        "Errado — a questão não faz distinção entre versões do software no enunciado.",
        "Errado — a matéria da unidade curricular fornece contexto suficiente para avaliar criticamente esta afirmação."
      ]
    },
    {
      "q": "Qual ferramenta é referida no material de apoio como GUI (interface gráfica) para o Volatility Forensics?",
      "options": [
        "Volatility Workbench",
        "Wireshark",
        "NetworkMiner",
        "Sysmon"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta refere explicitamente o 'Volatility Workbench' como GUI para o Volatility Forensics.",
        "Errado — o Wireshark é uma ferramenta independente de análise de rede, não uma GUI do Volatility.",
        "Errado — o NetworkMiner é uma ferramenta independente de análise de rede.",
        "Errado — o Sysmon é uma ferramenta de monitorização de eventos do Windows, não uma GUI do Volatility."
      ]
    },
    {
      "q": "Qual ferramenta é referida na sebenta e no material de apoio como usada para pesquisar metadados de documentos publicamente disponíveis online (open-source intelligence)?",
      "options": [
        "FOCA",
        "RegRipper",
        "AnalyzeMFT",
        "LECmd"
      ],
      "correct": 0,
      "exp": [
        "Correto — o FOCA (ElevenPaths) é a ferramenta referida especificamente para exploração de metadados de documentos, muito usada em OSINT.",
        "Errado — o RegRipper foca a extração de dados do registo do Windows.",
        "Errado — o AnalyzeMFT foca a análise da Master File Table (MFT) do NTFS.",
        "Errado — o LECmd foca a análise de ficheiros LNK (atalhos)."
      ]
    },
    {
      "q": "Qual das seguintes é referida no material de apoio como ferramenta de captura de memória RAM em Windows, alternativa ao FTK Imager?",
      "options": [
        "Belkasoft Ram Capture",
        "Adobe Photoshop",
        "Google Chrome",
        "Microsoft Word"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Belkasoft Ram Capture é listado entre as ferramentas Windows para captura de memória.",
        "Errado — o Adobe Photoshop não tem qualquer função forense de captura de memória.",
        "Errado — o Google Chrome é um navegador, não uma ferramenta de captura de memória.",
        "Errado — o Microsoft Word é um processador de texto, sem função forense."
      ]
    },
    {
      "q": "No material de apoio, qual ferramenta é referida para deteção de indicadores de compromisso baseados em assinaturas (regras)?",
      "options": [
        "YARA-RULES",
        "Recycle Bin",
        "Notepad",
        "Calculator"
      ],
      "correct": 0,
      "exp": [
        "Correto — YARA-RULES é listado entre as ferramentas para deteção de malware/indicadores de compromisso através de regras de assinatura.",
        "Errado — a Reciclagem (Recycle Bin) é um artefacto do sistema, não uma ferramenta de deteção.",
        "Errado — o Notepad é um editor de texto simples, sem função forense.",
        "Errado — a Calculadora não tem qualquer função forense."
      ]
    },
    {
      "q": "Qual ferramenta é referida no material de apoio como analisador de logs NTFS (mudanças no sistema de ficheiros)?",
      "options": [
        "NTFS Log Tracker",
        "Excel",
        "PowerPoint",
        "Paint"
      ],
      "correct": 0,
      "exp": [
        "Correto — o NTFS Log Tracker é listado especificamente para análise de logs do sistema de ficheiros NTFS.",
        "Errado — o Excel é uma folha de cálculo, sem esta função forense específica.",
        "Errado — o PowerPoint é software de apresentações, sem esta função.",
        "Errado — o Paint é um editor de imagem simples, sem esta função."
      ]
    },
    {
      "q": "Qual das seguintes é referida no material de apoio como ferramenta para análise de tráfego de rede capturado (pcap)?",
      "options": [
        "Wireshark",
        "RegRipper",
        "PECmd",
        "AmcacheParser"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Wireshark é a ferramenta clássica de análise de pacotes/tráfego de rede referida no material de apoio.",
        "Errado — o RegRipper analisa o registo do Windows, não tráfego de rede.",
        "Errado — o PECmd analisa ficheiros Prefetch, não tráfego de rede.",
        "Errado — o AmcacheParser analisa o ficheiro Amcache, não tráfego de rede."
      ]
    },
    {
      "q": "Qual das ferramentas seguintes é referida no material de apoio como usada para recuperação de ficheiros apagados em sistemas Linux (ext2/ext3/ext4)?",
      "options": [
        "Extundelete",
        "Timeline Explorer",
        "ShellBags Explorer",
        "Registry Explorer"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Extundelete está listado entre as ferramentas Linux para recuperação de ficheiros apagados em sistemas de ficheiros ext.",
        "Errado — o Timeline Explorer é uma ferramenta Windows para visualizar linhas temporais de eventos.",
        "Errado — o ShellBags Explorer é uma ferramenta Windows para análise de ShellBags.",
        "Errado — o Registry Explorer é uma ferramenta Windows para análise do registo."
      ]
    }
  ]
};
