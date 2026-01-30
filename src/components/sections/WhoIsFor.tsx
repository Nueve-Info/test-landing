import { Container } from '../ui/Container'
import { BackgroundGlow } from '../ui/BackgroundGlow'

const qualifiers = [
  'You see AI as opportunity, not threat',
  'You want to be ahead of the curve, not catching up',
  'You value speed and leverage over perfectionism',
  "You're willing to learn new tools (even if slightly technical)",
  'You want to be recognized as future-proof and elite'
]

export function WhoIsFor() {
  return (
    <section className="relative py-24 bg-[var(--color-surface)] overflow-hidden">
      <BackgroundGlow variant="subtle" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            This Is For{' '}
            <span className="gradient-text">Early Adopters Only</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For you */}
          <div className="relative bg-[var(--color-surface-dark)] rounded-2xl p-8 border border-[var(--color-primary)]/30 shadow-[0_0_30px_rgba(253,126,53,0.1)] hover:shadow-[0_0_40px_rgba(253,126,53,0.2)] transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent rounded-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center shadow-[0_0_15px_rgba(253,126,53,0.3)]">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-[var(--color-accent)]">This is for you if:</span>
            </div>
            <ul className="space-y-4 relative z-10">
              {qualifiers.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="relative bg-[var(--color-surface-dark)] rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-red-400">This is NOT for you if:</span>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-[var(--color-text-muted)]">You want to keep doing things the old way</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-[var(--color-text-muted)]">You're afraid of AI tools</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-[var(--color-text-muted)]">You're not ready to adapt</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
