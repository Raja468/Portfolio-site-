'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  { id: 1, name: 'Sarah Johnson', role: 'CEO', company: 'NextGen', initials: 'SJ', quote: 'Drexa transformed our idea into a powerful product. Their attention to detail and communication is amazing.' },
  { id: 2, name: 'Michael Brown', role: 'CTO', company: 'Finova', initials: 'MB', quote: 'Professional, creative and super responsive. The quality of work exceeded our expectations.' },
  { id: 3, name: 'David Lee', role: 'Founder', company: 'Snapify', initials: 'DL', quote: 'The team delivered on time and the result was beyond what we imagined. Highly recommended!' },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-glow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
          <div>
            <span className="text-purple-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white">What Our Clients Say</h2>
          </div>
          <div className="flex gap-3">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-purple-primary hover:text-white hover:border-purple-primary transition-all">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-purple-primary hover:text-white hover:border-purple-primary transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-background border border-border hover:border-purple-primary/30 transition-all"
            >
              <div className="text-6xl text-purple-primary/20 font-serif leading-none h-8 italic">"</div>
              <p className="text-text-secondary text-base leading-relaxed mb-10 italic">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-primary to-blue-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-text-muted text-xs">{t.role}, {t.company}</p>
                </div>
                <div className="ml-auto flex gap-0.5 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 rounded-3xl bg-background border border-border"
            >
              <div className="text-6xl text-purple-primary/20 font-serif leading-none h-8 italic">"</div>
              <p className="text-text-secondary text-base leading-relaxed mb-10 italic">{testimonials[index].quote}</p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-primary to-blue-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {testimonials[index].initials}
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-white font-bold text-sm">{testimonials[index].name}</h4>
                  <p className="text-text-muted text-xs">{testimonials[index].role}, {testimonials[index].company}</p>
                </div>
                <div className="sm:ml-auto flex gap-0.5 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
