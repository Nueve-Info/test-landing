import { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { BackgroundGlow } from '../components/ui/BackgroundGlow'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/sections/Footer'

const StatPill = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-medium bg-[var(--color-primary)]/5 backdrop-blur-sm">
    <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
    {children}
  </div>
)

export function NueveFolioDirect17() {
  const price = 27
  const priceLabel = `$${price}`
  const ctaLabel = `Join at the lowest price (${priceLabel})`

  // Countdown to February 6, 2026 at 11:59 PM PST (UTC-8)
  const targetDate = useMemo(() => new Date('2026-02-07T07:59:00Z'), []) // 11:59 PM PST = 07:59 AM UTC next day

  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date()
    const diff = Math.max(0, targetDate.getTime() - now.getTime())
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000)
    }
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const diff = Math.max(0, targetDate.getTime() - now.getTime())
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const valueItems = useMemo(
    () => [
      { name: 'AI for Designers guideline', value: '$75' },
      { name: 'Ready-to-use prompts', value: '$25' },
      { name: 'Over 12h of video lessons', value: '$125' },
      { name: 'Portfolio checklist', value: '$19' },
      { name: 'AI Career Assistant', value: '$25' },
      { name: 'Access to Nueve Community', value: '$15' },
      { name: 'Case study template', value: '$19' },
      { name: 'Claude Code guide for designers', value: '$85' },
      { name: '1:1 strategy session during program', value: '$120' }
    ],
    []
  )

  return (
    <main className="min-h-screen bg-[var(--color-surface-dark)]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% -20%, rgba(253, 126, 53, 0.18), transparent 70%)'
          }}
        />
        <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <StatPill>🔥EARLY BIRD DISCOUNT🔥</StatPill>
              <div className="mt-3 text-sm text-[var(--color-text-muted)]">
                Secure your spot at the lowest price before 11:59 PM on Friday, February 6 (PST).
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  { label: 'Days', value: String(timeLeft.days).padStart(2, '0') },
                  { label: 'Hrs', value: String(timeLeft.hours).padStart(2, '0') },
                  { label: 'Min', value: String(timeLeft.minutes).padStart(2, '0') },
                  { label: 'Sec', value: String(timeLeft.seconds).padStart(2, '0') }
                ].map((b) => (
                  <div
                    key={b.label}
                    className="w-[88px] sm:w-[96px] bg-[var(--color-surface)]/80 backdrop-blur-sm rounded-2xl border border-[var(--color-surface-light)] p-4"
                  >
                    <div className="text-3xl font-bold text-[var(--color-text-primary)]">{b.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-[var(--color-text-muted)]">{b.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8"
            >
              <span className="bg-gradient-to-r from-[#FF6600] via-[#FF9933] to-[#FF6600] bg-clip-text text-transparent">
                “I can’t believe
              </span>{' '}
              I finally finished my portfolio.”
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto"
            >
              - Kamil Grzaba | Senior Designer at Stampli
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
              <Button
                type="button"
                onClick={() => window.location.assign('https://buy.stripe.com/00w7sK77B3SXe2R0COgA81D')}
                size="lg"
                className="bg-[#FD7E35] hover:bg-[#E0601A] text-white border-none rounded-full px-8 font-semibold text-lg shadow-[0_4px_14px_0_rgba(253,126,53,0.39)] hover:shadow-[0_6px_20px_rgba(253,126,53,0.23)] hover:-translate-y-1 transition-all"
                data-event="cta_click"
                data-cta-type="join_27"
                data-cta-placement="hero"
              >
                {ctaLabel}
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Waitlist / Pricing */}
      <section id="offer" className="relative py-24 bg-[var(--color-surface)] overflow-hidden">
        <BackgroundGlow variant="intense" />
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-medium bg-[var(--color-primary)]/5 backdrop-blur-sm">
                🐦 EARLY BIRD OFFER 🔥
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="animate-float relative bg-gradient-to-br from-[var(--color-surface-dark)] to-[var(--color-surface)] rounded-3xl p-8 sm:p-10 border border-[var(--color-primary)]/30 glow-primary">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                <div className="relative z-10 divide-y divide-[var(--color-surface-light)] rounded-2xl border border-[var(--color-surface-light)] overflow-hidden mb-6">
                  {valueItems.map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-4 bg-[var(--color-surface-dark)]/60">
                      <div className="text-[var(--color-text-primary)]">{item.name}</div>
                      <div className="text-[var(--color-text-muted)] font-semibold line-through">{item.value}</div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between p-4 bg-[var(--color-surface-dark)]">
                    <div className="text-[var(--color-text-primary)] font-semibold">TOTAL</div>
                    <div className="text-[var(--color-text-primary)] font-bold line-through">$508</div>
                  </div>
                </div>

                <div className="relative z-10 text-center mb-6">
                  <div className="inline-flex items-center gap-3 mb-2">
                    <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full">96% OFF</span>
                  </div>
                  <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent drop-shadow-sm">
                    {priceLabel}
                  </div>
                  <div className="mt-2 text-sm text-[var(--color-text-muted)]">
                    Early Bird available until 11:59 PM, Feb 6
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-text-muted)]">Program starts: February 28, 2026</div>
                </div>

                <Button
                  type="button"
                  variant="cta"
                  size="lg"
                  className="w-full text-lg font-bold bg-emerald-500 hover:bg-emerald-600 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.6)] hover:scale-[1.02] transition-all duration-300 relative z-10"
                  onClick={() => window.location.assign('https://buy.stripe.com/00w7sK77B3SXe2R0COgA81D')}
                  data-event="cta_click"
                  data-cta-type="join_27"
                  data-cta-placement="offer"
                >
                  {ctaLabel}
                </Button>

                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-bold text-center mb-3 text-[var(--color-text-primary)]">
                    30-day money-back guarantee
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-center leading-relaxed">
                    Try the program for 30 days from your start date and see the results for yourself. If you feel it’s
                    not the right fit for your level or you’re not satisfied with the value, we’ll issue a full refund—no
                    questions asked.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-text-muted)]">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-text-primary)] font-semibold">99%</span> satisfaction rate
                    </div>
                    <div className="flex items-center gap-2">Secure checkout</div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Button
                      type="button"
                      onClick={() => window.location.assign('https://buy.stripe.com/00w7sK77B3SXe2R0COgA81D')}
                      size="lg"
                      className="bg-[#FD7E35] hover:bg-[#E0601A] text-white border-none rounded-full px-10 font-semibold text-lg shadow-[0_4px_14px_0_rgba(253,126,53,0.39)] hover:shadow-[0_6px_20px_rgba(253,126,53,0.23)] hover:-translate-y-1 transition-all"
                      data-event="cta_click"
                      data-cta-type="join_now"
                      data-cta-placement="guarantee"
                    >
                      Join now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="py-16 bg-[var(--color-surface)] border-t border-[var(--color-surface-light)]">
        <Container>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-surface-dark)] rounded-2xl p-6 border border-[var(--color-surface-light)]">
              <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Training conducted by</div>
              <div className="text-[var(--color-text-primary)] font-semibold">
                DOKO Stanislaw Swiatkiewicz
              </div>
              <div className="mt-2 text-[var(--color-text-secondary)]">
                NIP: 8992842076<br />
                REGON: 369622951<br />
                ul. Wolbromska 18/1B, 53-148 Wroclaw
              </div>
            </div>
            <div className="bg-[var(--color-surface-dark)] rounded-2xl p-6 border border-[var(--color-surface-light)]">
              <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Contact</div>
              <div className="text-[var(--color-text-secondary)]">
                <div>
                  <span className="text-[var(--color-text-primary)] font-medium">Email:</span>{' '}
                  <a className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)]" href="mailto:kontakt@model9k.com">
                    kontakt@model9k.com
                  </a>
                </div>
                <div className="mt-2">
                  <span className="text-[var(--color-text-primary)] font-medium">Phone:</span> +48 787 021 952<br />
                  +48 730 875 806
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-surface-dark)] rounded-2xl p-6 border border-[var(--color-surface-light)]">
              <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Teachers</div>
              <ul className="space-y-2 text-[var(--color-text-secondary)]">
                {["Stan's LinkedIn", "Przemek's LinkedIn", 'Li Ani G.', "Anna's LinkedIn", "Wojtek's LinkedIn"].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--color-surface-dark)] rounded-2xl p-6 border border-[var(--color-surface-light)]">
              <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Terms &amp; conditions</div>
              <ul className="space-y-2 text-[var(--color-text-secondary)]">
                <li>Terms of service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="bg-[var(--color-surface-dark)] rounded-2xl p-6 border border-[var(--color-surface-light)]">
              <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Social Media</div>
              <ul className="space-y-2 text-[var(--color-text-secondary)]">
                {['YouTube', 'Facebook', 'Instagram'].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="mt-4 text-sm text-[var(--color-text-muted)]">Website created with Webflow</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Success stories */}
      <section className="relative py-24 bg-[var(--color-surface-dark)] overflow-hidden">
        <BackgroundGlow variant="intense" />
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
              Don’t trust us. <span className="gradient-text">Trust them 👇</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] text-center mb-12">
              The first edition of Nueve Folio proved the system works. Here are examples of participants who landed design
              roles after completing the program.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '„I managed to find a job as a UX designer”',
                  name: 'Malgosia Ozog',
                  bullets: [
                    'Previously worked in IT technical support',
                    'Started a basic UI course with us in January 2024',
                    'Joined Nueve Folio a month later',
                    'At the beginning of October the same year, she started working as a UX Designer at an SEO agency in Cracow'
                  ]
                },
                {
                  title: '„(...) This later allowed me to land a $500 project, which led to getting a full-time job.”',
                  name: 'Slawek Kozik',
                  bullets: [
                    'Before program, he worked in customer service',
                    'He joined Nueve Folio starting almost from scratch',
                    'He didn’t even finish his portfolio :)',
                    'He managed to find comissions, which eventually led to a product designer position',
                    'He currently works as a Product Designer at Santander Bank'
                  ]
                },
                {
                  title: '„I get so many projects that I can comfortably work as a freelancer.”',
                  name: 'Krystian Krajewski',
                  bullets: [
                    'Before the program, he had no experience in design, he was working with cryptocurrencies',
                    'After finishing the program, he prepared a portfolio',
                    'He currently works at an interactive agency and runs a freelance business',
                    'He created a website for Fame MMA'
                  ]
                },
                {
                  title: 'Career change success',
                  name: 'Monika Mosiolek',
                  bullets: [
                    'She wanted to transition from architecture to product design',
                    'Didn’t have a solid portfolio and wasn’t getting responses to applications',
                    'Started working as a UX/UI Designer at Pakart while still in the program',
                    'She is currently also running a freelance business'
                  ]
                }
              ].map((s) => (
                <div key={s.name} className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-surface-light)]">
                  <div className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">{s.title}</div>
                  <div className="text-[var(--color-text-muted)] mb-5">{s.name}</div>
                  <ul className="space-y-2 text-[var(--color-text-secondary)]">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Learn from pros */}
      <section className="relative py-24 bg-[var(--color-surface)] overflow-hidden">
        <BackgroundGlow variant="subtle" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-2 text-center">Learn from pros</div>
            <p className="text-[var(--color-text-secondary)] text-center leading-relaxed max-w-3xl mx-auto">
              At Nueve, you’ll learn Silicon Valley design techniques from our mentor. He has 10 years of industry experience and has worked with global companies like Vans and Mattel (the makers of Barbie). Thanks to him, you’ll find out which techniques are actually used in practice - and which should stay on campus.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-[var(--color-text-primary)]">
              {['Silicon Valley AI techniques', '24/7 access to a mentor'].map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Feature blocks */}
      <section className="relative py-24 bg-[var(--color-surface-dark)] overflow-hidden">
        <BackgroundGlow variant="intense" />
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'A proven case study framework. Works everytime.',
                body:
                  'A portfolio structure based on analysis of 2,000 top designers from companies like Google, Meta, Apple, and OpenAI. You get a tested system. If you already have projects, you adapt them — not rebuild from scratch.'
              },
              {
                title: 'Meet Tom — your career advisor',
                body:
                  'UX, UI, web, product, AI automation — the design market is fragmented, and choosing a direction is hard. That’s why Tom was built with input from 5 senior designers and recruiters. Tom acts as your personal career advisor. Based on your background, preferences, strengths, and gaps, he helps you identify the specialization that makes sense for you. You have private access, anytime.'
              },
              {
                title: 'Recruiters spend ~20 seconds on your portfolio. Use them well.',
                body:
                  'Each role gets hundreds of applicants. Most portfolios are unfocused, hard to scan, and overloaded — which leads to fast rejection. You’ll learn how to structure copy, headlines, visuals, and layout so your portfolio communicates value immediately. This approach helps you stand out and significantly improves your chances of moving forward in the process.'
              },
              {
                title: 'Upgrade your workflow with AI',
                body:
                  'Thousands apply for a single role - the ones who know AI win. AI has become a standard part of modern product teams. More companies expect designers to understand how AI fits into products and workflows.You’ll learn how to apply AI in daily design work in ways that actually improve efficiency and outcomes. You’ll also learn when AI is worth using — and when it isn’t. The result is a clearer, more competitive skill set aligned with global standards.'
              },
              {
                title: 'Portfolio review with experienced mentors',
                body:
                  'Your work is validated by experts. Most programs lack real feedback loops. Nueve Folio 2.0 ends with a full portfolio review by our mentors. You get direct, actionable feedback. We don’t consider the program complete until your portfolio meets our validation criteria.'
              },
              {
                title: 'Digital avatar speaks for you',
                body:
                  'Speak in all languages and scale your online presence. You don’t need a camera, light, or studio — your digital equivalent is enough. During the course, we will show you how to create your own AI avatar that can speak for you on YouTube, in online courses, or presentations. It can be static or dynamic, with camera movements and gestures. Create content in many languages or… delegate it to someone else, while keeping your own face. This is a new level of scaling your online presence.'
              }
            ].map((card) => (
              <div
                key={card.title}
                className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/30 transition-colors"
              >
                <div className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">{card.title}</div>
                <div className="text-[var(--color-text-secondary)] leading-relaxed">{card.body}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Job guarantee */}
      <section className="relative py-24 bg-[var(--color-surface)] overflow-hidden">
        <BackgroundGlow variant="subtle" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Job guarantee — <span className="gradient-text">or your money back</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10">
              Nueve Folio 2.0 delivers results. If you follow the system, we guarantee you’ll land a design role within 6
              months of completing the program. If you don’t — you get a full refund.
            </p>
            <Button
              type="button"
              onClick={() => window.location.assign('https://buy.stripe.com/00w7sK77B3SXe2R0COgA81D')}
              size="lg"
              className="bg-[#FD7E35] hover:bg-[#E0601A] text-white border-none rounded-full px-10 font-semibold text-lg shadow-[0_4px_14px_0_rgba(253,126,53,0.39)] hover:shadow-[0_6px_20px_rgba(253,126,53,0.23)] hover:-translate-y-1 transition-all"
              data-event="cta_click"
              data-cta-type="join_waitlist"
              data-cta-placement="job_guarantee"
            >
              Join the waitlist
            </Button>
          </div>
        </Container>
      </section>

      {/* Community */}
      <section className="py-20 bg-[var(--color-surface-dark)] border-t border-[var(--color-surface-light)]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Over <span className="gradient-text">2900</span> happy students.
            </div>
            <p className="text-[var(--color-text-secondary)] mb-8">
              We’ve managed to build a community of satisfied students. See what people like you are saying about Nueve courses.
            </p>
            <Button
              type="button"
              onClick={() => window.location.assign('https://buy.stripe.com/00w7sK77B3SXe2R0COgA81D')}
              size="lg"
              className="bg-[var(--color-surface)] hover:bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] border border-[var(--color-surface-light)] rounded-full px-10 font-semibold text-lg"
              data-event="cta_click"
              data-cta-type="graduates"
              data-cta-placement="community"
            >
              See what our graduates say
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
