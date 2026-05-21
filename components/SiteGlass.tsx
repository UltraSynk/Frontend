import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

/** Light frosted glass — warm plum & lilac */
export const glassBase =
  'border border-violet/30 bg-pearl/70 shadow-[0_8px_32px_rgba(114,47,97,0.07),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl backdrop-saturate-140'

export const glassPanelClass = cn('rounded-2xl sm:rounded-[1.65rem]', glassBase)

export const glassSectionCardClass = cn(
  'rounded-2xl sm:rounded-[1.75rem]',
  'border border-violet/22 bg-porcelain/28 shadow-[0_8px_40px_rgba(114,47,97,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-md',
)

export const glassSectionCardOverImageClass = glassSectionCardClass

export const glassCardClass = cn(
  'rounded-2xl transition duration-300 hover:border-violet/45 hover:shadow-[0_12px_40px_rgba(114,47,97,0.1)]',
  glassBase,
)

export const glassChipClass =
  'rounded-full border border-violet/40 bg-plum/50 px-3 py-1.5 shadow-[0_0_16px_rgba(225,179,225,0.25),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-md'

/** Dark frosted panel — testimonials carousel shell */
export const glassDarkClass =
  'border border-white/20 bg-[#3A2B47]/35 shadow-[0_30px_100px_rgba(58,43,71,0.25)] backdrop-blur-2xl'

export const glassInputClass =
  'rounded-xl border border-violet/35 bg-white/75 text-void shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-md placeholder:text-lavender/70'

export const glassNavClass =
  'border-b border-transparent bg-transparent shadow-none'

export const panelCardClass = glassCardClass

export const glassFaqItemClass =
  'glass-faq-item overflow-hidden transition-all duration-300 sm:rounded-[1.35rem]'

export const glassFaqItemOpenClass =
  'border-violet/40 bg-pearl/48 shadow-[0_12px_40px_rgba(114,47,97,0.12)] ring-1 ring-white/55'

export const glassFaqCtaClass =
  'glass-faq-cta hover-lift rounded-[1.35rem] transition duration-300 sm:rounded-[1.75rem]'

const SECTION_FRAME: Record<
  | 'hero'
  | 'architecture'
  | 'features'
  | 'useCases'
  | 'pricing'
  | 'testimonials'
  | 'faq'
  | 'contact'
  | 'finalCta',
  string
> = {
  hero: 'bg-transparent py-6 sm:py-8 lg:py-10',
  architecture: 'bg-transparent py-8 sm:py-10 lg:py-12',
  features: 'bg-transparent py-8 sm:py-10 lg:py-12',
  useCases: 'bg-transparent py-8 sm:py-10 lg:py-12',
  pricing: 'bg-transparent py-8 sm:py-10 lg:py-12',
  testimonials: 'bg-transparent py-7 sm:py-9 lg:py-11',
  faq: 'bg-transparent py-8 sm:py-10 lg:py-12',
  contact: 'bg-transparent py-8 sm:py-10 lg:py-12',
  finalCta: 'relative overflow-hidden bg-transparent py-8 sm:py-10 lg:py-12',
}

export function SectionFrame({
  variant,
  className,
  children,
}: {
  variant: keyof typeof SECTION_FRAME
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn('relative w-full text-ink', SECTION_FRAME[variant], className)}>
      {children}
    </div>
  )
}

export function SectionCard({
  variant,
  className,
  children,
}: {
  variant: keyof typeof SECTION_FRAME
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        glassSectionCardClass,
        variant === 'testimonials'
          ? 'p-4 sm:p-5 md:p-6'
          : variant === 'hero'
            ? 'px-5 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6 md:px-8 lg:px-10'
            : 'p-5 sm:p-6 md:p-8 lg:p-9',
        className,
      )}
    >
      {children}
    </div>
  )
}
