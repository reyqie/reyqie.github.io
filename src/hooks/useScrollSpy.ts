import { useEffect, useState } from 'react'

export function useScrollSpy(ids: readonly string[], offset = 140) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const scrollPos = window.scrollY + offset
      let current = ids[0] ?? ''

      for (const id of ids) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= scrollPos) {
          current = id
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8

      if (atBottom) {
        current = ids[ids.length - 1] ?? current
      }

      setActive(current)
    }

    const onScroll = () => {
      if (frame === 0) {
        frame = requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}
