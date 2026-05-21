import { cn } from '@/lib/utils'
import { MoveRight, Star } from 'lucide-react'

/**
 * Desktop use-case grid (md+, 650px tall, 2:1 columns, 20px gap).
 * At ~1328px content width: left ≈872px, right ≈436px.
 */
export const BLOG_DESKTOP_IMAGE_SIZES = {
  featured: { width: 872, height: 470, source2x: { w: 1744, h: 940 }, ratio: '≈1.85:1' },
  side: { width: 436, height: 225, source2x: { w: 872, h: 450 }, ratio: '≈1.94:1' },
  banner: { width: 872, height: 150, source2x: { w: 1744, h: 320 }, ratio: '≈5.8:1' },
} as const

export interface BlogPost {
  id: number
  title: string
  category: string
  imageUrl: string
  href?: string
  views: number
  readTime?: number
  rating?: number
  className?: string
}

export interface BlogPostsGridProps {
  title?: string
  description?: string
  backgroundLabel?: string
  backgroundPosition?: 'left' | 'right'
  posts?: BlogPost[]
  className?: string
  onPostClick?: (post: BlogPost) => void
  /** Opens detail UI when the arrow control is clicked (does not navigate via href). */
  onArrowClick?: (post: BlogPost) => void
}

function PostTile({
  post,
  index,
  onPostClick,
  onArrowClick,
}: {
  post: BlogPost
  index: number
  onPostClick?: (post: BlogPost) => void
  onArrowClick?: (post: BlogPost) => void
}) {
  const {
    title: postTitle,
    category,
    imageUrl,
    views,
    readTime,
    rating = 4,
    className: postClassName,
    href,
  } = post

  const isPrimary = index === 0
  const isCompact = !isPrimary
  const ratingStars = Math.min(5, Math.max(0, Math.round(rating)))
  const starSize = isCompact ? 14 : 16

  const desktopPlacement = [
    'md:col-start-1 md:row-start-1 md:row-span-2',
    'md:col-start-2 md:row-start-1',
    'md:col-start-2 md:row-start-2',
    'md:col-start-1 md:row-start-3',
  ][index]

  const shellClass = cn(
        'group relative flex size-full min-h-0 flex-col justify-end overflow-hidden rounded-[20px] border border-white/15 bg-cover bg-center bg-no-repeat text-white shadow-[0_12px_40px_rgba(31,16,36,0.28)] ring-1 ring-white/10 max-md:min-h-[260px] max-md:h-auto transition-all duration-300 hover:scale-[0.98] hover:border-white/30 hover:shadow-[0_16px_48px_rgba(31,16,36,0.38)] md:h-full',
    isCompact ? 'p-3.5 sm:p-4' : 'p-4 sm:p-5',
    href && !onArrowClick && 'cursor-pointer',
    !href && onPostClick && !onArrowClick && 'cursor-pointer',
    desktopPlacement,
    postClassName,
  )

  const inner = (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[#1f1024]/25" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1f1024]/95 via-[#1f1024]/55 via-45% to-transparent transition-opacity duration-500 group-hover:from-[#1f1024]/98"
        aria-hidden
      />

      <article className="relative z-10 flex min-w-0 items-end gap-2 sm:gap-2.5">
        <div className={cn('flex min-w-0 flex-1 flex-col', isCompact ? 'gap-1.5' : 'gap-2')}>
          <h3
            className={cn(
              'line-clamp-2 font-display font-bold leading-snug text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]',
              isCompact
                ? 'text-[15px] sm:text-base'
                : 'text-lg sm:text-xl lg:text-2xl',
            )}
          >
            {postTitle}
          </h3>
          <div className={cn('flex flex-col', isCompact ? 'gap-1.5' : 'gap-2')}>
            <span
              className={cn(
                'w-fit rounded-full border border-white/25 bg-[#722F61]/90 font-medium capitalize text-white shadow-sm',
                isCompact ? 'px-2 py-0.5 text-[10px] sm:text-[11px]' : 'px-2.5 py-0.5 text-xs sm:text-sm',
              )}
            >
              {category}
            </span>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <div className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    width={starSize}
                    height={starSize}
                    key={idx}
                    stroke={idx < ratingStars ? '#E1B4DA' : 'rgba(255,255,255,0.35)'}
                    fill={idx < ratingStars ? '#E1B4DA' : 'rgba(255,255,255,0.15)'}
                  />
                ))}
              </div>
              <span
                className={cn(
                  'font-medium text-white/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]',
                  isCompact ? 'text-[11px] sm:text-xs' : 'text-xs sm:text-sm',
                )}
              >
                ({views.toLocaleString()} Views)
              </span>
            </div>
            {readTime !== undefined && readTime > 0 && (
              <p
                className={cn(
                  'font-semibold text-white/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]',
                  isCompact ? 'text-[11px] sm:text-xs' : 'text-xs sm:text-sm',
                )}
              >
                {readTime} min read
              </p>
            )}
          </div>
        </div>
        {onArrowClick ? (
          <button
            type="button"
            className="mb-0.5 shrink-0 self-end rounded-full p-1 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-all duration-300 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 group-hover:translate-x-0.5"
            aria-label={`Open details for ${postTitle}`}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onArrowClick(post)
            }}
          >
            <MoveRight
              className="transition-transform duration-300 group-hover:translate-x-1.5"
              width={isCompact ? 24 : 28}
              height={isCompact ? 24 : 28}
              strokeWidth={2}
              aria-hidden
            />
          </button>
        ) : (
          <MoveRight
            className="mb-0.5 shrink-0 self-end text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-all duration-300 group-hover:translate-x-1.5"
            width={isCompact ? 24 : 28}
            height={isCompact ? 24 : 28}
            strokeWidth={2}
            aria-hidden
          />
        )}
      </article>
    </>
  )

  if (href && !onArrowClick) {
    return (
      <a
        href={href}
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={cn(shellClass, 'no-underline')}
        onClick={() => onPostClick?.(post)}
      >
        {inner}
      </a>
    )
  }

  return (
    <div
      role={onPostClick ? 'button' : undefined}
      tabIndex={onPostClick ? 0 : undefined}
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={shellClass}
      onClick={() => onPostClick?.(post)}
      onKeyDown={(e) => {
        if (!onPostClick) return
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onPostClick(post)
        }
      }}
    >
      {inner}
    </div>
  )
}

