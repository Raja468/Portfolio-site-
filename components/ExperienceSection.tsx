'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { Briefcase } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Experience"
          title={
            <>
              My professional <span className="text-gradient">journey</span>
            </>
          }
          subtitle="Over 2 years of experience building production applications and AI systems."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-primary via-purple-primary/50 to-transparent" />

            {/* Work experience */}
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                className="relative pl-0 md:pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-[26px] top-1 w-[18px] h-[18px] rounded-full bg-background border-2 border-purple-primary z-10 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-primary" />
                </div>

                <div className="group p-6 md:p-8 rounded-2xl bg-surface border border-border hover:border-purple-primary/30 transition-all card-hover ml-0 md:ml-4">
                  {/* Mobile timeline dot */}
                  <div className="flex md:hidden items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-purple-primary shrink-0" />
                    <span className="text-purple-light text-xs font-bold uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} className="text-purple-light shrink-0" />
                        <h3 className="text-xl font-bold text-white font-display">{exp.role}</h3>
                      </div>
                      <p className="text-purple-light font-medium text-sm">{exp.company}</p>
                    </div>
                    <span className="hidden md:inline-flex text-text-muted text-sm font-medium shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-text-secondary text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-primary/60 mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}