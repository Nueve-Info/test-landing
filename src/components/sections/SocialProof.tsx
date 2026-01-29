import { Container } from '../ui/Container'

const testimonials = [
  {
    quote: "I went from 0 responses to 3 interviews in 2 weeks after rebuilding my portfolio with AI",
    name: "Sarah K.",
    role: "Product Designer",
    avatar: "SK"
  },
  {
    quote: "My portfolio is now live coded, not a PDF. Recruiters are impressed.",
    name: "Marcus T.",
    role: "UI/UX Designer",
    avatar: "MT"
  },
  {
    quote: "I feel future-proof for the first time in years",
    name: "Elena R.",
    role: "Senior Designer",
    avatar: "ER"
  }
]

export function SocialProof() {
  return (
    <section className="py-24 code-bg">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Join The First Wave of{' '}
            <span className="gradient-text">Design Engineers</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text-primary)]">{testimonial.name}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-[var(--color-text-secondary)] italic">"{testimonial.quote}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Student count badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 bg-[var(--color-surface)] rounded-full px-6 py-3 border border-[var(--color-surface-light)]">
            <div className="flex -space-x-3">
              {['bg-[var(--color-primary)]', 'bg-[var(--color-accent)]', 'bg-purple-400', 'bg-cyan-400'].map((color, i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-[var(--color-surface)]`} />
              ))}
            </div>
            <div className="text-[var(--color-text-secondary)]">
              <span className="text-[var(--color-text-primary)] font-semibold">500+</span> designers already enrolled
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
