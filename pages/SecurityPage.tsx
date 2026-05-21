import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LegalContactList } from '../components/LegalContact'
import { LegalProse } from '../components/LegalProse'
import { COMPANY } from '../data/company'
import { SectionCard, SectionFrame } from '../components/SiteGlass'

export function SecurityPage() {
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
              <h1>Security</h1>
              <p>Last updated: May 19, 2026</p>
              <p>
                UltraSynk is built for edge AI and real-time data synchronization across
                distributed systems. Security is central to how we design our platform, operate
                our infrastructure, and protect customer data. This page summarizes our security
                practices for the Website and UltraSynk services.
              </p>

              <h2>Our Security Principles</h2>
              <ul>
                <li>
                  <strong>Defense in depth</strong> — Multiple layers of controls across network,
                  application, and data layers.
                </li>
                <li>
                  <strong>Least privilege</strong> — Access is granted only when needed and
                  reviewed regularly.
                </li>
                <li>
                  <strong>Encryption by default</strong> — Data in transit is protected with
                  modern TLS; sensitive data at rest is encrypted where applicable.
                </li>
                <li>
                  <strong>Edge-first security</strong> — Policies, attestation, and encrypted
                  channels at every hop in the edge fabric.
                </li>
                <li>
                  <strong>Transparency</strong> — We document our practices and respond to
                  security inquiries and responsible disclosures.
                </li>
              </ul>

              <h2>Data Protection</h2>
              <h3>Encryption</h3>
              <p>
                Connections to our Website and APIs use TLS 1.2 or higher. Certificates are
                managed and renewed through industry-standard processes. Where UltraSynk stores
                customer or telemetry data, we apply encryption at rest using provider-managed
                keys or customer-managed options for enterprise deployments.
              </p>
              <h3>Data minimization</h3>
              <p>
                We collect only the information needed to provide and improve our services.
                Details about personal data handling are described in our{' '}
                <Link to="/privacy">Privacy Policy</Link>.
              </p>
              <h3>Retention and deletion</h3>
              <p>
                We retain data according to contractual terms, legal obligations, and
                documented retention schedules. Customers may request deletion of personal data
                subject to applicable law and legitimate business needs (for example, audit logs).
              </p>

              <h2>Platform and Infrastructure Security</h2>
              <p>UltraSynk&apos;s edge synchronization platform is designed with:</p>
              <ul>
                <li>
                  <strong>Secure edge fabric</strong> — Encrypted channels between nodes, device
                  attestation where supported, and policy gates for data flows.
                </li>
                <li>
                  <strong>Identity and access management</strong> — Role-based access for
                  administrative consoles; support for SSO and API keys with scoped permissions
                  in enterprise plans.
                </li>
                <li>
                  <strong>Network segmentation</strong> — Separation of control plane and data
                  plane traffic; restricted management interfaces.
                </li>
                <li>
                  <strong>Monitoring and logging</strong> — Centralized observability for sync
                  health, anomalies, and security-relevant events.
                </li>
                <li>
                  <strong>Resilience</strong> — Architecture aimed at high availability and
                  graceful degradation under partial edge or region failures.
                </li>
              </ul>
              <p>
                Production infrastructure is hosted with reputable cloud and edge providers that
                maintain their own security certifications and physical controls.
              </p>

              <h2>Application Security</h2>
              <ul>
                <li>Secure development practices, including code review and dependency monitoring;</li>
                <li>Regular patching of operating systems, runtimes, and third-party libraries;</li>
                <li>Protection against common web vulnerabilities (for example, XSS, CSRF, and injection) on customer-facing surfaces;</li>
                <li>Rate limiting and abuse detection on public APIs and forms;</li>
                <li>
                  Use of trusted third-party services (such as reCAPTCHA on contact forms) where
                  appropriate — see our <Link to="/cookies">Cookie Policy</Link>.
                </li>
              </ul>

              <h2>Organizational Security</h2>
              <p>
                Access to production systems and customer data is limited to authorized personnel
                with a business need. We use strong authentication for internal tools, conduct
                security awareness training, and maintain incident response procedures.
              </p>
              <p>
                Vendors that process data on our behalf are evaluated for security and privacy
                practices and bound by contractual obligations consistent with our{' '}
                <Link to="/privacy">Privacy Policy</Link>.
              </p>

              <h2>Incident Response</h2>
              <p>
                If we become aware of a security incident that affects customer data, we will
                investigate promptly, contain the issue, remediate root causes, and notify
                affected customers and regulators where required by law. We document incidents
                and conduct post-incident reviews to prevent recurrence.
              </p>

              <h2>Compliance</h2>
              <p>
                UltraSynk supports customers with security and privacy requirements across
                industries. Specific compliance certifications, attestations, or regional
                frameworks (such as SOC 2, ISO 27001, or GDPR) may be available for enterprise
                customers — contact us for current documentation. Nothing on this page constitutes
                a guarantee of certification unless expressly agreed in writing.
              </p>

              <h2>Responsible Disclosure</h2>
              <p>
                We welcome reports from security researchers and customers who discover potential
                vulnerabilities. Please report issues responsibly so we can investigate and
                remediate before public disclosure.
              </p>
              <p>
                <strong>How to report:</strong> Email{' '}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> with a
                description of the issue, steps to reproduce, and any supporting evidence. Do not
                access data that does not belong to you or disrupt our services.
              </p>
              <p>
                We aim to acknowledge reports within a reasonable timeframe and will work with
                you in good faith on validation and resolution. We do not pursue legal action
                against researchers who follow these guidelines.
              </p>

              <h2>Your Responsibilities</h2>
              <p>Customers and users can help keep systems secure by:</p>
              <ul>
                <li>Using strong, unique credentials and enabling multi-factor authentication where offered;</li>
                <li>Rotating API keys and revoking unused access;</li>
                <li>Configuring edge policies and network rules appropriate to your environment;</li>
                <li>Keeping agents and integrations up to date;</li>
                <li>Reporting suspected abuse or unauthorized access promptly.</li>
              </ul>

              <h2>Changes to This Page</h2>
              <p>
                We may update this Security page as our practices evolve. The &quot;Last
                updated&quot; date reflects the most recent revision.
              </p>

              <h2>Contact</h2>
              <p>For security or general questions, contact us:</p>
              <LegalContactList />
            </LegalProse>
          </SectionCard>
        </SectionFrame>
      </section>
    </div>
  )
}
