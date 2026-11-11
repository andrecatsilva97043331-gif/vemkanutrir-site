import { Menu, X } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { NAV_LINKS, SITE } from '../lib/site'

export function Header() {
  const [aberto, setAberto] = useState(false)
  const menuId = useId()
  const location = useLocation()

  useEffect(() => {
    setAberto(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [aberto])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-oliva/10 bg-bege/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/#inicio"
          className="flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva"
          onClick={() => setAberto(false)}
        >
          <img
            src={SITE.logo}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="font-display text-lg font-semibold text-oliva sm:text-xl">
            {SITE.nome}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 font-sans text-sm text-marrom transition-colors hover:bg-oliva/5 hover:text-oliva focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-oliva/20 p-2 text-oliva lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva"
          aria-expanded={aberto}
          aria-controls={menuId}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      <div
        id={menuId}
        className={`border-t border-oliva/10 bg-bege lg:hidden ${aberto ? 'block' : 'hidden'}`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 font-sans text-base text-marrom hover:bg-oliva/5 hover:text-oliva focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva"
              onClick={() => setAberto(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
