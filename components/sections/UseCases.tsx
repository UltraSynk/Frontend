import { useState } from 'react'
import { BlogPostsGrid } from '@/components/ui/blog-posts'
import { Reveal } from '../Reveal'
import { SectionCard, SectionFrame } from '../SiteGlass'
import { UseCaseModal } from './UseCaseModal'
import { useCasePosts, type UseCasePost } from './useCaseData'

export function UseCases() {
  const [activePost, setActivePost] = useState<UseCasePost | null>(null)

  return (
    <section id="use-cases" className="relative scroll-mt-[5.5rem] bg-transparent">
      <SectionFrame variant="useCases">
        <SectionCard variant="useCases" className="relative overflow-hidden">
          <div className="relative z-10">
            <div className="grid gap-8 pb-2 lg:grid-cols-2 lg:items-end lg:gap-14 lg:pb-4">
              <Reveal>
                <p className="glass-chip inline-flex text-xs font-semibold uppercase tracking-[0.28em] text-[#722F61]">
                  Use cases
                </p>
                <h2 className="mt-3 font-display text-[1.65rem] font-bold leading-[1.12] tracking-tight text-[#722F61] sm:text-4xl lg:text-[2.75rem]">
                  Where UltraSynk delivers edge intelligence
                </h2>
              </Reveal>
              <Reveal delayMs={80}>
                <p className="text-pretty text-base leading-relaxed text-[#722F61]/85 lg:text-lg">
                  From smart cities to industrial automation—teams use UltraSynk to process,
                  synchronize, and coordinate data across distributed edge environments.
                </p>
              </Reveal>
            </div>

            <BlogPostsGrid
              posts={useCasePosts}
              className="!my-0 px-0 pb-2 pt-2 md:pb-4"
              onArrowClick={(post) =>
                setActivePost(useCasePosts.find((p) => p.id === post.id) ?? null)
              }
            />
          </div>
        </SectionCard>
      </SectionFrame>

      <UseCaseModal post={activePost} onClose={() => setActivePost(null)} />
    </section>
  )
}
