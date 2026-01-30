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

export function DesignToolVariant() {
  return (
    <div className="theme-design-tool min-h-screen bg-[var(--color-surface-dark)] text-[var(--color-text-primary)] font-sans">
      {/* Design Tool UI Shell */}
      <div className="fixed top-0 left-0 w-16 h-full bg-[var(--color-surface)] border-r border-[var(--color-surface-light)] z-40 hidden lg:flex flex-col items-center py-6 gap-6">
        <div className="w-8 h-8 bg-[var(--color-primary)] rounded-md" />
        <div className="flex-1 w-full flex flex-col gap-4 px-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-full aspect-square rounded bg-[var(--color-surface-light)] hover:bg-[var(--color-primary-light)] transition-colors cursor-pointer" />
          ))}
        </div>
      </div>

      <div className="lg:pl-16">
        {/* Top Bar */}
        <div className="h-14 border-b border-[var(--color-surface-light)] bg-[var(--color-surface)] flex items-center px-6 justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
             <span className="font-bold text-lg">Untitled Design System</span>
             <span className="text-[var(--color-text-muted)] text-sm">Edited just now</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--color-surface)] bg-gray-300" />
              ))}
            </div>
            <Button size="sm" variant="primary">Share</Button>
          </div>
        </div>

        {/* Hero Section - Custom for Design Tool */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
          
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 border border-blue-100"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Waitlist Open
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)]"
              >
                Design is <span className="text-[var(--color-primary)]">Code</span>.
                <br />
                Stop faking it.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Transform your Figma mocks into production-ready code. Join the new elite of Design Engineers who ship.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-4"
              >
                <Button size="lg">Start Building</Button>
                <Button size="lg" variant="outline">View Curriculum</Button>
              </motion.div>
            </div>

            {/* Canvas-like Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }} 
              className="bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-[var(--color-surface-light)] p-2"
            >
              <div className="bg-[var(--color-surface-dark)] rounded-lg overflow-hidden aspect-[16/9] relative flex items-center justify-center">
                 <div className="text-center p-8">
                    <div className="text-[var(--color-text-muted)] mb-2">Component Preview</div>
                    <div className="text-3xl font-bold text-[var(--color-text-primary)]">Interactive Portfolio System</div>
                 </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Existing Sections with enforced light theme context if needed, 
            though CSS vars handle most. Some might need overrides if they use hardcoded dark classes.
        */}
        <div className="bg-[var(--color-surface)]">
          <IndustrySplit />
        </div>
        <Transformation />
        <PortfolioSystem />
        <Curriculum />
        <WhoIsFor />
        <SocialProof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </div>
    </div>
  )
}
