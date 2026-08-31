window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["mock-1"] = {
  "id": "mock-1",
  "title": "Simulado A — Furto de Propriedade Intelectual",
  "type": "real",
  "description": "Exame simulado no formato exato do exame real (Grupo I: 10 V/F · Grupo II: 4 desenvolvimento · Grupo III: caso de estudo), com perguntas semelhantes às reais mas diferentes — construído a partir da sebenta para treino em condições próximas das do exame.",
  "groups": [
    {
      "name": "Grupo I — Verdadeiro ou Falso (7 Valores)",
      "instructions": "10 perguntas. Cada pergunta vale 0.7 valores: 0.2 pela classificação V/F e 0.5 pela justificação.",
      "type": "vf",
      "items": [
        {
          "q": "A criptografia assimétrica utiliza a mesma chave para cifrar e decifrar a informação.",
          "answer": false,
          "justification": "É a criptografia simétrica que usa uma única chave partilhada para cifrar e decifrar. A criptografia assimétrica usa um par de chaves distintas (pública e privada)."
        },
        {
          "q": "Um dos objetivos de uma função de hash é garantir que, a partir do resultado (digest), é impossível descobrir a mensagem original (propriedade one-way).",
          "answer": true,
          "justification": "A sebenta define exatamente esta propriedade 'one-way' como uma das quatro propriedades essenciais de um bom algoritmo de hash."
        },
        {
          "q": "A framework DFRWS organiza o processo de investigação numa sequência linear única de 4 fases obrigatórias, sem qualquer matriz de tarefas.",
          "answer": false,
          "justification": "A sebenta descreve o DFRWS como organizado numa matriz de Funções e Tarefas de baixo nível de especificidade — não como uma sequência linear simples de 4 fases (essa estrutura de 4 fases corresponde antes ao NIST 800-86)."
        },
        {
          "q": "Ao recolher prova digital de um sistema ligado, deve iniciar-se a extração pelos componentes menos voláteis, como o disco rígido, antes da memória RAM.",
          "answer": false,
          "justification": "A ordem correta é o inverso: deve iniciar-se pelos componentes mais voláteis (ex.: RAM) para os menos voláteis (ex.: disco rígido), para não perder dados que se degradam rapidamente."
        },
        {
          "q": "O FTK Imager permite gerar um relatório de hash que ajuda a validar a integridade da evidência antes e depois da criação da imagem forense.",
          "answer": true,
          "justification": "A sebenta descreve explicitamente esta função de verificação de integridade incorporada no FTK Imager."
        },
        {
          "q": "Um ficheiro copiado para um novo local no mesmo volume mantém sempre exatamente os mesmos quatro timestamps (Modified, Access, Creation, Metadata) do ficheiro original, sem qualquer alteração.",
          "answer": false,
          "justification": "Ao copiar um ficheiro é normalmente criada uma nova entrada no sistema de ficheiros, com um novo timestamp de Creation (e frequentemente de Access/Metadata) correspondente ao momento da cópia — o comportamento não é idêntico ao de simplesmente mover o ficheiro."
        },
        {
          "q": "A cadeia de custódia tem como objetivo documentar quem teve posse, acesso ou controlo da evidência ao longo do processo, sustentando o Princípio 4 (Confiável).",
          "answer": true,
          "justification": "Corresponde exatamente à definição de cadeia de custódia e à sua relação com o Princípio 4 dos princípios de obtenção da prova apresentados na sebenta."
        },
        {
          "q": "Os ShellBags são artefactos do registo do Windows que só existem enquanto a pasta ou unidade a que se referem continua fisicamente ligada ao sistema.",
          "answer": false,
          "justification": "Uma das razões pelas quais os ShellBags são tão valiosos forensicamente é precisamente o facto de poderem persistir mesmo depois de a pasta, unidade ou dispositivo USB já não existir ou já não estar ligado ao sistema."
        },
        {
          "q": "Segundo as guidelines da INTERPOL, se um computador for encontrado ligado na cena do crime, a primeira ação recomendada é desligá-lo imediatamente para 'congelar' o estado do sistema.",
          "answer": false,
          "justification": "As guidelines recomendam precisamente o oposto: não desligar o equipamento, isolando-o da rede e verificando sinais de sistemas anti-forenses antes de qualquer outra ação, para não perder dados voláteis relevantes."
        },
        {
          "q": "No caso de estudo 'Sala de Chá', a lição sobre o 'iceberg de dados' ensina que há normalmente mais informação num artefacto digital do que aquela que é visível à primeira vista.",
          "answer": true,
          "justification": "Corresponde exatamente à lição 2 do caso de estudo apresentado na sebenta."
        }
      ]
    },
    {
      "name": "Grupo II — Desenvolvimento (10 Valores)",
      "instructions": "4 perguntas de desenvolvimento, 2.5 valores cada. Justifica sempre que possível com exemplos.",
      "type": "open",
      "items": [
        {
          "q": "Explique o que é o modelo NIST 800-86 e descreva cada uma das suas quatro fases. Relacione cada fase com pelo menos uma ferramenta forense estudada na unidade curricular.",
          "points": [
            "Definição: modelo composto por 4 fases — identificação, preservação, análise e apresentação das evidências.",
            "Identificação: localizar e reconhecer potenciais fontes de evidência (ex.: RAM, disco, logs); ferramenta associada: Volatility/Sysinternals para identificar processos e ligações ativas.",
            "Preservação: garantir que a evidência não é alterada, através de imagem forense e hashing; ferramenta associada: FTK Imager.",
            "Análise: examinar em profundidade os dados recolhidos, correlacionando artefactos; ferramenta associada: Autopsy (timeline, keyword search, IOCs).",
            "Apresentação: comunicar os resultados de forma clara e defensável, incluindo documentação da metodologia e da cadeia de custódia (regra #4 — documentar, documentar, documentar)."
          ]
        },
        {
          "q": "Compare a criptografia simétrica e a criptografia assimétrica, indicando pelo menos duas vantagens e duas desvantagens de cada uma, e explique como podem ser usadas em conjunto num cenário forense.",
          "points": [
            "Simétrica: vantagens — velocidade/algoritmos rápidos, chaves pequenas e simples, fácil implementação em hardware; desvantagens — dificuldade de gestão de chaves, não garante autenticação nem não repúdio.",
            "Assimétrica: vantagens — permite autenticidade/não repúdio e distribuição segura da chave pública; desvantagem principal — desempenho muito mais lento que a simétrica.",
            "Uso combinado (típico em cenários reais): a chave simétrica (rápida) cifra o volume de dados, e a chave assimétrica (lenta mas segura) cifra apenas a chave simétrica para a transmitir/proteger com segurança — um modelo híbrido.",
            "Relevância forense: entender qual foi usado ajuda o investigador a avaliar se é viável tentar decifrar a evidência (ex.: força bruta é mais viável contra chaves simétricas mais curtas do que contra RSA bem implementado)."
          ]
        },
        {
          "q": "Descreva o que são os artefactos Prefetch, Shimcache e Amcache no Windows, e explique como a sua análise combinada reforça a prova de execução de um programa específico.",
          "points": [
            "Prefetch: guarda ficheiros .pf com nome do executável, número de execuções e datas, para acelerar arranques futuros.",
            "Shimcache (Application Compatibility Cache): regista nome, caminho e timestamp de executáveis, para efeitos de compatibilidade.",
            "Amcache: regista caminhos e hashes (ex.: SHA-1) de executáveis, complementando os dois anteriores.",
            "Correlação: quando os três artefactos apontam consistentemente para o mesmo executável, na mesma janela temporal, a prova de execução torna-se muito mais robusta e defensável do que depender de um único artefacto isolado, que pode ter limitações (ex.: limite de entradas, sobrescrita)."
          ]
        },
        {
          "q": "Explique os princípios de obtenção da prova digital apresentados na unidade curricular e discuta o que pode acontecer à admissibilidade de uma prova em tribunal se o Princípio da Legalidade não for respeitado.",
          "points": [
            "Os 5 princípios: Legalidade, Autêntica, Completa, Confiável, Acreditável.",
            "Legalidade: a prova tem de ser obtida em conformidade com a lei (ex.: com mandado/autorização adequada).",
            "Consequência de violação: se a prova for obtida sem base legal, corre o risco de ser considerada inadmissível em tribunal, podendo comprometer todo o processo judicial, mesmo que os restantes princípios (Autêntica, Completa, Confiável, Acreditável) tenham sido respeitados.",
            "Relação com o caso 'Sala de Chá': a equipa obteve um mandado antes de intercetar Nick e a pen drive, precisamente para salvaguardar este princípio."
          ]
        }
      ]
    },
    {
      "name": "Grupo III — Caso de Estudo (3 Valores)",
      "instructions": "Uma empresa de engenharia detetou que um colaborador, dias antes de se demitir, copiou um conjunto de ficheiros de design confidenciais para uma pen drive pessoal e enviou alguns ficheiros para o seu email pessoal. A empresa suspeita que o colaborador pretende usar estes dados na sua nova entidade empregadora, uma concorrente direta. O departamento jurídico autorizou a apreensão do computador de trabalho do colaborador e solicitou uma análise forense completa antes de qualquer ação legal.\n\nDescreva: as boas práticas a seguir na apreensão e preservação do computador de trabalho; a metodologia de investigação a aplicar (identifique e justifique com uma framework); os artefactos do Windows mais relevantes a analisar neste cenário; e como demonstraria, de forma defensável, que os ficheiros foram copiados para a pen drive e enviados por email.",
      "type": "open",
      "items": [
        {
          "q": "Descreva a resposta completa ao caso de estudo do furto de propriedade intelectual.",
          "points": [
            "Apreensão e preservação: seguir a regra #1 (só equipas autorizadas atuam), documentar o estado do equipamento (ligado/desligado), aplicar a ordem de volatilidade se estiver ligado, e iniciar de imediato a cadeia de custódia (bag & tag) com hashing.",
            "Metodologia: NIST 800-86 — Identificação (computador de trabalho, contas de email, dispositivos USB associados) > Preservação (imagem forense com FTK Imager + hash) > Análise (artefactos de execução/acesso a ficheiros e envio de email) > Apresentação (relatório para o departamento jurídico).",
            "Artefactos Windows relevantes: ShellBags e Jump Lists (pastas/ficheiros acedidos), USBDeview/registo de dispositivos USB (identificar a pen drive ligada e datas), LNK files (atalhos para os ficheiros copiados), Prefetch/Shimcache/Amcache (se usou alguma ferramenta de cópia), e histórico do cliente de email (envio para conta pessoal).",
            "Demonstração defensável: correlacionar os timestamps MACB dos ficheiros de design com os registos de ligação da pen drive (USBDeview) e com os logs do cliente de email, construindo uma linha temporal coerente que relacione o acesso aos ficheiros, a cópia para a pen drive e o envio por email, tudo documentado com hashes e cadeia de custódia."
          ]
        }
      ]
    }
  ]
};
