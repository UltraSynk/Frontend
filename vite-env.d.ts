/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY: string
  readonly VITE_CHATWOOT_WEBSITE_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
