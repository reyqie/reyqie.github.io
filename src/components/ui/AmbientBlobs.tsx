import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

const springConfig = { stiffness: 120, damping: 30, mass: 0.3, restDelta: 0.001 }

export function AmbientBlobs() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()

  const blueY = useSpring(
    useTransform(scrollY, [0, 1400, 3200, 5200], [0, -110, 55, -95]),
    springConfig,
  )
  const cyanY = useSpring(
    useTransform(scrollY, [0, 1400, 3200, 5200], [0, 100, -65, 110]),
    springConfig,
  )
  const pinkY = useSpring(
    useTransform(scrollY, [0, 1400, 3200, 5200], [0, -65, 105, -70]),
    springConfig,
  )
  const limeY = useSpring(
    useTransform(scrollY, [0, 1400, 3200, 5200], [0, 75, -45, 80]),
    springConfig,
  )

  return (
    <div className="ambient-backdrop" aria-hidden="true">
      <motion.div
        className="ambient-blob ambient-blob--blue"
        style={prefersReducedMotion ? undefined : { y: blueY }}
      />
      <motion.div
        className="ambient-blob ambient-blob--cyan"
        style={prefersReducedMotion ? undefined : { y: cyanY }}
      />
      <motion.div
        className="ambient-blob ambient-blob--pink"
        style={prefersReducedMotion ? undefined : { y: pinkY }}
      />
      <motion.div
        className="ambient-blob ambient-blob--lime"
        style={prefersReducedMotion ? undefined : { y: limeY }}
      />
    </div>
  )
}
