'use client'

import { motion } from 'framer-motion'

const technologies = [
  'React', 'Next.js', 'Node.js', 'MongoDB', 'Python', 'Flask',
  'Tailwind', 'Git', 'AI Automation', 'WordPress',
]

const scrollItems = [...technologies, ...technologies, ...technologies, ...technologies, ...technologies, ...technologies]

export default function StatsBar() {
  return (
    <section className="bg-surface border-y border-border py-10 relative z-10 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-16 md:gap-32 items-center"
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {scrollItems.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-6 md:gap-10">
              <span className="text-xl md:text-3xl font-bold font-display text-white/30 hover:text-purple-primary transition-colors cursor-default uppercase tracking-widest">
                {tech}
              </span>
              <div className="w-2 h-2 bg-purple-primary/40 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Side Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
    </section>
  )
}
