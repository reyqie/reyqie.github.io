import type { LucideIcon } from 'lucide-react'
import type { IconType } from 'react-icons'

export type IconComponent = IconType | LucideIcon

export type Accent = 'blue' | 'cyan' | 'lime' | 'pink'

export type PreviewVariant = 'ecommerce' | 'dashboard' | 'academic' | 'finance'

export interface TechItem {
  name: string
  icon: IconType
  color: string
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  tech: TechItem[]
  year: string
  repoUrl: string
  accent: Accent
  image: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  category: string
  description: string
  accent: Accent
  fileUrl: string
}

export interface Skill {
  name: string
  icon: IconType
  color: string
  note: string
}

export interface SkillGroup {
  id: string
  title: string
  blurb: string
  accent: Accent
  skills: Skill[]
}

export interface SocialLink {
  label: string
  handle: string
  href: string
  icon: IconComponent
}

export interface NavItem {
  label: string
  href: string
}

export interface Stat {
  label: string
  value: number
  suffix: string
  hint: string
}
