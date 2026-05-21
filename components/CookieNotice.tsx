import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCookieConsent, setCookieConsent } from '../lib/cookieConsent'
import { cn } from '../lib/cn'

export function CookieNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(getCookieConsent() === null)
  }, [])

  const accept = () => {
    setCookieConsent('accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-notice-title"
      aria-describedby="cookie-notice-desc"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 pt-2 sm:px-4 sm:pb-4"
    >
      <div
        className={cn(
          'mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-2xl border border-violet/25 bg-pearl/35 p-4 shadow-[0_8px_32px_rgba(114,47,97,0.08),inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-2xl backdrop-saturate-150 sm:flex-row sm:items-center sm:gap-6 sm:rounded-[1.35rem] sm:p-5',
        )}
      >
        <div className="min-w-0 flex-1">
          <p
            id="cookie-notice-title"
            className="font-display text-sm font-semibold text-void sm:text-[15px]"
          >
            Cookies on this site
          </p>
          <p
            id="cookie-notice-desc"
            className="mt-1.5 text-pretty text-xs leading-relaxed text-mint sm:text-sm"
          >
            We use cookies and similar technologies to operate the site, remember your
            preferences, protect forms, and understand how pages are used.{' '}
            <Link
              to="/cookies"
              className="font-semibold text-void underline decoration-violet/50 underline-offset-2 transition hover:text-pizazz hover:decoration-pizazz/60"
            >
              Cookie Policy
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={accept}
            className="btn-primary px-5 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
