import { ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../data/company'
import { cn } from '../lib/cn'

const LOGO_SRC = '/logo.png'

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/security', label: 'Security' },
  { href: '/cookies', label: 'Cookie Policy' },
] as const

function SocialIcon({ name }: { name: 'linkedin' | 'x' | 'pinterest' | 'facebook' | 'youtube' }) {
  const cls = 'h-4 w-4'
  switch (name) {
    case 'linkedin':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    case 'x':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    case 'pinterest':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.12.112.225.085.348-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.76-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12S18.627.029 12.017.029z" />
        </svg>
      )
    case 'facebook':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    case 'youtube':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
  }
}

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/company/ultrasynk/', label: 'UltraSynk on LinkedIn', icon: 'linkedin' as const },
  { href: 'https://www.facebook.com/Ultrasynk/', label: 'UltraSynk on Facebook', icon: 'facebook' as const },
  { href: 'https://x.com/Ultrasynk', label: 'UltraSynk on X', icon: 'x' as const },
  { href: 'https://www.pinterest.com/Ultrasynk/', label: 'UltraSynk on Pinterest', icon: 'pinterest' as const },
  { href: 'https://www.youtube.com/@UltraSynk', label: 'UltraSynk on YouTube', icon: 'youtube' as const },
] as const

function FooterDotPattern({ side }: { side: 'left' | 'right' }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute top-1/2 h-[72%] w-[min(32%,11rem)] -translate-y-1/2 opacity-[0.14]',
        side === 'left' ? 'left-2' : 'right-2',
      )}
      style={{
        backgroundImage: 'radial-gradient(circle, #722f61 1.25px, transparent 1.25px)',
        backgroundSize: '12px 16px',
        maskImage:
          side === 'left'
            ? 'radial-gradient(ellipse 85% 75% at 0% 50%, #000 15%, transparent 72%)'
            : 'radial-gradient(ellipse 85% 75% at 100% 50%, #000 15%, transparent 72%)',
        WebkitMaskImage:
          side === 'left'
            ? 'radial-gradient(ellipse 85% 75% at 0% 50%, #000 15%, transparent 72%)'
            : 'radial-gradient(ellipse 85% 75% at 100% 50%, #000 15%, transparent 72%)',
      }}
    />
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-6 px-5 pb-8 sm:mt-8 sm:px-6 md:px-7 lg:px-8">
      <div className="glass-footer relative overflow-hidden px-5 py-8 sm:rounded-[2.25rem] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <FooterDotPattern side="left" />
        <FooterDotPattern side="right" />

        <div className="relative z-10 flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-6 xl:gap-8">
          {/* Left — logo + description */}
          <div className="flex w-full max-w-[min(92vw,28rem)] flex-col items-start gap-2 text-left sm:max-w-[32rem] sm:gap-2.5 lg:max-w-[36rem] lg:justify-self-start">
            <Link to="/" className="block w-full no-underline">
              <img
                src={LOGO_SRC}
                alt="UltraSynk"
                className="block h-12 w-full max-w-none object-contain object-left sm:h-14 lg:h-16"
                width={448}
                height={52}
                decoding="async"
              />
            </Link>
            <div className="flex w-full flex-col gap-1 text-left">
              <p className="text-pretty text-sm font-bold leading-snug text-void sm:text-[15px]">
                Edge AI synchronization for real-time intelligence.
              </p>
              <p className="text-pretty text-[13px] font-normal leading-snug text-lavender sm:text-sm">
                {COMPANY.legalName} · Founded {COMPANY.foundedDate}
              </p>
              <p className="text-pretty text-[13px] leading-snug text-lavender sm:text-sm">
                Founder: {COMPANY.founderName}
              </p>
              <p className="text-pretty text-[13px] leading-snug text-lavender sm:text-sm">
                {COMPANY.address.street}, {COMPANY.address.cityStateZip}
              </p>
              <a
                href={COMPANY.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-void no-underline hover:text-abyss sm:text-sm"
              >
                {COMPANY.websiteHost}
              </a>
            </div>
          </div>

          {/* Center — legal, copyright, trust badge */}
          <div className="flex flex-col items-center gap-3 text-center lg:justify-self-center">
            <nav
              aria-label="Legal"
              className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm font-medium text-lavender"
            >
              {LEGAL_LINKS.map((link, i) => (
                <span key={link.href} className="inline-flex items-center gap-1">
                  {i > 0 ? (
                    <span className="px-1.5 text-violet/40" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  <a
                    href={link.href}
                    className="text-void/90 no-underline transition hover:text-abyss"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </nav>
            <p className="text-sm text-lavender">
              © {year} {COMPANY.legalName}. All rights reserved.
            </p>
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-violet/35 bg-gradient-to-b from-plum/70 to-pearl/80 text-void shadow-[0_0_20px_rgba(169,117,169,0.35)] backdrop-blur-sm"
              aria-hidden
            >
              <ShieldCheck className="h-[18px] w-[18px]" strokeWidth={2.25} />
            </span>
          </div>

          {/* Right — social icons */}
          <nav
            aria-label="Social media"
            className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-self-end"
          >
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet/30 bg-pearl/60 text-void shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-md transition hover:border-violet/50 hover:bg-plum/40 hover:text-abyss"
              >
                <SocialIcon name={icon} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
