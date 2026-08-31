window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["exam-02"] = {
  "id": "exam-02",
  "title": "Criptografia Aplicada à Forense Digital",
  "topic": "Criptografia",
  "type": "mcq",
  "questions": [
    {
      "q": "Quais são os três objetivos que a criptografia procura garantir, segundo a sebenta?",
      "options": [
        "Privacidade, integridade e autenticidade",
        "Velocidade, custo e simplicidade",
        "Compressão, indexação e catalogação",
        "Backup, replicação e sincronização"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta indica privacidade, integridade e autenticidade como os três objetivos da criptografia.",
        "Errado — velocidade e custo são preocupações de engenharia, não os objetivos de segurança da criptografia.",
        "Errado — compressão e catalogação não são objetivos criptográficos.",
        "Errado — backup e replicação são funções de disponibilidade de dados, não de criptografia."
      ]
    },
    {
      "q": "Etimologicamente, 'kriptós' e 'grápho' significam respetivamente:",
      "options": [
        "Oculto e grafia (escrita)",
        "Rápido e lento",
        "Chave e cadeado",
        "Público e privado"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta explica que kriptós significa oculto e grápho significa grafia, formando 'criptografia' = escrita oculta.",
        "Errado — não tem relação com velocidade.",
        "Errado — não é a origem etimológica apresentada.",
        "Errado — 'público' e 'privado' referem-se a tipos de chave, não à etimologia da palavra."
      ]
    },
    {
      "q": "Qual a diferença entre criptografia e criptoanálise?",
      "options": [
        "São exatamente a mesma coisa",
        "Criptografia é escrever mensagens cifradas; criptoanálise é estudar como 'quebrar' códigos e decifrar mensagens",
        "Criptografia só se aplica a texto; criptoanálise só a imagens",
        "Criptoanálise é um sinónimo de assinatura digital"
      ],
      "correct": 1,
      "exp": [
        "Errado — são disciplinas distintas, embora relacionadas (juntas formam a criptologia).",
        "Correto — a sebenta define criptografia como a ciência de escrever mensagens cifradas e criptoanálise como o estudo de quebrar códigos; um ataque é uma tentativa de criptoanálise.",
        "Errado — nenhuma das duas está limitada a um tipo de dado específico.",
        "Errado — criptoanálise não é sinónimo de assinatura digital."
      ]
    },
    {
      "q": "Na criptografia simétrica, quantas chaves são usadas para cifrar e decifrar a informação?",
      "options": [
        "Duas chaves diferentes, uma pública e outra privada",
        "Apenas uma chave, conhecida por ambas as partes",
        "Nenhuma chave é necessária",
        "Três chaves distintas por sessão"
      ],
      "correct": 1,
      "exp": [
        "Errado — isso descreve a criptografia assimétrica, não a simétrica.",
        "Correto — na criptografia simétrica só existe uma chave, conhecida por ambas as partes, usada tanto para cifrar como para decifrar.",
        "Errado — sem chave não há cifragem possível.",
        "Errado — a criptografia simétrica não usa três chaves por sessão."
      ]
    },
    {
      "q": "Qual é a principal desvantagem da criptografia simétrica referida na sebenta?",
      "options": [
        "É demasiado lenta para qualquer aplicação prática",
        "Dificuldade na gestão de chaves e não permite autenticação nem não repúdio",
        "Não pode ser implementada em hardware",
        "Exige sempre chaves de 4096 bits"
      ],
      "correct": 1,
      "exp": [
        "Errado — pelo contrário, a velocidade é uma vantagem da criptografia simétrica.",
        "Correto — a sebenta lista como desvantagens a dificuldade de gestão de chaves, a falta de autenticação e a ausência de não repúdio da origem.",
        "Errado — a facilidade de implementação em hardware é, na verdade, uma vantagem apontada.",
        "Errado — chaves de 4096 bits são típicas de algoritmos assimétricos, não simétricos."
      ]
    },
    {
      "q": "Qual destes é referido na sebenta como o algoritmo simétrico mais inseguro entre os apresentados?",
      "options": [
        "AES",
        "3DES",
        "DES",
        "IDEA"
      ],
      "correct": 2,
      "exp": [
        "Errado — o AES é o algoritmo simétrico atualmente recomendado.",
        "Errado — o 3DES surge como evolução do DES, mais seguro que este.",
        "Correto — a sebenta assinala o DES (Data Encryption Standard) com a nota '(+inseguro)'.",
        "Errado — o IDEA não é apontado como o mais inseguro na lista da sebenta."
      ]
    },
    {
      "q": "Qual das seguintes NÃO é referida na sebenta como um método de cifragem de blocos (block cipher)?",
      "options": [
        "ECB - Electronic Code Book",
        "CBC - Cipher Block Chaining",
        "RSA - Rivest Shamir Adleman",
        "CTR - Counter"
      ],
      "correct": 2,
      "exp": [
        "Errado como resposta pedida — ECB é, de facto, um dos métodos de cifragem de blocos listados.",
        "Errado como resposta pedida — CBC é um dos métodos listados.",
        "Correto — RSA não é um método de cifragem de blocos, é um algoritmo de criptografia assimétrica baseado em chave pública/privada.",
        "Errado como resposta pedida — CTR (Counter) é um dos métodos listados."
      ]
    },
    {
      "q": "Na criptografia assimétrica, quando se quer garantir a confidencialidade de uma mensagem, o emissor deve encriptar com:",
      "options": [
        "A sua própria chave privada",
        "A chave pública do recetor",
        "Uma chave simétrica partilhada apenas por WhatsApp",
        "Não é necessário cifrar nada"
      ],
      "correct": 1,
      "exp": [
        "Errado — cifrar com a chave privada do emissor garante identidade/autenticidade, não confidencialidade perante terceiros.",
        "Correto — segundo a sebenta, para privacidade deve-se encriptar com a chave pública do destinatário; só ele consegue decifrar com a sua chave privada.",
        "Errado — a questão refere-se especificamente a criptografia assimétrica.",
        "Errado — sem cifragem não há confidencialidade."
      ]
    },
    {
      "q": "Qual é a principal desvantagem da criptografia assimétrica referida na sebenta?",
      "options": [
        "Não garante autenticidade",
        "É muito mais lenta (pior desempenho) do que a criptografia simétrica",
        "Não pode usar o algoritmo RSA",
        "Não permite distribuir a chave pública"
      ],
      "correct": 1,
      "exp": [
        "Errado — a criptografia assimétrica pode garantir autenticidade e não repúdio, ao contrário da simétrica.",
        "Correto — a sebenta indica que a principal desvantagem é o desempenho, sendo muito mais lenta que a criptografia simétrica.",
        "Errado — o RSA é precisamente um dos algoritmos assimétricos mais utilizados.",
        "Errado — a chave pública é, por definição, distribuída livremente pelo recetor."
      ]
    },
    {
      "q": "Segundo a sebenta, os algoritmos assimétricos costumam usar chaves de que tamanhos?",
      "options": [
        "8 e 16 bits",
        "1024, 2048 e 4096 bits",
        "32 e 64 bits",
        "1 e 2 bits"
      ],
      "correct": 1,
      "exp": [
        "Errado — chaves tão pequenas não seriam seguras nem correspondem ao referido na sebenta.",
        "Correto — a sebenta indica 1024 bits (menor segurança), 2048 e 4096 bits (maior segurança) para algoritmos assimétricos.",
        "Errado — não correspondem aos valores apresentados na sebenta para algoritmos assimétricos.",
        "Errado — chaves de 1 ou 2 bits não têm qualquer utilidade criptográfica."
      ]
    },
    {
      "q": "Qual das seguintes propriedades NÃO é referida como propriedade de um bom algoritmo de hash?",
      "options": [
        "Consistência (mesma entrada produz sempre a mesma saída)",
        "Reversibilidade total da saída para a entrada original",
        "Unicidade (quase impossível duas mensagens produzirem o mesmo hash)",
        "One-way (impossível obter a mensagem original a partir do hash)"
      ],
      "correct": 1,
      "exp": [
        "Errado como resposta pedida — a consistência é uma propriedade explicitamente referida na sebenta.",
        "Correto — a reversibilidade contraria a propriedade 'one-way' referida na sebenta; um bom hash não pode ser revertido para revelar a mensagem original.",
        "Errado como resposta pedida — a unicidade (quase impossível haver colisões) é uma propriedade referida.",
        "Errado como resposta pedida — a propriedade one-way é explicitamente referida na sebenta."
      ]
    },
    {
      "q": "Qual é o principal propósito de uma função de hash em análise forense digital?",
      "options": [
        "Comprimir ficheiros para poupar espaço em disco",
        "Criar uma 'impressão digital' de um ficheiro, mensagem ou bloco de dados para validar integridade",
        "Traduzir ficheiros entre diferentes idiomas",
        "Substituir a necessidade de cadeia de custódia"
      ],
      "correct": 1,
      "exp": [
        "Errado — hash não é um mecanismo de compressão de ficheiros.",
        "Correto — o hash funciona como 'impressão digital' de um ficheiro/mensagem, usado para verificar se este foi alterado, essencial na validação de imagens forenses.",
        "Errado — hash não tem qualquer função de tradução.",
        "Errado — o hash complementa mas não substitui a cadeia de custódia."
      ]
    },
    {
      "q": "Segundo a sebenta, o algoritmo MD5 produz uma saída (digest) de que tamanho?",
      "options": [
        "64 bits",
        "128 bits",
        "160 bits",
        "512 bits"
      ],
      "correct": 1,
      "exp": [
        "Errado — 64 bits não corresponde ao MD5.",
        "Correto — tanto o MD4 como o MD5 produzem saída de 128 bits, segundo a sebenta.",
        "Errado — 160 bits é a saída do SHA (Secure Hash Algorithm) referida na sebenta, não do MD5.",
        "Errado — 512 bits não corresponde a nenhum destes algoritmos de hash referidos."
      ]
    },
    {
      "q": "No fluxo de verificação de integridade por hash descrito na sebenta (A envia mensagem para B), se os hashes calculados por A e por B forem diferentes, isso significa que:",
      "options": [
        "A mensagem foi certamente alterada",
        "A mensagem está encriptada corretamente",
        "O algoritmo de hash está desativado",
        "Não há qualquer problema, é o comportamento esperado"
      ],
      "correct": 0,
      "exp": [
        "Correto — se os hashes não coincidirem, isso indica que a mensagem sofreu alguma alteração entre o envio e a receção.",
        "Errado — a comparação de hashes serve para verificar integridade, não está diretamente ligada ao estado de encriptação.",
        "Errado — um hash diferente não significa que o algoritmo esteja 'desativado', é apenas o resultado do cálculo sobre dados diferentes.",
        "Errado — hashes diferentes são precisamente um sinal de alerta de alteração de dados."
      ]
    },
    {
      "q": "https://shattered.io/ é referido na sebenta como exemplo de:",
      "options": [
        "Uma ferramenta de recuperação de ficheiros apagados",
        "Uma demonstração das limitações (colisões) do algoritmo SHA-1",
        "Um repositório de imagens forenses para prática",
        "Um serviço de armazenamento em cloud forense"
      ],
      "correct": 1,
      "exp": [
        "Errado — não é uma ferramenta de recuperação de ficheiros.",
        "Correto — a sebenta usa o site shattered.io como exemplo das limitações do protocolo SHA-1, que sofreu um ataque de colisão demonstrado publicamente.",
        "Errado — não é um repositório de imagens forenses.",
        "Errado — não é um serviço de armazenamento cloud."
      ]
    },
    {
      "q": "Segundo a sebenta, para garantir 'identidade' (autenticidade da origem) numa comunicação, deve-se encriptar com:",
      "options": [
        "A chave pública do recetor",
        "A chave privada do emissor",
        "Um algoritmo de hash apenas",
        "Não é possível garantir identidade com criptografia"
      ],
      "correct": 1,
      "exp": [
        "Errado — cifrar com a chave pública do recetor garante privacidade, não identidade do emissor.",
        "Correto — a sebenta indica que, para garantir identidade, se deve encriptar com a chave privada do próprio emissor, o que só ele consegue fazer.",
        "Errado — o hash sozinho garante integridade, não autentica diretamente a origem sem outro mecanismo associado.",
        "Errado — a criptografia assimétrica é exatamente o mecanismo usado para garantir identidade/autenticidade."
      ]
    },
    {
      "q": "Para garantir 'integridade' com recurso a criptografia, a sebenta refere a utilização de:",
      "options": [
        "Apenas chaves simétricas de 128 bits",
        "Par de chaves pública/privada em conjunto com a utilização de hash",
        "Compressão de ficheiros ZIP",
        "Formatação do disco antes de cada análise"
      ],
      "correct": 1,
      "exp": [
        "Errado — a sebenta associa integridade ao par de chaves pública/privada combinado com hash, não apenas a chaves simétricas.",
        "Correto — a sebenta indica 'Integridade – Par de chaves Pública/Privada, utilização do hash' como a combinação recomendada.",
        "Errado — compressão ZIP não garante integridade criptográfica.",
        "Errado — formatar o disco destruiria a evidência, não tem relação com garantir integridade de uma mensagem."
      ]
    },
    {
      "q": "Qual das seguintes opções descreve corretamente a relação entre criptografia, criptoanálise e criptologia?",
      "options": [
        "Criptologia é a ciência que reúne criptografia e criptoanálise",
        "Criptoanálise é uma marca comercial de software antivírus",
        "Criptologia é apenas outro nome para o algoritmo AES",
        "Não existe qualquer relação entre estes três termos"
      ],
      "correct": 0,
      "exp": [
        "Correto — a sebenta define criptologia precisamente como a ciência que reúne criptografia e criptoanálise.",
        "Errado — criptoanálise é uma disciplina científica, não uma marca de software.",
        "Errado — criptologia não é sinónimo de AES, que é apenas um algoritmo específico.",
        "Errado — os três termos estão intimamente relacionados, como a sebenta explica."
      ]
    },
    {
      "q": "Antes de enviar uma mensagem cifrada, segundo a sebenta, o tratamento típico da mensagem envolve:",
      "options": [
        "Enviar a mensagem inteira sem qualquer processamento",
        "Dividir a mensagem em blocos, combiná-los por métodos e só depois encriptar e enviar",
        "Apagar metade da mensagem antes de a enviar",
        "Traduzir a mensagem para outro idioma antes de cifrar"
      ],
      "correct": 1,
      "exp": [
        "Errado — a sebenta descreve um processo estruturado de blocos, não um envio direto sem processamento.",
        "Correto — a mensagem é dividida em blocos, os blocos são combinados por métodos e encriptados por algoritmos, e só depois é enviada.",
        "Errado — apagar dados não faz parte do processo de cifragem.",
        "Errado — a tradução de idioma não faz parte do processo criptográfico."
      ]
    },
    {
      "q": "Qual destes algoritmos é citado na sebenta como um algoritmo matemático de encriptação assimétrica amplamente utilizado?",
      "options": [
        "AES",
        "RSA - Rivest–Shamir–Adleman",
        "MD5",
        "ECB"
      ],
      "correct": 1,
      "exp": [
        "Errado — o AES é um algoritmo simétrico, não assimétrico.",
        "Correto — RSA é explicitamente listado na sebenta como um dos algoritmos matemáticos de encriptação assimétrica mais utilizados, juntamente com DSA e DSS.",
        "Errado — o MD5 é um algoritmo de hash, não de encriptação assimétrica.",
        "Errado — ECB é um método de cifragem de blocos usado em criptografia simétrica."
      ]
    }
  ]
};
