import { motion, useReducedMotion } from 'framer-motion'

const FOLHAS = [
  { left: '8%', top: '18%', size: 18, delay: 0, dur: 14 },
  { left: '18%', top: '72%', size: 14, delay: 1.2, dur: 16 },
  { left: '78%', top: '22%', size: 16, delay: 0.6, dur: 15 },
  { left: '88%', top: '68%', size: 12, delay: 2, dur: 13 },
  { left: '62%', top: '12%', size: 10, delay: 1.5, dur: 17 },
  { left: '42%', top: '84%', size: 13, delay: 0.3, dur: 18 },
] as const

function Folha({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 3c4 3 7 7 7 11a7 7 0 1 1-14 0c0-4 3-8 7-11Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M12 6v12"
        stroke="#F5F0E6"
        strokeWidth="1"
        opacity="0.35"
      />
    </svg>
  )
}

/** Partículas/folhas discretas — só decorativas, sem interação. */
export function HeroParticles() {
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      {FOLHAS.map((f, i) => (
        <motion.span
          key={i}
          className="absolute text-oliva/25"
          style={{ left: f.left, top: f.top }}
          animate={{ y: [0, -12, 0], rotate: [0, 8, -6, 0], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Folha size={f.size} />
        </motion.span>
      ))}
    </div>
  )
}
