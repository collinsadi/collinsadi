import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const linkClass =
  'underline underline-offset-2 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-black dark:focus-visible:ring-white'

export function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'linear' }}
      className="space-y-4"
    >
      <h1 className="font-sans font-bold text-lg uppercase tracking-tight">
        404
      </h1>
      <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
        Command not found.
      </p>
      <Link to="/" className={`text-sm font-mono ${linkClass}`}>
        ← Home
      </Link>
    </motion.div>
  )
}
