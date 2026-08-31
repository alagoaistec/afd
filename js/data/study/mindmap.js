window.AFD_MINDMAP = {
  "label": "Análise Forense Digital",
  "children": [
    {
      "label": "Criptografia",
      "children": [
        { "label": "Simétrica", "children": [{ "label": "1 chave" }, { "label": "AES, DES, 3DES" }, { "label": "Rápida, má gestão de chaves" }] },
        { "label": "Assimétrica", "children": [{ "label": "Par pública/privada" }, { "label": "RSA, DSA, DSS" }, { "label": "Lenta, mas autentica" }] },
        { "label": "Hash", "children": [{ "label": "MD5 (128 bit)" }, { "label": "SHA-1 (160 bit)" }, { "label": "One-way, único" }] }
      ]
    },
    {
      "label": "Fundamentos AFD",
      "children": [
        { "label": "Definição", "children": [{ "label": "Preparation→Reporting" }, { "label": "Kruse & Heiser" }] },
        { "label": "5W2H" },
        { "label": "Desafios", "children": [{ "label": "Cloud, cripto, anon." }, { "label": "Falta de standards" }] },
        { "label": "Objetivo: estado atual do artefacto" }
      ]
    },
    {
      "label": "Cibercrime",
      "children": [
        { "label": "Pilares: Tec+Pessoas+Processos" },
        { "label": "Ameaça = Vontade+Capacidade+Oportunidade" },
        { "label": "Casos", "children": [{ "label": "BTK Killer" }, { "label": "Maxim/CDUniverse" }] }
      ]
    },
    {
      "label": "Investigador",
      "children": [
        { "label": "Ética e confidencialidade" },
        { "label": "Não decide culpa" },
        { "label": "Análise de email", "children": [{ "label": "Cabeçalho" }, { "label": "Anexos" }, { "label": "Metadados" }] }
      ]
    },
    {
      "label": "Princípios e Cadeia de Custódia",
      "children": [
        { "label": "5 Princípios", "children": [{ "label": "Legalidade" }, { "label": "Autêntica" }, { "label": "Completa" }, { "label": "Confiável" }, { "label": "Acreditável" }] },
        { "label": "5 Regras", "children": [{ "label": "#1 só autorizados" }, { "label": "#4 documentar" }] },
        { "label": "Bag & Tag" }
      ]
    },
    {
      "label": "Frameworks",
      "children": [
        { "label": "DFRWS", "children": [{ "label": "Matriz Funções×Tarefas" }] },
        { "label": "NIST 800-86", "children": [{ "label": "Identificação" }, { "label": "Preservação" }, { "label": "Análise" }, { "label": "Apresentação" }] }
      ]
    },
    {
      "label": "FTK Imager",
      "children": [
        { "label": "Select Source/Drive/Type" },
        { "label": "Formatos", "children": [{ "label": "Raw/dd" }, { "label": "E01" }, { "label": "AFF" }, { "label": "SMART" }] },
        { "label": "Hash antes/depois" },
        { "label": "Não é backup do SO" }
      ]
    },
    {
      "label": "Ferramentas",
      "children": [
        { "label": "Autopsy", "children": [{ "label": "Timeline" }, { "label": "Keyword search" }, { "label": "Data carving" }] },
        { "label": "Volatility (+Workbench)" },
        { "label": "FOCA (metadados)" },
        { "label": "The Sleuth Kit" }
      ]
    },
    {
      "label": "Tipos de Análise",
      "children": [
        { "label": "Email forensics" },
        { "label": "OS forensics" },
        { "label": "Cyber Forensics" },
        { "label": "Cloud Forensics", "children": [{ "label": "Técnica" }, { "label": "Organizacional" }, { "label": "Legal" }] }
      ]
    },
    {
      "label": "Email Forensics",
      "children": [
        { "label": "Phishing / Spoofing / Pharming" },
        { "label": "Cabeçalho", "children": [{ "label": "X-Originating-IP" }, { "label": "SPF / DKIM" }, { "label": "Received (travel path)" }] }
      ]
    },
    {
      "label": "Registo do Windows",
      "children": [
        { "label": "HKLM: SYSTEM/SAM/SECURITY/SOFTWARE" },
        { "label": "HKCU ← NTUSER.DAT" },
        { "label": "Hives→Keys→Subkeys→Values" },
        { "label": "MRUs", "children": [{ "label": "RunMRU" }, { "label": "OpenSavePIDMRU" }] }
      ]
    },
    {
      "label": "Artefactos do Windows",
      "children": [
        { "label": "Execução", "children": [{ "label": "Prefetch" }, { "label": "Shimcache" }, { "label": "Amcache" }, { "label": "UserAssist" }] },
        { "label": "Acesso a ficheiros", "children": [{ "label": "ShellBags" }, { "label": "Jump Lists" }, { "label": "LNK" }] },
        { "label": "Outros", "children": [{ "label": "Reciclagem" }, { "label": "ThumbCache" }, { "label": "SRUM" }, { "label": "USBDeview" }] }
      ]
    },
    {
      "label": "Ordem de Volatilidade",
      "children": [
        { "label": "1. RAM" },
        { "label": "2. Rede ativa" },
        { "label": "3. Processos" },
        { "label": "4. Portos TCP/UDP" },
        { "label": "5. Utilizadores" },
        { "label": "6. pagefile/swap/hiber" },
        { "label": "7. Sistema de ficheiros" }
      ]
    },
    {
      "label": "Volatility",
      "children": [
        { "label": "imageinfo" },
        { "label": "pslist" },
        { "label": "netscan" },
        { "label": "dumpfiles" }
      ]
    },
    {
      "label": "Metadados",
      "children": [
        { "label": "Do sistema de ficheiros (MACB)" },
        { "label": "Do ficheiro (autor, revisões, EXIF)" },
        { "label": "Caso BTK Killer" }
      ]
    },
    {
      "label": "Timestamps (MACB)",
      "children": [
        { "label": "Copiar → novos timestamps" },
        { "label": "Mover → preserva originais" },
        { "label": "Aceder (Win7+ NTFS) → No Change" },
        { "label": "Timestomping (anti-forense)" }
      ]
    },
    {
      "label": "Primeira Resposta",
      "children": [
        { "label": "Ligado → não desligar, isolar rede" },
        { "label": "Desligado → não ligar" },
        { "label": "Faraday Bag" },
        { "label": "Documentar HASH + ferramenta" }
      ]
    },
    {
      "label": "Caso 'Sala de Chá'",
      "children": [
        { "label": "Lição 1: metodologia rigorosa" },
        { "label": "Lição 2: iceberg de dados" },
        { "label": "Lição 3: ferramentas adequadas" },
        { "label": "Lição 4: anti-forense" }
      ]
    }
  ]
};
