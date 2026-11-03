import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

interface ParallaxProps {
  children: ReactNode
  className?: string
  distance?: number
  rotate?: number
  scale?: number
  decorative?: boolean
}

export function Parallax({
  children,
  className,
  distance = 42,
  rotate = 0,
  scale = 1,
  decorative = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance])
  const smoothY = useSpring(y, { stiffness: 80, damping: 24, mass: 0.4 })
  const rotation = useTransform(scrollYProgress, [0, 1], [-rotate, rotate])
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [scale, 1, scale])

  return (
    <div ref={ref} className={className} aria-hidden={decorative ? 'true' : undefined}>
      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : { y: smoothY, rotate: rotation, scale: scaleValue }
        }
      >
        {children}
      </motion.div>
    </div>
  )
}
