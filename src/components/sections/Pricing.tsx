import { useState, useEffect } from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { BackgroundGlow } from '../ui/BackgroundGlow'

declare global {
  interface Window {
    posthog?: {
      getFeatureFlag: (flag: string) => string | boolean | undefined
      onFeatureFlags: (callback: () => void) => void
    }
  }
}

const offerItems = [
  { name: 'NueveFolio 2.0 Complete Course', value: '$197' },
  { name: 'AI Agent System Access', value: '$97' },
  { name: 'Custom Portfolio Template Library', value: '$47' },
  { name: 'Animation Toolkit', value: '$27' }
]

export function Pricing() {
  const defaultUrl = 'https://buy.stripe.com/5kQaEW3VpexB1g5etEgA81C'
  const [checkoutUrl, setCheckoutUrl] = useState(defaultUrl)

  useEffect(() => {
    const checkFlag = () => {
      if (window.posthog?.getFeatureFlag('Test-1') === 'test') {
        setCheckoutUrl('/value')
      } else {
        setCheckoutUrl(defaultUrl)
      }
    }

    // Check immediately in case flags are already loaded
    checkFlag()

    // Also listen for when flags are loaded
    if (window.posthog?.onFeatureFlags) {
      window.posthog.onFeatureFlags(checkFlag)
    }
  }, [])

  return (
    <section id="pricing" className="relative py-24 bg-[var(--color-surface)] overflow-hidden">
      <BackgroundGlow variant="intense" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Become a Design Engineer for{' '}
            <span className="gradient-text">$27</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Pricing card */}
          <div className="animate-float relative bg-gradient-to-br from-[var(--color-surface-dark)] to-[var(--color-surface)] rounded-3xl p-8 sm:p-10 border border-[var(--color-primary)]/30 glow-primary transition-all duration-300 hover:shadow-[0_0_60px_rgba(253,126,53,0.2)]">
            
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Offer stack */}
            <div className="relative space-y-4 mb-8">
              {offerItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[var(--color-surface-dark)]/80 backdrop-blur-sm rounded-xl border border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-text-primary)]">{item.name}</span>
                  </div>
                  <span className="text-[var(--color-text-muted)] line-through">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Total value */}
            <div className="relative flex items-center justify-between p-4 bg-[var(--color-primary)]/10 rounded-xl border border-[var(--color-primary)]/30 mb-8 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-primary)]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="text-[var(--color-text-secondary)] font-medium">Total Value:</span>
              <span className="text-xl font-bold text-[var(--color-text-muted)] line-through decoration-[var(--color-primary)]/50 decoration-2">$368</span>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="text-[var(--color-text-muted)] text-sm uppercase tracking-wider mb-2 font-semibold">Your Price Today</div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent drop-shadow-sm">$27</span>
                <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-pulse">93% OFF</span>
              </div>
            </div>

            {/* CTA */}
            <Button 
              type="button"
              variant="cta" 
              size="lg" 
              className="js-select-plan w-full mb-6 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.6)] hover:scale-[1.02] transition-all duration-300"
              href={checkoutUrl}
              target={checkoutUrl.startsWith('/') ? undefined : '_blank'}
              rel={checkoutUrl.startsWith('/') ? undefined : 'noopener noreferrer'}
              data-event="select_plan"
              data-plan-type="early_adopter"
              data-billing="one_time"
              data-price="27"
              data-currency="USD"
              data-stripe-url="https://buy.stripe.com/5kQaEW3VpexB1g5etEgA81C"
              data-cta-placement="pricing"
            >
              Start Your Transformation ($27)
            </Button>

            {/* Guarantee */}
            <div className="flex items-center justify-center gap-3 text-[var(--color-text-secondary)] mb-6">
              <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm">30-day money-back guarantee</span>
            </div>

            {/* Urgency */}
            <div className="text-center p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30">
              <div className="text-emerald-400 font-bold">
                Early adopter pricing ends Feb 3rd
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">
                After that, $97
              </div>
            </div>
          </div>

          {/* Risk reversal */}
          <div className="mt-8 text-center">
            <p className="text-[var(--color-text-secondary)]">
              <span className="text-[var(--color-text-primary)] font-medium">Risk-free guarantee:</span>{' '}
              If you don't have a live portfolio website and feel more confident, get a full refund.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
