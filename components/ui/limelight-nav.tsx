import {
  cloneElement,
  isValidElement,
  useLayoutEffect,
  useRef,
  useState,
  type ReactElement,
  type SVGProps,
} from 'react'
import { Bell, Compass, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

const DefaultHomeIcon = (props: SVGProps<SVGSVGElement>) => <Home {...props} aria-hidden />
const DefaultCompassIcon = (props: SVGProps<SVGSVGElement>) => (
  <Compass {...props} aria-hidden />
)
const DefaultBellIcon = (props: SVGProps<SVGSVGElement>) => <Bell {...props} aria-hidden />

export type NavItem = {
  id: string | number
  icon: ReactElement
  label?: string
  /** When set, item renders as a real link (recommended for in-page anchors). */
  href?: string
  onClick?: () => void
}

const defaultNavItems: NavItem[] = [
  { id: 'default-home', icon: <DefaultHomeIcon />, label: 'Home' },
  { id: 'default-explore', icon: <DefaultCompassIcon />, label: 'Explore' },
  { id: 'default-notifications', icon: <DefaultBellIcon />, label: 'Notifications' },
]

export type LimelightNavProps = {
  items?: NavItem[]
  defaultActiveIndex?: number
  onTabChange?: (index: number) => void
  className?: string
  limelightClassName?: string
  iconContainerClassName?: string
  iconClassName?: string
  'aria-label'?: string
}

/**
 * Adaptive-width icon rail with a “limelight” indicator under the active item.
 */
export function LimelightNav({
  items = defaultNavItems,
  defaultActiveIndex = 0,
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
  'aria-label': ariaLabel = 'Primary',
}: LimelightNavProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)
  const [isReady, setIsReady] = useState(false)
  const navItemRefs = useRef<(HTMLElement | null)[]>([])
  const limelightRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (defaultActiveIndex >= 0 && defaultActiveIndex < items.length) {
      setActiveIndex(defaultActiveIndex)
    }
  }, [defaultActiveIndex, items.length])

  useLayoutEffect(() => {
    if (items.length === 0) return

    const limelight = limelightRef.current
    const activeItem = navItemRefs.current[activeIndex]

    if (limelight && activeItem) {
      const newLeft =
        activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2
      limelight.style.left = `${newLeft}px`

      if (!isReady) {
        const t = window.setTimeout(() => setIsReady(true), 50)
        return () => window.clearTimeout(t)
      }
    }
  }, [activeIndex, isReady, items.length])

  if (items.length === 0) {
    return null
  }

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    setActiveIndex(index)
    onTabChange?.(index)
    itemOnClick?.()
  }

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        'relative inline-flex h-14 items-center rounded-xl border border-white/15 bg-transparent px-1.5 text-zinc-100',
        className,
      )}
    >
      {items.map(({ id, icon, label, onClick, href }, index) => {
        const mergedIcon = isValidElement(icon)
          ? cloneElement(icon as ReactElement<{ className?: string }>, {
              className: cn(
                'h-6 w-6 shrink-0 transition-opacity duration-100 ease-in-out',
                activeIndex === index ? 'opacity-100' : 'opacity-40',
                (icon.props as { className?: string }).className,
                iconClassName,
              ),
            })
          : icon

        const shellClass = cn(
          'relative z-20 flex h-full cursor-pointer items-center justify-center px-4 py-3 no-underline text-inherit',
          iconContainerClassName,
        )

        if (href) {
          return (
            <a
              key={id}
              ref={(el) => {
                navItemRefs.current[index] = el
              }}
              href={href}
              className={shellClass}
              aria-label={label}
              onClick={() => handleItemClick(index, onClick)}
            >
              {mergedIcon}
            </a>
          )
        }

        return (
          <button
            key={id}
            type="button"
            ref={(el) => {
              navItemRefs.current[index] = el
            }}
            className={shellClass}
            aria-label={label}
            onClick={() => handleItemClick(index, onClick)}
          >
            {mergedIcon}
          </button>
        )
      })}

      <div
        ref={limelightRef}
        className={cn(
          'absolute top-1 z-10 h-[5px] w-11 rounded-full bg-parchment shadow-[0_36px_36px_rgba(148,137,121,0.28)]',
          isReady ? 'transition-[left] duration-[400ms] ease-in-out' : '',
          limelightClassName,
        )}
        style={{ left: '-999px' }}
      >
        <div
          className="pointer-events-none absolute left-[-30%] top-[5px] h-14 w-[160%] bg-gradient-to-b from-parchment/35 to-transparent [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)]"
          aria-hidden
        />
      </div>
    </nav>
  )
}
