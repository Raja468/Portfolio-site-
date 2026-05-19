'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'
import { navLinks } from '@/lib/data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleHashClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setMobileMenuOpen(false)
      }
    },
    []
  )

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo - Personal Brand */}
        <a
          href="#hero"
          onClick={(e) => handleHashClick(e, '#hero')}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-primary to-blue-accent rounded-lg blur-[2px] opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-full h-full bg-background rounded-lg flex items-center justify-center border border-white/10">
              <span className="text-sm font-bold text-white font-display">DD</span>
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-white font-display uppercase">
              Drexa
            </span>
            <span className="text-[10px] text-purple-light font-medium uppercase tracking-[0.2em] leading-normal">
              Digital
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const section = link.href.replace('#', '')
            const isActive = activeSection === section
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'text-white bg-white/5'
                    : 'text-text-secondary hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-purple-primary to-blue-accent rounded-full"
                  />
                )}
              </a>
            )
          })}
        </div>

        {/* Resume / CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-all"
          >
            <FileText size={16} />
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => handleHashClick(e, '#contact')}
            className="relative group p-[1px] rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-primary to-blue-accent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="relative px-5 py-2 rounded-full bg-background transition-all group-hover:bg-transparent">
              <span className="relative text-sm font-semibold text-white">Let's Talk</span>
            </div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-2 mx-6 rounded-2xl bg-surface border border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleHashClick(e, link.href)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <hr className="my-2 border-border" />
              <a
                href="/resume.pdf"
                className="px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <FileText size={18} />
                Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleHashClick(e, '#contact')}
                className="mt-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-primary to-blue-accent text-white font-bold text-center"
              >
                Let's Talk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}