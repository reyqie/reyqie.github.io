interface DoodleProps {
  className?: string
}

export function Sparkle({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 1.5c.9 6.8 3.7 9.6 10.5 10.5-6.8.9-9.6 3.7-10.5 10.5C11.1 15.7 8.3 12.9 1.5 12 8.3 11.1 11.1 8.3 12 1.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function StarOutline({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m12 2.4 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.2l6.5-.9L12 2.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Bolt({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M13.2 1.8 4.8 14.1h5.5L9 22.2l8.6-12.4h-5.6l1.2-8Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function RingDoodle({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.4" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 4" />
    </svg>
  )
}

export function CrossMark({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 5 19 19M19 5 5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function DoodleArrow({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 11c28-7 66 1 66 25 0 20-24 26-31 12-6-12 15-19 34-10 14 7 23 17 34 30"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
      <path
        d="m100 58 11 11-15 1"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ScribbleCircle({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 220 130" fill="none" className={className} aria-hidden="true">
      <path
        d="M43 71C31 32 93 9 153 15c48 5 70 36 48 68-23 33-99 44-143 24C20 90 24 51 60 33c28-14 77-16 109-3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M48 78C38 44 96 22 151 27c41 4 61 29 45 55-19 30-89 40-131 22C29 87 32 58 63 42"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  )
}

export function Squiggle({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 11c10-8 20-8 30 0s20 8 30 0 20-8 30 0 18 6 26-2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function DotGrid({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={6 + col * 12}
            cy={6 + row * 12}
            r="1.6"
            fill="currentColor"
          />
        )),
      )}
    </svg>
  )
}

export function CodeTag({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 40" fill="none" className={className} aria-hidden="true">
      <path
        d="m18 9-11 11 11 11M46 9l11 11-11 11M38 5 26 35"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
