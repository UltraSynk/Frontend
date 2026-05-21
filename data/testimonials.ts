export type TestimonialStory = {
  name: string
  role: string
  quote: string
  image: string
}

/** Carousel order: boy → girl → boy → girl → boy → girl */
export const TESTIMONIAL_STORIES: TestimonialStory[] = [
  {
    name: 'Daniel Brooks',
    role: 'Senior Infrastructure Architect – Vertex Networks',
    quote:
      "UltraSynk provides a modern approach to distributed intelligence. The platform's real-time synchronization and monitoring capabilities helped us optimize performance across multiple edge environments.",
    image: '/testimonials/daniel-brooks.png',
  },
  {
    name: 'Sophia Reynolds',
    role: 'Operations Director – SmartGrid Systems',
    quote:
      'UltraSynk transformed the way we handle distributed infrastructure. The real-time synchronization capabilities significantly reduced operational delays, and the edge intelligence features gave our teams faster visibility into critical system events.',
    image: '/testimonials/sophia-reynolds.png',
  },
  {
    name: 'Ethan Walker',
    role: 'IoT Solutions Consultant – CoreLink Systems',
    quote:
      'The command-center-style dashboard and AI synchronization workflows make UltraSynk stand out. It gives technical teams a clear, intelligent view of distributed operations in real time.',
    image: '/testimonials/ethan-walker.png',
  },
  {
    name: 'Amelia Carter',
    role: 'Head of Digital Innovation – UrbanFlow Technologies',
    quote:
      'We were searching for a platform that could support scalable edge processing without compromising performance. UltraSynk delivered exactly that. The synchronization engine feels incredibly responsive and enterprise-ready.',
    image: '/testimonials/amelia-carter.png',
  },
  {
    name: 'Michael Turner',
    role: 'Director of Engineering – PulseEdge Technologies',
    quote:
      "From edge analytics to intelligent synchronization, UltraSynk introduced a level of responsiveness we hadn't experienced before. It's a strong foundation for organizations building scalable edge AI ecosystems.",
    image: '/testimonials/michael-turner.png',
  },
  {
    name: 'Isabella Morgan',
    role: 'Technology Strategy Manager – Nexa Automation',
    quote:
      'What impressed us most about UltraSynk was the ability to process and analyze data directly at the edge. The platform helped us improve system coordination while reducing unnecessary cloud dependency.',
    image: '/testimonials/isabella-morgan.png',
  },
]

export const HERO_TESTIMONIAL =
  TESTIMONIAL_STORIES.find((story) => story.name === 'Amelia Carter') ?? TESTIMONIAL_STORIES[3]
