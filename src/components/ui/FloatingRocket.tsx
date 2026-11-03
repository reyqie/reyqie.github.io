import { motion, useReducedMotion } from 'framer-motion'
import { Rocket } from 'lucide-react'

interface FloatingRocketProps {
  className?: string
  delay?: number
}

export function FloatingRocket({ className = '', delay = 0 }: FloatingRocketProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 ${className}`}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              x: [0, 30, -18, 0],
              y: [0, -24, 12, 0],
              rotate: [-14, -2, 8, -14],
            }
      }
      transition={{
        duration: 7.5,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Rocket className="h-full w-full text-neon-lime drop-shadow-[0_0_14px_rgba(205,249,78,0.65)]" />
    </motion.div>
  )
}
