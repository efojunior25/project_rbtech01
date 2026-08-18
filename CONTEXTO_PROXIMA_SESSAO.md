# Contexto para retomar — Portfólio Edson Junior

Última atualização: 17/08/2026 (madrugada). Leia isto no início da próxima sessão pra
não perder contexto.

## Estado atual (tudo funcionando)

- **Repositório:** `github.com/efojunior25/project_rbtech01` (tornado **público** pra
  viabilizar GitHub Pages no plano gratuito). Branch `main` = v2 (React). A v1 original
  (HTML/CSS puro, 2022) está preservada na tag `v1-html-css` e no histórico de commits.
- **Local:** pasta `project_rbtech01-v2/` (irmã de `project_rbtech01-main/`, que é só a
  v1 congelada, sem git). O remoto `origin` já está configurado em `project_rbtech01-v2`.
- **No ar:** `http://perfilp1.prupru.org` (GitHub Pages, deploy automático via
  `.github/workflows/deploy.yml` a cada push em `main`). Site já reflete o último commit
  (`2f3e1c2`), incluindo a auditoria dos 40 pontos de design/SEO/CRO.
- **Testes:** 27 passando (Vitest). Lint (oxlint) e build limpos. CI roda em todo push/PR.
- **Documentação já escrita:** [README.md](README.md) (visão geral + comparativo v1→v2),
  [CHECKLIST.md](CHECKLIST.md) (auditoria dos 40 pontos, item a item).

## Pendências (nesta ordem sugerida)

### 1. Certificado HTTPS do domínio (automático, só aguardar)
GitHub ainda não emitiu o certificado Let's Encrypt pra `perfilp1.prupru.org` (checado
pela última vez às 23:35 de 17/08 — `https_enforced: false`, `curl https://` retorna
timeout). O DNS já propagou certo (CNAME → `efojunior25.github.io`, confirmado via
`nslookup`). Isso costuma levar de minutos a ~24h depois que o domínio é detectado.
**Ação:** só checar de novo depois. Comando rápido:
```bash
curl -s -o /dev/null -w "%{http_code}\n" https://perfilp1.prupru.org/
gh api repos/efojunior25/project_rbtech01/pages -q '.https_enforced'
```
Se depois de ~24h ainda estiver `false`, vale remover e re-adicionar o CNAME via API
(`gh api -X DELETE .../pages` não existe — na prática, trocar o cname pra outro valor e
voltar costuma forçar nova tentativa de emissão).

### 2. Google Analytics (GA4)
O código já está pronto e é condicional — só carrega se a env var existir
(`src/components/Analytics.tsx`, ver `.env.example`). Falta:
1. Você criar a propriedade em [analytics.google.com](https://analytics.google.com) e
   pegar o Measurement ID (`G-XXXXXXXXXX`). Passo a passo já foi explicado numa sessão
   anterior — resumo: Admin → Criar conta/propriedade → Fluxos de dados → Web →
   `https://perfilP1.prupru.org`.
2. Adicionar o ID como **secret do GitHub**: Settings → Secrets and variables → Actions
   → New repository secret → nome `VITE_GA_MEASUREMENT_ID`, valor o ID copiado. O
   workflow `deploy.yml` já está preparado pra injetar esse secret no build.
3. (Opcional, se eu for testar localmente) copiar `.env.example` pra `.env` e preencher.

### 3. Formulário de contato — ainda não envia de verdade
`src/pages/Contato.tsx` só simula o envio (`setTimeout`, tem `TODO` comentado no
código). Precisa integrar com um serviço real antes de considerar pronto:
- **Formspree** (mais simples, free tier ok) ou **EmailJS** (envia direto do client) ou
  endpoint próprio.
- Decisão pendente: qual serviço usar. Formspree costuma ser a opção com menos fricção
  pra um projeto desse porte.

### 4. OG image em SVG — funciona, mas não é 100% universal
`public/og-image.svg` foi construído sem tooling de screenshot disponível no ambiente
anterior. A maioria das plataformas (LinkedIn, Discord, Slack, WhatsApp) renderiza SVG
em preview de link, mas alguns clientes de e-mail antigos só aceitam PNG/JPG. Se algum
dia notar que o preview não aparece em algum lugar específico, converter pra PNG
(abrir o SVG num navegador, print em 1200×630, ou `npx sharp-cli`) e trocar a referência
em `src/components/Seo.tsx` e `index.html`.

### 5. (Menor) Verificar propagação/preview em produção
Depois que o HTTPS estiver ativo, vale conferir ao vivo:
- Navegar pelas 5 páginas + 404 + Privacidade/Termos no domínio real.
- Testar o CTA mobile (`resize` pra ≤640px) e a FAQ (accordion nativo).
- Rodar Lighthouse (Chrome DevTools) pra ter um número de referência de performance/SEO/
  acessibilidade — ainda não foi feito.

## Decisões já tomadas (não precisa perguntar de novo)

- Marca do site: **"Edson Junior"** (nome curto/logo), nome completo real
  ("Edson Feitosa de Oliveira Júnior") só em campos formais (author, JSON-LD, texto do
  Sobre).
- Domínio definitivo: `perfilP1.prupru.org` (não é mais placeholder).
- Deploy via **GitHub Pages** (não Vercel/Netlify — decisão explícita do usuário).
- Checklist de 40 pontos (design/UX/SEO/CRO) foi tratado com adaptação de critério: nada
  de dado fabricado (sem preço fake, depoimento fake, equipe fake). Ver justificativas
  completas em `CHECKLIST.md`.
- Dados sensíveis do currículo (CID/PCD, telefone pessoal) foram deliberadamente
  **excluídos** do site público.

## Comandos úteis

```bash
cd "project_rbtech01-v2"
npm run dev        # servidor local
npm test            # 27 testes (Vitest)
npm run lint         # oxlint
npm run build        # build de produção

# status do deploy
gh run list --repo efojunior25/project_rbtech01 --limit 5
gh api repos/efojunior25/project_rbtech01/pages
```
