import { useEffect, useState } from 'react'

import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import {
  detectHeroMediaKind,
  HERO_MEDIA,
  type HeroMediaKind,
} from '../lib/hero-media'
import { HeroParticles } from './HeroParticles'

function HeroEstatico({ alt }: { alt: string }) {
  return (
    <img
      src={HERO_MEDIA.imagem}
      alt={alt}
      className="h-full w-full object-cover object-center"
      decoding="async"
      fetchPriority="high"
    />
  )
}

function HeroGif({ alt }: { alt: string }) {
  return (
    <img
      src={HERO_MEDIA.gif}
      alt={alt}
      className="h-full w-full object-cover object-center"
      decoding="async"
    />
  )
}

function HeroVideo({ alt }: { alt: string }) {
  return (
    <video
      className="h-full w-full object-cover object-center"
      autoPlay
      muted
      loop
      playsInline
      poster={HERO_MEDIA.imagem}
      aria-label={alt}
    >
      <source src={HERO_MEDIA.webm} type="video/webm" />
      <source src={HERO_MEDIA.mp4} type="video/mp4" />
      {/* Fallback se o vídeo não reproduzir */}
      <img src={HERO_MEDIA.gif} alt={alt} className="h-full w-full object-cover" />
    </video>
  )
}

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()
  // GIF já disponível; a detecção só sobe para vídeo se MP4/WebM existirem.
  const [kind, setKind] = useState<HeroMediaKind>('gif')

  useEffect(() => {
    let ativo = true

    void detectHeroMediaKind().then((detectado) => {
      if (ativo) setKind(detectado)
    })

    return () => {
      ativo = false
    }
  }, [])

  const alt =
    'Karina Ribeiro Nutricionista — composição com monograma KR, frutas e chá'

  // prefers-reduced-motion: quadro parado (PNG), sem loop/autoplay/partículas.
  if (reducedMotion) {
    return (
      <section
        id="inicio"
        className="relative h-svh w-full overflow-hidden bg-bege"
        aria-labelledby="hero-titulo"
      >
        <h1 id="hero-titulo" className="sr-only">
          Karina Ribeiro Nutricionista
        </h1>
        <div className="absolute inset-0">
          <HeroEstatico alt={alt} />
        </div>
      </section>
    )
  }

  return (
    <section
      id="inicio"
      className="relative h-svh w-full overflow-hidden bg-bege"
      aria-labelledby="hero-titulo"
    >
      {/* Título só para leitores de tela — a arte já traz logo e nome. */}
      <h1 id="hero-titulo" className="sr-only">
        Karina Ribeiro Nutricionista
      </h1>

      <div className="absolute inset-0">
        {kind === 'video' && <HeroVideo alt={alt} />}
        {kind === 'gif' && <HeroGif alt={alt} />}
        {kind === 'imagem' && <HeroEstatico alt={alt} />}
      </div>
      <HeroParticles />
    </section>
  )
}
