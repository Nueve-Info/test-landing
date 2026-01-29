import { useState } from 'react'
import { Container } from '../ui/Container'

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
    <section className="py-24 code-bg">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-surface-light)] overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--color-surface-light)]/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-[var(--color-text-primary)] pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[var(--color-primary)] transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[var(--color-text-secondary)]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
