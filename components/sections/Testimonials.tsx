import { useCallback, useEffect, useState } from 'react'
import { TESTIMONIAL_STORIES } from '../../data/testimonials'
import { cn } from '../../lib/cn'
import { TestimonialPortrait } from '../TestimonialPortrait'
import { Reveal } from '../Reveal'
import { glassChipClass, SectionCard, SectionFrame } from '../SiteGlass'

function Chevron({ direction }: { direction: 'prev' | 'next' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      {direction === 'prev' ? (
        <path
          d="M15 6l-6 6 6 6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

function displayNameLines(name: string) {
  const parts = name.trim().split(/\s+/)
  if (parts.length <= 1) return parts[0]?.toUpperCase() ?? ''
  const last = parts.pop()!
  return `${parts.join(' ').toUpperCase()}\n${last.toUpperCase()}`
}

export function Testimonials() {
  const [active, setActive] = useState(0)
  const total = TESTIMONIAL_STORIES.length

  const go = useCallback(
    (delta: number) => {
      setActive((i) => (i + delta + total) % total)
    },
    [total],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
      const t = e.target
      if (t instanceof HTMLElement) {
        const tag = t.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || t.isContentEditable) return
      }
      e.preventDefault()
      if (e.key === 'ArrowLeft') go(-1)
      else go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const current = TESTIMONIAL_STORIES[active]
  const nameLines = displayNameLines(current.name)

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-[5.5rem] bg-transparent"
      aria-roledescription="carousel"
      aria-label="Trusted voices from enterprises"
    >
      <SectionFrame variant="testimonials">
        <Reveal className="mb-5 text-center sm:mb-6">
          <div className={cn('mx-auto inline-flex items-center gap-2', glassChipClass)}>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-pizazz sm:text-[11px]">
              Testimonials
            </span>
          </div>
          <h2 className="mt-4 font-display text-[1.65rem] font-bold leading-[1.12] tracking-tight text-void sm:text-3xl lg:text-[2.35rem]">
            Trusted Voices From{' '}
            <span className="text-pizazz">Enterprises</span>
          </h2>
        </Reveal>

        <SectionCard variant="testimonials" className="overflow-hidden !p-0">
          <div className="relative flex min-h-[min(76svh,720px)] flex-col overflow-hidden rounded-[1.75rem] border border-white/20 shadow-[0_30px_100px_rgba(58,43,71,0.25)] sm:min-h-[min(82svh,800px)] sm:rounded-[2rem] lg:min-h-[min(86svh,880px)] lg:rounded-[2.25rem]">
            {TESTIMONIAL_STORIES.map((story, index) => (
              <div
                key={story.name}
                className={cn(
                  'absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none',
                  index === active ? 'opacity-100' : 'opacity-0',
                )}
                aria-hidden={index !== active}
              >
                <TestimonialPortrait
                  name={story.name}
                  src={story.image}
                  alt={`${story.name}, ${story.role}`}
                  eager={index === 0}
                  className="absolute inset-0 h-full w-full object-cover object-[50%_22%]"
                />
              </div>
            ))}

            <div
              className="pointer-events-none absolute inset-3 rounded-[1.35rem] border border-white/15 sm:inset-4 sm:rounded-[1.65rem] lg:inset-5 lg:rounded-[1.85rem]"
              aria-hidden
            />

            <div className="relative z-10 flex min-h-0 flex-1 flex-col">
              <div className="flex items-center justify-between gap-2 px-4 py-3 text-[9px] font-medium uppercase tracking-[0.2em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)] sm:px-7 sm:py-5 sm:text-[11px] sm:tracking-[0.35em]">
                <span>Trusted</span>
                <span className="font-cinema text-sm normal-case tracking-normal text-white italic sm:text-base">
                  Voices From Enterprises
                </span>
                <span className="tabular-nums tracking-[0.2em] text-white">
                  {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-end px-5 pb-4 sm:max-w-[min(100%,42rem)] sm:px-8 sm:pb-5 lg:px-10 lg:pb-6">
                <blockquote className="max-w-2xl font-sans text-sm leading-relaxed text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:text-base lg:text-lg">
                  <span className="font-cinema text-2xl leading-none text-white/25">&ldquo;</span>
                  {current.quote}
                  <span className="font-cinema text-2xl leading-none text-white/25">&rdquo;</span>
                </blockquote>
                <p className="mt-4 max-w-xl font-cinema text-base italic leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] sm:mt-5 sm:text-lg md:text-xl">
                  {current.role}
                </p>
                <p className="mt-1 font-cinema text-2xl font-semibold uppercase leading-[0.95] tracking-[0.1em] text-white whitespace-pre-line drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] sm:text-3xl md:text-4xl lg:text-5xl lg:tracking-[0.12em]">
                  {nameLines}
                </p>
              </div>

              <div className="relative z-10 px-4 pb-4 pt-2 sm:px-7 sm:pb-6 lg:px-9">
                <div className="flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-2 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-xl backdrop-saturate-150 sm:gap-3 sm:rounded-2xl sm:px-3 sm:py-3">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                    aria-label="Previous testimonial"
                  >
                    <Chevron direction="prev" />
                  </button>
                  <div className="flex min-w-0 flex-1 justify-center gap-1.5 overflow-x-auto py-0.5 [scrollbar-width:none] sm:gap-2 [&::-webkit-scrollbar]:hidden">
                    {TESTIMONIAL_STORIES.map((story, index) => (
                      <button
                        key={story.name}
                        type="button"
                        onClick={() => setActive(index)}
                        aria-label={`Show testimonial from ${story.name}`}
                        aria-current={index === active}
                        className={cn(
                          'relative h-[4.5rem] w-12 shrink-0 overflow-hidden rounded-md border-2 transition sm:h-[5.25rem] sm:w-14',
                          index === active
                            ? 'border-white opacity-100 ring-2 ring-white/30'
                            : 'border-white/20 opacity-60 hover:border-white/50 hover:opacity-90',
                        )}
                      >
                        <TestimonialPortrait
                          name={story.name}
                          src={story.image}
                          alt=""
                          className="h-full w-full object-cover object-[50%_15%]"
                        />
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                    aria-label="Next testimonial"
                  >
                    <Chevron direction="next" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>
      </SectionFrame>
    </section>
  )
}
