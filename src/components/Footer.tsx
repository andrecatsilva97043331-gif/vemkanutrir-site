import { Mail, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { NAV_LINKS, SITE } from '../lib/site'
import { InstagramIcon } from './icons/InstagramIcon'

export function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="border-t border-oliva/10 bg-oliva text-bege">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={SITE.logo}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-bege object-cover"
            />
            <div>
              <p className="font-display text-xl font-semibold">{SITE.nome}</p>
              <p className="font-sans text-sm text-bege/80">Nutricionista</p>
            </div>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-bege/85">
            Atendimento humanizado e planos individualizados. Conteúdo educativo —
            não substitui consulta presencial.
          </p>
        </div>

        <div>
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-wide text-dourado">
            Navegação
          </p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-bege/90 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dourado"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/politica-de-privacidade"
                className="font-sans text-sm text-bege/90 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dourado"
              >
                Política de privacidade
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-wide text-dourado">
            Contato
          </p>
          <ul className="space-y-3 font-sans text-sm">
            <li>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dourado"
              >
                <MessageCircle size={16} aria-hidden />
                WhatsApp {SITE.whatsappExibicao}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dourado"
              >
                <Mail size={16} aria-hidden />
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dourado"
              >
                <InstagramIcon size={16} />
                @{SITE.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bege/15 px-4 py-4 text-center font-sans text-xs text-bege/70 sm:px-6">
        © {ano} {SITE.nome}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
