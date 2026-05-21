import { useEffect, useRef, useState } from 'react'

type UseInViewOptions = {
  /** Keep element visible after first reveal (default: true). */
  once?: boolean
  rootMargin?: string
  threshold?: number
}

function isNodeVisible(node: HTMLElement, rootMargin: string) {
  const rect = node.getBoundingClientRect()
  const margin = parseRootMarginBottom(rootMargin)
  return rect.top < window.innerHeight + margin && rect.bottom > -margin
}

function parseRootMarginBottom(rootMargin: string) {
  const parts = rootMargin.trim().split(/\s+/)
  const bottom = parts.length >= 3 ? parts[2] : parts.length === 1 ? parts[0] : '0px'
  const value = parseFloat(bottom)
  return Number.isFinite(value) ? Math.abs(value) : 0
}

export function useInView<T extends HTMLElement = HTMLDivElement>({
  once = true,
  rootMargin = '80px 0px 80px 0px',
  threshold = 0.05,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reveal = () => setInView(true)

    if (isNodeVisible(node, rootMargin)) {
      reveal()
      if (once) return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          reveal()
          if (once) observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return { ref, inView }
}
