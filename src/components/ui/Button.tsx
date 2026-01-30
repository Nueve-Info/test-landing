import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type BaseProps = {
  children: React.ReactNode
  variant?: 'primary' | 'cta' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined
  }

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...rest
  } = props

  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center text-center'

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

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor
    return (
      <a
        href={href}
        className={classes}
        {...anchorRest}
      >
        {children}
      </a>
    )
  }

  const buttonRest = rest as Omit<ButtonAsButton, keyof BaseProps>
  return (
    <button
      className={classes}
      {...buttonRest}
    >
      {children}
    </button>
  )
}
