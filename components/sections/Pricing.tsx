import { useState } from 'react'
import { Reveal } from '../Reveal'
import {
  IconArrowRight,
  IconCheck,
  IconStar,
} from '../icons'
import { cn } from '../../lib/cn'
import { SectionCard, SectionFrame } from '../SiteGlass'

const plans = [
  {
    name: 'Starter',
    priceMonthly: '$299',
    priceAnnual: '$249',
    cadenceMonthly: '/ month',
    cadenceAnnual: '/ mo · billed yearly',
    blurb: 'Launch edge sync for pilot fleets and single-region deployments.',
    features: [
      'Up to 50 edge nodes',
      'Real-time sync engine',
      'Analytics dashboard',
      'Email support',
    ],
    cta: 'Start trial',
    highlight: false,
    savingsVsMonthlyPct: 17,
    checkoutUrlMonthly: 'https://buy.stripe.com/test_6oUeV58pv6fac3S7Nf9AA00',
    checkoutUrlAnnual: 'https://buy.stripe.com/test_28E8wHaxD9rm8RGgjL9AA02',
  },
  {
    name: 'Scale',
    priceMonthly: '$899',
    priceAnnual: '$749',
    cadenceMonthly: '/ month',
    cadenceAnnual: '/ mo · billed yearly',
    blurb: 'Usage-based capacity for growing distributed systems and AI at the edge.',
    features: [
      'Up to 500 edge nodes',
      'AI anomaly detection',
      'Distributed coordination',
      'Priority support + API access',
    ],
    cta: 'Choose Scale',
    highlight: true,
    savingsVsMonthlyPct: 17,
    checkoutUrlMonthly: 'https://buy.stripe.com/test_fZu14fdJPgTO1pe3wZ9AA01',
    checkoutUrlAnnual: 'https://buy.stripe.com/test_00w9ALfRX0UQ6JyffH9AA03',
  },
  {
    name: 'Enterprise',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    cadenceMonthly: 'deployment + licensing',
    cadenceAnnual: 'deployment + licensing',
    blurb: 'Private edge deployment, unlimited nodes, and edge integration licensing.',
    features: [
      'Dedicated edge clusters',
      'Custom sync SLAs',
      'SAML / SCIM + VPC',
      '24/7 solutions engineering',
    ],
    cta: 'Contact sales',
    highlight: false,
    savingsVsMonthlyPct: null,
    checkoutUrlMonthly: null,
    checkoutUrlAnnual: null,
  },
] as const

function planCtaHref(
  plan: (typeof plans)[number],
  billing: BillingCycle,
): string {
  if (plan.name === 'Enterprise') return '#contact'
  if (billing === 'monthly' && plan.checkoutUrlMonthly) return plan.checkoutUrlMonthly
  if (billing === 'annual' && plan.checkoutUrlAnnual) return plan.checkoutUrlAnnual
  return '#contact'
}

function TransitNode({ featured }: { featured: boolean }) {
  if (featured) {
    return (
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute h-5 w-5 rounded-full border-2 border-stem bg-moss/30 shadow-[0_0_28px_rgba(182,206,180,0.55)]" />
        <span className="absolute h-3 w-3 rounded-full border border-fog/90 bg-[#A975A9]" />
      </span>
    )
  }
  return (
    <span className="h-3 w-3 rounded-full border-2 border-dust/70 bg-void shadow-[0_0_10px_rgba(148,137,121,0.35)]" />
  )
}

function TopoPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.14]"
      aria-hidden
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            118deg,
            transparent,
            transparent 22px,
            rgba(169, 117, 169, 0.25) 22px,
            rgba(169, 117, 169, 0.25) 23px
          ),
          repeating-linear-gradient(
            -12deg,
            transparent,
            transparent 38px,
            rgba(225, 179, 225, 0.2) 38px,
            rgba(225, 179, 225, 0.2) 39px
          )
        `,
      }}
    />
  )
}

type BillingCycle = 'monthly' | 'annual'

function BillingRhythmToggle({
  value,
  onChange,
}: {
  value: BillingCycle
  onChange: (next: BillingCycle) => void
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dust">
        Billing rhythm
      </p>
      <div
        className="glass-card relative flex h-12 w-full max-w-[17.5rem] rounded-full p-1 shadow-[inset_0_2px_8px_rgba(114,47,97,0.1)]"
        role="group"
        aria-label="Choose billing period"
      >
        <span
          className={cn(
            'pointer-events-none absolute bottom-1 top-1 w-[calc(50%-6px)] rounded-full bg-parchment shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.3,0.64,1)]',
            value === 'monthly' ? 'left-1' : 'left-auto right-1',
          )}
          aria-hidden
        />
        <button
          type="button"
          className={cn(
            'relative z-10 flex-1 rounded-full py-2.5 text-sm font-semibold transition-colors',
            value === 'monthly' ? 'text-void' : 'text-pizazz/55 hover:text-pizazz/80',
          )}
          aria-pressed={value === 'monthly'}
          onClick={() => onChange('monthly')}
        >
          Monthly
        </button>
        <button
          type="button"
          className={cn(
            'relative z-10 flex-1 rounded-full py-2.5 text-sm font-semibold transition-colors',
            value === 'annual' ? 'text-void' : 'text-pizazz/55 hover:text-pizazz/80',
          )}
          aria-pressed={value === 'annual'}
          onClick={() => onChange('annual')}
        >
          Annual
        </button>
      </div>
      <p
        className={cn(
          'max-w-md text-center text-xs leading-relaxed transition-opacity duration-300',
          value === 'annual' ? 'text-dust' : 'text-mint-muted',
        )}
      >
        {value === 'annual' ? (
          <>
            <span className="font-semibold text-pizazz">Annual savings</span> — lock in
            predictable edge node and sync volume credits. Switch to monthly before renewal.
          </>
        ) : (
          <>
            Month-to-month for pilots. Annual lowers effective rates on Starter &amp; Scale by
            roughly <span className="font-semibold text-pizazz">~17%</span>.
          </>
        )}
      </p>
    </div>
  )
}

export function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>('annual')

  return (
    <section id="pricing" className="relative scroll-mt-[5.5rem] bg-transparent">
      <SectionFrame variant="pricing">
        <SectionCard variant="pricing">
          <Reveal>
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="glass-chip inline-flex items-center gap-2.5 py-2">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-stem shadow-[0_0_14px_2px_rgba(182,206,180,0.75)]"
                  aria-hidden
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-mint sm:text-xs">
                  Pricing
                </span>
              </div>
              <h2 className="mt-5 w-full min-w-0 text-center font-display text-2xl font-bold leading-[1.08] tracking-tight text-void sm:text-3xl lg:text-[2.65rem]">
                Subscription + usage-based edge pricing
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-mint/85 sm:text-base">
                SaaS plans scale with edge nodes and sync volume. Enterprise adds private
                deployment, custom SLAs, and API licensing.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-10 sm:mt-12" delayMs={90}>
            <BillingRhythmToggle value={billing} onChange={setBilling} />
          </Reveal>

          <Reveal className="mt-12 sm:mt-14" delayMs={100}>
            <div className="glass-card overflow-hidden rounded-[1.65rem] sm:rounded-[1.85rem]">
              <div className="glass-card relative rounded-none border-x-0 border-t-0 border-b border-[#A975A9]/20 px-4 py-6 sm:px-8 sm:py-7">
                <div
                  className="pointer-events-none absolute left-8 right-8 top-1/2 h-[2px] -translate-y-1/2 bg-stem/50 sm:left-12 sm:right-12"
                  aria-hidden
                />
                <div className="relative z-[1] flex">
                  {plans.map((plan) => (
                    <div key={`node-${plan.name}`} className="flex flex-1 justify-center">
                      <TransitNode featured={plan.highlight} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid divide-y divide-fog/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={cn(
                      'relative px-5 py-8 sm:px-7 sm:py-9',
                      plan.highlight &&
                        'border-[#A975A9]/25 bg-gradient-to-b from-white/25 via-white/10 to-transparent shadow-[inset_0_0_0_1px_rgba(114,47,97,0.12)] backdrop-blur-xl lg:border-x lg:border-[#A975A9]/20',
                    )}
                  >
                    {plan.highlight && (
                      <>
                        <TopoPattern />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pizazz/10 via-transparent to-transparent"
                          aria-hidden
                        />
                      </>
                    )}
                    <div className="relative z-10">
                      {plan.highlight && (
                        <div className="glass-chip mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-mint">
                          <IconStar className="h-3.5 w-3.5 text-pizazz" />
                          Most teams start here
                        </div>
                      )}
                      <p className="font-display text-lg font-semibold text-void sm:text-xl">
                        {plan.name}
                      </p>
                      <div className="mt-3 flex flex-wrap items-baseline gap-2">
                        <span className="font-display text-3xl font-semibold text-void sm:text-4xl">
                          {billing === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
                        </span>
                        <span className="text-sm text-mint/70">
                          {billing === 'monthly' ? plan.cadenceMonthly : plan.cadenceAnnual}
                        </span>
                        {plan.savingsVsMonthlyPct != null && billing === 'annual' && (
                          <span className="inline-flex items-center rounded-full border border-dust/40 bg-[#722F61]/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-pizazz">
                            −{plan.savingsVsMonthlyPct}% vs monthly
                          </span>
                        )}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-mint/80">{plan.blurb}</p>
                      <ul className="mt-6 space-y-2.5 text-sm text-mint/95">
                        {plan.features.map((f) => (
                          <li key={f} className="flex gap-2.5">
                            <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      {(() => {
                        const href = planCtaHref(plan, billing)
                        const isExternal = href.startsWith('http')
                        return (
                          <a
                            href={href}
                            {...(isExternal
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : {})}
                            className={cn(
                              'mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold no-underline transition',
                              plan.highlight
                                ? 'btn-primary'
                                : 'border border-dust/20 bg-violet/50 text-void shadow-none hover:border-dust/40 hover:bg-plum/50',
                            )}
                          >
                            {plan.cta}
                            <IconArrowRight className="h-4 w-4" />
                          </a>
                        )
                      })()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <p className="mt-6 text-center text-xs text-mint/70">
            {billing === 'annual'
              ? 'Annual pricing shown—toggle Monthly for month-to-month rates.'
              : 'Monthly list pricing—toggle Annual for committed edge capacity savings.'}
          </p>
        </SectionCard>
      </SectionFrame>
    </section>
  )
}
