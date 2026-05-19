'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Zap, Sparkles, ExternalLink } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { staggerContainer, staggerItem } from '@/lib/animations'

const clientSites = [
  { name: 'ccci.com.pk', url: '#' },
  { name: 'perfumebays.com', url: '#' },
  { name: 'hyundaichakwal.com', url: '#' },
]

const features = [
  { icon: Code2, label: 'Clean Code', desc: 'Maintainable & scalable architecture' },
  { icon: Palette, label: 'Pixel Perfect', desc: 'Design-driven development' },
  { icon: Zap, label: 'Performance', desc: 'Optimized for speed & UX' },
  { icon: Sparkles, label: 'Innovation', desc: 'Cutting-edge tech stack' },
]

const workflowSteps = [
  { step: '01', title: 'Discovery', desc: 'Understanding your vision, goals, and user needs' },
  { step: '02', title: 'Design', desc: 'Crafting intuitive interfaces with pixel-perfect precision' },
  { step: '03', title: 'Build', desc: 'Developing with clean architecture and modern stacks' },
  { step: '04', title: 'Launch', desc: 'Deploying, monitoring, and iterating for excellence' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-surface relative overflow-hidden">
      {/* ─── Large radial glow behind grid ───────────────────── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-glow/8 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="About Me"
          title={
            <>
              Transforming ideas into <span className="text-gradient">digital reality</span>
            </>
          }
          subtitle="Full-stack developer and AI automation engineer with 2+ years of experience building production web applications and intelligent systems."
        />

        {/* ─── Bento Grid Layout ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 auto-rows-auto">
          {/* ─── Left Column (Bio + Client Badges) — Span 7 ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="lg:col-span-7 row-span-1 flex flex-col gap-5"
          >
            {/* Bio card */}
            <motion.div
              variants={staggerItem}
              className="relative p-8 md:p-10 rounded-3xl overflow-hidden backdrop-blur-[12px]"
              style={{
                background: 'rgba(15, 15, 25, 0.7)',
                border: '1px solid',
                borderImage: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(124,58,237,0.25)) 1',
              }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-primary/8 blur-[80px] rounded-full" />
              <p className="text-text-secondary text-lg leading-relaxed relative z-10">
                Full Stack Developer and AI Automation Engineer with hands-on experience
                building live client websites and developing{' '}
                <span className="text-purple-light font-semibold">Drex AI Assistant</span> — a
                Jarvis-inspired AI system using Python and OpenAI API currently running in
                production. Skilled in React.js, Next.js, Python, and AI integrations.
                Focused on quality delivery and meeting deadlines.
              </p>
            </motion.div>

            {/* Client site pill badges */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-3 px-2"
            >
              <span className="text-text-muted text-xs font-bold uppercase tracking-wider shrink-0">
                Live Sites
              </span>
              <div className="w-px h-4 bg-border" />
              {clientSites.map((site) => (
                <a
                  key={site.name}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-purple-light/80 bg-purple-primary/5 border border-purple-primary/20 hover:bg-purple-primary/10 hover:border-purple-primary/40 hover:text-purple-light hover:-translate-y-0.5 transition-all duration-300"
                >
                  {site.name}
                  <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── Right Column (Features 2x2) — Span 5 ────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="lg:col-span-5 grid grid-cols-2 gap-5"
          >
            {features.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="group relative p-6 rounded-2xl overflow-hidden cursor-default transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: 'rgba(15, 15, 25, 0.7)',
                  border: '1px solid',
                  borderImage: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(124,58,237,0.15)) 1',
                }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-primary/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-purple-primary/10 border border-purple-primary/20 flex items-center justify-center text-purple-light mb-3 group-hover:bg-purple-primary/20 group-hover:border-purple-primary/40 transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1 group-hover:text-purple-light transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-text-muted text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ─── Full Width: How I Work Timeline — Span 12 ──── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="lg:col-span-12"
          >
            <motion.div
              variants={staggerItem}
              className="relative p-8 md:p-10 rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(15, 15, 25, 0.7)',
                border: '1px solid',
                borderImage: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(124,58,237,0.2)) 1',
              }}
            >
              {/* Subtle background glow */}
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-accent/5 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-display text-white mb-10">
                  How I <span className="text-gradient">work</span>
                </h3>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Glowing vertical tracking line (visible on mobile as horizontal) */}
                  <div className="hidden md:block absolute top-3 left-0 right-0 h-px bg-gradient-to-r from-purple-primary/50 via-purple-primary/30 to-transparent" />
                  <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-purple-primary/50 via-purple-primary/30 to-transparent" />

                  {workflowSteps.map((item, idx) => (
                    <div
                      key={item.step}
                      className="group relative flex md:flex-col items-start md:items-center gap-4 md:gap-3 pl-10 md:pl-0 cursor-default transition-all duration-300"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-[6px] md:static top-1 w-[14px] h-[14px] rounded-full bg-background border-2 border-purple-primary/50 z-10 flex items-center justify-center group-hover:border-purple-primary group-hover:shadow-[0_0_12px_rgba(124,58,237,0.4)] transition-all duration-300">
                        <div className="w-[6px] h-[6px] rounded-full bg-purple-primary/60 group-hover:bg-purple-primary transition-colors" />
                      </div>

                      <div className="flex-1 md:text-center transition-all duration-300 group-hover:opacity-100 opacity-60 group-hover:[&:not(:hover)]:opacity-60">
                        <span className="text-purple-light text-xs font-bold font-mono tracking-wider block mb-1 group-hover:text-purple-primary transition-colors">
                          {item.step}
                        </span>
                        <h4 className="text-white font-bold text-sm md:text-base mb-1 group-hover:text-purple-light transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}