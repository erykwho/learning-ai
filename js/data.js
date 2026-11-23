/* ==========================================================================
   Structured Data for Interactive Widgets & Pocket Glossary (v2 — Pedagogical Pass)
   ========================================================================== */

window.GUIDE_DATA = {
  /* Widget 1: Prompt & Context Window Simulator */
  promptLevels: [
    {
      id: "vague",
      label: "1. Pedido vago",
      prompt: "Faz um roteiro de viagem para Lisboa.",
      meters: { task: 16, context: 0, rules: 0 },
      meterNote: "Quadro branco quase vazio — a IA precisa adivinhar tudo.",
      outputHtml:
        "<p>Dia 1: Visite a Torre de Belém, o Mosteiro dos Jerónimos e o Chiado. Dia 2: Vá a Sintra ver o Palácio da Pena e à noite conheça o Bairro Alto. Dia 3: Conheça o Oceanário e o Parque das Nações...</p>",
      metrics: [
        { text: "Resposta genérica", tone: "warn" },
        { text: "Alto risco de não combinar com você", tone: "risk" }
      ],
      takeaway:
        "Sem saber quantos dias você tem, seu ritmo ou seu orçamento, o modelo devolve a média estatística dos roteiros mais comuns da internet."
    },
    {
      id: "context",
      label: "2. Com contexto",
      prompt:
        "Monte um roteiro de 3 dias em Lisboa para um casal em maio. Gostamos de comida local, cafés tranquilos e caminhadas leves — sem maratona de museus. Orçamento médio.",
      meters: { task: 16, context: 42, rules: 8 },
      meterNote: "Contexto bem preenchido — o modelo filtra o que faz sentido.",
      outputHtml:
        "<p><strong>Dia 1 (Baixa e Alfama sem pressa):</strong> comece numa padaria local, suba aos miradouros usando o elétrico para evitar ladeiras cansativas e almoce numa tasca tradicional. À tarde, pause num café no Príncipe Real...</p>",
      metrics: [
        { text: "Personalizado ao seu perfil", tone: "good" },
        { text: "Formato ainda um pouco solto", tone: "warn" }
      ],
      takeaway:
        "Dar contexto (quem vai, quando, preferências e limites) já elimina cerca de 80% das respostas genéricas."
    },
    {
      id: "structured",
      label: "3. Papel + Contexto + Formato",
      prompt:
        "Atue como um guia local de Lisboa.\nContexto: casal em maio, 3 dias, ritmo leve, foco em gastronomia e cafés, orçamento médio.\nFormato: tabela com Manhã / Tarde / Noite + 1 dica prática de transporte por dia.\nRegra: se não tiver certeza sobre horário de funcionamento, avise em vez de chutar.",
      meters: { task: 18, context: 38, rules: 34 },
      meterNote: "Quadro branco completo: tarefa, contexto, formato e regra anti-invenção.",
      outputHtml: `
        <table class="sim-mini-table">
          <thead>
            <tr><th>Dia</th><th>Manhã</th><th>Tarde &amp; Noite</th><th>Transporte</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Dia 1</strong></td><td>Pastelaria local + miradouro</td><td>Cafés no Príncipe Real e tasca em Campo de Ourique</td><td>Suba de bonde</td></tr>
            <tr><td><strong>Dia 2</strong></td><td>Mercado cedo + caminhada plana</td><td>Beira-rio e jantar tranquilo em Santos</td><td>A pé + metrô</td></tr>
          </tbody>
        </table>
        <p class="sim-honesty-note"><strong>Aviso do modelo:</strong> não tenho os horários atualizados de maio — vale conferir no Google Maps se alguma tasca fecha às segundas-feiras.</p>
      `,
      metrics: [
        { text: "Pronto para usar na hora", tone: "good" },
        { text: "Risco de alucinação reduzido", tone: "good" }
      ],
      takeaway:
        "Quando você combina papel, contexto, formato e uma regra de honestidade ('avise se não souber'), o modelo passa de curiosidade para ferramenta confiável."
    }
  ],

  /* Widget 2: 5 Eras of Modern AI */
  eras: [
    {
      id: 1,
      year: "2017",
      shortTitle: "O Paper do Google",
      title: "Era 1 — A Faísca: Arquitetura Transformer",
      scope: "Fundação dos Modelos",
      scopeType: "model",
      summary:
        "Pesquisadores do Google publicam o artigo científico 'Attention Is All You Need'. Ele inventa o Transformer — uma forma nova de o computador ler uma frase inteira ao mesmo tempo e perceber qual palavra se conecta com qual.",
      analogy:
        "Antes, a IA lia texto como alguém olhando por um buraquinho de fechadura, uma palavra por vez, esquecendo o começo da frase. O Transformer acendeu a luz da sala inteira.",
      milestones: [
        "Artigo 'Attention Is All You Need' (Google Brain / Research, 2017).",
        "O mecanismo de 'Atenção' relaciona palavras distantes no mesmo texto de forma paralela.",
        "Essa mesma arquitetura é o motor base do Gemini, ChatGPT, Claude e Llama até hoje."
      ],
      refs: [
        { label: "Paper original (Google, 2017)", url: "https://research.google/pubs/attention-is-all-you-need/" },
        { label: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
        { label: "3Blue1Brown (YouTube)", url: "https://www.youtube.com/watch?v=wjZofJX0v4M" }
      ]
    },
    {
      id: 2,
      year: "2018–2022",
      shortTitle: "LLMs & ChatGPT",
      title: "Era 2 — Cérebros de Texto e a Virada Popular",
      scope: "Modelos (LLMs)",
      scopeType: "model",
      summary:
        "A OpenAI aposta em ampliar o Transformer com volumes gigantes de texto e lança a família GPT. No fim de 2022, o ChatGPT coloca um modelo de linguagem num chat simples — e a corrida explode com Google Gemini, Anthropic Claude e modelos abertos como o Llama (da Meta, que podem ser baixados e adaptados livremente).",
      analogy:
        "É como um motor potente (Era 1) que finalmente ganha volante e painel (Era 2): qualquer pessoa passa a conseguir 'dirigir' a IA conversando em português.",
      milestones: [
        "OpenAI lança GPT-1, GPT-2, GPT-3 e o ChatGPT (novembro de 2022).",
        "Explosão de concorrentes: Google Gemini, Anthropic Claude e modelos abertos (Llama).",
        "Limitação da era: o modelo só respondia texto preso na janela de chat — não acessava seus arquivos nem agia sozinho."
      ],
      refs: [
        { label: "Deep Dive into LLMs (Karpathy)", url: "https://www.youtube.com/watch?v=7xTGNNLPyMI" },
        { label: "Intro to LLMs — 1h (YouTube)", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" }
      ]
    },
    {
      id: 3,
      year: "2023–2024",
      shortTitle: "Contexto & RAG",
      title: "Era 3 — Instruções Globais, Multimodalidade, RAG e Raciocínio",
      scope: "Modelos + Camada de Contexto",
      scopeType: "model",
      summary:
        "Os modelos deixam de entender só texto e ficam multimodais (lendo fotos, PDFs, áudio e vídeo juntos). Surgem as Instruções Globais (System Prompts e Gems), o RAG (pesquisar nos seus próprios documentos antes de responder, como no NotebookLM) e modelos de raciocínio que 'pensam passo a passo' antes de responder.",
      analogy:
        "Você dá ao estagiário um crachá com regras fixas ('como você trabalha aqui'), uma pasta com os documentos oficiais da empresa e pede para ele fazer rascunho antes de entregar a resposta.",
      milestones: [
        "Instruções Globais (System Prompts / Gems): regras permanentes de tom e estilo — nasceu aqui, para modelos!",
        "RAG (ex: NotebookLM): consultar suas fontes reais para responder com citações e menos invenções.",
        "Multimodalidade + janelas de contexto enormes (destaque da família Gemini) + modelos de raciocínio."
      ],
      refs: [
        { label: "O que é RAG (Google Cloud)", url: "https://cloud.google.com/use-cases/retrieval-augmented-generation" },
        { label: "RAG em PT-BR (Código Fonte TV)", url: "https://www.youtube.com/watch?v=CuPKOGdA46Q" },
        { label: "Modelos de Raciocínio (IBM)", url: "https://www.ibm.com/think/topics/reasoning-model" }
      ]
    },
    {
      id: 4,
      year: "2024–2025",
      shortTitle: "Agentes & Harnesses",
      title: "Era 4 — Da Conversa à Ação: Agentes, Harnesses e Skills",
      scope: "Paradigma de Agentes",
      scopeType: "agent",
      summary:
        "A IA ganha 'mãos' (uso de ferramentas) e passa a trabalhar em ciclo: planeja, executa, lê o resultado, corrige erros e tenta de novo. Nascem os Harnesses — ambientes de trabalho construídos em volta do modelo — e as Skills, manuais sob demanda para tarefas repetíveis.",
      analogy:
        "O estagiário sai da sala de chat e ganha uma mesa de trabalho equipada (Harness), ferramentas reais e uma estante de manuais passo a passo (Skills) que só abre quando precisa.",
      milestones: [
        "Uso de ferramentas (Tool Calling): o modelo consegue pesquisar, ler pastas, editar arquivos e executar comandos.",
        "Harness (ex: Google Antigravity): a interface que organiza arquivos, aprovações, permissões e memória do agente.",
        "Skills: instruções modulares abertas sob demanda — nasceu aqui, no mundo dos agentes!"
      ],
      refs: [
        { label: "Building Effective Agents", url: "https://www.anthropic.com/research/building-effective-agents" },
        { label: "Harness Engineering (M. Fowler)", url: "https://martinfowler.com/articles/harness-engineering.html" },
        { label: "Agent Skills Standard", url: "https://agentskills.io/home" }
      ]
    },
    {
      id: 5,
      year: "2025–Hoje",
      shortTitle: "MCP & Cápsulas",
      title: "Era 5 — Ecossistema Conectado: Plugins (MCP), Sandboxes e Sidecars",
      scope: "Infraestrutura de Agentes",
      scopeType: "agent",
      summary:
        "Conectar agentes a qualquer serviço fica padronizado com o MCP (o 'USB-C da IA'). Para trabalhar com segurança, agentes passam a rodar dentro de Sandboxes/Cápsulas isoladas, apoiados por Sidecars de proteção de senhas e até Subagentes dividindo tarefas em paralelo.",
      analogy:
        "O escritório vira uma oficina profissional segura: tomadas universais (MCP) para plugar Drive e GitHub, uma sala de testes isolada (Sandbox) e um guarda-chaves (Sidecar) que protege suas senhas.",
      milestones: [
        "Plugins & MCP (Model Context Protocol): conexão padronizada com Google Drive, Sheets, GitHub, bancos de dados etc.",
        "Sandboxes / Cápsulas: computadores virtuais descartáveis onde o agente testa projetos sem risco à sua máquina.",
        "Sidecars & Subagentes: processos auxiliares invisíveis (segurança) e agentes especialistas trabalhando em paralelo.",
        "Modelos agênticos velozes (era Gemini 4): destaque para o recém-lançado Gemini 4 Neon, que une velocidade alta, raciocínio elevado e baixíssima taxa de invenção."
      ],
      refs: [
        { label: "MCP Docs Oficiais", url: "https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro" },
        { label: "Sandboxing AI Agents (Cloudflare)", url: "https://blog.cloudflare.com/dynamic-workers/" },
        { label: "Sidecar Pattern (Microsoft)", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar" },
        { label: "Multi-Agent Systems (Anthropic)", url: "https://www.anthropic.com/research/multi-agent-research-system" },
        { label: "Gemini 4 Neon (Google Blog)", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/" }
      ]
    }
  ],

  /* Section 2 Filterable Complete Era Reference Library */
  eraLibrary: [
    {
      eraGroup: "1-2",
      kind: "Artigo Original · Era 1",
      isVideo: false,
      lang: "EN · Google",
      title: "Attention Is All You Need (Paper de 2017)",
      url: "https://research.google/pubs/attention-is-all-you-need/",
      note: "A fonte histórica do Google que apresentou o Transformer — a base de todos os LLMs modernos."
    },
    {
      eraGroup: "1-2",
      kind: "Blog Ilustrado · Era 1",
      isVideo: false,
      lang: "EN",
      title: "The Illustrated Transformer — Jay Alammar",
      url: "https://jalammar.github.io/illustrated-transformer/",
      note: "Explicação visual clássica mostrando em diagramas como o mecanismo de Atenção funciona."
    },
    {
      eraGroup: "1-2",
      kind: "YouTube · Era 1–2",
      isVideo: true,
      lang: "EN · legendas PT",
      title: "Transformers, the tech behind LLMs — 3Blue1Brown",
      url: "https://www.youtube.com/watch?v=wjZofJX0v4M",
      note: "Animações impecáveis para visualizar o funcionamento interno de um modelo de linguagem."
    },
    {
      eraGroup: "1-2",
      kind: "YouTube · Era 2",
      isVideo: true,
      lang: "EN · legendas PT",
      title: "Deep Dive into LLMs like ChatGPT — Andrej Karpathy",
      url: "https://www.youtube.com/watch?v=7xTGNNLPyMI",
      note: "Aula panorâmica sobre como LLMs são treinados, afinados e transformados em assistentes."
    },
    {
      eraGroup: "3",
      kind: "Guia Oficial · RAG",
      isVideo: false,
      lang: "EN · Google Cloud",
      title: "What is Retrieval-Augmented Generation (RAG)?",
      url: "https://cloud.google.com/use-cases/retrieval-augmented-generation",
      note: "Explica claramente como conectar LLMs às suas próprias fontes de dados para evitar alucinações."
    },
    {
      eraGroup: "3",
      kind: "YouTube · RAG",
      isVideo: true,
      lang: "PT-BR",
      title: "RAG (Retrieval-Augmented Generation) — Código Fonte TV",
      url: "https://www.youtube.com/watch?v=CuPKOGdA46Q",
      note: "Episódio didático em português desmistificando RAG e busca em documentos próprios."
    },
    {
      eraGroup: "3",
      kind: "Artigo · Raciocínio",
      isVideo: false,
      lang: "EN · IBM Think",
      title: "What Is a Reasoning Model? (Modelos de Raciocínio)",
      url: "https://www.ibm.com/think/topics/reasoning-model",
      note: "O que muda nos modelos que 'pensam passo a passo' antes de entregar a resposta final."
    },
    {
      eraGroup: "4",
      kind: "Artigo Referência · Agentes",
      isVideo: false,
      lang: "EN · Anthropic",
      title: "Building Effective AI Agents",
      url: "https://www.anthropic.com/research/building-effective-agents",
      note: "Guia indispensável separando fluxos guiados de agentes autônomos em loop."
    },
    {
      eraGroup: "4",
      kind: "Blog · Harnesses",
      isVideo: false,
      lang: "EN · Martin Fowler",
      title: "Harness Engineering for Coding Agent Users",
      url: "https://martinfowler.com/articles/harness-engineering.html",
      note: "Explica por que o 'chassi' em volta do modelo (o Harness) é tão importante quanto o próprio modelo."
    },
    {
      eraGroup: "4",
      kind: "Blog · Harnesses",
      isVideo: false,
      lang: "EN · Addy Osmani",
      title: "Agent Harness Engineering (Modelo + Ambiente)",
      url: "https://addyosmani.com/blog/agent-harness-engineering/",
      note: "Visão prática de como memória, ferramentas, aprovações e contexto formam um harness moderno."
    },
    {
      eraGroup: "4",
      kind: "Padrão Aberto · Skills",
      isVideo: false,
      lang: "EN · Oficial",
      title: "Agent Skills — Padrão Aberto (agentskills.io)",
      url: "https://agentskills.io/home",
      note: "Documentação oficial explicando como funcionam as Skills modulares carregadas sob demanda."
    },
    {
      eraGroup: "4",
      kind: "YouTube · Harnesses & Skills",
      isVideo: true,
      lang: "EN · legendas PT",
      title: "Harness Engineering Explained for AI Agents",
      url: "https://www.youtube.com/watch?v=zYerCzIexCg",
      note: "Resumo direto em vídeo sobre o que compõe um Harness e como ele guia agentes reais."
    },
    {
      eraGroup: "5",
      kind: "Padrão Aberto · MCP",
      isVideo: false,
      lang: "EN · Oficial",
      title: "Model Context Protocol (MCP) — Introdução Oficial",
      url: "https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro",
      note: "Tudo sobre o protocolo 'USB-C da IA' que conecta agentes a Drive, GitHub, bancos e APIs."
    },
    {
      eraGroup: "5",
      kind: "YouTube · MCP",
      isVideo: true,
      lang: "PT-BR",
      title: "MCP: O 'USB-C' da IA para integrar LLMs e ferramentas",
      url: "https://www.youtube.com/watch?v=hsO63OTyeTc",
      note: "Explicação objetiva em português sobre servidores MCP e integrações padronizadas."
    },
    {
      eraGroup: "5",
      kind: "Blog · Sandboxes / Cápsulas",
      isVideo: false,
      lang: "EN · Cloudflare",
      title: "Sandboxing AI Agents, 100x Faster — Cloudflare Blog",
      url: "https://blog.cloudflare.com/dynamic-workers/",
      note: "Por que agentes precisam de cápsulas isoladas para executar código com segurança e rapidez."
    },
    {
      eraGroup: "5",
      kind: "Guia · Sandboxes / Cápsulas",
      isVideo: false,
      lang: "EN · Firecrawl",
      title: "AI Agent Sandbox: How to Safely Run Autonomous Agents",
      url: "https://www.firecrawl.dev/blog/ai-agent-sandbox",
      note: "Panorama didático dos tipos de sandboxes (código, navegador e ambientes completos de dev)."
    },
    {
      eraGroup: "5",
      kind: "Arquitetura · Sidecars",
      isVideo: false,
      lang: "EN · Microsoft Learn",
      title: "Sidecar Pattern — Azure Architecture Center",
      url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar",
      note: "A referência clássica sobre o padrão Sidecar (processos auxiliares de segurança, proxy e logs)."
    },
    {
      eraGroup: "5",
      kind: "Blog · Sidecars em Agentes",
      isVideo: false,
      lang: "EN",
      title: "Building Secure AI Agents with the Sidecar Pattern",
      url: "https://organicprogrammer.com/2026/11/09/entra-agent-id-sidecar-a-practical-guide-to-building-secure-ai-agents/",
      note: "Exemplo moderno de como Sidecars protegem identidade e credenciais ao lado de um agente."
    },
    {
      eraGroup: "5",
      kind: "Engenharia · Subagentes",
      isVideo: false,
      lang: "EN · Anthropic",
      title: "How We Built Our Multi-Agent Research System",
      url: "https://www.anthropic.com/research/multi-agent-research-system",
      note: "Relato real de como um agente coordenador delega trabalho em paralelo para subagentes."
    },
    {
      eraGroup: "5",
      kind: "YouTube · Multi-Agentes Google",
      isVideo: true,
      lang: "EN · legendas PT",
      title: "AI Agents & Multi-Agent Explained (com Google ADK)",
      url: "https://www.youtube.com/watch?v=Zqno_vux6d8",
      note: "Introdução visual à teoria de agentes modernos e sistemas multi-agentes usando o kit do Google."
    },
    {
      eraGroup: "5",
      kind: "Lançamento Oficial · Gemini 4",
      isVideo: false,
      lang: "EN · Google Blog",
      title: "Introducing Gemini 4 Neon — Inteligência de Fronteira Veloz",
      url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/",
      note: "Anúncio oficial do Gemini 4 Neon: raciocínio elevado, alta velocidade e menor taxa de invenção em tarefas complexas."
    },
    {
      eraGroup: "5",
      kind: "Blog Oficial · Antigravity",
      isVideo: false,
      lang: "EN · Google Antigravity",
      title: "Gemini 4 Neon in Google Antigravity",
      url: "https://antigravity.google/blog/gemini-4-neon-in-google-antigravity/",
      note: "Como o Gemini 4 Neon acelera e traz mais confiança à construção de sistemas dentro do Antigravity."
    }
  ],

  /* Widget 3: Google Ecosystem Compass */
  compassGoals: [
    {
      id: "daily-chat",
      goal: "Tirar dúvidas do dia a dia e ter um assistente fixo de textos",
      tool: "Google Gemini + Gems",
      rung: 1,
      url: "https://gemini.google.com/",
      urlLabel: "Abrir Google Gemini",
      description:
        "É a porta de entrada mais simples. Você conversa normalmente, envia fotos ou arquivos e pode criar um 'Gem' — um assistente com instruções globais fixas (por exemplo: um revisor de e-mails ou professor de inglês).",
      tip: "Comece criando 1 Gem com o seu estilo de escrita e nunca mais repita as mesmas instruções todo dia."
    },
    {
      id: "study-docs",
      goal: "Estudar vários PDFs, contratos ou aulas sem a IA inventar dados",
      tool: "NotebookLM (Gemini Notebook)",
      rung: 2,
      url: "https://notebook.google/",
      urlLabel: "Abrir NotebookLM",
      description:
        "É o melhor exemplo prático de RAG sem precisar programar. Você sobe seus PDFs, links, Google Docs ou vídeos do YouTube e a IA responde estritamente baseada neles — apontando o trecho exato da fonte (e ainda cria resumos em áudio).",
      tip: "Ideal para estudar para provas, revisar contratos, analisar relatórios longos ou consolidar anotações."
    },
    {
      id: "lab-prompts",
      goal: "Testar modelos Gemini mais novos, analisar vídeos e ajustar regras",
      tool: "Google AI Studio",
      rung: 3,
      url: "https://aistudio.google.com/",
      urlLabel: "Abrir Google AI Studio",
      description:
        "É o laboratório gratuito do Google no navegador. Mesmo sem programar, você pode testar modelos recentes, preencher o campo de Instruções de Sistema (System Instructions), subir vídeos longos e ver exatamente como o modelo reage.",
      tip: "Ótimo passo intermediário para experimentar a 'temperatura' (controle que deixa a resposta mais criativa ou mais direta) e testar instruções antes de usar agentes."
    },
    {
      id: "automate-drive",
      goal: "Automatizar tarefas reais no meu Google Drive e Google Sheets",
      tool: "Google Antigravity (com Plugins)",
      rung: 4,
      url: "https://antigravity.google.com/",
      urlLabel: "Conhecer o Antigravity",
      description:
        "Aqui a IA deixa de só dar conselhos e faz o trabalho com você. Conectando os plugins de Google Drive e Google Sheets no Antigravity, o agente lê seus arquivos, extrai informações, organiza abas e cria fórmulas automaticamente.",
      tip: "Sempre comece pedindo um plano (/plan) antes de o agente alterar sua planilha oficial."
    },
    {
      id: "build-system",
      goal: "Criar um site, ferramenta interativa ou mini-sistema completo no ar",
      tool: "Google Antigravity",
      rung: 4,
      url: "https://antigravity.google/docs/overview/",
      urlLabel: "Ver Docs do Antigravity",
      description:
        "O Antigravity atua como um ambiente agêntico completo: faz perguntas para alinhar a ideia, escreve os arquivos, testa dentro de uma cápsula segura e prepara tudo para publicar num link compartilhável.",
      tip: "Use o atalho /grill-me antes de começar a construir: o agente te entrevista passo a passo para acertar de primeira."
    }
  ],

  /* Widget 4: Agent X-Ray Anatomy + Live Task Loop */
  agentParts: {
    model: {
      role: "O Cérebro",
      name: "Modelo (LLM — ex: Gemini)",
      description:
        "É quem entende o seu pedido em português, raciocina sobre o próximo passo e decide qual ferramenta acionar. Sozinho, porém, ele não tem mãos nem acesso aos seus arquivos.",
      example: "Na prática: 'Preciso primeiro listar os PDFs da pasta Recibos no Google Drive antes de somar os valores.'"
    },
    harness: {
      role: "A Mesa de Operações",
      name: "Harness (ex: Google Antigravity)",
      description:
        "É o programa que envolve o modelo e organiza o trabalho: enxerga pastas, coordena o ciclo 'planejar → agir → conferir', gerencia o histórico e pausa para pedir sua aprovação em ações importantes.",
      example: "Na prática: o Antigravity recebe o pedido do cérebro para atualizar a planilha, aciona o plugin e devolve o resultado para conferência."
    },
    skills: {
      role: "Os Manuais na Estante",
      name: "Skills (Habilidades sob demanda)",
      description:
        "São pastas com instruções especializadas e boas práticas. O agente só abre uma Skill quando a tarefa pede — mantendo a memória leve e garantindo qualidade consistente.",
      example: "Na prática: ao ouvir 'Google Sheets', o agente abre a Skill de planilhas para saber como formatar moeda (R$) e somas sem errar."
    },
    mcp: {
      role: "As Tomadas Universais (USB-C)",
      name: "Plugins & MCP (Model Context Protocol)",
      description:
        "É o padrão aberto que conecta o agente ao mundo externo sem gambiarras. Cada plugin libera ações seguras em serviços reais como Google Drive, Sheets, GitHub ou bancos de dados.",
      example: "Na prática: o plugin do Google Drive lê seus recibos; o plugin do Google Sheets escreve as linhas organizadas na planilha."
    },
    sandbox: {
      role: "A Sala de Testes à Prova de Fogo",
      name: "Sandbox / Cápsula (Ambiente Isolado)",
      description:
        "Um computador virtual descartável e isolado onde o agente cria arquivos, instala ferramentas necessárias e testa tudo. Se algo der errado ali dentro, seu computador pessoal continua 100% intacto.",
      example: "Na prática: o agente roda um pequeno programa automático ali dentro para conferir a soma dos recibos antes de te entregar."
    },
    sidecar: {
      role: "O Guarda-Chaves nos Bastidores",
      name: "Sidecar (Processo Auxiliar de Segurança)",
      description:
        "Um serviço discreto que roda 'ao lado' da cápsula do agente. Ele funciona como um intermediário de segurança (proxy): assina o acesso ao Google Drive ou GitHub sem nunca entregar sua senha ou chave de acesso (token) ao código.",
      example: "Na prática: mesmo quando o agente executa testes na Sandbox, sua senha real permanece trancada no Sidecar fora do alcance do código."
    }
  },

  agentLoopSteps: [
    {
      part: "harness",
      title: "Passo 1/6 · Você envia o pedido no Harness",
      text: "Você digita no Antigravity: 'Leia os recibos da pasta Março no Drive e lance na minha planilha de gastos no Sheets.'"
    },
    {
      part: "model",
      title: "Passo 2/6 · O Modelo (Cérebro) planeja as etapas",
      text: "O Gemini divide a missão: 1) abrir manuais de Drive e Sheets, 2) listar os arquivos, 3) ler os valores, 4) montar a planilha."
    },
    {
      part: "skills",
      title: "Passo 3/6 · O agente abre as Skills certas",
      text: "Em vez de chutar comandos, o agente consulta sob demanda as Skills de Google Drive e Google Sheets para seguir as boas práticas."
    },
    {
      part: "sidecar",
      title: "Passo 4/6 · O Sidecar autentica com segurança",
      text: "Ao chamar o Google Drive via plugin, o Sidecar aplica sua permissão de forma invisível — sem expor suas senhas no código."
    },
    {
      part: "mcp",
      title: "Passo 5/6 · Plugins/MCP leem o Drive e gravam no Sheets",
      text: "Os conectores padronizados leem seus arquivos reais no Google Drive e lançam as linhas formatadas no Google Sheets."
    },
    {
      part: "sandbox",
      title: "Passo 6/6 · A Sandbox confere os cálculos e entrega",
      text: "O agente valida a soma total dentro da cápsula isolada, confirma que nada falhou e entrega o link da planilha pronta para você."
    }
  ],

  /* Widget 5: Prompt-to-Server Interactive Pipeline */
  pipelineSteps: [
    {
      id: 1,
      short: "Prompt",
      title: "1. Seu Prompt (O Pedido de Mudança)",
      tool: "Google Antigravity",
      description:
        "Tudo começa com você descrevendo em português o que quer criar ou melhorar — por exemplo: 'Adicione um filtro por categoria no meu catálogo de livros'.",
      shield:
        "Dica anti-quebra: peça primeiro um plano curto (/plan) para confirmar que o agente entendeu a ideia antes de mexer nos arquivos."
    },
    {
      id: 2,
      short: "Sandbox",
      title: "2. Código & Testes na Sandbox",
      tool: "Sandbox / Cápsula Isolada",
      description:
        "O agente altera os arquivos dentro da cápsula segura e roda testes automatizados — um checklist automático que confere se os botões antigos continuam funcionando.",
      shield:
        "Escudo Anti-Quebra: testes automatizados evitam o clássico 'consertou uma coisa e quebrou outra sem perceber'."
    },
    {
      id: 3,
      short: "GitHub",
      title: "3. Versionamento Seguro (Branch & Pull Request)",
      tool: "Git + GitHub (Grátis)",
      description:
        "Em vez de sobrescrever o site oficial direto, o agente salva a mudança numa 'branch' (uma cópia de rascunho paralela) e abre um Pull Request (pedido de revisão) no GitHub. Todo o histórico fica guardado como uma máquina do tempo.",
      shield:
        "Escudo Anti-Quebra: cada versão vira uma 'foto congelada' (snapshot) que você pode restaurar quando quiser."
    },
    {
      id: 4,
      short: "Preview",
      title: "4. Link de Preview (Testar Antes do Público)",
      tool: "Vercel Preview (Grátis)",
      description:
        "A Vercel percebe o Pull Request no GitHub e cria automaticamente um endereço temporário só para você abrir no celular ou computador e testar a novidade — sem afetar quem usa o site oficial.",
      shield:
        "Escudo Anti-Quebra: você só aperta 'Merge' (aprovar e juntar na versão oficial) depois de ver funcionando de verdade."
    },
    {
      id: 5,
      short: "Banco",
      title: "5. Banco de Dados Permanente",
      tool: "Neon ou Supabase (Cota Grátis)",
      description:
        "Enquanto o site cuida das telas, o banco de dados na nuvem guarda suas informações de verdade (livros, metas, avaliações). Assim, nada some quando você fecha a aba nem quando muda o visual do site.",
      shield:
        "Segurança (.env): o endereço secreto do banco fica nas Variáveis de Ambiente da Vercel — nunca escrito no código público do GitHub!"
    },
    {
      id: 6,
      short: "Servidor",
      title: "6. Deploy Automático no Servidor 24h",
      tool: "Vercel / GitHub Pages / Cloudflare",
      description:
        "Assim que você aprova o Pull Request (Merge), o servidor na nuvem busca a versão nova no GitHub e faz o deploy (publicação automática) em segundos, mantendo tudo no ar 24 horas por dia.",
      shield:
        "Zero manutenção de máquina: você não precisa deixar nenhum computador ligado em casa."
    },
    {
      id: 7,
      short: "Usuário",
      title: "7. Pessoas Acessam a URL Oficial",
      tool: "Navegador (Celular / PC)",
      description:
        "Quem recebe seu link abre o sistema atualizado na hora, lê e grava dados no banco com segurança — e você pode repetir esse ciclo com calma sempre que quiser evoluir o projeto.",
      shield:
        "E se mesmo assim escapar um erro? Clique no botão vermelho 'Simular bug em produção!' para ver o Rollback funcionando!"
    }
  ],

  /* Pocket Glossary */
  glossary: [
    {
      term: "LLM (Large Language Model)",
      category: "Fundamentos",
      def: "Modelo de Inteligência Artificial treinado em enormes volumes de texto (e hoje imagens/áudio) para reconhecer padrões e gerar respostas úteis."
    },
    {
      term: "Transformer",
      category: "Fundamentos",
      def: "Arquitetura criada em 2017 no artigo do Google 'Attention Is All You Need'. É o motor por trás dos LLMs modernos."
    },
    {
      term: "Prompt",
      category: "Fundamentos",
      def: "O pedido ou instrução que você escreve para a IA. Quanto mais claro o contexto e o formato, melhor a resposta."
    },
    {
      term: "Janela de Contexto",
      category: "Fundamentos",
      def: "A 'memória de curto prazo' (o quadro branco) da conversa — tudo que o modelo consegue enxergar de uma vez."
    },
    {
      term: "Alucinação",
      category: "Fundamentos",
      def: "Quando a IA inventa uma informação com tom super confiante porque tenta completar padrões mesmo sem ter certeza do fato."
    },
    {
      term: "Instruções Globais (System Prompt)",
      category: "Fundamentos",
      def: "Regras permanentes dadas ao modelo sobre quem ele é, qual tom usar e o que evitar — como os Gems no Gemini."
    },
    {
      term: "RAG (Geração com Busca)",
      category: "Fundamentos",
      def: "Técnica em que a IA pesquisa primeiro nos seus documentos reais (como no NotebookLM) antes de redigir a resposta."
    },
    {
      term: "Temperatura",
      category: "Fundamentos",
      def: "Ajuste disponível em ferramentas como o Google AI Studio que controla se o modelo será mais criativo/variado ou mais direto e previsível."
    },
    {
      term: "Agente de IA",
      category: "Agentes",
      def: "Sistema em que o modelo não só responde texto, mas trabalha em etapas usando ferramentas: planeja, age, observa o resultado e corrige."
    },
    {
      term: "Harness",
      category: "Agentes",
      def: "O ambiente operacional construído em volta do modelo (como o Antigravity) que coordena arquivos, aprovações, permissões e ciclo de execução."
    },
    {
      term: "Skill (Habilidade)",
      category: "Agentes",
      def: "Manual de procedimento modular que o agente abre sob demanda para executar tarefas específicas com qualidade."
    },
    {
      term: "Comandos com barra (/plan, /grill-me)",
      category: "Agentes",
      def: "Atalhos digitados no início da mensagem no Antigravity para guiar como o agente deve atuar (planejar antes ou entrevistar você)."
    },
    {
      term: "MCP (Model Context Protocol)",
      category: "Agentes",
      def: "Padrão aberto ('o USB-C da IA') para conectar agentes a serviços externos como Google Drive, Sheets, GitHub e bancos de dados."
    },
    {
      term: "Sandbox / Cápsula",
      category: "Agentes",
      def: "Computador virtual isolado onde o agente cria e testa código sem risco de danificar seu computador pessoal."
    },
    {
      term: "Sidecar",
      category: "Agentes",
      def: "Processo auxiliar invisível ao lado da cápsula do agente — muito usado como guarda-chaves de senhas e credenciais."
    },
    {
      term: "Multi-Agentes / Subagentes",
      category: "Agentes",
      def: "Arquitetura em que um agente principal divide uma tarefa grande entre especialistas auxiliares rodando em paralelo."
    },
    {
      term: "Modelos de Pesos Abertos (Open-Weights)",
      category: "Fundamentos",
      def: "Modelos como Llama, DeepSeek, Qwen, Mistral e Gemma cujos arquivos são liberados para baixar e rodar no próprio computador ou nuvem privada."
    },
    {
      term: "Git & GitHub",
      category: "Sistemas",
      def: "Sistema de versionamento ('máquina do tempo' do código) e plataforma na nuvem onde o projeto fica guardado, revisado e compartilhado."
    },
    {
      term: "Branch, Pull Request e Merge",
      category: "Sistemas",
      def: "Branch é o rascunho paralelo; Pull Request é o pedido de revisão; Merge é o clique que aprova e junta o rascunho na versão oficial."
    },
    {
      term: "Banco de Dados (Neon / Supabase)",
      category: "Sistemas",
      def: "Serviço na nuvem que guarda permanentemente os dados do sistema (listas, cadastros, registros) separado das telas, com ótimas cotas grátis."
    },
    {
      term: "Deploy & Rollback",
      category: "Sistemas",
      def: "Deploy é publicar uma versão nova no servidor para o público; Rollback é voltar para a versão anterior em segundos se algo quebrar."
    },
    {
      term: "Variáveis de Ambiente (.env) & Chave de API",
      category: "Sistemas",
      def: "Chave de API é a 'senha eletrônica' para falar com um serviço; Variáveis de Ambiente são o cofre no servidor onde ela fica escondida fora do código."
    },
    {
      term: "CRUD & SQL",
      category: "Sistemas",
      def: "CRUD resume as 4 operações de qualquer banco de dados (Criar, Ler, Atualizar e Apagar); SQL é a linguagem padrão que o sistema usa para pedir isso ao banco."
    },
    {
      term: "Domínio, DNS, HTTPS & CDN",
      category: "Sistemas",
      def: "Domínio é o endereço bonito; DNS traduz o nome para o servidor; HTTPS é o cadeado de criptografia; CDN guarda cópias perto do visitante para abrir rápido."
    },
    {
      term: "Cache (Redis / Memória Rápida)",
      category: "Sistemas",
      def: "Cópia temporária na memória ultrarrápida ('post-it na mesa') para responder em milissegundos sem precisar consultar o banco de dados toda vez."
    },
    {
      term: "Filas (Queues) & Pub/Sub",
      category: "Sistemas",
      def: "Mecanismos assíncronos: Filas enfileiram tarefas lentas (gerar PDF, enviar e-mails) para Workers nos bastidores; Pub/Sub avisa vários serviços ao mesmo tempo quando um evento acontece."
    },
    {
      term: "Nuvem (GCP / AWS / Azure)",
      category: "Sistemas",
      def: "Plataformas gigantes de infraestrutura sob demanda que reúnem servidores, bancos, armazenamento, filas, IA e segurança — pagando apenas pelo uso."
    },
    {
      term: "Webhook & Cron Job",
      category: "Sistemas",
      def: "Cron Job é o despertador que roda uma tarefa em horários fixos; Webhook é a 'campainha automática' que um serviço toca no seu servidor quando algo acontece (ex: pagamento aprovado)."
    }
  ],

  /* Widget 8: Other AI Ecosystems Explorer (Optional Section 07) */
  ecosystems: [
    {
      id: "openai",
      tab: "OpenAI",
      name: "OpenAI (ChatGPT & Codex)",
      tagline: "Popularizou a IA moderna",
      summary:
        "A empresa que desencadeou a explosão da Era 2 com o ChatGPT. Hoje organiza seus modelos na família principal GPT (que unificou conversa rápida e raciocínio profundo) e também oferece modelos abertos (gpt-oss) e seu próprio harness de agentes.",
      models: [
        "<strong>Família GPT (ex: GPT-5 / GPT-6):</strong> carros-chefe multimodais que alternam automaticamente entre respostas rápidas e raciocínio profundo.",
        "<strong>Linha de raciocínio (série o3 / thinking):</strong> pioneira em modelos que 'pensam antes de responder' para lógica e código.",
        "<strong>gpt-oss:</strong> linha de modelos de pesos abertos para quem quer rodar fora da nuvem da OpenAI."
      ],
      tools: [
        "<strong>ChatGPT:</strong> chat popular com voz em tempo real, busca, geração de imagens e memória.",
        "<strong>Custom GPTs & Projects:</strong> o equivalente aos Gems do Google (assistentes com regras fixas e arquivos).",
        "<strong>Codex (Web, linha de comando e editor):</strong> o harness agêntico da OpenAI para construir software, compatível com arquivos de regras (<span class='inline-code'>AGENTS.md</span>), Skills e MCP."
      ],
      strength:
        "Ponto forte: interface muito polida para o público geral (especialmente voz/multimodal) e um ecossistema gigantesco de integrações e automações com o Codex."
    },
    {
      id: "anthropic",
      tab: "Anthropic",
      name: "Anthropic (Família Claude)",
      tagline: "Criadora do MCP e Agent Skills",
      summary:
        "Fundada por ex-pesquisadores da OpenAI com foco forte em segurança e confiabilidade. Além de modelos muito queridos para escrita natural e programação, a Anthropic criou e abriu para toda a indústria dois padrões da Era 4 e 5: o <strong>MCP</strong> e o <strong>Agent Skills</strong>.",
      models: [
        "<strong>Claude Haiku:</strong> o mais rápido e econômico — ótimo para tarefas simples em grande volume.",
        "<strong>Claude Sonnet:</strong> o equilíbrio do dia a dia (escrita, análise e desenvolvimento).",
        "<strong>Claude Opus &amp; Fable:</strong> modelos topo de linha para raciocínio exigente, pesquisa longa e agentes autônomos."
      ],
      tools: [
        "<strong>Claude (Web &amp; Desktop):</strong> traz <em>Projects</em> (pastas de contexto), <em>Artifacts</em> (páginas e gráficos interativos ao lado do chat) e conectores MCP.",
        "<strong>Claude Code:</strong> o harness agêntico da Anthropic que opera direto em projetos, comandos do sistema e GitHub.",
        "<strong>Padrões abertos:</strong> MCP (<span class='inline-code'>modelcontextprotocol.io</span>) e Agent Skills (<span class='inline-code'>agentskills.io</span>), adotados por quase todo o mercado."
      ],
      strength:
        "Ponto forte: texto muito claro e natural, raciocínio cuidadoso em tarefas longas e liderança nos padrões abertos que conectam agentes."
    },
    {
      id: "open-weights",
      tab: "Meta & Mundo Aberto",
      name: "Meta & Ecossistema Aberto (Open-Weights)",
      tagline: "Privacidade, controle e custo baixo",
      summary:
        "Nem toda IA vive trancada nos servidores de uma única empresa. Nos <strong>modelos de pesos abertos</strong> (<em>open-weights</em>), o laboratório publica o 'cérebro treinado' para qualquer pessoa ou empresa baixar e rodar no próprio computador (até sem internet!) ou em servidores privados.",
      models: [
        "<strong>Llama (Meta):</strong> a família que abriu as portas do movimento aberto no mundo ocidental.",
        "<strong>DeepSeek:</strong> famosa por modelos abertos de raciocínio muito fortes com custo computacional bem menor.",
        "<strong>Qwen (Alibaba), Mistral (França) &amp; Gemma (Google):</strong> opções excelentes em vários idiomas, código e tamanhos compactos para notebooks."
      ],
      tools: [
        "<strong>Hugging Face:</strong> o 'GitHub da IA' — a maior biblioteca gratuita onde esses modelos abertos são publicados e testados.",
        "<strong>Ollama:</strong> aplicativo gratuito que permite baixar e conversar com Llama, Gemma, DeepSeek ou Qwen rodando direto no seu computador.",
        "<strong>Nuvens especializadas:</strong> empresas rodam esses modelos abertos por frações de centavo com privacidade contratual."
      ],
      strength:
        "Ponto forte: independência total de fornecedor, privacidade máxima (seus dados nunca saem da sua máquina/empresa) e personalização profunda."
    },
    {
      id: "multi-model",
      tab: "Harnesses Multi-Modelo",
      name: "Harnesses & Automação Independentes",
      tagline: "Você escolhe qual cérebro plugar",
      summary:
        "Uma categoria que explodiu na Era 4 e 5 são ferramentas que <strong>não criam o próprio modelo</strong> — em vez disso, constroem o melhor ambiente de trabalho (Harness) e deixam você trocar o cérebro (Gemini, Claude, GPT ou modelos abertos) com um clique.",
      models: [
        "<strong>Escolha livre por tarefa:</strong> usar um modelo rápido/barato para ajustes simples e um modelo de raciocínio pesado para decisões difíceis.",
        "<strong>Compatibilidade universal:</strong> quase todos leem o mesmo padrão de regras (<span class='inline-code'>AGENTS.md</span>), Skills e servidores MCP."
      ],
      tools: [
        "<strong>Cursor &amp; Windsurf:</strong> editores de código nativos de IA muito populares entre quem cria software com múltiplos modelos.",
        "<strong>VS Code + GitHub Copilot:</strong> o editor mais usado do mundo com modo agêntico multi-modelo integrado ao GitHub.",
        "<strong>n8n / Make / Zapier:</strong> plataformas visuais (arrastar e soltar caixinhas) para ligar modelos de IA a e-mail, WhatsApp, CRM e planilhas sem código."
      ],
      strength:
        "Ponto forte: flexibilidade máxima para combinar o melhor modelo de cada empresa sem refazer seu fluxo de trabalho."
    },
    {
      id: "google-ref",
      tab: "Google (Resumo)",
      name: "Google (Nossa Trilha neste Guia)",
      tagline: "Do básico ao sistema no mesmo ecossistema",
      summary:
        "Para comparar lado a lado com os demais: o diferencial do Google é oferecer a escada completa (com plano gratuito nos 4 degraus) integrada à conta que você já usa todos os dias — agora impulsionada pela geração <strong>Gemini 4</strong>.",
      models: [
        "<strong>Geração Gemini 4 (Hydrogen, Neon e Carbon):</strong> janela de 1 milhão de tokens e raciocínio ajustável — com destaque para o novo <strong>Gemini 4 Neon</strong> (rápido, raciocínio de fronteira e baixíssima taxa de invenção).",
        "<strong>Gemma:</strong> linha aberta (open-weights) do Google para rodar localmente ou em servidores próprios."
      ],
      tools: [
        "<strong>Gemini + Gems &amp; NotebookLM:</strong> uso diário, assistentes fixos e pesquisa sem alucinação nos seus PDFs.",
        "<strong>Google AI Studio:</strong> laboratório gratuito no navegador para testar prompts, vídeos e modelos novos.",
        "<strong>Google Antigravity:</strong> harness agêntico com plano individual gratuito, Sandbox, Skills, Plugins (Drive, Sheets, GitHub), MCP e modo Orchestrator (Neon)."
      ],
      strength:
        "Ponto forte: menor atrito para começar de graça hoje (integração direta com Drive/Sheets/Workspace) e evolução rápida com Gemini 4 Neon no Antigravity."
    }
  ],

  /* Antigravity Visual Tour Carousel (Section 05) */
  antigravityTour: [
    {
      step: 1,
      shortTab: "1. Projeto",
      title: "Passo 1 — Abrir um projeto e conhecer a tela inicial",
      img: "assets/tour/01-projeto.png",
      alt: "Tela ilustrativa inicial do Google Antigravity destacando o botão Novo Projeto (1), a caixa de pedido com barra de anexos (2) e o atalho Customizations para Plugins na barra lateral (3).",
      intro:
        "Ao abrir o Google Antigravity, você já tem uma mesa equipada com Sandbox pronta — basta criar um projeto e descrever seu objetivo em português simples.",
      pins: [
        {
          num: "1",
          label: "Novo Projeto / Conversa",
          text: "Separe seus assuntos em projetos (ex: Finanças ou Catálogo) para manter arquivos, histórico e permissões organizados."
        },
        {
          num: "2",
          label: "Caixa de pedido (Prompt)",
          text: "Escreva em português normal, anexe prints da sua tela ou digite \"/\" para abrir os atalhos guiados."
        },
        {
          num: "3",
          label: "Customizations (Plugins e Skills)",
          text: "Atalho no canto inferior esquerdo para conectar Google Drive, Sheets, GitHub e ver suas Skills salvas."
        }
      ]
    },
    {
      step: 2,
      shortTab: "2. Plugins",
      title: "Passo 2 — Conectar Google Drive, Sheets e GitHub em 1 clique",
      img: "assets/tour/02-plugins.png",
      alt: "Tela ilustrativa de Customizations e Plugins no Google Antigravity destacando o menu Plugins e MCP (1), os cartões de conexão em 1 clique do Drive, Sheets e GitHub (2) e as abas Plugins Oficiais, Skills e Servidores MCP (3).",
      intro:
        "Antes de automatizar planilhas ou publicar sites, conecte só os serviços necessários. Suas senhas reais ficam protegidas no Sidecar, fora da cápsula.",
      pins: [
        {
          num: "1",
          label: "Menu Plugins & MCP",
          text: "Dentro de Customizations, é o painel central onde você controla quais serviços externos o agente pode acessar."
        },
        {
          num: "2",
          label: "Conectar em 1 clique",
          text: "Clique em \"Conectar\" para autorizar sua conta Google ou GitHub; assim que mudar para \"Conectado ✓\", já funciona."
        },
        {
          num: "3",
          label: "Plugins, Skills e MCP",
          text: "Alterne entre Plugins oficiais prontos, suas Skills reutilizáveis e servidores MCP extras quando quiser expandir."
        }
      ]
    },
    {
      step: 3,
      shortTab: "3. Comandos /",
      title: "Passo 3 — Usar comandos com barra (/) e anexar prints",
      img: "assets/tour/03-comandos.png",
      alt: "Tela ilustrativa mostrando o menu de Slash Commands aberto ao digitar barra no Antigravity destacando o menu de atalhos (1), a opção recomendada /plan (2) e um print de recibo anexado na mensagem (3).",
      intro:
        "Não precisa decorar fórmulas de prompt: digite a barra / para abrir modos guiados — e cole prints da tela sempre que quiser mostrar algo visual.",
      pins: [
        {
          num: "1",
          label: "Menu de Slash Commands",
          text: "Digitar \"/\" abre modos prontos: /plan (planeja antes), /grill-me (faz perguntas simples) e /goal (tarefas longas)."
        },
        {
          num: "2",
          label: "Comece sempre com /plan",
          text: "Modo ideal para iniciantes: o agente explica o passo a passo e espera sua confirmação antes de alterar qualquer coisa."
        },
        {
          num: "3",
          label: "Anexar print ou arquivo",
          text: "Arraste ou cole (Ctrl+V) fotos de recibos, PDFs ou prints de erro direto na caixa de mensagem."
        }
      ]
    },
    {
      step: 4,
      shortTab: "4. Aprovação",
      title: "Passo 4 — Revisar o plano e aprovar com segurança",
      img: "assets/tour/04-aprovacao.png",
      alt: "Tela ilustrativa dividida no Google Antigravity mostrando o painel lateral de Artifacts com o plano em etapas (1), o cartão amarelo de pausa de segurança para ação no Google Sheets (2) e os botões Aprovar e Executar ou Pedir ajuste (3).",
      intro:
        "Você segue no controle o tempo todo: o agente mostra o plano organizado ao lado e pausa para pedir autorização antes de gravar ou mudar dados reais.",
      pins: [
        {
          num: "1",
          label: "Painel lateral de Artifacts",
          text: "Exibe o plano completo (plano.md), prévias e relatórios organizados lado a lado para você conferir sem se perder no chat."
        },
        {
          num: "2",
          label: "Pausa de segurança",
          text: "Antes de gravar na sua planilha ou publicar alterações, surge um cartão explicando exatamente qual ação será executada."
        },
        {
          num: "3",
          label: "Aprovar ou pedir ajuste",
          text: "Clique em \"✓ Aprovar e Executar\" se estiver tudo certo — ou em \"Pedir ajuste\" para corrigir qualquer detalhe antes."
        }
      ]
    },
    {
      step: 5,
      shortTab: "5. Resultado",
      title: "Passo 5 — Testar o resultado ao vivo e pedir ajustes",
      img: "assets/tour/05-resultado.png",
      alt: "Tela ilustrativa do resultado pronto no Google Antigravity destacando o Preview ao vivo do catálogo de metas e livros no painel lateral (1), o cartão com o link público pronto para compartilhar (2) e a caixa de conversa para pedir novos ajustes (3).",
      intro:
        "Com a tarefa pronta, você testa tudo no preview ao vivo, recebe o link pronto para compartilhar e pode pedir ajustes conversando normalmente.",
      pins: [
        {
          num: "1",
          label: "Preview ao vivo",
          text: "Clique nos botões e teste sua página ou aplicativo direto na tela dividida — sem instalar nada no seu computador."
        },
        {
          num: "2",
          label: "Link para compartilhar",
          text: "Páginas publicadas no GitHub Pages ou planilhas criadas viram cartões clicáveis prontos para abrir ou enviar."
        },
        {
          num: "3",
          label: "Ajustes em português natural",
          text: "Quer mudar uma cor, texto ou filtro? Basta pedir na conversa (ou mandar um print mostrando o que melhorar)."
        }
      ]
    }
  ],

  /* Widget 5: Section 06 — 3 Pillars Deep Explorer */
  pillars: [
    {
      id: "versionamento",
      tab: "1. Versionamento (GitHub)",
      title: "Pilar 1 — Versionamento (Git & GitHub)",
      analogy: "A Máquina do Tempo do projeto",
      howItWorks:
        "O <strong>Git</strong> é o motor que registra cada alteração feita nos arquivos do seu projeto; o <strong>GitHub</strong> é o cofre na nuvem onde esse histórico fica salvo e organizado. Em vez de criar pastas como <em>projeto_final_v3_agora_vai</em>, você trabalha com uma linha oficial protegida e rascunhos paralelos que podem ser revisados ou desfeitos em segundos.",
      concepts: [
        {
          term: "Repositório (Repo)",
          tag: "Pasta na nuvem",
          desc: "O lar oficial do seu projeto: guarda todos os arquivos (telas, textos, imagens) junto com o histórico completo desde o primeiro dia. Pode ser Público ou Privado."
        },
        {
          term: "Commit",
          tag: "Ponto de salvamento",
          desc: "Cada conjunto de mudanças vira uma 'foto' marcada com data, autor e uma frase curta explicando o que mudou (ex: \"Adiciona filtro de 5 estrelas\")."
        },
        {
          term: "Branch (Ramo)",
          tag: "Rascunho isolado",
          desc: "Uma cópia paralela da linha oficial (main). Você (ou o Antigravity) testa ideias novas na branch sem risco nenhum para o site que já está no ar."
        },
        {
          term: "Pull Request (PR) & Merge",
          tag: "Revisão → Aprovação",
          desc: "O PR mostra lado a lado o que entra (verde) e o que sai (vermelho). Só quando você aprova acontece o Merge, juntando a novidade na versão oficial."
        }
      ],
      choiceNote:
        "Git é a tecnologia; <strong>GitHub</strong> é o serviço gratuito líder (onde o Antigravity já se conecta em 1 clique). Alternativas como GitLab e Bitbucket funcionam com a mesma lógica.",
      promptTip:
        "Crie uma branch nova para testar essa melhoria e abra um Pull Request no GitHub para eu revisar antes de fazer o merge na main."
    },
    {
      id: "banco",
      tab: "2. Banco de Dados (Neon)",
      title: "Pilar 2 — Banco de Dados (Neon, Supabase & Postgres)",
      analogy: "O Fichário Permanente na nuvem",
      howItWorks:
        "Uma página web sozinha tem 'memória curta': se você limpar o navegador ou abrir em outro celular, tudo some. O <strong>Banco de Dados</strong> guarda suas informações (cadastros, livros, gastos) num serviço separado das telas. Assim, você pode redesenhar o visual do app dez vezes sem nunca perder os dados reais.",
      concepts: [
        {
          term: "Tabela, Coluna & Linha",
          tag: "Planilha disciplinada",
          desc: "Bancos relacionais (como o Postgres, usado no Neon e Supabase) guardam dados em tabelas: colunas definem o tipo (texto, número, data) e cada linha é um item real."
        },
        {
          term: "Chave Primária (ID) & Relações",
          tag: "CPF único do item",
          desc: "Cada linha recebe um número único (ID). Isso permite conectar tabelas sem repetir texto à toa — ex: ligar cada item à sua categoria apenas pelo ID."
        },
        {
          term: "CRUD & SQL",
          tag: "As 4 ações universais",
          desc: "Todo sistema faz 4 operações no banco: Criar, Ler, Atualizar e Apagar (CRUD). A linguagem padrão que executa isso é o SQL — e o Antigravity escreve por você."
        },
        {
          term: "String de Conexão & Migração",
          tag: "Chave secreta + reforma",
          desc: "A String de Conexão liga seu app ao banco e fica protegida no .env (nunca no GitHub). Migração é o roteiro seguro para criar colunas novas sem apagar dados antigos."
        }
      ],
      choiceNote:
        "O <strong>Neon Postgres</strong> (não confundir com o modelo Gemini 4 Neon!) brilha pela leveza e bancos temporários de preview; o <strong>Supabase</strong> já inclui login pronto e upload de arquivos.",
      promptTip:
        "Antes de criar o código, me explique em português simples quais tabelas e colunas vamos criar no Neon Postgres e leia a conexão apenas do .env."
    },
    {
      id: "servidor",
      tab: "3. Servidor (Vercel / Pages)",
      title: "Pilar 3 — Servidor & Hospedagem (Vercel, GitHub Pages & Cloudflare)",
      analogy: "O Computador Ligado 24h com URL",
      howItWorks:
        "O GitHub guarda seus arquivos de código, mas quem entrega a página pronta quando alguém abre o link no celular é o <strong>Servidor</strong>. Serviços modernos vigiam seu GitHub automaticamente: cada vez que você aprova um Merge, eles montam o site (<em>Build</em>) e colocam a versão nova no ar (<em>Deploy</em>) sem derrubar o sistema.",
      concepts: [
        {
          term: "Estático vs. Dinâmico (Backend/API)",
          tag: "Cartaz vs. Balcão",
          desc: "Estático (GitHub Pages) entrega o mesmo HTML/CSS pronto para todo mundo. Dinâmico (Vercel) roda um Backend/API com .env para conversar com o banco e responder sob medida."
        },
        {
          term: "Build & Deploy Automático",
          tag: "Publicação sem atrito",
          desc: "Ao aprovar uma mudança no GitHub, o servidor empacota o site (Build) e publica (Deploy) sozinho. Se o Build detectar um erro, a versão antiga segue no ar protegida."
        },
        {
          term: "Domínio, DNS & HTTPS 🔒",
          tag: "Endereço + Cadeado",
          desc: "Domínio é o endereço bonito (seusite.com); DNS é a 'agenda' que aponta para o servidor; HTTPS é o cadeado de segurança criptografado (grátis e automático hoje)."
        },
        {
          term: "CDN & Logs",
          tag: "Velocidade + Caixa-preta",
          desc: "A CDN guarda cópias perto do visitante (inclusive no Brasil) para carregar rápido. Os Logs registram qualquer falha — basta copiar o log e mandar ao Antigravity!"
        }
      ],
      choiceNote:
        "Para páginas sem banco de dados (guias, portfólios, catálogos simples), <strong>GitHub Pages</strong> resolve em 2 cliques. Quando houver banco (Neon) ou senhas no .env, use <strong>Vercel</strong> ou <strong>Cloudflare Pages</strong>.",
      promptTip:
        "Prepare meu projeto para deploy gratuito na Vercel, me diga quais variáveis de ambiente colar no painel e confirme que o build passa sem erros."
    }
  ],

  /* Widget 7: Section 06 — Software Engineering Architecture Map */
  archParts: [
    {
      id: "queues",
      shortLabel: "Filas & Pub/Sub",
      name: "Filas (Queues), Pub/Sub & Workers",
      analogy: "Senha da Padaria + Quadro de Avisos",
      desc: "<strong>Fila (Queue):</strong> quando uma tarefa demora (gerar PDF, mandar 500 e-mails ou processar IA), o servidor responde 'Recebido!' na hora e joga o pedido numa fila para um <strong>Worker</strong> (robô nos bastidores) resolver sem travar a tela do usuário. Já o <strong>Pub/Sub (Publicar/Assinar)</strong> funciona como um quadro de avisos: quando um evento acontece ('Compra aprovada!'), vários serviços assinantes reagem ao mesmo tempo (nota fiscal, estoque, e-mail) sem dependerem um do outro.",
      whenNeeded:
        "Quando alguma ação leva mais de 2–3 segundos ou quando um único evento precisa disparar várias ações independentes com garantia de reintentativa se algo falhar.",
      examples:
        "<strong>Google Cloud Pub/Sub</strong>, <strong>Upstash QStash</strong>, <strong>Cloudflare Queues</strong>, <strong>RabbitMQ</strong> e <strong>Kafka</strong>.",
      agentMode: "Conecta via CLI/API e cria código de fila + worker",
      agentTip:
        "O agente configura a fila ou tópico Pub/Sub, escreve o código do Worker com tentativas automáticas em caso de erro e te guia passo a passo para colar o endereço da fila no .env."
    },
    {
      id: "cache",
      shortLabel: "Cache (Redis)",
      name: "Cache (Memória Rápida)",
      analogy: "O Post-it na Mesa",
      desc: "Ir ao banco de dados toda vez que alguém abre a mesma página consome tempo e dinheiro. O <strong>Cache</strong> guarda uma cópia temporária das respostas mais pedidas (ex: catálogo do dia, ranking ou sessão do usuário) na memória RAM ultrarrápida. Se a resposta já está no post-it, o site responde em poucos milissegundos — e só consulta o banco quando o post-it vence ou muda.",
      whenNeeded:
        "Quando muitas pessoas acessam os mesmos dados ao mesmo tempo ou quando uma consulta no banco começa a ficar lenta e repetitiva.",
      examples:
        "<strong>Redis</strong> (com plano grátis na <strong>Upstash</strong>), cache automático da <strong>Cloudflare</strong> e da <strong>Vercel</strong>.",
      agentMode: "Configura o código de cache e regras de expiração",
      agentTip:
        "Basta dizer: \"Adicione cache Redis (Upstash) de 5 minutos nessa lista para não sobrecarregar o Neon\" — o agente escreve a lógica e te orienta onde copiar a chave no painel."
    },
    {
      id: "cloud",
      shortLabel: "Nuvem (Cloud)",
      name: "Nuvem & Serviços de Nuvem (Cloud Providers)",
      analogy: "O Condomínio Completo de Infraestrutura",
      desc: "Em vez de comprar servidores físicos, empresas alugam computação sob demanda em grandes plataformas de <strong>Nuvem</strong> — verdadeiros 'supermercados' com dezenas de serviços integrados sob o mesmo teto (servidores, bancos, Pub/Sub, arquivos, IA, rede e segurança), cobrando apenas pelo que você usa (<em>pay-as-you-go</em>).",
      whenNeeded:
        "Você <strong>não precisa começar aqui</strong>! Comece leve (GitHub + Neon + Vercel) e migre ou combine serviços da Nuvem grande quando precisar de escala alta, compliance corporativo ou recursos específicos (como Google Cloud Pub/Sub e Cloud Run).",
      examples:
        "<strong>Google Cloud (GCP)</strong>, <strong>AWS (Amazon)</strong> e <strong>Microsoft Azure</strong> — além de nuvens mais simples como <strong>Vercel</strong>, <strong>Cloudflare</strong> e <strong>Render</strong>.",
      agentMode: "Opera CLIs oficiais (gcloud, aws) ou guia clique a clique",
      agentTip:
        "Agentes como o Antigravity podem gerar scripts de infraestrutura, usar CLIs da nuvem ou — se você preferir fazer pelo navegador — te guiar clique a clique lendo prints do painel."
    },
    {
      id: "auth",
      shortLabel: "Autenticação (Auth)",
      name: "Autenticação & Permissões (Auth)",
      analogy: "A Portaria e os Crachás",
      desc: "<strong>Autenticação</strong> responde 'quem é você?' (login com Google, senha ou link por e-mail). <strong>Autorização / Permissões</strong> responde 'o que você pode fazer?' (ex: cada pessoa só edita sua própria lista; apenas administradores veem o painel financeiro). Nunca tente inventar criptografia de senhas do zero: use serviços prontos testados por milhões de usuários.",
      whenNeeded:
        "Assim que seu sistema deixar de ser só seu e passar a ter contas individuais ou áreas restritas para equipe/clientes.",
      examples:
        "<strong>Clerk</strong>, <strong>Supabase Auth</strong>, <strong>Firebase Auth (Google)</strong> e <strong>Auth.js</strong> — todos com generosos planos gratuitos.",
      agentMode: "Integra login pronto em minutos e protege rotas",
      agentTip:
        "Peça: \"Coloque login com Google usando Clerk ou Supabase Auth e proteja as rotas para cada usuário ver só os próprios itens\". O agente gera o código e indica os 3 campos do painel."
    },
    {
      id: "storage",
      shortLabel: "Storage (Arquivos)",
      name: "Armazenamento de Arquivos (Object Storage)",
      analogy: "O Depósito de Fotos, PDFs e Vídeos",
      desc: "Bancos de dados relacionais (como o Neon Postgres) são excelentes para textos, números e datas, mas <strong>não</strong> foram feitos para guardar arquivos pesados (fotos, PDFs de notas fiscais, áudios, vídeos). Esses arquivos vão para um 'depósito' chamado <strong>Bucket</strong> no Object Storage — e o banco de dados guarda apenas o link curto apontando para lá.",
      whenNeeded:
        "Sempre que os usuários precisarem fazer upload de imagens, currículos em PDF, recibos ou vídeos.",
      examples:
        "<strong>Cloudflare R2</strong>, <strong>Google Cloud Storage</strong>, <strong>Supabase Storage</strong> e <strong>Amazon S3</strong>.",
      agentMode: "Cria upload seguro (links assinados) e conecta ao banco",
      agentTip:
        "O agente monta o botão de upload, configura permissões para ninguém acessar arquivos privados de outros usuários e te guia na criação do Bucket."
    },
    {
      id: "cron",
      shortLabel: "Cron & Webhooks",
      name: "Agendador (Cron Jobs) & Webhooks",
      analogy: "O Despertador e a Campainha",
      desc: "<strong>Cron Job</strong> é o despertador automático do sistema: executa uma tarefa em horários programados sem ninguém clicar em nada (ex: todo domingo às 20h, enviar resumo semanal). <strong>Webhook</strong> é a campainha entre sistemas: em vez de seu app ficar perguntando a cada segundo 'o cliente já pagou?', o Stripe ou GitHub toca a campainha do seu servidor no instante exato em que o evento acontece.",
      whenNeeded:
        "Para rotinas periódicas (relatórios, lembretes, limpeza de dados) ou para reagir em tempo real a pagamentos, formulários e mensagens de WhatsApp/Slack.",
      examples:
        "<strong>Vercel Cron</strong>, <strong>GitHub Actions</strong>, <strong>Google Cloud Scheduler</strong> e webhooks de <strong>Stripe / Mercado Pago / GitHub</strong>.",
      agentMode: "Cria os endpoints de Webhook e arquivos de agendamento",
      agentTip:
        "O agente escreve o código de verificação de segurança do Webhook, cria o arquivo de agendamento Cron e mostra exatamente qual URL colar no painel do Stripe ou da Vercel."
    },
    {
      id: "apis",
      shortLabel: "APIs Externas",
      name: "APIs Externas & Integrações",
      analogy: "Os Especialistas Terceirizados",
      desc: "Quase nenhum software moderno constrói tudo dentro de casa. Para cobrar cartão/Pix, enviar e-mails que não caem no spam, consultar CEP, enviar WhatsApp ou chamar inteligência artificial, seu servidor envia um pedido autenticado para a <strong>API</strong> de um serviço especialista e recebe a resposta pronta em formato estruturado (JSON).",
      whenNeeded:
        "Sempre que existir um especialista confiável para aquela função — economiza meses de trabalho e evita dores de cabeça legais (como lidar com dados de cartão de crédito).",
      examples:
        "<strong>Stripe / Mercado Pago</strong> (pagamentos), <strong>Resend</strong> (e-mails), <strong>Gemini API</strong> (IA) e <strong>Google Maps / Drive</strong>.",
      agentMode: "Lê documentações, integra SDKs e testa via MCP/Sandbox",
      agentTip:
        "Basta dizer qual serviço quer integrar (ex: \"envie e-mail de boas-vindas com o Resend\"): o agente instala a biblioteca oficial, lê a chave no .env e cria testes na Sandbox."
    },
    {
      id: "observability",
      shortLabel: "Observabilidade",
      name: "Observabilidade (Logs, Métricas & Alertas)",
      analogy: "O Painel do Carro e a Caixa-Preta",
      desc: "Quando um usuário diz 'não carregou', como você descobre o que houve? A <strong>Observabilidade</strong> junta três lentes: <strong>Logs</strong> (o diário detalhado do que o servidor fez), <strong>Métricas</strong> (tempo de resposta, quantos erros por minuto) e <strong>Alertas</strong> (aviso automático no seu e-mail ou Slack se algo começar a falhar antes de os clientes perceberem).",
      whenNeeded:
        "Desde o primeiro dia em produção (os logs básicos da Vercel já vêm prontos); ao ganhar usuários reais, vale plugar um rastreador de erros automático como o Sentry.",
      examples:
        "<strong>Sentry</strong> (rastreia bugs com cota grátis), <strong>Vercel Logs</strong>, <strong>Google Cloud Logging</strong> e <strong>Better Stack</strong>.",
      agentMode: "Instala o monitoramento e lê os logs para achar a causa raiz",
      agentTip:
        "O melhor truque de manutenção: quando surgir um erro nos Logs ou no Sentry, cole o trecho (ou print) no Antigravity — ele cruza o log com o código e propõe o conserto exato."
    },
    {
      id: "core",
      shortLabel: "Servidor + Banco",
      name: "Coração do Sistema (Servidor / Backend + Banco SQL)",
      analogy: "Os Pilares 2 e 3 trabalhando no centro",
      desc: "É o núcleo que você já dominou acima: o <strong>Servidor / Backend (API)</strong> recebe os pedidos do visitante, consulta as chaves secretas do <span class='inline-code'>.env</span> e orquestra tudo — lendo e gravando os dados permanentes no <strong>Banco de Dados (Neon / Postgres)</strong> e acionando Cache, Storage, Filas ou APIs Externas conforme a necessidade.",
      whenNeeded:
        "É a base de quase todo sistema interativo real — você começa por aqui (com GitHub + Neon + Vercel) e vai plugando os blocos ao redor só quando o projeto pedir.",
      examples:
        "<strong>Vercel + Neon Postgres</strong>, <strong>Cloudflare Workers + D1</strong>, <strong>Google Cloud Run + Cloud SQL</strong>.",
      agentMode: "Constrói, testa na Sandbox e versiona no GitHub",
      agentTip:
        "Com o Antigravity conectado ao GitHub (e a MCPs como Neon ou Postgres), o agente cria as rotas, testa consultas e abre Pull Requests completos para sua revisão."
    }
  ],

  archScenarios: [
    {
      id: "fast-read",
      label: "⚡ Página ultrarrápida (Cache)",
      title: "Fluxo 1 · Leitura em milissegundos usando Cache",
      nodes: ["auth", "core", "cache", "observability"],
      story:
        "O visitante abre o app → a <strong>Portaria (Auth)</strong> confirma o login → o <strong>Servidor</strong> olha primeiro no <strong>Cache (Redis)</strong> e encontra o catálogo já pronto em 5 milissegundos, sem precisar acordar o Banco! A <strong>Observabilidade</strong> registra que tudo respondeu em tempo recorde."
    },
    {
      id: "async-purchase",
      label: "🛒 Compra aprovada (Webhook + Pub/Sub)",
      title: "Fluxo 2 · Evento assíncrono sem travar ninguém",
      nodes: ["cron", "core", "queues", "apis", "observability"],
      story:
        "O cliente paga no cartão → um <strong>Webhook</strong> toca a campainha do <strong>Servidor</strong> → o pedido é salvo como pago no <strong>Banco</strong> e um aviso entra no <strong>Pub/Sub</strong> → <strong>Workers</strong> nos bastidores chamam a <strong>API de E-mail</strong> e emitem a nota fiscal em paralelo, enquanto a <strong>Observabilidade</strong> acompanha tudo."
    },
    {
      id: "pdf-ai",
      label: "📄 Upload de PDF + IA (Storage + Fila)",
      title: "Fluxo 3 · Arquivo pesado + resumo com IA nos bastidores",
      nodes: ["auth", "core", "storage", "queues", "apis"],
      story:
        "O usuário logado (<strong>Auth</strong>) envia um PDF de 50 páginas → o <strong>Servidor</strong> guarda o arquivo no <strong>Storage (R2/GCS)</strong> e responde 'Recebido!' na hora → uma <strong>Fila</strong> passa o link ao <strong>Worker</strong>, que chama a <strong>API do Gemini</strong> para gerar o resumo e grava o resultado limpo no <strong>Banco</strong>."
    }
  ],

  /* Final Action Checklist */
  checklist: [
    {
      id: "step-gemini",
      title: "Criar seu primeiro Gem no Google Gemini",
      desc: "Configure um assistente com instruções globais fixas para uma tarefa que você repete toda semana (ex: revisar e-mails ou resumir reuniões)."
    },
    {
      id: "step-notebook",
      title: "Testar o NotebookLM com 2 ou 3 PDFs reais",
      desc: "Suba documentos seus e faça perguntas conferindo as citações clicáveis — sinta na prática a diferença do RAG sem alucinação."
    },
    {
      id: "step-aistudio",
      title: "Explorar o Google AI Studio por 5 minutos",
      desc: "Abra aistudio.google.com, preencha uma System Instruction e teste subir uma imagem ou documento."
    },
    {
      id: "step-antigravity",
      title: "Rodar uma automação guiada no Google Antigravity",
      desc: "Conecte o plugin do Google Drive ou Google Sheets e teste o Roteiro 1 da Seção 5 começando com /plan."
    },
    {
      id: "step-publish",
      title: "Publicar sua primeira página no ar via GitHub Pages ou Vercel",
      desc: "Experimente o ciclo completo Prompt → GitHub → URL compartilhável (exatamente como esta página que você está lendo!)."
    }
  ],

  /* Section 08: Curated Short Courses & Consolidated Short-Video Playlists */
  studyResources: [
    {
      type: "course",
      isPt: false,
      kind: "Curso Rápido · Google",
      isVideo: false,
      duration: "~45 min",
      badge: "Grátis · EN (leg. PT)",
      title: "Introduction to Generative AI — Google Skills",
      url: "https://www.skills.google/course_templates/536",
      note: "Microcurso oficial do Google Cloud para iniciantes absolutos: 1 vídeo curto + revisão leve explicando o que é IA Generativa e como LLMs funcionam."
    },
    {
      type: "course",
      isPt: true,
      kind: "Curso Interativo · Univ. Helsinque",
      isVideo: false,
      duration: "Capítulos curtos",
      badge: "Grátis · PT",
      title: "Elementos de IA (Elements of AI) — Em Português",
      url: "https://course.elementsofai.com/pt/",
      note: "Mais de 1 milhão de alunos no mundo: curso gratuito em português criado para leigos (zero código e zero matemática pesada), com exercícios curtos por capítulo."
    },
    {
      type: "course",
      isPt: false,
      kind: "Curso Rápido · DeepLearning.AI",
      isVideo: false,
      duration: "~5–6h (aulas 5 min)",
      badge: "Grátis p/ assistir · EN (leg. PT)",
      title: "Generative AI for Everyone — Andrew Ng (Coursera)",
      url: "https://www.coursera.org/learn/generative-ai-for-everyone",
      note: "Referência mundial para não-técnicos: vídeos curtinhos explicando o que a IA faz bem, onde erra e como aplicar em projetos reais sem programar."
    },
    {
      type: "course",
      isPt: false,
      kind: "Curso Prático · Grow with Google",
      isVideo: false,
      duration: "~4–9h (módulos curtos)",
      badge: "Teste grátis / Coursera · EN (leg. PT)",
      title: "Google AI Essentials & Prompting Essentials",
      url: "https://grow.google/ai-essentials/",
      note: "Feito pelo próprio Google para o dia a dia no trabalho: método em 5 passos para escrever bons prompts, ganhar produtividade e usar IA com segurança."
    },
    {
      type: "course",
      isPt: false,
      kind: "Trilha Modular · Microsoft Learn",
      isVideo: false,
      duration: "Aulas de ~10 min",
      badge: "Grátis · EN (leg. PT)",
      title: "AI Agents for Beginners — Conceitos de Agentes",
      url: "https://learn.microsoft.com/en-us/shows/ai-agents-for-beginners/",
      note: "Lições curtas e independentes cobrindo ferramentas, planejamento, memória e multi-agentes — ótimo para revisar a Seção 04 no seu tempo."
    },
    {
      type: "course",
      isPt: true,
      kind: "Curso Brasileiro · Curso em Vídeo",
      isVideo: false,
      duration: "Blocos curtos",
      badge: "Grátis · PT-BR",
      title: "Curso Grátis de Inteligência Artificial — Gustavo Guanabara",
      url: "https://www.cursoemvideo.com/curso/curso-gratis-de-inteligencia-artificial/",
      note: "Em português brasileiro com didática leve e prática — você assiste no seu ritmo por módulos, focando em uso cotidiano e estratégico."
    },
    {
      type: "playlist",
      isPt: false,
      kind: "Playlist YouTube · Quadro Branco",
      isVideo: true,
      duration: "~6–12 min/vídeo",
      badge: "Grátis · EN (leg. PT)",
      title: "AI Fundamentals — IBM Technology",
      url: "https://www.youtube.com/playlist?list=PLOspHqNVtKADfxkuDuHduUkDExBpEt3DF",
      note: "Explicações super claras no quadro branco sobre RAG, Agentes, MCP e termos atuais — sempre vídeos curtos e diretos ao ponto."
    },
    {
      type: "playlist",
      isPt: false,
      kind: "Playlist YouTube · 21 Episódios",
      isVideo: true,
      duration: "~10 min/vídeo",
      badge: "Grátis · EN (leg. PT)",
      title: "CrashCourse — Artificial Intelligence (Série Clássica)",
      url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtO65LeD2p4_Sb5XQ51par_b",
      note: "Série consolidada da PBS com animações dinâmicas e zero enrolação — perfeita para assistir 1 episódio no café e fixar a base de IA."
    },
    {
      type: "playlist",
      isPt: false,
      kind: "Playlist YouTube · Animações",
      isVideo: true,
      duration: "~4–8 min/vídeo",
      badge: "Grátis · EN (leg. PT)",
      title: "ByteByteGo — Engenharia de Software & Nuvem Visual",
      url: "https://www.youtube.com/playlist?list=UUZgt6AzoyjslHTC9dz0UoTw",
      note: "Vídeos curtíssimos e animados explicando Cache, Filas, Pub/Sub, DNS, HTTPS, APIs e Nuvem — o par perfeito para fixar a Seção 06 sem código."
    },
    {
      type: "playlist",
      isPt: true,
      kind: "Playlist YouTube · Sem Terminal",
      isVideo: true,
      duration: "~12–18 min/vídeo",
      badge: "Grátis · PT-BR",
      title: "Git e GitHub para Iniciantes — Curso em Vídeo",
      url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA",
      note: "A playlist mais famosa do Brasil sobre o Pilar 1: ensina repositórios, commits, branches e GitHub Pages visualmente, sem assustar com tela preta."
    }
  ]
};
