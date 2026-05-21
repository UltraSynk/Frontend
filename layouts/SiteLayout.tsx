import type { ReactNode } from 'react'
import { ChatwootWidget } from '../components/ChatwootWidget'
import { CookieNotice } from '../components/CookieNotice'
import { Footer } from '../components/Footer'
import { LandingBackdrop } from '../components/LandingBackdrop'
import { Navbar } from '../components/Navbar'

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LandingBackdrop />

      <Navbar />

      <main className="relative z-10 min-h-screen overflow-x-hidden pt-16 text-ink sm:pt-[4.5rem]">
        <a
          href="/#home"
          className="absolute left-[-9999px] top-0 z-[100] rounded-full btn-primary px-4 py-2 text-sm font-semibold no-underline focus:left-4 focus:top-4"
        >
          Skip to content
        </a>

        <div className="relative mx-auto w-full max-w-[1400px]">
          {children}
          <Footer />
        </div>
      </main>
      <CookieNotice />
      <ChatwootWidget />
    </>
  )
}
