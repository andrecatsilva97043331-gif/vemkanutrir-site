# Karina Ribeiro — Site institucional

Site estático da nutricionista Karina Ribeiro (React + Vite + TypeScript + Tailwind CSS), pronto para Netlify ou Vercel.

**Repositório (alvo):** [github.com/andrecatsilva97043331-gif/vemkanutrir-site](https://github.com/andrecatsilva97043331-gif/vemkanutrir-site)

> Se o link ainda der 404, o push inicial ainda não foi feito — veja [Publicar no GitHub](#publicar-no-github) abaixo.

## Rodar localmente

Requisitos: Node.js 20+.

```bash
cd karina-ribeiro-site
npm install
npm run dev
```

Build e preview:

```bash
npm run build
npm run preview
```

Com pnpm: `pnpm install`, `pnpm dev`, `pnpm build`.

## Publicar no GitHub

Conta: `andrecatsilva97043331-gif` · Repo público: `vemkanutrir-site`

Na pasta do projeto (já com commit local em `main`):

```bash
cd karina-ribeiro-site
gh auth login   # se ainda não autenticado
gh repo create andrecatsilva97043331-gif/vemkanutrir-site \
  --public \
  --description "Site institucional Karina Ribeiro | Nutricionista" \
  --source=. \
  --remote=origin \
  --push
```

Não use `--force` nem faça push em outro repositório existente.

## Deploy em 1 clique (Netlify — preferido)

1. Abra: [app.netlify.com/start](https://app.netlify.com/start) → **Import an existing project** → GitHub.
2. Autorize o Netlify na conta `andrecatsilva97043331-gif` e escolha **`vemkanutrir-site`**.
3. Confirme (já vem no `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. HTTPS fica ativo automaticamente.
5. **Domínio próprio:** Site settings → Domain management → Add custom domain → siga o DNS indicado.

SPA redirects e headers de segurança (CSP, HSTS, X-Frame-Options, etc.) já estão em `netlify.toml`.

### Alternativa Vercel

1. [vercel.com/new](https://vercel.com/new) → Import `vemkanutrir-site`.
2. Framework: Vite · Output: `dist` (também coberto por `vercel.json`).
3. Domínio: Project → Settings → Domains.

## Decap CMS + Git Gateway (Netlify)

O admin está em `/admin/` (`public/admin/`). **Não há tokens no front.**

Depois do site no Netlify, André precisa:

1. **Site settings → Identity → Enable Identity**
2. Identity → **Registration:** Invite only (recomendado)
3. Identity → **Services → Git Gateway → Enable**
4. Convidar o e-mail editor (Identity → Invite users)
5. Abrir `https://SEU-SITE.netlify.app/admin/` e entrar com o convite

Para editar localmente: `npm run dev` + em outro terminal `npx decap-server`, depois `http://localhost:5173/admin/`.

## Estrutura útil

| Caminho | Uso |
| --- | --- |
| `src/components/Hero.tsx` | Hero (GIF/vídeo/PNG) |
| `src/content/*.json` | Textos editáveis (Sobre, serviços, depoimentos, galeria) |
| `public/media/` | Logo, hero GIF/PNG |
| `public/fotos/` | Fotos da galeria (preferir WebP) |
| `public/admin/` | Decap CMS |
| `netlify.toml` / `vercel.json` | Headers de segurança + SPA |

## Mídia do hero

Prioridade: `hero.mp4` / `hero.webm` → `hero.gif` → `hero-branding.png`.  
Com `prefers-reduced-motion: reduce`, usa o PNG estático.

## Galeria / fotos

Coloque arquivos em `public/fotos/` (WebP quando possível) e atualize `src/content/fotos.json` (ou pelo Decap).  
Hoje há apenas placeholders SVG — substitua pelas fotos reais da Karina.

## Pendências da Karina (conteúdo)

- [ ] Textos reais de **formação** e **abordagem** (Sobre)
- [ ] **Foto profissional** (Sobre) e fotos da **galeria** (WebP)
- [ ] Descrições reais dos **serviços**
- [ ] **Depoimentos** com nomes/autorização de uso
- [ ] Revisar domínio canônico em Open Graph (`SITE.url` em `src/lib/site.ts`)
- [ ] Credenciais CRN e demais menções legais, se desejar no rodapé
- [ ] Opcional: `hero.mp4` / `hero.webm` para melhor performance que GIF

## Privacidade

Não há formulário nem analytics nesta versão. Política: `/politica-de-privacidade`.  
Agendamento só via WhatsApp externo.
