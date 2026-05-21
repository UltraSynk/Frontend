import { useEffect } from 'react'

const CHATWOOT_BASE_URL = 'https://app.chatwoot.com'
const CHATWOOT_WEBSITE_TOKEN =
  import.meta.env.VITE_CHATWOOT_WEBSITE_TOKEN ?? 'JWVAyjRfSjNsanBd46EWzPVf'

declare global {
  interface Window {
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void
    }
  }
}

/** Chatwoot live chat — fixed bottom-right bubble (visible on hero & all pages). */
export function ChatwootWidget() {
  useEffect(() => {
    if (document.getElementById('chatwoot-sdk')) return

    const script = document.createElement('script')
    script.id = 'chatwoot-sdk'
    script.src = `${CHATWOOT_BASE_URL}/packs/js/sdk.js`
    script.async = true

    script.onload = () => {
      window.chatwootSDK?.run({
        websiteToken: CHATWOOT_WEBSITE_TOKEN,
        baseUrl: CHATWOOT_BASE_URL,
      })
    }

    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return null
}
