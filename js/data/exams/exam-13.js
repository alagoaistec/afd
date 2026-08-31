window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["exam-13"] = {
  "id": "exam-13",
  "title": "Artefactos do Windows II: Prefetch, Amcache e Reciclagem",
  "topic": "Artefactos do Windows",
  "type": "mcq",
  "questions": [
    {
      "q": "O que é o Prefetch, referido no material 'Practical Windows Forensics'?",
      "options": [
        "Um mecanismo do Windows que guarda ficheiros com informação sobre aplicações executadas, para acelerar arranques futuros",
        "Uma extensão de imagem exclusiva do Windows",
        "Um protocolo de segurança de rede",
        "Um serviço de armazenamento cloud da Microsoft"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Prefetch guarda ficheiros .pf com informação sobre aplicações executadas, incluindo quando e quantas vezes, para acelerar arranques futuros — um artefacto muito valioso forensicamente.",
        "Errado — não é uma extensão de imagem.",
        "Errado — não é um protocolo de segurança de rede.",
        "Errado — não é um serviço de armazenamento cloud."
      ]
    },
    {
      "q": "Que informação forense valiosa pode ser extraída de um ficheiro de Prefetch?",
      "options": [
        "O nome do executável, o número de vezes que foi executado e datas/horas de execução",
        "Apenas a cor do ícone da aplicação",
        "Apenas o preço de compra do software",
        "Apenas o nome do fabricante do teclado"
      ],
      "correct": 0,
      "exp": [
        "Correto — os ficheiros de Prefetch registam o nome do executável, número de execuções e datas/horas, sendo evidência valiosa da execução de programas.",
        "Errado — não regista informação sobre ícones.",
        "Errado — não regista informação de preço de software.",
        "Errado — não regista informação sobre periféricos como o teclado."
      ]
    },
    {
      "q": "Qual ferramenta é referida no material de apoio especificamente para analisar ficheiros de Prefetch?",
      "options": [
        "PECmd",
        "USBDeview",
        "RegRipper",
        "NTFS Linker"
      ],
      "correct": 0,
      "exp": [
        "Correto — o PECmd é a ferramenta referida especificamente para analisar ficheiros de Prefetch (.pf).",
        "Errado — o USBDeview foca dispositivos USB.",
        "Errado — o RegRipper foca extração geral de dados do registo.",
        "Errado — o NTFS Linker relaciona-se com o sistema de ficheiros NTFS."
      ]
    },
    {
      "q": "O que é o Amcache, referido no material de apoio?",
      "options": [
        "Um ficheiro do sistema que regista informação sobre execução de aplicações, incluindo caminhos e hashes de ficheiros executáveis",
        "Um tipo de memória cache física do processador",
        "Um protocolo de encriptação de disco completo",
        "Um serviço de backup automático na cloud"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Amcache regista informação sobre execução de aplicações, incluindo caminhos e hashes de executáveis, complementando o Shimcache e o Prefetch.",
        "Errado — não é memória cache física de hardware.",
        "Errado — não é um protocolo de encriptação de disco.",
        "Errado — não é um serviço de backup na cloud."
      ]
    },
    {
      "q": "Qual ferramenta é referida no material de apoio especificamente para analisar o Amcache?",
      "options": [
        "AmcacheParser",
        "PECmd",
        "LECmd",
        "Rufiuti2"
      ],
      "correct": 0,
      "exp": [
        "Correto — o AmcacheParser é referido especificamente para esta função no material de apoio.",
        "Errado — o PECmd analisa Prefetch, não Amcache.",
        "Errado — o LECmd analisa ficheiros LNK, não Amcache.",
        "Errado — o Rufiuti2 não é a ferramenta indicada para Amcache."
      ]
    },
    {
      "q": "O que é o Windows Application Compatibility Cache (Shimcache), referido no material de apoio?",
      "options": [
        "Um mecanismo que regista informação sobre executáveis (nome, caminho, timestamp) para verificar compatibilidade de aplicações",
        "Um protocolo de rede para partilha de ficheiros",
        "Um sistema de alerta de vírus em tempo real",
        "Um tipo de teclado virtual"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Shimcache regista informação sobre executáveis, como nome, caminho e timestamp, para efeitos de compatibilidade, sendo também valioso na investigação de execução de programas.",
        "Errado — não é um protocolo de partilha de ficheiros.",
        "Errado — não é um sistema de alerta de vírus.",
        "Errado — não é um tipo de teclado virtual."
      ]
    },
    {
      "q": "Qual ferramenta é referida no material de apoio para analisar o Shimcache (Application Compatibility Cache)?",
      "options": [
        "AppCompatCacheParser",
        "ShellBags Explorer",
        "JLECmd",
        "Sqlite-parser"
      ],
      "correct": 0,
      "exp": [
        "Correto — o AppCompatCacheParser é referido especificamente para analisar o Shimcache/Application Compatibility Cache.",
        "Errado — o ShellBags Explorer analisa ShellBags, não o Shimcache.",
        "Errado — o JLECmd analisa Jump Lists, não o Shimcache.",
        "Errado — o Sqlite-parser analisa bases de dados SQLite, não o Shimcache."
      ]
    },
    {
      "q": "Na Reciclagem (Recycle Bin) do Windows, que informação forense pode ser obtida sobre ficheiros apagados?",
      "options": [
        "O caminho/localização original do ficheiro e a data/hora em que foi eliminado",
        "Apenas o preço de compra do ficheiro",
        "Apenas o nome do fabricante do disco rígido",
        "Apenas a temperatura ambiente no momento da eliminação"
      ],
      "correct": 0,
      "exp": [
        "Correto — a Reciclagem regista metadados relevantes, como o caminho original do ficheiro e a data/hora da eliminação, mesmo depois de a Reciclagem ser esvaziada em certos cenários.",
        "Errado — não é informação armazenada relativa a preços.",
        "Errado — não é informação armazenada relativa ao fabricante do disco.",
        "Errado — não é informação forense relevante recolhida pela Reciclagem."
      ]
    },
    {
      "q": "O que é a 'RDP Cache', referida no material de apoio, no contexto de investigações de Ligação por Ambiente de Trabalho Remoto?",
      "options": [
        "Uma cache local com fragmentos de imagens/bitmaps que podem revelar o que foi visualizado durante uma sessão RDP",
        "Uma lista de contactos telefónicos sincronizados",
        "Um repositório de senhas em texto simples sempre acessível",
        "Um registo do consumo de energia da placa gráfica"
      ],
      "correct": 0,
      "exp": [
        "Correto — a RDP Cache guarda fragmentos de bitmaps da sessão remota, que podem ser reconstruídos para revelar o que foi visualizado durante a ligação RDP.",
        "Errado — não tem relação com contactos telefónicos.",
        "Errado — não expõe senhas em texto simples desta forma.",
        "Errado — não tem relação com consumo energético da placa gráfica."
      ]
    },
    {
      "q": "O que é a Volume Shadow Copy Service (VSS), referida no material de apoio?",
      "options": [
        "Um serviço do Windows que cria cópias de sombra (snapshots) de volumes, podendo conter versões anteriores de ficheiros",
        "Um serviço de streaming de vídeo integrado no Windows",
        "Um protocolo de rede para VPN",
        "Um comando para formatar discos rapidamente"
      ],
      "correct": 0,
      "exp": [
        "Correto — o VSS cria cópias de sombra (snapshots) de volumes, que podem preservar versões anteriores de ficheiros, sendo uma fonte valiosa de evidência histórica.",
        "Errado — não é um serviço de streaming de vídeo.",
        "Errado — não é um protocolo VPN.",
        "Errado — não é um comando de formatação de discos."
      ]
    },
    {
      "q": "Qual ferramenta é referida no material de apoio (lista de ferramentas Windows) para visualizar Volume Shadow Copies?",
      "options": [
        "ShadowCopy-View",
        "USBDeview",
        "Bulk Extractor",
        "AnalyzeMFT"
      ],
      "correct": 0,
      "exp": [
        "Correto — o ShadowCopy-View é referido especificamente para explorar/visualizar Volume Shadow Copies.",
        "Errado — o USBDeview foca dispositivos USB, não VSS.",
        "Errado — o Bulk Extractor foca extração massiva de dados de imagens, não especificamente VSS.",
        "Errado — o AnalyzeMFT foca a MFT do NTFS, não VSS diretamente."
      ]
    },
    {
      "q": "As 'IE typed URLs' referidas no material de apoio registam:",
      "options": [
        "URLs que o utilizador digitou manualmente na barra de endereços do Internet Explorer",
        "Apenas URLs de páginas visitadas por publicidade automática",
        "Apenas o número total de separadores abertos",
        "Apenas as extensões instaladas no navegador"
      ],
      "correct": 0,
      "exp": [
        "Correto — este artefacto regista URLs digitados manualmente pelo utilizador na barra de endereços do Internet Explorer, distinguindo-se de páginas apenas visitadas por link.",
        "Errado — não regista automaticamente publicidade, apenas o que foi digitado manualmente.",
        "Errado — não regista o número de separadores abertos.",
        "Errado — não regista extensões instaladas no navegador."
      ]
    },
    {
      "q": "Qual é a relevância forense do artefacto ThumbCache no Windows?",
      "options": [
        "Pode conter miniaturas (thumbnails) de imagens que já foram visualizadas ou que existiram no sistema, mesmo após serem apagadas",
        "Regista apenas o número de impressoras instaladas",
        "Regista apenas o volume máximo dos altifalantes",
        "Regista apenas a marca do rato utilizado"
      ],
      "correct": 0,
      "exp": [
        "Correto — o ThumbCache pode reter miniaturas de imagens vistas mesmo após o ficheiro original ser eliminado, sendo um artefacto valioso em investigações relacionadas com conteúdo visual.",
        "Errado — não tem relação com impressoras instaladas.",
        "Errado — não tem relação com volume de altifalantes.",
        "Errado — não tem relação com o rato utilizado."
      ]
    },
    {
      "q": "Qual ferramenta é referida no material de apoio para visualizar o conteúdo do ThumbCache?",
      "options": [
        "ThumbCache Viewer",
        "Timeline Explorer",
        "RECmd",
        "Sysmon"
      ],
      "correct": 0,
      "exp": [
        "Correto — o ThumbCache Viewer é a ferramenta específica referida para esta função.",
        "Errado — o Timeline Explorer serve para visualizar linhas temporais de eventos gerais.",
        "Errado — o RECmd serve para consultar o registo do Windows.",
        "Errado — o Sysmon monitoriza eventos do sistema em tempo real, não é um visualizador de thumbnails."
      ]
    },
    {
      "q": "O 'System Resource Utilization Monitor (SRUM)', referido no material de apoio, é útil para uma investigação porque:",
      "options": [
        "Regista o uso histórico de recursos e rede por aplicação, mesmo semanas depois do evento",
        "Regista apenas a temperatura da CPU em tempo real",
        "Regista apenas as cores usadas no ambiente de trabalho",
        "Regista apenas os idiomas instalados"
      ],
      "correct": 0,
      "exp": [
        "Correto — o SRUM regista o uso histórico de recursos (CPU, rede) por aplicação, permitindo reconstruir atividade mesmo passadas semanas do evento original.",
        "Errado — não fornece medições de temperatura da CPU em tempo real.",
        "Errado — não tem relação com personalização visual.",
        "Errado — não tem relação com idiomas instalados no sistema."
      ]
    },
    {
      "q": "Qual das seguintes ferramentas Windows é usada para parsing e análise de ficheiros LNK, segundo o material de apoio?",
      "options": [
        "LECmd",
        "AmcacheParser",
        "PECmd",
        "Autoruns"
      ],
      "correct": 0,
      "exp": [
        "Correto — o LECmd é a ferramenta referida especificamente para análise de ficheiros LNK (atalhos).",
        "Errado — o AmcacheParser analisa o Amcache, não LNK.",
        "Errado — o PECmd analisa ficheiros de Prefetch, não LNK.",
        "Errado — o Autoruns foca programas de arranque automático, não LNK."
      ]
    },
    {
      "q": "Sobre a Reciclagem do Windows (Recycle Bin), qual das seguintes afirmações é a mais correta?",
      "options": [
        "Ficheiros movidos para a Reciclagem mantêm metadados que podem ser recuperados mesmo depois de 'esvaziar', dependendo do sistema de ficheiros e sobrescrita",
        "Uma vez esvaziada, é sempre 100% impossível recuperar qualquer informação em qualquer cenário",
        "A Reciclagem nunca guarda informação sobre a origem do ficheiro",
        "A Reciclagem é exclusiva de sistemas Linux"
      ],
      "correct": 0,
      "exp": [
        "Correto — dependendo do sistema de ficheiros e se os dados foram sobrescritos, é possível recuperar metadados e até conteúdo de ficheiros eliminados da Reciclagem.",
        "Errado — a recuperação depende de vários fatores técnicos, não é impossível em absoluto.",
        "Errado — a Reciclagem regista precisamente metadados sobre a origem/caminho original do ficheiro.",
        "Errado — a Reciclagem (Recycle Bin) é um componente do Windows, não do Linux."
      ]
    },
    {
      "q": "Qual das seguintes ferramentas do material de apoio é usada para consultar chaves específicas do registo de forma automatizada (extração em massa de artefactos)?",
      "options": [
        "RegRipper",
        "Photoshop",
        "Excel",
        "Illustrator"
      ],
      "correct": 0,
      "exp": [
        "Correto — o RegRipper é referido como ferramenta para extração automatizada de artefactos-chave do registo do Windows.",
        "Errado — o Photoshop é software de edição de imagem, sem relação forense.",
        "Errado — o Excel é uma folha de cálculo, sem esta função específica de extração do registo.",
        "Errado — o Illustrator é software de design vetorial, sem relação forense."
      ]
    },
    {
      "q": "Num cenário de investigação onde se suspeita que um utilizador executou uma ferramenta de hacking manualmente, quais artefactos combinados seriam mais úteis para confirmar essa execução?",
      "options": [
        "RunMRU, Prefetch, Shimcache e Amcache, correlacionando datas e nomes de executáveis",
        "Apenas a cor do papel de parede",
        "Apenas o volume dos altifalantes",
        "Apenas o nome da impressora predefinida"
      ],
      "correct": 0,
      "exp": [
        "Correto — combinar RunMRU (execução via Run), Prefetch (execução de aplicações), Shimcache e Amcache (execução/compatibilidade) permite correlacionar de forma robusta a execução de uma ferramenta específica.",
        "Errado — a cor do papel de parede não tem qualquer valor forense para este cenário.",
        "Errado — o volume dos altifalantes não tem relação com execução de programas.",
        "Errado — a impressora predefinida não tem relação com execução de ferramentas suspeitas."
      ]
    },
    {
      "q": "Qual das seguintes é uma limitação a ter em conta ao usar apenas o Prefetch como prova de execução de um programa?",
      "options": [
        "O Prefetch pode não estar ativado em todos os sistemas/configurações, e tem limite de entradas armazenadas, podendo dados antigos ser sobrescritos",
        "O Prefetch é sempre 100% infalível, sem qualquer limitação",
        "O Prefetch nunca existiu em nenhuma versão do Windows",
        "O Prefetch só existe em sistemas Linux"
      ],
      "correct": 0,
      "exp": [
        "Correto — é importante considerar que o Prefetch pode não estar sempre ativado (ex.: em SSDs por vezes é desativado) e tem um limite de entradas, podendo dados mais antigos ser sobrescritos por novas execuções.",
        "Errado — nenhuma fonte de evidência digital deve ser considerada infalível isoladamente; a correlação com outros artefactos é essencial.",
        "Errado — o Prefetch existe em várias versões do Windows, sendo um artefacto amplamente documentado.",
        "Errado — o Prefetch é um mecanismo específico do Windows, não do Linux."
      ]
    }
  ]
};
