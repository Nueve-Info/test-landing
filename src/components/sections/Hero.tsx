import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import accentLogo from '../../assets/accent.png'
import behaLogo from '../../assets/beha.png'
import comarLogo from '../../assets/comar.png'
import matteLogo from '../../assets/matte.png'
import mediuLogo from '../../assets/mediu.png'
import samsungLogo from '../../assets/samsung.png'
import profilePic1 from '../../assets/pics/photo-1438761681033-6461ffad8d80.jpeg'
import profilePic2 from '../../assets/pics/photo-1494790108377-be9c29b29330.jpeg'
import profilePic3 from '../../assets/pics/photo-1507003211169-0a1dd7228f2d.jpeg'

const logos = [
  { src: accentLogo, alt: 'Accent' },
  { src: behaLogo, alt: 'Beha' },
  { src: comarLogo, alt: 'Comar' },
  { src: matteLogo, alt: 'Matte' },
  { src: mediuLogo, alt: 'Medium' },
  { src: samsungLogo, alt: 'Samsung' },
]

export function Hero() {
  const fullText = "I'm a designer with few years of experience. I feel stuck in my current role and not really sure what to do. I took up some courses this past year and despite I like it, I see that"
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1))
      }, 30) // Typing speed: 30ms per character
      return () => clearTimeout(timeout)
    } else {
      setIsTyping(false)
    }
  }, [displayedText, fullText])
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 sm:pt-36 pb-32 overflow-hidden bg-[var(--color-surface-dark)]">
      
      {/* Background Enhancements */}
      {/* 1. Subtle Texture (Dots) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }} 
      />
      
      {/* 2. Top Light Gradient (Warm Orange Glow) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% -20%, rgba(253, 126, 53, 0.15), transparent 70%)'
        }}
      />
      
      {/* 3. Secondary Ambient Glow (Bottom Left) */}
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-12 items-end mb-12 lg:mb-12">
          
          {/* Left Column: Badge + Title */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-medium mb-8 bg-[var(--color-primary)]/5 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Enrollment Open for Batch #04
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
            >
              Become a <br />
              <span className="bg-gradient-to-r from-[#FF6600] via-[#FF9933] to-[#FF6600] bg-clip-text text-transparent">Design Engineer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-xl text-[var(--color-text-secondary)] font-medium"
            >
              <span className="lg:hidden">Create Live Portfolio in 24 Hours Using AI</span>
              <span className="hidden lg:inline">Build Production-Ready Portfolio in 24 Hours Using AI</span>
            </motion.p>
          </div>

          {/* Right Column: Description + CTA */}
          <div className="lg:col-span-5 lg:pb-2">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed max-w-md"
            >
              <span className="block lg:hidden">Start building real products. Bridge the gap between Figma and production.</span>
              <span className="hidden lg:block">Stop just designing static pixels. Start building real products. Master AI-assisted coding and bridge the gap between Figma and production.</span>
            </motion.p>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="flex -space-x-3.5">
                {[profilePic1, profilePic2, profilePic3].map((pic, i) => (
                  <img
                    key={i}
                    src={pic}
                    alt={`Alumni ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-[var(--color-surface-dark)] object-cover"
                  />
                ))}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                <span className="font-semibold text-[var(--color-text-primary)]">Over 2,900</span> Nueve alumni
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Button 
                type="button"
                size="lg" 
                className="bg-[#FD7E35] hover:bg-[#E0601A] text-white border-none rounded-full px-8 font-semibold text-lg shadow-[0_4px_14px_0_rgba(253,126,53,0.39)] hover:shadow-[0_6px_20px_rgba(253,126,53,0.23)] hover:-translate-y-1 transition-all"
                data-event="cta_click"
                data-cta-type="start"
                data-cta-placement="hero"
              >
                Start for just $27
              </Button>
              
              <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FD7E35]">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                Early adopter pricing
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Chat Interface Card - Outside Container for proper centering */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-6 lg:mt-8"
      >
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative z-10 text-gray-900 max-w-4xl w-full">
          {/* Header/Greeting */}
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-3xl font-semibold text-gray-900">Hi Tom!</h3>
            <div className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium">
              Unmute
            </div>
          </div>

          {/* Chat Content */}
          <div className="space-y-2 mb-12">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-normal">
              {displayedText}
              <span className={`inline-block w-0.5 h-6 bg-black align-middle ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
            </p>
          </div>

          {/* Input Area */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-transparent">
            <button className="text-gray-400 hover:text-gray-600 transition-colors p-2 -ml-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            
            <button className="bg-black text-white rounded-full p-3 hover:bg-gray-800 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Decorative Elements around card */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FD7E35]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      {/* Logo Marquee - Below Chat Card */}
      <div className="mt-24 overflow-hidden relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-16 animate-logo-scroll">
          {/* Duplicate set for seamless infinite loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-12 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
