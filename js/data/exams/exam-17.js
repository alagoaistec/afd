window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["exam-17"] = {
  "id": "exam-17",
  "title": "Timestamps e o Modelo MACB",
  "topic": "Timestamps",
  "type": "mcq",
  "questions": [
    {
      "q": "O que significa a sigla MACB, usada no contexto de timestamps forenses (referida no SANS Poster - Windows Forensic Analysis)?",
      "options": [
        "Modified, Accessed, Created, Birth (ou Changed, dependendo do sistema de ficheiros)",
        "Music, Audio, Camera, Bluetooth",
        "Malware, Antivirus, Cache, Backup",
        "Memory, Application, Compression, Boot"
      ],
      "correct": 0,
      "exp": [
        "Correto — MACB refere-se tipicamente a Modified (modificado), Accessed (acedido), Created/Changed (criado/alterado) e Birth (nascimento/entry modified, dependendo do sistema de ficheiros), os quatro timestamps centrais na análise forense de ficheiros.",
        "Errado — não tem qualquer relação com música, câmara ou Bluetooth.",
        "Errado — não tem qualquer relação com antivírus ou cache.",
        "Errado — não tem qualquer relação com memória ou boot do sistema."
      ]
    },
    {
      "q": "Segundo o SANS Poster, ao copiar um ficheiro para o mesmo volume, o timestamp de 'Creation' (criação) do ficheiro copiado é tipicamente:",
      "options": [
        "Atualizado para o momento da cópia",
        "Sempre igual ao ficheiro original, sem qualquer alteração",
        "Sempre removido/apagado",
        "Convertido automaticamente para outro fuso horário"
      ],
      "correct": 0,
      "exp": [
        "Correto — segundo o modelo apresentado no SANS Poster, ao copiar um ficheiro, o timestamp de Creation do novo ficheiro é normalmente atualizado para o momento da cópia (File Copy).",
        "Errado — a cópia gera um novo timestamp de criação, distinto do original.",
        "Errado — os timestamps não são removidos numa cópia normal de ficheiro.",
        "Errado — a cópia de ficheiros não implica conversão automática de fuso horário."
      ]
    },
    {
      "q": "Segundo o SANS Poster, ao simplesmente aceder a um ficheiro (File Access) em NTFS no Windows 7 ou superior, o timestamp de 'Access' é tipicamente:",
      "options": [
        "Sem alteração (No Change), devido ao comportamento padrão do NTFS nessas versões",
        "Sempre atualizado para o momento exato do acesso, sem exceção em qualquer versão",
        "Sempre apagado permanentemente",
        "Convertido para o formato Unix timestamp automaticamente"
      ],
      "correct": 0,
      "exp": [
        "Correto — o SANS Poster indica que, a partir do NTFS em Windows 7+, o simples acesso a um ficheiro tipicamente não altera o timestamp de Access, devido a uma alteração no comportamento padrão do sistema de ficheiros.",
        "Errado — esse era o comportamento em versões mais antigas do Windows, mas não é o padrão a partir do Windows 7 em NTFS.",
        "Errado — o timestamp não é apagado, permanece com o valor anterior.",
        "Errado — não há conversão automática de formato de timestamp neste cenário."
      ]
    },
    {
      "q": "Ao mover um ficheiro localmente (Local File Move) dentro do mesmo volume, segundo o SANS Poster, o que tipicamente acontece aos timestamps Modified, Creation e Access?",
      "options": [
        "Mantêm-se sem alteração (No Change), pois é a mesma entrada no sistema de ficheiros apenas com referência de localização alterada",
        "São sempre todos apagados permanentemente",
        "São sempre convertidos para a hora GMT",
        "Aumentam sempre em exatamente 24 horas"
      ],
      "correct": 0,
      "exp": [
        "Correto — segundo o SANS Poster, mover um ficheiro localmente dentro do mesmo volume tipicamente não altera os timestamps Modified, Creation ou Access, apenas a referência de localização no sistema de ficheiros.",
        "Errado — os timestamps não são apagados numa operação de movimentação normal.",
        "Errado — não há conversão automática para GMT associada a esta operação.",
        "Errado — não existe esse padrão fixo de alteração de 24 horas."
      ]
    },
    {
      "q": "Ao renomear um ficheiro (File Rename), segundo o SANS Poster, qual timestamp tende a refletir o momento da renomeação?",
      "options": [
        "O timestamp de Metadata (registo de alteração de metadados)",
        "O timestamp de criação original do ficheiro, sempre inalterado desde então",
        "Nenhum timestamp é afetado por uma renomeação",
        "Apenas o timestamp de Access é alterado, nunca o de Metadata"
      ],
      "correct": 0,
      "exp": [
        "Correto — segundo o SANS Poster, uma renomeação tipicamente atualiza o timestamp de Metadata (refletindo a alteração no registo/metadados do ficheiro no sistema de ficheiros).",
        "Errado — o timestamp de criação normalmente não muda apenas por uma renomeação; o que muda é o timestamp de Metadata.",
        "Errado — a renomeação de facto afeta pelo menos o timestamp de Metadata, segundo o modelo apresentado.",
        "Errado — normalmente é o timestamp de Metadata que é afetado, não o de Access."
      ]
    },
    {
      "q": "O que é o 'timestomping', uma técnica anti-forense relacionada com os conceitos do SANS Poster e referida na sebenta como técnica usada por atacantes?",
      "options": [
        "A manipulação deliberada dos timestamps (MACB) de um ficheiro para ocultar ou confundir a linha temporal real de eventos",
        "Um tipo de dança tradicional sem relação com informática",
        "Um protocolo de sincronização de relógios NTP legítimo",
        "Uma funcionalidade oficial do Windows para acelerar cópias de ficheiros"
      ],
      "correct": 0,
      "exp": [
        "Correto — timestomping é a manipulação deliberada dos timestamps de um ficheiro (Modified/Accessed/Created/Metadata) para ocultar a real linha temporal de eventos, uma técnica anti-forense referida no contexto das técnicas usadas por atacantes na sebenta.",
        "Errado — não tem qualquer relação com dança tradicional.",
        "Errado — não é um protocolo legítimo de sincronização de relógios.",
        "Errado — não é uma funcionalidade oficial legítima do Windows."
      ]
    },
    {
      "q": "Por que compreender o comportamento dos timestamps MACB é essencial numa investigação forense de Windows?",
      "options": [
        "Porque permite reconstruir com precisão a linha temporal de eventos e detetar possíveis manipulações (timestomping)",
        "Porque os timestamps determinam automaticamente a culpa de um suspeito",
        "Porque não têm qualquer utilidade prática numa investigação real",
        "Porque são sempre idênticos entre todos os ficheiros de um sistema"
      ],
      "correct": 0,
      "exp": [
        "Correto — compreender o comportamento esperado dos timestamps MACB permite ao investigador reconstruir a linha temporal com precisão e identificar anomalias que sugiram manipulação (timestomping).",
        "Errado — os timestamps são um indício, não uma prova automática de culpa; cabe ao tribunal decidir, como ilustrado no caso 'Sala de Chá'.",
        "Errado — pelo contrário, têm enorme utilidade prática na reconstrução de eventos.",
        "Errado — os timestamps variam de ficheiro para ficheiro, refletindo o seu histórico específico de operações."
      ]
    },
    {
      "q": "Segundo o SANS Poster, ao mover um ficheiro entre volumes diferentes usando a linha de comandos (CLI), o que tipicamente acontece aos timestamps de Access e Creation?",
      "options": [
        "São tipicamente atualizados para o momento da movimentação via CLI",
        "Nunca são alterados em nenhuma circunstância",
        "São sempre convertidos para hora de Lisboa",
        "São sempre definidos para a data 01/01/1970"
      ],
      "correct": 0,
      "exp": [
        "Correto — segundo o SANS Poster, mover um ficheiro entre volumes diferentes via linha de comandos tipicamente atualiza os timestamps de Access e Creation para o momento da operação.",
        "Errado — o comportamento varia consoante o tipo de operação, e neste cenário específico há alteração.",
        "Errado — não há conversão automática para um fuso horário específico associada a esta operação.",
        "Errado — não são definidos para a data epoch (1970) numa operação normal de movimentação de ficheiros."
      ]
    },
    {
      "q": "Comparando 'mover um ficheiro' (move) com 'copiar um ficheiro' (copy) no mesmo volume, qual a diferença fundamental de comportamento nos timestamps, segundo o SANS Poster?",
      "options": [
        "Mover geralmente preserva mais timestamps originais (No Change), enquanto copiar cria uma nova entrada com novos timestamps de Creation/Access/Metadata",
        "Não existe qualquer diferença entre mover e copiar ficheiros",
        "Mover sempre apaga o ficheiro original sem deixar rasto algum",
        "Copiar nunca gera qualquer novo timestamp"
      ],
      "correct": 0,
      "exp": [
        "Correto — mover um ficheiro dentro do mesmo volume tende a preservar mais os timestamps originais, enquanto copiar cria uma nova entrada no sistema de ficheiros com novos timestamps de criação/acesso/metadados.",
        "Errado — o SANS Poster demonstra exatamente que existem diferenças de comportamento entre estas operações.",
        "Errado — mover um ficheiro deixa rasto nos metadados e no sistema de ficheiros, não é uma operação 'invisível'.",
        "Errado — copiar tipicamente gera novos timestamps de criação e acesso, como indicado no poster."
      ]
    },
    {
      "q": "Um investigador encontra um ficheiro cuja data de 'Modified' é anterior à data de 'Creation'. O que isto pode sugerir?",
      "options": [
        "Uma possível cópia/movimentação do ficheiro de outro sistema (herdando o Modified original) ou manipulação de timestamps (timestomping)",
        "É sempre um erro de sistema sem qualquer significado forense",
        "É garantidamente prova irrefutável de um crime específico",
        "É sempre resultado de um vírus específico chamado 'Timestomp Virus'"
      ],
      "correct": 0,
      "exp": [
        "Correto — esta anomalia é um clássico indicador que merece investigação: pode resultar de uma cópia legítima que herdou o Modified original, ou de manipulação deliberada de timestamps (timestomping); requer análise cuidadosa, não uma conclusão automática.",
        "Errado — apesar de poder ter causas legítimas, tem sim significado forense e deve ser investigado com atenção.",
        "Errado — uma anomalia de timestamp é um indício a investigar, não prova conclusiva por si só, como reforçado pela lição 1 do caso 'Sala de Chá'.",
        "Errado — não existe um malware genérico com esse nome associado necessariamente a esta anomalia; timestomping é uma técnica, não um vírus específico."
      ]
    },
    {
      "q": "Por que é importante que um investigador documente o fuso horário (timezone) do sistema analisado ao interpretar timestamps MACB?",
      "options": [
        "Porque timestamps sem contexto de fuso horário podem ser mal interpretados, levando a conclusões erradas sobre a ordem cronológica dos eventos",
        "Porque o fuso horário nunca afeta a interpretação de timestamps digitais",
        "Porque a lei obriga a converter todos os timestamps para hora de Greenwich sempre",
        "Porque os timestamps são sempre armazenados já no fuso horário local do investigador"
      ],
      "correct": 0,
      "exp": [
        "Correto — sem o contexto correto do fuso horário, comparar timestamps de diferentes fontes/sistemas pode levar a conclusões erradas sobre a sequência real dos eventos.",
        "Errado — o fuso horário tem impacto direto e significativo na interpretação correta de uma linha temporal forense.",
        "Errado — não existe tal obrigação legal genérica; o importante é documentar e converter de forma consistente e transparente.",
        "Errado — muitos sistemas armazenam timestamps em UTC internamente, exigindo conversão cuidadosa para o fuso horário relevante da investigação."
      ]
    },
    {
      "q": "Como o SANS Poster ilustra graficamente o comportamento dos timestamps, ele é particularmente útil para investigadores porque:",
      "options": [
        "Serve como referência rápida para prever/interpretar como diferentes operações (copiar, mover, aceder, modificar) afetam os quatro timestamps do sistema de ficheiros",
        "Substitui totalmente a necessidade de qualquer ferramenta forense de análise",
        "Só é aplicável a sistemas macOS, nunca Windows",
        "Elimina a necessidade de documentar qualquer achado da investigação"
      ],
      "correct": 0,
      "exp": [
        "Correto — o poster funciona como uma referência visual rápida para prever como diferentes ações do utilizador (copiar, mover, aceder, modificar) impactam os timestamps do sistema de ficheiros Windows/NTFS.",
        "Errado — o poster é uma referência de apoio, não substitui ferramentas de análise forense reais.",
        "Errado — o SANS Poster referido na sebenta ('Windows Forensic Analysis') foca especificamente sistemas Windows.",
        "Errado — a documentação continua a ser essencial (regra #4), independentemente desta referência visual."
      ]
    },
    {
      "q": "Numa investigação de exfiltração de dados, encontrar um ficheiro com timestamp de 'Access' recente, mas timestamps de 'Modified' e 'Creation' muito antigos, pode sugerir:",
      "options": [
        "Que o ficheiro foi acedido/lido recentemente (ex.: copiado ou aberto), mesmo sem ter sido modificado, sugerindo possível exfiltração ou visualização",
        "Que o ficheiro nunca existiu no sistema",
        "Que o ficheiro foi criado no futuro",
        "Que é impossível analisar este cenário"
      ],
      "correct": 0,
      "exp": [
        "Correto — um timestamp de Access recente com Modified/Creation antigos é um padrão consistente com o ficheiro ter sido lido/copiado/aberto recentemente sem alteração de conteúdo, um indício relevante em investigações de exfiltração.",
        "Errado — o próprio facto de ter timestamps implica que o ficheiro existe e foi registado no sistema de ficheiros.",
        "Errado — não é essa a interpretação lógica deste padrão de timestamps.",
        "Errado — este é exatamente o tipo de cenário que a análise de timestamps MACB permite interpretar."
      ]
    },
    {
      "q": "Qual é a relação entre o modelo MACB e o princípio de 'documentar, documentar, documentar' (regra #4 da sebenta)?",
      "options": [
        "Interpretar corretamente e documentar o comportamento dos timestamps observados reforça a credibilidade e defensabilidade da análise temporal em tribunal",
        "Não existe qualquer relação entre estes dois conceitos",
        "O modelo MACB substitui completamente a necessidade de documentação",
        "A regra #4 aplica-se apenas a provas físicas, nunca a timestamps digitais"
      ],
      "correct": 0,
      "exp": [
        "Correto — documentar cuidadosamente como os timestamps foram interpretados (e porquê) reforça a credibilidade da análise temporal e a sua defensabilidade em tribunal, alinhando-se diretamente com a regra #4.",
        "Errado — existe uma relação direta: a interpretação de timestamps é um exemplo concreto onde a documentação rigorosa é essencial.",
        "Errado — a documentação continua a ser indispensável mesmo ao aplicar o conhecimento do modelo MACB.",
        "Errado — a regra #4 aplica-se a toda a investigação, incluindo evidência digital como timestamps."
      ]
    },
    {
      "q": "Segundo o SANS Poster, ao criar um novo ficheiro (File Creation), o que acontece tipicamente aos quatro timestamps (Modified, Access, Metadata, Creation)?",
      "options": [
        "Todos são definidos para o momento da criação do ficheiro",
        "Todos permanecem vazios/nulos indefinidamente",
        "Apenas o timestamp de Access é definido, os restantes ficam vazios",
        "São sempre copiados de um ficheiro aleatório existente no sistema"
      ],
      "correct": 0,
      "exp": [
        "Correto — segundo o SANS Poster, ao criar um novo ficheiro, os quatro timestamps (Modified, Access, Metadata e Creation) são tipicamente definidos para o momento da criação.",
        "Errado — os timestamps são preenchidos com valores reais no momento da criação, não ficam vazios.",
        "Errado — todos os quatro timestamps são definidos na criação, não apenas o Access.",
        "Errado — não há cópia de timestamps de outro ficheiro aleatório numa criação normal."
      ]
    },
    {
      "q": "Segundo o SANS Poster, ao eliminar um ficheiro (File Deletion) num sistema Windows/NTFS comum, o que tipicamente acontece aos timestamps Modified, Metadata, Access e Creation da entrada correspondente?",
      "options": [
        "Tipicamente não se alteram (No Change) no momento da eliminação, permanecendo com os valores anteriores",
        "São sempre imediatamente definidos para a data atual do sistema",
        "São sempre convertidos automaticamente para zero absoluto",
        "Aumentam sempre exatamente uma hora"
      ],
      "correct": 0,
      "exp": [
        "Correto — segundo o SANS Poster, a eliminação de um ficheiro tipicamente não altera os quatro timestamps da entrada correspondente, que permanecem com os valores anteriores à eliminação — um detalhe valioso para reconstrução forense.",
        "Errado — não é esse o comportamento típico indicado no poster para uma eliminação.",
        "Errado — não há esse comportamento de reset a zero associado à eliminação.",
        "Errado — não existe esse padrão fixo de incremento de uma hora."
      ]
    },
    {
      "q": "Segundo o SANS Poster, o artefacto Prefetch regista a data/hora da primeira execução de um programa através de:",
      "options": [
        "Aproximadamente a data de criação do próprio ficheiro .pf (com uma margem de cerca de 10 segundos)",
        "Apenas através de uma pergunta direta ao utilizador",
        "Nunca é possível determinar a primeira execução através do Prefetch",
        "Apenas através da cor do ícone do programa"
      ],
      "correct": 0,
      "exp": [
        "Correto — o SANS Poster indica que a data/hora em que um ficheiro foi executado pela primeira vez corresponde aproximadamente à data de criação do ficheiro .pf, com uma margem de cerca de 10 segundos.",
        "Errado — não depende de perguntar diretamente ao utilizador.",
        "Errado — é precisamente possível estimar a primeira execução através deste artefacto.",
        "Errado — não tem relação com a cor do ícone do programa."
      ]
    },
    {
      "q": "Segundo o SANS Poster, o artefacto Amcache.hve regista o 'First Run Time' (primeira execução) de um executável através de:",
      "options": [
        "O Last Modification Time (última data de modificação) da própria chave do registo correspondente",
        "Uma contagem regressiva visível no ecrã",
        "O nome do utilizador administrador apenas",
        "A cor de fundo do ambiente de trabalho no momento da execução"
      ],
      "correct": 0,
      "exp": [
        "Correto — segundo o SANS Poster, o 'First Run Time' de um executável no Amcache.hve corresponde ao Last Modification Time da respetiva chave do registo.",
        "Errado — não existe tal contagem regressiva visível associada a este artefacto.",
        "Errado — não é essa a forma de determinar o First Run Time neste artefacto.",
        "Errado — não tem relação com a cor de fundo do ambiente de trabalho."
      ]
    },
    {
      "q": "O artefacto 'UserAssist' referido no SANS Poster tem uma particularidade de codificação. Qual é ela?",
      "options": [
        "Todos os valores estão codificados em ROT-13",
        "Todos os valores estão em Base64",
        "Todos os valores estão em hexadecimal invertido",
        "Não existe qualquer codificação aplicada"
      ],
      "correct": 0,
      "exp": [
        "Correto — o SANS Poster indica explicitamente que todos os valores do UserAssist estão codificados em ROT-13, sendo necessário descodificá-los para interpretar corretamente os nomes de programas executados.",
        "Errado — não é codificação Base64, é especificamente ROT-13.",
        "Errado — não é hexadecimal invertido, é especificamente ROT-13.",
        "Errado — existe efetivamente uma codificação (ROT-13) que precisa de ser considerada na análise."
      ]
    },
    {
      "q": "Se um atacante tentar 'timestomp' um ficheiro malicioso para o fazer parecer mais antigo do que realmente é, que tipo de contradição um investigador experiente pode procurar?",
      "options": [
        "Inconsistências entre os timestamps do ficheiro e outras fontes de evidência independentes, como logs de sistema, Prefetch ou registos de rede",
        "Nenhuma contradição é detetável, o timestomping é sempre perfeito e indetetável",
        "A cor do ícone do ficheiro alterado",
        "O tamanho exato do ecrã do atacante"
      ],
      "correct": 0,
      "exp": [
        "Correto — um investigador experiente correlaciona os timestamps do ficheiro com outras fontes independentes (logs, Prefetch, registos de rede) para detetar inconsistências que revelem manipulação, mesmo quando os timestamps do próprio ficheiro foram alterados.",
        "Errado — o timestomping pode ser detetado através de correlação cuidadosa com outras fontes de evidência independentes.",
        "Errado — a cor do ícone não é um indicador forense de manipulação de timestamps.",
        "Errado — não tem relação com o tamanho do ecrã do atacante."
      ]
    }
  ]
};
