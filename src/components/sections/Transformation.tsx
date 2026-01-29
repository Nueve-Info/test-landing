import { Container } from '../ui/Container'

const transformations = [
  { before: 'Figma mockups', after: 'Live coded websites' },
  { before: 'Wait for developers', after: 'Ship independently' },
  { before: 'Generic portfolio', after: 'Custom-coded showcase' },
  { before: 'Job anxiety', after: 'Future-proof positioning' }
]

export function Transformation() {
  return (
    <section className="py-24 code-bg">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            From Designer to{' '}
            <span className="gradient-text">Design Engineer</span>
          </h2>
        </div>

        {/* Transformation grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/30 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Before</div>
                  <div className="text-[var(--color-text-secondary)] line-through decoration-red-500/50">{item.before}</div>
                </div>
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-[var(--color-accent)] uppercase tracking-wider mb-1">After</div>
                  <div className="text-[var(--color-text-primary)] font-medium">{item.after}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certified badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-2xl px-8 py-6 border border-[var(--color-primary)]/30">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold gradient-text">Certified Design Engineer</div>
              <div className="text-[var(--color-text-secondary)]">Join the new elite of designers who ship</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
