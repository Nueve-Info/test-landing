import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export function NavigationMenu() {
  const links = [
    { path: '/', label: 'Original' },
    { path: '/design-tool', label: 'Design Tool' },
    { path: '/dev-mode', label: 'Dev Mode' },
    { path: '/portfolio', label: 'Portfolio' },
  ]

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex gap-6 shadow-2xl"
    >
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors hover:text-white ${
              isActive ? 'text-white' : 'text-gray-400'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </motion.div>
  )
}
