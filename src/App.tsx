import { AnimatePresence } from 'framer-motion'
import { useCallback, useState } from 'react'
import { About } from './components/About'
import { Certificates } from './components/Certificates'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Preloader } from './components/Preloader'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { TechMarquee } from './components/TechMarquee'
import { SiteLayout } from './layouts/SiteLayout'

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoaded = useCallback(() => setLoading(false), [])

  return (
    <>
      {!loading ? (
        <SiteLayout>
          <Hero />
          <TechMarquee />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </SiteLayout>
      ) : null}

      <AnimatePresence>
        {loading ? <Preloader key="preloader" onComplete={handleLoaded} /> : null}
      </AnimatePresence>
    </>
  )
}
