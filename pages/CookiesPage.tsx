import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LegalContactList } from '../components/LegalContact'
import { LegalProse } from '../components/LegalProse'
import { COMPANY } from '../data/company'
import { SectionCard, SectionFrame } from '../components/SiteGlass'

export function CookiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="space-y-0 bg-transparent px-0 pb-12 pt-6 sm:pt-8 lg:pb-16">
      <section className="relative scroll-mt-[5.5rem] bg-transparent">
        <SectionFrame variant="contact">
          <SectionCard variant="contact" className="relative overflow-hidden">
            <p className="mb-6 text-center">
              <Link
                to="/"
                className="text-sm font-semibold text-void no-underline hover:text-abyss"
              >
                ← Back to home
              </Link>
            </p>
            <LegalProse>
              <h1>Cookie Policy</h1>
              <p>Last updated: May 19, 2026</p>
              <p>
                This Cookie Policy explains how {COMPANY.legalName} (&quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) uses cookies and similar technologies when you visit{' '}
                <a href={COMPANY.websiteUrl}>{COMPANY.websiteHost}</a> and related pages (the
                &quot;Website&quot;). It should be read together with our{' '}
                <Link to="/privacy">Privacy Policy</Link>.
              </p>

              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device (computer, tablet, or phone)
                when you visit a website. They help the site remember your preferences, keep you
                signed in, understand how the site is used, and enable certain features.
              </p>
              <p>
                Similar technologies—such as local storage, session storage, and pixels—may be
                used for comparable purposes. In this policy, we refer to all of these as
                &quot;cookies&quot; unless we state otherwise.
              </p>

              <h2>How We Use Cookies</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Operate and secure the Website;</li>
                <li>Remember preferences you set during your visit;</li>
                <li>Enable live chat and contact form features;</li>
                <li>Protect forms from spam and abuse;</li>
                <li>Understand aggregated usage so we can improve content and performance.</li>
              </ul>

              <h2>Types of Cookies We Use</h2>

              <h3>Strictly Necessary Cookies</h3>
              <p>
                These cookies are required for the Website to function. They include cookies
                that support security, load balancing, and consent storage (if you accept or
                decline optional cookies). You cannot opt out of strictly necessary cookies
                through our site because the Website may not work without them.
              </p>

              <h3>Functional Cookies</h3>
              <p>
                Functional cookies allow the Website to remember choices you make (such as
                language or region) and provide enhanced features. For example, our live chat
                widget may use cookies to maintain your conversation session.
              </p>

              <h3>Analytics Cookies</h3>
              <p>
                Where enabled, analytics cookies help us understand how visitors interact with
                the Website (for example, which pages are viewed and for how long). We use this
                information in aggregated form to improve the site. If we deploy analytics
                tools that are not strictly necessary, we will request your consent where
                required by law.
              </p>

              <h2>Third-Party Cookies and Services</h2>
              <p>
                Some cookies are placed by third-party services that appear on or are embedded
                in our Website. We do not control how these third parties use cookies. Their
                practices are governed by their own policies.
              </p>

              <h3>Cookies and technologies we may use</h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Provider / service</th>
                      <th>Purpose</th>
                      <th>Typical duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Google Fonts</td>
                      <td>Deliver web fonts used for typography on the Website</td>
                      <td>Session / provider-defined</td>
                    </tr>
                    <tr>
                      <td>Google reCAPTCHA</td>
                      <td>Protect our contact form from spam and automated abuse</td>
                      <td>Session / provider-defined</td>
                    </tr>
                    <tr>
                      <td>Formspree</td>
                      <td>Process and deliver contact form submissions</td>
                      <td>Session / provider-defined</td>
                    </tr>
                    <tr>
                      <td>Chatwoot</td>
                      <td>Live chat widget, session continuity, and support messaging</td>
                      <td>Session / persistent (provider-defined)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                For more detail on how we process personal data, including data collected
                through these services, see our <Link to="/privacy">Privacy Policy</Link>.
              </p>

              <h2>Your Choices and Controls</h2>
              <h3>Browser settings</h3>
              <p>
                Most browsers let you refuse or delete cookies. Methods vary by browser and
                version; check your browser&apos;s help section for instructions. Blocking all
                cookies may affect Website functionality (for example, live chat or form
                submission).
              </p>
              <h3>Third-party opt-outs</h3>
              <p>
                You may be able to manage preferences for certain advertising or analytics
                providers through industry tools such as the Digital Advertising Alliance or
                Your Online Choices (where available in your region).
              </p>
              <h3>Do Not Track</h3>
              <p>
                Some browsers send &quot;Do Not Track&quot; signals. There is no uniform
                standard for how sites must respond. We currently do not respond to Do Not
                Track signals in a specific way beyond the choices described in this policy.
              </p>

              <h2>Updates to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in
                technology, law, or our practices. The &quot;Last updated&quot; date at the top
                indicates when this policy was last revised. Material changes will be posted on
                this page.
              </p>

              <h2>Contact Us</h2>
              <p>If you have questions about our use of cookies, contact us:</p>
              <LegalContactList />
            </LegalProse>
          </SectionCard>
        </SectionFrame>
      </section>
    </div>
  )
}
