/* ==========================================================================
   Guia Interativo de IA — Interactive Logic & Dynamic SVG Graphics
   ========================================================================== */

(function () {
  "use strict";

  const DATA = window.GUIDE_DATA;
  if (!DATA) return;

  /* ------------------------------------------------------------------------
     1. Theme Toggle (Light Editorial Default + Dark Mode)
     ------------------------------------------------------------------------ */
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeLabel) {
      themeLabel.textContent = theme === "dark" ? "Claro" : "Escuro";
    }
    try {
      localStorage.setItem("ia-guia-theme", theme);
    } catch (_) {}
  }

  (function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem("ia-guia-theme");
    } catch (_) {}
    if (saved === "dark" || saved === "light") {
      applyTheme(saved);
    } else {
      applyTheme("light");
    }
  })();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }

  /* ------------------------------------------------------------------------
     2. Mobile TOC Drawer + Reading Progress + ScrollSpy
     ------------------------------------------------------------------------ */
  const tocSidebar = document.getElementById("toc-sidebar");
  const tocBackdrop = document.getElementById("toc-backdrop");
  const tocOpenBtn = document.getElementById("toc-mobile-open");
  const tocCloseBtn = document.getElementById("toc-mobile-close");
  const tocLinks = Array.from(document.querySelectorAll(".toc-link"));
  const sections = Array.from(document.querySelectorAll("section.guide-section[id]"));
  const progressBar = document.getElementById("reading-progress");
  const progressPct = document.getElementById("header-progress-pct");
  const curveBars = Array.from(document.querySelectorAll(".curve-bar"));
  const curveCaption = document.getElementById("curve-caption");

  const CURVE_LABELS = [
    "Fundamentos: entendendo o básico sem fórmulas",
    "História viva: como saímos de 2017 até os agentes",
    "Prática 1: usando o ecossistema Google hoje",
    "Prática 2: entendendo agentes, skills e MCP",
    "Mão na massa: criando com o Google Antigravity",
    "Sistemas reais: do prompt ao servidor sem quebrar",
    "Bônus opcional: panorama dos outros ecossistemas",
    "Próximos passos: seu plano e glossário de bolso"
  ];

  function toggleDrawer(open) {
    if (!tocSidebar || !tocBackdrop) return;
    tocSidebar.classList.toggle("is-open", open);
    tocBackdrop.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (tocOpenBtn) tocOpenBtn.addEventListener("click", () => toggleDrawer(true));
  if (tocCloseBtn) tocCloseBtn.addEventListener("click", () => toggleDrawer(false));
  if (tocBackdrop) tocBackdrop.addEventListener("click", () => toggleDrawer(false));

  tocLinks.forEach((link) => {
    link.addEventListener("click", () => toggleDrawer(false));
  });

  function updateReadingState() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100))) : 0;

    if (progressBar) progressBar.style.width = pct + "%";
    if (progressPct) progressPct.textContent = pct + "% lido";

    // Active section ScrollSpy
    let activeIndex = 0;
    const triggerY = scrollTop + 150;
    sections.forEach((sec, idx) => {
      if (sec.offsetTop <= triggerY) {
        activeIndex = idx;
      }
    });

    const activeId = sections[activeIndex] ? sections[activeIndex].id : "";
    tocLinks.forEach((link) => {
      const matches = link.getAttribute("href") === "#" + activeId;
      link.classList.toggle("is-active", matches);
    });

    curveBars.forEach((bar, idx) => {
      bar.classList.toggle("is-done", idx <= activeIndex);
    });
    if (curveCaption && CURVE_LABELS[activeIndex]) {
      curveCaption.textContent = CURVE_LABELS[activeIndex];
    }
  }

  window.addEventListener("scroll", updateReadingState, { passive: true });
  window.addEventListener("resize", updateReadingState, { passive: true });
  updateReadingState();

  /* ------------------------------------------------------------------------
     3. Widget 1 — Prompt & Context Window Simulator
     ------------------------------------------------------------------------ */
  const promptTabsEl = document.getElementById("prompt-sim-tabs");
  const promptTextEl = document.getElementById("sim-prompt-text");
  const promptOutputEl = document.getElementById("sim-output-text");
  const promptMetricsEl = document.getElementById("sim-metrics");
  const promptTakeawayEl = document.getElementById("sim-takeaway");
  const promptMeterNoteEl = document.getElementById("sim-meter-note");
  const segTask = document.getElementById("seg-task");
  const segCtx = document.getElementById("seg-ctx");
  const segRules = document.getElementById("seg-rules");

  function renderPromptLevel(levelId) {
    const item = DATA.promptLevels.find((p) => p.id === levelId) || DATA.promptLevels[0];
    if (!item) return;

    if (promptTabsEl) {
      Array.from(promptTabsEl.querySelectorAll(".pill-tab")).forEach((btn) => {
        const active = btn.dataset.level === item.id;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", String(active));
      });
    }

    if (promptTextEl) promptTextEl.textContent = item.prompt;
    if (promptOutputEl) promptOutputEl.innerHTML = item.outputHtml;
    if (promptTakeawayEl) promptTakeawayEl.textContent = item.takeaway;
    if (promptMeterNoteEl) promptMeterNoteEl.textContent = item.meterNote;

    if (segTask) segTask.style.width = item.meters.task + "%";
    if (segCtx) segCtx.style.width = item.meters.context + "%";
    if (segRules) segRules.style.width = item.meters.rules + "%";

    if (promptMetricsEl) {
      promptMetricsEl.innerHTML = item.metrics
        .map((m) => `<span class="metric-chip metric-${m.tone}">${m.text}</span>`)
        .join("");
    }
  }

  if (promptTabsEl) {
    promptTabsEl.innerHTML = DATA.promptLevels
      .map(
        (lvl, idx) =>
          `<button type="button" class="pill-tab${idx === 0 ? " is-active" : ""}" role="tab" aria-selected="${
            idx === 0
          }" data-level="${lvl.id}">${lvl.label}</button>`
      )
      .join("");

    promptTabsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill-tab");
      if (btn && btn.dataset.level) {
        renderPromptLevel(btn.dataset.level);
      }
    });
    renderPromptLevel(DATA.promptLevels[0].id);
  }

  /* ------------------------------------------------------------------------
     4. Widget 2 — 5 Eras Interactive Evolution + Layered Architecture SVG
     ------------------------------------------------------------------------ */
  const eraTrackEl = document.getElementById("era-timeline-track");
  const eraSvgEl = document.getElementById("era-layered-svg");
  const eraDetailsEl = document.getElementById("era-details");
  const eraPrevBtn = document.getElementById("era-prev-btn");
  const eraNextBtn = document.getElementById("era-next-btn");
  const eraCounterEl = document.getElementById("era-counter");

  let currentEraIdx = 0;

  function buildEraLayeredSvg(eraNumber) {
    // Progressive stack architecture SVG growing upward from 2017 base
    const layers = [
      {
        era: 5,
        y: 34,
        h: 48,
        fill: "var(--accent-green-soft)",
        stroke: "var(--accent-green)",
        title: "Camada 5 · Plugins (MCP), Sandboxes & Sidecars",
        sub: "Conecta a serviços reais com cápsulas e segurança"
      },
      {
        era: 4,
        y: 90,
        h: 48,
        fill: "var(--accent-green-soft)",
        stroke: "var(--accent-green)",
        title: "Camada 4 · Agentes, Harness & Skills",
        sub: "Planeja, age, consulta manuais e corrige erros"
      },
      {
        era: 3,
        y: 146,
        h: 48,
        fill: "var(--accent-amber-soft)",
        stroke: "var(--accent-amber)",
        title: "Camada 3 · Regras Globais, RAG & Raciocínio",
        sub: "Gems, NotebookLM, visão/áudio e pensamento passo a passo"
      },
      {
        era: 2,
        y: 202,
        h: 48,
        fill: "var(--accent-blue-soft)",
        stroke: "var(--accent-blue)",
        title: "Camada 2 · LLMs em Escala & Chat Popular",
        sub: "GPT/ChatGPT, Gemini, Claude e Llama em linguagem natural"
      },
      {
        era: 1,
        y: 258,
        h: 50,
        fill: "var(--accent-blue-soft)",
        stroke: "var(--accent-blue)",
        title: "Camada 1 · Motor Transformer (Google, 2017)",
        sub: "Atenção paralela — a fundação de toda IA moderna"
      }
    ];

    const layerMarkup = layers
      .map((l) => {
        const unlocked = l.era <= eraNumber;
        const isCurrent = l.era === eraNumber;
        const opacity = unlocked ? 1 : 0.25;
        const strokeDash = unlocked ? "" : 'stroke-dasharray="5 5"';
        const strokeWidth = isCurrent ? 2.4 : 1.3;
        const badgeText = isCurrent ? "NOVO" : unlocked ? "ATIVA" : "FUTURO";

        return `
          <g style="opacity:${opacity}; transition: opacity 0.25s ease;">
            <rect x="14" y="${l.y}" width="432" height="${l.h}" rx="10"
              fill="${unlocked ? l.fill : "var(--bg-surface)"}"
              stroke="${unlocked ? l.stroke : "var(--border-strong)"}"
              stroke-width="${strokeWidth}" ${strokeDash} />
            <text x="26" y="${l.y + 20}" fill="var(--ink-primary)" font-size="11.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">${l.title}</text>
            <text x="26" y="${l.y + 36}" fill="var(--ink-secondary)" font-size="10.2" font-family="Plus Jakarta Sans, sans-serif">${l.sub}</text>
            <rect x="382" y="${l.y + 8}" width="54" height="17" rx="8.5"
              fill="${isCurrent ? l.stroke : "var(--bg-surface)"}" opacity="${isCurrent ? 0.92 : 0.85}" />
            <text x="409" y="${l.y + 19.5}" text-anchor="middle"
              fill="${isCurrent ? "#ffffff" : "var(--ink-muted)"}"
              font-size="8.2" font-weight="700" font-family="JetBrains Mono, monospace">${badgeText}</text>
          </g>
        `;
      })
      .join("");

    return `
      <svg class="era-svg" viewBox="0 0 460 322" role="img" aria-label="Camadas evolutivas da Inteligência Artificial até a Era ${eraNumber}">
        <text x="230" y="19" text-anchor="middle" fill="var(--ink-muted)" font-size="10" font-weight="600" font-family="JetBrains Mono, monospace">↑ CADA ERA ADICIONA UMA CAMADA SOBRE A ANTERIOR</text>
        ${layerMarkup}
      </svg>
    `;
  }

  function renderEra(idx) {
    currentEraIdx = Math.max(0, Math.min(DATA.eras.length - 1, idx));
    const era = DATA.eras[currentEraIdx];

    if (eraTrackEl) {
      Array.from(eraTrackEl.querySelectorAll(".era-btn")).forEach((btn, i) => {
        const active = i === currentEraIdx;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", String(active));
      });
    }

    if (eraSvgEl) {
      eraSvgEl.innerHTML = buildEraLayeredSvg(era.id);
    }

    if (eraDetailsEl) {
      const badgeClass = era.scopeType === "agent" ? "tag-agent" : "tag-model";
      const refsHtml =
        era.refs && era.refs.length
          ? `
            <div class="era-inline-refs">
              <p class="era-inline-refs-label">Referências desta era</p>
              <div class="era-ref-chips">
                ${era.refs
                  .map(
                    (r) =>
                      `<a class="era-ref-chip" href="${r.url}" target="_blank" rel="noopener noreferrer">${r.label} ↗</a>`
                  )
                  .join("")}
              </div>
            </div>
          `
          : "";

      eraDetailsEl.innerHTML = `
        <div class="era-meta-row">
          <span class="era-badge ${badgeClass}">${era.scope}</span>
          <span class="lang-tag">${era.year}</span>
        </div>
        <h3 class="era-heading">${era.title}</h3>
        <p class="era-summary">${era.summary}</p>
        <div class="era-analogy"><strong>Analogia:</strong> ${era.analogy}</div>
        <ul class="era-milestones">
          ${era.milestones.map((m) => `<li>${m}</li>`).join("")}
        </ul>
        ${refsHtml}
      `;
    }

    if (eraPrevBtn) eraPrevBtn.disabled = currentEraIdx === 0;
    if (eraNextBtn) eraNextBtn.disabled = currentEraIdx === DATA.eras.length - 1;
    if (eraCounterEl) eraCounterEl.textContent = `Era ${era.id} de ${DATA.eras.length}`;
  }

  if (eraTrackEl) {
    eraTrackEl.innerHTML = DATA.eras
      .map(
        (era, idx) => `
          <button type="button" class="era-btn${idx === 0 ? " is-active" : ""}" data-idx="${idx}" aria-pressed="${
          idx === 0
        }">
            <span class="era-btn-year">${era.year}</span>
            <span class="era-btn-title">${era.shortTitle}</span>
          </button>
        `
      )
      .join("");

    eraTrackEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".era-btn");
      if (btn) renderEra(Number(btn.dataset.idx));
    });

    if (eraPrevBtn) eraPrevBtn.addEventListener("click", () => renderEra(currentEraIdx - 1));
    if (eraNextBtn) eraNextBtn.addEventListener("click", () => renderEra(currentEraIdx + 1));

    renderEra(0);
  }

  /* ------------------------------------------------------------------------
     5. Widget 3 — Google Ecosystem Compass
     ------------------------------------------------------------------------ */
  const compassGoalsEl = document.getElementById("compass-goals");
  const compassResultEl = document.getElementById("compass-result");

  const RUNG_NAMES = ["1. Gemini & Gems", "2. NotebookLM", "3. AI Studio", "4. Antigravity"];

  function renderCompass(goalId) {
    const item = DATA.compassGoals.find((g) => g.id === goalId) || DATA.compassGoals[0];
    if (!item) return;

    if (compassGoalsEl) {
      Array.from(compassGoalsEl.querySelectorAll(".goal-btn")).forEach((btn) => {
        const active = btn.dataset.goal === item.id;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", String(active));
      });
    }

    if (compassResultEl) {
      const ladderHtml = RUNG_NAMES.map(
        (name, idx) => `<div class="ladder-rung${idx + 1 === item.rung ? " is-current" : ""}">${name}</div>`
      ).join("");

      compassResultEl.innerHTML = `
        <div class="compass-result-top">
          <h4 class="compass-tool-name">${item.tool}</h4>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="nav-step-btn" style="text-decoration:none;">${item.urlLabel} ↗</a>
        </div>
        <div class="compass-ladder" aria-label="Degrau na escada de autonomia Google">${ladderHtml}</div>
        <p class="compass-desc">${item.description}</p>
        <p class="compass-tip"><strong>Dica prática:</strong> ${item.tip}</p>
      `;
    }
  }

  if (compassGoalsEl) {
    compassGoalsEl.innerHTML = DATA.compassGoals
      .map(
        (g, idx) =>
          `<button type="button" class="goal-btn${idx === 0 ? " is-active" : ""}" data-goal="${
            g.id
          }" aria-pressed="${idx === 0}">${g.goal}</button>`
      )
      .join("");

    compassGoalsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".goal-btn");
      if (btn && btn.dataset.goal) renderCompass(btn.dataset.goal);
    });
    renderCompass(DATA.compassGoals[0].id);
  }

  /* ------------------------------------------------------------------------
     6. Widget 4 — Agent X-Ray Anatomy & Task Loop Simulator
     ------------------------------------------------------------------------ */
  const agentSvgWrap = document.getElementById("agent-xray-svg-wrap");
  const agentInspectorEl = document.getElementById("agent-inspector");
  const loopStatusEl = document.getElementById("agent-loop-status");
  const loopStepBtn = document.getElementById("agent-loop-step-btn");
  const loopResetBtn = document.getElementById("agent-loop-reset-btn");

  let activeAgentPart = "harness";
  let loopStepIdx = -1;

  function renderAgentSvg(selectedKey) {
    if (!agentSvgWrap) return;

    const strokeFor = (key, defaultColor) =>
      selectedKey === key ? defaultColor : "var(--border-strong)";
    const fillFor = (key, softColor) =>
      selectedKey === key ? softColor : "var(--bg-surface)";
    const widthFor = (key) => (selectedKey === key ? "2.5" : "1.3");

    agentSvgWrap.innerHTML = `
      <svg viewBox="0 0 460 310" role="img" aria-label="Diagrama clicável das peças internas de um agente de IA">
        <!-- Outer Harness Frame -->
        <g class="xray-node" data-part="harness" tabindex="0" role="button" aria-label="Inspecionar Harness">
          <rect x="12" y="12" width="436" height="286" rx="16"
            fill="${selectedKey === "harness" ? "var(--accent-blue-soft)" : "var(--bg-surface)"}"
            stroke="${strokeFor("harness", "var(--accent-blue)")}"
            stroke-width="${widthFor("harness")}" />
          <text x="28" y="34" fill="var(--accent-blue)" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">HARNESS · MESA DE OPERAÇÕES (EX: ANTIGRAVITY)</text>
        </g>

        <!-- Connectors -->
        <line x1="154" y1="108" x2="188" y2="108" stroke="var(--border-strong)" stroke-width="1.6" stroke-dasharray="4 3"/>
        <line x1="274" y1="108" x2="306" y2="108" stroke="var(--border-strong)" stroke-width="1.6" stroke-dasharray="4 3"/>
        <line x1="230" y1="154" x2="230" y2="186" stroke="var(--border-strong)" stroke-width="1.6" stroke-dasharray="4 3"/>
        <line x1="154" y1="226" x2="306" y2="226" stroke="var(--border-strong)" stroke-width="1.6" stroke-dasharray="4 3"/>

        <!-- Skills -->
        <g class="xray-node" data-part="skills" tabindex="0" role="button" aria-label="Inspecionar Skills">
          <rect x="28" y="64" width="126" height="88" rx="11"
            fill="${fillFor("skills", "var(--accent-amber-soft)")}"
            stroke="${strokeFor("skills", "var(--accent-amber)")}"
            stroke-width="${widthFor("skills")}" />
          <text x="40" y="90" fill="var(--accent-amber)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">MANUAIS</text>
          <text x="40" y="110" fill="var(--ink-primary)" font-size="13.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Skills</text>
          <text x="40" y="128" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">Receitas sob</text>
          <text x="40" y="141" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">demanda</text>
        </g>

        <!-- Model (Center Brain) -->
        <g class="xray-node" data-part="model" tabindex="0" role="button" aria-label="Inspecionar Modelo">
          <rect x="188" y="60" width="86" height="94" rx="12"
            fill="${fillFor("model", "var(--accent-blue-soft)")}"
            stroke="${strokeFor("model", "var(--accent-blue)")}"
            stroke-width="${widthFor("model")}" />
          <text x="231" y="88" text-anchor="middle" fill="var(--accent-blue)" font-size="9.5" font-weight="700" font-family="JetBrains Mono, monospace">CÉREBRO</text>
          <text x="231" y="110" text-anchor="middle" fill="var(--ink-primary)" font-size="13.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Modelo</text>
          <text x="231" y="128" text-anchor="middle" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">(Gemini)</text>
          <text x="231" y="143" text-anchor="middle" fill="var(--ink-muted)" font-size="9.5" font-family="Plus Jakarta Sans, sans-serif">Planeja &amp; age</text>
        </g>

        <!-- Plugins / MCP -->
        <g class="xray-node" data-part="mcp" tabindex="0" role="button" aria-label="Inspecionar Plugins e MCP">
          <rect x="306" y="64" width="126" height="88" rx="11"
            fill="${fillFor("mcp", "var(--accent-green-soft)")}"
            stroke="${strokeFor("mcp", "var(--accent-green)")}"
            stroke-width="${widthFor("mcp")}" />
          <text x="318" y="90" fill="var(--accent-green)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">USB-C DA IA</text>
          <text x="318" y="110" fill="var(--ink-primary)" font-size="13" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Plugins / MCP</text>
          <text x="318" y="128" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">Drive, Sheets,</text>
          <text x="318" y="141" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">GitHub, Banco</text>
        </g>

        <!-- Sandbox / Cápsula -->
        <g class="xray-node" data-part="sandbox" tabindex="0" role="button" aria-label="Inspecionar Sandbox">
          <rect x="28" y="186" width="214" height="92" rx="11"
            fill="${fillFor("sandbox", "var(--accent-green-soft)")}"
            stroke="${strokeFor("sandbox", "var(--accent-green)")}"
            stroke-width="${widthFor("sandbox")}" />
          <text x="40" y="210" fill="var(--accent-green)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">SALA DE TESTES ISOLADA</text>
          <text x="40" y="230" fill="var(--ink-primary)" font-size="13.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Sandbox / Cápsula</text>
          <text x="40" y="248" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">Executa scripts e testa código</text>
          <text x="40" y="262" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">sem risco ao seu computador</text>
        </g>

        <!-- Sidecar -->
        <g class="xray-node" data-part="sidecar" tabindex="0" role="button" aria-label="Inspecionar Sidecar">
          <rect x="258" y="186" width="174" height="92" rx="11"
            fill="${fillFor("sidecar", "var(--accent-amber-soft)")}"
            stroke="${strokeFor("sidecar", "var(--accent-amber)")}"
            stroke-width="${widthFor("sidecar")}" />
          <text x="270" y="210" fill="var(--accent-amber)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">BASTIDORES SEGUROS</text>
          <text x="270" y="230" fill="var(--ink-primary)" font-size="13.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Sidecar</text>
          <text x="270" y="248" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">Guarda-chaves &amp; proxy</text>
          <text x="270" y="262" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">de senhas invisível</text>
        </g>
      </svg>
    `;
  }

  function selectAgentPart(partKey) {
    const info = DATA.agentParts[partKey];
    if (!info) return;
    activeAgentPart = partKey;
    renderAgentSvg(partKey);

    if (agentInspectorEl) {
      agentInspectorEl.innerHTML = `
        <p class="agent-inspector-role">${info.role}</p>
        <h4>${info.name}</h4>
        <p>${info.description}</p>
        <div class="agent-inspector-example">${info.example}</div>
      `;
    }
  }

  if (agentSvgWrap) {
    agentSvgWrap.addEventListener("click", (e) => {
      const node = e.target.closest(".xray-node");
      if (node && node.dataset.part) {
        selectAgentPart(node.dataset.part);
      }
    });

    agentSvgWrap.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const node = e.target.closest(".xray-node");
        if (node && node.dataset.part) {
          e.preventDefault();
          selectAgentPart(node.dataset.part);
        }
      }
    });

    selectAgentPart(activeAgentPart);
  }

  function updateLoopUI() {
    if (!loopStatusEl || !loopStepBtn) return;
    if (loopStepIdx < 0) {
      loopStatusEl.innerHTML =
        "<strong>Simulador de tarefa:</strong> clique para assistir o agente ler recibos no Drive e preencher o Google Sheets passo a passo.";
      loopStepBtn.textContent = "Iniciar simulação →";
      if (loopResetBtn) loopResetBtn.style.display = "none";
      return;
    }

    const step = DATA.agentLoopSteps[loopStepIdx];
    selectAgentPart(step.part);
    loopStatusEl.innerHTML = `<strong>${step.title}:</strong> ${step.text}`;
    if (loopStepIdx >= DATA.agentLoopSteps.length - 1) {
      loopStepBtn.textContent = "Repetir simulação ↻";
    } else {
      loopStepBtn.textContent = `Próximo passo (${loopStepIdx + 2}/${DATA.agentLoopSteps.length}) →`;
    }
    if (loopResetBtn) loopResetBtn.style.display = "inline-block";
  }

  if (loopStepBtn) {
    loopStepBtn.addEventListener("click", () => {
      loopStepIdx = loopStepIdx >= DATA.agentLoopSteps.length - 1 ? 0 : loopStepIdx + 1;
      updateLoopUI();
    });
  }

  if (loopResetBtn) {
    loopResetBtn.addEventListener("click", () => {
      loopStepIdx = -1;
      selectAgentPart("harness");
      updateLoopUI();
    });
  }

  /* ------------------------------------------------------------------------
     7. Copy Prompt Buttons (Antigravity Recipes)
     ------------------------------------------------------------------------ */
  document.querySelectorAll(".copy-btn[data-copy-target]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const targetId = btn.getAttribute("data-copy-target");
      const targetEl = targetId ? document.getElementById(targetId) : null;
      if (!targetEl) return;

      const text = targetEl.textContent.trim();
      const original = btn.textContent;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copiado!";
        btn.classList.add("is-copied");
      } catch (_) {
        // Fallback selection copy
        const area = document.createElement("textarea");
        area.value = text;
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        document.body.removeChild(area);
        btn.textContent = "Copiado!";
        btn.classList.add("is-copied");
      }
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove("is-copied");
      }, 1800);
    });
  });

  /* ------------------------------------------------------------------------
     8. Widget 5 — Prompt-to-Server Interactive Lifecycle & Rollback Simulator
     ------------------------------------------------------------------------ */
  const pipeNodesEl = document.getElementById("pipeline-nodes");
  const pipeSvgWrapEl = document.getElementById("pipe-visual-svg");
  const pipeDetailEl = document.getElementById("pipe-detail-card");
  const pipePrevBtn = document.getElementById("pipe-prev-btn");
  const pipeNextBtn = document.getElementById("pipe-next-btn");
  const pipeBugBtn = document.getElementById("pipe-bug-btn");

  let pipeIdx = 0;
  let pipeMode = "normal"; // "normal" | "bug" | "recovered"

  function renderPipelineSvg() {
    if (!pipeSvgWrapEl) return;

    const coords = [
      { x: 46, label: "Prompt", sub: "Você" },
      { x: 146, label: "Sandbox", sub: "Testes" },
      { x: 246, label: "GitHub", sub: "v1 / v2" },
      { x: 346, label: "Preview", sub: "Link teste" },
      { x: 446, label: "Neon", sub: "Dados" },
      { x: 546, label: "Vercel", sub: "Servidor" },
      { x: 646, label: "Usuário", sub: "URL final" }
    ];

    const arrows = coords
      .slice(0, -1)
      .map((c, idx) => {
        const next = coords[idx + 1];
        let color = "var(--border-strong)";
        let width = 1.8;
        if (pipeMode === "normal" && idx < pipeIdx) {
          color = "var(--accent-blue)";
          width = 2.4;
        } else if (pipeMode === "bug" && idx === 5) {
          color = "var(--accent-red)";
          width = 2.6;
        } else if (pipeMode === "recovered" && idx >= 4) {
          color = "var(--accent-green)";
          width = 2.4;
        }
        return `<line x1="${c.x + 34}" y1="68" x2="${next.x - 36}" y2="68" stroke="${color}" stroke-width="${width}" stroke-linecap="round" />
                <polygon points="${next.x - 36},64 ${next.x - 30},68 ${next.x - 36},72" fill="${color}" />`;
      })
      .join("");

    const nodes = coords
      .map((c, idx) => {
        let fill = "var(--bg-surface)";
        let stroke = "var(--border-strong)";
        let badge = "";

        if (pipeMode === "normal") {
          if (idx === pipeIdx) {
            fill = "var(--accent-blue-soft)";
            stroke = "var(--accent-blue)";
          } else if (idx < pipeIdx) {
            stroke = "var(--accent-blue)";
          }
        } else if (pipeMode === "bug") {
          if (idx === 5 || idx === 6) {
            fill = "var(--accent-red-soft)";
            stroke = "var(--accent-red)";
            badge = idx === 5 ? "ERRO v2" : "AFETADO";
          } else if (idx === 2 || idx === 4) {
            fill = "var(--accent-green-soft)";
            stroke = "var(--accent-green)";
            badge = idx === 2 ? "v1 SALVA" : "INTACTO";
          }
        } else if (pipeMode === "recovered") {
          if (idx === 2 || idx === 4 || idx === 5 || idx === 6) {
            fill = "var(--accent-green-soft)";
            stroke = "var(--accent-green)";
            badge = idx === 5 ? "v1 NO AR" : idx === 4 ? "INTACTO" : "";
          }
        }

        const badgeColor = pipeMode === "bug" && (idx === 5 || idx === 6) ? "var(--accent-red)" : "var(--accent-green)";

        return `
          <g>
            ${
              badge
                ? `<text x="${c.x}" y="38" text-anchor="middle" fill="${badgeColor}" font-size="8.5" font-weight="700" font-family="JetBrains Mono, monospace">${badge}</text>`
                : ""
            }
            <rect x="${c.x - 34}" y="46" width="68" height="44" rx="9" fill="${fill}" stroke="${stroke}" stroke-width="${
          stroke === "var(--border-strong)" ? 1.3 : 2.2
        }" />
            <text x="${c.x}" y="66" text-anchor="middle" fill="var(--ink-primary)" font-size="11" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">${c.label}</text>
            <text x="${c.x}" y="81" text-anchor="middle" fill="var(--ink-muted)" font-size="9.2" font-family="Plus Jakarta Sans, sans-serif">${c.sub}</text>
          </g>
        `;
      })
      .join("");

    const rollbackArc =
      pipeMode === "recovered"
        ? `
          <path d="M 246 92 C 246 132, 546 132, 546 94" fill="none" stroke="var(--accent-green)" stroke-width="2.4" stroke-dasharray="6 4" />
          <polygon points="541,98 546,91 551,98" fill="var(--accent-green)" />
          <rect x="318" y="108" width="156" height="20" rx="10" fill="var(--accent-green)" />
          <text x="396" y="121.5" text-anchor="middle" fill="#ffffff" font-size="9.2" font-weight="700" font-family="JetBrains Mono, monospace">ROLLBACK v1 EM 1 CLIQUE ↺</text>
        `
        : pipeMode === "bug"
        ? `
          <text x="396" y="118" text-anchor="middle" fill="var(--accent-red)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">⚠ BUG NA v2 DETECTADO — GITHUB (v1) E BANCO NEON ESTÃO PROTEGIDOS</text>
        `
        : `
          <text x="346" y="118" text-anchor="middle" fill="var(--ink-muted)" font-size="9.5" font-weight="600" font-family="JetBrains Mono, monospace">ETAPA ATUAL: ${pipeIdx + 1} DE 7 · FLUXO CONTÍNUO DO PROMPT ATÉ O LINK PÚBLICO</text>
        `;

    pipeSvgWrapEl.innerHTML = `
      <svg viewBox="0 0 692 138" role="img" aria-label="Diagrama visual do fluxo do prompt ao servidor">
        ${arrows}
        ${nodes}
        ${rollbackArc}
      </svg>
    `;
  }

  function renderPipeline() {
    if (!pipeNodesEl || !pipeDetailEl) return;

    Array.from(pipeNodesEl.querySelectorAll(".pipe-step")).forEach((btn, idx) => {
      btn.classList.remove("is-active", "is-bug", "is-safe");
      if (pipeMode === "bug") {
        if (idx === 5 || idx === 6) btn.classList.add("is-bug");
        if (idx === 2 || idx === 4) btn.classList.add("is-safe");
      } else if (pipeMode === "recovered") {
        if (idx === 2 || idx === 4 || idx === 5 || idx === 6) btn.classList.add("is-safe");
      } else {
        if (idx === pipeIdx) btn.classList.add("is-active");
      }
    });

    renderPipelineSvg();

    pipeDetailEl.classList.remove("is-bug-panel", "is-recovered-panel");

    if (pipeMode === "bug") {
      pipeDetailEl.classList.add("is-bug-panel");
      pipeDetailEl.innerHTML = `
        <div class="pipe-detail-top">
          <h4>Ops! A versão v2 subiu com um erro no botão de salvar</h4>
          <span class="pipe-tool-pill">Estado: Alerta em Produção</span>
        </div>
        <p>Sem versionamento nem banco separado, isso viraria pânico. Mas como seu sistema segue o fluxo profissional, olhe o que está protegido em verde acima: o <strong>GitHub (Etapa 3)</strong> ainda guarda a versão v1 intacta e o <strong>Banco Neon (Etapa 5)</strong> preservou todos os dados sem perder nada.</p>
        <div class="pipe-shield"><strong>Próximo passo:</strong> clique em "Voltar para v1 (Rollback em 1 clique)" para restaurar o site no ar instantaneamente enquanto o Antigravity corrige a v2 com calma.</div>
      `;
      if (pipeBugBtn) {
        pipeBugBtn.textContent = "Voltar para v1 (Rollback em 1 clique) ↺";
        pipeBugBtn.className = "primary-action-btn";
      }
      return;
    }

    if (pipeMode === "recovered") {
      pipeDetailEl.classList.add("is-recovered-panel");
      pipeDetailEl.innerHTML = `
        <div class="pipe-detail-top">
          <h4>Rollback concluído em segundos — sistema 100% no ar!</h4>
          <span class="pipe-tool-pill">Estado: Versão v1 Restaurada</span>
        </div>
        <p>A Vercel reapontou a URL oficial para a versão v1 ("foto congelada") guardada no GitHub. Todos os dados no banco Neon continuaram intactos. Agora você pede ao Antigravity para corrigir o erro num novo rascunho (<em>branch</em>), confere no <strong>Preview</strong> e só publica quando estiver perfeito.</p>
        <div class="pipe-shield"><strong>É isso que separa um protótipo frágil de um sistema profissional:</strong> errar deixa de ser desastre e vira rotina reversível.</div>
      `;
      if (pipeBugBtn) {
        pipeBugBtn.textContent = "Voltar ao modo normal";
        pipeBugBtn.className = "nav-step-btn";
      }
      return;
    }

    const step = DATA.pipelineSteps[pipeIdx];
    pipeDetailEl.innerHTML = `
      <div class="pipe-detail-top">
        <h4>${step.title}</h4>
        <span class="pipe-tool-pill">${step.tool}</span>
      </div>
      <p>${step.description}</p>
      <div class="pipe-shield">${step.shield}</div>
    `;

    if (pipePrevBtn) pipePrevBtn.disabled = pipeIdx === 0;
    if (pipeNextBtn) pipeNextBtn.disabled = pipeIdx === DATA.pipelineSteps.length - 1;
    if (pipeBugBtn) {
      pipeBugBtn.textContent = "Simular bug em produção!";
      pipeBugBtn.className = "danger-action-btn";
    }
  }

  if (pipeNodesEl) {
    pipeNodesEl.innerHTML = DATA.pipelineSteps
      .map(
        (step, idx) => `
          <button type="button" class="pipe-step" data-idx="${idx}">
            <span class="pipe-num">${step.id}</span>
            <span class="pipe-name">${step.short}</span>
          </button>
        `
      )
      .join("");

    pipeNodesEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".pipe-step");
      if (btn) {
        pipeMode = "normal";
        pipeIdx = Number(btn.dataset.idx);
        renderPipeline();
      }
    });

    if (pipePrevBtn) {
      pipePrevBtn.addEventListener("click", () => {
        pipeMode = "normal";
        pipeIdx = Math.max(0, pipeIdx - 1);
        renderPipeline();
      });
    }

    if (pipeNextBtn) {
      pipeNextBtn.addEventListener("click", () => {
        pipeMode = "normal";
        pipeIdx = Math.min(DATA.pipelineSteps.length - 1, pipeIdx + 1);
        renderPipeline();
      });
    }

    if (pipeBugBtn) {
      pipeBugBtn.addEventListener("click", () => {
        if (pipeMode === "normal") {
          pipeMode = "bug";
        } else if (pipeMode === "bug") {
          pipeMode = "recovered";
        } else {
          pipeMode = "normal";
        }
        renderPipeline();
      });
    }

    renderPipeline();
  }

  /* ------------------------------------------------------------------------
     9. Persistent Action Checklist (localStorage)
     ------------------------------------------------------------------------ */
  const checklistEl = document.getElementById("action-checklist");
  const checklistSummaryEl = document.getElementById("checklist-summary");

  function loadChecks() {
    try {
      return JSON.parse(localStorage.getItem("ia-guia-checks") || "{}");
    } catch (_) {
      return {};
    }
  }

  function saveChecks(state) {
    try {
      localStorage.setItem("ia-guia-checks", JSON.stringify(state));
    } catch (_) {}
  }

  function renderChecklist() {
    if (!checklistEl) return;
    const state = loadChecks();
    let doneCount = 0;

    checklistEl.innerHTML = DATA.checklist
      .map((item) => {
        const checked = Boolean(state[item.id]);
        if (checked) doneCount += 1;
        return `
          <li>
            <label class="checklist-item${checked ? " is-checked" : ""}">
              <input type="checkbox" data-check-id="${item.id}" ${checked ? "checked" : ""} />
              <span class="checklist-text">
                <strong>${item.title}</strong>
                <span>${item.desc}</span>
              </span>
            </label>
          </li>
        `;
      })
      .join("");

    if (checklistSummaryEl) {
      checklistSummaryEl.textContent = `${doneCount} de ${DATA.checklist.length} passos concluídos (salvo automaticamente no seu navegador)`;
    }
  }

  if (checklistEl) {
    checklistEl.addEventListener("change", (e) => {
      const input = e.target.closest("input[data-check-id]");
      if (!input) return;
      const state = loadChecks();
      state[input.dataset.checkId] = input.checked;
      saveChecks(state);
      renderChecklist();
    });
    renderChecklist();
  }

  /* ------------------------------------------------------------------------
     10. Searchable & Filterable Pocket Glossary
     ------------------------------------------------------------------------ */
  const glossarySearchEl = document.getElementById("glossary-search");
  const glossaryTabsEl = document.getElementById("glossary-tabs");
  const glossaryGridEl = document.getElementById("glossary-grid");

  let glossaryCat = "Todos";
  let glossaryQuery = "";

  function renderGlossary() {
    if (!glossaryGridEl) return;
    const q = glossaryQuery.trim().toLowerCase();

    const filtered = DATA.glossary.filter((item) => {
      const catOk = glossaryCat === "Todos" || item.category === glossaryCat;
      const textOk =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.def.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return catOk && textOk;
    });

    if (filtered.length === 0) {
      glossaryGridEl.innerHTML = `<p style="color:var(--ink-muted); font-size:14.5px; margin:8px 0;">Nenhum termo encontrado para "${glossaryQuery}".</p>`;
      return;
    }

    glossaryGridEl.innerHTML = filtered
      .map(
        (item) => `
          <article class="glossary-card">
            <div class="glossary-card-head">
              <span class="glossary-term">${item.term}</span>
              <span class="glossary-cat">${item.category}</span>
            </div>
            <p class="glossary-def">${item.def}</p>
          </article>
        `
      )
      .join("");
  }

  if (glossarySearchEl) {
    glossarySearchEl.addEventListener("input", (e) => {
      glossaryQuery = e.target.value;
      renderGlossary();
    });
  }

  if (glossaryTabsEl) {
    glossaryTabsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill-tab");
      if (!btn || !btn.dataset.cat) return;
      glossaryCat = btn.dataset.cat;
      Array.from(glossaryTabsEl.querySelectorAll(".pill-tab")).forEach((b) => {
        b.classList.toggle("is-active", b.dataset.cat === glossaryCat);
      });
      renderGlossary();
    });
  }

  renderGlossary();

  /* ------------------------------------------------------------------------
     11. Section 02 — Filterable Complete Era Reference Library
     ------------------------------------------------------------------------ */
  const eraLibTabsEl = document.getElementById("era-library-tabs");
  const eraLibGridEl = document.getElementById("era-library-grid");
  let activeEraFilter = "5"; // Default to Era 5 (latest era focus), 1-click access to all eras

  function renderEraLibrary(filterKey) {
    if (!eraLibGridEl || !DATA.eraLibrary) return;
    activeEraFilter = filterKey;

    if (eraLibTabsEl) {
      Array.from(eraLibTabsEl.querySelectorAll(".filter-mini-btn")).forEach((btn) => {
        const active = btn.dataset.eraFilter === filterKey;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", String(active));
      });
    }

    const items =
      filterKey === "all"
        ? DATA.eraLibrary
        : DATA.eraLibrary.filter((item) => item.eraGroup === filterKey);

    eraLibGridEl.innerHTML = items
      .map(
        (item) => `
          <a class="resource-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
            <div class="resource-top">
              <span class="resource-kind${item.isVideo ? " is-video" : ""}">${item.kind}</span>
              <span class="lang-tag">${item.lang}</span>
            </div>
            <span class="resource-name">${item.title}</span>
            <span class="resource-note">${item.note}</span>
          </a>
        `
      )
      .join("");
  }

  if (eraLibTabsEl && eraLibGridEl) {
    eraLibTabsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-mini-btn");
      if (btn && btn.dataset.eraFilter) {
        renderEraLibrary(btn.dataset.eraFilter);
      }
    });
    renderEraLibrary(activeEraFilter);
  }

  /* ------------------------------------------------------------------------
     12. Widget 6 — Other AI Ecosystems Explorer (Optional Section 07)
     ------------------------------------------------------------------------ */
  const ecoTabsEl = document.getElementById("eco-tabs");
  const ecoPanelEl = document.getElementById("eco-panel");

  function renderEcosystem(ecoId) {
    if (!ecoPanelEl || !DATA.ecosystems) return;
    const eco = DATA.ecosystems.find((e) => e.id === ecoId) || DATA.ecosystems[0];
    if (!eco) return;

    if (ecoTabsEl) {
      Array.from(ecoTabsEl.querySelectorAll(".pill-tab")).forEach((btn) => {
        const active = btn.dataset.eco === eco.id;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", String(active));
      });
    }

    ecoPanelEl.innerHTML = `
      <div class="eco-panel-head">
        <h4 class="eco-panel-title">${eco.name}</h4>
        <span class="eco-tagline">${eco.tagline}</span>
      </div>
      <p class="eco-summary">${eco.summary}</p>
      <div class="eco-grid">
        <div class="eco-box">
          <p class="eco-box-label">Famílias de Modelos</p>
          <ul>
            ${eco.models.map((m) => `<li>${m}</li>`).join("")}
          </ul>
        </div>
        <div class="eco-box">
          <p class="eco-box-label">O que usam na prática (Apps &amp; Harnesses)</p>
          <ul>
            ${eco.tools.map((t) => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      </div>
      <p class="eco-strength">${eco.strength}</p>
    `;
  }

  if (ecoTabsEl && ecoPanelEl && DATA.ecosystems) {
    ecoTabsEl.innerHTML = DATA.ecosystems
      .map(
        (eco, idx) =>
          `<button type="button" class="pill-tab${idx === 0 ? " is-active" : ""}" role="tab" aria-selected="${
            idx === 0
          }" data-eco="${eco.id}">${eco.tab}</button>`
      )
      .join("");

    ecoTabsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill-tab");
      if (btn && btn.dataset.eco) {
        renderEcosystem(btn.dataset.eco);
      }
    });
    renderEcosystem(DATA.ecosystems[0].id);
  }

  /* ------------------------------------------------------------------------
     13. Section 05 — Antigravity Visual Tour Carousel & Fullscreen Lightbox
     ------------------------------------------------------------------------ */
  const tourWidgetEl = document.getElementById("widget-antigravity-tour");
  const tourTabsEl = document.getElementById("tour-step-tabs");
  const tourFrameMetaEl = document.getElementById("tour-frame-meta");
  const tourImgEl = document.getElementById("tour-slide-img");
  const tourImgTriggerEl = document.getElementById("tour-img-trigger");
  const tourZoomBtn = document.getElementById("tour-zoom-btn");
  const tourPrevBtn = document.getElementById("tour-prev-btn");
  const tourNextBtn = document.getElementById("tour-next-btn");
  const tourDotsEl = document.getElementById("tour-dots");
  const tourCaptionEl = document.getElementById("tour-caption-box");

  const lbModalEl = document.getElementById("tour-lightbox");
  const lbStepEl = document.getElementById("lightbox-step-pill");
  const lbTitleEl = document.getElementById("lightbox-title");
  const lbImgEl = document.getElementById("lightbox-img");
  const lbPinsEl = document.getElementById("lightbox-pins-inline");
  const lbCloseBtn = document.getElementById("lightbox-close");
  const lbPrevBtn = document.getElementById("lightbox-prev-btn");
  const lbNextBtn = document.getElementById("lightbox-next-btn");

  const tourSlides = Array.isArray(DATA.antigravityTour) ? DATA.antigravityTour : [];
  let tourIdx = 0;
  let lastTriggerBeforeLb = null;

  function renderTourSlide(index) {
    if (!tourSlides.length) return;
    const total = tourSlides.length;
    tourIdx = ((index % total) + total) % total;
    const slide = tourSlides[tourIdx];

    if (tourTabsEl) {
      Array.from(tourTabsEl.querySelectorAll(".tour-tab-btn")).forEach((btn, idx) => {
        const active = idx === tourIdx;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", String(active));
      });
    }

    if (tourFrameMetaEl) {
      tourFrameMetaEl.textContent = `Passo ${slide.step} de ${total} · Tela ilustrativa`;
    }

    if (tourImgEl) {
      tourImgEl.src = slide.img;
      tourImgEl.alt = slide.alt;
    }

    if (tourDotsEl) {
      Array.from(tourDotsEl.querySelectorAll(".tour-dot")).forEach((dot, idx) => {
        const active = idx === tourIdx;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
      });
    }

    if (tourPrevBtn) tourPrevBtn.disabled = tourIdx === 0;
    if (tourNextBtn) tourNextBtn.disabled = tourIdx === total - 1;

    if (tourCaptionEl) {
      tourCaptionEl.innerHTML = `
        <h4 class="tour-caption-title">${slide.title}</h4>
        <p class="tour-caption-intro">${slide.intro}</p>
        <div class="tour-pins-grid">
          ${slide.pins
            .map(
              (pin) => `
                <div class="tour-pin-item">
                  <div class="tour-pin-head">
                    <span class="tour-pin-badge" aria-hidden="true">${pin.num}</span>
                    <span class="tour-pin-label">${pin.label}</span>
                  </div>
                  <p class="tour-pin-text">${pin.text}</p>
                </div>
              `
            )
            .join("")}
        </div>
      `;
    }

    // Keep lightbox synced if currently open
    if (lbModalEl && !lbModalEl.hidden) {
      syncLightbox(slide, total);
    }
  }

  function syncLightbox(slide, total) {
    if (lbStepEl) lbStepEl.textContent = `Passo ${slide.step} de ${total} · Tour Visual do Google Antigravity`;
    if (lbTitleEl) lbTitleEl.textContent = slide.title;
    if (lbImgEl) {
      lbImgEl.src = slide.img;
      lbImgEl.alt = slide.alt;
    }
    if (lbPinsEl) {
      lbPinsEl.innerHTML = slide.pins
        .map(
          (pin) =>
            `<span class="lightbox-pin-chip"><span class="tour-pin-badge">${pin.num}</span><strong>${pin.label}</strong></span>`
        )
        .join("");
    }
    if (lbPrevBtn) lbPrevBtn.disabled = tourIdx === 0;
    if (lbNextBtn) lbNextBtn.disabled = tourIdx === total - 1;
  }

  function openTourLightbox(triggerEl) {
    if (!lbModalEl || !tourSlides.length) return;
    lastTriggerBeforeLb = triggerEl || document.activeElement;
    syncLightbox(tourSlides[tourIdx], tourSlides.length);
    lbModalEl.hidden = false;
    document.body.style.overflow = "hidden";
    if (lbCloseBtn) lbCloseBtn.focus();
  }

  function closeTourLightbox() {
    if (!lbModalEl || lbModalEl.hidden) return;
    lbModalEl.hidden = true;
    document.body.style.overflow = "";
    if (lastTriggerBeforeLb && typeof lastTriggerBeforeLb.focus === "function") {
      lastTriggerBeforeLb.focus();
    }
  }

  if (tourWidgetEl && tourSlides.length) {
    if (tourTabsEl) {
      tourTabsEl.innerHTML = tourSlides
        .map(
          (s, idx) =>
            `<button type="button" class="tour-tab-btn${idx === 0 ? " is-active" : ""}" role="tab" aria-selected="${
              idx === 0
            }" data-tour-idx="${idx}">${s.shortTab}</button>`
        )
        .join("");

      tourTabsEl.addEventListener("click", (e) => {
        const btn = e.target.closest(".tour-tab-btn");
        if (btn && btn.dataset.tourIdx !== undefined) {
          renderTourSlide(Number(btn.dataset.tourIdx));
        }
      });
    }

    if (tourDotsEl) {
      tourDotsEl.innerHTML = tourSlides
        .map(
          (s, idx) =>
            `<button type="button" class="tour-dot${idx === 0 ? " is-active" : ""}" data-tour-idx="${idx}" aria-label="Ir para o passo ${
              s.step
            }: ${s.shortTab}"></button>`
        )
        .join("");

      tourDotsEl.addEventListener("click", (e) => {
        const dot = e.target.closest(".tour-dot");
        if (dot && dot.dataset.tourIdx !== undefined) {
          renderTourSlide(Number(dot.dataset.tourIdx));
        }
      });
    }

    if (tourPrevBtn) {
      tourPrevBtn.addEventListener("click", () => {
        if (tourIdx > 0) renderTourSlide(tourIdx - 1);
      });
    }

    if (tourNextBtn) {
      tourNextBtn.addEventListener("click", () => {
        if (tourIdx < tourSlides.length - 1) renderTourSlide(tourIdx + 1);
      });
    }

    if (tourZoomBtn) {
      tourZoomBtn.addEventListener("click", () => openTourLightbox(tourZoomBtn));
    }

    if (tourImgTriggerEl) {
      tourImgTriggerEl.addEventListener("click", () => openTourLightbox(tourImgTriggerEl));

      // Touch swipe navigation on mobile
      let swipeStartX = 0;
      tourImgTriggerEl.addEventListener(
        "touchstart",
        (e) => {
          if (e.touches && e.touches.length === 1) {
            swipeStartX = e.touches[0].clientX;
          }
        },
        { passive: true }
      );
      tourImgTriggerEl.addEventListener(
        "touchend",
        (e) => {
          if (!swipeStartX || !e.changedTouches || !e.changedTouches.length) return;
          const deltaX = e.changedTouches[0].clientX - swipeStartX;
          swipeStartX = 0;
          if (Math.abs(deltaX) > 48) {
            if (deltaX < 0 && tourIdx < tourSlides.length - 1) {
              renderTourSlide(tourIdx + 1);
            } else if (deltaX > 0 && tourIdx > 0) {
              renderTourSlide(tourIdx - 1);
            }
          }
        },
        { passive: true }
      );
    }

    // Keyboard navigation when focused inside carousel
    tourWidgetEl.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" && tourIdx < tourSlides.length - 1) {
        e.preventDefault();
        renderTourSlide(tourIdx + 1);
      } else if (e.key === "ArrowLeft" && tourIdx > 0) {
        e.preventDefault();
        renderTourSlide(tourIdx - 1);
      }
    });

    if (lbCloseBtn) lbCloseBtn.addEventListener("click", closeTourLightbox);
    if (lbPrevBtn) {
      lbPrevBtn.addEventListener("click", () => {
        if (tourIdx > 0) renderTourSlide(tourIdx - 1);
      });
    }
    if (lbNextBtn) {
      lbNextBtn.addEventListener("click", () => {
        if (tourIdx < tourSlides.length - 1) renderTourSlide(tourIdx + 1);
      });
    }
    if (lbModalEl) {
      lbModalEl.addEventListener("click", (e) => {
        if (e.target === lbModalEl) closeTourLightbox();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (!lbModalEl || lbModalEl.hidden) return;
      if (e.key === "Escape") {
        closeTourLightbox();
      } else if (e.key === "ArrowRight" && tourIdx < tourSlides.length - 1) {
        e.preventDefault();
        renderTourSlide(tourIdx + 1);
      } else if (e.key === "ArrowLeft" && tourIdx > 0) {
        e.preventDefault();
        renderTourSlide(tourIdx - 1);
      }
    });

    renderTourSlide(0);
  }

  /* ------------------------------------------------------------------------
     14. Section 06 — Interactive 3 Pillars Deep Explorer (with SVG Diagrams)
     ------------------------------------------------------------------------ */
  const pillarTabsEl = document.getElementById("pillar-tabs");
  const pillarPanelEl = document.getElementById("pillar-panel");

  function buildPillarSvg(pillarId) {
    if (pillarId === "versionamento") {
      return `
        <svg viewBox="0 0 680 212" role="img" aria-label="Esquema visual do versionamento Git e GitHub com linha principal, branch de rascunho, Pull Request e Merge">
          <text x="20" y="22" fill="var(--accent-blue)" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">LINHA PRINCIPAL (main — versão oficial no ar)</text>

          <!-- Main branch line -->
          <line x1="108" y1="68" x2="212" y2="68" stroke="var(--accent-blue)" stroke-width="3" stroke-linecap="round" />
          <line x1="248" y1="68" x2="555" y2="68" stroke="var(--accent-blue)" stroke-width="3" stroke-linecap="round" />

          <!-- Parallel feature branch path -->
          <path d="M 230 86 C 230 138, 255 144, 282 144" fill="none" stroke="var(--accent-amber)" stroke-width="2.6" stroke-linecap="round" />
          <line x1="402" y1="144" x2="424" y2="144" stroke="var(--accent-amber)" stroke-width="2.6" />
          <polygon points="420,139 428,144 420,149" fill="var(--accent-amber)" />
          <path d="M 544 144 C 570 144, 575 130, 575 90" fill="none" stroke="var(--accent-green)" stroke-width="2.6" stroke-linecap="round" />
          <polygon points="570,94 575,85 580,94" fill="var(--accent-green)" />

          <!-- v1 Commit -->
          <circle cx="90" cy="68" r="18" fill="var(--bg-surface)" stroke="var(--accent-blue)" stroke-width="2.2" />
          <text x="90" y="72" text-anchor="middle" fill="var(--ink-primary)" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">v1</text>
          <text x="90" y="102" text-anchor="middle" fill="var(--ink-muted)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">Commit inicial</text>

          <!-- v2 Commit (Live) -->
          <circle cx="230" cy="68" r="18" fill="var(--accent-blue-soft)" stroke="var(--accent-blue)" stroke-width="2.4" />
          <text x="230" y="72" text-anchor="middle" fill="var(--accent-blue)" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">v2</text>
          <text x="230" y="42" text-anchor="middle" fill="var(--ink-secondary)" font-size="10.5" font-weight="600" font-family="Plus Jakarta Sans, sans-serif">Site no ar ✓</text>

          <!-- v3 Merge -->
          <circle cx="575" cy="68" r="20" fill="var(--accent-green-soft)" stroke="var(--accent-green)" stroke-width="2.6" />
          <text x="575" y="72" text-anchor="middle" fill="var(--accent-green)" font-size="12" font-weight="700" font-family="JetBrains Mono, monospace">v3</text>
          <text x="575" y="40" text-anchor="middle" fill="var(--accent-green)" font-size="10.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Merge aprovado ✓</text>

          <!-- Branch label -->
          <text x="20" y="140" fill="var(--accent-amber)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">BRANCH (RASCUNHO)</text>
          <text x="20" y="156" fill="var(--ink-muted)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">cópia isolada para testar</text>

          <!-- Branch step 1: Commit -->
          <rect x="282" y="122" width="120" height="44" rx="9" fill="var(--bg-surface)" stroke="var(--accent-amber)" stroke-width="1.8" />
          <text x="342" y="141" text-anchor="middle" fill="var(--ink-primary)" font-size="11.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Commit de teste</text>
          <text x="342" y="156" text-anchor="middle" fill="var(--ink-muted)" font-size="10" font-family="Plus Jakarta Sans, sans-serif">novo filtro criado</text>

          <!-- Branch step 2: PR -->
          <rect x="428" y="122" width="116" height="44" rx="9" fill="var(--accent-amber-soft)" stroke="var(--accent-amber)" stroke-width="1.8" />
          <text x="486" y="141" text-anchor="middle" fill="var(--ink-primary)" font-size="11.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Pull Request</text>
          <text x="486" y="156" text-anchor="middle" fill="var(--ink-secondary)" font-size="10" font-family="Plus Jakarta Sans, sans-serif">revisão lado a lado</text>

          <!-- Footer note -->
          <rect x="20" y="180" width="640" height="24" rx="6" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
          <text x="340" y="196" text-anchor="middle" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">
            Máquina do Tempo: cada commit fica guardado — se algo der errado na v3, você volta para a v2 em segundos.
          </text>
        </svg>
      `;
    }

    if (pillarId === "banco") {
      return `
        <svg viewBox="0 0 680 222" role="img" aria-label="Esquema visual de banco de dados relacional mostrando duas tabelas ligadas por ID e operações CRUD">
          <!-- App box -->
          <rect x="14" y="34" width="136" height="122" rx="11" fill="var(--accent-blue-soft)" stroke="var(--accent-blue)" stroke-width="1.8" />
          <text x="82" y="58" text-anchor="middle" fill="var(--accent-blue)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">SEU SISTEMA</text>
          <text x="82" y="80" text-anchor="middle" fill="var(--ink-primary)" font-size="13" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Tela Web / App</text>
          <text x="82" y="102" text-anchor="middle" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">Pede e envia dados</text>
          <text x="82" y="117" text-anchor="middle" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">sem guardar nada fixo</text>
          <rect x="28" y="128" width="108" height="18" rx="5" fill="var(--bg-surface)" stroke="var(--accent-blue-mid)" />
          <text x="82" y="140" text-anchor="middle" fill="var(--accent-blue)" font-size="9.2" font-weight="700" font-family="JetBrains Mono, monospace">via .env secreto</text>

          <!-- Arrows App <-> DB -->
          <line x1="154" y1="78" x2="212" y2="78" stroke="var(--accent-blue)" stroke-width="2.2" />
          <polygon points="208,73 218,78 208,83" fill="var(--accent-blue)" />
          <text x="184" y="69" text-anchor="middle" fill="var(--accent-blue)" font-size="9.5" font-weight="700" font-family="JetBrains Mono, monospace">SQL (CRUD)</text>

          <line x1="218" y1="112" x2="160" y2="112" stroke="var(--accent-green)" stroke-width="2.2" />
          <polygon points="164,107 154,112 164,117" fill="var(--accent-green)" />
          <text x="184" y="128" text-anchor="middle" fill="var(--accent-green)" font-size="9.5" font-weight="700" font-family="JetBrains Mono, monospace">Registros</text>

          <!-- Table 1: itens -->
          <rect x="222" y="18" width="238" height="148" rx="10" fill="var(--bg-surface)" stroke="var(--accent-green)" stroke-width="1.8" />
          <rect x="222" y="18" width="238" height="28" rx="10" fill="var(--accent-green-soft)" />
          <text x="234" y="36" fill="var(--accent-green)" font-size="10.2" font-weight="700" font-family="JetBrains Mono, monospace">TABELA: itens (Neon / Postgres)</text>
          <!-- Columns -->
          <line x1="222" y1="68" x2="460" y2="68" stroke="var(--border-subtle)" />
          <text x="234" y="61" fill="var(--ink-muted)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">ID</text>
          <text x="262" y="61" fill="var(--ink-muted)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">título</text>
          <text x="364" y="61" fill="var(--ink-muted)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">nota</text>
          <text x="412" y="61" fill="var(--accent-amber)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">cat_id</text>

          <!-- Row 1 (highlighted relation) -->
          <rect x="228" y="74" width="226" height="24" rx="5" fill="var(--accent-amber-soft)" />
          <text x="234" y="90" fill="var(--ink-primary)" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">1</text>
          <text x="262" y="90" fill="var(--ink-primary)" font-size="11" font-weight="600" font-family="Plus Jakarta Sans, sans-serif">Interestelar</text>
          <text x="364" y="90" fill="var(--accent-amber)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">★★★★★</text>
          <text x="426" y="90" fill="var(--accent-amber)" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">2</text>

          <!-- Row 2 -->
          <text x="234" y="118" fill="var(--ink-secondary)" font-size="11" font-family="JetBrains Mono, monospace">2</text>
          <text x="262" y="118" fill="var(--ink-secondary)" font-size="11" font-family="Plus Jakarta Sans, sans-serif">Correr 5 km</text>
          <text x="364" y="118" fill="var(--accent-green)" font-size="10.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Feito ✓</text>
          <text x="426" y="118" fill="var(--ink-muted)" font-size="11" font-family="JetBrains Mono, monospace">3</text>

          <!-- Row 3 -->
          <text x="234" y="144" fill="var(--ink-secondary)" font-size="11" font-family="JetBrains Mono, monospace">3</text>
          <text x="262" y="144" fill="var(--ink-secondary)" font-size="11" font-family="Plus Jakarta Sans, sans-serif">Design do Dia</text>
          <text x="364" y="144" fill="var(--accent-amber)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">★★★★★</text>
          <text x="426" y="144" fill="var(--ink-muted)" font-size="11" font-family="JetBrains Mono, monospace">1</text>

          <!-- Relation Connector (generous gutter 460..526) -->
          <path d="M 460 86 C 492 86, 492 116, 520 116" fill="none" stroke="var(--accent-amber)" stroke-width="2.2" stroke-dasharray="4 3" />
          <polygon points="516,111 524,116 516,121" fill="var(--accent-amber)" />
          <text x="493" y="75" text-anchor="middle" fill="var(--accent-amber)" font-size="9.5" font-weight="700" font-family="JetBrains Mono, monospace">liga ID</text>

          <!-- Table 2: categorias -->
          <rect x="526" y="34" width="140" height="122" rx="10" fill="var(--bg-surface)" stroke="var(--accent-amber)" stroke-width="1.8" />
          <rect x="526" y="34" width="140" height="26" rx="10" fill="var(--accent-amber-soft)" />
          <text x="536" y="51" fill="var(--accent-amber)" font-size="9.8" font-weight="700" font-family="JetBrains Mono, monospace">TABELA: categorias</text>
          <text x="538" y="74" fill="var(--ink-muted)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">ID</text>
          <text x="572" y="74" fill="var(--ink-muted)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">nome</text>
          <line x1="526" y1="80" x2="666" y2="80" stroke="var(--border-subtle)" />
          <text x="538" y="98" fill="var(--ink-secondary)" font-size="11" font-family="JetBrains Mono, monospace">1</text>
          <text x="572" y="98" fill="var(--ink-secondary)" font-size="11" font-family="Plus Jakarta Sans, sans-serif">Livro</text>
          <rect x="532" y="105" width="128" height="22" rx="5" fill="var(--accent-amber-soft)" />
          <text x="538" y="120" fill="var(--accent-amber)" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">2</text>
          <text x="572" y="120" fill="var(--ink-primary)" font-size="11" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Filme</text>
          <text x="538" y="144" fill="var(--ink-secondary)" font-size="11" font-family="JetBrains Mono, monospace">3</text>
          <text x="572" y="144" fill="var(--ink-secondary)" font-size="11" font-family="Plus Jakarta Sans, sans-serif">Meta</text>

          <!-- Bottom CRUD bar -->
          <rect x="14" y="182" width="152" height="28" rx="7" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
          <text x="90" y="200" text-anchor="middle" fill="var(--ink-primary)" font-size="10.5" font-weight="600" font-family="JetBrains Mono, monospace">C · Criar (INSERT)</text>

          <rect x="178" y="182" width="152" height="28" rx="7" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
          <text x="254" y="200" text-anchor="middle" fill="var(--ink-primary)" font-size="10.5" font-weight="600" font-family="JetBrains Mono, monospace">R · Ler (SELECT)</text>

          <rect x="342" y="182" width="156" height="28" rx="7" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
          <text x="420" y="200" text-anchor="middle" fill="var(--ink-primary)" font-size="10.5" font-weight="600" font-family="JetBrains Mono, monospace">U · Editar (UPDATE)</text>

          <rect x="510" y="182" width="156" height="28" rx="7" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
          <text x="588" y="200" text-anchor="middle" fill="var(--ink-primary)" font-size="10.5" font-weight="600" font-family="JetBrains Mono, monospace">D · Apagar (DELETE)</text>
        </svg>
      `;
    }

    return `
      <svg viewBox="0 0 680 226" role="img" aria-label="Esquema visual do servidor e hospedagem mostrando Deploy automático do GitHub, DNS com HTTPS, CDN e diferença entre site estático e dinâmico">
        <!-- Top Auto Deploy Banner -->
        <rect x="176" y="10" width="368" height="28" rx="14" fill="var(--accent-green-soft)" stroke="var(--accent-green)" stroke-width="1.4" />
        <text x="360" y="28" text-anchor="middle" fill="var(--accent-green)" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">GitHub (Merge) ➔ Build &amp; Deploy Automático</text>
        <line x1="360" y1="38" x2="360" y2="58" stroke="var(--accent-green)" stroke-width="2" />
        <polygon points="355,54 360,62 365,54" fill="var(--accent-green)" />

        <!-- Visitor -->
        <rect x="14" y="80" width="114" height="92" rx="11" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.6" />
        <text x="71" y="102" text-anchor="middle" fill="var(--ink-muted)" font-size="9.5" font-weight="700" font-family="JetBrains Mono, monospace">VISITANTE</text>
        <text x="71" y="122" text-anchor="middle" fill="var(--ink-primary)" font-size="12.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Celular / PC</text>
        <text x="71" y="140" text-anchor="middle" fill="var(--ink-secondary)" font-size="10" font-family="Plus Jakarta Sans, sans-serif">abre a URL:</text>
        <text x="71" y="156" text-anchor="middle" fill="var(--accent-blue)" font-size="9.8" font-weight="700" font-family="JetBrains Mono, monospace">seusite.com</text>

        <!-- Arrow Visitor -> DNS -->
        <line x1="128" y1="126" x2="146" y2="126" stroke="var(--accent-amber)" stroke-width="2" />
        <polygon points="143,121 151,126 143,131" fill="var(--accent-amber)" />

        <!-- DNS + HTTPS -->
        <rect x="152" y="94" width="96" height="64" rx="9" fill="var(--accent-amber-soft)" stroke="var(--accent-amber)" stroke-width="1.6" />
        <text x="200" y="114" text-anchor="middle" fill="var(--accent-amber)" font-size="9.8" font-weight="700" font-family="JetBrains Mono, monospace">DNS + HTTPS</text>
        <text x="200" y="132" text-anchor="middle" fill="var(--ink-primary)" font-size="11.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">🔒 Cadeado</text>
        <text x="200" y="148" text-anchor="middle" fill="var(--ink-secondary)" font-size="9.5" font-family="Plus Jakarta Sans, sans-serif">acha o servidor</text>

        <!-- Arrow DNS -> Server -->
        <line x1="248" y1="126" x2="266" y2="126" stroke="var(--accent-blue)" stroke-width="2" />
        <polygon points="263,121 271,126 263,131" fill="var(--accent-blue)" />

        <!-- Server / CDN Center -->
        <rect x="272" y="64" width="176" height="122" rx="12" fill="var(--accent-blue-soft)" stroke="var(--accent-blue)" stroke-width="2" />
        <text x="360" y="86" text-anchor="middle" fill="var(--accent-blue)" font-size="10" font-weight="700" font-family="JetBrains Mono, monospace">SERVIDOR 24H + CDN</text>
        <text x="360" y="108" text-anchor="middle" fill="var(--ink-primary)" font-size="13.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Vercel / Pages / CF</text>
        <text x="360" y="128" text-anchor="middle" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">Entrega rápida global</text>
        <text x="360" y="143" text-anchor="middle" fill="var(--ink-secondary)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">e registra Logs de erro</text>
        <rect x="292" y="155" width="136" height="20" rx="6" fill="var(--bg-surface)" stroke="var(--accent-blue-mid)" />
        <text x="360" y="168" text-anchor="middle" fill="var(--ink-primary)" font-size="9.4" font-weight="700" font-family="JetBrains Mono, monospace">Cofre .env (senhas)</text>

        <!-- Branch arrows to Static vs Dynamic -->
        <path d="M 448 108 L 478 90" fill="none" stroke="var(--accent-green)" stroke-width="2" />
        <polygon points="473,87 482,88 477,95" fill="var(--accent-green)" />
        <path d="M 448 144 L 478 162" fill="none" stroke="var(--accent-blue)" stroke-width="2" />
        <polygon points="477,157 482,164 473,165" fill="var(--accent-blue)" />

        <!-- Static path -->
        <rect x="484" y="58" width="182" height="60" rx="10" fill="var(--bg-surface)" stroke="var(--accent-green)" stroke-width="1.6" />
        <text x="496" y="76" fill="var(--accent-green)" font-size="9.5" font-weight="700" font-family="JetBrains Mono, monospace">ESTÁTICO · GH PAGES</text>
        <text x="496" y="94" fill="var(--ink-primary)" font-size="11.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">HTML/CSS pronto da borda</text>
        <text x="496" y="109" fill="var(--ink-secondary)" font-size="10" font-family="Plus Jakarta Sans, sans-serif">Guias, blogs e portfólios</text>

        <!-- Dynamic path -->
        <rect x="484" y="130" width="182" height="64" rx="10" fill="var(--bg-surface)" stroke="var(--accent-blue)" stroke-width="1.6" />
        <text x="496" y="148" fill="var(--accent-blue)" font-size="9.5" font-weight="700" font-family="JetBrains Mono, monospace">DINÂMICO / API · VERCEL</text>
        <text x="496" y="166" fill="var(--ink-primary)" font-size="11.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">Lê .env + Banco Neon</text>
        <text x="496" y="182" fill="var(--ink-secondary)" font-size="10" font-family="Plus Jakarta Sans, sans-serif">Apps com cadastro e dados</text>

        <!-- Footer note -->
        <text x="340" y="216" text-anchor="middle" fill="var(--ink-muted)" font-size="10.5" font-family="Plus Jakarta Sans, sans-serif">
          Segurança no deploy: se o Build novo falhar, a versão antiga continua no ar sem ninguém perceber.
        </text>
      </svg>
    `;
  }

  function renderPillar(pillarId) {
    if (!pillarPanelEl || !DATA.pillars) return;
    const pillar = DATA.pillars.find((p) => p.id === pillarId) || DATA.pillars[0];
    if (!pillar) return;

    if (pillarTabsEl) {
      Array.from(pillarTabsEl.querySelectorAll(".pill-tab")).forEach((btn) => {
        const active = btn.dataset.pillar === pillar.id;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", String(active));
      });
    }

    pillarPanelEl.innerHTML = `
      <div class="pillar-head">
        <h4 class="pillar-title">${pillar.title}</h4>
        <span class="pillar-analogy-tag">${pillar.analogy}</span>
      </div>
      <p class="pillar-how">${pillar.howItWorks}</p>
      <div class="pillar-svg-box">${buildPillarSvg(pillar.id)}</div>
      <p class="pillar-sublabel">Conceitos básicos que você vai ouvir</p>
      <div class="pillar-concepts-grid">
        ${pillar.concepts
          .map(
            (c) => `
              <div class="pillar-concept-card">
                <div class="pillar-concept-top">
                  <span class="pillar-concept-term">${c.term}</span>
                  <span class="pillar-concept-tag">${c.tag}</span>
                </div>
                <p class="pillar-concept-desc">${c.desc}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="pillar-bottom-notes">
        <div class="pillar-note-box">
          <strong>Na hora de escolher:</strong> ${pillar.choiceNote}
        </div>
        <div class="pillar-note-box is-prompt">
          <strong>O que pedir no Antigravity:</strong> <em>"${pillar.promptTip}"</em>
        </div>
      </div>
    `;
  }

  if (pillarTabsEl && pillarPanelEl && DATA.pillars) {
    pillarTabsEl.innerHTML = DATA.pillars
      .map(
        (p, idx) =>
          `<button type="button" class="pill-tab${idx === 0 ? " is-active" : ""}" role="tab" aria-selected="${
            idx === 0
          }" data-pillar="${p.id}">${p.tab}</button>`
      )
      .join("");

    pillarTabsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill-tab");
      if (btn && btn.dataset.pillar) {
        renderPillar(btn.dataset.pillar);
      }
    });

    renderPillar(DATA.pillars[0].id);
  }
})();
