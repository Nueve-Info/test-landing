import accentLogo from '../../assets/accent.png'
import aghLogo from '../../assets/agh.png'
import allegLogo from '../../assets/alleg.png'
import behaLogo from '../../assets/beha.png'
import comarLogo from '../../assets/comar.png'
import matteLogo from '../../assets/matte.png'
import mediuLogo from '../../assets/mediu.png'
import pzuLogo from '../../assets/pzu.png'
import samsungLogo from '../../assets/samsung.png'

const logos = [
  { src: accentLogo, alt: 'Accent' },
  { src: aghLogo, alt: 'AGH' },
  { src: allegLogo, alt: 'Allegro' },
  { src: behaLogo, alt: 'Beha' },
  { src: comarLogo, alt: 'Comar' },
  { src: matteLogo, alt: 'Matte' },
  { src: mediuLogo, alt: 'Medium' },
  { src: pzuLogo, alt: 'PZU' },
  { src: samsungLogo, alt: 'Samsung' },
]

export function LogoMarquee() {
  return (
    <section className="py-12 bg-[var(--color-surface-dark)] overflow-hidden relative">
      {/* Background Enhancements - matching Hero */}
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

      <div className="flex items-center gap-16 animate-logo-scroll relative z-10">
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
    </section>
  )
}
