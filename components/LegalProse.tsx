import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

export function LegalProse({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <article
      className={cn(
        'legal-prose mx-auto max-w-3xl text-pretty text-sm leading-relaxed text-lavender sm:text-[15px]',
        className,
      )}
    >
      {children}
    </article>
  )
}
