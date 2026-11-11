import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Garante scroll suave até âncoras (#sobre, etc.) após navegação. */
export function HashScroll() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      if (pathname !== '/') window.scrollTo(0, 0)
      return
    }

    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash, pathname])

  return null
}
