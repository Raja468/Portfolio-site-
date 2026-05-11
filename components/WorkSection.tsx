'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const projects = [
  { id: 1, title: 'NextGen', category: 'AI-Powered Analytics Platform', size: 'large', color: 'from-purple-glow to-blue-accent' },
  { id: 2, title: 'Finova', category: 'Banking Web Application', size: 'small', color: 'from-blue-600 to-cyan-500' },
  { id: 3, title: 'Snapify', category: 'Social Media Dashboard', size: 'small', color: 'from-purple-600 to-pink-500' },
]

export default function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
          <div>
            <span className="text-purple-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Work</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white italic">Featured Work</h2>
          </div>
          <a href="#work" className="group flex items-center gap-2 text-purple-light font-semibold hover:text-purple-primary transition-colors">
            View All Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[700px]">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group relative bg-surface border border-border rounded-3xl overflow-hidden hover:border-purple-primary/40 transition-all cursor-pointer"
          >
            <div className="p-10 relative z-10 flex flex-col h-full justify-between">
              <div>
                <p className="text-text-muted text-sm font-bold uppercase tracking-widest mb-2">{projects[0].category}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">{projects[0].title}</h3>
                <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple-primary/30 text-purple-light text-sm font-bold hover:bg-purple-primary hover:text-white transition-all group-hover:scale-105 active:scale-95">
                  View Case Study <ArrowUpRight size={18} />
                </button>
              </div>

              {/* Mockup Art */}
              <div className="mt-12 relative w-full h-[300px] bg-background/80 rounded-2xl border border-white/5 overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${projects[0].color} opacity-20`} />
                <div className="absolute top-8 left-8 w-[80%] h-48 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 flex flex-col gap-4 -rotate-1">
                  <div className="flex items-center justify-between">
                    <div className="w-24 h-3 bg-white/20 rounded-full" />
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                      <div className="w-3 h-3 rounded-full bg-green-400/50" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 h-24 bg-purple-primary/20 rounded-lg animate-pulse" />
                    <div className="w-1/3 h-24 bg-white/5 rounded-lg" />
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full" />
                </div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-accent/20 rounded-full blur-2xl animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {projects.slice(1).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex-1 group bg-surface border border-border rounded-3xl overflow-hidden hover:border-purple-primary/40 transition-all cursor-pointer p-8 flex flex-col justify-between"
              >
                <div>
                  <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white font-display mb-8">{project.title}</h3>
                </div>
                <div className="relative w-full h-40 bg-background/50 rounded-xl border border-white/5 overflow-hidden group-hover:-translate-y-1 transition-transform duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                  <div className="p-4 space-y-3">
                    <div className="w-full h-8 bg-white/5 rounded-md border border-white/10" />
                    <div className="flex gap-2">
                      <div className="w-1/2 h-16 bg-white/5 rounded-md" />
                      <div className="w-1/2 h-16 bg-white/5 rounded-md" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
