'use client'

import { motion } from 'framer-motion'
import { Code, Layout, Brain, Cloud, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  title: string
  icon: LucideIcon
  description: string
}

const services: Service[] = [
  {
    title: 'Web Development',
    icon: Code,
    description: 'High-performance websites and web applications built with modern technologies.',
  },
  {
    title: 'UI/UX Design',
    icon: Layout,
    description: 'Beautiful, intuitive and user-centered designs that create lasting impressions.',
  },
  {
    title: 'AI Integration',
    icon: Brain,
    description: 'Smart AI solutions that automate processes and unlock new possibilities.',
  },
  {
    title: 'SaaS Development',
    icon: Cloud,
    description: 'Scalable, secure and reliable SaaS products tailored to your needs.',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-purple-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
              Services That Drive Results
            </h2>
          </div>
          <a href="#services" className="group flex items-center gap-2 text-purple-light font-semibold hover:text-purple-primary transition-colors">
            Explore All Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group p-8 rounded-3xl bg-surface border border-border hover:border-purple-primary/40 transition-all hover:shadow-[0_0_50px_rgba(124,58,237,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-16 h-16 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-primary to-blue-accent rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-surface-light border border-white/10 rounded-2xl flex items-center justify-center text-purple-primary shadow-xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500">
                  <service.icon size={32} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 font-display">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-8 font-medium">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-purple-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 cursor-pointer">
                Learn More <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
