'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/', isHash: false },
  { name: 'Services', href: '#services', isHash: true },
  { name: 'Work', href: '#work', isHash: true },
  { name: 'About', href: '#about', isHash: true },
  { name: 'Contact', href: '#contact', isHash: true },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean) => {
    if (isHash) {
      e.preventDefault()
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setMobileMenuOpen(false)
      }
    } else {
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg py-4 shadow-lg'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-purple-primary rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all">
            <Zap className="text-white fill-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white uppercase leading-[0.8] font-display">Drexa</span>
            <span className="text-[10px] text-purple-light font-medium uppercase tracking-[0.2em] leading-normal pt-1">Digital</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleHashClick(e, link.href, link.isHash)}
              className="relative text-sm font-medium text-text-secondary hover:text-purple-primary transition-colors py-2 group cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="relative group p-[1px] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-primary to-blue-accent" />
            <div className="relative px-6 py-2.5 rounded-full bg-background transition-all group-hover:bg-transparent">
              <span className="relative text-sm font-semibold text-white">Let's Talk ↗</span>
            </div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-text-secondary hover:text-purple-primary transition-colors"
                  onClick={(e) => handleHashClick(e, link.href, link.isHash)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full mt-4 py-4 rounded-xl gradient-hero text-white font-bold">
                Let's Talk ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
