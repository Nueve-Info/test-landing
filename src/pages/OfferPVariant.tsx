import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/sections/Footer'
import { offers } from '../config/offerConfig'

const offer = offers.p

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function OfferPVariant() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FD7E35] selection:text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FD7E35] origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Hero Section - Redesigned for Impact */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#FD7E35]/10 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left"
            >
              <motion.div variants={fadeInUp} className="inline-block mb-6">
                <span className="px-4 py-2 rounded-full border border-[#FD7E35]/30 bg-[#FD7E35]/10 text-[#FD7E35] text-sm font-semibold tracking-wide uppercase backdrop-blur-md">
                  {offer.badge}
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                {offer.headline} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD7E35] to-[#FFAB76]">
                  {offer.headlineHighlight}
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                {offer.subheadline}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToPricing}
                  size="lg"
                  className="bg-[#FD7E35] hover:bg-[#E0601A] text-white rounded-full px-8 py-6 text-lg shadow-[0_0_40px_-10px_rgba(253,126,53,0.5)] hover:shadow-[0_0_60px_-10px_rgba(253,126,53,0.6)] transition-all duration-300 hover:scale-105"
                  data-event="cta_click"
                  data-cta-type="start"
                  data-cta-placement="hero"
                >
                  {offer.heroCta}
                </Button>
              </motion.div>
            </motion.div>

            {/* Video Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full"
            >
              <div className="bg-[#1E1E1E] rounded-[2rem] p-4 md:p-6 shadow-2xl relative z-10 border border-white/10 overflow-hidden">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1160304896?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '1rem' }} 
                    title="Introduction"
                  ></iframe>
                </div>
              </div>
              
              {/* Decorative glow effects */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FD7E35]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Problem Section - Dark & Moody with Highlight */}
      <section className="py-32 bg-[#050505] relative">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              {offer.problemTitle} <br />
              <span className="text-[#FD7E35]">{offer.problemTitleHighlight}</span>
            </motion.h2>
            <div className="space-y-2 text-xl text-gray-400">
              {offer.problemIntro.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-red-400">The Trap</h3>
              <ul className="space-y-4">
                {offer.problemPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="text-red-500 mt-1">✕</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#111] p-8 rounded-3xl border border-[#FD7E35]/20 hover:border-[#FD7E35]/40 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#FD7E35]/5 group-hover:bg-[#FD7E35]/10 transition-colors" />
              <h3 className="text-2xl font-bold mb-6 text-[#FD7E35]">The Reality</h3>
              <div className="grid grid-cols-1 gap-4">
                {offer.problemData.map((data, i) => (
                  <div key={i} className="bg-black/40 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{data.label}</span>
                    <span className="font-bold text-white">{data.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-center text-2xl font-medium text-white max-w-3xl mx-auto">
            {offer.problemConclusion}
          </p>
        </Container>
      </section>

      {/* Mechanism Section - Bento Grid Style */}
      <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FD7E35]/50 to-transparent" />
        
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              {offer.mechanismTitle} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD7E35] to-[#FFAB76]">
                {offer.mechanismTitleHighlight}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {offer.mechanismIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {offer.mechanismSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#151515] p-8 rounded-3xl border border-white/5 hover:border-[#FD7E35]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[#FD7E35]/10 rounded-2xl flex items-center justify-center text-[#FD7E35] font-bold text-xl mb-6 group-hover:bg-[#FD7E35] group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-[#FD7E35]/10 to-transparent rounded-3xl border border-[#FD7E35]/20 text-center">
            <p className="text-xl font-medium text-white">
              {offer.mechanismConclusion}
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits Section - Checkmark List with Visuals */}
      <section className="py-32 bg-[#050505]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                What You <span className="text-[#FD7E35]">Get</span>
              </h2>
              <div className="space-y-6">
                {offer.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FD7E35]/20 to-purple-500/20 blur-3xl rounded-full" />
              <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
                  <div className="w-12 h-12 bg-[#FD7E35] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    P
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Hybrid Case Study</div>
                    <div className="text-gray-400 text-sm">What's Inside</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                    <svg className="w-5 h-5 text-[#FD7E35] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    <div>
                      <div className="text-white font-medium text-sm">Hybrid Template</div>
                      <div className="text-gray-400 text-xs">Design + Code structure</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                    <svg className="w-5 h-5 text-[#FD7E35] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <div>
                      <div className="text-white font-medium text-sm">Code Artifact Framework</div>
                      <div className="text-gray-400 text-xs">Present code beautifully</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                    <svg className="w-5 h-5 text-[#FD7E35] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <div>
                      <div className="text-white font-medium text-sm">Bridge Narrative Scripts</div>
                      <div className="text-gray-400 text-xs">Connect design to dev</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                    <svg className="w-5 h-5 text-[#FD7E35] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="text-white font-medium text-sm">Job Post Decoder</div>
                      <div className="text-gray-400 text-xs">Target the right roles</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonial - Large & Bold */}
      <section className="py-32 bg-[#0A0A0A] relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-[#FD7E35] text-6xl font-serif mb-8">"</div>
            <h3 className="text-3xl sm:text-4xl font-medium leading-relaxed mb-10 text-white">
              {offer.testimonial.quote}
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl font-bold">
                {offer.testimonial.name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-bold text-white">{offer.testimonial.name}</div>
                <div className="text-[#FD7E35]">{offer.testimonial.role}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing - The "Ticket" Look */}
      <section id="pricing" className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FD7E35]/5" />
        
        <Container className="relative z-10">
          <div className="max-w-xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#111] rounded-[2.5rem] p-1 border border-[#FD7E35]/30 shadow-[0_0_100px_-20px_rgba(253,126,53,0.2)]"
            >
              <div className="bg-[#151515] rounded-[2rem] p-10 sm:p-14 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#FD7E35] shadow-[0_0_20px_#FD7E35]" />
                
                <h2 className="text-gray-400 font-medium tracking-widest uppercase text-sm mb-4">
                  Early Research Preview
                </h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-7xl font-bold text-white tracking-tighter">{offer.price}</span>
                </div>
                
                <div className="inline-block px-4 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold mb-8">
                  Final Release Price: $137
                </div>
                
                <p className="text-gray-400 mb-10 text-lg">
                  Get instant access to the framework during our research phase. <br />
                  Zero risk. 30-day guarantee.
                </p>

                <Button
                  href={offer.stripeLink}
                  target="_blank"
                  className="w-full bg-[#FD7E35] hover:bg-[#E0601A] text-white py-6 text-xl rounded-2xl font-bold shadow-lg shadow-[#FD7E35]/20 hover:shadow-[#FD7E35]/40 transition-all mb-6"
                  data-event="select_plan"
                  data-plan-type={`offer_${offer.letter.toLowerCase()}`}
                  data-billing="one_time"
                  data-price={offer.priceValue}
                  data-currency="USD"
                  data-stripe-url={offer.stripeLink}
                  data-cta-placement="pricing"
                >
                  {offer.heroCta}
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure payment via Stripe
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ - Accordion */}
      <section className="py-32 bg-[#0A0A0A]">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-16">
            Common <span className="text-[#FD7E35]">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {offer.faqs.map((faq, i) => (
              <div 
                key={i}
                className="bg-[#111] rounded-2xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <span className={`text-[#FD7E35] text-2xl transition-transform duration-300 ${openFaqIndex === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaqIndex === i ? 'auto' : 0, opacity: openFaqIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA - Simple & Direct */}
      <section className="py-32 bg-[#050505] text-center">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              {offer.finalCtaTitle} <br />
              <span className="text-[#FD7E35]">{offer.finalCtaTitleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              {offer.finalCtaSubtitle}
            </p>
            <Button
              href={offer.stripeLink}
              target="_blank"
              size="lg"
              className="bg-[#FD7E35] hover:bg-[#E0601A] text-white rounded-full px-10 py-6 text-xl font-bold shadow-[0_0_40px_-10px_rgba(253,126,53,0.5)] hover:shadow-[0_0_60px_-10px_rgba(253,126,53,0.6)] transition-all duration-300 hover:scale-105"
              data-event="select_plan"
              data-plan-type={`offer_${offer.letter.toLowerCase()}`}
              data-billing="one_time"
              data-price={offer.priceValue}
              data-currency="USD"
              data-stripe-url={offer.stripeLink}
              data-cta-placement="final_cta"
            >
              {offer.finalCtaButton}
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
