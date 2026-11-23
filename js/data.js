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
      ]
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
