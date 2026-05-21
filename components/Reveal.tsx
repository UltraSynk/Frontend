import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import { useInView } from '../hooks/useInView'

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
}

/** Subtle enter animation — content stays visible (no scroll flicker). */
export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const { ref, inView } = useInView({ once: true, rootMargin: '100px 0px 100px 0px' })

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-100',
        'motion-reduce:translate-y-0',
        className,
      )}
      style={{ transitionDelay: inView ? `${delayMs}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
