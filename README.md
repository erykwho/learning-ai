# IA na Prática: do Zero aos Agentes — Guia Interativo em Português

Página interativa estilo blog post feita para leigos aprenderem Inteligência Artificial do zero até automações e sistemas reais — com foco no ecossistema Google (**Google Gemini** com Gems/Skills, Canvas, mídia e tarefas agendadas, **Gemini Notebook / antigo NotebookLM**, **Google AI Studio**, **Google Antigravity** e geração **Gemini 4 Neon**), boas práticas de privacidade, instruções para agentes (`AGENTS.md`), engenharia de software profissional (**GitHub**, **Neon/Supabase**, **Vercel/GitHub Pages** e mapa de arquitetura em nuvem), cursos rápidos e Glossário de Bolso.

## Estrutura do Projeto

```text
learning-ai/
├── AGENTS.md           # Contrato permanente de instruções para agentes de IA (objetivo, público leigo, estilo e testes)
├── index.html          # Página editorial com índice lateral (ScrollSpy) e 8 seções progressivas (com blocos opcionais)
├── css/
│   └── style.css       # Sistema visual editorial (claro papel quente / escuro grafite) e layout responsivo
├── js/
│   ├── data.js         # Fonte única de dados: 8 gráficos interativos, tour visual, biblioteca das 5 eras, 3 pilares, mapa da engenharia, 10 cursos/playlists curtos, 39 termos do glossário e checklist
│   └── app.js          # Lógica de interatividade, SVGs temáticos, carrossel com Lightbox, filtros, cópia de prompts e localStorage
└── assets/
    ├── favicon.svg     # Ícone vetorial da página
    └── tour/           # 5 telas ilustrativas em alta resolução (2x Retina) do tour visual do Google Antigravity (Seção 05)
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