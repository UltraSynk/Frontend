import { useEffect, useMemo, useRef, useState } from 'react'
import { HandCoins, Home, LayoutGrid, MessageSquare, Sparkles, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { LimelightNav, type NavItem } from '@/components/ui/limelight-nav'
import { cn } from '../lib/cn'
import { glassNavClass } from './SiteGlass'

const LOGO_SRC = '/logo.png'
const NAV_CTA_LABEL = 'UltraCore Knowledge Hub'

const links = [
  { href: '/#home', label: 'Home' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#features', label: 'Features' },
  { href: '/#use-cases', label: 'Use cases' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#contact', label: 'Contact' },
] as const

const linkIcons: LucideIcon[] = [Home, Sparkles, LayoutGrid, HandCoins, MessageSquare, Users]

function indexFromHash() {
  const h = window.location.hash
  if (!h) return 0
  const idx = links.findIndex((l) => l.href === `/${h}` || l.href.endsWith(h))
  return idx >= 0 ? idx : 0
}

export function Navbar() {
  const { pathname, hash } = useLocation()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)
  const [activeNav, setActiveNav] = useState(() =>
    typeof window !== 'undefined' ? indexFromHash() : 0,
  )
  const activeNavRef = useRef(activeNav)

  useEffect(() => {
    activeNavRef.current = activeNav
  }, [activeNav])

  const limelightItems = useMemo<NavItem[]>(
    () =>
      links.map((l, i) => {
        const Icon = linkIcons[i]!
        return {
          id: l.href,
          href: l.href,
          label: l.label,
          icon: <Icon />,
        }
      }),
    [],
  )

  useEffect(() => {
    if (!isHome) return

    const sectionIds = links.map((l) => l.href.replace('/#', ''))
    const syncFromHash = () => setActiveNav(indexFromHash())
    const sections = sectionIds
      .map((id, index) => ({ index, el: document.getElementById(id) }))
      .filter((item): item is { index: number; el: HTMLElement } => item.el !== null)

    if (sections.length === 0) return

    const visibleRatios = new Map<number, number>()
    let syncFrame = 0

    const setActiveNavIfChanged = (index: number) => {
      if (activeNavRef.current === index) return
      activeNavRef.current = index
      setActiveNav(index)
    }

    const syncActiveFromVisible = () => {
      const visibleSections = sections.filter((s) => (visibleRatios.get(s.index) ?? 0) > 0)

      if (visibleSections.length > 0) {
        const bestVisible = visibleSections.reduce((best, current) => {
          const bestRatio = visibleRatios.get(best.index) ?? 0
          const currentRatio = visibleRatios.get(current.index) ?? 0
          if (currentRatio !== bestRatio) return currentRatio > bestRatio ? current : best
          return current.el.getBoundingClientRect().top < best.el.getBoundingClientRect().top
            ? current
            : best
        })
        setActiveNavIfChanged(bestVisible.index)
        return
      }

      const marker = 180
      let nextActive = 0
      sections.forEach(({ index, el }) => {
        if (el.getBoundingClientRect().top <= marker) nextActive = index
      })
      setActiveNavIfChanged(nextActive)
    }

    const scheduleSync = () => {
      cancelAnimationFrame(syncFrame)
      syncFrame = requestAnimationFrame(syncActiveFromVisible)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sections.find((s) => s.el === entry.target)?.index
          if (index === undefined) return
          visibleRatios.set(index, entry.isIntersecting ? entry.intersectionRatio : 0)
        })
        scheduleSync()
      },
      {
        root: null,
        rootMargin: '-72px 0px -45% 0px',
        threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1],
      },
    )

    syncFromHash()
    syncActiveFromVisible()
    sections.forEach(({ el }) => observer.observe(el))
    window.addEventListener('hashchange', syncFromHash)
    window.addEventListener('scroll', scheduleSync, { passive: true })
    window.addEventListener('resize', scheduleSync)
    return () => {
      cancelAnimationFrame(syncFrame)
      observer.disconnect()
      window.removeEventListener('hashchange', syncFromHash)
      window.removeEventListener('scroll', scheduleSync)
      window.removeEventListener('resize', scheduleSync)
    }
  }, [isHome])

  useEffect(() => {
    if (!isHome || !hash) return
    const idx = links.findIndex((l) => l.href === hash || l.href.endsWith(hash))
    if (idx >= 0) {
      activeNavRef.current = idx
      setActiveNav(idx)
    }
  }, [hash, isHome])

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 w-full text-ink', glassNavClass)}>
      <div className="relative mx-auto flex h-16 w-full max-w-[1400px] items-center px-5 sm:h-[4.5rem] sm:px-6 md:px-7 lg:px-8">
        <Link
          to="/"
          className="z-10 inline-flex items-center rounded-full py-1 no-underline focus-visible:outline-offset-4"
        >
          <img
            src={LOGO_SRC}
            alt="UltraSynk"
            className="h-12 w-auto max-w-[min(88vw,22rem)] object-contain object-left sm:h-14 sm:max-w-[min(85vw,28rem)] lg:max-w-[34rem] xl:max-w-[38rem]"
            width={1344}
            height={44}
            decoding="async"
          />
        </Link>

        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <LimelightNav
            aria-label="Primary"
            items={limelightItems}
            defaultActiveIndex={activeNav}
            iconClassName="text-void"
            limelightClassName="bg-abyss shadow-[0_0_32px_rgba(114,47,97,0.35)]"
            className="h-[3.25rem] rounded-full border border-violet/25 bg-pearl/50 backdrop-blur-md"
          />
        </div>

        <div className="z-10 ml-auto mr-3 flex shrink-0 items-center gap-2 sm:mr-5 sm:gap-3">
          <Link
            to="/product"
            className="btn-primary hidden shrink-0 whitespace-nowrap px-4 py-2.5 text-[11px] md:inline-flex lg:px-5 lg:text-xs xl:text-sm"
          >
            {NAV_CTA_LABEL}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 min-w-[4.25rem] items-center justify-center rounded-full border border-violet/30 bg-transparent px-3 text-xs font-semibold uppercase tracking-wide text-void lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'border-t border-violet/15 bg-pearl/70 backdrop-blur-lg lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 py-4 sm:px-6 md:px-7 lg:px-8">
          {links.map((l, index) => {
            const isActive = isHome && activeNav === index
            return (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  'rounded-xl px-3 py-3 text-sm font-medium no-underline transition',
                  isActive
                    ? 'bg-plum/55 font-semibold text-abyss ring-1 ring-violet/35'
                    : 'text-void hover:bg-plum/40 hover:text-abyss',
                )}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => {
                  if (isHome) {
                    activeNavRef.current = index
                    setActiveNav(index)
                  }
                  setOpen(false)
                }}
              >
                {l.label}
              </a>
            )
          })}
          <Link
            to="/product"
            className="btn-primary mt-2 justify-center whitespace-nowrap px-6 py-3 text-sm"
            onClick={() => setOpen(false)}
          >
            {NAV_CTA_LABEL}
          </Link>
        </div>
      </div>
    </header>
  )
}
