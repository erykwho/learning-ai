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
      goal: "Personalizar assistentes (Gems/Skills), conectar Drive/Gmail ou editar no Canvas",
      tool: "Google Gemini (Gems, Skills & Canvas)",
      rung: 1,
      url: "https://gemini.google.com/",
      urlLabel: "Abrir Google Gemini",
      description:
        "É a porta de entrada mais completa. Além do chat e da conversa por voz, você cria Gems (ou Skills reutilizáveis) com regras fixas, conecta Gmail/Drive/Agenda e usa o Canvas para montar relatórios, apresentações e mini-páginas editando lado a lado.",
      tip: "Comece criando 1 Gem com o seu estilo de escrita — e teste abrir o Canvas na próxima vez que precisar estruturar um texto longo."
    },
    {
      id: "media-tasks",
      goal: "Criar imagens/vídeos conversando ou agendar tarefas e resumos recorrentes",
      tool: "Google Gemini (Estúdio Criativo & Ações Agendadas)",
      rung: 1,
      url: "https://gemini.google/subscriptions/",
      urlLabel: "Ver recursos e planos do Gemini",
      description:
        "Direto no app Gemini você gera e edita imagens com o Nano Banana (já disponível na cota grátis). A partir dos planos pagos (Plus, Pro e Ultra), desbloqueia também vídeos com áudio nativo (Gemini Omni), Ações Agendadas / Resumo Diário e acesso gradual às Tarefas proativas.",
      tip: "Teste primeiro criar ou editar uma foto no plano grátis; se quiser rotinas automáticas semanais e geração de vídeo, avalie o plano Google AI Pro."
    },
    {
      id: "study-docs",
      goal: "Estudar vários PDFs, contratos ou aulas sem a IA inventar dados",
      tool: "Gemini Notebook (antigo NotebookLM)",
      rung: 2,
      url: "https://notebook.google/",
      urlLabel: "Abrir Gemini Notebook",
      description:
        "É o melhor exemplo prático de RAG sem programar — agora acessível tanto no site dedicado quanto direto na barra lateral do app Gemini (com sincronização nos dois lados). Você sobe PDFs, links, Google Docs ou vídeos do YouTube e recebe respostas com citações exatas e resumos em áudio.",
      tip: "Use direto no menu do Gemini para consultas rápidas do dia a dia ou abra notebook.google para montar guias de estudo e podcasts."
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
      url: "https://antigravity.google/",
      urlLabel: "Conhecer o Antigravity",
      description:
        "Aqui a IA deixa de só dar conselhos e faz o trabalho pesado com você. Conectando os plugins de Google Drive e Google Sheets no Antigravity, o agente lê lotes de arquivos, extrai informações, organiza abas e cria fórmulas automaticamente.",
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
        "Um serviço discreto que roda 'ao lado' da cápsula do agente. Ele funciona como um intermediário invisível de segurança: assina o acesso ao Google Drive ou GitHub na saída sem nunca entregar sua senha ou chave de acesso ao código dentro da cápsula.",
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

  /* Widget 6: Prompt-to-Server Interactive Pipeline */
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
      term: "Token",
      category: "Fundamentos",
      def: "Pequeno pedaço de palavra (cerca de 3 a 4 letras) que a IA usa para contar texto. Uma janela de 1 milhão de tokens equivale a cerca de 7 livros inteiros abertos de uma vez."
    },
    {
      term: "Janela de Contexto",
      category: "Fundamentos",
      def: "A 'memória de curto prazo' (o quadro branco) da conversa — tudo que o modelo consegue enxergar de uma vez, medida em tokens."
    },
    {
      term: "Alucinação",
      category: "Fundamentos",
      def: "Quando a IA inventa uma informação com tom super confiante porque tenta completar padrões mesmo sem ter certeza do fato."
    },
    {
      term: "Instruções Globais (System Prompt)",
      category: "Fundamentos",
      def: "Regras permanentes sobre seu estilo e preferências que valem em qualquer conversa — como Personal Intelligence / Instruções para o Gemini no chat ou ~/.gemini/AGENTS.md (e regras globais) no Antigravity."
    },
    {
      term: "RAG (Geração com Busca)",
      category: "Fundamentos",
      def: "Técnica em que a IA pesquisa primeiro nos seus documentos reais (como no Gemini Notebook / antigo NotebookLM) antes de redigir a resposta."
    },
    {
      term: "Temperatura",
      category: "Fundamentos",
      def: "Ajuste disponível em ferramentas como o Google AI Studio que controla se o modelo será mais criativo/variado ou mais direto e previsível."
    },
    {
      term: "Canvas & Deep Research (Gemini)",
      category: "Fundamentos",
      def: "Canvas é o painel lateral editável do Gemini para montar textos, apresentações e mini-páginas ao vivo; Deep Research é o modo de pesquisa profunda que consulta dezenas de fontes e gera um relatório completo."
    },
    {
      term: "Ações Agendadas, Tarefas & SynthID",
      category: "Fundamentos",
      def: "Nos planos pagos do Gemini, Ações Agendadas (e as novas Tarefas) executam rotinas e resumos no piloto automático; SynthID é a marca d'água digital invisível do Google para identificar imagens, áudios e vídeos feitos com IA."
    },
    {
      term: "Gemini 4 Neon vs. Neon Postgres",
      category: "Fundamentos",
      def: "Nomes parecidos, coisas totalmente diferentes: Gemini 4 Neon é o modelo rápido de IA do Google (Seção 03); Neon Postgres é um serviço independente de banco de dados gratuito (Seção 06)."
    },
    {
      term: "Modelos de Pesos Abertos (Open-Weights)",
      category: "Fundamentos",
      def: "Modelos como Llama, DeepSeek, Qwen, Mistral e Gemma cujos arquivos são liberados para baixar e rodar no próprio computador ou nuvem privada."
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
      def: "Manual de procedimento modular (pasta com SKILL.md) que o agente abre sob demanda pelo gatilho (description) ou quando você chama direto com /<nome-da-skill>."
    },
    {
      term: "AGENTS.md (Instruções de Agente)",
      category: "Agentes",
      def: "O 'README para agentes': arquivo de texto na raiz da pasta do projeto lido automaticamente em toda conversa para guardar objetivo, público, regras e checklist de verificação."
    },
    {
      term: "Projeto & Recursos (Antigravity)",
      category: "Agentes",
      def: "A 'sala fechada' de trabalho do agente: define exatamente quais pastas locais ou recursos na nuvem (repositórios do GitHub, arquivos/planilhas do Google Drive e Sheets) o agente tem permissão para ver e alterar."
    },
    {
      term: "Artifacts (Painel de Artefatos)",
      category: "Agentes",
      def: "Painel lateral usado em ferramentas como Antigravity e Claude para exibir planos, documentos, tabelas e prévias interativas separados da conversa."
    },
    {
      term: "Comandos com barra (/plan, /grill-me, /learn)",
      category: "Agentes",
      def: "Atalhos digitados no início da mensagem no Antigravity para guiar o agente: /plan planeja antes, /grill-me entrevista você, /learn transforma correções da conversa em Regras ou Skills e /<skill> aciona uma Skill."
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
      term: "Prompt Injection (Injeção de Prompt)",
      category: "Agentes",
      def: "Ataque em que um texto escondido num site ou PDF tenta dar ordens secretas ao agente. Por isso agentes modernos pausam e pedem sua aprovação antes de agir."
    },
    {
      term: "Frontend, Backend & API",
      category: "Sistemas",
      def: "Na analogia do restaurante: Frontend é o salão/telas que o usuário vê; Backend é a cozinha que processa regras e acessa o banco; API é o garçom que leva pedidos e traz respostas entre sistemas."
    },
    {
      term: "Git & GitHub",
      category: "Sistemas",
      def: "Sistema de versionamento ('máquina do tempo' do código) e plataforma na nuvem onde o projeto fica guardado, revisado e compartilhado."
    },
    {
      term: "Branch, Pull Request e Merge",
      category: "Sistemas",
      def: "Branch é o rascunho paralelo; Pull Request é o pedido de revisão; Merge é o clique que aprova e junta o rascunho na versão oficial (main ou master)."
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
      term: "Autenticação (Auth) & Autorização",
      category: "Sistemas",
      def: "Autenticação confirma quem é a pessoa (ex: login com Google); Autorização define o que ela pode ver ou editar dentro do sistema."
    },
    {
      term: "Object Storage & Bucket",
      category: "Sistemas",
      def: "Depósito na nuvem (como Cloudflare R2, GCS ou S3) feito para guardar arquivos pesados como fotos, PDFs e vídeos em 'baldes' (Buckets) separados do banco de dados."
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
      term: "Webhook & Cron Job",
      category: "Sistemas",
      def: "Cron Job é o despertador que roda uma tarefa em horários fixos; Webhook é a 'campainha automática' que um serviço toca no seu servidor quando algo acontece (ex: pagamento aprovado)."
    },
    {
      term: "Observabilidade (Logs, Métricas & Alertas)",
      category: "Sistemas",
      def: "O painel de instrumentos e a caixa-preta do sistema: Logs registram o que aconteceu, Métricas medem velocidade e erros, e Alertas avisam se algo quebrar."
    },
    {
      term: "Nuvem (GCP / AWS / Azure)",
      category: "Sistemas",
      def: "Plataformas gigantes de infraestrutura sob demanda que reúnem servidores, bancos, armazenamento, filas, IA e segurança — pagando apenas pelo uso."
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
        "<strong>Google Gemini &amp; Gemini Notebook:</strong> chat e voz, Gems/Skills, Canvas, notebooks integrados (antigo NotebookLM), imagens (Nano Banana), vídeos (Gemini Omni) e Ações Agendadas / Tarefas nos planos pagos.",
        "<strong>Google AI Studio:</strong> laboratório gratuito no navegador para testar prompts, vídeos e modelos novos.",
        "<strong>Google Antigravity:</strong> harness agêntico com plano individual gratuito, Sandbox, Skills, Plugins (Drive, Sheets, GitHub), MCP e modo coordenador Orchestrator (Neon)."
      ],
      strength:
        "Ponto forte: menor atrito para começar de graça hoje (integração direta com Drive/Sheets/Workspace) e evolução rápida com Gemini 4 Neon no Antigravity."
    }
  ],

  /* Antigravity Visual Tour Carousel (Section 05 — Real Anonymized UI + Interactive Hotspots) */
  antigravityTour: [
    {
      step: 1,
      shortTab: "1. Início & /",
      frameTag: "Print real · Pinos interativos",
      title: "Passo 1 — Tela inicial, barra lateral e comandos com barra (/)",
      img: "assets/tour/01-inicio-comandos.png",
      alt: "Tela inicial real do Google Antigravity mostrando a barra lateral com New Conversation, Customizations e Projects (1), o menu de comandos com barra aberto com /plan, /grill-me, /gdrive e /goal (2), e a caixa de mensagem com seletor de projeto e modelo Gemini 4 Neon (3).",
      intro:
        "Esta é a interface real do Google Antigravity: à esquerda ficam seus Projetos e o menu Customizations; no centro você digita seu objetivo — ou digita a barra / para abrir atalhos guiados.",
      pins: [
        {
          num: "1",
          x: 11.4,
          y: 17.5,
          box: { x: 0.3, y: 3.3, w: 10.3, h: 33.2 },
          label: "Barra lateral: Projects e Customizations",
          text: "Aqui você inicia uma nova conversa, abre Customizations (para conectar plugins) e organiza seus assuntos em Projetos separados."
        },
        {
          num: "2",
          x: 37.3,
          y: 75.5,
          box: { x: 37.7, y: 75.3, w: 33.5, h: 11.7 },
          label: "Menu de comandos com barra (/)",
          text: "Digite \"/\" para escolher modos prontos como /plan (planeja antes de agir), /grill-me (faz perguntas simples) ou skills conectadas como /gdrive."
        },
        {
          num: "3",
          x: 71.9,
          y: 92.2,
          box: { x: 37.7, y: 87.4, w: 33.5, h: 10.4 },
          label: "Projeto ativo, Modelo e Permissões",
          text: "Acima da caixa você vê em qual Projeto está (ex.: meu-site); embaixo escolhe o motor (ex.: Gemini 4 Neon) e o modo de aprovação."
        }
      ]
    },
    {
      step: 2,
      shortTab: "2. Plugins",
      frameTag: "Print real · Pinos interativos",
      title: "Passo 2 — Conectar Google Sheets, Drive e GitHub em Customizations",
      img: "assets/tour/02-plugins.png",
      alt: "Tela real de Customizations no Google Antigravity destacando o menu Customizations na barra lateral (1), os plugins do Google Workspace incluindo Google Sheets e Google Drive (2) e o plugin do GitHub em More Plugins (3).",
      intro:
        "Chave 1 de acesso: abra Customizations para conectar sua conta Google Workspace (Sheets, Drive, Docs) e o GitHub via login seguro (OAuth protegido no Sidecar).",
      pins: [
        {
          num: "1",
          x: 11.4,
          y: 7.5,
          box: { x: 0.3, y: 5.8, w: 10.3, h: 3.4 },
          label: "Menu Customizations (Marketplace / Installed)",
          text: "Na barra lateral, clique em Customizations. No topo da tela você alterna entre Marketplace (descobrir novos plugins) e Installed (gerenciar os conectados)."
        },
        {
          num: "2",
          x: 72.2,
          y: 20.5,
          box: { x: 36.3, y: 20.1, w: 35.6, h: 19.3 },
          label: "Plugins do Google Workspace (Sheets & Drive)",
          text: "Clique em \"+\" para conectar Google Docs, Slides, Calendar ou Gmail — e em \"⋮\" nos já conectados (como Google Sheets e Google Drive) para configurar ou desconectar."
        },
        {
          num: "3",
          x: 55.4,
          y: 49.6,
          box: { x: 36.3, y: 46.1, w: 18.2, h: 7.2 },
          label: "Plugin do GitHub (More Plugins)",
          text: "Autorize o GitHub aqui para permitir que o agente clone repositórios, crie branches e publique atualizações — sempre restrito aos repositórios que você vincular ao Projeto. Em Installed você também gerencia suas Regras e Skills."
        }
      ]
    },
    {
      step: 3,
      shortTab: "3. Projeto",
      frameTag: "Print real · Pinos interativos",
      title: "Passo 3 — Abrir Project Settings no seu Projeto",
      img: "assets/tour/03-menu-projeto.png",
      alt: "Tela real do Google Antigravity mostrando a lista de Projects na barra lateral (1), o menu de três pontinhos aberto sobre o projeto com a opção Project Settings (2) e o topo indicando o projeto e conversa ativos (3).",
      intro:
        "Conectar um plugin na sua conta é só a metade do caminho. Para liberar o que o agente pode enxergar naquele assunto, abra as configurações do Projeto.",
      pins: [
        {
          num: "1",
          x: 11.3,
          y: 32.5,
          box: { x: 0.3, y: 15.8, w: 10.2, h: 20.0 },
          label: "Projetos isolados na barra lateral",
          text: "Cada projeto (ex.: meu-site, financas-pessoais, estudos-pdf) funciona como uma sala fechada com suas próprias conversas e permissões."
        },
        {
          num: "2",
          x: 18.4,
          y: 22.8,
          box: { x: 7.9, y: 18.2, w: 9.7, h: 10.5 },
          label: "Menu ⋮ → Project Settings",
          text: "Passe o mouse sobre o nome do projeto, clique nos três pontinhos (⋮) e escolha \"Project Settings\" para gerenciar os recursos autorizados."
        },
        {
          num: "3",
          x: 26.0,
          y: 2.6,
          box: { x: 10.9, y: 0.4, w: 14.3, h: 3.1 },
          label: "Projeto e conversa ativos",
          text: "O caminho no topo confirma exatamente em qual Projeto (meu-site) e conversa o agente está trabalhando agora."
        }
      ]
    },
    {
      step: 4,
      shortTab: "4. Recursos",
      frameTag: "Print real · Pinos interativos",
      title: "Passo 4 — Anexar Recursos (GitHub e Google Drive/Sheets) no Projeto",
      img: "assets/tour/04-recursos-projeto.png",
      alt: "Modal real de Project Settings no Google Antigravity destacando a lista de projetos nas configurações (1), o repositório GitHub anexado na seção Resources (2) e o botão + Add Resource para adicionar repositórios, arquivos do Google Drive/Sheets ou uploads (3).",
      intro:
        "Chave 2 de acesso: é aqui em Resources que você decide o que entra na mesa do agente. O que não for anexado ao Projeto continua invisível e protegido.",
      pins: [
        {
          num: "1",
          x: 26.8,
          y: 26.8,
          box: { x: 27.7, y: 22.3, w: 8.6, h: 10.8 },
          label: "Configuração separada por Projeto",
          text: "Na coluna esquerda do modal Settings, cada projeto (meu-site, financas-pessoais, estudos-pdf) guarda sua própria lista independente de recursos."
        },
        {
          num: "2",
          x: 54.0,
          y: 18.6,
          box: { x: 40.5, y: 19.8, w: 26.8, h: 3.8 },
          label: "Recurso anexado (ex.: repositório GitHub)",
          text: "Aqui o repositório seu-usuario/meu-site foi liberado para este projeto — seus outros repositórios privados do GitHub seguem fora do alcance do agente."
        },
        {
          num: "3",
          x: 68.2,
          y: 25.8,
          box: { x: 40.5, y: 23.8, w: 26.8, h: 3.5 },
          label: "Botão + Add Resource (GitHub, Drive/Sheets, arquivos)",
          text: "Clique aqui para vincular outro repositório do GitHub, selecionar planilhas/pastas do Google Drive e Sheets ou subir arquivos de referência do seu computador."
        }
      ]
    },
    {
      step: 5,
      shortTab: "5. Plano & Aprovação",
      frameTag: "Print real · Pinos interativos",
      title: "Passo 5 — Revisar o Implementation Plan e acompanhar a execução",
      img: "assets/tour/05-plano-execucao.png",
      alt: "Tela real de conversa no Google Antigravity mostrando o cartão do artefato Implementation Plan gerado pelo agente (1), a confirmação Proceeded with Implementation Plan após revisão humana (2) e os ícones de abertura do Side Panel e Overview no canto superior direito (3).",
      intro:
        "Quando você começa com /plan, o agente primeiro cria um plano organizado (Implementation Plan) e só começa a mexer nos arquivos depois do seu clique de aprovação.",
      pins: [
        {
          num: "1",
          x: 72.9,
          y: 15.8,
          box: { x: 38.5, y: 11.5, w: 33.7, h: 8.8 },
          label: "Artefato Implementation Plan",
          text: "Clique neste cartão para abrir o plano completo no painel lateral, ler cada etapa em português e comentar se quiser mudar alguma decisão."
        },
        {
          num: "2",
          x: 37.5,
          y: 27.8,
          box: { x: 38.5, y: 25.7, w: 33.7, h: 4.1 },
          label: "Aprovação registrada (Proceeded with...)",
          text: "O agente só sai do planejamento para a execução após você clicar em Proceed — mantendo você sempre no comando antes de alterar arquivos ou planilhas."
        },
        {
          num: "3",
          x: 94.2,
          y: 5.5,
          box: { x: 91.0, y: 0.4, w: 6.4, h: 3.3 },
          label: "Overview & Side Panel (Arquivos e Prévias)",
          text: "Use os ícones no canto superior direito para abrir o painel lateral com seus Artefatos, arquivos modificados, links salvos e prévias ao vivo."
        }
      ]
    }
  ],

  /* Section 05: Practical Guide — 3 Layers of Agent Memory (Global, AGENTS.md, Skills) */
  instructionLayers: [
    {
      id: "global",
      scopeLabel: "Camada 1 · Sua Conta",
      cardTitleHtml: "Instruções Globais",
      cardSummary:
        "Preferências pessoais que te acompanham em <strong>qualquer projeto ou conversa</strong> (tom, idioma, estilo de explicação e travas de segurança).",
      whenShort: "estilo pessoal fixo em tudo.",
      panelTitle: "Camada 1 — Como configurar suas Instruções Globais",
      analogy: "Seu crachá de preferências pessoais",
      lead:
        "Regras curtas sobre <strong>como você gosta de trabalhar</strong>. Elas são carregadas automaticamente em todo projeto novo — assim você nunca mais precisa repetir <em>\"responda em português claro\"</em> ou <em>\"me mostre um plano antes de alterar arquivos\"</em>.",
      putHere: [
        "Idioma, tom e nível de explicação (ex.: português brasileiro simples, com analogias antes de termos técnicos).",
        "Ritmo de trabalho (ex.: propor um plano curto antes de mudanças grandes e resumir o que foi alterado).",
        "Travas pessoais de segurança (ex.: nunca apagar arquivos, enviar e-mails ou publicar sem seu \"ok\")."
      ],
      avoidHere: [
        "Regras específicas de um único projeto (cores de um site, nome de uma planilha) — isso pertence ao <strong>AGENTS.md</strong>.",
        "Receitas longas passo a passo para uma tarefa específica — isso vira uma <strong>Skill</strong>.",
        "Senhas, tokens ou dados privados sensíveis."
      ],
      steps: [
        {
          title: "No Antigravity — jeito mais fácil (conversando ou com /learn)",
          body:
            "Você não precisa caçar pastas escondidas: cole o <strong>prompt pronto abaixo</strong> em qualquer conversa para o Antigravity criar suas instruções pessoais (e pedir seu \"ok\" antes de salvar). Outra opção mágica: corrigiu o agente numa conversa? Digite <span class=\"inline-code\">/learn</span> — ele propõe transformar a lição em regra global ou do projeto."
        },
        {
          title: "Onde conferir ou editar no Antigravity (e onde o arquivo mora)",
          body:
            "Clique em <strong>Customizations → Installed</strong> na barra lateral esquerda e filtre por <strong>Rules</strong> (os itens com selo <strong>Global</strong> valem em todos os projetos; na extensão/IDE, abra o menu <span class=\"inline-code\">…</span> → <em>Customizations → Rules → + Global</em>). Por baixo dos panos, o Antigravity lê o arquivo de texto <span class=\"inline-code\">~/.gemini/AGENTS.md</span> (ou <span class=\"inline-code\">~/.gemini/GEMINI.md</span>), sempre ativo sem precisar de cabeçalho especial."
        },
        {
          title: "No app Google Gemini (Degrau 1 — para chats do dia a dia)",
          body:
            "Abra <a href=\"https://gemini.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">gemini.google.com</a>, clique em <strong>Configurações → Personal Intelligence / Instruções para o Gemini</strong> (antigo <em>Informações salvas</em>) e adicione frases curtas sobre seu perfil e estilo de resposta — elas passam a valer automaticamente nos seus chats."
        }
      ],
      fileLabel: "📄 ~/.gemini/AGENTS.md",
      fileHint: "Instruções globais no Antigravity · Sempre ativo",
      templateHtml: `<span class="code-key"># Minhas Preferências Globais</span>
- Responda sempre em português brasileiro claro e acolhedor.         <span class="code-comment">← Idioma e tom</span>
- Ao introduzir um termo técnico, explique antes com uma analogia.   <span class="code-comment">← Sem jargão órfão</span>
- Antes de grandes mudanças, proponha um plano curto e espere ok.    <span class="code-comment">← Ritmo de trabalho</span>
- Nunca apague arquivos nem publique mudanças sem minha confirmação. <span class="code-comment">← Trava de segurança</span>`,
      templateRaw: `# Minhas Preferências Globais
- Responda sempre em português brasileiro claro e acolhedor.
- Ao introduzir um termo técnico, explique antes com uma analogia simples.
- Antes de grandes mudanças, proponha um plano curto e espere meu "ok".
- Nunca apague arquivos nem publique mudanças sem minha confirmação.`,
      promptTitle: "Atalho sem código — peça ao Antigravity (Instruções Globais)",
      promptText:
        "Crie (ou atualize) meu arquivo global pessoal ~/.gemini/AGENTS.md com estas 4 preferências: responder sempre em português brasileiro claro, explicar termos técnicos com analogias simples, propor um plano curto antes de grandes mudanças e pedir minha confirmação antes de apagar arquivos ou publicar. Me mostre o rascunho para aprovação antes de salvar.",
      noteHtml:
        "<strong>Bônus opcional (regras modulares):</strong> se um dia quiser várias regras globais separadas por tema, o Antigravity também lê arquivos em <span class=\"inline-code\">~/.gemini/config/rules/*.md</span> com ativação configurável (sempre ligada, sob decisão do modelo, por tipo de arquivo ou manual com <span class=\"inline-code\">@</span>). Para começar, um único <span class=\"inline-code\">~/.gemini/AGENTS.md</span> curto (5 a 15 linhas) já resolve muito!",
      links: [
        { label: "Documentação: Rules no Google Antigravity ↗", url: "https://antigravity.google/docs/rules/" },
        { label: "Comando /learn (salvar lições em regras) ↗", url: "https://antigravity.google/docs/commands/learn/" },
        { label: "Instruções personalizadas no app Gemini ↗", url: "https://support.google.com/gemini/answer/16598625" }
      ]
    },
    {
      id: "agents-md",
      scopeLabel: "Camada 2 · Projeto",
      cardTitleHtml: "Arquivo <span class=\"inline-code\">AGENTS.md</span>",
      cardSummary:
        "O <strong>contrato permanente daquela pasta</strong> (padrão aberto): guarda objetivo, público-alvo, regras visuais, como testar e travas daquele projeto.",
      whenShort: "regras fixas daquele projeto.",
      panelTitle: "Camada 2 — Como configurar o AGENTS.md do seu Projeto",
      analogy: "O quadro de regras na parede da sala",
      lead:
        "Um arquivo de texto comum salvo na <strong>raiz da pasta do projeto</strong>. Toda vez que você abre uma conversa nova ali, o agente lê esse arquivo sozinho — e, ao salvar no GitHub (Seção 06), essas regras viajam junto com o código e funcionam em <strong>Antigravity, Codex, Cursor, Copilot</strong> e outros.",
      putHere: [
        "Objetivo do projeto e quem vai usar (público-alvo e idioma dos textos).",
        "Regras de visual ou conteúdo que nunca podem quebrar (ex.: legível no celular de 390px).",
        "Checklist de verificação antes de concluir (ex.: rodar testes e conferir o preview) e limites de segurança."
      ],
      avoidHere: [
        "Senhas, tokens ou chaves de API — o <span class=\"inline-code\">AGENTS.md</span> costuma ir para o GitHub (use sempre <span class=\"inline-code\">.env</span>!).",
        "Um texto gigante de várias páginas: mantenha entre <strong>5 e 30 linhas concretas</strong> para o agente seguir tudo à risca."
      ],
      steps: [
        {
          title: "Jeito mais fácil — pedir ao Antigravity para redigir por você",
          body:
            "Assim que alinhar a primeira versão de um projeto, cole o <strong>prompt pronto abaixo</strong>. O agente lê os arquivos da pasta e propõe um <span class=\"inline-code\">AGENTS.md</span> enxuto para você revisar e aprovar."
        },
        {
          title: "Onde o arquivo fica salvo (e como é descoberto sozinho)",
          body:
            "Basta existir um arquivo chamado <span class=\"inline-code\">AGENTS.md</span> (ou <span class=\"inline-code\">GEMINI.md</span>) direto na pasta principal do projeto. Você não precisa anexar nem citar o arquivo nas próximas conversas — o Harness carrega o conteúdo automaticamente."
        },
        {
          title: "Evolua aos poucos com /learn",
          body:
            "Não precisa acertar todas as regras no dia 1. Sempre que você corrigir um padrão importante no meio do projeto, digite <span class=\"inline-code\">/learn</span> e o Antigravity propõe atualizar o <span class=\"inline-code\">AGENTS.md</span> com a nova regra."
        }
      ],
      fileLabel: "📄 AGENTS.md",
      fileHint: "Na raiz do projeto · Lido em toda nova conversa",
      templateHtml: `<span class="code-key"># Regras deste projeto</span>
- Objetivo: catálogo pessoal de livros e filmes para celular e PC.    <span class="code-comment">← Missão clara</span>
- Idioma: interface e mensagens sempre em português brasileiro.       <span class="code-comment">← Padrão fixo</span>
- Visual: manter layout limpo, sem texto cortado no celular (390px).  <span class="code-comment">← Regra de design</span>
- Verificação: antes de publicar, rode os testes e confira o preview. <span class="code-comment">← Checklist</span>
- Segurança: nunca escrever senhas no código (use .env) nem apagar    <span class="code-comment">← Trava de segurança</span>
  dados reais sem mostrar um resumo e pedir minha confirmação.`,
      templateRaw: `# Regras deste projeto
- Objetivo: catálogo pessoal de livros e filmes para celular e PC.
- Idioma: interface e mensagens sempre em português brasileiro.
- Visual: manter layout limpo, sem texto cortado no celular (390px).
- Verificação: antes de publicar, rode os testes e confira o preview.
- Segurança: nunca escrever senhas no código (use .env) nem apagar dados reais sem mostrar um resumo e pedir minha confirmação.`,
      promptTitle: "Atalho sem código — peça ao Antigravity (AGENTS.md)",
      promptText:
        "Crie um arquivo AGENTS.md curto (entre 10 e 25 linhas) na raiz deste projeto resumindo o objetivo, o público-alvo, as regras visuais, o checklist de testes e as travas de segurança que combinamos hoje. Nunca inclua senhas e me mostre o rascunho antes de salvar.",
      noteHtml:
        "<strong>Exemplo real vivo:</strong> este próprio guia tem um <span class=\"inline-code\">AGENTS.md</span> público na raiz do repositório guardando o foco em iniciantes, o tom em português claro e a revisão visual obrigatória — assim nada se perde nas próximas conversas.",
      links: [
        { label: "Ver o AGENTS.md real deste guia no GitHub ↗", url: "https://github.com/erykwho/learning-ai/blob/master/AGENTS.md" },
        { label: "Padrão aberto agents.md (Oficial) ↗", url: "https://agents.md/" },
        { label: "Onde o Antigravity busca arquivos (Discovery) ↗", url: "https://antigravity.google/docs/customization-discovery/" }
      ]
    },
    {
      id: "skills",
      scopeLabel: "Camada 3 · Sob Demanda",
      cardTitleHtml: "Skills (<span class=\"inline-code\">SKILL.md</span>)",
      cardSummary:
        "Receitas passo a passo para <strong>tarefas específicas e repetitivas</strong>. Só carregam na memória quando o assunto surge — ou ao digitar <span class=\"inline-code\">/&lt;nome&gt;</span>.",
      whenShort: "fluxos passo a passo repetitivos.",
      panelTitle: "Camada 3 — Como criar e usar suas próprias Skills",
      analogy: "Os manuais de receita na estante",
      lead:
        "Enquanto Regras (Camadas 1 e 2) guardam <strong>princípios curtos</strong>, uma <strong>Skill</strong> é um <strong>manual passo a passo</strong> dentro de uma pasta com o arquivo <span class=\"inline-code\">SKILL.md</span>. Para não poluir o \"quadro branco\", o agente vê só o nome e a descrição curta — e só lê a receita inteira na hora em que a tarefa pede.",
      putHere: [
        "Tarefas com vários passos que você repete sempre (ex.: revisar textos para leigos, lançar recibos no Sheets, montar ata de reunião).",
        "Um gatilho (<span class=\"inline-code\">description</span>) bem claro no topo explicando <strong>o que a Skill faz e quando o agente deve abri-la</strong>.",
        "Opcional: modelos de saída ou scripts prontos guardados na mesma pasta da Skill."
      ],
      avoidHere: [
        "Regras gerais que valem em qualquer conversa (coloque nas <strong>Instruções Globais</strong> ou no <strong>AGENTS.md</strong>).",
        "Uma \"super-skill\" que tenta fazer 5 tarefas diferentes — prefira <strong>uma Skill focada por tarefa</strong>."
      ],
      steps: [
        {
          title: "Jeito mais fácil — transformar uma tarefa que deu certo em Skill",
          body:
            "Faça uma tarefa uma vez junto com o Antigravity até ficar do jeito ideal. Depois diga: <em>\"Salve esse passo a passo que usamos hoje como uma Skill reutilizável\"</em> (ou digite <span class=\"inline-code\">/learn</span>). O agente cria a pasta e o <span class=\"inline-code\">SKILL.md</span> no formato certo e pede sua aprovação!"
        },
        {
          title: "Escolher o alcance (Global, só do Projeto ou no app Gemini)",
          body:
            "<strong>Global no Antigravity (vale em todos os projetos):</strong> salva em <span class=\"inline-code\">~/.gemini/config/skills/&lt;nome&gt;/SKILL.md</span> (visível em <strong>Customizations → Installed → Skills</strong>). <strong>Só neste projeto:</strong> salva em <span class=\"inline-code\">.agents/skills/&lt;nome&gt;/SKILL.md</span> (compartilhável no GitHub). <strong>No app Google Gemini:</strong> abra <strong>Personalizar → Skills → Criar</strong> (onde você também pode criar Skills manualmente ou migrar seus Gems)."
        },
        {
          title: "Como acionar depois (automático ou chamando com barra /)",
          body:
            "Basta fazer seu pedido em português normal: o agente lê o campo <span class=\"inline-code\">description</span> e abre a Skill sozinho. Quer garantir que ela rode na hora? Digite <span class=\"inline-code\">/&lt;nome-da-skill&gt;</span> (ex.: <span class=\"inline-code\">/revisar-texto-claro</span>) direto na caixa de mensagem!"
        }
      ],
      fileLabel: "📁 ~/.gemini/config/skills/revisar-texto-claro/SKILL.md",
      fileHint: "Cabeçalho (gatilho) + receita sob demanda",
      templateHtml: `---
<span class="code-key">name:</span> revisar-texto-claro                         <span class="code-comment">← Vira o atalho /revisar-texto-claro</span>
<span class="code-key">description:</span> Revisa textos e e-mails deixando a leitura clara e sem jargão.
  Use quando o usuário pedir para revisar ou simplificar um texto para leigos. <span class="code-comment">← GATILHO!</span>
---

<span class="code-key"># Passo a passo de revisão clara</span>
1. Leia o texto e identifique termos técnicos ou frases longas demais.
2. Reescreva em português brasileiro natural, preservando a ideia original.
3. Liste em até 3 tópicos o que foi simplificado e por quê.
4. Pergunte se o usuário quer também uma versão bem curta para WhatsApp.`,
      templateRaw: `---
name: revisar-texto-claro
description: Revisa textos e e-mails deixando a leitura clara e sem jargão. Use quando o usuário pedir para revisar ou simplificar um texto para leigos.
---

# Passo a passo de revisão clara
1. Leia o texto e identifique termos técnicos ou frases longas demais.
2. Reescreva em português brasileiro natural, preservando a ideia original.
3. Liste em até 3 tópicos o que foi simplificado e por quê.
4. Pergunte se o usuário quer também uma versão bem curta para WhatsApp.`,
      promptTitle: "Atalho sem código — peça ao Antigravity (sua 1ª Skill)",
      promptText:
        "Crie uma Skill pessoal global chamada revisar-texto-claro em ~/.gemini/config/skills/revisar-texto-claro/SKILL.md. O gatilho (description) deve ativar quando eu pedir para revisar ou simplificar textos e e-mails para leigos. Inclua um passo a passo curto (cortar jargão, manter o sentido, resumir 3 melhorias e oferecer versão curta) e me mostre para aprovação antes de salvar.",
      noteHtml:
        "<strong>Padrão aberto + bastidores:</strong> o formato <span class=\"inline-code\">SKILL.md</span> é aberto (funciona no Antigravity, Claude Code, Codex e VS Code). Quer ver o que acontece passo a passo quando o agente detecta o gatilho? <a href=\"#deepdive-skill\" data-open-details=\"deepdive-skill\">Abra o raio-x de Skills na Seção 04 ↑</a>.",
      links: [
        { label: "Agent Skills no Google Antigravity ↗", url: "https://antigravity.google/docs/skills/" },
        { label: "Padrão aberto Agent Skills (agentskills.io) ↗", url: "https://agentskills.io/home" },
        { label: "Codelab: Criando Skills no Antigravity ↗", url: "https://codelabs.developers.google.com/getting-started-with-antigravity-skills" }
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
          desc: "Uma cópia paralela da linha oficial (chamada main ou master). Você (ou o Antigravity) testa ideias novas na branch sem risco nenhum para o site que já está no ar."
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
        "Crie uma branch nova para testar essa melhoria e abra um Pull Request no GitHub para eu revisar antes de fazer o merge na linha principal."
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
          desc: "Estático (GitHub Pages) entrega os mesmos arquivos prontos da página (HTML/CSS) para todo mundo. Dinâmico (Vercel) roda um Backend/API com .env para conversar com o banco e responder sob medida."
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
      id: "core",
      shortLabel: "Servidor + Banco",
      name: "Coração do Sistema (Servidor / Backend + Banco SQL)",
      analogy: "Os Pilares 2 e 3 trabalhando no centro",
      desc: "É o núcleo que você já conhece dos 3 pilares: o <strong>Servidor / Backend (a cozinha do sistema)</strong> recebe os pedidos do visitante, consulta as chaves secretas do <span class='inline-code'>.env</span> e coordena tudo — lendo e gravando os dados permanentes no <strong>Banco de Dados (Neon / Postgres)</strong> e acionando Cache, Storage, Filas ou APIs Externas só quando o projeto crescer.",
      whenNeeded:
        "É o ponto de partida de quase todo sistema interativo real — você começa por aqui (com GitHub + Neon + Vercel) e vai plugando os blocos ao redor apenas quando sentir necessidade.",
      examples:
        "<strong>Vercel + Neon Postgres</strong>, <strong>Cloudflare Workers + D1</strong>, <strong>Google Cloud Run + Cloud SQL</strong>.",
      agentMode: "Constrói, testa na Sandbox e versiona no GitHub",
      agentTip:
        "Com o Antigravity conectado ao GitHub (e a MCPs como Neon ou Postgres), o agente cria as páginas e endereços internos (rotas), testa consultas e abre Pull Requests completos para sua revisão."
    },
    {
      id: "cache",
      shortLabel: "Cache (Redis)",
      name: "Cache (Memória Rápida)",
      analogy: "O Post-it na Mesa",
      desc: "Ir ao banco de dados toda vez que alguém abre a mesma página consome tempo e dinheiro. O <strong>Cache</strong> guarda uma cópia temporária das respostas mais pedidas (ex: catálogo do dia, ranking ou sessão do usuário) na memória ultrarrápida. Se a resposta já está no post-it, o site responde em poucos milissegundos — e só consulta o banco quando o post-it vence ou muda.",
      whenNeeded:
        "Quando muitas pessoas acessam os mesmos dados ao mesmo tempo ou quando uma consulta no banco começa a ficar lenta e repetitiva.",
      examples:
        "<strong>Redis</strong> (com plano grátis na <strong>Upstash</strong>), cache automático da <strong>Cloudflare</strong> e da <strong>Vercel</strong>.",
      agentMode: "Configura o código de cache e regras de expiração",
      agentTip:
        "Basta dizer: \"Adicione cache Redis (Upstash) de 5 minutos nessa lista para não sobrecarregar o Neon\" — o agente escreve a lógica e te orienta onde copiar a chave no painel."
    },
    {
      id: "queues",
      shortLabel: "Filas & Pub/Sub",
      name: "Filas (Queues), Pub/Sub & Workers",
      analogy: "Senha da Padaria + Quadro de Avisos",
      desc: "<strong>Fila (Queue):</strong> quando uma tarefa demora (gerar PDF, mandar 500 e-mails ou processar IA), o servidor responde 'Recebido!' na hora e joga o pedido numa fila para um <strong>Worker</strong> (robô nos bastidores) resolver sem travar a tela do usuário. Já o <strong>Pub/Sub (Publicar/Assinar)</strong> funciona como um quadro de avisos: quando um evento acontece ('Compra aprovada!'), vários serviços assinantes reagem ao mesmo tempo (nota fiscal, estoque, e-mail) sem dependerem um do outro.",
      whenNeeded:
        "Quando alguma ação leva mais de 2–3 segundos ou quando um único evento precisa disparar várias ações independentes com nova tentativa automática se algo falhar.",
      examples:
        "<strong>Google Cloud Pub/Sub</strong>, <strong>Upstash QStash</strong>, <strong>Cloudflare Queues</strong>, <strong>RabbitMQ</strong> e <strong>Kafka</strong>.",
      agentMode: "Conecta via terminal (CLI) ou API e cria fila + worker",
      agentTip:
        "O agente configura a fila ou tópico Pub/Sub, escreve o código do Worker com tentativas automáticas em caso de erro e te guia passo a passo para colar o endereço da fila no .env."
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
      agentMode: "Integra login pronto em minutos e protege áreas restritas",
      agentTip:
        "Peça: \"Coloque login com Google usando Clerk ou Supabase Auth e proteja as páginas para cada usuário ver só os próprios itens\". O agente gera o código e indica os 3 campos do painel."
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
      agentMode: "Cria upload seguro (links temporários) e conecta ao banco",
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
      agentMode: "Cria os endereços de recebimento (endpoints) e agendamentos",
      agentTip:
        "O agente escreve o código de verificação de segurança do Webhook, cria o arquivo de agendamento Cron e mostra exatamente qual URL colar no painel do Stripe ou da Vercel."
    },
    {
      id: "apis",
      shortLabel: "APIs Externas",
      name: "APIs Externas & Integrações",
      analogy: "Os Especialistas Terceirizados",
      desc: "Quase nenhum software moderno constrói tudo dentro de casa. Para cobrar cartão/Pix, enviar e-mails que não caem no spam, consultar CEP, enviar WhatsApp ou chamar inteligência artificial, seu servidor envia um pedido autenticado para a <strong>API</strong> (o 'garçom' digital) de um serviço especialista e recebe a resposta pronta num formato de texto organizado (chamado <em>JSON</em>).",
      whenNeeded:
        "Sempre que existir um especialista confiável para aquela função — economiza meses de trabalho e evita dores de cabeça legais (como lidar com dados de cartão de crédito).",
      examples:
        "<strong>Stripe / Mercado Pago</strong> (pagamentos), <strong>Resend</strong> (e-mails), <strong>Gemini API</strong> (IA) e <strong>Google Maps / Drive</strong>.",
      agentMode: "Lê documentações, instala bibliotecas oficiais (SDKs) e testa",
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
      id: "cloud",
      shortLabel: "Nuvem (Cloud)",
      name: "Nuvem & Serviços de Nuvem (Cloud Providers)",
      analogy: "O Condomínio Completo de Infraestrutura",
      desc: "Em vez de comprar servidores físicos, empresas alugam computação sob demanda em grandes plataformas de <strong>Nuvem</strong> — verdadeiros 'supermercados' com dezenas de serviços integrados sob o mesmo teto (servidores, bancos, Pub/Sub, arquivos, IA, rede e segurança), cobrando apenas pelo que você usa (<em>pay-as-you-go</em>).",
      whenNeeded:
        "Você <strong>não precisa começar aqui</strong>! Comece leve (GitHub + Neon + Vercel) e migre ou combine serviços da Nuvem grande quando precisar de escala alta, regras rígidas de empresas (compliance) ou recursos específicos (como Google Cloud Pub/Sub e Cloud Run).",
      examples:
        "<strong>Google Cloud (GCP)</strong>, <strong>AWS (Amazon)</strong> e <strong>Microsoft Azure</strong> — além de nuvens mais simples como <strong>Vercel</strong>, <strong>Cloudflare</strong> e <strong>Render</strong>.",
      agentMode: "Usa comandos oficiais no terminal (CLI) ou guia clique a clique",
      agentTip:
        "Agentes como o Antigravity podem gerar scripts de infraestrutura, operar comandos oficiais da nuvem (gcloud, aws) ou — se você preferir fazer pelo navegador — te guiar clique a clique lendo prints do painel."
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
      title: "Personalizar o Google Gemini (Gem/Skill, Canvas ou imagem)",
      desc: "Crie um Gem com instruções fixas para uma tarefa semanal (ex: revisar e-mails) e teste gerar/editar uma imagem ou abrir o Canvas no próprio chat."
    },
    {
      id: "step-notebook",
      title: "Testar o Gemini Notebook (antigo NotebookLM) com 2 ou 3 PDFs",
      desc: "Suba documentos seus (no app Gemini ou em notebook.google) e faça perguntas conferindo as citações clicáveis — sinta na prática o RAG sem alucinação."
    },
    {
      id: "step-aistudio",
      title: "Explorar o Google AI Studio por 5 minutos",
      desc: "Abra aistudio.google.com, preencha uma System Instruction e teste subir uma imagem ou documento."
    },
    {
      id: "step-antigravity",
      title: "Configurar seu primeiro Projeto e rodar uma automação no Google Antigravity",
      desc: "Conecte o plugin de Google Drive/Sheets (ou GitHub) em Customizations, anexe o recurso no Projeto e teste o Roteiro 1 da Seção 5 começando com /plan."
    },
    {
      id: "step-agents-md",
      title: "Configurar suas Instruções Globais, um AGENTS.md e sua 1ª Skill",
      desc: "Salve suas preferências pessoais (no app Gemini ou em ~/.gemini/AGENTS.md), crie um AGENTS.md curto no seu projeto e transforme uma tarefa repetitiva em Skill seguindo o guia da Seção 05 (ou com /learn)."
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
