import fotos from '../../content/fotos.json'
import { ScrollReveal } from '../ScrollReveal'

export function Galeria() {
  return (
    <section id="galeria" className="scroll-mt-24 bg-[#efe9dc] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-oliva sm:text-4xl">
            {fotos.titulo}
          </h2>
          <p className="mt-3 font-sans text-base text-marrom">{fotos.subtitulo}</p>
        </ScrollReveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {fotos.itens.map((foto, index) => (
            <ScrollReveal key={foto.id} delay={index * 0.06}>
              <li>
                <figure className="overflow-hidden rounded-3xl bg-bege">
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  {foto.legenda ? (
                    <figcaption className="px-4 py-3 font-sans text-sm text-marrom">
                      {foto.legenda}
                    </figcaption>
                  ) : null}
                </figure>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
