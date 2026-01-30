import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-surface-light)] bg-[var(--color-surface)]">
      <Container className="py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="text-[var(--color-text-muted)]">© {year} DOKO Stanislaw Swiatkiewicz. All rights reserved.</div>
          <Link
            to="/privacy-policy"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  )
}

