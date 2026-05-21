import { useId, useState } from 'react'
import { Reveal } from '../Reveal'
import { cn } from '../../lib/cn'
import {
  SectionCard,
  SectionFrame,
  glassChipClass,
  glassFaqCtaClass,
  glassFaqItemClass,
  glassFaqItemOpenClass,
} from '../SiteGlass'

const faqs = [
  {
    q: 'What is UltraSynk?',
    a: 'UltraSynk is an AI-powered edge synchronization platform that processes and synchronizes data across distributed systems in real time. It enables organizations to reduce latency, improve responsiveness, and generate intelligent insights directly at the edge.',
  },
  {
    q: 'How does UltraSynk reduce latency?',
    a: 'UltraSynk processes data closer to where it is generated instead of sending everything to centralized cloud servers. This edge-first architecture minimizes delays, reduces bandwidth usage, and enables faster decision-making.',
  },
  {
    q: 'Which industries can benefit from UltraSynk?',
    a: 'UltraSynk is designed for industries that require real-time intelligence and distributed coordination, including IoT infrastructure, smart cities, industrial automation, telecom, logistics, and edge computing environments.',
  },
  {
    q: 'Does UltraSynk support AI-based anomaly detection?',
    a: 'Yes. UltraSynk includes AI-driven event intelligence that continuously analyzes edge data streams to detect anomalies, identify patterns, and trigger automated responses in real time.',
  },
  {
    q: 'Can UltraSynk integrate with existing infrastructure?',
    a: 'Absolutely. UltraSynk is built to integrate with distributed systems, IoT devices, APIs, and enterprise infrastructures, making it adaptable for both modern and legacy environments.',
  },
  {
    q: 'What makes UltraSynk different from traditional cloud platforms?',
    a: 'Unlike traditional cloud-only systems, UltraSynk uses an edge-first synchronization architecture. This allows data processing and intelligence generation to happen closer to devices, delivering ultra-low latency, improved reliability, and real-time operational awareness.',
  },
] as const

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(
        'h-5 w-5 shrink-0 text-void/70 transition-transform duration-300 motion-reduce:transition-none',
        open && '-rotate-180 text-void',
      )}
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FAQ() {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative scroll-mt-[5.5rem] bg-transparent">
      <SectionFrame variant="faq">
        <SectionCard variant="faq" className="relative overflow-hidden">
          <div className="relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <div className={cn(glassChipClass, 'inline-flex px-5 py-2')}>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-void sm:text-xs">
                    Frequently asked questions
                  </span>
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-void sm:text-4xl lg:text-[2.65rem]">
                  Everything About UltraSynk Platform
                </h2>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-lavender sm:text-base">
                  Learn how UltraSynk delivers real-time edge synchronization, AI-driven
                  intelligence, and seamless integration across distributed systems.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-4 sm:gap-5 lg:grid-cols-2">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index
                const panelId = `${baseId}-panel-${index}`
                const buttonId = `${baseId}-button-${index}`

                return (
                    <article
                      key={item.q}
                      className={cn(
                        glassFaqItemClass,
                        'hover-lift hover:border-violet/35 hover:shadow-[0_10px_36px_rgba(114,47,97,0.1)]',
                        isOpen && glassFaqItemOpenClass,
                      )}
                    >
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className={cn(
                          'flex w-full items-start justify-between gap-4 p-5 text-left transition-colors duration-300 sm:p-6',
                          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet/50',
                          isOpen ? 'bg-white/20' : 'hover:bg-white/25',
                        )}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <span className="font-display text-[15px] font-semibold leading-snug text-void sm:text-base">
                          {item.q}
                        </span>
                        <Chevron open={isOpen} />
                      </button>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className={cn(
                          'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
                          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                        )}
                      >
                        <div className="overflow-hidden">
                          <p
                            className={cn(
                              'border-t border-white/45 px-5 pb-5 pt-4 text-sm leading-relaxed text-lavender backdrop-blur-md sm:px-6 sm:pb-6 sm:text-[15px]',
                              'bg-white/15',
                            )}
                          >
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </article>
                )
              })}
            </div>

            <Reveal className="mt-12" delayMs={120}>
              <div
                className={cn(
                  glassFaqCtaClass,
                  'px-6 py-10 text-center sm:px-10 sm:py-12',
                )}
              >
                <h3 className="font-display text-xl font-bold text-void sm:text-2xl">
                  Didn&apos;t find what you were looking for?
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-pretty text-sm leading-relaxed text-lavender sm:text-base">
                  Our team can walk through your edge topology, sync requirements, and
                  enterprise deployment options.
                </p>
                <a href="#contact" className="btn-primary mt-8 px-9 py-3.5 text-sm">
                  Speak with an expert
                </a>
              </div>
            </Reveal>
          </div>
        </SectionCard>
      </SectionFrame>
    </section>
  )
}
