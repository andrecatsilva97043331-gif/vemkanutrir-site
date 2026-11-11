import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

export function usePrefersReducedMotion(): boolean {
  const [reduzido, setReduzido] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(QUERY).matches
  })

  useEffect(() => {
    const media = window.matchMedia(QUERY)
    const onChange = () => setReduzido(media.matches)

    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return reduzido
}
