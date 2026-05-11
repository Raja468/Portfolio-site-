'use client'

import { motion } from 'framer-motion'
import { Code, BarChart3, Cpu, MousePointer2, Smartphone } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-32 px-6 noise-overlay"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="bg-orb w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-primary/20 top-[-10%] left-[-5%] animate-pulse-slow" />
        <div className="bg-orb w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-blue-accent/15 bottom-[10%] right-[-5%] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-1"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-primary/10 border border-purple-primary/30 mb-6 lg:mb-8"
          >
            <span className="w-2 h-2 bg-purple-primary rounded-full animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold text-purple-light uppercase tracking-[0.2em]">
              Next-Gen Digital Agency
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-[1.1] text-white mb-6"
          >
            We Build Modern <br />
            Digital <span className="text-gradient">Experiences</span> <br />
            That Feel Alive
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-text-secondary max-w-lg mb-8 md:mb-10 leading-relaxed font-medium"
          >
            We combine creativity, technology and strategy to help brands grow, engage and stand out in the digital world.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white gradient-hero transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              Start a Project ↗
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white border border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
              View Our Work
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column — Holographic UI */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="hidden lg:flex relative h-[600px] items-center justify-center order-2"
        >
          {/* Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-primary/10 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-accent/10 blur-[80px] rounded-full" />

          <div className="relative w-full h-full flex items-center justify-center perspective-1500">
            {/* Main Window Card */}
            <motion.div
              animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2], y: [-10, 10, -10] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-20 w-[400px] h-[300px] bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 glass-panel overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/20" />
                </div>
                <div className="flex-1 h-3 bg-white/5 rounded-full mx-2" />
                <MousePointer2 size={14} className="text-purple-primary animate-pulse" />
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-primary/20 to-blue-accent/20 flex items-center justify-center text-purple-light">
                    <Cpu size={24} />
                  </div>
                  <div className="flex-1 space-y-2 pt-1">
                    <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-16 rounded-lg border border-white/5 bg-white/[0.02]" />
                  ))}
                </div>
              </div>
              {/* Scanline */}
              <div className="absolute inset-x-0 h-[100%] top-[-100%] bg-gradient-to-b from-transparent via-purple-primary/10 to-transparent animate-scanline pointer-events-none" />
            </motion.div>

            {/* AI Analytics Float */}
            <motion.div
              animate={{ y: [20, -20, 20], x: [10, -10, 10], rotateZ: [2, -2, 2] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute z-30 top-1/4 right-[10%] w-48 bg-surface/80 backdrop-blur-md border border-purple-primary/30 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-purple-primary/20 rounded-md text-purple-light">
                  <BarChart3 size={16} />
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">AI Impact</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">+94%</span>
                <span className="text-[8px] text-green-400 font-bold">GROWTH</span>
              </div>
              <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: ['10%', '94%', '94%'] }}
                  transition={{ duration: 2, repeat: Infinity, times: [0, 0.4, 1] }}
                  className="h-full bg-purple-primary"
                />
              </div>
            </motion.div>

            {/* Code Snippet Float */}
            <motion.div
              animate={{ y: [0, 40, 0], x: [-10, 10, -10] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute z-10 bottom-1/4 left-[5%] w-56 bg-[#0a0a0f] border border-blue-accent/20 rounded-xl p-4 shadow-2xl -skew-x-3 opacity-90"
            >
              <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                <Code size={14} className="text-blue-accent" />
                <span className="text-[9px] font-mono text-text-muted">app.ts — 42kb</span>
              </div>
              <div className="space-y-1.5 font-mono text-[8px]">
                <div className="text-purple-400">const<span className="text-white"> drexa = </span><span className="text-green-400">new Agent</span>();</div>
                <div className="text-blue-400 pl-2">await<span className="text-white"> drexa.</span><span className="text-yellow-400">innovate</span>();</div>
                <div className="text-purple-400">export<span className="text-white"> default</span> drexa;</div>
              </div>
            </motion.div>

            {/* Mobile Float */}
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95], y: [-30, 30, -30] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute z-0 -top-10 left-1/3 w-28 h-56 bg-surface/40 backdrop-blur-sm border border-white/10 rounded-3xl p-3 opacity-60"
            >
              <div className="w-full h-full border border-white/5 rounded-[1.2rem] flex flex-col items-center pt-8">
                <Smartphone size={24} className="text-white/10" />
                <div className="mt-auto pb-4 flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                </div>
              </div>
            </motion.div>

            {/* Orbiting Ring */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <motion.circle
                cx="50%" cy="50%" r="200"
                fill="none" stroke="url(#nodeGradient)"
                strokeWidth="1" strokeDasharray="10 20"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              />
              <defs>
                <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
                  <stop offset="50%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Energy Dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                className="absolute w-1.5 h-1.5 bg-blue-light rounded-full blur-[1px] z-40"
                style={{ top: `${20 + i * 12}%`, left: `${15 + i * 15}%` }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
