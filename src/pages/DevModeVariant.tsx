import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { IndustrySplit } from '../components/sections/IndustrySplit'
import { Transformation } from '../components/sections/Transformation'
import { PortfolioSystem } from '../components/sections/PortfolioSystem'
import { Curriculum } from '../components/sections/Curriculum'
import { WhoIsFor } from '../components/sections/WhoIsFor'
import { SocialProof } from '../components/sections/SocialProof'
import { Pricing } from '../components/sections/Pricing'
import { FAQ } from '../components/sections/FAQ'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Footer } from '../components/sections/Footer'
import { Navbar } from '../components/Navbar'

export function DevModeVariant() {
  return (
    <div className="theme-dev-mode min-h-screen bg-[var(--color-surface-dark)] text-[var(--color-text-primary)] font-mono selection:bg-[var(--color-primary)] selection:text-black">
      <Navbar />
      {/* Matrix/Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, var(--color-surface-light) 25%, var(--color-surface-light) 26%, transparent 27%, transparent 74%, var(--color-surface-light) 75%, var(--color-surface-light) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, var(--color-surface-light) 25%, var(--color-surface-light) 26%, transparent 27%, transparent 74%, var(--color-surface-light) 75%, var(--color-surface-light) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }} 
      />

      <Container className="relative z-10 pt-12 sm:pt-14">
        {/* Nav-ish Header */}
        <header className="py-6 flex justify-between items-center border-b border-[var(--color-surface-light)] mb-10">
          <div className="text-[var(--color-primary)] font-bold tracking-tighter text-xl">
            &lt;DesignEngineer /&gt;
          </div>
          <div className="text-sm text-[var(--color-text-muted)]">
            v2.0.25 (stable)
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-2 py-1 bg-[var(--color-surface-elevated)] border border-[var(--color-primary-dark)] rounded text-[var(--color-primary)] text-xs mb-6"
            >
              $ npm install skilled-designer@latest
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-bold leading-tight mb-6"
            >
              Commit <span className="text-[var(--color-primary)]">Code</span>.<br />
              Push <span className="text-[var(--color-accent)]">Value</span>.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[var(--color-text-secondary)] mb-8 border-l-2 border-[var(--color-surface-light)] pl-4"
            >
              // TODO: Stop making static mocks<br />
              // TODO: Start shipping real products<br />
              // STATUS: Enrolling now
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <Button className="font-mono bg-[var(--color-primary)] text-black hover:bg-[var(--color-primary-light)]">
                Initialize Transformation
              </Button>
            </motion.div>
          </div>

          {/* Terminal Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[var(--color-surface)] border border-[var(--color-surface-light)] rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,255,148,0.1)]"
          >
            <div className="bg-[var(--color-surface-light)] px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto text-xs text-[var(--color-text-muted)]">bash — 80x24</div>
            </div>
            <div className="p-6 font-mono text-sm space-y-2">
              <div className="flex gap-2">
                <span className="text-[var(--color-accent)]">user@portfolio:~$</span>
                <span>check-skills --verbose</span>
              </div>
              <div className="text-[var(--color-text-secondary)]">
                {'>'} Analyzing design system... <span className="text-green-500">OK</span><br/>
                {'>'} Checking React knowledge... <span className="text-red-500">MISSING</span><br/>
                {'>'} Checking Tailwind proficiency... <span className="text-red-500">MISSING</span><br/>
                {'>'} Calculation potential lost revenue...
              </div>
              <div className="text-[var(--color-primary)] pt-2">
                CRITICAL WARNING: Career stagnation detected.
              </div>
              <div className="flex gap-2 pt-2 animate-pulse">
                <span className="text-[var(--color-accent)]">user@portfolio:~$</span>
                <span className="w-2 h-4 bg-[var(--color-primary)] inline-block" />
              </div>
            </div>
          </motion.div>
        </section>
      </Container>

      {/* Sections */}
      <IndustrySplit />
      <Transformation />
      <PortfolioSystem />
      <Curriculum />
      <WhoIsFor />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
