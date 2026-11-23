# IA na Prática: do Zero aos Agentes — Guia Interativo em Português

Página interativa estilo blog post feita para leigos aprenderem Inteligência Artificial do zero até automações e sistemas reais — com foco no ecossistema Google (**Google Gemini** com Gems/Skills, Canvas, mídia e tarefas agendadas, **Gemini Notebook / antigo NotebookLM**, **Google AI Studio**, **Google Antigravity** com **Projetos, Recursos e Permissões**, e geração **Gemini 4 Neon**), boas práticas de privacidade, **Laboratório Interativo de Frontend (HTML, CSS, JavaScript e Frameworks) vs. Backend**, guia prático das 3 camadas de memória (**Instruções Globais**, `AGENTS.md` e **Skills**), engenharia de software profissional (**GitHub**, **Neon/Supabase**, **Vercel/GitHub Pages**, **Domínio, DNS e HTTPS** e mapa de arquitetura em nuvem), cursos rápidos e Glossário de Bolso.

## Estrutura do Projeto

```text
learning-ai/
├── AGENTS.md           # Contrato permanente de instruções para agentes de IA (objetivo, público leigo, estilo e testes)
├── index.html          # Página editorial com índice lateral (ScrollSpy) e 8 seções progressivas (com blocos opcionais)
├── css/
│   └── style.css       # Sistema visual editorial (claro papel quente / escuro grafite) e layout responsivo
├── js/
│   ├── data.js         # Fonte única de dados: 8 gráficos interativos, tour visual com 5 prints e hotspots, laboratório interativo de Frontend/Backend (HTML, CSS, JS e Frameworks), simulador da viagem do DNS (A/CNAME/TXT/HTTPS), guia prático das 3 camadas (Instruções Globais, AGENTS.md e Skills), biblioteca das 5 eras, 3 pilares, mapa da engenharia, 10 cursos/playlists curtos, 52 termos do glossário e checklist
│   └── app.js          # Lógica de interatividade, SVGs temáticos, carrossel com hotspots e Lightbox, laboratório web e simulador DNS, busca sem acento no glossário, filtros, cópia de prompts e localStorage
└── assets/
    ├── favicon.svg     # Ícone vetorial da página
    ├── og-cover.png    # Cartão social editorial (1200×630) para compartilhamento
    └── tour/           # Prints reais anonimizados de alta nitidez do Google Antigravity (Seção 05) com hotspots interativos
```

## Pré-visualização Local

O projeto usa apenas HTML, CSS e JavaScript puros (sem etapa de build). Para abrir localmente:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000/`.

## Publicação

Hospedado gratuitamente via **GitHub Pages** diretamente da branch `master`:
- **URL pública:** https://erykwho.github.io/learning-ai/