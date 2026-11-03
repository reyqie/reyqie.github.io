import type { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { AmbientBlobs } from '../components/ui/AmbientBlobs'
import { AnimeAtmosphere } from '../components/ui/AnimeAtmosphere'
import { ScrollProgress } from '../components/ui/ScrollProgress'

interface SiteLayoutProps {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="site-shell anime-theme relative isolate min-h-screen">
      <a href="#main" className="skip-link">
        Lewati ke konten
      </a>

      <AmbientBlobs />
      <AnimeAtmosphere />
      <ScrollProgress />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <div aria-hidden="true" className="noise-layer" />
    </div>
  )
}
