# Auditoria — Checklist de 40 pontos (Design/UI-UX/SEO/CRO)

Avaliação do portfólio contra o checklist de 40 pontos, com adaptação de critério: este é
um **portfólio pessoal de desenvolvedor**, não uma landing page de SaaS/produto. Pontos
pensados para funil de vendas (preços, depoimentos de clientes, thank-you page de compra)
foram adaptados ou marcados como não aplicável — nunca preenchidos com dado fabricado.

Legenda: ✅ atendido · 🔁 adaptado (versão que faz sentido pro contexto) · ⛔ não aplicável (justificado) · 🕓 pendente

## Parte 1 — Design, UI/UX e Identidade Visual

| # | Ponto | Status | Nota |
|---|---|---|---|
| 1 | Gradientes suaves | ✅ | Site não usa gradientes; paleta sólida (`#1f3c58`/`#315e8a`/`#f1f2ea`) |
| 2 | Ícones únicos | ✅ | Sem Lucide/ícone genérico; removido `icons.svg` (boilerplate do Vite, não usado) |
| 3 | Contrastes/fundos | ✅ | Fundo trocado de branco puro para `--color-bg: #fafaf8` |
| 4 | Paleta equilibrada | ✅ | Azul/navy, sem neon/arco-íris/pastel |
| 5 | Sombras naturais | ✅ | Sem drop shadows; bordas sutis (`--color-border`) |
| 6 | Layout dinâmico | ✅ | Timeline (Experiência), grid (Clientes/Competências), split (Home) — não é "3 cards" repetido |
| 7 | Emojis moderados | ✅ | Nenhum emoji no site |
| 8 | Glassmorphism consciente | ✅ | Não usado |
| 9 | Tipografia limpa (em-dash) | ✅ | Revisado; travessões de continuação de frase trocados por vírgula/parênteses (datas/separador `Empresa — Cargo` mantidos, uso tipográfico correto) |
| 10 | Fontes com personalidade | 🔁 | Roboto (única fonte disponível no ambiente); peso/letter-spacing ajustados no logo e headings |
| 11 | Faixas coloridas à esquerda | ✅ | Não usado |
| 12 | Bento grids com propósito | ✅ | Grid usado só em Clientes (cards de empresa), não forçado |
| 13 | Mockups realistas | ✅ | Sem janela de terminal fake (não é produto dev tool) |
| 14 | Bordas consistentes | ✅ | `--radius: 6px` aplicado a botões, imagens, cards, inputs, FAQ |
| 15 | Paleta "SaaS roxo/preto" | ✅ | Paleta azul/navy própria, não genérica |
| 16 | Orbes radiais | ✅ | Não usado |
| 17 | Dot grids | ✅ | Não usado |
| 18 | Ícones de brilho/IA | ✅ | Não usado |
| 19 | Setas animadas | ✅ | Não usado |
| 20 | Hover fluido | ✅ | Transições em botões, menu, links do footer, cards de experiência, FAQ |

## Parte 2 — Copywriting, Conteúdo e Prova Social

| # | Ponto | Status | Nota |
|---|---|---|---|
| 21 | Copy direta | ✅ | Sem clichê "não é X, é Y" |
| 22 | Prova social real | ✅ | Testemunho fictício antigo ("Fulano de Tal") foi removido na reescrita; zero depoimento fake |
| 23 | Marcadores claros | ✅ | Listas objetivas, sem spam de ícone de check |
| 24 | Demos/capturas reais | 🔁 | Portal RD é sistema interno privado da empresa — não posso publicar screenshot real. Troquei foto de banco de imagem genérica por ilustração abstrata **explicitamente rotulada como não sendo captura real** |
| 25 | Preços | ⛔ | Não aplicável — não é produto/serviço vendido no site |
| 26 | Avaliações de clientes | ⛔ | Não aplicável — portfólio pessoal, sem clientes próprios a exibir |
| 27 | Foto real de equipe | ⛔ | Não aplicável — pessoa física, não empresa com equipe |
| 28 | Tempo médio de resposta | ✅ | "Costumo responder em até 2 dias úteis" na página de Contato |

## Parte 3 — Estrutura, Navegação e Recursos Técnicos

| # | Ponto | Status | Nota |
|---|---|---|---|
| 29 | 404 customizada | ✅ | Rota `*` → página amigável com botão de volta à Home |
| 30 | CTA acima da dobra | ✅ | Home já tem CTA no primeiro bloco visível |
| 31 | URLs amigáveis | ✅ | `/experiencia`, `/competencias`, `/sobre`, `/contato` |
| 32 | Thank you page | 🔁 | Adaptado: feedback inline de sucesso no próprio formulário (`role="status"`), sem funil de compra que justifique página separada |
| 33 | Breadcrumbs | ⛔ | Site raso (5 páginas, 1 nível), breadcrumb não agrega navegação |
| 34 | Cases de sucesso | 🔁 | Coberto pela página Experiência (histórico real de trabalho) |
| 35 | FAQ (5+ perguntas) | ✅ | 6 perguntas reais em Sobre (`Faq.tsx`), accordion nativo acessível |
| 36 | CTA fixo mobile | ✅ | Botão "Entrar em contato" fixo em telas ≤640px (`MobileCta.tsx`) |
| 37 | Skeleton loaders | ⛔ | Site 100% estático, sem fetch de dados assíncrono que justifique skeleton |

## Parte 4 — SEO, Legalidade e Analytics

| # | Ponto | Status | Nota |
|---|---|---|---|
| 38 | Meta tags e SEO básico | 🔁 | Title/description/alt/robots.txt/Schema.org/mapa: ✅ todos. Só o sub-item **OG image** ficou adaptado: `og-image.svg` (1200×630) em SVG puro — sem tooling de screenshot disponível no ambiente pra gerar PNG (ver limitação no README). Schema.org usa `Person` (não `LocalBusiness` — mais correto pra pessoa física) |
| 39 | Termos + Privacidade (LGPD) | ✅ | `/termos` e `/privacidade`, linkados no footer |
| 40 | Analytics (GA4) | 🔁 | Integração pronta e condicional (`Analytics.tsx`) — só carrega com `VITE_GA_MEASUREMENT_ID` definido. Aguardando você criar a propriedade GA4 e informar o ID |

## Resumo (40 pontos originais)

- **29 pontos** atendidos integralmente (✅).
- **6 pontos** adaptados com critério pro contexto de portfólio pessoal, nunca com dado fabricado (🔁): fonte única disponível (#10), ilustração honesta em vez de screenshot real de sistema interno (#24), feedback inline em vez de thank-you page (#32), cases cobertos pela página Experiência (#34), OG image em SVG por limitação de tooling + Schema.org como Person (#38), GA4 pronto aguardando ID (#40).
- **5 pontos** não aplicáveis, com justificativa (⛔): preços, avaliações de clientes e foto de equipe (não é SaaS/empresa — #25, #26, #27), breadcrumbs (site raso de 1 nível — #33), skeleton loaders (site estático, sem fetch assíncrono — #37).
- **Nenhum ponto** foi "atendido" inventando dado falso (preço, depoimento, equipe, screenshot).
