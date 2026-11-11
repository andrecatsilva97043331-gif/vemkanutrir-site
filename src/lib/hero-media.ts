/**
 * Caminhos da mídia do hero (pasta `public/media/`).
 *
 * Ativo: `hero.gif` (loop nativo do browser).
 * Se existirem `hero.mp4` / `hero.webm`, a detecção prioriza vídeo → GIF → imagem.
 * `hero-branding.png` serve de poster / quadro parado (reduced-motion).
 */
export const HERO_MEDIA = {
  /** Quadro estático / poster (reduced-motion e fallback). */
  imagem: '/media/hero-branding.png',
  gif: '/media/hero.gif',
  mp4: '/media/hero.mp4',
  webm: '/media/hero.webm',
} as const

export type HeroMediaKind = 'video' | 'gif' | 'imagem'

async function arquivoExiste(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: 'HEAD' })
    return res.ok
  } catch {
    return false
  }
}

/** Prioridade: MP4/WebM → GIF → imagem estática. */
export async function detectHeroMediaKind(): Promise<HeroMediaKind> {
  const [temMp4, temWebm, temGif] = await Promise.all([
    arquivoExiste(HERO_MEDIA.mp4),
    arquivoExiste(HERO_MEDIA.webm),
    arquivoExiste(HERO_MEDIA.gif),
  ])

  if (temMp4 || temWebm) return 'video'
  if (temGif) return 'gif'
  return 'imagem'
}
