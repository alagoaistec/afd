window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["exam-07"] = {
  "id": "exam-07",
  "title": "FTK Imager: Aquisição e Formatos de Imagem",
  "topic": "FTK Imager",
  "type": "mcq",
  "questions": [
    {
      "q": "O que é o FTK Imager, segundo a sebenta?",
      "options": [
        "Um software de código aberto da AccessData usado para criar cópias precisas da evidência original sem a alterar",
        "Um antivírus comercial pago",
        "Uma linguagem de programação para análise de malware",
        "Um sistema operativo dedicado a forense digital"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta descreve o FTK Imager como um software de código aberto da AccessData usado para criar cópias precisas da evidência original sem alterá-la.",
        "Errado — não é um antivírus, é uma ferramenta de aquisição forense.",
        "Errado — não é uma linguagem de programação.",
        "Errado — o FTK Imager é uma aplicação, não um sistema operativo completo."
      ]
    },
    {
      "q": "Qual das seguintes é referida como uma vantagem do FTK Imager na criação de imagens?",
      "options": [
        "Permite copiar dados a um ritmo mais rápido, preservando a evidência original inalterada",
        "Apaga automaticamente ficheiros duplicados no destino",
        "Só funciona em sistemas Linux",
        "Exige sempre ligação à internet para funcionar"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta refere que o FTK Imager permite copiar dados a um ritmo mais rápido, mantendo a evidência original inalterada, podendo depois ser preservada e analisada.",
        "Errado — não tem essa funcionalidade de eliminação automática referida.",
        "Errado — o FTK Imager é uma ferramenta orientada a Windows.",
        "Errado — não é referida qualquer dependência obrigatória de ligação à internet."
      ]
    },
    {
      "q": "No FTK Imager, ao selecionar a origem (Select Source) para criar uma imagem, quais são os tipos de unidade possíveis?",
      "options": [
        "Drive físico ou lógico",
        "Apenas discos óticos",
        "Apenas cartões de memória SD",
        "Apenas dispositivos Bluetooth"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica que se deve escolher a fonte com base na unidade, podendo ser um drive físico ou lógico, dependendo da evidência.",
        "Errado — não está limitado a discos óticos.",
        "Errado — não está limitado a cartões SD.",
        "Errado — dispositivos Bluetooth não são uma opção de origem do FTK Imager."
      ]
    },
    {
      "q": "O que é, segundo a sebenta, uma unidade física ('physical drive')?",
      "options": [
        "O hardware de armazenamento primário ou componente usado para armazenar, recuperar ou organizar dados",
        "Um ficheiro de texto simples",
        "Uma pasta virtual criada apenas em RAM",
        "Um serviço de streaming de vídeo"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta define unidade física como o hardware de armazenamento primário ou componente/device usado para armazenar, recuperar ou organizar dados.",
        "Errado — não é um ficheiro de texto.",
        "Errado — não é uma pasta virtual em memória.",
        "Errado — não tem relação com streaming."
      ]
    },
    {
      "q": "Ao definir o destino da imagem forense criada pelo FTK Imager, do ponto de vista forense é recomendado:",
      "options": [
        "Guardá-la sempre no mesmo disco que está a ser copiado",
        "Copiá-la para um disco rígido separado, criando várias cópias da evidência original",
        "Nunca guardar a imagem em nenhum lugar",
        "Enviar a imagem por email ao suspeito"
      ],
      "correct": 1,
      "exp": [
        "Errado — guardar a imagem no mesmo disco que está a ser copiado é tecnicamente problemático e contraria a boa prática.",
        "Correto — a sebenta recomenda copiar para um disco rígido separado e criar várias cópias da evidência original, para evitar perda de evidência.",
        "Errado — a imagem tem obrigatoriamente de ser armazenada e preservada de forma segura.",
        "Errado — enviar evidência ao suspeito violaria gravemente a cadeia de custódia e a confidencialidade da investigação."
      ]
    },
    {
      "q": "No FTK Imager, o formato de imagem 'Raw (dd)' caracteriza-se por:",
      "options": [
        "Ser uma cópia bit a bit da evidência original, sem acréscimos ou exclusões, e sem conter metadados",
        "Ser um formato exclusivo para telemóveis Android",
        "Comprimir sempre a imagem para metade do tamanho original",
        "Adicionar automaticamente uma assinatura digital"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta descreve o formato Raw (dd) como uma cópia bit a bit da evidência original, criada sem acréscimos nem exclusões, e que não contém metadados.",
        "Errado — não é um formato exclusivo para dispositivos Android.",
        "Errado — o formato Raw não implica compressão automática.",
        "Errado — o formato Raw em si não adiciona assinatura digital automaticamente."
      ]
    },
    {
      "q": "Qual formato de imagem é descrito na sebenta como tendo sido usado sobretudo para Linux, sendo hoje menos popular?",
      "options": [
        "E01",
        "AFF",
        "SMART",
        "Raw (dd)"
      ],
      "correct": 2,
      "exp": [
        "Errado — o E01 é o formato mais comum atualmente, associado ao EnCase.",
        "Errado — o AFF é um formato de código aberto, não o descrito como pouco popular para Linux.",
        "Correto — a sebenta descreve o SMART como um formato usado para Linux, que não é o mais popular atualmente.",
        "Errado — o Raw (dd) é amplamente usado e não é descrito como específico do Linux nem em desuso."
      ]
    },
    {
      "q": "O que significa a sigla E01, um dos formatos de imagem referidos na sebenta?",
      "options": [
        "EnCase Forensic Evidence/Image File",
        "Extended Operating format 01",
        "European Standard 01",
        "Encrypted Output 01"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica que E01 significa EnCase Forensic Evidence/Image File, um formato comum na geração de imagens forenses.",
        "Errado — não corresponde ao significado real da sigla.",
        "Errado — não corresponde ao significado real da sigla.",
        "Errado — não corresponde ao significado real da sigla."
      ]
    },
    {
      "q": "O que significa a sigla AFF, referida como um dos formatos de imagem no FTK Imager?",
      "options": [
        "Advanced Forensic Format",
        "Automatic File Filter",
        "Analog Frequency Format",
        "Archived Field File"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica que AFF significa Advanced Forensic Format, um formato de código aberto.",
        "Errado — não corresponde ao significado real da sigla.",
        "Errado — não corresponde ao significado real da sigla.",
        "Errado — não corresponde ao significado real da sigla."
      ]
    },
    {
      "q": "Onde pode ser obtido o FTK Imager, segundo a sebenta?",
      "options": [
        "Em https://www.exterro.com/digital-forensics-software/ftk-imager",
        "Apenas fisicamente numa loja de eletrónica",
        "Apenas por correio postal",
        "Não está disponível para download em nenhum lugar"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica o endereço https://www.exterro.com/digital-forensics-software/ftk-imager como local para obter o FTK Imager.",
        "Errado — é um software, disponível para download online, não numa loja física.",
        "Errado — não é distribuído por correio postal.",
        "Errado — está disponível gratuitamente para download no site da Exterro/AccessData."
      ]
    },
    {
      "q": "É possível restaurar um disco rígido apenas colocando os ficheiros de imagem de disco diretamente nele?",
      "options": [
        "Sim, basta copiar e colar os ficheiros",
        "Não — o disco precisa ser aberto e a imagem instalada na unidade usando um programa de imagem apropriado",
        "Sim, mas apenas em discos SSD",
        "Não é possível restaurar discos de forma alguma"
      ],
      "correct": 1,
      "exp": [
        "Errado — não basta copiar e colar; é necessário um processo de instalação/aplicação da imagem.",
        "Correto — a sebenta explica que não é possível restaurar um disco colocando os ficheiros de imagem diretamente nele, sendo necessário abrir e instalar a imagem usando um programa apropriado.",
        "Errado — a restrição aplica-se independentemente de ser SSD ou HDD.",
        "Errado — é possível restaurar discos, mas requer o processo correto com software de imagem."
      ]
    },
    {
      "q": "Um único disco rígido pode armazenar múltiplas imagens forenses?",
      "options": [
        "Não, apenas uma imagem por disco",
        "Sim — um único disco rígido pode armazenar várias imagens, e estas também podem ser guardadas em unidades flash de maior capacidade",
        "Só é possível em discos rígidos externos com mais de 10 TB",
        "Não, isso é proibido pelas normas forenses"
      ],
      "correct": 1,
      "exp": [
        "Errado — a sebenta afirma explicitamente que um disco pode armazenar muitas imagens.",
        "Correto — a sebenta confirma que um único disco rígido pode armazenar muitas imagens de disco, e estas também podem ser guardadas em unidades flash com maior capacidade.",
        "Errado — não há essa restrição de capacidade mínima referida na sebenta.",
        "Errado — não existe tal proibição; é uma prática comum e aceite."
      ]
    },
    {
      "q": "Na atividade prática de hash apresentada na sebenta, qual comando do Windows permite calcular o hash MD5 de um ficheiro?",
      "options": [
        "certutil -hashfile [ficheiro] MD5",
        "del [ficheiro] MD5",
        "format [ficheiro] MD5",
        "copy [ficheiro] MD5"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta apresenta o comando 'certutil -hashfile [caminho do ficheiro] [algoritmo]', com o exemplo 'certutil -hashfile ficheiro_batatinhas.doc MD5'.",
        "Errado — 'del' apaga ficheiros, não calcula hash.",
        "Errado — 'format' formata unidades, não calcula hash.",
        "Errado — 'copy' copia ficheiros, não calcula hash."
      ]
    },
    {
      "q": "Em Linux, qual comando é referido na sebenta para calcular o hash SHA-1 de um ficheiro?",
      "options": [
        "sha1sum <caminho do ficheiro>",
        "chmod 777 <ficheiro>",
        "rm -rf <ficheiro>",
        "top"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta apresenta 'sha1sum <caminho do ficheiro.extensão>' como o comando para calcular o hash SHA-1 em Linux.",
        "Errado — chmod altera permissões, não calcula hash.",
        "Errado — rm -rf apaga ficheiros/diretórios recursivamente, o que destruiria a evidência.",
        "Errado — top mostra processos em execução, não calcula hash."
      ]
    },
    {
      "q": "No 'Lab 1 – Preparação de Infraestrutura' da sebenta, um dos objetivos era esconder um ficheiro. Que atributo do Windows foi usado para isso?",
      "options": [
        "Atributo 'hidden' (oculto) através do menu de propriedades do ficheiro",
        "Encriptação AES-256 obrigatória",
        "Renomear o ficheiro para .exe",
        "Comprimir o ficheiro em .zip protegido por password"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta instrui a passar o ficheiro 'evidencia_escondida.txt' para 'hidden' através do botão direito do rato, simulando ocultação simples de ficheiros.",
        "Errado — a atividade não envolve encriptação AES, apenas o atributo de ficheiro oculto.",
        "Errado — a atividade não envolve renomear extensões para .exe.",
        "Errado — a atividade não envolve compressão protegida por password."
      ]
    },
    {
      "q": "Quais foram as etapas descritas no 'Lab 1' com FTK Imager, além de criar a imagem forense?",
      "options": [
        "Hashing, adicionar uma evidência, analisar resultados e interpretação de Hex",
        "Instalar um novo sistema operativo",
        "Configurar uma rede VPN",
        "Criar contas de utilizador administrador"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta lista: criar imagem forense, hashing, adicionar uma evidência, analisar resultados e interpretação de Hex como etapas do laboratório.",
        "Errado — não faz parte das etapas do laboratório com FTK Imager.",
        "Errado — não faz parte das etapas descritas.",
        "Errado — não faz parte das etapas descritas no laboratório."
      ]
    },
    {
      "q": "No 'Lab 2 – Desafio de Grupos', o que os grupos foram instruídos a fazer com ficheiros numa pen ou máquina virtual?",
      "options": [
        "Criar um cenário/comportamento envolvendo ficheiros com o objetivo de não ser detetado, e depois trocar as pens entre grupos para análise",
        "Apagar completamente todos os dados sem qualquer objetivo pedagógico",
        "Enviar os ficheiros diretamente para a cloud pública",
        "Formatar as pens em FAT16 apenas"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta descreve que cada grupo criava um cenário com ficheiros para não ser detetado, trocando depois as pens entre grupos para análise cruzada ('think like a hacker and think like an investigator').",
        "Errado — o objetivo era pedagógico, simulando ocultação de evidência para depois ser investigada.",
        "Errado — não é referido envio para cloud pública nesta atividade.",
        "Errado — não há exigência de formatação específica em FAT16."
      ]
    },
    {
      "q": "Qual foi o peso atribuído ao projeto do 'Lab 2' na avaliação final da unidade curricular, segundo a sebenta?",
      "options": [
        "5%",
        "15%",
        "50%",
        "100%"
      ],
      "correct": 1,
      "exp": [
        "Errado — não corresponde ao valor apresentado na sebenta.",
        "Correto — a sebenta indica que o projeto do Lab 2 vale 15% da avaliação final.",
        "Errado — não corresponde ao valor apresentado na sebenta.",
        "Errado — o projeto é apenas uma componente da avaliação, não a totalidade."
      ]
    },
    {
      "q": "Quais os critérios de avaliação referidos na sebenta para o projeto do 'Lab 2'?",
      "options": [
        "Apresentação, análise e metodologia considerada, bibliografia e conclusões",
        "Apenas o número de páginas do relatório",
        "Apenas a rapidez de entrega",
        "Apenas a opinião pessoal do formador, sem critérios definidos"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta lista apresentação, análise e metodologia considerada, bibliografia e conclusões como critérios de avaliação do projeto.",
        "Errado — o número de páginas não é referido como critério.",
        "Errado — a rapidez de entrega não é apontada como critério de avaliação do conteúdo.",
        "Errado — os critérios estão claramente definidos e listados na sebenta."
      ]
    },
    {
      "q": "Além do FTK Imager, quais ferramentas são explicitamente associadas ao 'Lab 2' na sebenta (FTK Imager e Autopsy: Lab 2)?",
      "options": [
        "FTK Imager e Autopsy",
        "Photoshop e Excel",
        "AutoCAD e Blender",
        "Notepad++ e Paint"
      ],
      "correct": 0,
      "exp": [
        "Correto — o título da secção da sebenta refere-se explicitamente a 'FTK Imager e Autopsy: Lab 2 – Desafio de Grupos'.",
        "Errado — não têm relação com o contexto forense descrito.",
        "Errado — não são ferramentas forenses referidas neste contexto.",
        "Errado — não são as ferramentas associadas a este laboratório específico."
      ]
    }
  ]
};
