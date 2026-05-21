import type { BlogPost } from '@/components/ui/blog-posts'

export type UseCasePost = BlogPost & {
  summary: string
  highlights: string[]
}

export const useCasePosts: UseCasePost[] = [
  {
    id: 1,
    title: 'Smart city sensor mesh',
    category: 'Smart cities',
    imageUrl: '/use-cases/smart-city-sensor-mesh.png',
    views: 2840,
    readTime: 7,
    rating: 5,
    summary:
      'UltraSynk unifies traffic, environmental, and public-safety sensors into one real-time mesh—processing events at the edge and synchronizing district-wide state without flooding central clouds.',
    highlights: [
      'Sub-20ms edge inference for congestion, air quality, and incident signals',
      'Conflict-aware sync across boroughs and operator dashboards',
      'Policy gates for citizen data residency and retention',
      'Live observability for thousands of endpoints from a single control plane',
    ],
  },
  {
    id: 2,
    title: 'Industrial automation at scale',
    category: 'Industrial IoT',
    imageUrl: '/use-cases/industrial-automation.png',
    views: 1920,
    readTime: 9,
    rating: 5,
    summary:
      'Manufacturing teams deploy UltraSynk on the plant floor to align PLCs, vision systems, and MES workflows—catching anomalies locally and propagating only actionable state upstream.',
    highlights: [
      'Edge AI for vibration, temperature, and quality anomalies before downtime spreads',
      'Deterministic sync between lines, sites, and enterprise historians',
      'Offline-tolerant edge nodes with automatic reconciliation',
      'Integration-ready APIs for SCADA and existing OT stacks',
    ],
  },
  {
    id: 3,
    title: 'Telecom edge orchestration',
    category: 'Telecom & networks',
    imageUrl: '/use-cases/telecom-edge-orchestration.png',
    views: 1560,
    readTime: 6,
    rating: 4,
    summary:
      'Carriers orchestrate RAN, core, and customer-premise edge from one fabric—routing workloads, enforcing SLAs, and keeping configuration consistent across regions.',
    highlights: [
      'Low-latency sync for slice provisioning and edge workload placement',
      'Secure tunnels and attestation across POPs and street cabinets',
      'Global distribution with regional policy and failover',
      'Bandwidth-efficient telemetry—decisions at the edge, not every raw packet in cloud',
    ],
  },
  {
    id: 4,
    title: 'IoT fleet intelligence',
    category: 'IoT infrastructure',
    imageUrl: '/use-cases/iot-fleet-intelligence.png',
    views: 2105,
    readTime: 8,
    rating: 5,
    summary:
      'Fleet operators manage millions of devices with unified firmware posture, telemetry pipelines, and AI-driven health scoring—always-on sync even across intermittent links.',
    highlights: [
      'Fleet-wide OTA coordination with edge-validated rollout windows',
      'Predictive maintenance models running close to assets',
      'Hierarchical sync from device → gateway → cloud control plane',
      'Enterprise RBAC and audit trails for multi-tenant fleets',
    ],
  },
]
