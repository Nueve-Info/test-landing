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

const BentoCard = ({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`bg-[var(--color-surface-elevated)] rounded-3xl p-8 overflow-hidden relative ${className}`}
  >
    {children}
  </motion.div>
)

export function PortfolioVariant() {
  return (
    <div className="theme-portfolio min-h-screen bg-[var(--color-surface-dark)] text-[var(--color-text-primary)]">
       <Container>
         {/* Navigation Placeholder */}
         <div className="flex items-center justify-between py-8 mb-8">
           <div className="text-2xl font-semibold tracking-tight">DesignEngineer.io</div>
           <Button variant="outline" size="sm" className="rounded-full">Get Started</Button>
         </div>

         {/* Bento Hero */}
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-20">
            {/* Main Title Card */}
            <BentoCard className="md:col-span-2 lg:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="text-blue-200 font-medium mb-4">The Course</div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                  Design. <br/>
                  Code. <br/>
                  Ship.
                </h1>
              </div>
              <p className="text-xl text-blue-100 max-w-sm">
                The only course you need to bridge the gap between Figma and Production.
              </p>
            </BentoCard>

            {/* Stat Card */}
            <BentoCard delay={0.1} className="bg-[var(--color-surface-light)] flex flex-col justify-center items-center text-center">
              <div className="text-5xl font-bold text-[var(--color-primary)] mb-2">24h</div>
              <div className="text-[var(--color-text-secondary)]">To Production Ready</div>
            </BentoCard>

            {/* Video/Preview Placeholder */}
            <BentoCard delay={0.2} className="lg:col-span-1 md:col-span-1 bg-black relative group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 transition-opacity group-hover:opacity-70" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                   <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>
            </BentoCard>

            {/* Testimonial */}
            <BentoCard delay={0.3} className="md:col-span-2 lg:col-span-2 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)]">
               <div className="flex items-start gap-4 h-full">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shrink-0" />
                 <div>
                   <p className="text-lg leading-relaxed mb-4 text-[var(--color-text-primary)]">
                     "This course completely changed my career trajectory. I went from handing off static files to pushing code to Vercel in less than a week."
                   </p>
                   <div className="text-[var(--color-text-muted)] font-medium">Sarah J., Product Designer @ Stripe</div>
                 </div>
               </div>
            </BentoCard>
            
            {/* CTA */}
            <BentoCard delay={0.4} className="md:col-span-1 bg-[var(--color-surface-light)] hover:bg-[var(--color-surface-elevated)] transition-colors flex flex-col justify-end group cursor-pointer">
               <div className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform">→</div>
               <div className="text-lg font-medium">Start Learning</div>
            </BentoCard>
         </div>

         {/* Sections */}
         <div className="space-y-24">
            <IndustrySplit />
            <Transformation />
            <PortfolioSystem />
            <Curriculum />
            <WhoIsFor />
            <SocialProof />
            <Pricing />
            <FAQ />
            <FinalCTA />
         </div>
       </Container>
    </div>
  )
}