/** Magazine-style blog / story grid (shadcn-friendly). */
export function BlogPostsGrid({
  title,
  description,
  backgroundLabel,
  backgroundPosition = 'left',
  posts = [],
  className,
  onPostClick,
  onArrowClick,
}: BlogPostsGridProps) {
  return (
    <div
      className={cn(
        'container relative mx-auto my-8 max-w-full px-2 py-6 sm:my-12 sm:px-4 sm:py-8 md:my-16 md:py-10',
        className,
      )}
    >
      {title ? (
        <h2 className="mb-2 text-center text-4xl font-semibold capitalize !leading-[1.4] text-white md:text-5xl lg:text-6xl">
          {title}
        </h2>
      ) : null}

      {backgroundLabel ? (
        <span
          className={cn(
            'pointer-events-none absolute -top-10 -z-10 select-none text-[180px] font-extrabold leading-[1] text-white/[0.06] md:text-[250px] lg:text-[400px]',
            backgroundPosition === 'left' ? '-left-[18%]' : '-right-[28%]',
          )}
          aria-hidden
        >
          {backgroundLabel}
        </span>
      ) : null}

      {description ? (
        <p className="mx-auto mb-8 max-w-[800px] text-center text-xl !leading-[2] text-[#722F61]/80 md:text-2xl">
          {description}
        </p>
      ) : null}

      <div className="grid h-auto grid-cols-1 gap-5 md:h-[650px] md:grid-cols-[2fr_1fr] md:grid-rows-[1fr_1fr_150px]">
        {posts.map((post, index) => (
          <PostTile
            key={post.id ?? index}
            post={post}
            index={index}
            onPostClick={onPostClick}
            onArrowClick={onArrowClick}
          />
        ))}
      </div>
    </div>
  )
}

/** Alias for drop-in parity with common shadcn demos. */
export const Component = BlogPostsGrid
