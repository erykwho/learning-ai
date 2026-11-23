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
        "Sidecars & Subagentes: processos auxiliares invisíveis (segurança) e agentes especialistas trabalhando em paralelo."
      ],
      refs: [
        { label: "MCP Docs Oficiais", url: "https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro" },
        { label: "Sandboxing AI Agents (Cloudflare)", url: "https://blog.cloudflare.com/dynamic-workers/" },
        { label: "Sidecar Pattern (Microsoft)", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar" },
        { label: "Multi-Agent Systems (Anthropic)", url: "https://www.anthropic.com/research/multi-agent-research-system" }
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
    }
  ],

  /* Widget 6: Other AI Ecosystems Explorer (Optional Section 07) */
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
        "Para comparar lado a lado com os demais: o diferencial do Google é oferecer a escada completa integrada à conta que você provavelmente já usa todos os dias (Gmail, Drive, Docs, Sheets) — com janelas de contexto gigantes e forte multimodalidade nativa.",
      models: [
        "<strong>Família Gemini (Flash / Pro / Deep Think):</strong> multimodal nativa (texto, imagem, áudio e vídeo longos) com enormes janelas de contexto.",
        "<strong>Gemma:</strong> linha aberta (open-weights) do Google para rodar localmente ou em servidores próprios."
      ],
      tools: [
        "<strong>Gemini + Gems &amp; NotebookLM:</strong> uso diário, assistentes fixos e pesquisa sem alucinação nos seus PDFs.",
        "<strong>Google AI Studio:</strong> laboratório gratuito no navegador para testar prompts, vídeos e modelos novos.",
        "<strong>Google Antigravity:</strong> harness agêntico completo com Sandbox, Skills, Plugins (Drive, Sheets, GitHub) e MCP."
      ],
      strength:
        "Ponto forte: menor atrito para começar hoje (integração direta com Drive/Sheets/Workspace) e trilha completa gratuita até o Antigravity."
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
  ]
};
