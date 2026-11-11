# Karina Ribeiro — Site institucional

Site estático da nutricionista Karina Ribeiro (React + Vite + TypeScript + Tailwind CSS).

**Hospedagem preferida:** Firebase Hosting + GitHub Actions  
**Repositório (alvo):** [github.com/andrecatsilva97043331-gif/vemkanutrir-site](https://github.com/andrecatsilva97043331-gif/vemkanutrir-site)

> Se o link ainda der 404, o push inicial ainda não foi feito — veja [Publicar no GitHub](#publicar-no-github).

## Rodar localmente

```bash
cd karina-ribeiro-site
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Publicar no GitHub

Conta: `andrecatsilva97043331-gif` · Repo público: `vemkanutrir-site`

```bash
cd karina-ribeiro-site
gh auth login
gh repo create andrecatsilva97043331-gif/vemkanutrir-site \
  --public \
  --description "Site institucional Karina Ribeiro | Nutricionista" \
  --source=. \
  --remote=origin \
  --push
```

Não use `--force` nem faça push em outro repositório.

## Firebase Hosting

Configs no repo:

| Arquivo | Função |
| --- | --- |
| `firebase.json` | `public: dist`, SPA rewrite, headers de segurança |
| `.firebaserc` | `default` → projectId `vemkanutrir-site` (ajuste se o Console criar outro ID) |
| `.github/workflows/firebase-hosting.yml` | Deploy automático no push em `main` |

### 1) Criar o projeto no Firebase (André)

1. Abra [console.firebase.google.com](https://console.firebase.google.com/) com a conta Google desejada.
2. **Add project** → nome `vemkanutrir-site` (aceite o ID sugerido se o nome estiver ocupado).
3. Desative Analytics se não for usar (preferível neste site).
4. No projeto: **Build → Hosting → Get started**.
5. Se o ID real for diferente de `vemkanutrir-site`, edite `.firebaserc` e `projectId` no workflow.

CLI (opcional, no desktop autenticado):

```bash
npm i -g firebase-tools   # ou: npx firebase-tools
firebase login
firebase projects:create vemkanutrir-site
firebase use vemkanutrir-site
npm run build && firebase deploy --only hosting
```

### 2) Secret do GitHub Actions (obrigatório para CI)

No repo → **Settings → Secrets and variables → Actions → New repository secret**:

**Opção A (recomendada) — Service Account**

1. Google Cloud Console do mesmo projeto → IAM → Service Accounts → Create.
2. Papel: **Firebase Hosting Admin** (e Viewer no projeto, se pedido).
3. Keys → Add key → JSON → copie o JSON inteiro.
4. Secret name: `FIREBASE_SERVICE_ACCOUNT` · valor: conteúdo do JSON.

**Opção B — Token CI**

```bash
firebase login:ci
```

Crie o secret `FIREBASE_TOKEN` e adapte o workflow (ver comentários em `.github/workflows/firebase-hosting.yml`).

**Nunca** commite tokens, JSON de service account ou `.env`.

### 3) Domínio customizado

Firebase Console → Hosting → **Add custom domain** → siga a verificação DNS.

URL padrão após o primeiro deploy: `https://vemkanutrir-site.web.app` (ou `*.firebaseapp.com`).

## Decap CMS com Firebase (importante)

O Decap em `/admin/` estava pensado para **Netlify Identity + Git Gateway**. No Firebase **não há** Identity/Git Gateway equivalentes.

**Caminho mais simples com Firebase + GitHub:**

1. Em `public/admin/config.yml`, troque o backend para GitHub:

```yaml
backend:
  name: github
  repo: andrecatsilva97043331-gif/vemkanutrir-site
  branch: main
```

2. Crie um **OAuth App** no GitHub (Settings → Developer settings) **ou** use um proxy pronto (ex. [decap-proxy / netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider) hospedado em Cloud Run / Cloud Functions).
3. Configure `base_url` / `auth_endpoint` do proxy no `config.yml` conforme a doc do Decap.
4. Editores fazem login com GitHub; commits vão direto ao repo → o Action redeploya o Hosting.

Alternativa ainda mais simples: editar os JSON em `src/content/` pelo próprio GitHub (web ou Codespaces) e deixar o CI publicar — sem Decap até o OAuth estar pronto.

Local: `npm run dev` + `npx decap-server` continua válido com `local_backend: true`.

## Netlify / Vercel (opcional)

`netlify.toml` e `vercel.json` permanecem no repo como alternativa. Preferência do projeto agora é **Firebase Hosting**.

## Estrutura útil

| Caminho | Uso |
| --- | --- |
| `src/components/Hero.tsx` | Hero (GIF/vídeo/PNG) |
| `src/content/*.json` | Textos editáveis |
| `public/media/` | Logo, hero |
| `public/fotos/` | Galeria |
| `public/admin/` | Decap CMS |
| `firebase.json` | Hosting |

## Pendências da Karina (conteúdo)

- [ ] Formação / abordagem (Sobre)
- [ ] Foto profissional e fotos da galeria (WebP)
- [ ] Descrições dos serviços e depoimentos autorizados
- [ ] Revisar `SITE.url` em `src/lib/site.ts` após o domínio final
- [ ] Opcional: `hero.mp4` / `hero.webm`

## Privacidade

Sem formulário nem analytics nesta versão. Política: `/politica-de-privacidade`.
