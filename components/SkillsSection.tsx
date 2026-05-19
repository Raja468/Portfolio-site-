'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Skills & Technologies"
          title={
            <>
              Tech stack I <span className="text-gradient">work with</span>
            </>
          }
          subtitle="Modern tools and technologies I use to build performant, scalable applications."
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={staggerItem}
              className="group relative p-8 rounded-3xl bg-surface border border-border overflow-hidden card-hover"
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="relative w-14 h-14 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-primary to-blue-accent rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-surface-light border border-white/10 rounded-2xl flex items-center justify-center text-purple-light group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500">
                    <skill.icon size={28} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 font-display">{skill.name}</h3>

                <ul className="space-y-2.5">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-primary/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}