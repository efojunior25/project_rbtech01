# Edson Junior — Portfólio (v2)

Site pessoal de Edson Feitosa de Oliveira Júnior, desenvolvedor Backend Java. Esta é a
**reescrita em React + Vite + TypeScript** do meu primeiro projeto público no GitHub
([project_rbtech01](../project_rbtech01-main)), um site institucional fictício em
HTML/CSS puro feito em 2022. A ideia deste repositório é servir tanto como portfólio
funcional quanto como demonstração prática da minha evolução técnica.

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

## Pendências conhecidas (TODO)

- **Formulário de contato** ainda simula o envio (`setTimeout`) — falta integrar com um
  serviço real (Formspree, EmailJS ou endpoint próprio) antes de considerar o formulário
  pronto para produção. Ver comentário `TODO` em [`src/pages/Contato.tsx`](src/pages/Contato.tsx).
- Configurar o subdomínio `perfilP1.prupru.org` no provedor de deploy (Vercel/Netlify) apontando pro DNS de `prupru.org`.
- Dados sensíveis (CID/PCD do currículo, telefone pessoal) foram deliberadamente omitidos do site público.

## Deploy

Recomendado: [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/) (mais
adequados para Vite do que GitHub Pages, que serviu bem a v1 estática).
