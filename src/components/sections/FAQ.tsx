import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../ui/Container'
import { BackgroundGlow } from '../ui/BackgroundGlow'

const faqs = [
  {
    question: 'Do I need to know how to code?',
    answer: 'No, AI writes the code for you. You focus on your design story and creative decisions.'
  },
  {
    question: 'Is this just templates?',
    answer: 'No, your portfolio is custom-built to your story using AI. Every portfolio is unique.'
  },
  {
    question: "What if I don't have projects?",
    answer: 'We teach rapid project generation using ideasbrowser.com. You can create compelling case studies quickly.'
  },
  {
    question: 'How is this different from Webflow/Framer?',
    answer: "You learn AI leverage, not just tools. This isn't about learning another platform—it's about becoming a new type of designer."
  },
  {
    question: 'Will this really help me get hired?',
    answer: 'Portfolio is the #1 hiring factor. Recruiters spend 6-8 seconds on initial scans. A coded, live portfolio stands out instantly.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 bg-[var(--color-surface)] overflow-hidden">
      <BackgroundGlow variant="subtle" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`group bg-[var(--color-surface)] rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-[var(--color-primary)]/50 shadow-[0_0_20px_rgba(253,126,53,0.1)]' 
                    : 'border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/30'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`text-lg font-medium pr-4 transition-colors ${
                    isOpen ? 'text-[var(--color-primary-light)]' : 'text-[var(--color-text-primary)]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-[var(--color-primary)] rotate-180' : 'bg-[var(--color-surface-light)] group-hover:bg-[var(--color-surface-elevated)]'
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-colors ${isOpen ? 'text-white' : 'text-[var(--color-text-muted)]'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-surface-light)] pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
