window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["exam-12"] = {
  "id": "exam-12",
  "title": "Artefactos do Windows I: MRUs, ShellBags e USB",
  "topic": "Artefactos do Windows",
  "type": "mcq",
  "questions": [
    {
      "q": "O que são ShellBags, segundo o material 'Practical Windows Forensics'?",
      "options": [
        "Artefactos do registo que registam informação sobre pastas visualizadas pelo utilizador no Explorador de Ficheiros, incluindo pastas já removidas do disco",
        "Um tipo de saco de compras usado em lojas online",
        "Um protocolo de encriptação de disco",
        "Um comando de linha para eliminar ficheiros temporários"
      ],
      "correct": 0,
      "exp": [
        "Correto — os ShellBags guardam informação sobre pastas navegadas pelo utilizador no Explorador, permanecendo mesmo após a pasta ou dispositivo ser removido, o que os torna muito valiosos forensicamente.",
        "Errado — não tem relação com compras online.",
        "Errado — não é um protocolo de encriptação.",
        "Errado — não é um comando de eliminação de ficheiros."
      ]
    },
    {
      "q": "Por que os ShellBags são particularmente valiosos numa investigação forense?",
      "options": [
        "Porque podem revelar a existência de pastas ou unidades (ex.: USB) que já não existem mais no sistema",
        "Porque mostram sempre a password do utilizador em texto simples",
        "Porque eliminam automaticamente evidência antiga",
        "Porque nunca podem ser analisados por ferramentas forenses"
      ],
      "correct": 0,
      "exp": [
        "Correto — os ShellBags podem revelar vestígios de pastas/unidades que já não existem no sistema, sendo úteis para provar que determinado conteúdo existiu e foi acedido.",
        "Errado — não armazenam passwords em texto simples.",
        "Errado — não têm essa função de eliminação de evidência.",
        "Errado — existem ferramentas dedicadas, como o Shellbags Explorer, para os analisar."
      ]
    },
    {
      "q": "Qual ferramenta é referida no material de apoio (Forensics Tools for Windows) especificamente para analisar ShellBags?",
      "options": [
        "Shellbags Explorer",
        "Timeline Explorer",
        "Event Log Explorer",
        "Plist Editor"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Shellbags Explorer é a ferramenta listada especificamente para esta finalidade.",
        "Errado — o Timeline Explorer serve para visualizar linhas temporais de eventos, não especificamente ShellBags.",
        "Errado — o Event Log Explorer analisa logs de eventos do Windows, não ShellBags.",
        "Errado — o Plist Editor edita ficheiros .plist (associados a macOS/iOS), não ShellBags."
      ]
    },
    {
      "q": "Quando um dispositivo USB é ligado a um computador Windows, que tipo de informação fica registada no sistema, segundo o material de apoio?",
      "options": [
        "Identificadores do dispositivo (ex.: número de série), primeira e última vez que foi ligado, entre outros metadados",
        "Nenhuma informação fica registada em lado nenhum",
        "Apenas a cor física do dispositivo USB",
        "Apenas o preço de compra do dispositivo"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Windows regista identificadores do dispositivo USB (como número de série), datas de ligação, entre outros metadados relevantes para a investigação.",
        "Errado — pelo contrário, ficam registados vários artefactos sobre dispositivos USB ligados.",
        "Errado — a cor física não é registada digitalmente pelo sistema.",
        "Errado — o preço de compra não é um dado registado pelo sistema operativo."
      ]
    },
    {
      "q": "Qual ferramenta é referida no material de apoio para investigar especificamente dispositivos USB ligados a um sistema Windows?",
      "options": [
        "USBDeview",
        "Bulk Extractor",
        "RegRipper",
        "AmcacheParser"
      ],
      "correct": 0,
      "exp": [
        "Correto — o USBDeview é referido especificamente para investigar dispositivos USB montados/ligados a um sistema Windows.",
        "Errado — o Bulk Extractor foca extração de dados brutos (emails, URLs, etc.), não especificamente dispositivos USB.",
        "Errado — o RegRipper foca a extração geral de dados do registo do Windows.",
        "Errado — o AmcacheParser foca o ficheiro Amcache, relacionado com execução de programas."
      ]
    },
    {
      "q": "O que regista tipicamente o UserAssist, um artefacto do registo do Windows referido no material de apoio?",
      "options": [
        "Aplicações executadas pelo utilizador através do Explorador do Windows, incluindo contagem de execuções",
        "Apenas o volume de som configurado",
        "Apenas a resolução do ecrã",
        "Apenas o fuso horário do sistema"
      ],
      "correct": 0,
      "exp": [
        "Correto — o UserAssist regista aplicações executadas pelo utilizador via Explorador, incluindo o número de vezes que foram executadas, sendo muito útil para reconstruir atividade do utilizador.",
        "Errado — não tem relação com definições de som.",
        "Errado — não tem relação com resolução de ecrã.",
        "Errado — não tem relação com o fuso horário do sistema (esse é outro artefacto distinto)."
      ]
    },
    {
      "q": "Quais as chaves 'Hidden Files settings' e 'Files Extensions hiding settings' do registo permitem determinar, segundo o material de apoio?",
      "options": [
        "Se o utilizador configurou o sistema para ocultar ficheiros ou extensões de ficheiros",
        "Apenas a marca da placa gráfica instalada",
        "Apenas o idioma do sistema operativo",
        "Apenas o número de contas de email configuradas"
      ],
      "correct": 0,
      "exp": [
        "Correto — estas chaves permitem determinar se o utilizador configurou o sistema para ocultar ficheiros ou as suas extensões, um indicador relevante em investigações de ocultação de dados.",
        "Errado — não tem relação com hardware gráfico.",
        "Errado — não tem relação com o idioma do sistema.",
        "Errado — não tem relação com contas de email configuradas."
      ]
    },
    {
      "q": "O que são as 'Auto-run Keys' referidas no material de apoio?",
      "options": [
        "Chaves do registo que definem programas que arrancam automaticamente com o Windows, frequentemente usadas por malware para persistência",
        "Chaves que controlam apenas o volume dos altifalantes",
        "Chaves que definem apenas o papel de parede do ambiente de trabalho",
        "Chaves relacionadas apenas com o relógio do sistema"
      ],
      "correct": 0,
      "exp": [
        "Correto — as Auto-run Keys definem programas que arrancam automaticamente com o Windows, sendo um local clássico onde malware se instala para garantir persistência.",
        "Errado — não têm relação com controlo de volume.",
        "Errado — não têm relação com o papel de parede.",
        "Errado — não têm relação direta com o relógio do sistema."
      ]
    },
    {
      "q": "Qual ferramenta é referida no material de apoio como especializada em analisar/gerir programas de arranque automático (autostart)?",
      "options": [
        "Autoruns",
        "Timeline Explorer",
        "Exiftool",
        "NTFS Linker"
      ],
      "correct": 0,
      "exp": [
        "Correto — o Autoruns (Sysinternals) é a ferramenta referida especificamente para analisar entradas de arranque automático.",
        "Errado — o Timeline Explorer serve para visualizar linhas temporais, não especificamente autostart.",
        "Errado — o Exiftool serve para extrair metadados de ficheiros (imagens, documentos), não autostart.",
        "Errado — o NTFS Linker relaciona-se com o sistema de ficheiros NTFS, não especificamente com autostart."
      ]
    },
    {
      "q": "Segundo o material de apoio, o que revela a informação de 'Timezone Information' guardada no registo do Windows?",
      "options": [
        "O fuso horário configurado no sistema, importante para correlacionar timestamps de eventos com precisão",
        "A localização exata via GPS do dispositivo",
        "O nome do administrador de rede",
        "A marca do router usado"
      ],
      "correct": 0,
      "exp": [
        "Correto — a informação de fuso horário é crucial para correlacionar corretamente timestamps de diferentes fontes de evidência numa investigação.",
        "Errado — não fornece coordenadas GPS diretas.",
        "Errado — não tem relação com o nome do administrador de rede.",
        "Errado — não tem relação com a marca do router."
      ]
    },
    {
      "q": "O artefacto 'Last Shutdown', referido no material de apoio, é útil numa investigação para:",
      "options": [
        "Determinar quando o sistema foi desligado pela última vez, útil para construir uma linha temporal de eventos",
        "Determinar a cor do ecrã de arranque",
        "Determinar o modelo exato da bateria do portátil",
        "Determinar a marca do sistema operativo instalado"
      ],
      "correct": 0,
      "exp": [
        "Correto — este artefacto ajuda a determinar quando o sistema foi desligado pela última vez, contribuindo para a construção de uma timeline forense.",
        "Errado — não tem relação com o ecrã de arranque.",
        "Errado — não tem relação com a bateria do dispositivo.",
        "Errado — o Last Shutdown não identifica a marca do SO, apenas o momento de encerramento."
      ]
    },
    {
      "q": "Segundo o material de apoio, o artefacto 'SAM Users' permite obter que tipo de informação?",
      "options": [
        "Informação sobre as contas de utilizador locais existentes no sistema",
        "Apenas o histórico de navegação web",
        "Apenas as extensões de ficheiro associadas ao Word",
        "Apenas a lista de impressoras instaladas"
      ],
      "correct": 0,
      "exp": [
        "Correto — o hive SAM contém informação sobre as contas de utilizador locais, incluindo hashes de passwords, sendo um artefacto central em investigações.",
        "Errado — não tem relação direta com histórico de navegação web.",
        "Errado — não tem relação com associações de ficheiro do Word.",
        "Errado — não tem relação com impressoras instaladas."
      ]
    },
    {
      "q": "O artefacto 'Last User Logged In', referido no material de apoio, é útil para determinar:",
      "options": [
        "Qual foi o último utilizador que iniciou sessão no sistema",
        "Qual foi o primeiro programa instalado no computador",
        "Qual é a marca da placa-mãe",
        "Qual é o preço do sistema operativo"
      ],
      "correct": 0,
      "exp": [
        "Correto — este artefacto identifica o último utilizador que iniciou sessão, relevante para determinar quem estava a usar o sistema num dado momento.",
        "Errado — não tem relação com o primeiro programa instalado.",
        "Errado — não tem relação com a placa-mãe.",
        "Errado — não tem relação com o preço de licenciamento."
      ]
    },
    {
      "q": "Qual é o objetivo forense de analisar a chave 'Network list' no registo do Windows?",
      "options": [
        "Identificar as redes (ex.: wifi) a que o dispositivo já se ligou, útil para reconstruir a localização/contexto do dispositivo",
        "Determinar a marca do cabo de rede utilizado",
        "Determinar apenas a cor do ícone de rede",
        "Determinar o número de portas USB disponíveis"
      ],
      "correct": 0,
      "exp": [
        "Correto — a Network list permite identificar as redes a que o dispositivo já se ligou, ajudando a reconstruir contexto ou localização aproximada ao longo do tempo.",
        "Errado — não tem relação com o tipo de cabo de rede físico.",
        "Errado — não tem relação com cores de ícones.",
        "Errado — não tem relação com o número de portas USB do dispositivo."
      ]
    },
    {
      "q": "O 'User Account Control (UAC)', referido no material de apoio, está relacionado com:",
      "options": [
        "As definições de controlo de permissões/elevação de privilégios no Windows",
        "O controlo de volume do sistema de som",
        "A gestão da bateria em portáteis",
        "A escolha do papel de parede padrão"
      ],
      "correct": 0,
      "exp": [
        "Correto — o UAC está relacionado com o controlo de permissões e a elevação de privilégios necessária para executar certas ações no Windows.",
        "Errado — não tem relação com o volume do sistema de som.",
        "Errado — não tem relação com gestão de bateria.",
        "Errado — não tem relação com o papel de parede."
      ]
    },
    {
      "q": "Ficheiros LNK (atalhos), referidos no material de apoio, são úteis numa investigação porque:",
      "options": [
        "Podem apontar para ficheiros que já não existem no sistema, revelando a sua existência prévia e metadados associados",
        "Contêm sempre o conteúdo completo do ficheiro original embutido",
        "Nunca sobrevivem depois de o ficheiro original ser apagado",
        "Servem apenas para alterar o ícone do ambiente de trabalho"
      ],
      "correct": 0,
      "exp": [
        "Correto — os ficheiros LNK podem persistir mesmo depois de o ficheiro/dispositivo original deixar de existir, revelando a sua existência prévia e metadados (como caminho original e datas).",
        "Errado — um atalho aponta para o ficheiro, não contém o seu conteúdo integral.",
        "Errado — precisamente o contrário: os LNK costumam sobreviver à eliminação do ficheiro original, o que os torna valiosos.",
        "Errado — não é essa a função forense relevante dos ficheiros LNK."
      ]
    },
    {
      "q": "O que são as 'Jump Lists', referidas no material de apoio, no contexto do Windows?",
      "options": [
        "Listas que registam ficheiros e ações recentes associadas a uma aplicação específica, acessíveis a partir da barra de tarefas",
        "Um tipo de vírus que salta entre ficheiros",
        "Uma funcionalidade exclusiva de jogos",
        "Um protocolo de rede sem fios"
      ],
      "correct": 0,
      "exp": [
        "Correto — as Jump Lists registam ficheiros e ações recentes associadas a uma aplicação, acessíveis ao clicar com o botão direito no ícone da barra de tarefas.",
        "Errado — não é um tipo de malware.",
        "Errado — não é uma funcionalidade exclusiva de jogos.",
        "Errado — não é um protocolo de rede."
      ]
    },
    {
      "q": "Qual ferramenta é referida no material de apoio especificamente para analisar Jump Lists?",
      "options": [
        "JLECmd / Jumplists Explorer",
        "USBDeview",
        "Bstrings",
        "PECmd"
      ],
      "correct": 0,
      "exp": [
        "Correto — JLECmd e Jumplists Explorer são referidos como ferramentas especializadas na análise de Jump Lists.",
        "Errado — o USBDeview foca dispositivos USB, não Jump Lists.",
        "Errado — o Bstrings foca pesquisa de strings binárias, não especificamente Jump Lists.",
        "Errado — o PECmd foca ficheiros de Prefetch, não Jump Lists."
      ]
    },
    {
      "q": "O que regista a chave 'Typed Paths' do registo do Windows, referida no material de apoio?",
      "options": [
        "Caminhos de pastas/endereços que o utilizador escreveu manualmente na barra de endereços do Explorador",
        "Apenas a velocidade da ligação à internet",
        "Apenas o número de monitores ligados",
        "Apenas as definições de acessibilidade do sistema"
      ],
      "correct": 0,
      "exp": [
        "Correto — Typed Paths regista caminhos digitados manualmente pelo utilizador na barra de endereços do Explorador, revelando pastas ou unidades acedidas intencionalmente.",
        "Errado — não tem relação com velocidade de rede.",
        "Errado — não tem relação com o número de monitores.",
        "Errado — não tem relação com definições de acessibilidade."
      ]
    },
    {
      "q": "Segundo o material de apoio, a análise da chave 'Last Registry Key Viewed' pode revelar que informação numa investigação?",
      "options": [
        "Qual foi a última chave do registo que um utilizador explorou manualmente, sugerindo possível manipulação intencional do sistema",
        "A quantidade de RAM instalada no sistema",
        "O modelo exato do processador",
        "A resolução máxima suportada pelo monitor"
      ],
      "correct": 0,
      "exp": [
        "Correto — este artefacto pode indicar que um utilizador (ou atacante) explorou manualmente o registo, um sinal potencialmente relevante de atividade suspeita ou tentativa de alteração de configurações.",
        "Errado — não tem relação com a quantidade de RAM instalada.",
        "Errado — não tem relação com o modelo do processador.",
        "Errado — não tem relação com a resolução do monitor."
      ]
    }
  ]
};
