import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './context/ThemeContext'
import { HomePage } from './pages/HomePage'
import { NotFound } from './pages/NotFound'

const navLinkClass =
  'font-sans font-bold text-xs uppercase tracking-widest underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-black dark:focus-visible:ring-white'

function App() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b border-black dark:border-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
          <Link to="/" className={`${navLinkClass} ${location.pathname === '/' ? 'underline' : ''}`}>
            Codellins
          </Link>
          <nav className="flex items-center gap-6">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 border border-black dark:border-white hover:bg-gray-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-black dark:focus-visible:ring-white"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" aria-hidden />
              ) : (
                <Moon className="h-4 w-4" aria-hidden />
              )}
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="border-t border-black dark:border-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-mono text-xs text-gray-600 dark:text-gray-400">
            Rust · Solidity · TypeScript · Node.js
          </p>
          <nav className="flex flex-wrap gap-4 text-xs">
            <a href="https://github.com/collinsadi" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80">
              GitHub
            </a>
            <a href="https://x.com/codellins" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80">
              Twitter
            </a>
            <a href="https://linkedin.com/in/collinsadi" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80">
              LinkedIn
            </a>
            <a href="https://cal.com/collinsadi/30min" className="underline underline-offset-2 hover:opacity-80">
              Holla
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
