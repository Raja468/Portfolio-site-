'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="section-padding bg-surface relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Featured Projects"
          title={
            <>
              Selected <span className="text-gradient">work</span> I've delivered
            </>
          }
          subtitle="A showcase of projects where I've made significant contributions as a full-stack developer."
        />

        {/* Bento Grid Layout */}
        <div className="space-y-6">
          {/* Row 1: Large + Small */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {featuredProjects.slice(0, 1).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 group relative bg-background border border-border rounded-3xl overflow-hidden card-hover"
              >
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="relative z-10 flex-1">
                    <span className="text-text-muted text-xs font-bold uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3 font-display">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-lg">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[11px] font-bold rounded-full bg-purple-primary/10 border border-purple-primary/20 text-purple-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-primary to-blue-accent text-white text-sm font-bold transition-all hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/10 text-text-secondary text-sm font-bold hover:text-white hover:border-white/20 transition-all"
                      >
                        <Github size={16} />
                        Source
                      </a>
                    </div>
                  </div>

                  {/* Preview graphic */}
                  <div className="mt-8 relative w-full h-48 bg-surface-light rounded-2xl border border-border overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[80%] h-[70%] bg-black/40 rounded-xl border border-white/5 backdrop-blur-sm p-4">
                        <div className="flex gap-1.5 mb-3">
                          <div className="w-2 h-2 rounded-full bg-red-400/40" />
                          <div className="w-2 h-2 rounded-full bg-yellow-400/40" />
                          <div className="w-2 h-2 rounded-full bg-green-400/40" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                          <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                          <div className="grid grid-cols-3 gap-2 pt-2">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="h-12 rounded-lg bg-white/[0.03] border border-white/5" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Right side - two smaller projects */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {featuredProjects.slice(1, 3).map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex-1 bg-background border border-border rounded-3xl overflow-hidden card-hover p-8 flex flex-col"
                >
                  <span className="text-text-muted text-xs font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-2 font-display">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-purple-primary/10 border border-purple-primary/20 text-purple-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3">
                    <a
                      href={project.liveUrl}
                      className="text-purple-light text-sm font-bold hover:text-purple-primary transition-colors inline-flex items-center gap-1"
                    >
                      Live Demo <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-text-muted text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <Github size={14} /> Code
                    </a>
                  </div>

                  {/* Mini preview */}
                  <div className="mt-4 h-24 rounded-xl bg-surface-light border border-border overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-10 flex items-center justify-center`}>
                      <div className="w-[70%] h-[60%] bg-black/30 rounded-lg border border-white/5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 2: Remaining projects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.slice(3).map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                className="group bg-background border border-border rounded-3xl overflow-hidden card-hover p-8"
              >
                <span className="text-text-muted text-xs font-bold uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2 font-display">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-purple-primary/10 border border-purple-primary/20 text-purple-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    className="text-purple-light text-sm font-bold hover:text-purple-primary transition-colors inline-flex items-center gap-1"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-text-muted text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}