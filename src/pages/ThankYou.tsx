import { Container } from '../components/ui/Container'
import { BackgroundGlow } from '../components/ui/BackgroundGlow'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export function ThankYou() {
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        currency: 'USD',
        value: 97.00 // Default value for early access
      });
    }
  }, []);

  // Floating particles for delight
  const particles = Array.from({ length: 12 })

  return (
    <main className="min-h-screen bg-[var(--color-surface-dark)] text-[var(--color-text-primary)] relative overflow-hidden flex items-center justify-center py-20">
      <BackgroundGlow variant="intense" />
      
      {/* Decorative Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 100, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[120px]"
        />
      </div>

      {/* Confetti-like particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: "110%", 
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5,
            rotate: 0
          }}
          animate={{ 
            y: "-10%", 
            opacity: [0, 1, 1, 0],
            rotate: 360
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute w-2 h-2 bg-[var(--color-primary)]/20 rounded-full pointer-events-none"
        />
      ))}
      
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 15,
              delay: 0.1 
            }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              {/* Multiple Pulse Rings */}
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl"
              />
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl"
              />
              
              {/* Icon Container */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-emerald-500/30 to-emerald-500/5 flex items-center justify-center border border-emerald-500/40 shadow-[0_0_60px_rgba(16,185,129,0.3)] backdrop-blur-md"
              >
                <motion.svg 
                  className="w-14 h-14 sm:w-16 sm:h-16 text-emerald-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={3} 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    d="M5 13l4 4L19 7" 
                  />
                </motion.svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 gradient-text">
              Thank You!
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-[var(--color-text-secondary)] mb-12 font-medium"
          >
            Your early access purchase is confirmed
          </motion.p>

          {/* Main Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.5 
            }}
            whileHover={{ y: -5 }}
            className="group relative bg-gradient-to-br from-[var(--color-surface-dark)] to-[var(--color-surface)] rounded-[2.5rem] p-10 sm:p-14 border border-white/10 glow-primary mb-12 max-w-xl mx-auto backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            {/* Animated Border Beam */}
            <div className="absolute inset-0 rounded-[2.5rem] p-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shimmer Effect */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
            />
            
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            <div className="relative space-y-8">
              <p className="text-xl sm:text-2xl text-[var(--color-text-primary)] leading-relaxed font-medium">
                We're thrilled to have you join us as an early adopter!
              </p>
              
              <div className="pt-8 border-t border-white/10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold mb-4 border border-[var(--color-primary)]/20">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                  What's Next?
                </div>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
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
