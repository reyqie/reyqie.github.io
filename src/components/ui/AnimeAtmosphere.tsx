import { motion, useReducedMotion } from 'framer-motion'
import { Flower2, Sparkles } from 'lucide-react'

const accents = [
  { className: 'anime-flower anime-flower--one', size: 30, delay: 0 },
  { className: 'anime-flower anime-flower--two', size: 22, delay: 1.4 },
  { className: 'anime-flower anime-flower--three', size: 26, delay: 2.2 },
]

export function AnimeAtmosphere() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="anime-atmosphere" aria-hidden="true">
      {accents.map((accent) => (
        <motion.span
          key={accent.className}
          className={accent.className}
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [0, -16, 5, 0], rotate: [0, 24, -12, 0], opacity: [0.35, 0.7, 0.4, 0.35] }
          }
          transition={{
            duration: 9,
            delay: accent.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Flower2 size={accent.size} strokeWidth={1.4} />
        </motion.span>
      ))}
      <Sparkles className="anime-atmosphere-sparkle anime-atmosphere-sparkle--one" />
      <Sparkles className="anime-atmosphere-sparkle anime-atmosphere-sparkle--two" />
    </div>
  )
}
