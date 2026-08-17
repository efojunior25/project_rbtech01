# Edson Feitosa — Portfólio (v2)

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
| Testes | Nenhum | Vitest + React Testing Library (19 testes) |
| Acessibilidade | Sem landmarks, heading fora de ordem, sem skip-link | Landmarks semânticos, hierarquia de heading validada por teste, skip-link |
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

19 testes cobrindo:
- Navegação e estado ativo do menu (`Header`)
- Roteamento das 5 páginas (`App`)
- Hierarquia de headings sem saltos de nível em todas as rotas (acessibilidade)
- Fluxo completo do formulário de contato: validação obrigatória, envio e feedback de sucesso
- Conteúdo real das páginas de Experiência, Competências e Home (links e textos-chave)

## Pendências conhecidas (TODO)

- **Formulário de contato** ainda simula o envio (`setTimeout`) — falta integrar com um
  serviço real (Formspree, EmailJS ou endpoint próprio) antes de considerar o formulário
  pronto para produção. Ver comentário `TODO` em [`src/pages/Contato.tsx`](src/pages/Contato.tsx).
- SEO por página (meta tags dinâmicas) e CI (GitHub Actions rodando lint + testes + build) ainda não configurados.
- Dados sensíveis (CID/PCD do currículo, telefone pessoal) foram deliberadamente omitidos do site público.

## Deploy

Recomendado: [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/) (mais
adequados para Vite do que GitHub Pages, que serviu bem a v1 estática).
