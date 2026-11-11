import {
  ClipboardList,
  Salad,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'

import servicos from '../../content/servicos.json'
import { ScrollReveal } from '../ScrollReveal'

const ICONES: Record<string, LucideIcon> = {
  Stethoscope,
  ClipboardList,
  Salad,
}

export function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-[#efe9dc] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-oliva sm:text-4xl">
            {servicos.titulo}
          </h2>
          <p className="mt-3 font-sans text-base text-marrom">{servicos.subtitulo}</p>
        </ScrollReveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.itens.map((item, index) => {
            const Icone = ICONES[item.icone] ?? Stethoscope
            return (
              <ScrollReveal key={item.id} delay={index * 0.06}>
                <li className="flex h-full flex-col rounded-3xl bg-bege p-6 shadow-[0_1px_0_rgba(94,107,78,0.08)]">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-oliva/10 text-oliva">
                    <Icone size={22} aria-hidden />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-oliva">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-marrom">
                    {item.descricao}
                  </p>
                </li>
              </ScrollReveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
