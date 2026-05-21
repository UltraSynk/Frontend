import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '../../lib/cn'
import { glassCardClass, glassChipClass } from '../SiteGlass'
import type { UseCasePost } from './useCaseData'

type UseCaseModalProps = {
  post: UseCasePost | null
  onClose: () => void
}

export function UseCaseModal({ post, onClose }: UseCaseModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (post) {
      if (!dialog.open) dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else if (dialog.open) {
      dialog.close()
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [post])

  return (
    <dialog
      ref={dialogRef}
      className="use-case-dialog fixed inset-0 z-[200] m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-[#1f1024]/65 backdrop:backdrop-blur-sm"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose()
      }}
    >
      {post ? (
        <div
          className={cn(
            'use-case-dialog-panel mx-4 my-6 flex max-h-[min(92vh,880px)] w-[min(calc(100%-2rem),42rem)] flex-col overflow-hidden rounded-[1.75rem] sm:mx-auto sm:my-10 sm:w-[min(100%,42rem)]',
            glassCardClass,
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="relative h-40 shrink-0 bg-cover bg-center sm:h-48"
            style={{ backgroundImage: `url(${post.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1024]/90 via-[#1f1024]/40 to-transparent" />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
              aria-label="Close"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
            <div className="absolute bottom-4 left-4 right-14">
              <span className={cn(glassChipClass, 'text-[10px] uppercase tracking-[0.2em] text-white')}>
                {post.category}
              </span>
              <h2 className="mt-2 font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                {post.title}
              </h2>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
            <p className="text-pretty text-sm leading-relaxed text-[#722F61]/90 sm:text-[15px]">
              {post.summary}
            </p>
            <h3 className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#722F61]">
              Key capabilities
            </h3>
            <ul className="mt-3 space-y-2.5">
              {post.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-[#722F61]/85 sm:text-[15px]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A975A9]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 border-t border-violet/20 pt-5">
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-xl bg-[#722F61] px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-[#5a2650]"
              >
                Talk to our team
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-xl border border-violet/35 bg-pearl/60 px-5 py-2.5 text-sm font-semibold text-[#722F61] transition hover:bg-plum/30"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}
