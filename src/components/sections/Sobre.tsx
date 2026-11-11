import { ScrollReveal } from '../ScrollReveal'
import sobre from '../../content/sobre.json'

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-bege px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <ScrollReveal>
          <figure className="overflow-hidden rounded-3xl">
            <img
              src={sobre.foto}
              alt={sobre.fotoAlt}
              width={800}
              height={600}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p className="mb-2 font-sans text-sm font-medium tracking-wide text-marrom">
            Conheça
          </p>
          <h2 className="font-display text-3xl font-semibold text-oliva sm:text-4xl">
            {sobre.titulo}
          </h2>
          <p className="mt-3 font-sans text-base text-marrom">{sobre.subtitulo}</p>
          <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-oliva/90">
            <p>
              <span className="font-medium text-oliva">Formação: </span>
              {sobre.formacao}
            </p>
            <p>
              <span className="font-medium text-oliva">Abordagem: </span>
              {sobre.abordagem}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
