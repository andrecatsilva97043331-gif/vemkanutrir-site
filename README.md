# Karina Ribeiro — Site institucional

Site estático da nutricionista Karina Ribeiro (React + Vite + TypeScript + Tailwind CSS), pronto para Netlify ou Vercel.

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

## Estrutura útil

| Caminho | Uso |
| --- | --- |
| `src/components/Hero.tsx` | Hero (GIF/vídeo/PNG) |
| `src/content/*.json` | Textos editáveis (Sobre, serviços, depoimentos, galeria) |
| `public/media/` | Logo, hero GIF/PNG |
| `public/fotos/` | Fotos da galeria (preferir WebP) |
| `public/admin/` | Decap CMS |
| `netlify.toml` / `vercel.json` | Headers de segurança + SPA |

## Editar conteúdo no Decap

1. Em desenvolvimento, com o site rodando (`npm run dev`), em outro terminal:
   ```bash
   npx decap-server
   ```
   Abra `http://localhost:5173/admin/` (proxy local via `local_backend: true`).
2. Em produção na **Netlify**: ative **Identity** + **Git Gateway**, registre o usuário editor e acesse `/admin/`.
3. Login é via Netlify Identity / GitHub — **não** coloque tokens no front nem no `config.yml`.
4. Coleções: Sobre, Serviços, Depoimentos, Galeria.

Após publicar no CMS, faça o redeploy do site (ou deixe o CI rebuildar a partir do commit).

## Publicar (Netlify)

1. Conecte o repositório no Netlify.
2. Build command: `npm run build` · Publish: `dist`.
3. HTTPS é forçado pelo Netlify; headers (CSP, HSTS, etc.) estão em `netlify.toml`.
4. Domínio próprio: Domain settings → Add custom domain → DNS conforme o painel.

## Publicar (Vercel)

1. Importe o repositório na Vercel.
2. Framework preset: Vite · Output: `dist`.
3. Headers e rewrite SPA em `vercel.json`.
4. Domínio próprio: Project → Settings → Domains.

## Mídia do hero

Prioridade automática: `hero.mp4` / `hero.webm` → `hero.gif` → `hero-branding.png`.  
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
