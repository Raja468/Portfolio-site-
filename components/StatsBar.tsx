'use client'

import { motion } from 'framer-motion'

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS',
  'Framer Motion', 'PostgreSQL', 'Docker', 'Git', 'Figma',
  'REST APIs', 'CI/CD', 'Python', 'Prisma', 'Stripe',
]

const scrollItems = [...technologies, ...technologies, ...technologies, ...technologies]

export default function StatsBar() {
  return (
    <section className="bg-surface border-y border-border py-8 relative z-10 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-12 md:gap-20 items-center"
          animate={{ x: [0, -2500] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          {scrollItems.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-6 md:gap-10">
              <span className="text-lg md:text-2xl font-bold font-display text-white/20 hover:text-purple-primary/60 transition-colors cursor-default uppercase tracking-widest select-none">
                {tech}
              </span>
              <div className="w-1.5 h-1.5 bg-purple-primary/30 rounded-full shrink-0" />
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