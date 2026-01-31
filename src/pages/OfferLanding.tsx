import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { BackgroundGlow } from '../components/ui/BackgroundGlow'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/sections/Footer'
import type { OfferConfig } from '../config/offerConfig'

interface OfferLandingProps {
  offer: OfferConfig
}

export function OfferLanding({ offer }: OfferLandingProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-[var(--color-surface-dark)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-32 sm:pt-36 pb-20 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% -20%, rgba(253, 126, 53, 0.15), transparent 70%)'
          }}
        />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-medium mb-8 bg-[var(--color-primary)]/5 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              {offer.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            >
              {offer.headline}<br />
              <span className="bg-gradient-to-r from-[#FF6600] via-[#FF9933] to-[#FF6600] bg-clip-text text-transparent">
                {offer.headlineHighlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto"
            >
              {offer.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                type="button"
                onClick={scrollToPricing}
                size="lg"
                className="bg-[#FD7E35] hover:bg-[#E0601A] text-white border-none rounded-full px-8 font-semibold text-lg shadow-[0_4px_14px_0_rgba(253,126,53,0.39)] hover:shadow-[0_6px_20px_rgba(253,126,53,0.23)] hover:-translate-y-1 transition-all"
                data-event="cta_click"
                data-cta-type="start"
                data-cta-placement="hero"
              >
                {offer.heroCta} ({offer.price})
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="relative py-24 bg-[var(--color-surface)] overflow-hidden">
        <BackgroundGlow variant="subtle" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
              {offer.problemTitle}{' '}
              <span className="gradient-text">{offer.problemTitleHighlight}</span>
            </h2>

            <div className="space-y-4 mb-12 max-w-2xl mx-auto">
              {offer.problemIntro.map((line, i) => (
                <p key={i} className="text-xl text-[var(--color-text-secondary)] text-center">
                  {line}
                </p>
              ))}
            </div>

            {/* Problem Points */}
            <div className="bg-[var(--color-surface-dark)] rounded-2xl p-8 border border-red-500/30 mb-12">
              <ul className="space-y-3">
                {offer.problemPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Points */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {offer.problemData.map((item, i) => (
                <div
                  key={i}
                  className="bg-[var(--color-surface-dark)] rounded-2xl p-6 border border-[var(--color-surface-light)] text-center"
                >
                  <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                    {item.label}
                  </div>
                  <div className="text-lg font-semibold text-[var(--color-text-primary)]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xl font-bold text-[var(--color-primary)]">
              {offer.problemConclusion}
            </p>
          </div>
        </Container>
      </section>

      {/* Mechanism Section */}
      <section className="relative py-24 bg-[var(--color-surface-dark)] overflow-hidden">
        <BackgroundGlow variant="intense" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center">
              {offer.mechanismTitle}{' '}
              <span className="gradient-text">{offer.mechanismTitleHighlight}</span>
            </h2>

            <p className="text-xl text-[var(--color-text-secondary)] text-center mb-12">
              {offer.mechanismIntro}
            </p>

            {/* Steps */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {offer.mechanismSteps.map((step, i) => (
                <div
                  key={i}
                  className="bg-[var(--color-surface)]/80 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[var(--color-primary)] font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-lg text-[var(--color-text-primary)] font-medium bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-primary)]/30">
              {offer.mechanismConclusion}
            </p>
          </div>
        </Container>
      </section>

      {/* What You Get Section */}
      <section className="relative py-24 bg-[var(--color-surface)] overflow-hidden">
        <BackgroundGlow variant="subtle" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
              What You <span className="gradient-text">Get</span>
            </h2>

            <div className="space-y-4">
              {offer.benefits.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-[var(--color-surface-dark)]/80 backdrop-blur-sm rounded-xl border border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/30 transition-colors"
                >
                  <svg className="w-6 h-6 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-text-primary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Social Proof Section */}
      <section className="relative py-24 bg-[var(--color-surface-dark)] overflow-hidden">
        <BackgroundGlow variant="intense" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
              Real <span className="gradient-text">Results</span>
            </h2>

            <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-surface-light)]">
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl text-[var(--color-text-primary)] text-center mb-6 italic">
                "{offer.testimonial.quote}"
              </blockquote>
              <div className="text-center text-[var(--color-text-muted)]">
                — {offer.testimonial.name}, {offer.testimonial.role}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 bg-[var(--color-surface)] overflow-hidden">
        <BackgroundGlow variant="intense" />

        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Start for{' '}
              <span className="gradient-text">{offer.price}</span>
            </h2>

            <p className="text-xl text-[var(--color-text-secondary)] mb-10">
              Full course unlocks after trial. Zero risk to start.
            </p>

            {/* Pricing card */}
            <div className="animate-float relative bg-gradient-to-br from-[var(--color-surface-dark)] to-[var(--color-surface)] rounded-3xl p-8 sm:p-10 border border-[var(--color-primary)]/30 glow-primary">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              {/* Price */}
              <div className="text-center mb-8 relative z-10">
                <div className="text-[var(--color-text-muted)] text-sm uppercase tracking-wider mb-2 font-semibold">Your Price Today</div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent drop-shadow-sm">{offer.price}</span>
                </div>
              </div>

              {/* CTA */}
              <Button
                type="button"
                variant="cta"
                size="lg"
                className="js-select-plan w-full mb-6 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.6)] hover:scale-[1.02] transition-all duration-300 relative z-10"
                href={offer.stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                data-event="select_plan"
                data-plan-type={`offer_${offer.letter.toLowerCase()}`}
                data-billing="one_time"
                data-price={offer.priceValue}
                data-currency="USD"
                data-stripe-url={offer.stripeLink}
                data-cta-placement="pricing"
              >
                {offer.heroCta} ({offer.price})
              </Button>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-3 text-[var(--color-text-secondary)] relative z-10">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm">30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-[var(--color-surface-dark)] overflow-hidden">
        <BackgroundGlow variant="subtle" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {offer.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className={`group bg-[var(--color-surface)] rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[var(--color-primary)]/50 shadow-[0_0_20px_rgba(253,126,53,0.1)]'
                      : 'border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/30'
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left transition-colors"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span className={`text-lg font-medium pr-4 transition-colors ${
                      isOpen ? 'text-[var(--color-primary-light)]' : 'text-[var(--color-text-primary)]'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[var(--color-primary)] rotate-180' : 'bg-[var(--color-surface-light)] group-hover:bg-[var(--color-surface-elevated)]'
                    }`}>
                      <svg
                        className={`w-5 h-5 transition-colors ${isOpen ? 'text-white' : 'text-[var(--color-text-muted)]'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-surface-light)] pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[var(--color-surface)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-[var(--color-accent)]/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-[200px] opacity-10" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {offer.finalCtaTitle}{' '}
              <span className="gradient-text">{offer.finalCtaTitleHighlight}</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] mb-10">
              {offer.finalCtaSubtitle}
            </p>

            <Button
              type="button"
              variant="cta"
              size="lg"
              className="js-select-plan mb-8"
              href={offer.stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              data-event="select_plan"
              data-plan-type={`offer_${offer.letter.toLowerCase()}`}
              data-billing="one_time"
              data-price={offer.priceValue}
              data-currency="USD"
              data-stripe-url={offer.stripeLink}
              data-cta-placement="final_cta"
            >
              {offer.finalCtaButton} ({offer.price})
            </Button>

            {/* Trust seals */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-text-muted)]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>30-Day Money Back</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Stripe Secure Checkout</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
