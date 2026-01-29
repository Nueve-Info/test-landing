interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'cta' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center'

  const variants = {
    primary: 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white hover:scale-105',
    cta: 'bg-[var(--color-cta)] hover:bg-[var(--color-cta-hover)] text-white glow-cta hover:scale-105',
    outline: 'border-2 border-[var(--color-primary)] text-[var(--color-primary-light)] hover:bg-[var(--color-primary)] hover:text-white'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
