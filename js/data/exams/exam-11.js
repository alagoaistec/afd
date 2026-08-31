window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["exam-11"] = {
  "id": "exam-11",
  "title": "Registo do Windows: Estrutura e Hives",
  "topic": "Registo do Windows",
  "type": "mcq",
  "questions": [
    {
      "q": "O que é o registo do Windows (Windows Registry), segundo o material de apoio (Practical Windows Forensics)?",
      "options": [
        "Uma base de dados que contém toda a informação necessária para o sistema operativo e aplicações funcionarem, incluindo definições de configuração",
        "Um programa de edição de vídeo",
        "Um serviço de armazenamento em cloud gratuito",
        "Um antivírus incorporado no Windows"
      ],
      "correct": 0,
      "exp": [
        "Correto — o registo é descrito como uma base de dados com toda a informação de configuração do sistema operativo e das aplicações instaladas.",
        "Errado — não é um programa de edição de vídeo.",
        "Errado — não é um serviço de armazenamento cloud.",
        "Errado — não é um antivírus."
      ]
    },
    {
      "q": "Onde se encontra fisicamente o registo do Windows no sistema de ficheiros?",
      "options": [
        "Windows\\system32\\config",
        "C:\\Program Files apenas",
        "C:\\Users\\Public apenas",
        "Diretório temporário %TEMP% apenas"
      ],
      "correct": 0,
      "exp": [
        "Correto — o material de apoio indica que o registo se encontra em Windows\\system32\\config.",
        "Errado — Program Files contém programas instalados, não os hives do registo.",
        "Errado — Public é uma pasta partilhada de utilizadores, não onde reside o registo.",
        "Errado — o diretório temporário não é onde reside o registo do sistema."
      ]
    },
    {
      "q": "É possível copiar ou editar diretamente os ficheiros do registo enquanto o Windows está em execução, sem ferramentas especiais?",
      "options": [
        "Sim, sempre, sem qualquer restrição",
        "Não — é necessário usar ferramentas especiais como o FTK Imager, pois os ficheiros estão a ser usados pelo sistema",
        "Sim, mas apenas aos domingos",
        "Não é possível de forma alguma, mesmo com ferramentas especiais"
      ],
      "correct": 1,
      "exp": [
        "Errado — os ficheiros do registo estão bloqueados/em uso pelo sistema em execução.",
        "Correto — o material de apoio explica que não é possível copiar/editar diretamente os ficheiros do registo num Windows em execução, sendo necessário usar ferramentas especiais como o FTK Imager.",
        "Errado — não há qualquer restrição relacionada com o dia da semana.",
        "Errado — com as ferramentas corretas (ex.: FTK Imager) é possível aceder a estes ficheiros."
      ]
    },
    {
      "q": "Qual caminho corresponde ao hive HKEY_LOCAL_MACHINE\\SAM no sistema de ficheiros?",
      "options": [
        "C:\\Windows\\system32\\config\\sam",
        "C:\\Windows\\system32\\config\\software",
        "C:\\Windows\\system32\\config\\system",
        "C:\\Windows\\system32\\config\\security"
      ],
      "correct": 0,
      "exp": [
        "Correto — HKEY_LOCAL_MACHINE\\SAM corresponde a C:\\Windows\\system32\\config\\sam, contendo informação sobre contas de utilizador locais.",
        "Errado — esse caminho corresponde ao hive SOFTWARE, não ao SAM.",
        "Errado — esse caminho corresponde ao hive SYSTEM, não ao SAM.",
        "Errado — esse caminho corresponde ao hive SECURITY, não ao SAM."
      ]
    },
    {
      "q": "Onde se encontra o registo específico de cada utilizador (HKCU), conhecido como NTUSER.DAT?",
      "options": [
        "C:\\Users\\{UserName}\\NTUSER.DAT",
        "C:\\Windows\\system32\\config\\software",
        "C:\\Program Files\\NTUSER.DAT",
        "C:\\Windows\\Fonts\\NTUSER.DAT"
      ],
      "correct": 0,
      "exp": [
        "Correto — o ficheiro NTUSER.DAT, parte do registo referente a cada utilizador, encontra-se em C:\\Users\\{UserName}\\NTUSER.DAT, e o HKCU lê a partir dele.",
        "Errado — esse caminho é do hive SOFTWARE do sistema, não do utilizador específico.",
        "Errado — não é onde se encontra o ficheiro NTUSER.DAT.",
        "Errado — a pasta de Fontes não tem relação com o registo do utilizador."
      ]
    },
    {
      "q": "Onde é feita automaticamente uma cópia de segurança (backup) do registo do Windows, segundo o material de apoio?",
      "options": [
        "Windows\\system32\\config\\RegBack",
        "Numa pen drive externa automaticamente",
        "Na cloud da Microsoft sempre",
        "Não existe qualquer backup automático"
      ],
      "correct": 0,
      "exp": [
        "Correto — o material de apoio indica que existe uma cópia de segurança automática armazenada em Windows\\system32\\config\\RegBack.",
        "Errado — não é automaticamente copiado para uma pen drive externa.",
        "Errado — não é automaticamente enviado para a cloud da Microsoft por definição.",
        "Errado — existe efetivamente um backup automático local, como referido no material."
      ]
    },
    {
      "q": "Onde se localiza o Userclass.dat, referido no material de apoio?",
      "options": [
        "C:\\Users\\{username}\\AppData\\Local\\Microsoft\\Windows",
        "C:\\Windows\\system32\\config",
        "C:\\Program Files\\Common Files",
        "C:\\Windows\\Temp"
      ],
      "correct": 0,
      "exp": [
        "Correto — o material de apoio localiza o Userclass.dat em C:\\Users\\{username}\\AppData\\Local\\Microsoft\\Windows.",
        "Errado — esse é o diretório dos hives principais do sistema (SAM, SYSTEM, etc.), não do Userclass.dat.",
        "Errado — não é o caminho referido para este ficheiro.",
        "Errado — não é o caminho referido para este ficheiro."
      ]
    },
    {
      "q": "Como é estruturado o registo do Windows, segundo o material de apoio, em termos de Hives, Keys, Subkeys e Values?",
      "options": [
        "Hives contêm Keys, Keys podem conter Subkeys e Values, sendo os Values os dados propriamente ditos",
        "Todos são exatamente sinónimos entre si",
        "Values contêm Hives, invertendo a ordem lógica normal",
        "Não existe qualquer estrutura hierárquica no registo"
      ],
      "correct": 0,
      "exp": [
        "Correto — o material define Hives como diretórios do registo que contêm Keys; Keys podem conter outras Keys/Subkeys; e Values são os dados armazenados nas Keys.",
        "Errado — são conceitos distintos com uma relação hierárquica específica.",
        "Errado — a relação correta é o oposto: Hives contêm Keys que contêm Values.",
        "Errado — o registo tem uma estrutura hierárquica clara e bem definida."
      ]
    },
    {
      "q": "Quais ferramentas são referidas no material de apoio como preferidas para explorar o registo do Windows?",
      "options": [
        "Registry Explorer e Windows Regedit",
        "Microsoft Word e Excel",
        "Google Chrome e Firefox",
        "Adobe Acrobat e Reader"
      ],
      "correct": 0,
      "exp": [
        "Correto — o material de apoio indica Registry Explorer e Windows Regedit como as ferramentas preferidas para explorar o registo.",
        "Errado — não são ferramentas de exploração do registo.",
        "Errado — são navegadores web, não ferramentas de registo.",
        "Errado — não são ferramentas de exploração do registo do Windows."
      ]
    },
    {
      "q": "O que significa a sigla HKLM no contexto do registo do Windows?",
      "options": [
        "HKEY_LOCAL_MACHINE",
        "HK Live Mode",
        "Hardware Kernel Loader Manager",
        "High Key Local Mount"
      ],
      "correct": 0,
      "exp": [
        "Correto — HKLM corresponde a HKEY_LOCAL_MACHINE, o hive de sistema referido no material de apoio.",
        "Errado — não corresponde ao significado real da sigla.",
        "Errado — não corresponde ao significado real da sigla.",
        "Errado — não corresponde ao significado real da sigla."
      ]
    },
    {
      "q": "O que significa a sigla HKCU no contexto do registo do Windows?",
      "options": [
        "HKEY_CURRENT_USER",
        "Hardware Key Configuration Utility",
        "High Kernel Cache Unit",
        "Host Key Certificate Utility"
      ],
      "correct": 0,
      "exp": [
        "Correto — HKCU corresponde a HKEY_CURRENT_USER, o hive específico do utilizador atual referido no material de apoio.",
        "Errado — não corresponde ao significado real da sigla.",
        "Errado — não corresponde ao significado real da sigla.",
        "Errado — não corresponde ao significado real da sigla."
      ]
    },
    {
      "q": "Qual das seguintes NÃO é uma das quatro localizações de hives HKLM referidas no material de apoio?",
      "options": [
        "HKLM\\SYSTEM",
        "HKLM\\SAM",
        "HKLM\\SOFTWARE",
        "HKLM\\DESKTOPBACKGROUND"
      ],
      "correct": 3,
      "exp": [
        "Errado como resposta pedida — HKLM\\SYSTEM é uma das localizações referidas.",
        "Errado como resposta pedida — HKLM\\SAM é uma das localizações referidas.",
        "Errado como resposta pedida — HKLM\\SOFTWARE é uma das localizações referidas.",
        "Correto — HKLM\\DESKTOPBACKGROUND não existe nem é referido no material; as quatro hives HKLM listadas são SYSTEM, SAM, SECURITY e SOFTWARE."
      ]
    },
    {
      "q": "Por que razão os artefactos do registo são úteis em investigações, apesar de não terem sido criados pela Microsoft para fins forenses?",
      "options": [
        "Porque ajudam aplicações a funcionar melhor e, como efeito colateral, registam ações do utilizador úteis à investigação",
        "Porque são sempre encriptados de forma inquebrável",
        "Porque são publicados online automaticamente pela Microsoft",
        "Não têm qualquer utilidade forense real"
      ],
      "correct": 0,
      "exp": [
        "Correto — o material explica que estes artefactos existem para ajudar as aplicações a correr melhor, melhorar a experiência do utilizador ou guardar configurações, mas acabam por registar ações úteis à investigação forense.",
        "Errado — não são descritos como encriptados de forma inquebrável.",
        "Errado — não são publicados online pela Microsoft.",
        "Errado — pelo contrário, têm grande utilidade forense, como demonstrado ao longo do material."
      ]
    },
    {
      "q": "O que são as MRUs (Most Recently Used) referidas no material de apoio?",
      "options": [
        "Chaves de registo que armazenam itens usados/acedidos mais recentemente pelo utilizador",
        "Um tipo de vírus específico do Windows",
        "Uma extensão de ficheiro para vídeos",
        "Um protocolo de rede sem fios"
      ],
      "correct": 0,
      "exp": [
        "Correto — as MRUs armazenam informação sobre itens acedidos/usados mais recentemente, sendo úteis para reconstruir a atividade do utilizador.",
        "Errado — não é um tipo de malware.",
        "Errado — não é uma extensão de ficheiro de vídeo.",
        "Errado — não é um protocolo de rede sem fios."
      ]
    },
    {
      "q": "As chaves MRU são armazenadas em que ficheiro do registo, segundo o material de apoio, já que são específicas por utilizador?",
      "options": [
        "NTUSER.DAT",
        "Boot.ini",
        "Win.ini",
        "Autoexec.bat"
      ],
      "correct": 0,
      "exp": [
        "Correto — o material indica que as chaves MRU estão guardadas no NTUSER.DAT, sendo por isso específicas de cada utilizador.",
        "Errado — o boot.ini não armazena chaves MRU.",
        "Errado — o win.ini não armazena chaves MRU do registo moderno.",
        "Errado — o autoexec.bat é um ficheiro legado de MS-DOS, sem relação com MRUs do registo."
      ]
    },
    {
      "q": "Em que local do registo está a chave RunMRU, referida no material de apoio?",
      "options": [
        "HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\RunMRU",
        "HKEY_LOCAL_MACHINE\\SAM\\RunMRU",
        "HKEY_LOCAL_MACHINE\\SECURITY\\RunMRU",
        "HKEY_USERS\\.DEFAULT\\RunMRU"
      ],
      "correct": 0,
      "exp": [
        "Correto — o RunMRU está localizado em HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\RunMRU, conforme o material de apoio.",
        "Errado — o hive SAM não contém a chave RunMRU.",
        "Errado — o hive SECURITY não contém a chave RunMRU.",
        "Errado — não é o caminho correto para o RunMRU."
      ]
    },
    {
      "q": "Para que serve a chave RunMRU, segundo o experimento apresentado no material de apoio?",
      "options": [
        "Regista os programas executados a partir da janela 'Executar' (Run), útil para detetar execução de apps suspeitas (ex.: Nmap)",
        "Regista apenas as impressões efetuadas",
        "Regista apenas as ligações Bluetooth realizadas",
        "Regista apenas o volume de som do sistema"
      ],
      "correct": 0,
      "exp": [
        "Correto — o material explica que a RunMRU regista programas lançados a partir da janela Run, útil para detetar execução de aplicações suspeitas como o Nmap.",
        "Errado — não tem relação com impressões.",
        "Errado — não tem relação com ligações Bluetooth.",
        "Errado — não tem relação com volume de som."
      ]
    },
    {
      "q": "No experimento com o RunMRU, ao executar 'calc.exe', o valor da chave MRUList continha 'ebcda'. O que indica esta lista?",
      "options": [
        "A ordem relativa de execução dos itens, indicando que o item associado à letra 'e' (calc.exe) foi o mais recente",
        "O número exato de vezes que o Windows foi reiniciado",
        "A temperatura do processador no momento da execução",
        "Nada, é um valor completamente aleatório e sem significado"
      ],
      "correct": 0,
      "exp": [
        "Correto — o material explica que a ordem na MRUList indica a recência de execução, sendo 'e' (calc.exe) o item mais recentemente executado.",
        "Errado — não tem relação com reinícios do sistema.",
        "Errado — não tem relação com temperatura de hardware.",
        "Errado — a MRUList tem um significado preciso relacionado com a ordem de utilização recente."
      ]
    },
    {
      "q": "Onde está localizada a chave 'OpenSavePIDMRU', referida no material de apoio?",
      "options": [
        "HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\ComDlg32\\OpenSavePIDMRU",
        "HKEY_LOCAL_MACHINE\\SAM\\OpenSavePIDMRU",
        "HKEY_LOCAL_MACHINE\\SECURITY\\OpenSavePIDMRU",
        "HKEY_USERS\\.DEFAULT\\OpenSavePIDMRU"
      ],
      "correct": 0,
      "exp": [
        "Correto — a OpenSavePIDMRU está sob HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\ComDlg32\\OpenSavePIDMRU, conforme o material de apoio.",
        "Errado — o hive SAM não contém esta chave.",
        "Errado — o hive SECURITY não contém esta chave.",
        "Errado — não é o caminho correto para esta chave."
      ]
    },
    {
      "q": "A chave 'LastVisitedPidMRU' é útil para uma investigação porque permite compreender:",
      "options": [
        "Quais documentos/aplicações foram visualizados ou executados recentemente no dispositivo",
        "Apenas a localização GPS do dispositivo",
        "Apenas o nome da rede wifi ligada",
        "Apenas o brilho do ecrã configurado"
      ],
      "correct": 0,
      "exp": [
        "Correto — o material explica que a LastVisitedPidMRU pode ser usada para compreender quais documentos foram vistos/aplicações executadas recentemente no dispositivo.",
        "Errado — não tem relação com dados de localização GPS.",
        "Errado — não tem relação com redes wifi.",
        "Errado — não tem relação com definições de brilho do ecrã."
      ]
    }
  ]
};
