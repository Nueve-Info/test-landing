import { useState } from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { BackgroundGlow } from '../ui/BackgroundGlow'
import { Flame } from 'lucide-react'
import { useCountdown } from '../../hooks/useCountdown'
import { CheckoutModal } from '../EmbeddedCheckout'
import { trackMeta, capturePosthog } from '../../lib/analytics'

const offerItems = [
  { name: 'NueveFolio 2.0 Complete Course', value: '$197' },
  { name: 'AI Agent System Access', value: '$97' },
  { name: 'Custom Portfolio Template Library', value: '$47' },
  { name: 'Animation Toolkit', value: '$17' }
]

interface PricingProps {
  price?: number
  priceId?: string
  variant?: string
}

export function Pricing({
  price = 17,
  priceId = '',
  variant = 'control',
}: PricingProps) {
  const priceLabel = `$${price}`
  const discount = Math.round((1 - price / 358) * 100)
  const { days, hours, minutes, seconds, isExpired, isPaused } = useCountdown()
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const showTimer = !isExpired && !isPaused

  const handleCheckout = () => {
    trackMeta('InitiateCheckout', {
      content_name: 'Nueve Design Engineer',
      value: price,
      currency: 'USD',
    })
    capturePosthog('InitiateCheckout', {
      label: 'Start Your Transformation',
      path: window.location.pathname,
      ab_experiment: 'price-test',
      ab_variant: variant,
      price,
    })
    setIsCheckoutOpen(true)
  }

  return (
    <section id="pricing" className="relative py-24 bg-[var(--color-surface)] overflow-hidden">
      <BackgroundGlow variant="intense" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Become a Design Engineer for{' '}
            <span className="gradient-text">{priceLabel}</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Pricing card */}
          <div className="animate-float relative bg-gradient-to-br from-[var(--color-surface-dark)] to-[var(--color-surface)] rounded-3xl border border-[var(--color-primary)]/30 glow-primary transition-all duration-300 hover:shadow-[0_0_60px_rgba(253,126,53,0.2)] overflow-hidden">

            {/* Countdown strip */}
            {showTimer && (
              <div className="relative flex flex-col items-center justify-center bg-[#FD7E35] px-4 py-8 overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
                </div>

                <div className="relative z-10 mb-5 flex items-center gap-2.5 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-sm">
                  <Flame className="h-5 w-5 shrink-0 text-white animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-[0.25em] text-white">
                    Early Bird Ends:
                  </span>
                </div>

                <div className="relative z-10 flex items-center gap-4">
                  {[
                    { value: days, label: 'Days' },
                    { value: hours, label: 'Hours' },
                    { value: minutes, label: 'Mins' },
                    { value: seconds, label: 'Secs' },
                  ].map((item, i) => (
                    <div key={item.label} className="flex items-center gap-4">
                      {i > 0 && (
                        <span className="mb-6 text-3xl font-black text-white/60">:</span>
                      )}
                      <div className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl shadow-black/10">
                          <span className="text-4xl font-black tabular-nums text-[var(--color-surface-dark)]">
                            {String(item.value).padStart(2, '0')}
                          </span>
                        </div>
                        <span className="mt-2 text-[10px] font-black uppercase tracking-widest text-white">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-8 sm:p-10">
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
                <span className="text-xl font-bold text-[var(--color-text-muted)] line-through decoration-[var(--color-primary)]/50 decoration-2">$358</span>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-[var(--color-text-muted)] text-sm uppercase tracking-wider mb-2 font-semibold">Your Price Today</div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent drop-shadow-sm">{priceLabel}</span>
                  <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-pulse">{discount}% OFF</span>
                </div>
              </div>

              {/* CTA */}
              <Button
                type="button"
                variant="cta"
                size="lg"
                className="js-select-plan w-full mb-6 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.6)] hover:scale-[1.02] transition-all duration-300"
                onClick={handleCheckout}
                data-event="select_plan"
                data-plan-type="early_adopter"
                data-billing="one_time"
                data-price={String(price)}
                data-currency="USD"
                data-cta-placement="pricing"
              >
                Start Your Transformation ({priceLabel})
              </Button>

              {/* Guarantee */}
              <div className="relative z-10 mt-8 pt-8 border-t border-[var(--color-surface-light)]">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-500/10 rounded-full">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                      30-Day Money-Back Guarantee
                    </h3>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-center leading-relaxed mb-6">
                    Try the program for 30 days. If you feel it's not the right fit or you're not satisfied with the value, we'll issue a full refund—<span className="text-[var(--color-text-primary)] font-semibold">no questions asked.</span>
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-text-muted)]">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-text-primary)] font-semibold">99%</span> satisfaction rate
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Secure checkout
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgency */}
              {showTimer && (
                <div className="mt-8 text-center p-4 bg-[#FD7E35]/10 rounded-xl border border-[#FD7E35]/30 relative z-10">
                  <div className="text-[#FD7E35] font-bold">
                    Early adopter pricing ends soon
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    After that, $97
                  </div>
                </div>
              )}
              {!showTimer && (
                <div className="mt-8 text-center p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30 relative z-10">
                  <div className="text-emerald-400 font-bold">
                    Early adopter pricing ends Feb 18th
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    After that, $97
                  </div>
                </div>
              )}
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

      <CheckoutModal
        isOpen={isCheckoutOpen}
        priceId={priceId}
        abVariant={variant}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </section>
  )
}
