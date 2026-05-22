import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Pricing } from '../components/sections/Pricing'
import { SectionCard, SectionFrame, glassCardClass, glassChipClass } from '../components/SiteGlass'
import { cn } from '../lib/cn'

const productFeatures = [
  {
    title: 'Real-time Synchronization',
    description: 'Keep all distributed edge nodes synchronized with sub-20ms latency for consistent data across your infrastructure.',
    iconSrc: '/core-features/real-time-synchronization.png',
  },
  {
    title: 'Edge Data Processing',
    description: 'Process and analyze data locally at the source, eliminating unnecessary cloud round-trips and reducing latency.',
    iconSrc: '/core-features/edge-data-processing.png',
  },
  {
    title: 'AI Event Intelligence',
    description: 'Detect patterns, anomalies, and events at the edge with AI-powered insights and automated responses.',
    iconSrc: '/core-features/ai-event-intelligence.png',
  },
  {
    title: 'Distributed Coordination',
    description: 'Orchestrate communication between thousands of edge devices and services with intelligent routing and protocols.',
    iconSrc: '/core-features/distributed-coordination.png',
  },
  {
    title: 'Enterprise Security',
    description: 'Encrypted channels, device attestation, policy gates, and comprehensive audit trails at every edge node.',
    iconSrc: '/core-features/secure-edge-fabric.png',
  },
  {
    title: 'Live Observability',
    description: 'Real-time dashboards showing sync health, node status, data flow, and anomaly signals across your entire edge network.',
    iconSrc: '/core-features/analytics-dashboard.png',
  },
] as const

const techStack = [
  {
    name: 'DeepStream (NVIDIA Metropolis)',
    description: 'Edge pipeline framework for high-performance, low-latency streaming and on-device AI inference',
  },
  {
    name: 'TensorRT Optimization',
    description: 'Neural network compiler for maximum throughput and minimum latency on edge hardware',
  },
  {
    name: 'Morpheus Platform',
    description: 'Real-time pipeline for security monitoring and anomaly detection across edge nodes',
  },
  {
    name: 'Triton Inference Server',
    description: 'Model deployment backbone for centralized cloud and distributed edge environments',
  },
]

const useCases = [
  {
    title: 'Smart Cities & IoT',
    description: 'Process sensor data locally for real-time traffic management, emergency response, and infrastructure monitoring.',
    benefits: ['Sub-ms response times', 'Massive scale support', 'Secure data handling'],
  },
  {
    title: 'Industrial Automation',
    description: 'Keep manufacturing equipment synchronized with instant fault detection and autonomous corrective actions.',
    benefits: ['Production uptime', 'Predictive maintenance', 'Quality assurance'],
  },
  {
    title: 'Autonomous Systems',
    description: 'Enable fleet coordination and decision-making at the edge for vehicles, drones, and robotics.',
    benefits: ['Autonomous operation', 'Coordinated behavior', 'Emergency resilience'],
  },
  {
    title: 'Telecommunications',
    description: 'Optimize network performance with real-time data processing and intelligent edge routing.',
    benefits: ['Reduced latency', 'Better throughput', 'Network resilience'],
  },
]

function FeatureCard({
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
        'group relative flex h-full min-h-0 w-full min-w-0 flex-col rounded-xl p-4 transition hover:border-[#A975A9]/40 sm:min-h-[180px] lg:min-h-[200px] lg:p-5',
        glassCardClass,
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#722F61]/20 bg-pearl/90 p-2">
        <img
          src={iconSrc}
          alt=""
          className="h-6 w-6 object-contain"
          width={24}
          height={24}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="mt-3 font-display text-sm font-bold leading-snug tracking-tight text-[#722F61] sm:text-base">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-[#722F61]/80">
        {description}
      </p>
    </article>
  )
}

function UseCaseCard({
  title,
  description,
  benefits,
}: {
  title: string
  description: string
  benefits: string[]
}) {
  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-xl p-4 transition hover:border-[#A975A9]/40 sm:p-5 lg:p-6',
        glassCardClass,
      )}
    >
      <h3 className="font-display text-base font-bold leading-snug tracking-tight text-[#722F61] sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-[#722F61]/80 lg:text-base">
        {description}
      </p>
      <div className="mt-4 space-y-2">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex items-start gap-2.5">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#A975A9]" />
            <span className="text-xs font-medium text-[#722F61] sm:text-sm">{benefit}</span>
          </div>
        ))}
      </div>
    </article>
  )
}

