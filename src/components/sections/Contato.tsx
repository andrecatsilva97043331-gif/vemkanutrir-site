import { Mail, MessageCircle } from 'lucide-react'

import { SITE } from '../../lib/site'
import { InstagramIcon } from '../icons/InstagramIcon'
import { ScrollReveal } from '../ScrollReveal'

export function Contato() {
  return (
    <section id="contato" className="scroll-mt-24 bg-bege px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-oliva sm:text-4xl">
            Contato
          </h2>
          <p className="mt-3 font-sans text-base text-marrom">
            Fale diretamente pelos canais oficiais. Não coletamos dados de saúde
            neste site.
          </p>
        </ScrollReveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          <ScrollReveal>
            <li>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-2 rounded-3xl border border-oliva/10 bg-[#faf7f1] p-6 transition hover:border-dourado/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva"
              >
                <MessageCircle className="text-oliva" size={22} aria-hidden />
                <span className="font-display text-lg font-semibold text-oliva">
                  WhatsApp
                </span>
                <span className="font-sans text-sm text-marrom">
                  {SITE.whatsappExibicao}
                </span>
              </a>
            </li>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex h-full flex-col gap-2 rounded-3xl border border-oliva/10 bg-[#faf7f1] p-6 transition hover:border-dourado/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva"
              >
                <Mail className="text-oliva" size={22} aria-hidden />
                <span className="font-display text-lg font-semibold text-oliva">
                  E-mail
                </span>
                <span className="font-sans text-sm text-marrom break-all">
                  {SITE.email}
                </span>
              </a>
            </li>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <li>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-2 rounded-3xl border border-oliva/10 bg-[#faf7f1] p-6 transition hover:border-dourado/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva"
              >
                <InstagramIcon className="text-oliva" size={22} />
                <span className="font-display text-lg font-semibold text-oliva">
                  Instagram
                </span>
                <span className="font-sans text-sm text-marrom">
                  @{SITE.instagram}
                </span>
              </a>
            </li>
          </ScrollReveal>
        </ul>
      </div>
    </section>
  )
}
