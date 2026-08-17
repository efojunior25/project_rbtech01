# Edson Junior — Portfólio (v2)

Site pessoal de Edson Feitosa de Oliveira Júnior, desenvolvedor Backend Java. Esta é a
**reescrita em React + Vite + TypeScript** do meu primeiro projeto público no GitHub
([project_rbtech01](../project_rbtech01-main)), um site institucional fictício em
HTML/CSS puro feito em 2022. A ideia deste repositório é servir tanto como portfólio
funcional quanto como demonstração prática da minha evolução técnica.

Este site passou por uma auditoria de design/UX/SEO/CRO contra um checklist de 40 pontos —
ver [CHECKLIST.md](CHECKLIST.md) para o detalhamento item a item.

## O que mudou da v1 para a v2

| | v1 (2022) | v2 (atual) |
|---|---|---|
| Stack | HTML + CSS puro, sem build | React + Vite + TypeScript |
| Navegação | 5 arquivos `.html` separados | Rotas client-side (`react-router-dom`) |
| Layout | Grid manual em `px` fixos, não responsivo | Flexbox/Grid com CSS Modules, responsivo |
| Estilo | 1 arquivo CSS global | CSS Modules por componente/página + tokens (`:root`) |
| Conteúdo | Empresa fictícia "MrXunim", texto placeholder | Portfólio real: experiência, competências e projetos de fato |
| Formulário | `<form action="">` sem função | Formulário controlado, validado, com feedback de envio |
| Testes | Nenhum | Vitest + React Testing Library (20 testes) |
| Acessibilidade | Sem landmarks, heading fora de ordem, sem skip-link | Landmarks semânticos, hierarquia de heading validada por teste, skip-link |
| SEO | `<title>` fixo igual em todas as páginas, sem meta description | Título/description/canonical/Open Graph por página (`react-helmet-async`), `robots.txt`, `sitemap.xml`, dados estruturados (JSON-LD) |
| CI | Nenhum | GitHub Actions rodando lint + testes + build a cada push/PR |
| Bugs conhecidos | `normalize.css` com capitalização inconsistente (quebra no GitHub Pages/Linux) | Resolvido — CSS Modules não depende de reset solto |

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/) + TypeScript
- [react-router-dom](https://reactrouter.com/) para roteamento client-side
- CSS Modules com tokens de design (`src/index.css`)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) para testes
- Oxlint + Prettier para lint/formatação

## Estrutura

```
src/
  components/   # Header, Footer, Layout, Grid (compartilhados)
  pages/        # Home, Experiencia, Competencias, Sobre, Contato
  test/         # testes transversais (ex: hierarquia de headings)
```

## Páginas

- **Home** — projeto em destaque (Portal RD), empresas onde já atuei, certificações recentes.
- **Experiência** — timeline completa da trajetória profissional, do técnico em segurança eletrônica ao backend Java atual.
- **Competências** — categorias técnicas (Backend, Frontend, Banco de Dados, Cloud/DevOps, Qualidade, etc.), extraídas diretamente do currículo.
- **Sobre** — resumo profissional, formação acadêmica em andamento e diferenciais.
- **Contato** — formulário de contato (validado, ainda sem backend real — ver TODO abaixo) e links diretos para LinkedIn/GitHub.

