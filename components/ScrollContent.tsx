import type { ReactNode } from 'react'

/** Scrollable page content above the fixed landing background. */
export function ScrollContent({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-0 animate-page-fade-in motion-reduce:transform-none">
      {children}
    </div>
  )
}
