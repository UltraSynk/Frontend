import { useState } from 'react'
import { cn } from '../lib/cn'

function initialsFromName(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

type TestimonialPortraitProps = {
  name: string
  src: string
  className?: string
  alt?: string
  eager?: boolean
}

export function TestimonialPortrait({
  name,
  src,
  className,
  alt,
  eager = false,
}: TestimonialPortraitProps) {
  const [failed, setFailed] = useState(false)
  const initials = initialsFromName(name)

  if (failed) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-[#2d2238] via-[#5c2550] to-[#8f4a7d]',
          className,
        )}
        role="img"
        aria-label={alt ?? name}
      >
        <span className="font-display text-xl font-bold tracking-wide text-white/90 sm:text-2xl">
          {initials}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt ?? `${name} portrait`}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
