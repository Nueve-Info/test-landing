import { Container } from '../ui/Container'

const stats = [
  { value: '66%', label: 'of designers fear AI will replace them' },
  { value: '33%', label: 'drop in entry-level design hiring' },
  { value: '40%', label: 'more opportunities for design engineers with coding skills' }
]

export function IndustrySplit() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Design World Is{' '}
            <span className="gradient-text">Splitting In Two</span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            AI isn't replacing designers. It's creating a new tier. Design Engineers who harness AI are landing roles, commanding respect, and building full-stack products. Traditional designers are competing for fewer jobs and lower pay.{' '}
            <span className="text-[var(--color-text-primary)] font-medium">Which side will you choose?</span>
          </p>
        </div>

        {/* Diverging path visual */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <div className="flex justify-center">
            <div className="w-1 h-16 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent" />
          </div>
          <div className="flex justify-between items-start">
            <div className="flex-1 text-center">
              <div className="w-1 h-16 bg-gradient-to-b from-red-500/50 to-red-500 mx-auto transform -rotate-45 origin-top" />
              <div className="mt-8 p-6 bg-[var(--color-surface-dark)] rounded-xl border border-red-500/20">
                <div className="text-red-400 font-semibold mb-2">Traditional Path</div>
                <div className="text-sm text-[var(--color-text-muted)]">Fewer jobs, lower pay, job anxiety</div>
              </div>
            </div>
            <div className="w-16" />
            <div className="flex-1 text-center">
              <div className="w-1 h-16 bg-gradient-to-b from-[var(--color-primary)]/50 to-[var(--color-accent)] mx-auto transform rotate-45 origin-top" />
              <div className="mt-8 p-6 bg-[var(--color-surface-dark)] rounded-xl border border-[var(--color-primary)]/30 glow-primary">
                <div className="text-[var(--color-accent)] font-semibold mb-2">Design Engineer Path</div>
                <div className="text-sm text-[var(--color-text-secondary)]">More opportunities, higher pay, future-proof</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[var(--color-surface-dark)] rounded-2xl p-8 text-center border border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/30 transition-colors"
            >
              <div className={`text-4xl sm:text-5xl font-bold mb-3 ${index === 2 ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-primary)]'}`}>
                {stat.value}
              </div>
              <div className="text-[var(--color-text-secondary)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
