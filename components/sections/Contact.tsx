import { useRef, useState, type FormEvent } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Reveal } from '../Reveal'
import { SectionCard, SectionFrame } from '../SiteGlass'
import { COMPANY } from '../../data/company'
import {
  IconArrowUpRight,
  IconMail,
  IconMapPin,
  IconPhone,
} from '../icons'

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdwzqgk'

const contactLinks = [
  {
    label: 'Email us',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    icon: IconMail,
  },
  {
    label: 'Call us',
    value: COMPANY.phoneDisplay,
    href: COMPANY.phoneTel,
    icon: IconPhone,
  },
  {
    label: 'Our location',
    value: COMPANY.addressSingleLine,
    href: COMPANY.mapsUrl,
    icon: IconMapPin,
  },
] as const

function CornerCircuits() {
  return (
    <>
      <svg
        className="pointer-events-none absolute left-0 top-0 h-32 w-36 text-void/[0.07] sm:h-40 sm:w-44"
        viewBox="0 0 176 160"
        fill="none"
        aria-hidden
      >
        <path
          d="M12 12h52v52M12 12v76M12 88h40M64 64h48M64 64v72M12 136h100"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <circle cx="64" cy="64" r="3.5" stroke="currentColor" strokeWidth="0.9" />
        <path d="M112 12v40M112 12h48" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
      <svg
        className="pointer-events-none absolute right-0 top-0 h-32 w-36 scale-x-[-1] text-void/[0.07] sm:h-40 sm:w-44"
        viewBox="0 0 176 160"
        fill="none"
        aria-hidden
      >
        <path
          d="M12 12h52v52M12 12v76M12 88h40M64 64h48M64 64v72M12 136h100"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <circle cx="64" cy="64" r="3.5" stroke="currentColor" strokeWidth="0.9" />
        <path d="M112 12v40M112 12h48" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    </>
  )
}

function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [captchaError, setCaptchaError] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCaptchaError('')
    setSubmitError('')

    if (!RECAPTCHA_SITE_KEY) {
      setCaptchaError('reCAPTCHA is not configured. Add VITE_RECAPTCHA_SITE_KEY to your environment.')
      return
    }

    if (!captchaToken) {
      setCaptchaError('Please complete the reCAPTCHA verification.')
      return
    }

    const form = e.currentTarget
    const data = new FormData(form)

    setSubmitting(true)
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          'g-recaptcha-response': captchaToken,
        }),
      })

      const result = (await response.json().catch(() => null)) as { error?: string } | null

      if (!response.ok) {
        throw new Error(result?.error ?? 'Unable to send your message. Please try again.')
      }

      setSubmitted(true)
      form.reset()
      setCaptchaToken(null)
      recaptchaRef.current?.reset()
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Unable to send your message. Please try again.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      className="glass-card box-border min-w-0 w-full max-w-full space-y-5 p-6 max-lg:overflow-hidden sm:rounded-3xl sm:p-8"
      onSubmit={handleSubmit}
    >
      <label className="block">
        <span className="sr-only">Name</span>
        <input
          name="name"
          required
          autoComplete="name"
          className="w-full glass-input px-4 py-3.5 text-sm text-void outline-none transition placeholder:text-mint-muted backdrop-blur-md focus:border-pizazz/50 focus:ring-1 focus:ring-pizazz/35"
          placeholder="Name"
        />
      </label>
      <label className="block">
        <span className="sr-only">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full glass-input px-4 py-3.5 text-sm text-void outline-none transition placeholder:text-mint-muted backdrop-blur-md focus:border-pizazz/50 focus:ring-1 focus:ring-pizazz/35"
          placeholder="Email"
        />
      </label>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-y glass-input px-4 py-3.5 text-sm text-void outline-none transition placeholder:text-mint-muted backdrop-blur-md focus:border-pizazz/50 focus:ring-1 focus:ring-pizazz/35"
          placeholder="Message"
        />
      </label>

      {RECAPTCHA_SITE_KEY ? (
        <div className="w-full min-w-0 overflow-hidden rounded-xl">
          <div className="flex w-full min-w-0 justify-center overflow-hidden lg:justify-start">
            <div className="max-lg:origin-top max-lg:scale-[0.82] lg:scale-100">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(token) => {
                  setCaptchaToken(token)
                  setCaptchaError('')
                }}
                onExpired={() => setCaptchaToken(null)}
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm text-pizazz-deep" role="alert">
          reCAPTCHA site key is missing. Set VITE_RECAPTCHA_SITE_KEY in your .env file.
        </p>
      )}

      {captchaError ? (
        <p className="text-sm font-medium text-pizazz-deep" role="alert">
          {captchaError}
        </p>
      ) : null}

      {submitError ? (
        <p className="text-sm font-medium text-pizazz-deep" role="alert">
          {submitError}
        </p>
      ) : null}

      {submitted ? (
        <p className="text-sm font-medium text-void" role="status">
          Thank you — your message was received.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-[5.5rem] bg-transparent max-lg:overflow-x-hidden">
      <SectionFrame variant="contact" className="min-w-0 max-w-full">
        <div className="relative min-w-0 max-w-full overflow-hidden">
          <p
            className="pointer-events-none absolute left-1/2 top-2 hidden -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(4.5rem,18vw,11rem)] font-bold uppercase leading-none tracking-tighter text-void/[0.08] sm:top-4 lg:block lg:top-6"
            aria-hidden
          >
            Contact
          </p>
          <div className="max-lg:hidden">
            <CornerCircuits />
          </div>

          <SectionCard variant="contact" className="relative z-10 min-w-0 max-w-full">
          <div className="grid min-w-0 max-w-full gap-8 sm:gap-10 lg:grid-cols-2 lg:items-start lg:gap-14 lg:px-1 xl:gap-16">
            <Reveal className="min-w-0 max-w-full">
              <div className="glass-chip inline-flex max-w-full items-center gap-2">
                <IconMail className="h-3.5 w-3.5 text-pizazz" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mint/95">
                  Contact
                </span>
              </div>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-void sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                Get in touch
              </h2>
              <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-mint max-lg:max-w-none sm:text-base">
                Request a demo, discuss edge deployment, or explore enterprise licensing for
                your distributed systems.
              </p>

              <ul className="mt-8 flex min-w-0 max-w-full flex-col gap-3 sm:mt-12">
                {contactLinks.map((item) => {
                  const Icon = item.icon
                  return (
                      <li key={item.label} className="min-w-0 max-w-full">
                        <a
                          href={item.href}
                          {...(item.href.startsWith('http')
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          className="group flex min-w-0 max-w-full items-start gap-3 glass-card px-3 py-3.5 transition hover:border-violet/40 hover:bg-pearl/90 sm:items-center sm:gap-4 sm:px-5 sm:py-4"
                        >
                          <span className="glass-card flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#A975A9] sm:h-11 sm:w-11">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-medium text-mint-muted">{item.label}</p>
                            <p className="mt-0.5 break-words text-sm font-medium leading-snug text-void sm:text-[15px] lg:truncate">
                              {item.value}
                            </p>
                          </div>
                          <IconArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-mint-muted transition group-hover:text-pizazz sm:mt-0" />
                        </a>
                      </li>
                  )
                })}
              </ul>
            </Reveal>

            <Reveal delayMs={100} className="min-w-0 max-w-full">
              <ContactForm />
            </Reveal>
          </div>
          </SectionCard>
        </div>
      </SectionFrame>
    </section>
  )
}
