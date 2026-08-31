# AFD Quiz — Análise Forense Digital

Plataforma de estudo estática (HTML/CSS/JS puro, sem build) para a unidade curricular de **Análise Forense Digital** (ISTEC, CTeSP CiberSegurança, 1º Ano / 2º Semestre), construída a partir da sebenta e do material de apoio da disciplina.

## O que tem

- **20 exames de prática** de escolha múltipla (400 perguntas), cobrindo todos os temas da sebenta — quando erras uma resposta, é explicado porquê.
- **2 exames reais** (Época Normal e Recuperação 2024/2025), transcritos e interativos: Grupo I (V/F com justificação), Grupo II (desenvolvimento com resposta modelo) e Grupo III (caso de estudo).
- **4 simulados** no mesmo formato do exame real, com perguntas parecidas mas diferentes.
- **Flashcards** (137 cartões) organizados por tema.
- **Mapa mental** interativo de toda a matéria.
- **Resumos** de estudo, módulo a módulo.
- Tema claro/escuro, totalmente responsivo, progresso guardado no dispositivo (`localStorage`).

## Como correr localmente

Não é preciso nenhuma instalação — os dados carregam via `<script>` (não `fetch`), por isso o site funciona **mesmo abrindo `index.html` diretamente no navegador** (protocolo `file://`).

Alternativamente, para servir por http:

```bash
python -m http.server 8080
# depois abre http://localhost:8080
```

## Estrutura

```
index.html            página inicial
exam.html             motor de exames (?exam=<id>)
flashcards.html        mapa mental / resumos.html
css/styles.css         estilos (tema claro/escuro)
js/app.js              lógica do site
js/data/manifest.js    índice de todos os exames
js/data/exams/         20 exames de prática (MCQ)
js/data/real/          2 exames reais
js/data/mock/          4 simulados no formato real
js/data/study/         flashcards, mapa mental, resumos
```

## Deploy no GitHub Pages

Este repositório já inclui um workflow (`.github/workflows/deploy.yml`) que publica o site automaticamente a cada `push` para `main`.

1. Cria um repositório no GitHub e faz push deste diretório para `main`.
2. Em **Settings → Pages**, define a origem como **GitHub Actions**.
3. O site fica disponível em `https://<user>.github.io/<repo>/`.

## Nota sobre as respostas

As respostas/justificações do Grupo I e os pontos-chave dos Grupos II/III dos exames reais e simulados são um **apoio de estudo** elaborado a partir da sebenta, não uma grelha de correção oficial. Confirma sempre com o docente da unidade curricular.
