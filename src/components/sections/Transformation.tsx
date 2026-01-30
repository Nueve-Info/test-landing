import { Container } from '../ui/Container'
import { BackgroundGlow } from '../ui/BackgroundGlow'
import { VimeoEmbed } from '../ui/VimeoEmbed'

const transformations = [
  { before: 'Figma mockups', after: 'Live coded websites' },
  { before: 'Wait for developers', after: 'Ship independently' },
  { before: 'Generic portfolio', after: 'Custom-coded showcase' },
  { before: 'Job anxiety', after: 'Future-proof positioning' }
]

export function Transformation() {
  return (
    <section className="relative py-24 bg-[var(--color-surface-dark)] overflow-hidden">
      <BackgroundGlow variant="intense" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            From Designer to{' '}
            <span className="gradient-text">Design Engineer</span>
          </h2>
        </div>

        {/* Video Section - Below Heading */}
        <div className="max-w-3xl mx-auto mb-16">
          <VimeoEmbed 
            videoId="1086710926" 
            title="Upgrade your workflow with AI"
            caption="See how AI tools like Cursor accelerate development workflows by 10x."
            mode="ambient"
          />
        </div>

        {/* Transformation grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--color-surface)]/80 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(253,126,53,0.15)] group"
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Before</div>
                  <div className="text-[var(--color-text-secondary)] line-through decoration-red-500/50 group-hover:decoration-red-500 transition-colors">{item.before}</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-[var(--color-primary)]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg className="w-8 h-8 text-[var(--color-primary)] relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <div className="text-sm text-[var(--color-accent)] uppercase tracking-wider mb-1">After</div>
                  <div className="text-[var(--color-text-primary)] font-bold group-hover:text-[var(--color-primary-light)] transition-colors">{item.after}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certified badge */}
        <div className="flex justify-center">
          <div className="relative inline-flex items-center gap-4 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-2xl px-8 py-6 border border-[var(--color-primary)]/30 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-primary)]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center shadow-[0_0_20px_rgba(253,126,53,0.4)] animate-pulse-glow">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="text-xl font-bold gradient-text">Certified Design Engineer</div>
              <div className="text-[var(--color-text-secondary)]">Join the new elite of designers who ship</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
