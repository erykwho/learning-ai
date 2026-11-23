# AGENTS.md — Guia Interativo "IA na Prática: do Zero aos Agentes"

Este arquivo define o contrato permanente deste repositório para agentes de IA (Google Antigravity e outros harnesses compatíveis). Leia antes de propor ou editar qualquer conteúdo.

## 1. Missão e Público-Alvo do Projeto

- **O que é este projeto:** uma página web pública, compartilhável e interativa (estilo blog post editorial) em **português brasileiro (`pt-BR`)** chamada **"IA na Prática: do Zero aos Agentes"**.
- **Público-alvo:** pessoas **leigas em IA e programação** que querem entender o cenário atual e aprender a usar IA de verdade no dia a dia — sem pré-requisitos de código nem matemática avançada.
- **Objetivo principal:** conduzir o leitor por uma **curva de aprendizado gradual** (do simples e abstrato ao prático e profissional), sem perder tempo excessivo na profundidade matemática de como modelos funcionam por dentro, priorizando:
  1. Como usar modelos e ferramentas de IA hoje na prática.
  2. Como o ecossistema evoluiu (paper Transformer do Google → LLMs → RAG/Raciocínio → Agentes/Harnesses/Skills → MCP/Sandboxes/Sidecars/Subagentes e geração Gemini 4).
  3. Direcionamento principal para o **ecossistema Google** (`Gemini + Gems` → `NotebookLM` → `Google AI Studio` → `Google Antigravity`, destacando o novo **Gemini 4 Neon**), com uma seção opcional clara sobre outros ecossistemas.
  4. Capacitar o leitor a usar o **Google Antigravity** para criar automações e sistemas reais (incluindo truques práticos para se desbloquear e tour visual passo a passo).
  5. Dar uma visão sólida, porém acessível, de **engenharia de software profissional**: os 3 pilares gratuitos para começar (GitHub, Neon/Supabase, Vercel/GitHub Pages), o Escudo Anti-Quebra (Preview, testes, `.env`), fluxo Prompt → Servidor com Rollback e outros blocos de arquitetura (Cache, Filas/Pub/Sub, Auth, Storage, Cron/Webhooks, APIs, Observabilidade e Nuvem) — sempre frisando que o agente se conecta ou guia no setup.
  6. Fechar com checklist prático, cursos rápidos/playlists de vídeos curtos para absorção sem pressa e Glossário de Bolso.

## 2. Regras Pedagógicas e Editoriais (Não-Negociáveis)

- **Idioma e tom:** sempre `pt-BR` natural, acolhedor, claro e direto.
- **Zero jargão órfão:** nenhum termo técnico entra sem antes ganhar uma analogia cotidiana simples.
- **Completo, mas não cansativo:** evite muros longos de texto. Prefira divulgação progressiva (abas, cartões escaneáveis, blocos expansíveis `<details>`, gráficos interativos e exemplos curtos).
- **Curva gradual obrigatória:** sempre revise alterações novas sob a ótica de quem nunca programou para garantir progressão suave.
- **Curadoria rigorosa de links:** inclua apenas links reais e verificados. Em cursos e playlists recomendados para iniciantes, **evite vídeos excessivamente longos ou técnicos demais**; priorize módulos curtos (4 a 18 min) e fontes consolidadas.
- **Precisão sobre preços/planos:** verifique fatos antes de afirmar se algo é pago ou grátis (ex.: os 4 degraus do Google, incluindo o plano individual do Google Antigravity, oferecem cota gratuita para começar; modelos específicos como Gemini 4 Neon exigem planos Pro/Ultra).
- **Evitar confusão de nomes:** deixe claro quando dois nomes coincidem (ex.: **Gemini 4 Neon** = modelo de IA do Google vs. **Neon Postgres** = banco de dados gratuito).
- **Segurança prática para leigos:** reforce hábitos simples de privacidade (não colar senhas/dados sensíveis em chats públicos) e explique por que aprovações humanas protegem contra *Prompt Injection*.

## 3. Arquitetura e Sistema Visual

- **Stack intencionalmente simples:** Vanilla HTML + CSS + JS (sem frameworks nem etapa de build), publicado via **GitHub Pages** direto da branch `master` (`https://erykwho.github.io/learning-ai/`).
- **Mapa dos arquivos:**
  - `index.html` — estrutura editorial, índice lateral (ScrollSpy), seções `01`–`08` e containers dos widgets.
  - `js/data.js` — fonte única de dados estruturados (`window.GUIDE_DATA`: widgets, biblioteca das 5 eras, tour visual, pilares, mapa de engenharia, cursos/playlists, glossário e checklist).
  - `js/app.js` — interatividade, SVGs dinâmicos temáticos, carrossel com Lightbox, filtros e persistência do checklist em `localStorage`.
  - `css/style.css` — tema claro papel editorial quente (`#faf8f4`) e tema escuro grafite nítido (`#111418`), tipografia `Newsreader` + `Plus Jakarta Sans` + `JetBrains Mono`.
  - `assets/tour/` — prints ilustrativos 2x Retina do carrossel do Google Antigravity (Seção 05).
- **Regras visuais:**
  - Todo gráfico SVG novo deve usar variáveis CSS (`var(--ink-primary)`, `var(--bg-surface)`, `var(--accent-*)`, e `var(--ink-inverse)` para texto sobre fundos sólidos de destaque) para funcionar com alto contraste tanto em modo claro quanto em modo escuro.
  - Mantenha estética editorial limpa; evite clichês visuais (gradientes neon/roxo sobre fundo escuro, texto com gradiente, bordas brilhantes artificiais).
  - Garanta layout responsivo sem nenhum estouro horizontal em telas de `390px` (e rolagem horizontal legível em diagramas SVG largos).

## 4. Critérios de Conclusão e Verificação

Antes de concluir qualquer alteração ou dar `git push`:

1. **Sintaxe JS:** rodar `node --check js/data.js && node --check js/app.js`.
2. **Consistência de contadores e referências:** atualizar contagens visíveis quando adicionar widgets, cards ou itens filtráveis (Hero `N gráficos interativos`, rótulos de abas com `(N)`, `Glossário de Bolso` e `README.md`).
3. **Verificação no navegador real (Playwright):** abrir a página via servidor local HTTP e confirmar `0` console errors, `0` page errors e `scrollWidth <= clientWidth` em mobile (`390px`).
4. **Inspeção visual obrigatória:** tirar e revisar capturas de tela de qualquer seção, diagrama SVG ou widget alterado em **modo claro**, **modo escuro** (conferindo contraste de texto dentro de badges SVG) e **mobile (`390px`)** para garantir ausência de texto cortado, sobreposição ou contraste baixo.
5. **Deploy no GitHub Pages:** após `git push origin master`, acompanhar o workflow `pages-build-deployment` e confirmar que o status do Pages retornou `"built"`.

## 5. Segurança e Limites

- **Nunca** escreva senhas, tokens, credenciais ou chaves de API neste repositório (o repositório é público).
- **Nunca** execute `git` e `gh` encadeados no mesmo comando se houver risco de conflito de fluxo; mantenha commits pequenos, descritivos e fáceis de reverter.
- Em mudanças estruturais grandes ou decisões de escopo ambíguas, proponha o plano primeiro (`/plan` ou perguntas curtas) antes de reescrever seções extensas.
