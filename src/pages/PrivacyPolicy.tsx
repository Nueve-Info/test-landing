import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'

export function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-dark)] text-[var(--color-text-primary)]">
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-10">
            <Link
              to="/"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              ← Back to home
            </Link>
            <div className="text-xs text-[var(--color-text-muted)]">Last updated: January 30, 2026</div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10">
            This Privacy Policy explains how <strong>DOKO Stanislaw Swiatkiewicz</strong> (“we”, “us”, “our”) collects, uses, and
            shares information when you visit or use this website (the “Site”).
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold mb-3">1) Who we are</h2>
              <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-2">
                <p>
                  <strong>Controller/Business</strong>: DOKO Stanislaw Swiatkiewicz
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2) What data we collect</h2>
              <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-3">
                <p>
                  We may collect information you provide directly (for example, when contacting us) and information
                  collected automatically when you use the Site.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Contact data</strong>: name, email, and message content (if you email us).
                  </li>
                  <li>
                    <strong>Usage data</strong>: pages viewed, clicks, approximate location, device/browser info, and
                    referrer URLs.
                  </li>
                  <li>
                    <strong>Cookie / similar technologies</strong>: identifiers used for analytics/advertising where enabled.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3) Analytics & tag management (GA4 + GTM)</h2>
              <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-3">
                <p>
                  We use (or may use) <strong>Google Analytics 4 (GA4)</strong> to understand how visitors interact with the Site
                  (e.g., page views and engagement). GA4 may set cookies or use similar technologies to collect usage data.
                </p>
                <p>
                  We also use (or may use) <strong>Google Tag Manager (GTM)</strong> to deploy and manage tags (including GA4 and other tools).
                  GTM itself does not typically collect personal data, but tags deployed through GTM may.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Opt-out</strong>: You can use the Google Analytics opt-out browser add-on (where available) or adjust your cookie preferences.
                  </li>
                  <li>
                    <strong>More info</strong>: Google’s documentation and policies explain how Google processes data.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4) Advertising / Meta Pixel (“MetaTag”)</h2>
              <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-3">
                <p>
                  We use (or may use) Meta technologies such as the <strong>Meta Pixel</strong> (sometimes referred to as a “Meta tag”)
                  to measure ad performance, build audiences, and understand conversions.
                </p>
                <p>
                  Meta may collect information about your interaction with the Site and may use cookies or similar technologies.
                  This data may be used for interest-based advertising.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Opt-out</strong>: You can manage ad preferences in your Meta account and/or via your device/browser settings.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5) Embedded media (Vimeo)</h2>
              <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-3">
                <p>
                  The Site includes embedded videos (for example, via <strong>Vimeo</strong>). When you view an embedded video, Vimeo may
                  collect usage data and set cookies according to their policies.
                </p>
                <p>
                  We do not control how third-party embedded providers collect or use data. Please review their privacy policies for details.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6) How we use data</h2>
              <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-3">
                <ul className="list-disc pl-5 space-y-2">
                  <li>To operate and improve the Site.</li>
                  <li>To measure marketing performance and understand user behavior (analytics).</li>
                  <li>To communicate with you (if you contact us).</li>
                  <li>To comply with legal obligations and protect against abuse/fraud.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7) Legal bases (EEA/UK, if applicable)</h2>
              <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-3">
                <p>
                  Where GDPR/UK GDPR applies, we process personal data under legal bases such as consent (for non-essential cookies),
                  legitimate interests (site improvement and security), and contract (where relevant).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8) Your rights</h2>
              <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-3">
                <p>
                  Depending on your location, you may have rights to access, correct, delete, or object to processing of your personal data,
                  and to withdraw consent for cookie-based processing.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9) Cookies</h2>
              <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-3">
                <p>
                  Cookies are small text files stored on your device. Some cookies are necessary for the Site to work, while others are used
                  for analytics and advertising. You can control cookies through your browser settings and (where available) on-site consent tools.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10) Changes</h2>
              <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-3">
                <p>
                  We may update this Privacy Policy from time to time. We will post the updated version on this page and update the “Last updated”
                  date above.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}

