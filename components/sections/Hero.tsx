import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../../lib/scrollToSection'
import { IconBolt, IconNodes, IconShield } from '../icons'
import { Reveal } from '../Reveal'
import { glassCardClass, glassChipClass, SectionCard } from '../SiteGlass'
import { HERO_TESTIMONIAL } from '../../data/testimonials'
import { cn } from '../../lib/cn'
import { TestimonialPortrait } from '../TestimonialPortrait'

const heroHighlights = [
  { title: 'Real-time sync', subtitle: 'Sub-20ms latency', Icon: IconBolt },
  { title: 'Highly reliable', subtitle: 'Built for edge resilience', Icon: IconShield },
  { title: 'Edge optimized', subtitle: 'Lightweight & efficient', Icon: IconNodes },
] as const

const SHOWCASE_IMAGES = [
  '/hero-side-1.png',
  '/hero-side-2.png',
  '/hero-side-3.png',
] as const

function HeroTestimonialCard({ className }: { className?: string }) {
  return (
    <a
      href="#testimonials"
      className={cn(
        'group/card flex w-full max-w-[min(100%,17.5rem)] flex-col justify-between rounded-[24px] px-3.5 py-3.5 no-underline transition-all duration-500 hover:-translate-y-1.5 sm:max-w-[18.5rem] sm:px-4 sm:py-4',
        glassCardClass,
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-display text-base font-semibold tracking-tight text-void sm:text-lg">
            {HERO_TESTIMONIAL.name}
          </p>
          <p className="mt-1.5 text-sm text-ink">
            <span className="font-bold text-pizazz">12ms</span>
            <span className="mt-0.5 block text-xs text-mint-muted">{HERO_TESTIMONIAL.role}</span>
          </p>
        </div>
        <TestimonialPortrait
          name={HERO_TESTIMONIAL.name}
          src={HERO_TESTIMONIAL.image}
          alt={`${HERO_TESTIMONIAL.name}, ${HERO_TESTIMONIAL.role}`}
          className="h-11 w-11 shrink-0 rounded-xl border border-[#A975A9]/20 object-cover object-[50%_15%] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] sm:h-12 sm:w-12"
        />
      </div>
      <div className="mt-4 flex justify-end sm:mt-5">
        <span className="rounded-xl border border-dust/40 bg-gradient-to-r from-dust/40 to-parchment/25 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-void shadow-[0_0_24px_-6px_rgba(148,137,121,0.35)] transition group-hover/card:from-dust/55 group-hover/card:to-parchment/35">
          View story
        </span>
      </div>
    </a>
  )
}

function HeroShowcaseVisual({
  images,
  selectedImage,
  onSelectImage,
}: {
  images: readonly string[]
  selectedImage: string
  onSelectImage: (image: string) => void
}) {
  return (
    <div className="relative mx-auto w-full max-w-full lg:max-w-[min(100%,520px)]">
      {/* Ambient depth — soft dust / parchment glows */}
      <div
        className="pointer-events-none absolute -inset-[28%] -z-10 overflow-visible"
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/2 h-[min(120%,28rem)] w-[min(95%,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-dust/45 blur-[5.5rem] motion-reduce:opacity-70 motion-reduce:blur-[3rem]" />
        <div className="absolute right-[-5%] top-[18%] h-56 w-56 rounded-full bg-parchment/20 blur-[4rem]" />
        <div className="absolute bottom-[0%] left-[5%] h-48 w-64 rounded-full bg-dust/30 blur-[3.5rem]" />
        <div className="absolute left-[12%] top-[0%] h-32 w-40 rounded-full bg-parchment/15 blur-[2.5rem]" />
      </div>

      <div className="relative flex w-full max-w-full flex-col items-center justify-center overflow-x-hidden pb-4 pt-4 sm:pb-6 sm:pt-5 lg:flex-row lg:items-start lg:gap-6 lg:pb-16">
        {/* Main portrait card — layered glass */}
        <div className="relative z-10 w-full max-w-[min(100%,20rem)] shrink-0 pb-10 sm:max-w-[22.5rem] sm:pb-12 lg:w-[min(100%,420px)] lg:max-w-none lg:pb-0">
          {/* Back plate for depth */}
          <div
            className="pointer-events-none absolute -inset-3 rounded-[32px] bg-gradient-to-br from-dust/20 via-transparent to-parchment/10 opacity-80 blur-sm"
            aria-hidden
          />

          <div className="motion-safe:animate-hero-showcase-float">
            <div className="origin-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100">
              <div
                className={cn(
                  'group relative rounded-[28px] p-[6px] transition-[box-shadow,transform] duration-700',
                  glassCardClass,
                )}
              >
                <div className="relative overflow-hidden rounded-[24px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="relative aspect-[4/5] w-full max-h-[min(62vh,480px)]">
                    <img
                      key={selectedImage}
                      src={selectedImage}
                      alt="UltraSynk edge AI synchronization visualization."
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-500"
                      width={960}
                      height={1280}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-void/20 to-parchment/10 mix-blend-soft-light" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/[0.07] to-transparent opacity-40 mix-blend-overlay" />

                  <div className="absolute left-4 top-4 z-20 sm:left-5 sm:top-5">
                    <span
                      className={cn(
                        'inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A975A9] sm:text-[11px]',
                        glassChipClass,
                      )}
                    >
                      Live sync <span aria-hidden>●</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating glass listing — overlaid on showcase (same style all breakpoints) */}
          <div className="absolute -bottom-6 left-1/2 z-30 w-[calc(100%-1rem)] max-w-[17.5rem] -translate-x-1/2 sm:-bottom-8 sm:max-w-[18.5rem] lg:-bottom-12 lg:left-[48%] lg:w-auto lg:max-w-[min(100%,18.5rem)] lg:translate-x-10 lg:right-[-1rem]">
            <HeroTestimonialCard />
          </div>
        </div>

        {/* Mobile: thumbnail row only */}
        <div className="mt-5 flex w-full max-w-[min(100%,20rem)] justify-center gap-3 sm:max-w-[22.5rem] sm:gap-3.5 lg:hidden">
          {images.map((image, index) => {
            const isActive = selectedImage === image
            return (
              <button
                key={image}
                type="button"
                onClick={() => onSelectImage(image)}
                className={cn(
                  'glass-card relative h-14 w-14 overflow-hidden rounded-2xl transition-all duration-300 sm:h-16 sm:w-16',
                  isActive
                    ? 'scale-105 border-white opacity-100'
                    : 'border-pizazz/30 opacity-70 hover:border-pizazz/50 hover:opacity-100',
                )}
                aria-label={`Artwork preview ${index + 1}`}
                aria-pressed={isActive}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            )
          })}
        </div>

        {/* Floating preview stack — desktop only */}
        <div className="relative z-20 mt-6 hidden w-[5rem] shrink-0 flex-col gap-4 lg:mt-10 lg:flex">
          {images.map((image, index) => {
            const isActive = selectedImage === image
            return (
              <button
                key={image}
                type="button"
                onClick={() => onSelectImage(image)}
                style={{ animationDelay: `${index * 220}ms` }}
                className={cn(
                  'motion-safe:animate-hero-thumb-float glass-card group/thumb relative aspect-square overflow-hidden rounded-[22px] transition-all duration-300',
                  'hover:-translate-y-1.5 hover:scale-[1.06] hover:shadow-[0_0_36px_-4px_rgba(223,208,184,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dust/70 motion-reduce:animate-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100',
                  isActive
                    ? 'scale-105 border-white opacity-100 ring-2 ring-parchment/25'
                    : 'border-pizazz/30 opacity-70 hover:border-pizazz/50 hover:opacity-100',
                )}
                aria-label={`Preview artwork ${index + 1}`}
                aria-pressed={isActive}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/55 to-transparent opacity-0 transition-opacity group-hover/thumb:opacity-100" />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function PlayIcon() {
  return (
    <span
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-parchment text-void"
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-0.5" fill="currentColor">
        <path d="M8 5v14l11-7L8 5z" />
      </svg>
    </span>
  )
}

export function Hero() {
  const [selectedImage, setSelectedImage] = useState<string>(SHOWCASE_IMAGES[0])
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const goToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (pathname === '/') {
      scrollToSection('how-it-works')
      window.history.replaceState(null, '', '/#how-it-works')
      return
    }
    navigate('/#how-it-works')
  }

  return (
    <section
      id="home"
      className="relative flex min-h-0 flex-col scroll-mt-[5.5rem] border-b border-dust/10 bg-transparent lg:min-h-[min(92dvh,54rem)]"
    >
      <div className="relative z-[1] mx-auto flex w-full flex-1 flex-col px-5 pb-1 pt-3 sm:px-6 sm:pt-4 md:px-7 lg:px-8">
        <SectionCard variant="hero" className="relative flex flex-1 flex-col overflow-hidden max-lg:overflow-x-hidden">
          <div className="relative z-10 flex flex-1 flex-col">
            <div className="flex w-full flex-1 flex-col justify-center gap-6 py-3 sm:gap-7 sm:py-4 lg:gap-8">
              <div className="grid w-full items-center gap-7 sm:gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-9 xl:gap-11">
                {/* Left: headline + copy + CTAs */}
                <div className="order-2 max-w-2xl pt-2 text-void sm:pt-3 lg:order-1 lg:pt-4 lg:pr-2">
                  <Reveal>
                    <h1 className="font-display text-[clamp(2.25rem,5.8vw,4rem)] font-bold leading-[1.02] tracking-[-0.028em] text-void xl:text-[clamp(2.65rem,4.8vw,4.35rem)]">
                      <span className="block">Edge AI sync</span>
                      <span className="block text-pizazz">for real-time</span>
                      <span className="block">intelligence.</span>
                    </h1>
                  </Reveal>
                  <Reveal delayMs={80}>
                    <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-mint sm:mt-7 lg:text-lg">
                      UltraSynk processes and synchronizes data at the edge—so distributed
                      systems stay consistent, responsive, and intelligent without cloud-only
                      latency.
                    </p>
                  </Reveal>
                  <Reveal delayMs={140} className="mt-7 sm:mt-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to="/product"
                        className="btn-primary px-9 py-4 text-sm sm:text-[0.9375rem]"
                      >
                        Request demo
                      </Link>
                      <a
                        href="/#how-it-works"
                        onClick={goToHowItWorks}
                        className="group inline-flex items-center gap-3 text-sm font-semibold text-void no-underline transition hover:text-pizazz"
                      >
                        <PlayIcon />
                        See architecture
                      </a>
                    </div>
                    <div
                      className={cn(
                        'mt-10 rounded-2xl border border-violet/30 bg-pearl/80 p-3.5 shadow-[0_4px_24px_rgba(114,47,97,0.08)] backdrop-blur-md sm:mt-11 sm:p-4',
                        glassCardClass,
                      )}
                    >
                      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-8">
                        {heroHighlights.map(({ title, subtitle, Icon }) => (
                          <li key={title} className="flex min-w-0 items-center gap-2 sm:gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet/35 bg-plum/60 text-abyss shadow-[0_0_16px_rgba(225,179,225,0.4)] sm:h-11 sm:w-11">
                              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                            </span>
                            <div className="min-w-0">
                              <p className="font-display text-[11px] font-semibold leading-snug text-void sm:text-sm lg:text-[15px]">
                                {title}
                              </p>
                              <p className="mt-0.5 text-[10px] leading-snug text-mint-muted sm:text-xs lg:text-[13px]">
                                {subtitle}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>

                {/* Right: futuristic glass showcase */}
                <Reveal
                  delayMs={100}
                  className="relative order-1 flex justify-center lg:order-2 lg:justify-end xl:pl-2"
                >
                  <HeroShowcaseVisual
                    images={SHOWCASE_IMAGES}
                    selectedImage={selectedImage}
                    onSelectImage={setSelectedImage}
                  />
                </Reveal>
              </div>

            </div>
          </div>
        </SectionCard>
      </div>
    </section>
  )
}
