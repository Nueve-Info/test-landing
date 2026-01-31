import { Container } from '../ui/Container'
import { BackgroundGlow } from '../ui/BackgroundGlow'
import { VimeoEmbed } from '../ui/VimeoEmbed'

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
    <section className="relative py-24 bg-[var(--color-surface-dark)] overflow-hidden">
      <BackgroundGlow variant="subtle" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Course{' '}
            <span className="gradient-text">Curriculum</span>
          </h2>
        </div>

        {/* Lesson Preview Video */}
        <div className="max-w-3xl mx-auto mb-16">
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe 
              src="https://player.vimeo.com/video/1160305162?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '1rem' }} 
              title="Agenda"
            ></iframe>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group relative bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(253,126,53,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--color-surface-dark)] border border-[var(--color-surface-light)] group-hover:border-[var(--color-primary)]/30 flex items-center justify-center font-mono text-xl font-bold transition-colors">
                   <span className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
                    {module.number}
                   </span>
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
          <div className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-xl p-6 border border-[var(--color-primary)]/30 transition-transform hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-primary)]/5 to-transparent translate-x-[-100%] animate-[shimmer_3s_infinite]" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/20">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-bold bg-[var(--color-primary)]/10 px-2 py-0.5 rounded-full border border-[var(--color-primary)]/20">Bonus</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mt-1">
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
