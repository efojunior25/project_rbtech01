# Próximos passos — Portfólio v2 (Edson Junior)

Estado em que ficou o projeto hoje. Retomar por aqui.

## ✅ Feito

- Reescrita completa em React + Vite + TypeScript (`project_rbtech01-v2`), a partir do
  projeto original em HTML/CSS puro (`project_rbtech01-main`).
- Conteúdo real do currículo/LinkedIn nas páginas Home, Experiência, Competências, Sobre e Contato.
- Acessibilidade: hierarquia de headings corrigida, skip-link, landmarks semânticos.
- 20 testes automatizados (Vitest + Testing Library), lint (oxlint) e build passando.
- SEO por página (`react-helmet-async`): título/description/canonical/Open Graph próprios,
  `robots.txt`, `sitemap.xml`, dados estruturados (JSON-LD).
- CI configurado em `.github/workflows/ci.yml` (lint + testes + build a cada push/PR).
- Marca atualizada para "Edson Junior" (nome completo real preservado nos campos formais).
- Domínio de destino definido: `perfilP1.prupru.org` (já configurado em todo o código).
- Repositório git local inicializado, branch `main`, commits feitos.

## ⏭️ Pendente (nesta ordem sugerida)

1. **Publicar no GitHub** — criar o repositório remoto e dar push. Não fiz isso porque
   publicar código é uma ação que só você deve confirmar/executar:
   ```bash
   cd project_rbtech01-v2
   gh repo create project_rbtech01-v2 --public --source=. --push
   ```
   (ou criar manualmente no GitHub e `git remote add origin <url> && git push -u origin main`)

2. **Deploy** — Vercel ou Netlify (recomendado no README). Conectar o repo do GitHub.

3. **Configurar o domínio `perfilP1.prupru.org`** — no provedor de deploy, adicionar o
   domínio customizado e apontar o DNS do `prupru.org` (registro CNAME/A) pra ele. Isso
   só dá pra fazer com acesso ao painel do domínio/DNS.

4. **Formulário de contato** — ainda simula o envio (`setTimeout` em `Contato.tsx`, tem um
   `TODO` marcado no código). Falta integrar com Formspree, EmailJS ou endpoint próprio
   antes de considerar pronto pra produção.

5. (Opcional) Migrar para Next.js/SSR se quiser SEO mais forte para redes sociais sem JS —
   está documentado como limitação conhecida no README.

## Onde tudo está

- Projeto v1 (original, preservado como "antes"): `project_rbtech01-main/`
- Projeto v2 (atual): `project_rbtech01-v2/`
- Plano de evolução original: `project_rbtech01-main/PLANO_EVOLUCAO.md`
- README do v2 (com tabela comparativa v1→v2): `project_rbtech01-v2/README.md`
