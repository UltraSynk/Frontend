export const COOKIE_CONSENT_KEY = 'ultrasynk-cookie-consent'

export type CookieConsentStatus = 'accepted'

export function getCookieConsent(): CookieConsentStatus | null {
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_KEY)
    return value === 'accepted' ? 'accepted' : null
  } catch {
    return null
  }
}

export function setCookieConsent(status: CookieConsentStatus): void {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, status)
    localStorage.setItem(`${COOKIE_CONSENT_KEY}-at`, new Date().toISOString())
  } catch {
    /* private browsing or storage disabled */
  }
}
