import { MessageCircle } from 'lucide-react'

import { SITE } from '../../lib/site'
import { ScrollReveal } from '../ScrollReveal'

export function Agendamento() {
  return (
    <section
      id="agendamento"
      className="scroll-mt-24 bg-oliva px-4 py-20 text-bege sm:px-6"
    >
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Agende sua consulta
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-bege/85">
          Sem formulários por aqui — o atendimento começa em uma conversa no
          WhatsApp, no seu ritmo.
        </p>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-dourado px-8 py-4 font-sans text-base font-semibold text-oliva shadow-sm transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bege"
        >
          <MessageCircle size={22} aria-hidden />
          Agendar pelo WhatsApp
        </a>
      </ScrollReveal>
    </section>
  )
}
