import { Container } from '../ui/Container'

const qualifiers = [
  'You see AI as opportunity, not threat',
  'You want to be ahead of the curve, not catching up',
  'You value speed and leverage over perfectionism',
  "You're willing to learn new tools (even if slightly technical)",
  'You want to be recognized as future-proof and elite'
]

export function WhoIsFor() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            This Is For{' '}
            <span className="gradient-text">Early Adopters Only</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For you */}
          <div className="bg-[var(--color-surface-dark)] rounded-2xl p-8 border border-[var(--color-primary)]/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-[var(--color-accent)]">This is for you if:</span>
            </div>
            <ul className="space-y-4">
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
          <div className="bg-[var(--color-surface-dark)] rounded-2xl p-8 border border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-red-400">This is NOT for you if:</span>
            </div>
            <div className="space-y-4">
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
