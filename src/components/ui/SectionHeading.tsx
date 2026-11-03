import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  aside?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  aside,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div
      className={`flex flex-col gap-8 ${
        centered
          ? 'items-center text-center'
          : 'md:flex-row md:items-end md:justify-between'
      } ${className}`}
    >
      <Reveal className={centered ? 'flex flex-col items-center' : 'max-w-2xl'}>
        <span className="eyebrow">
          <span className="text-neon-lime">{index}</span>
          <span aria-hidden="true" className="h-px w-5 bg-white/20" />
          {eyebrow}
        </span>

        <h2 className="mt-5 text-[clamp(2.6rem,6.4vw,5.1rem)] leading-[0.9] tracking-[-0.045em] text-balance">
          {title}
        </h2>

        {description ? (
          <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-muted">{description}</p>
        ) : null}
      </Reveal>

      {aside ? (
        <Reveal delay={0.12} direction={centered ? 'up' : 'left'} className="shrink-0">
          {aside}
        </Reveal>
      ) : null}
    </div>
  )
}
