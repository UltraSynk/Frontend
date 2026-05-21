import { SectionCard, SectionFrame } from '../SiteGlass'

const featureIconWrapClass =
  'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#722F61]/20 bg-pearl/90 p-1'

const items = [
  {
    title: 'Edge data processing',
    body: 'Analyze and act on data at the source—reducing round-trips to centralized cloud systems.',
    iconSrc: '/core-features/edge-data-processing.png',
  },
  {
    title: 'Real-time synchronization',
    body: 'Keep distributed nodes aligned with a live sync engine built for consistency under load.',
    iconSrc: '/core-features/real-time-synchronization.png',
  },
  {
    title: 'AI event intelligence',
    body: 'Detect patterns and anomalies at the edge and trigger instant, automated responses.',
    iconSrc: '/core-features/ai-event-intelligence.png',
  },
  {
    title: 'Distributed coordination',
    body: 'Orchestrate communication between devices and services with optimized edge routing.',
    iconSrc: '/core-features/distributed-coordination.png',
  },
  {
    title: 'Analytics dashboard',
    body: 'Visualize edge activity, sync flow, and system health in one real-time command center.',
    iconSrc: '/core-features/analytics-dashboard.png',
  },
  {
    title: 'Scalable edge AI',
    body: 'Deploy AI inference across thousands of nodes with architecture that grows with demand.',
    iconSrc: '/core-features/scalable-edge-ai.png',
  },
] as const

/** Showcase side cards in public/: rows 1–6 → 13–15, 17–19, 21–23, 25–27, 29–31, 33–35 */
const showcaseByRow = [
  {
    signal: '/13.png',
    surface: '/14.png',
    steady: '/15.png',
  },
  {
    signal: '/17.png',
    surface: '/18.png',
    steady: '/19.png',
  },
  {
    signal: '/21.png',
    surface: '/22.png',
    steady: '/23.png',
  },
  {
    signal: '/25.png',
    surface: '/26.png',
    steady: '/27.png',
  },
  {
    signal: '/29.png',
    surface: '/30.png',
    steady: '/31.png',
  },
  {
    signal: '/33.png',
    surface: '/34.png',
    steady: '/35.png',
  },
] as const

function ShowcaseStrip({ rowIndex }: { rowIndex: number }) {
  const imgs = showcaseByRow[rowIndex % showcaseByRow.length]
  const slots = [
    { key: 'signal' as const, src: imgs.signal },
    { key: 'surface' as const, src: imgs.surface },
    { key: 'steady' as const, src: imgs.steady },
  ]
  const eager = true

  return (
    <div className="feature-showcase-shell absolute inset-3 flex flex-col rounded-2xl border border-dashed border-violet/25 p-3 pb-4 sm:inset-4 sm:p-4 sm:pb-5">
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-2 sm:gap-3">
        {slots.map(({ key, src }) => (
          <div
            key={key}
            className="relative min-h-[5.5rem] overflow-hidden rounded-xl border border-violet/20 bg-plum/25 sm:min-h-[7rem] md:min-h-[8rem]"
          >
            <img
              src={src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading={eager ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/15 to-transparent"
              aria-hidden
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex shrink-0 justify-between gap-1 px-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-mint/70 sm:mt-3.5 sm:gap-0 sm:px-2 sm:text-[11px] sm:tracking-[0.32em]">
        <span>Process</span>
        <span>Sync</span>
        <span>Respond</span>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-[5.5rem] bg-transparent">
      <SectionFrame variant="features">
        <SectionCard variant="features" className="relative overflow-hidden !bg-pearl/80 !backdrop-blur-none">
          <div className="relative z-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="glass-chip inline-flex text-xs font-semibold uppercase tracking-[0.28em] text-[#A975A9]">
                  Core capabilities
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-void sm:text-3xl lg:text-4xl">
                  Edge-first intelligence, end to end.
                </h2>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-pizazz/85 sm:text-base">
                  Process at the edge, synchronize in real time, and coordinate distributed
                  systems from one premium control plane.
                </p>
              </div>
              <div className="lg:text-right">
                <div className="glass-chip inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#A975A9]">
                  <span className="h-2 w-2 rounded-full bg-[#A975A9]" />
                  Built for distributed scale
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-4 sm:mt-12">
              {items.map((item, index) => {
                const reverse = index % 2 === 1
                return (
                  <div
                    key={item.title}
                    className="feature-row-card relative overflow-hidden sm:rounded-[1.75rem]"
                  >
                    <div className="grid gap-6 px-5 py-8 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-10">
                      <div className={reverse ? 'lg:order-2' : ''}>
                        <div className="glass-chip inline-flex w-fit items-center gap-3 text-[#A975A9]">
                          <div className={featureIconWrapClass}>
                            <img
                              src={item.iconSrc}
                              alt=""
                              className="h-5 w-5 object-contain"
                              width={20}
                              height={20}
                              loading={index < 2 ? 'eager' : 'lazy'}
                              decoding="async"
                            />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-dust/90">
                            0{index + 1}
                          </span>
                        </div>
                        <h3 className="mt-4 font-display text-xl font-semibold text-void sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-prose text-pretty text-sm leading-relaxed text-pizazz/85 sm:text-base">
                          {item.body}
                        </p>
                      </div>
                      <div
                        className={`relative min-h-[12.5rem] sm:min-h-[14.5rem] md:min-h-[15.5rem] ${reverse ? 'lg:order-1' : ''}`}
                        aria-hidden
                      >
                        <div className="absolute inset-8 rounded-full bg-dust/15 blur-3xl" />
                        <ShowcaseStrip rowIndex={index} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </SectionCard>
      </SectionFrame>
    </section>
  )
}
