window.AFD_SUMMARIES = [
  {
    "id": "criptografia",
    "title": "Sistemas Criptográficos",
    "intro": "A criptografia sustenta três garantias centrais — privacidade, integridade e autenticidade — através de chaves secretas e mecanismos de encriptação. É a base técnica sobre a qual assentam a validação de hash, a assinatura de evidências e a proteção de dados durante uma investigação.",
    "sections": [
      {
        "h": "Simétrica vs. Assimétrica",
        "points": [
          "Simétrica: uma única chave cifra e decifra. Rápida e simples, mas com má gestão de chaves e sem autenticação/não repúdio.",
          "Assimétrica: par de chaves pública/privada. Permite autenticidade e não repúdio, mas é muito mais lenta (desempenho é a sua principal desvantagem).",
          "Algoritmos simétricos: DES (inseguro), 3DES, RC-4, IDEA, AES (recomendado).",
          "Algoritmos assimétricos: RSA, DSA, DSS. Tamanhos de chave típicos: 1024/2048/4096 bits (vs. 128/256 bits em simétrica).",
          "Métodos de cifragem de blocos: ECB, CBC, CFB, OFB, CTR."
        ]
      },
      {
        "h": "Funções de Hash",
        "points": [
          "Produzem uma saída de tamanho fixo (digest) — a 'impressão digital' de um ficheiro.",
          "Propriedades: consistência, aleatoriedade, unicidade e one-way (irreversibilidade).",
          "MD4/MD5 → 128 bits; SHA-1 → 160 bits (SHA-1 tem colisões conhecidas, ver shattered.io).",
          "Em forense: comparar o hash da evidência antes/depois da cópia garante integridade (Princípio 4 — Confiável)."
        ]
      },
      {
        "h": "Qual chave usar?",
        "points": [
          "Privacidade → cifrar com a chave pública do destinatário.",
          "Identidade/autenticidade → cifrar com a própria chave privada.",
          "Integridade → par de chaves pública/privada combinado com hash."
        ]
      }
    ]
  },
  {
    "id": "fundamentos",
    "title": "Fundamentos da Análise Forense Digital",
    "intro": "A Análise Forense Digital (AFD) é uma série metódica de técnicas e procedimentos para recolher provas de equipamento informático e dispositivos de armazenamento, apresentáveis em tribunal de forma coerente e defensável.",
    "sections": [
      {
        "h": "Definições-chave",
        "points": [
          "Sequência genérica: Preparation > Collection > Examination > Analysis > Reporting.",
          "Kruse & Heiser: aquisição, preservação, identificação, extração, restauração, análise e documentação de evidências computacionais.",
          "Hailey: preservação, identificação, coleta, interpretação e documentação, incluindo regras de evidência e processo legal.",
          "Objetivo central: explicar o estado atual de um artefacto digital."
        ]
      },
      {
        "h": "5W2H",
        "points": [
          "Perante qualquer caso, a investigação deve responder: Onde, Quem, O quê, Quando, Porquê (5W) + Como/Quanto (2H)."
        ]
      },
      {
        "h": "Desafios da área",
        "points": [
          "Armazenamento, tempo/falta de standards, anonimização, criptografia, cloud, legislação.",
          "Diversidade tecnológica e ausência de padronização de ferramentas — por isso se diz que é 'mais uma arte do que ciência'."
        ]
      },
      {
        "h": "Por que serve a informática forense",
        "points": [
          "Procurar/identificar dados; recuperar ficheiros apagados/encriptados/corrompidos (a nível físico ou lógico); provar factos; cumprir leis de privacidade/segurança.",
          "Recuperação de dados, análise de ficheiros (metadados), análise de redes e preservação de evidências são as quatro grandes técnicas aplicadas."
        ]
      }
    ]
  },
  {
    "id": "cibercrime",
    "title": "Cibercrime e Perfil do Atacante",
    "intro": "A segurança da informação assenta em três pilares — Tecnologias, Pessoas e Processos — e o cibercrime resulta da combinação Vontade + Capacidade + Oportunidade.",
    "sections": [
      {
        "h": "CiberCrime",
        "points": [
          "Factos previstos na Lei do CiberCrime, praticados com meios tecnológicos essenciais, de forma intencional (nunca acidental).",
          "Aspetos fundamentais: ferramentas usadas, alvo do crime, linha do tempo, origem interna/externa."
        ]
      },
      {
        "h": "Motivações típicas",
        "points": [
          "Testes/aprendizagem (script kiddies), necessidades psicológicas, vingança, vontade de causar impacto, espionagem corporativa/governamental."
        ]
      },
      {
        "h": "Casos emblemáticos",
        "points": [
          "BTK Killer (Dennis Rader): identificado através dos metadados de um ficheiro Word apagado, entregue numa disquete que julgava 'não rastreável'.",
          "Maxim / CDUniverse.com: roubo e chantagem com 300.000 números de cartão de crédito — caso nunca resolvido."
        ]
      }
    ]
  },
  {
    "id": "investigador",
    "title": "O Investigador Forense",
    "intro": "A credibilidade de uma investigação forense depende diretamente da conduta profissional de quem a realiza.",
    "sections": [
      {
        "h": "Ética e conduta",
        "points": [
          "Integridade ética e moral ao mais alto nível; confidencialidade — só discutir o caso com quem tem autorização para o conhecer.",
          "O investigador não decide culpa: revela factos com metodologia rigorosa; a decisão é do tribunal (lição central do caso 'Sala de Chá')."
        ]
      },
      {
        "h": "Casos de uso da AFD",
        "points": [
          "Processos penais, litígios civis (fraude/divórcio/assédio), seguradoras, empresas privadas, forças de aplicação da lei, cidadãos privados."
        ]
      },
      {
        "h": "Análise forense de email",
        "points": [
          "Cabeçalho (IP/servidor de origem), conteúdo, anexos, registos/logs e metadados são as cinco frentes de análise.",
          "Campos-chave: X-Originating-IP, Message-Id, Received-SPF, DKIM-Signature, Return Path."
        ]
      }
    ]
  },
  {
    "id": "principios",
    "title": "Princípios da Prova e Cadeia de Custódia",
    "intro": "Cinco princípios sustentam a validade de qualquer prova digital, complementados por cinco regras práticas de boas práticas.",
    "sections": [
      {
        "h": "Os 5 princípios",
        "points": [
          "1 — Legalidade: admissível conforme a lei.",
          "2 — Autêntica: relação clara entre indício e incidente.",
          "3 — Completa: cobre o caso na sua totalidade.",
          "4 — Confiável: sustentada pela cadeia de custódia.",
          "5 — Acreditável: compreensiva e plausível."
        ]
      },
      {
        "h": "As 5 regras de boas práticas",
        "points": [
          "#1 Só equipas autorizadas/acreditadas atuam sobre os dados.",
          "#2 Meios diferentes, mesmos princípios → mesmo resultado (reprodutibilidade).",
          "#3 Perceber os requisitos da prova digital no contexto tecnológico.",
          "#4 Documentar, documentar, documentar.",
          "#5 Transportar/proteger equipamento e evidências com precaução."
        ]
      },
      {
        "h": "Cadeia de custódia na prática",
        "points": [
          "'Bag & Tag': documentar de imediato quem detém a imagem forense ou as cópias feitas.",
          "Durante o transporte, garantir que a identidade da evidência não foi modificada."
        ]
      }
    ]
  },
  {
    "id": "frameworks",
    "title": "Frameworks: DFRWS e NIST 800-86",
    "intro": "Duas metodologias estruturam o processo de investigação, garantindo consistência e defensabilidade.",
    "sections": [
      {
        "h": "DFRWS",
        "points": [
          "Digital Forensics Research Workshop/Conference.",
          "Organiza o trabalho numa matriz de Funções × Tarefas de baixo nível de especificidade."
        ]
      },
      {
        "h": "NIST 800-86",
        "points": [
          "4 fases sequenciais: Identificação → Preservação → Análise → Apresentação das evidências.",
          "Cuidado: não confundir com 'NIST 800-68', que não existe como referência do modelo forense de 4 fases."
        ]
      },
      {
        "h": "Etapas resumidas de qualquer investigação",
        "points": [
          "Avaliação inicial → Projeto detalhado → Recursos necessários → Riscos → Investigação → Relatório → Conclusão do caso."
        ]
      }
    ]
  },
  {
    "id": "ftk-imager",
    "title": "FTK Imager e Aquisição de Imagens",
    "intro": "O FTK Imager (AccessData, código aberto) cria cópias forenses precisas sem alterar a evidência original, com verificação de integridade incorporada.",
    "sections": [
      {
        "h": "Fluxo de aquisição",
        "points": [
          "Select Source → drive físico ou lógico.",
          "Select Drive → origem + destino (idealmente disco separado, com múltiplas cópias).",
          "Select Image Type → escolha do formato.",
          "Validação de integridade → hash antes/depois."
        ]
      },
      {
        "h": "Formatos de imagem",
        "points": [
          "Raw/dd — cópia bit a bit, sem metadados.",
          "SMART — usado sobretudo em Linux, pouco comum hoje.",
          "E01 — EnCase Forensic Evidence/Image File, o mais comum.",
          "AFF — Advanced Forensic Format, código aberto."
        ]
      },
      {
        "h": "Regras importantes",
        "points": [
          "Uma imagem forense NÃO é um backup/snapshot do SO.",
          "Um único disco pode armazenar várias imagens forenses.",
          "Recuperar 'todos' os ficheiros apagados não é garantido — depende de sobrescrita e outros fatores."
        ]
      }
    ]
  },
  {
    "id": "ferramentas",
    "title": "Ferramentas Forenses",
    "intro": "Um ecossistema de ferramentas especializadas cobre cada fase da investigação, desde a aquisição até à análise de memória.",
    "sections": [
      {
        "h": "Ferramentas centrais",
        "points": [
          "FTK Imager — aquisição de imagem forense.",
          "Autopsy — plataforma gráfica sobre o The Sleuth Kit: Timeline, Hash Filtering, Keyword Search, Web Artifacts, Data Carving, Multimedia, IOCs.",
          "Volatility (+ Volatility Workbench) — análise de memória.",
          "FOCA — extração de metadados de documentos públicos (OSINT)."
        ]
      },
      {
        "h": "Windows vs. Linux",
        "points": [
          "Windows: Registry Explorer, RegRipper, PECmd, AmcacheParser, AppCompatCacheParser, USBDeview, Exiftool, Autoruns.",
          "Linux: Guymager, Ddrescue, Foremost, Extundelete, Rekall, LiME."
        ]
      }
    ]
  },
  {
    "id": "tipos-analise",
    "title": "Tipos de Análise Forense Digital",
    "intro": "A AFD ramifica-se consoante o domínio investigado: email, sistema operativo, cibercrime em geral e ambientes cloud.",
    "sections": [
      {
        "h": "As 4 vertentes",
        "points": [
          "E-mail forensics — phishing, pharming, spoofing.",
          "OS forensics — diretórios NTFS/FAT, registos do Windows.",
          "Cyber Forensics — alvo pode ser pessoas, propriedade ou governos; depende da lei nacional/internacional.",
          "Cloud Forensics — três subpartes: Técnica, Organizacional, Legal."
        ]
      },
      {
        "h": "Princípio da recolha",
        "points": [
          "Mínima invasão possível — qualquer interação com um sistema em funcionamento produz pelo menos uma alteração."
        ]
      }
    ]
  },
  {
    "id": "email",
    "title": "Email Forensics",
    "intro": "Phishing, pharming e spoofing são os três vetores de ataque baseados em email mais estudados, cada um explorável através da análise cuidada do cabeçalho.",
    "sections": [
      {
        "h": "Vetores de ataque",
        "points": [
          "Phishing — engano direto da vítima, fazendo-se passar por entidade legítima.",
          "Spoofing — falsificação do remetente.",
          "Pharming — redireciona tráfego (ex.: via DNS) sem exigir clique da vítima."
        ]
      },
      {
        "h": "Anatomia do cabeçalho",
        "points": [
          "X-Originating-IP, Message-Id, Date, From/To/CC — identificação básica.",
          "Received-SPF, DKIM-Signature, Authentication-Results — autenticidade.",
          "Return Path, Received — reconstroem o 'travel path' do email.",
          "Ferramentas: mxtoolbox.com/EmailHeaders.aspx, mha.azurewebsites.net."
        ]
      }
    ]
  },
  {
    "id": "registo",
    "title": "Registo do Windows",
    "intro": "O registo é uma base de dados central de configuração do Windows, estruturada em Hives → Keys → Subkeys → Values.",
    "sections": [
      {
        "h": "Hives principais",
        "points": [
          "HKLM: SYSTEM, SAM, SECURITY, SOFTWARE (em Windows\\system32\\config).",
          "HKCU: lido a partir de NTUSER.DAT (C:\\Users\\{user}\\NTUSER.DAT).",
          "Backup automático em Windows\\system32\\config\\RegBack."
        ]
      },
      {
        "h": "MRUs (Most Recently Used)",
        "points": [
          "RunMRU — programas lançados via 'Executar'.",
          "OpenSavePIDMRU / LastVisitedPidMRU — ficheiros abertos/guardados recentemente."
        ]
      }
    ]
  },
  {
    "id": "artefactos",
    "title": "Artefactos do Windows",
    "intro": "Dezenas de artefactos, não pensados para forense mas com grande valor investigativo, permitem reconstruir a atividade de um utilizador com grande detalhe.",
    "sections": [
      {
        "h": "Execução de programas",
        "points": [
          "Prefetch (.pf) — nome, nº de execuções, datas; criação ≈ 1ª execução.",
          "Shimcache — nome, caminho, timestamp de executáveis.",
          "Amcache — caminho + hash SHA-1; First Run = Last Modification da chave.",
          "UserAssist — execução via Explorador, valores em ROT-13."
        ]
      },
      {
        "h": "Acesso a ficheiros/pastas",
        "points": [
          "ShellBags — pastas navegadas, mesmo após remoção.",
          "Jump Lists / LNK — ficheiros/ações recentes, sobrevivem à eliminação do original."
        ]
      },
      {
        "h": "Outros artefactos",
        "points": [
          "Reciclagem — caminho original + data de eliminação.",
          "ThumbCache/Thumbs.db — miniaturas mesmo após apagar o original.",
          "SRUM — 30-60 dias de uso de CPU/rede por app.",
          "USBDeview — dispositivos USB ligados."
        ]
      }
    ]
  },
  {
    "id": "volatilidade",
    "title": "Ordem de Volatilidade",
    "intro": "A recolha de prova deve seguir sempre do componente mais volátil para o menos volátil, minimizando a perda de dados críticos.",
    "sections": [
      {
        "h": "Sequência recomendada",
        "points": [
          "1. Memória RAM (pode conter credenciais/chaves).",
          "2. Interfaces de rede ativas.",
          "3. Processos em execução e seu estado.",
          "4. Portos TCP/UDP ativos.",
          "5. Utilizadores ativos/registados.",
          "6. pagefile.sys / swapfile.sys / hiberfile.sys.",
          "7. Sistema de ficheiros e volumes.",
          "8. Configuração de hardware/software ligado."
        ]
      }
    ]
  },
  {
    "id": "volatility",
    "title": "Volatility Framework",
    "intro": "Ferramenta open source para análise forense de memória — essencial para revelar o que 'não fica' em disco.",
    "sections": [
      {
        "h": "Passos básicos",
        "points": [
          "Capturar imagem de memória → correr Volatility na linha de comandos → escolher perfil do SO → executar comando de análise."
        ]
      },
      {
        "h": "Comandos essenciais",
        "points": [
          "imageinfo — informação básica da imagem.",
          "pslist — processos em execução.",
          "netscan — ligações de rede ativas.",
          "dumpfiles — extrai ficheiros da memória."
        ]
      }
    ]
  },
  {
    "id": "metadados",
    "title": "Metadados",
    "intro": "'Dados sobre os dados' — informação que não está imediatamente visível mas que pode ser decisiva numa investigação.",
    "sections": [
      {
        "h": "Dois tipos",
        "points": [
          "Do sistema de ficheiros (ex.: datas MACB geridas pelo NTFS).",
          "Do próprio ficheiro (ex.: autor, revisões de um Office; EXIF de uma imagem)."
        ]
      },
      {
        "h": "Caso prático",
        "points": [
          "BTK Killer: os metadados de um ficheiro Word apagado revelaram a identidade de Dennis Rader.",
          "Ferramenta OSINT: FOCA extrai metadados de documentos públicos."
        ]
      }
    ]
  },
  {
    "id": "timestamps",
    "title": "Timestamps e o Modelo MACB",
    "intro": "Modified, Access, Creation e Metadata compõem o modelo MACB — a chave para reconstruir a linha temporal de qualquer investigação.",
    "sections": [
      {
        "h": "Comportamentos-chave",
        "points": [
          "Copiar → normalmente gera novos timestamps de Creation/Access/Metadata.",
          "Mover (mesmo volume) → tende a preservar os timestamps originais.",
          "Aceder (NTFS, Win7+) → tipicamente não altera o Access (No Change).",
          "Criar → todos os 4 timestamps são definidos.",
          "Eliminar → tipicamente não altera os 4 timestamps da entrada."
        ]
      },
      {
        "h": "Timestomping",
        "points": [
          "Manipulação deliberada dos timestamps para ocultar a linha temporal real.",
          "Deteta-se correlacionando com outras fontes independentes (Prefetch, logs, ShellBags)."
        ]
      }
    ]
  },
  {
    "id": "primeira-resposta",
    "title": "Primeira Resposta (Guidelines INTERPOL)",
    "intro": "Boas práticas internacionais para quem chega primeiro a uma cena com evidência digital — não mandatórias, mas uma referência sólida.",
    "sections": [
      {
        "h": "Regras de ouro",
        "points": [
          "Equipamento LIGADO → não desligar; isolar da rede; verificar anti-forense/encriptação (Bitlocker/FileVault/VeraCrypt).",
          "Equipamento DESLIGADO → não ligar até ser processado com garantias.",
          "Faraday Bags → inibem sinal para evitar apagamento remoto.",
          "Discos de destino → novos ou apagados de forma segura (sobrescrita com '00' hex)."
        ]
      },
      {
        "h": "Documentação obrigatória",
        "points": [
          "Procedimento/ferramenta usada, localização de destino, HASH (algoritmo + assinatura), observações/incidentes."
        ]
      }
    ]
  },
  {
    "id": "artefactos-avancados",
    "title": "Artefactos Avançados e Windows 10",
    "intro": "Para além dos artefactos clássicos, o Windows moderno (7 a 11) introduziu novos mecanismos que ampliam o rasto deixado pela atividade do utilizador.",
    "sections": [
      {
        "h": "Windows 10/11",
        "points": [
          "Windows 10 Timeline — regista apps/ficheiros recentes numa base SQLite (ActivitiesCache.db), acessível via WIN+TAB.",
          "RecentApps — execução de programas GUI, com AppID, LastAccessTime (UTC) e LaunchCount.",
          "BAM/DAM (Background/Desktop Activity Moderator) — caminho completo e data/hora da última execução de um executável."
        ]
      },
      {
        "h": "Legado (Windows XP)",
        "points": [
          "ACMru — histórico de pesquisas do utilizador (ficheiros, computadores, palavras dentro de ficheiros).",
          "Shimcache em XP contém LastUpdateTime; em Windows 7+ esse campo deixou de existir."
        ]
      },
      {
        "h": "Limitações a considerar",
        "points": [
          "Prefetch: limite de 128 entradas (XP/7) ou 1024 (Win8+) — entradas antigas podem ser sobrescritas.",
          "Shimcache: até 96 entradas em XP, até 1024 em Windows 7.",
          "Nenhum artefacto isolado é conclusivo — a força da prova está na correlação entre vários (ex.: Prefetch + Shimcache + Amcache)."
        ]
      }
    ]
  },
  {
    "id": "ferramentas-por-so",
    "title": "Ferramentas por Sistema Operativo",
    "intro": "O ecossistema de ferramentas forenses divide-se claramente entre utilitários Windows (a maioria voltados para registo e artefactos) e utilitários Linux (mais voltados para imagem e recuperação de baixo nível).",
    "sections": [
      {
        "h": "Windows",
        "points": [
          "Aquisição: FTK Imager, Arsenal Image Mounter.",
          "Registo/artefactos: Registry Explorer/RECmd, RegRipper, Shellbags Explorer, JLECmd, PECmd, AmcacheParser, AppCompatCacheParser, Autoruns.",
          "Ficheiros/USB: AnalyzeMFT, USBDeview, ThumbCache Viewer, NTFS Log Tracker.",
          "Rede/memória: Volatility, Wireshark, NetworkMiner, Sysmon.",
          "Deteção de malware: LOKI, YARA-RULES, DFIRTriage."
        ]
      },
      {
        "h": "Linux",
        "points": [
          "Aquisição: Guymager, Ddrescue.",
          "Recuperação: Foremost, Extundelete, Scalpel.",
          "Análise: Radare2, Rekall, LiME (captura de memória), pyew, Ghidra.",
          "Utilitários: md5deep, dcfldd, Crunch, Hachoir."
        ]
      }
    ]
  },
  {
    "id": "dispositivos-especificos",
    "title": "Dispositivos Específicos (Guidelines INTERPOL)",
    "intro": "As guidelines da INTERPOL dedicam procedimentos específicos a diferentes categorias de dispositivos, reconhecendo que 'um tamanho não serve para todos' em apreensão digital.",
    "sections": [
      {
        "h": "Categorias cobertas",
        "points": [
          "Smartphones e tablets (iOS/Android), incluindo SIM cards e cartões de memória removíveis.",
          "Computadores pessoais, portáteis e servidores.",
          "Dispositivos IoT: smartwatches, Smart TVs, colunas inteligentes, câmaras IP.",
          "Consolas de jogos, drones (UAVs), sistemas CCTV.",
          "Dispositivos de ativos virtuais: carteiras de criptomoedas (paper, hardware, desktop, mobile, brain wallets).",
          "Veículos automóveis e equipamento de bordo (marítimo)."
        ]
      },
      {
        "h": "Princípios comuns a todos os dispositivos",
        "points": [
          "Isolamento de rede: prevenir apagamento remoto ou sincronização indesejada (ex.: Faraday Bags para telemóveis).",
          "Considerar dados na cloud associados ao dispositivo (ex.: backups automáticos).",
          "Documentar 'Points to Prove' — o que especificamente se pretende demonstrar com aquele dispositivo.",
          "Cada categoria pode ter um fluxograma próprio de preservação (ex.: processos distintos para iOS e Android)."
        ]
      }
    ]
  },
  {
    "id": "caso-estudo",
    "title": "Caso de Estudo: Sala de Chá",
    "intro": "Uma narrativa pedagógica (Natasha, Andrei, Ivan, Nick) que ilustra na prática os princípios e desafios da AFD.",
    "sections": [
      {
        "h": "As 4 lições",
        "points": [
          "1. Metodologia rigorosa: o investigador revela factos, não 'prova' um lado — decide o tribunal.",
          "2. Iceberg de dados: há sempre mais informação do que a visível à primeira vista.",
          "3. Ferramentas adequadas: são necessárias, mas exigem habilidade e uso conforme a lei.",
          "4. Desafios reais: técnicas anti-forenses (esteganografia, comunicação anónima), dados parciais/corrompidos."
        ]
      }
    ]
  }
];
