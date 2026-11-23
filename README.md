# IA sem Mistério — Guia Interativo em Português

Página interativa estilo blog post feita para leigos aprenderem Inteligência Artificial do zero até automações e sistemas reais — com foco no ecossistema Google (Gemini, NotebookLM, Google AI Studio e Google Antigravity) e boas práticas de sistemas (GitHub, Neon/Supabase e Vercel/GitHub Pages).

## Estrutura do Projeto

```text
learning-ai/
├── index.html          # Página principal editorial com índice lateral e 8 seções (inclui bônus opcional de ecossistemas)
├── css/
│   └── style.css       # Sistema visual claro/escuro e estilos responsivos
├── js/
│   ├── data.js         # Conteúdo estruturado dos 8 gráficos interativos, tour visual, biblioteca das 5 eras, glossário e checklist
│   └── app.js          # Lógica de interatividade, ScrollSpy, carrossel com zoom, simulações e cópia de prompts
└── assets/
    ├── favicon.svg     # Ícone vetorial da página
    └── tour/           # 5 telas ilustrativas em alta resolução do tour visual do Google Antigravity (Seção 05)
```

## Publicação

Hospedado gratuitamente via **GitHub Pages** diretamente da branch `master`:
- **URL pública:** https://erykwho.github.io/learning-ai/