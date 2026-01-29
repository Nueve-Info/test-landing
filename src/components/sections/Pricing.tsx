import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

const offerItems = [
  { name: 'NueveFolio 2.0 Complete Course', value: '$197' },
  { name: 'AI Agent System Access', value: '$97' },
  { name: 'Custom Portfolio Template Library', value: '$47' },
  { name: 'Animation Toolkit', value: '$27' }
]

export function Pricing() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Become a Design Engineer for{' '}
            <span className="gradient-text">$27</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Pricing card */}
          <div className="bg-gradient-to-br from-[var(--color-surface-dark)] to-[var(--color-surface)] rounded-3xl p-8 sm:p-10 border border-[var(--color-primary)]/30 glow-primary">
            {/* Offer stack */}
            <div className="space-y-4 mb-8">
              {offerItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[var(--color-surface-dark)] rounded-xl border border-[var(--color-surface-light)]"
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
            <div className="flex items-center justify-between p-4 bg-[var(--color-primary)]/10 rounded-xl border border-[var(--color-primary)]/30 mb-8">
              <span className="text-[var(--color-text-secondary)]">Total Value:</span>
              <span className="text-xl font-bold text-[var(--color-text-muted)] line-through">$368</span>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="text-[var(--color-text-muted)] text-sm uppercase tracking-wider mb-2">Your Price Today</div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-5xl sm:text-6xl font-bold text-[var(--color-text-primary)]">$27</span>
                <span className="bg-[var(--color-cta)] text-white text-sm font-semibold px-3 py-1 rounded-full">93% OFF</span>
              </div>
            </div>

            {/* CTA */}
            <Button variant="cta" size="lg" className="w-full mb-6">
              Start Your Transformation ($27)
            </Button>

            {/* Guarantee */}
            <div className="flex items-center justify-center gap-3 text-[var(--color-text-secondary)] mb-6">
              <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm">60-day money-back guarantee</span>
            </div>

            {/* Urgency */}
            <div className="text-center p-4 bg-[var(--color-cta)]/10 rounded-xl border border-[var(--color-cta)]/30">
              <div className="text-[var(--color-cta)] font-semibold">
                Early adopter pricing ends January 31st
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
