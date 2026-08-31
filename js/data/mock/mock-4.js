window.AFD_DATA = window.AFD_DATA || {};
window.AFD_DATA["mock-4"] = {
  "id": "mock-4",
  "title": "Simulado D — Ameaça Interna e Posto de Trabalho",
  "type": "real",
  "description": "Exame simulado no formato exato do exame real, com perguntas semelhantes às reais mas diferentes — construído a partir da sebenta para treino em condições próximas das do exame.",
  "groups": [
    {
      "name": "Grupo I — Verdadeiro ou Falso (7 Valores)",
      "instructions": "10 perguntas. Cada pergunta vale 0.7 valores: 0.2 pela classificação V/F e 0.5 pela justificação.",
      "type": "vf",
      "items": [
        {
          "q": "Os registos de arranque automático ('Auto-run Keys') do Windows são frequentemente usados por malware ou ferramentas maliciosas para garantir persistência no sistema.",
          "answer": true,
          "justification": "Corresponde ao descrito no material de apoio: as Auto-run Keys definem programas que arrancam automaticamente com o Windows, sendo um local clássico de persistência de malware."
        },
        {
          "q": "A chave RunMRU do registo regista programas executados a partir da janela 'Executar', sendo útil para detetar a execução de ferramentas suspeitas.",
          "answer": true,
          "justification": "Corresponde exatamente à descrição do artefacto RunMRU apresentada no material de apoio."
        },
        {
          "q": "O UserAssist é um artefacto do registo cujos valores estão sempre em texto simples, sem qualquer tipo de codificação.",
          "answer": false,
          "justification": "Segundo o SANS Poster, todos os valores do UserAssist estão codificados em ROT-13, sendo necessário descodificá-los para interpretar corretamente os nomes dos programas executados."
        },
        {
          "q": "Um investigador que encontra um ficheiro com o timestamp de 'Modified' anterior ao de 'Creation' deve automaticamente concluir, sem mais análise, que houve um crime informático.",
          "answer": false,
          "justification": "Esta anomalia é um indício que merece investigação (pode resultar de uma cópia legítima ou de manipulação de timestamps), mas não é prova conclusiva por si só — requer correlação com outras fontes de evidência antes de qualquer conclusão."
        },
        {
          "q": "A ThumbCache pode conter miniaturas de imagens que já foram visualizadas no sistema, mesmo que o ficheiro original tenha sido apagado.",
          "answer": true,
          "justification": "Corresponde à descrição da sebenta/material de apoio sobre a relevância forense do ThumbCache."
        },
        {
          "q": "Segundo as boas práticas de recolha de prova, os utilizadores ativos e registados no sistema operativo não têm qualquer relevância numa investigação de ameaça interna.",
          "answer": false,
          "justification": "A sebenta indica explicitamente a listagem de utilizadores ativos e registados como parte da sequência de recolha de prova, sendo especialmente relevante em investigações de ameaça interna para determinar quem estava autenticado no sistema."
        },
        {
          "q": "O princípio 'Autêntica' dos princípios de obtenção da prova refere-se à relação entre o indício e o incidente investigado.",
          "answer": true,
          "justification": "Corresponde exatamente à definição do Princípio 2 (Autêntica) apresentado na sebenta."
        },
        {
          "q": "A análise digital forense de um posto de trabalho deve ignorar totalmente o registo do Windows, focando-se apenas no conteúdo dos documentos armazenados no disco.",
          "answer": false,
          "justification": "O registo do Windows é uma fonte extremamente rica de evidência (MRUs, ShellBags, USB, UserAssist, etc.) e é sistematicamente analisado em investigações forenses de postos de trabalho, não devendo ser ignorado."
        },
        {
          "q": "O modelo NIST 800-86 prevê que a fase de identificação das evidências ocorre antes da fase de preservação.",
          "answer": true,
          "justification": "A ordem correta das 4 fases do NIST 800-86 é identificação, preservação, análise e apresentação — a identificação precede sempre a preservação."
        },
        {
          "q": "Segundo a sebenta, a conduta profissional do investigador não tem qualquer impacto na credibilidade de uma investigação forense.",
          "answer": false,
          "justification": "A sebenta afirma exatamente o contrário: a conduta profissional do investigador determina a credibilidade de uma investigação forense."
        }
      ]
    },
    {
      "name": "Grupo II — Desenvolvimento (10 Valores)",
      "instructions": "4 perguntas de desenvolvimento, 2.5 valores cada. Justifica sempre que possível com exemplos.",
      "type": "open",
      "items": [
        {
          "q": "Descreva os principais artefactos do registo do Windows relevantes para investigar a atividade de um utilizador num posto de trabalho (execução de programas, acesso a pastas, dispositivos ligados) e indique uma ferramenta para analisar cada um.",
          "points": [
            "Execução de programas: RunMRU (execução via Run), UserAssist (execução via ambiente de trabalho/Explorador, codificado em ROT-13), Prefetch (PECmd), Shimcache (AppCompatCacheParser) e Amcache (AmcacheParser).",
            "Acesso a pastas/ficheiros: ShellBags (Shellbags Explorer), Jump Lists (JLECmd/Jumplists Explorer), ficheiros LNK (LECmd).",
            "Dispositivos ligados: registo de dispositivos USB montados, analisável com USBDeview.",
            "Outros: Reciclagem (data/hora e caminho original de eliminação), ThumbCache (miniaturas de imagens vistas)."
          ]
        },
        {
          "q": "Explique o conceito de 'ordem de volatilidade' e descreva, passo a passo, a sequência de recolha recomendada para um posto de trabalho encontrado ligado durante uma investigação de ameaça interna.",
          "points": [
            "Conceito: recolher primeiro os dados mais voláteis (que se perdem rapidamente) e só depois os menos voláteis.",
            "Sequência: 1) memória RAM (pode conter credenciais/chaves); 2) interfaces de rede ativas; 3) processos em execução e seu estado; 4) portos TCP/UDP ativos; 5) utilizadores ativos/registados; 6) ficheiros de paginação/swap/hibernação (pagefile.sys, swapfile.sys, hiberfile.sys); 7) sistema de ficheiros e volumes (datas de criação/modificação); 8) configuração de hardware/software ligado; 9) registo do Windows (hives system/sam/security/software/NTUSER.DAT).",
            "Justificação: cada passo reduz o risco de perder dados críticos que se degradam com o tempo ou com o desligar do sistema, seguindo o princípio de mínima invasão em simultâneo."
          ]
        },
        {
          "q": "Discuta a importância dos timestamps MACB (Modified, Access, Creation, Metadata) numa investigação de ameaça interna, e explique como a técnica de 'timestomping' pode ser usada por um colaborador para tentar ocultar as suas ações.",
          "points": [
            "Importância: os timestamps permitem reconstruir a linha temporal de acessos, cópias e modificações de ficheiros, essencial para provar quando um colaborador acedeu/copiou informação sensível.",
            "Timestomping: manipulação deliberada dos timestamps de um ficheiro para o fazer parecer mais antigo (ou mais recente) do que realmente é, tentando confundir a linha temporal da investigação.",
            "Deteção: correlacionar os timestamps do ficheiro com outras fontes independentes (Prefetch, logs de sistema, registos de rede, ShellBags), procurando inconsistências que sugiram manipulação.",
            "Exemplo prático: um ficheiro cujo timestamp de Modified é anterior ao de Creation é uma anomalia clássica que merece investigação aprofundada."
          ]
        },
        {
          "q": "Descreva os princípios de obtenção da prova digital e a regra #1 das boas práticas apresentadas na unidade curricular, explicando por que razão só equipas autorizadas devem manipular os dados numa investigação de ameaça interna dentro de uma empresa.",
          "points": [
            "Os 5 princípios: Legalidade, Autêntica, Completa, Confiável, Acreditável.",
            "Regra #1: ninguém, exceto equipas autorizadas ou acreditadas para cada fase da investigação, deve atuar sobre os dados e respetivos suportes digitais.",
            "Razão para ameaça interna: numa investigação de ameaça interna, colegas ou gestores diretos do suspeito podem ter conflitos de interesse ou, inadvertidamente (ou deliberadamente), alterar/contaminar a evidência se tiverem acesso não controlado, comprometendo o Princípio 4 (Confiável) e a admissibilidade da prova.",
            "Boas práticas complementares: aplicar a regra #4 (documentar tudo) e restringir rigorosamente o acesso físico e lógico ao equipamento e às cópias forenses durante toda a investigação."
          ]
        }
      ]
    },
    {
      "name": "Grupo III — Caso de Estudo (3 Valores)",
      "instructions": "Uma empresa de software recebeu um alerta do seu sistema de deteção de intrusões (IDS) relativo a acessos fora de horas a um repositório de código-fonte por parte de um colaborador do departamento de desenvolvimento. Nos dias seguintes, o colaborador apresentou a sua demissão com efeitos imediatos. A empresa suspeita que o colaborador possa ter copiado código-fonte proprietário para dispositivos pessoais antes de sair, e decidiu apreender o portátil de trabalho antes que este fosse devolvido ao departamento de TI para reformatação.\n\nDescreva: as boas práticas a seguir na apreensão do portátil (esteja ligado ou desligado); a metodologia de investigação a aplicar (identifique e justifique com uma framework); os artefactos do Windows mais relevantes para provar acesso e cópia de ficheiros; e como asseguraria a cadeia de custódia até à eventual apresentação do caso em tribunal.",
      "type": "open",
      "items": [
        {
          "q": "Descreva a resposta completa ao caso de estudo da ameaça interna no departamento de desenvolvimento.",
          "points": [
            "Apreensão: se ligado, não desligar — isolar da rede, verificar sistemas anti-forenses, documentar o ecrã; se desligado, não ligar até processamento com garantias (regras das guidelines INTERPOL). Em ambos os casos, aplicar a regra #1 e iniciar de imediato o bag & tag.",
            "Metodologia: NIST 800-86 — Identificação (portátil, repositório de código, dispositivos externos ligados) > Preservação (imagem forense com FTK Imager, hash, cadeia de custódia) > Análise (artefactos de acesso/cópia de ficheiros e dispositivos) > Apresentação (relatório para a gestão/departamento jurídico).",
            "Artefactos relevantes: registo de dispositivos USB (USBDeview) para identificar pens/discos externos ligados nos dias críticos; ShellBags e Jump Lists para pastas do repositório acedidas; LNK files para ficheiros específicos abertos; Prefetch/Shimcache/Amcache para confirmar execução de ferramentas de cópia ou compressão; logs de acesso ao repositório de código (fora da máquina local, mas relevantes para correlação).",
            "Cadeia de custódia: hash da imagem no momento da aquisição, documentação de todas as pessoas com acesso à evidência, e correlação cuidadosa dos timestamps MACB dos ficheiros de código com os registos de ligação de dispositivos USB e com os alertas do IDS, construindo uma linha temporal coerente e defensável em tribunal (Princípios Confiável e Acreditável)."
          ]
        }
      ]
    }
  ]
};
