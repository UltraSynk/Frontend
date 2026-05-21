import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { Pricing } from '../components/sections/Pricing'
import { SectionCard, SectionFrame } from '../components/SiteGlass'

export function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="space-y-0 bg-transparent px-0 pb-12 pt-0 lg:pb-16">
      <section id="product" className="relative scroll-mt-[5.5rem] bg-transparent">
        <SectionFrame variant="features">
          <SectionCard variant="features" className="relative overflow-hidden">
            <Reveal>
              <p className="glass-chip inline-flex text-xs font-semibold uppercase tracking-[0.28em] text-[#722F61]">
                Product
              </p>
              <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-[#722F61] sm:text-4xl lg:text-[2.75rem]">
                Sign up and deploy UltraSynk at the edge
              </h1>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#722F61]/85 lg:text-lg">
                Choose a plan to start syncing AI workloads across your distributed edge
                fleet. Every tier includes real-time coordination, observability, and secure
                node management.
              </p>
              <p className="mt-6 text-sm text-lavender">
                Already exploring the platform?{' '}
                <Link to="/#how-it-works" className="font-semibold text-void no-underline hover:text-abyss">
                  View platform overview
                </Link>
              </p>
            </Reveal>
          </SectionCard>
        </SectionFrame>
      </section>

      <Pricing />
    </div>
  )
}