export function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="space-y-0 bg-transparent px-0 pb-12 pt-0 lg:pb-16">
      {/* Hero Section */}
      <section id="product-hero" className="relative scroll-mt-[5.5rem] bg-transparent">
        <SectionFrame variant="hero">
          <SectionCard variant="hero" className="relative overflow-hidden">
            <div className="grid w-full gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div className="flex flex-col justify-center">
                <Reveal>
                  <p className={cn('inline-flex w-fit text-xs font-semibold uppercase tracking-[0.28em]', glassChipClass)}>
                    UltraCore Knowledge Hub
                  </p>
                  <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#722F61] sm:text-5xl lg:text-[3.25rem]">
                    Enterprise AI at the Edge
                  </h1>
                </Reveal>
                <Reveal delayMs={80}>
                  <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#722F61]/85 sm:mt-6 lg:text-lg">
                    UltraCore Knowledge Hub empowers enterprises to deploy and coordinate intelligent AI workloads across distributed edge environments. Process data locally, synchronize instantly, and make smarter decisions without cloud dependency.
                  </p>
                </Reveal>
                <Reveal delayMs={160} className="mt-8 sm:mt-9">
                  <a
                    href="https://app.ultrasynk.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#722F61] to-[#8B3B7F] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl hover:scale-105 active:scale-100 sm:px-8 sm:py-4 sm:text-lg"
                  >
                    Launch Platform
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Reveal>
              </div>
              <div className="relative hidden h-64 w-full rounded-2xl bg-gradient-to-br from-[#722F61]/20 to-[#A975A9]/10 lg:flex lg:h-96 lg:items-center lg:justify-center">
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#722F61]/20 via-transparent to-transparent" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="flex justify-center gap-3 mb-4">
                    <div className="h-2 w-2 rounded-full bg-[#A975A9] animate-pulse" />
                    <div className="h-2 w-2 rounded-full bg-[#A975A9] animate-pulse delay-100" />
                    <div className="h-2 w-2 rounded-full bg-[#A975A9] animate-pulse delay-200" />
                  </div>
                  <p className="text-sm font-semibold text-[#722F61]">Edge Network Active</p>
                </div>
              </div>
            </div>
          </SectionCard>
        </SectionFrame>
      </section>

      {/* Product Overview Section */}
      <section id="product-overview" className="relative scroll-mt-[5.5rem] bg-transparent">
        <SectionFrame variant="features">
          <SectionCard variant="features" className="relative overflow-hidden">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
              <Reveal>
                <div>
                  <p className={cn('inline-flex text-xs font-semibold uppercase tracking-[0.28em]', glassChipClass)}>
                    What is UltraCore?
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-[#722F61] sm:text-4xl">
                    Intelligence at Every Edge
                  </h2>
                  <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#722F61]/80 lg:text-lg">
                    UltraCore Knowledge Hub is a comprehensive platform for deploying, synchronizing, and orchestrating AI workloads across distributed edge environments. Designed for enterprises that demand instant decisions without cloud latency.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={80}>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-[#A975A9]" />
                    <div>
                      <h3 className="font-semibold text-[#722F61]">Sub-20ms Latency</h3>
                      <p className="mt-1 text-sm text-[#722F61]/75">Process and respond to events at the edge in milliseconds, not seconds.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-[#A975A9]" />
                    <div>
                      <h3 className="font-semibold text-[#722F61]">10,000+ Node Scale</h3>
                      <p className="mt-1 text-sm text-[#722F61]/75">Coordinate and maintain consistency across thousands of edge devices seamlessly.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-[#A975A9]" />
                    <div>
                      <h3 className="font-semibold text-[#722F61]">99.99% Uptime SLA</h3>
                      <p className="mt-1 text-sm text-[#722F61]/75">Enterprise-grade reliability built for mission-critical deployments.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-[#A975A9]" />
                    <div>
                      <h3 className="font-semibold text-[#722F61]">Zero-Trust Security</h3>
                      <p className="mt-1 text-sm text-[#722F61]/75">Encrypted channels, device attestation, and policy enforcement at every edge node.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </SectionCard>
        </SectionFrame>
      </section>

      {/* Product Features Grid */}
      <section id="product-features" className="relative scroll-mt-[5.5rem] bg-transparent">
        <SectionFrame variant="features">
          <SectionCard variant="features" className="relative overflow-hidden">
            <Reveal>
              <div>
                <p className={cn('inline-flex text-xs font-semibold uppercase tracking-[0.28em]', glassChipClass)}>
                  Core Capabilities
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-[#722F61] sm:text-4xl lg:text-[2.75rem]">
                  Powerful Features for Edge Intelligence
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-3 pt-8 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {productFeatures.map((feature, index) => (
                <Reveal key={feature.title} delayMs={index * 40}>
                  <FeatureCard {...feature} />
                </Reveal>
              ))}
            </div>
          </SectionCard>
        </SectionFrame>
      </section>

      {/* Technical Stack Section */}
      <section id="product-tech" className="relative scroll-mt-[5.5rem] bg-transparent">
        <SectionFrame variant="features">
          <SectionCard variant="features" className="relative overflow-hidden">
            <Reveal>
              <div>
                <p className={cn('inline-flex text-xs font-semibold uppercase tracking-[0.28em]', glassChipClass)}>
                  Technology Foundation
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-[#722F61] sm:text-4xl lg:text-[2.75rem]">
                  Built on NVIDIA Enterprise SDKs
                </h2>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#722F61]/80 lg:text-lg">
                  UltraCore Knowledge Hub leverages industry-leading NVIDIA SDKs to deliver sub-5ms edge latency, real-time synchronization, and distributed scale across thousands of edge nodes.
                </p>
              </div>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:gap-5">
              {techStack.map((tech, index) => (
                <Reveal key={tech.name} delayMs={80 + index * 40}>
                  <div className={cn('flex flex-col rounded-xl p-4 sm:p-5 lg:p-6', glassCardClass)}>
                    <h3 className="font-display text-sm font-bold tracking-tight text-[#722F61] sm:text-base">
                      {tech.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#722F61]/75">
                      {tech.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delayMs={320} className="mt-8">
              <div className="rounded-xl border border-violet/30 bg-pearl/50 p-5 sm:p-6 lg:p-7">
                <p className="text-sm leading-relaxed text-[#722F61]/80">
                  <span className="font-semibold text-[#722F61]">Enterprise-Grade Performance:</span> These technologies enable <span className="font-medium">sub-5ms processing latency</span>, support for <span className="font-medium">10,000+ active edge nodes</span>, <span className="font-medium">40+ edge regions</span>, and <span className="font-medium">99.99% synchronization uptime</span> across your distributed infrastructure.
                </p>
              </div>
            </Reveal>
          </SectionCard>
        </SectionFrame>
      </section>

      {/* Use Cases Section */}
      <section id="product-usecases" className="relative scroll-mt-[5.5rem] bg-transparent">
        <SectionFrame variant="useCases">
          <SectionCard variant="useCases" className="relative overflow-hidden">
            <Reveal>
              <div>
                <p className={cn('inline-flex text-xs font-semibold uppercase tracking-[0.28em]', glassChipClass)}>
                  Use Cases
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-[#722F61] sm:text-4xl lg:text-[2.75rem]">
                  Where UltraCore Delivers Impact
                </h2>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#722F61]/80 lg:text-lg">
                  From smart cities to autonomous systems, enterprises across industries rely on UltraCore Knowledge Hub for intelligent edge AI deployment and coordination.
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-3 pt-8 sm:gap-4 md:grid-cols-2 lg:gap-5">
              {useCases.map((useCase, index) => (
                <Reveal key={useCase.title} delayMs={80 + index * 40}>
                  <UseCaseCard {...useCase} />
                </Reveal>
              ))}
            </div>
          </SectionCard>
        </SectionFrame>
      </section>

      {/* Final CTA Section */}
      <section id="product-cta" className="relative scroll-mt-[5.5rem] bg-transparent">
        <SectionFrame variant="finalCta">
          <SectionCard variant="features" className="relative overflow-hidden">
            <Reveal className="flex flex-col items-center text-center">
              <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-[#722F61] sm:text-4xl lg:text-[2.75rem]">
                Ready to Deploy Edge AI?
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#722F61]/80 lg:text-lg">
                Get started with UltraCore Knowledge Hub today. Deploy AI at the edge, synchronize instantly, and unlock enterprise-scale intelligence.
              </p>
              <a
                href="https://app.ultrasynk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#722F61] to-[#8B3B7F] px-8 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl hover:scale-105 active:scale-100 sm:text-lg"
              >
                Launch Platform
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-6 text-sm text-[#722F61]/70">
                No credit card required. Deploy your first edge workload in minutes.
              </p>
            </Reveal>
          </SectionCard>
        </SectionFrame>
      </section>
    </div>
  )
}
