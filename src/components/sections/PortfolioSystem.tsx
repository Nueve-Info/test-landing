import { Container } from '../ui/Container'

const steps = [
  {
    number: '01',
    title: 'AI Interview',
    description: 'AI interviews you about projects → extracts compelling stories',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Code Generation',
    description: 'AI generates production-ready HTML/CSS/JS portfolio',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'AI Feedback',
    description: 'AI judges and rates your portfolio → tells you how to improve',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Polish & Deploy',
    description: 'Add animations, deploy live website to the world',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
]

export function PortfolioSystem() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Build Your Elite Portfolio in{' '}
            <span className="gradient-text">24 Hours Using AI Agents</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Not templates. Not Figma exports.{' '}
            <span className="text-[var(--color-text-primary)] font-medium">Real code, custom to YOUR story, built in hours.</span>
          </p>
        </div>

        {/* Steps flowchart */}
        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-[var(--color-surface-dark)] rounded-2xl p-6 border border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/30 transition-all h-full">
                <div className="text-[var(--color-primary)] text-sm font-mono mb-4">{step.number}</div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{step.description}</p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <svg className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Code aesthetic element */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-[var(--color-surface-dark)] rounded-xl border border-[var(--color-surface-light)] overflow-hidden shadow-2xl">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-surface-light)] bg-[var(--color-surface)]/50">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-sm text-[var(--color-text-secondary)] font-medium">AI Portfolio Agent</span>
            </div>
            
            {/* Window Body */}
            <div className="p-6 md:p-8">
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[var(--color-text-secondary)]">Analyzing your professional story</span>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[var(--color-text-secondary)]">Generating custom design system</span>
                </div>

                 {/* Step 3 */}
                 <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[var(--color-text-secondary)]">Writing project case studies</span>
                </div>

                {/* Final Success */}
                <div className="mt-6 p-4 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                   </div>
                   <div>
                      <div className="text-[var(--color-text-primary)] font-semibold">Portfolio Ready</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">Generated in a day</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
