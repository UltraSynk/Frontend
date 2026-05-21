import { IconBolt, IconGlobe, IconNodes, IconShield } from '../icons'
import { Reveal } from '../Reveal'
import { glassCardClass, glassChipClass, SectionCard, SectionFrame } from '../SiteGlass'
import { cn } from '../../lib/cn'

const features = [
  {
    title: 'Edge processing layer',
    description:
      'Run AI inference and data transforms where events originate—minimizing round-trip delay.',
    iconSrc: '/how-it-works/edge-processing-layer.png',
  },
  {
    title: 'Sync engine core',
    description:
      'Propagate state changes across nodes with conflict-aware, real-time consistency.',
    iconSrc: '/how-it-works/sync-engine-core.png',
  },
  {
    title: 'Secure edge fabric',
    description:
      'Encrypted channels, device attestation, and policy gates at every hop.',
    iconSrc: '/how-it-works/secure-edge-fabric.png',
  },
  {
    title: 'Global distribution',
    description:
      'Deploy across regions and edge sites while keeping one operational view.',
    iconSrc: '/how-it-works/global-distribution.png',
  },
  {
    title: 'Live observability',
    description:
      'Traces, sync health, and anomaly signals in a single edge-aware dashboard.',
    iconSrc: '/how-it-works/live-observability.png',
  },
  {
    title: 'Integration ready',
    description:
      'REST and streaming APIs, SDKs, and licensing for enterprise edge deployments.',
    iconSrc: '/how-it-works/integration-ready.png',
  },
] as const

const ARCHITECTURE_DIAGRAM_SRC = '/how-it-works/architecture-stack.png'

const stats = [
  { value: '<5ms', label: 'Edge processing', Icon: IconBolt },
  { value: '10K+', label: 'Edge nodes', Icon: IconNodes },
  { value: '40+', label: 'Edge regions', Icon: IconGlobe },
  { value: '99.99%', label: 'Sync uptime', Icon: IconShield },
] as const

/** High-contrast icon treatment for Platform feature tiles & stats */
const platformIconClass =
  'h-5 w-5 shrink-0 [&_path]:!stroke-[2.25] [&_circle]:!stroke-[2.25]'
const platformIconWrapClass =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#722F61]/25 bg-pearl/90 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]'

function FeatureTile({
  title,
  description,
  iconSrc,
}: {
  title: string
  description: string
  iconSrc: string
}) {
  return (
    <article
      className={cn(
        'group relative flex h-full min-h-0 w-full min-w-0 flex-col rounded-xl p-3 transition hover:border-[#A975A9]/40 sm:min-h-[158px] lg:min-h-[170px] lg:p-2.5',
        glassCardClass,
      )}
    >
      <div className={platformIconWrapClass}>
        <img
          src={iconSrc}
          alt=""
          className="h-7 w-7 object-contain"
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="mt-2.5 font-display text-xs font-bold leading-snug tracking-tight text-[#722F61] sm:text-[13px]">
        {title}
      </h3>
      <p className="mt-1.5 flex-1 text-pretty text-[11px] leading-relaxed text-[#722F61]/85 sm:text-xs">
        {description}
      </p>
    </article>
  )
}

function ArchitectureDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,380px)] lg:max-w-[420px]">
      <img
        src={ARCHITECTURE_DIAGRAM_SRC}
        alt="UltraSynk architecture: AI inference layer, sync engine core, secure edge fabric, and global distribution."
        className="h-auto w-full object-contain"
        width={800}
        height={880}
        loading="eager"
        decoding="async"
      />
    </div>
  )
}

export function Architecture() {
  return (
    <section id="how-it-works" className="relative scroll-mt-[5.5rem]">
      <SectionFrame variant="architecture">
        <SectionCard variant="architecture" className="relative overflow-hidden">
          <div className="relative z-10">
          {/* Header */}
          <Reveal className="mx-auto max-w-3xl text-center">
            <div
              className={cn(
                'mx-auto inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#A975A9] sm:text-[11px]',
                glassChipClass,
              )}
            >
              <IconShield className="h-4 w-4 shrink-0 text-[#A975A9]" />
              HOW IT WORKS
            </div>
            <h2 className="mt-4 font-display text-[1.65rem] font-bold leading-[1.12] tracking-tight text-[#722F61] sm:text-3xl lg:text-[2.35rem]">
              Built for real-time sync at the{' '}
              <span className="text-[#A975A9]">edge</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-[#A975A9] sm:text-[15px]">
              UltraSynk combines edge AI processing with a distributed synchronization engine—so
              data is analyzed, aligned, and acted on where it matters most.
            </p>
          </Reveal>

          {/* Diagram + feature grid */}
          <div className="mt-7 grid items-start gap-6 lg:mt-8 lg:grid-cols-[minmax(0,42%)_minmax(0,58%)] lg:gap-8 xl:gap-10">
            <Reveal className="flex justify-center lg:justify-start">
              <ArchitectureDiagram />
            </Reveal>

            <Reveal delayMs={80} className="lg:-ml-6">
              <div className="grid w-full auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-2.5">
                {features.map(({ title, description, iconSrc }) => (
                  <FeatureTile key={title} title={title} description={description} iconSrc={iconSrc} />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Stats bar */}
          <Reveal className="mt-4 sm:mt-5" delayMs={120}>
            <div
              className={cn(
                'overflow-hidden rounded-2xl bg-pearl/90 shadow-[0_4px_24px_rgba(114,47,97,0.08)]',
                glassCardClass,
              )}
            >
              <div className="grid grid-cols-2 divide-x divide-[#A975A9]/12 md:grid-cols-4 md:divide-y-0">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={cn(
                      'flex flex-col items-center px-3 py-4 text-center sm:px-4 sm:py-5',
                      i < 2 && 'max-md:border-b max-md:border-[#A975A9]/12 max-md:pb-5',
                      i >= 2 && 'max-md:pt-5',
                      i % 2 === 1 && 'max-md:border-l max-md:border-[#A975A9]/12',
                    )}
                  >
                    <span className={cn(platformIconWrapClass, 'rounded-full sm:h-11 sm:w-11')}>
                      <stat.Icon className={cn(platformIconClass, 'sm:h-[22px] sm:w-[22px]')} />
                    </span>
                    <p className="mt-2.5 font-display text-2xl font-bold leading-none tracking-tight text-[#722F61] sm:mt-3 sm:text-[1.65rem]">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[11px] font-medium leading-snug text-[#722F61]/85 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          </div>
        </SectionCard>
      </SectionFrame>
    </section>
  )
}
