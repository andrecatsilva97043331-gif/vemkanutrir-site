import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react'

import depoimentos from '../../content/depoimentos.json'
import { ScrollReveal } from '../ScrollReveal'

export function Depoimentos() {
  const itens = depoimentos.itens
  const [indice, setIndice] = useState(0)
  const atual = itens[indice]

  const anterior = () => setIndice((i) => (i - 1 + itens.length) % itens.length)
  const proximo = () => setIndice((i) => (i + 1) % itens.length)

  return (
    <section id="depoimentos" className="scroll-mt-24 bg-bege px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl font-semibold text-oliva sm:text-4xl">
            {depoimentos.titulo}
          </h2>
          <p className="mt-3 font-sans text-base text-marrom">{depoimentos.subtitulo}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div
            className="relative mt-10 rounded-3xl border border-oliva/10 bg-[#faf7f1] px-6 py-10 sm:px-10"
            aria-roledescription="carrossel"
            aria-label="Depoimentos de pacientes"
          >
            <Quote className="mb-4 text-dourado" size={28} aria-hidden />
            <blockquote>
              <p className="font-display text-xl leading-relaxed text-oliva sm:text-2xl">
                “{atual.texto}”
              </p>
              <footer className="mt-6 font-sans text-sm font-medium text-marrom">
                — {atual.nome}
              </footer>
            </blockquote>

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="font-sans text-xs text-marrom/80" aria-live="polite">
                {indice + 1} / {itens.length}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={anterior}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-oliva/25 text-oliva transition hover:bg-oliva/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={18} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={proximo}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-oliva/25 text-oliva transition hover:bg-oliva/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={18} aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
