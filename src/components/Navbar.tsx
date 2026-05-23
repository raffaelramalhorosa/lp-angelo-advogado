'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { WA_LINK } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'border-b border-[var(--border)]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <span className="font-heading text-xl font-bold text-[var(--primary)] tracking-wide">
            ÂNGELO MÁXIMO
          </span>
          <span className="block text-xs text-[var(--secondary)] tracking-[0.2em] uppercase">
            Advocacia
          </span>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-5 py-2.5 rounded text-sm font-medium transition-colors duration-200"
        >
          Falar com Dr. Ângelo
        </a>

        <button
          className="md:hidden text-[var(--primary)]"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[var(--border)] px-6 py-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[var(--primary)] text-white px-5 py-3 rounded text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Falar com Dr. Ângelo
          </a>
        </div>
      )}
    </header>
  )
}
