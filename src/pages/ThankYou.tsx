import { Container } from '../components/ui/Container'
import { BackgroundGlow } from '../components/ui/BackgroundGlow'
import { motion } from 'framer-motion'

export function ThankYou() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-dark)] text-[var(--color-text-primary)] relative overflow-hidden">
      <BackgroundGlow variant="subtle" />
      
      <Container className="relative z-10 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 
            }}
            className="flex justify-center mb-10"
          >
            <div className="relative">
              {/* Outer Pulse Ring */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl"
              />
              
              {/* Icon Container */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.2)] backdrop-blur-sm">
                <motion.svg 
                  className="w-12 h-12 sm:w-14 sm:h-14 text-emerald-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5} 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                    d="M5 13l4 4L19 7" 
                  />
                </motion.svg>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Thank You!
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl text-[var(--color-text-secondary)] mb-8 font-medium"
          >
            Your early access purchase is confirmed
          </motion.p>

          {/* Main Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-[var(--color-surface-dark)] to-[var(--color-surface)] rounded-3xl p-8 sm:p-10 border border-[var(--color-primary)]/30 glow-primary mb-8 max-w-xl mx-auto"
          >
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            
            <div className="relative space-y-6">
              <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                We're thrilled to have you join us as an early adopter!
              </p>
              
              <div className="pt-6 border-t border-[var(--color-surface-light)]">
                <p className="text-base sm:text-lg text-[var(--color-text-primary)] font-medium mb-2">
                  What's Next?
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  You'll hear from us soon with details about your early access and next steps. 
                  We'll be in touch via email with everything you need to get started.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </main>
  )
}
