import { memo } from 'react'

interface BackgroundGlowProps {
  className?: string
  variant?: 'default' | 'subtle' | 'intense'
}

export const BackgroundGlow = memo(function BackgroundGlow({ 
  className = '', 
  variant = 'default' 
}: BackgroundGlowProps) {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      {/* 1. Subtle Texture (Dots) */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }} 
      />
      
      {/* 2. Top Light Gradient (Warm Orange Glow) */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          variant === 'subtle' ? 'opacity-30' : 
          variant === 'intense' ? 'opacity-80' : 'opacity-50'
        }`}
        style={{
          background: 'radial-gradient(circle at 50% -20%, rgba(253, 126, 53, 0.15), transparent 70%)'
        }}
      />
      
      {/* 3. Secondary Ambient Glows */}
      <div 
        className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] transition-opacity duration-1000 ${
          variant === 'subtle' ? 'opacity-20' : 'opacity-100'
        }`}
      />
      
      <div 
        className={`absolute top-1/2 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-[100px] transition-opacity duration-1000 ${
          variant === 'subtle' ? 'opacity-20' : 'opacity-60'
        }`}
      />
    </div>
  )
})
