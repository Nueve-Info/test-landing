import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden code-bg">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)] rounded-full blur-[128px] opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-[128px] opacity-15" />

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Become a{' '}
            <span className="gradient-text">Design Engineer</span>:{' '}
            Build Production-Ready Portfolios in 24 Hours Using AI
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--color-text-secondary)] mb-10 max-w-3xl mx-auto">
            The new elite of designers don't just make mockups—they ship code. Join the transformation before everyone else does.
          </p>
          <Button variant="cta" size="lg">
            Start Your Transformation ($27)
          </Button>
        </div>

        {/* Split-screen comparison */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Traditional Designer */}
          <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-surface-light)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider">Traditional Designer</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Stuck in Figma</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Creates mockups only</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Needs developer</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-[var(--color-surface-dark)] rounded-lg border border-red-500/20">
                <div className="text-sm text-[var(--color-text-muted)]">Status</div>
                <div className="text-red-400 font-medium">Waiting for handoff...</div>
              </div>
            </div>
          </div>

          {/* Design Engineer */}
          <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-primary)]/30 relative overflow-hidden glow-primary">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
                <span className="text-sm text-[var(--color-accent)] uppercase tracking-wider font-medium">Design Engineer</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[var(--color-text-primary)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-assisted workflow</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--color-text-primary)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Live website production</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--color-text-primary)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ships independently</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-[var(--color-surface-dark)] rounded-lg border border-[var(--color-accent)]/30">
                <div className="text-sm text-[var(--color-text-muted)]">Status</div>
                <div className="text-[var(--color-accent)] font-medium">Deployed to production</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
