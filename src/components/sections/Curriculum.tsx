import { Container } from '../ui/Container'

const modules = [
  { number: '01', title: 'Design Engineer Mindset & Market Positioning', description: 'Understand the new landscape and position yourself for success' },
  { number: '02', title: 'AI Agent Portfolio Builder System (Claude Code)', description: 'Master the AI tools that will build your portfolio' },
  { number: '03', title: 'Story Extraction from Projects', description: 'Even NDA work can become compelling case studies' },
  { number: '04', title: 'One-Prompt Portfolio Generation', description: 'Generate complete portfolios with a single prompt' },
  { number: '05', title: 'Animation & Polish (Jitter Integration)', description: 'Add professional animations that impress' },
  { number: '06', title: 'AI as Portfolio Judge', description: 'Get AI feedback to continuously improve' },
  { number: '07', title: 'Rapid Project Generation', description: 'Generate new projects using ideasbrowser.com' }
]

export function Curriculum() {
  return (
    <section className="py-24 code-bg">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Course{' '}
            <span className="gradient-text">Curriculum</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 flex items-center justify-center font-mono text-[var(--color-primary)] font-medium">
                  {module.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-light)] transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mt-1">{module.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Bonus module */}
          <div className="bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-xl p-6 border border-[var(--color-primary)]/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] font-medium">Bonus</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  The Figma Bottleneck Thesis
                </h3>
                <p className="text-[var(--color-text-secondary)] mt-1">Position yourself as the solution to design bottlenecks</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
