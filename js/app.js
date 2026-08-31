/* ==========================================================================
   AFD Quiz — motor do site (tema, storage, home page, exames, flashcards,
   mapa mental, resumos). Sem dependências externas — só JS puro.
   Os dados são carregados via <script> (window.AFD_*) para funcionar tanto
   em file:// como em http(s)://, sem depender de fetch()/CORS.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------- Tema (claro/escuro) ------------------------- */
  const THEME_KEY = "afd_quiz_theme";

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function currentEffectiveTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function initTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) applyTheme(stored);
    const btn = document.getElementById("themeToggle");
    if (btn) {
      btn.textContent = currentEffectiveTheme() === "light" ? "🌙" : "☀️";
      btn.addEventListener("click", () => {
        const next = currentEffectiveTheme() === "light" ? "dark" : "light";
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
        btn.textContent = next === "light" ? "🌙" : "☀️";
      });
    }
  }

  function initNav() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (toggle && links) {
      toggle.addEventListener("click", () => links.classList.toggle("open"));
    }
    // Mark active link based on current page filename.
    const here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach((a) => {
      const href = a.getAttribute("href").split("?")[0];
      if (href === here) a.classList.add("active");
    });
  }

  /* ------------------------------- Storage -------------------------------- */
  const RESULTS_KEY = "afd_quiz_results_v1";

  function getResults() {
    try {
      return JSON.parse(localStorage.getItem(RESULTS_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveResult(examId, payload) {
    const all = getResults();
    all[examId] = payload;
    localStorage.setItem(RESULTS_KEY, JSON.stringify(all));
  }

  function clearAllResults() {
    localStorage.removeItem(RESULTS_KEY);
  }

  /* --------------------------------- Utils --------------------------------- */
  function el(tag, attrs, children) {
    const e = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (k === "class") e.className = attrs[k];
        else if (k === "html") e.innerHTML = attrs[k];
        else if (k.startsWith("on") && typeof attrs[k] === "function") e.addEventListener(k.slice(2), attrs[k]);
        else e.setAttribute(k, attrs[k]);
      }
    }
    (children || []).forEach((c) => {
      if (c == null) return;
      e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return e;
  }

  function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) {
      t = el("div", { class: "toast" });
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove("show"), 2200);
  }

  function letterFor(i) {
    return String.fromCharCode(65 + i);
  }

  /* Dynamically load a plain <script> (works under file:// unlike fetch/XHR). */
  const loadedScripts = {};
  function loadScript(src) {
    if (loadedScripts[src]) return loadedScripts[src];
    loadedScripts[src] = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("Falha ao carregar " + src));
      document.head.appendChild(s);
    });
    return loadedScripts[src];
  }

  /* ============================== HOME PAGE ================================ */

  async function initHome() {
    const grid = document.getElementById("examGrid");
    const realGrid = document.getElementById("realGrid");
    const mockGrid = document.getElementById("mockGrid");
    const filtersEl = document.getElementById("topicFilters");
    if (!grid && !realGrid && !mockGrid) return;

    const manifest = window.AFD_MANIFEST;
    if (!manifest) {
      if (grid) grid.innerHTML = "";
      if (grid) grid.appendChild(el("div", { class: "empty" }, ["Não foi possível carregar os exames (js/data/manifest.js em falta)."]));
      return;
    }

    const results = getResults();

    const totalQ = manifest.practice.reduce((s, e) => s + e.questions, 0);
    setText("statExams", manifest.practice.length);
    setText("statQuestions", totalQ);
    setText("statReal", manifest.real.length);
    setText("statMock", (manifest.mock || []).length);

    const topics = Array.from(new Set(manifest.practice.map((e) => e.topic)));
    let activeTopic = "Todos";

    function renderFilters() {
      if (!filtersEl) return;
      filtersEl.innerHTML = "";
      const all = ["Todos", ...topics];
      all.forEach((t) => {
        const btn = el(
          "button",
          {
            class: "filter-btn" + (t === activeTopic ? " active" : ""),
            onclick: () => {
              activeTopic = t;
              renderFilters();
              renderGrid();
            },
          },
          [t]
        );
        filtersEl.appendChild(btn);
      });
    }

    function pctFor(examId) {
      const r = results[examId];
      if (!r) return 0;
      return Math.round((r.score / r.total) * 100);
    }

    function renderGrid() {
      if (!grid) return;
      grid.innerHTML = "";
      const list = manifest.practice.filter((e) => activeTopic === "Todos" || e.topic === activeTopic);
      if (!list.length) {
        grid.appendChild(el("div", { class: "empty" }, ["Sem exames para este filtro."]));
        return;
      }
      list.forEach((e) => {
        const done = results[e.id];
        const pct = pctFor(e.id);
        const card = el("div", { class: "card" }, [
          el("div", { class: "card-top" }, [
            el("span", { class: "card-num" }, [e.id.replace("exam-", "#")]),
            done ? el("span", { class: "pill", style: "color:var(--accent)" }, [pct + "%"]) : null,
          ]),
          el("h3", {}, [e.title]),
          el("div", { class: "topic-tag" }, ["▸ " + e.topic]),
          el("p", { class: "desc" }, [e.description || ""]),
          el("div", { class: "progress-mini" }, [el("i", { style: "width:" + pct + "%" })]),
          el("div", { class: "card-meta" }, [
            el("span", {}, [e.questions + " perguntas"]),
            el("span", {}, [done ? "Refazer" : "Novo"]),
          ]),
          el(
            "a",
            { class: "btn btn-primary btn-block", href: "exam.html?exam=" + e.id },
            [done ? "Repetir exame" : "Começar exame"]
          ),
        ]);
        grid.appendChild(card);
      });
    }

    function renderRealLike(container, list, badgeText, extraClass) {
      if (!container) return;
      container.innerHTML = "";
      list.forEach((e) => {
        const done = results[e.id];
        const card = el("div", { class: "real-card" + (extraClass ? " " + extraClass : "") }, [
          el("span", { class: "badge" }, [badgeText + " — " + e.tag]),
          el("h3", {}, [e.title]),
          el("p", {}, [e.description]),
          el("div", { class: "struct" }, (e.structure || []).map((s) => el("span", { class: "chip" }, [s]))),
          el(
            "a",
            { class: "btn btn-primary", href: "exam.html?exam=" + e.id },
            [done ? "Rever exame" : "Responder ao exame"]
          ),
        ]);
        container.appendChild(card);
      });
    }

    renderFilters();
    renderGrid();
    renderRealLike(realGrid, manifest.real, "★ Exame Real ISTEC");
    renderRealLike(mockGrid, manifest.mock || [], "✎ Simulado", "mock");
  }

  function setText(id, val) {
    const e = document.getElementById(id);
    if (e) e.textContent = val;
  }

  /* ============================== EXAM PAGE ================================ */

  async function initExam() {
    const root = document.getElementById("examRoot");
    if (!root) return;

    const params = new URLSearchParams(location.search);
    const examId = params.get("exam");
    if (!examId) {
      root.innerHTML = "";
      root.appendChild(el("div", { class: "empty" }, ["Nenhum exame indicado."]));
      return;
    }

    const manifest = window.AFD_MANIFEST;
    const meta = manifest && [...manifest.practice, ...manifest.real, ...(manifest.mock || [])].find((e) => e.id === examId);

    if (!meta) {
      root.innerHTML = "";
      root.appendChild(el("div", { class: "empty" }, ["Exame não encontrado."]));
      return;
    }

    try {
      await loadScript(meta.file);
    } catch (e) {
      root.innerHTML = "";
      root.appendChild(el("div", { class: "empty" }, ["Erro a carregar os dados do exame (" + meta.file + ")."]));
      return;
    }

    const data = window.AFD_DATA && window.AFD_DATA[examId];
    if (!data) {
      root.innerHTML = "";
      root.appendChild(el("div", { class: "empty" }, ["Dados do exame em falta."]));
      return;
    }

    document.title = data.title + " — AFD Quiz";

    if (data.type === "real") {
      renderRealExam(root, meta, data);
    } else {
      renderMcqExam(root, meta, data);
    }
  }

  /* --------- MCQ practice exam runner --------- */
  function renderMcqExam(root, meta, data) {
    const questions = data.questions;
    let idx = 0;
    let answered = new Array(questions.length).fill(null); // selected option idx
    let score = 0;

    root.innerHTML = "";

    const header = el("div", { class: "exam-header" }, [
      el("div", { class: "exam-title" }, [
        data.title,
        el("small", {}, [data.topic || "Exame de prática"]),
      ]),
      el("a", { class: "btn btn-ghost btn-sm", href: "index.html" }, ["← Sair"]),
    ]);

    const progressWrap = el("div", { class: "progress-wrap" }, [el("i", { style: "width:0%" })]);
    const progressLabels = el("div", { class: "progress-labels" }, [
      el("span", { id: "pLabel" }, ["Pergunta 1 / " + questions.length]),
      el("span", { id: "sLabel" }, ["Pontuação: 0"]),
    ]);

    const qArea = el("div", {});

    root.appendChild(header);
    root.appendChild(progressWrap);
    root.appendChild(progressLabels);
    root.appendChild(qArea);

    function updateProgress() {
      const pct = Math.round((idx / questions.length) * 100);
      progressWrap.querySelector("i").style.width = pct + "%";
      document.getElementById("pLabel").textContent = "Pergunta " + Math.min(idx + 1, questions.length) + " / " + questions.length;
      document.getElementById("sLabel").textContent = "Pontuação: " + score;
    }

    function renderQuestion() {
      qArea.innerHTML = "";
      updateProgress();
      const q = questions[idx];
      const card = el("div", { class: "q-card" });
      card.appendChild(el("div", { class: "q-kicker" }, ["QUESTÃO " + (idx + 1) + " DE " + questions.length]));
      card.appendChild(el("p", { class: "q-text" }, [q.q]));

      const opts = el("div", { class: "options" });
      const selectedBefore = answered[idx];

      q.options.forEach((optText, i) => {
        const optEl = el(
          "button",
          { class: "option" + (selectedBefore != null ? " disabled" : "") },
          [
            el("span", { class: "opt-letter" }, [letterFor(i)]),
            el("span", {}, [
              el("div", {}, [optText]),
              el("div", { class: "exp" }, [q.exp && q.exp[i] ? q.exp[i] : ""]),
            ]),
          ]
        );
        optEl.addEventListener("click", () => {
          if (answered[idx] != null) return;
          selectOption(i);
        });
        opts.appendChild(optEl);
      });
      card.appendChild(opts);

      const banner = el("div", { class: "feedback-banner" });
      card.appendChild(banner);

      if (selectedBefore != null) {
        revealAnswers(opts, q, selectedBefore, banner);
      }

      const nav = el("div", { class: "nav-row" }, [
        el(
          "button",
          {
            class: "btn",
            onclick: () => {
              if (idx > 0) {
                idx--;
                renderQuestion();
              }
            },
          },
          ["← Anterior"]
        ),
        el("div", { class: "spacer" }),
        idx < questions.length - 1
          ? el(
              "button",
              {
                class: "btn btn-primary",
                id: "nextBtn",
                disabled: selectedBefore == null,
                onclick: () => {
                  idx++;
                  renderQuestion();
                },
              },
              ["Seguinte →"]
            )
          : el(
              "button",
              {
                class: "btn btn-primary",
                id: "finishBtn",
                disabled: selectedBefore == null,
                onclick: finishExam,
              },
              ["Ver resultado ✓"]
            ),
      ]);
      card.appendChild(nav);

      qArea.appendChild(card);
    }

    function selectOption(i) {
      answered[idx] = i;
      const q = questions[idx];
      if (i === q.correct) score++;
      renderQuestion();
      const nextBtn = document.getElementById("nextBtn") || document.getElementById("finishBtn");
      if (nextBtn) nextBtn.removeAttribute("disabled");
    }

    function revealAnswers(opts, q, selected, banner) {
      Array.from(opts.children).forEach((optEl, i) => {
        optEl.classList.add("disabled");
        if (i === q.correct) {
          optEl.classList.add("correct", "show-exp");
        }
        if (i === selected && selected !== q.correct) {
          optEl.classList.add("wrong", "show-exp");
        }
      });
      banner.classList.add("show", selected === q.correct ? "ok" : "no");
      banner.textContent =
        selected === q.correct
          ? "✔ Correto! " + (q.exp && q.exp[q.correct] ? q.exp[q.correct] : "")
          : "✘ Não é a resposta certa. " + (q.exp && q.exp[selected] ? q.exp[selected] : "");
    }

    function finishExam() {
      saveResult(meta.id, { score, total: questions.length, date: new Date().toISOString() });
      renderResults(root, meta, data, questions, answered, score, () => {
        idx = 0;
        answered = new Array(questions.length).fill(null);
        score = 0;
        root.innerHTML = "";
        root.appendChild(header);
        root.appendChild(progressWrap);
        root.appendChild(progressLabels);
        root.appendChild(qArea);
        renderQuestion();
      });
    }

    renderQuestion();
  }

  function renderResults(root, meta, data, questions, answered, score, onRetry) {
    root.innerHTML = "";
    const pct = Math.round((score / questions.length) * 100);
    const wrap = el("div", { class: "q-card results" });
    wrap.style.setProperty("--pct", pct);

    wrap.appendChild(
      el("div", { class: "score-ring" }, [el("b", {}, [pct + "%"]), el("span", {}, ["APROVEITAMENTO"])])
    );
    wrap.appendChild(el("h2", {}, [score + " / " + questions.length + " corretas"]));
    wrap.appendChild(
      el("p", {}, [
        pct >= 80
          ? "Excelente! Já dominas este tema."
          : pct >= 50
          ? "Bom trabalho — revê as explicações abaixo para consolidar."
          : "Vale a pena rever a matéria e tentar de novo.",
      ])
    );

    wrap.appendChild(
      el("div", { class: "results-actions" }, [
        el("button", { class: "btn btn-primary", onclick: onRetry }, ["↻ Repetir este exame"]),
        el("a", { class: "btn", href: "index.html" }, ["📚 Ver todos os exames"]),
      ])
    );

    const review = el("div", { class: "review-list" });
    review.appendChild(el("h3", { style: "margin:0 0 4px" }, ["Revisão das respostas"]));
    questions.forEach((q, i) => {
      const ok = answered[i] === q.correct;
      const item = el("div", { class: "review-item " + (ok ? "ok" : "no") }, [
        el("div", { class: "rq" }, [(i + 1) + ". " + q.q]),
        el("div", { class: "ra" }, [
          "A tua resposta: " + (answered[i] != null ? letterFor(answered[i]) + ") " + q.options[answered[i]] : "—"),
        ]),
        !ok
          ? el("div", { class: "ra" }, ["Correta: " + letterFor(q.correct) + ") " + q.options[q.correct]])
          : null,
        el("div", { class: "ra", style: "margin-top:4px" }, [q.exp && q.exp[q.correct] ? "ℹ " + q.exp[q.correct] : ""]),
      ]);
      review.appendChild(item);
    });
    wrap.appendChild(review);

    root.appendChild(wrap);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* --------- Real / mock exam runner (V/F + desenvolvimento) --------- */
  function renderRealExam(root, meta, data) {
    root.innerHTML = "";
    root.appendChild(
      el("div", { class: "exam-header" }, [
        el("div", { class: "exam-title" }, [data.title, el("small", {}, ["Formato do exame real — modo estudo"])]),
        el("a", { class: "btn btn-ghost btn-sm", href: "index.html" }, ["← Sair"]),
      ])
    );

    root.appendChild(
      el("div", { class: "q-card" }, [
        el("p", { style: "margin:0;color:var(--text-dim);font-size:13.5px" }, [
          data.description ||
            "Responde a cada pergunta e depois consulta a justificação / resposta modelo para te autoavaliares.",
        ]),
      ])
    );

    let vCorrect = 0,
      vTotal = 0;

    data.groups.forEach((group, gi) => {
      root.appendChild(
        el("div", { class: "group-divider" }, [
          el("h2", {}, [group.name]),
          el("p", {}, [group.instructions || ""]),
        ])
      );

      if (group.type === "vf") {
        group.items.forEach((item, ii) => {
          vTotal++;
          const card = el("div", { class: "q-card", style: "margin-bottom:12px" });
          card.appendChild(el("div", { class: "q-kicker" }, ["V/F " + (ii + 1)]));
          card.appendChild(el("p", { class: "q-text", style: "font-size:15.5px" }, [item.q]));
          const row = el("div", { class: "vf-row" });
          const justif = el("div", { class: "vf-justif" }, [
            el("b", {}, [item.answer ? "Verdadeiro. " : "Falso. "]),
            item.justification,
          ]);

          function pick(val, btnV, btnF) {
            if (row.dataset.answered) return;
            row.dataset.answered = "1";
            const ok = val === item.answer;
            if (ok) vCorrect++;
            btnV.classList.add(item.answer === true ? "correct" : val === true ? "wrong" : "");
            btnF.classList.add(item.answer === false ? "correct" : val === false ? "wrong" : "");
            justif.classList.add("show");
            updateVfCounter();
          }

          const btnV = el("button", { class: "vf-btn v" }, ["VERDADEIRO"]);
          const btnF = el("button", { class: "vf-btn f" }, ["FALSO"]);
          btnV.addEventListener("click", () => pick(true, btnV, btnF));
          btnF.addEventListener("click", () => pick(false, btnV, btnF));
          row.appendChild(btnV);
          row.appendChild(btnF);
          card.appendChild(row);
          card.appendChild(justif);
          root.appendChild(card);
        });
      } else if (group.type === "open") {
        group.items.forEach((item, ii) => {
          const card = el("div", { class: "q-card", style: "margin-bottom:12px" });
          card.appendChild(el("div", { class: "q-kicker" }, ["DESENVOLVIMENTO " + (ii + 1)]));
          card.appendChild(el("p", { class: "q-text", style: "font-size:15.5px;white-space:pre-line" }, [item.q]));
          const answerBox = el("textarea", {
            class: "open-answer",
            placeholder: "Escreve aqui a tua resposta antes de veres a resposta modelo…",
          });
          const model = el("div", { class: "model-answer" }, [
            el("h4", {}, ["✓ Resposta modelo / pontos-chave"]),
            el(
              "ul",
              {},
              (item.points || []).map((p) => el("li", {}, [p]))
            ),
          ]);
          const revealBtn = el(
            "button",
            {
              class: "btn btn-primary btn-sm",
              style: "margin-top:10px",
              onclick: () => {
                model.classList.add("show");
                revealBtn.style.display = "none";
              },
            },
            ["Ver resposta modelo"]
          );
          card.appendChild(answerBox);
          card.appendChild(revealBtn);
          card.appendChild(model);
          root.appendChild(card);
        });
      }
    });

    const vfCounter = el("div", { class: "q-card", id: "vfCounterCard" }, [
      el("p", { style: "margin:0" }, [
        "Pontuação no Grupo Verdadeiro/Falso: ",
        el("b", { id: "vfCounterText" }, ["0 / " + vTotal]),
      ]),
    ]);
    root.insertBefore(vfCounter, root.children[1].nextSibling);

    function updateVfCounter() {
      const t = document.getElementById("vfCounterText");
      if (t) t.textContent = vCorrect + " / " + vTotal;
      saveResult(meta.id, { score: vCorrect, total: vTotal, date: new Date().toISOString() });
    }

    root.appendChild(
      el("div", { style: "text-align:center;margin-top:10px" }, [
        el("a", { class: "btn btn-primary", href: "index.html" }, ["✓ Concluir revisão"]),
      ])
    );
  }

  /* ============================== FLASHCARDS ================================ */

  async function initFlashcards() {
    const stage = document.getElementById("flashStage");
    if (!stage) return;

    try {
      await loadScript("js/data/study/flashcards.js");
    } catch (e) {
      stage.appendChild(el("div", { class: "empty" }, ["Erro a carregar as flashcards."]));
      return;
    }

    const all = window.AFD_FLASHCARDS || [];
    const topics = Array.from(new Set(all.map((c) => c.topic)));
    const filtersEl = document.getElementById("flashFilters");
    let activeTopic = "Todos";
    let deck = all.slice();
    let i = 0;
    let flipped = false;
    let known = JSON.parse(localStorage.getItem("afd_flash_known") || "{}");

    function keyFor(card) {
      return card.topic + "::" + card.term;
    }

    function buildDeck() {
      deck = activeTopic === "Todos" ? all.slice() : all.filter((c) => c.topic === activeTopic);
      i = 0;
      flipped = false;
      render();
    }

    function renderFilters() {
      filtersEl.innerHTML = "";
      ["Todos", ...topics].forEach((t) => {
        filtersEl.appendChild(
          el(
            "button",
            {
              class: "filter-btn" + (t === activeTopic ? " active" : ""),
              onclick: () => {
                activeTopic = t;
                renderFilters();
                buildDeck();
              },
            },
            [t]
          )
        );
      });
    }

    function render() {
      stage.innerHTML = "";
      setText("flashProgress", deck.length ? i + 1 + " / " + deck.length : "0 / 0");
      if (!deck.length) {
        stage.appendChild(el("div", { class: "empty" }, ["Sem cartões para este filtro."]));
        return;
      }
      const card = deck[i];
      const isKnown = known[keyFor(card)];
      const cardEl = el(
        "div",
        { class: "flash-card" + (flipped ? " flipped" : ""), onclick: () => flip() },
        [
          el("div", { class: "flash-card-inner" }, [
            el("div", { class: "flash-face flash-front" }, [
              el("span", { class: "flash-topic" }, [card.topic + (isKnown ? " · ✓ sabido" : "")]),
              el("div", { class: "flash-term" }, [card.term]),
              el("span", { class: "flash-hint" }, ["toca para veres a definição"]),
            ]),
            el("div", { class: "flash-face flash-back" }, [
              el("span", { class: "flash-topic" }, [card.topic]),
              el("div", { class: "flash-def" }, [card.def]),
              el("span", { class: "flash-hint" }, ["toca para voltar"]),
            ]),
          ]),
        ]
      );
      stage.appendChild(cardEl);
    }

    function flip() {
      flipped = !flipped;
      render();
    }

    function next() {
      if (!deck.length) return;
      i = (i + 1) % deck.length;
      flipped = false;
      render();
    }
    function prev() {
      if (!deck.length) return;
      i = (i - 1 + deck.length) % deck.length;
      flipped = false;
      render();
    }
    function markKnown() {
      if (!deck.length) return;
      known[keyFor(deck[i])] = true;
      localStorage.setItem("afd_flash_known", JSON.stringify(known));
      next();
    }
    function shuffleDeck() {
      for (let k = deck.length - 1; k > 0; k--) {
        const j = Math.floor(Math.random() * (k + 1));
        [deck[k], deck[j]] = [deck[j], deck[k]];
      }
      i = 0;
      flipped = false;
      render();
      toast("Baralho misturado.");
    }

    renderFilters();
    render();

    const prevBtn = document.getElementById("flashPrev");
    const nextBtn = document.getElementById("flashNext");
    const knownBtn = document.getElementById("flashKnown");
    const shuffleBtn = document.getElementById("flashShuffle");
    const resetBtn = document.getElementById("flashResetKnown");
    if (prevBtn) prevBtn.addEventListener("click", prev);
    if (nextBtn) nextBtn.addEventListener("click", next);
    if (knownBtn) knownBtn.addEventListener("click", markKnown);
    if (shuffleBtn) shuffleBtn.addEventListener("click", shuffleDeck);
    if (resetBtn)
      resetBtn.addEventListener("click", () => {
        known = {};
        localStorage.removeItem("afd_flash_known");
        toast("Progresso de flashcards reiniciado.");
        render();
      });

    document.addEventListener("keydown", (ev) => {
      if (!document.getElementById("flashStage")) return;
      if (ev.key === "ArrowRight") next();
      else if (ev.key === "ArrowLeft") prev();
      else if (ev.key === " ") {
        ev.preventDefault();
        flip();
      }
    });
  }

  /* ============================== MAPA MENTAL ================================ */

  async function initMindmap() {
    const root = document.getElementById("mindmapRoot");
    if (!root) return;

    try {
      await loadScript("js/data/study/mindmap.js");
    } catch (e) {
      root.appendChild(el("div", { class: "empty" }, ["Erro a carregar o mapa mental."]));
      return;
    }

    const data = window.AFD_MINDMAP;
    if (!data) return;

    function buildNode(node, depth) {
      const hasChildren = node.children && node.children.length;
      if (!hasChildren) {
        return el("div", { class: "mm-leaf" }, [node.label]);
      }
      const wrap = el("div", { class: "mm-node depth-" + depth + (depth === 0 ? " open" : "") });
      const head = el("div", { class: "mm-head" }, [
        el("span", { class: "mm-caret" }, ["▸"]),
        el("span", {}, [node.label]),
      ]);
      head.addEventListener("click", () => wrap.classList.toggle("open"));
      const childrenWrap = el(
        "div",
        { class: "mm-children" },
        node.children.map((c) => buildNode(c, depth + 1))
      );
      wrap.appendChild(head);
      wrap.appendChild(childrenWrap);
      return wrap;
    }

    root.innerHTML = "";
    root.appendChild(buildNode(data, 0));

    const expandBtn = document.getElementById("mmExpandAll");
    const collapseBtn = document.getElementById("mmCollapseAll");
    if (expandBtn)
      expandBtn.addEventListener("click", () => {
        root.querySelectorAll(".mm-node").forEach((n) => n.classList.add("open"));
      });
    if (collapseBtn)
      collapseBtn.addEventListener("click", () => {
        root.querySelectorAll(".mm-node").forEach((n, idx) => {
          if (!n.classList.contains("depth-0")) n.classList.remove("open");
        });
      });
  }

  /* ============================== RESUMOS ================================ */

  async function initResumos() {
    const article = document.getElementById("resumoArticle");
    const toc = document.getElementById("resumoToc");
    if (!article) return;

    try {
      await loadScript("js/data/study/resumos.js");
    } catch (e) {
      article.appendChild(el("div", { class: "empty" }, ["Erro a carregar os resumos."]));
      return;
    }

    const data = window.AFD_SUMMARIES || [];
    article.innerHTML = "";
    if (toc) toc.innerHTML = "";

    data.forEach((mod) => {
      if (toc) {
        toc.appendChild(el("a", { href: "#" + mod.id }, [mod.title]));
      }
      const sec = el("section", { class: "resumo-section", id: mod.id }, [
        el("h2", {}, [mod.title]),
        el("p", { class: "lead" }, [mod.intro]),
      ]);
      (mod.sections || []).forEach((s) => {
        const block = el("div", { class: "resumo-block" }, [
          el("h3", {}, [s.h]),
          el(
            "ul",
            {},
            (s.points || []).map((p) => el("li", {}, [p]))
          ),
        ]);
        sec.appendChild(block);
      });
      article.appendChild(sec);
    });

    // scrollspy
    const tocLinks = toc ? Array.from(toc.querySelectorAll("a")) : [];
    const sections = Array.from(article.querySelectorAll(".resumo-section"));
    function onScroll() {
      let current = sections[0];
      const y = window.scrollY + 120;
      sections.forEach((s) => {
        if (s.offsetTop <= y) current = s;
      });
      tocLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current.id));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* --------------------------------- Boot ---------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNav();
    initHome();
    initExam();
    initFlashcards();
    initMindmap();
    initResumos();

    const resetBtn = document.getElementById("resetProgress");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Limpar todo o progresso guardado neste dispositivo?")) {
          clearAllResults();
          toast("Progresso limpo.");
          setTimeout(() => location.reload(), 500);
        }
      });
    }
  });
})();
