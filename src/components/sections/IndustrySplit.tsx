import { Container } from '../ui/Container'
import { motion } from 'framer-motion'
import { VimeoEmbed } from '../ui/VimeoEmbed'

const stats = [
  { value: '66%', label: 'of designers fear AI will replace them' },
  { value: '33%', label: 'drop in entry-level design hiring' },
  { value: '40%', label: 'more opportunities for design engineers with coding skills' }
]

export function IndustrySplit() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Design World Is{' '}
            <span className="gradient-text">Splitting In Two</span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Design Engineers who harness AI are the most reliable assets in the industry. While traditional designers need to compete for fewer jobs and unsatisfying pay.{' '}
            <span className="text-[var(--color-text-primary)] font-medium">Which side will you choose?</span>
          </p>
        </div>

        {/* Graph Visual */}
        <div className="relative max-w-3xl mx-auto mb-12 h-72 sm:h-96 bg-[var(--color-surface-dark)] rounded-2xl border border-[var(--color-surface-light)] px-8 pt-8 pb-8 overflow-hidden shadow-2xl">
          {/* Grid lines */}
          <div className="absolute inset-0 px-8 pt-8 pb-12 flex flex-col justify-between pointer-events-none" style={{ paddingTop: '48px' }}>
             {[...Array(5)].map((_, i) => <div key={i} className="w-full h-px bg-[var(--color-surface-light)]/30 border-t border-dashed border-[var(--color-text-muted)]/20" />)}
          </div>
          
          <div className="relative h-full w-full">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
               {/* Defs for gradients */}
               <defs>
                 <linearGradient id="gradTraditional" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                   <stop offset="100%" stopColor="#EF4444" stopOpacity="0.2" />
                 </linearGradient>
                 <linearGradient id="gradDesignEng" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.5" />
                   <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="1" />
                 </linearGradient>
               </defs>

               {/* Traditional Path - Downward trend */}
               <motion.path 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 d="M0,35 C40,35 62.5,65 100,90" 
                 fill="none" 
                 stroke="url(#gradTraditional)" 
                 strokeWidth="2" 
                 strokeDasharray="4 2"
               />
               
               {/* Design Engineer Path - Upward trend */}
               <motion.path 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                 d="M0,90 C40,90 62.5,65 100,10" 
                 fill="none" 
                 stroke="url(#gradDesignEng)" 
                 strokeWidth="4" 
                 strokeLinecap="round"
               />
               
               {/* Intersection Dot - Adjusted to ~62.5% (Mid 2026) */}
               <motion.circle 
                 initial={{ opacity: 0, scale: 0 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 1.2 }}
                 cx="61.5" cy="60.5" r="1.5" fill="white" 
               />
            </svg>
            
            {/* Labels */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute left-0 top-[35%] bg-[var(--color-surface)]/80 backdrop-blur px-3 py-1 rounded-md border border-red-500/20 text-xs text-red-400 font-medium"
            >
              Traditional Path
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute right-0 top-[10%] bg-[var(--color-surface)]/80 backdrop-blur px-4 py-2 rounded-lg border border-[var(--color-primary)]/30 text-sm font-bold text-[var(--color-primary)] shadow-[0_0_20px_rgba(253,126,53,0.2)]"
            >
              Design Engineer Path 🚀
            </motion.div>

            {/* Current moment marker - Mid 2026 (approx 62.5% across) */}
            <div className="absolute left-[62.5%] top-0 bottom-0 w-px bg-white/10 border-l border-dashed border-white/20">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest whitespace-nowrap bg-[var(--color-surface-dark)]/80 px-1 backdrop-blur">
                 AI Tipping Point
               </div>
            </div>
            
            {/* Axis Labels */}
            <div className="absolute bottom-0 w-full flex justify-between text-[10px] sm:text-xs text-[var(--color-text-muted)] font-mono pt-4">
              <span>2024</span>
              <span>2025</span>
              <span>2026</span>
              <span>2027</span>
              <span>2028</span>
            </div>
            
            <div className="absolute left-[-10px] top-0 bottom-0 flex flex-col justify-between text-[10px] sm:text-xs text-[var(--color-text-muted)] font-mono h-full py-8">
              <span>High</span>
              <span>Low</span>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[var(--color-surface-dark)] rounded-2xl p-8 text-center border border-[var(--color-surface-light)] hover:border-[var(--color-primary)]/30 transition-colors"
            >
              <div className={`text-4xl sm:text-5xl font-bold mb-3 ${index === 2 ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-primary)]'}`}>
                {stat.value}
              </div>
              <div className="text-[var(--color-text-secondary)]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Video Section - Below Stats */}
        <div className="max-w-3xl mx-auto">
          <VimeoEmbed 
            videoId="1086710926" 
            title="Upgrade your workflow with AI"
            caption="See how AI tools like Cursor accelerate development workflows by 10x."
            mode="ambient"
          />
        </div>
      </Container>
    </section>
  )
}
