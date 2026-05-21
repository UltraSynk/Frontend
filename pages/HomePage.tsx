import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../lib/scrollToSection'
import { Architecture } from '../components/sections/Architecture'
import { Contact } from '../components/sections/Contact'
import { FAQ } from '../components/sections/FAQ'
import { Features } from '../components/sections/Features'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Hero } from '../components/sections/Hero'
import { Pricing } from '../components/sections/Pricing'
import { Testimonials } from '../components/sections/Testimonials'
import { UseCases } from '../components/sections/UseCases'

export function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    requestAnimationFrame(() => scrollToSection(id))
  }, [hash])

  return (
    <div className="space-y-0 bg-transparent px-0 pb-12 pt-0 lg:pb-16">
      <Hero />
      <Architecture />
      <Features />
      <UseCases />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
    </div>
  )
}
