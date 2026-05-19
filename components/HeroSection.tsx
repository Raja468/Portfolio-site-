'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter, Code2, Terminal, Brain, Database, Globe, Cpu, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 5,
}))

const techFloaters = [
  { icon: Code2, label: 'React', x: 5, y: 20, delay: 0, duration: 7, size: 44 },
  { icon: Terminal, label: 'Python', x: 92, y: 15, delay: 1.5, duration: 8, size: 44 },
  { icon: Brain, label: 'AI', x: 8, y: 65, delay: 0.8, duration: 6.5, size: 48 },
  { icon: Database, label: 'SQL', x: 90, y: 55, delay: 2.2, duration: 7.5, size: 40 },
  { icon: Globe, label: 'Next.js', x: 3, y: 42, delay: 0.3, duration: 9, size: 38 },
  { icon: Cpu, label: 'Node', x: 95, y: 75, delay: 1, duration: 6, size: 42 },
  { icon: Sparkles, label: 'AI', x: 85, y: 35, delay: 3, duration: 8.5, size: 36 },
  { icon: Code2, label: 'TS', x: 12, y: 80, delay: 2, duration: 7, size: 40 },
]

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* ─── Background ──────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow orbs */}
        <div className="glow-orb w-[500px] h-[500px] bg-purple-primary/15 top-[-10%] left-[-5%] animate-pulse-slow" />
        <div
          className="glow-orb w-[600px] h-[600px] bg-blue-accent/10 bottom-[10%] right-[-5%] animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="glow-orb w-[300px] h-[300px] bg-purple-glow/10 top-[40%] left-[50%] -translate-x-1/2 animate-float"
          style={{ animationDelay: '3s' }}
        />

        {/* Floating particles */}
        {floatingParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-purple-primary/30 blur-[1px]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* ─── Floating Tech Badges (Left & Right Sides) ─────── */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {techFloaters.map((tech) => (
          <motion.div
            key={tech.label + tech.x}
            className="absolute hidden lg:flex items-center gap-2.5 px-4 py-2.5 rounded-xl backdrop-blur-md border border-white/[0.06] bg-white/[0.03]"
            style={{
              left: `${tech.x}%`,
              top: `${tech.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, tech.x < 50 ? 8 : -8, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: tech.duration,
              repeat: Infinity,
              delay: tech.delay,
              ease: 'easeInOut',
            }}
          >
            <tech.icon size={18} className="text-purple-light" />
            <span className="text-xs font-bold text-white/70 tracking-wider">{tech.label}</span>
          </motion.div>
        ))}
      </div>

      {/* ─── Content ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-[0.15em]">
            Available for Projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-primary via-purple-light to-blue-accent bg-[length:200%_200%] animate-gradient-shift">
              Ahmed Bilal
            </span>
            <br />
            <span className="text-white/80 text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-3">
              Full Stack Developer & AI Automation Engineer
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Full Stack Developer and AI Automation Engineer with hands-on experience building
          production websites and developing AI-powered systems. Focused on quality delivery
          and meeting deadlines.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="primary" size="lg" onClick={scrollToProjects}>
            See My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="#contact"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Twitter, href: '#', label: 'Twitter' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-text-muted hover:text-white hover:bg-white/[0.06] hover:border-white/10 transition-all"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* ─── Scroll Indicator ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-text-muted cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}