## Rodando localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm test          # roda a suíte de testes (Vitest)
npm run build     # build de produção (inclui checagem de tipos)
npm run lint       # oxlint
```

## Cobertura de testes

20 testes cobrindo:
- Navegação e estado ativo do menu (`Header`)
- Roteamento das 5 páginas (`App`)
- Hierarquia de headings sem saltos de nível em todas as rotas (acessibilidade)
- Fluxo completo do formulário de contato: validação obrigatória, envio e feedback de sucesso
- Conteúdo real das páginas de Experiência, Competências e Home (links e textos-chave)
- `Seo`: título/description/canonical corretos e sem duplicar tags no `<head>`

## SEO

Cada página define título, descrição, canonical e tags Open Graph/Twitter próprias via o
componente [`Seo`](src/components/Seo.tsx) (`react-helmet-async`). Também há `robots.txt`,
`sitemap.xml` e dados estruturados `Person` (JSON-LD) em `index.html`.

**Limitação conhecida:** este é um SPA sem SSR/pré-renderização. O Helmet só atualiza as
tags depois que o JavaScript roda — funciona bem para o Googlebot (que executa JS), mas
crawlers de redes sociais que não executam JS (preview do WhatsApp/Twitter, por exemplo)
só verão o `og:title`/`og:description` genéricos definidos estaticamente em `index.html`,
não o específico de cada rota. Resolver isso definitivamente exigiria migrar para
Next.js/SSR ou usar pré-renderização estática (ex: `vite-plugin-ssg`).

> **Domínio:** o site deve ficar publicado em `perfilP1.prupru.org` — é o valor já usado
> em `Seo.tsx`, `robots.txt`, `sitemap.xml` e nos dados estruturados de `index.html`.

**OG image:** `public/og-image.svg` é um cartão 1200×630 construído em SVG puro (sem
depender de screenshot). A maioria das plataformas atuais renderiza SVG em preview de
link, mas algumas (principalmente clientes de e-mail e versões antigas de apps) só
aceitam JPG/PNG. Se precisar de compatibilidade máxima, converta esse SVG pra PNG (ex:
abrindo `public/og-image.svg` no navegador, print/screenshot em 1200×630, ou usando
`npx sharp-cli` / Figma / Squoosh) e troque a extensão nas referências em `Seo.tsx` e
`index.html`.

## Analytics (GA4)

Integração condicional: sem `VITE_GA_MEASUREMENT_ID` definido, nenhum script de
analytics carrega (padrão privacy-first, nada pra desativar). Para ativar:

1. Crie uma propriedade GA4 em [analytics.google.com](https://analytics.google.com) e
   pegue o Measurement ID (`G-XXXXXXXXXX`) em Admin → Fluxos de dados.
2. **Local:** copie `.env.example` para `.env` e preencha `VITE_GA_MEASUREMENT_ID`.
3. **Deploy (GitHub Actions):** adicione o mesmo valor como secret do repositório em
   Settings → Secrets and variables → Actions → `VITE_GA_MEASUREMENT_ID`. O workflow
   `deploy.yml` já está preparado para injetá-lo no build.

Ver [`src/components/Analytics.tsx`](src/components/Analytics.tsx).

## Pendências conhecidas (TODO)

- **Formulário de contato** ainda simula o envio (`setTimeout`) — falta integrar com um
  serviço real (Formspree, EmailJS ou endpoint próprio) antes de considerar o formulário
  pronto para produção. Ver comentário `TODO` em [`src/pages/Contato.tsx`](src/pages/Contato.tsx).
- Adicionar o registro DNS `CNAME perfilP1 → efojunior25.github.io` no provedor do
  domínio `prupru.org` (esse passo não é feito por código, é externo).
- Configurar o secret `VITE_GA_MEASUREMENT_ID` no GitHub quando o GA4 estiver criado.
- Dados sensíveis (CID/PCD do currículo, telefone pessoal) foram deliberadamente omitidos do site público.

## Deploy

Publicado via **GitHub Pages**, com deploy automático em todo push para `main`
(`.github/workflows/deploy.yml`: build + testes + `actions/deploy-pages`).

Peculiaridades de rodar um SPA (React Router) no GitHub Pages:
- `public/CNAME` define o domínio customizado `perfilP1.prupru.org`.
- `public/404.html` + o script equivalente em `index.html` implementam o
  [truque de redirect do rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages),
  necessário porque o Pages não sabe rotear `/experiencia`, `/competencias` etc.
  como o React Router — sem isso, recarregar a página em qualquer rota que não seja `/`
  resultaria em 404.

Configuração única (feita uma vez, fora do código): em Settings → Pages do repositório,
"Build and deployment source" = **GitHub Actions**; e no provedor de DNS do `prupru.org`,
um registro `CNAME` apontando `perfilP1` para `efojunior25.github.io`.
