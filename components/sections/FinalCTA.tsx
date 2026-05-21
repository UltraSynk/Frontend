import { Link } from 'react-router-dom'
import { Reveal } from '../Reveal'
import { SectionCard, SectionFrame } from '../SiteGlass'

export function FinalCTA() {
  return (
    <section id="cta" className="relative scroll-mt-[5.5rem] bg-transparent">
      <SectionFrame variant="finalCta">
        <SectionCard variant="finalCta" className="relative overflow-hidden">
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mint/90">
                Final invitation
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-void sm:text-3xl lg:text-4xl">
                Deploy edge AI sync where latency matters most.
              </h2>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-mint/90 sm:text-base">
                See how UltraSynk processes data at the edge, synchronizes distributed nodes in
                real time, and delivers intelligence with minimal latency.
              </p>
            </Reveal>
            <Reveal className="flex w-full shrink-0 justify-stretch sm:w-auto lg:justify-end" delayMs={120}>
              <Link
                to="/product"
                className="btn-primary w-full px-8 py-3.5 text-sm sm:w-auto sm:px-10"
              >
                Request demo
              </Link>
            </Reveal>
          </div>
        </SectionCard>
      </SectionFrame>
    </section>
  )
}
