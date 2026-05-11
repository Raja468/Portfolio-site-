'use client'

import { motion } from 'framer-motion'

const steps = [
  { number: '01', title: 'Discovery', description: 'We understand your goals, audience and challenges to define the right plan.' },
  { number: '02', title: 'Design', description: 'We craft wireframes and designs that are intuitive, modern and on-brand.' },
  { number: '03', title: 'Development', description: 'We build clean, optimized and scalable solutions with precision.' },
  { number: '04', title: 'Launch', description: 'We test, deploy and support to ensure your success.' },
]

export default function ProcessSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-purple-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white">How We Work</h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-border z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-purple-primary to-blue-accent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-primary to-blue-accent rounded-full flex items-center justify-center text-white font-black text-lg shadow-[0_0_20px_rgba(124,58,237,0.3)] mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-[240px]">{step.description}</p>
                {idx < steps.length - 1 && (
                  <div className="lg:hidden w-[1px] h-12 bg-border my-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
