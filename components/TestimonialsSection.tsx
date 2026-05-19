'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-glow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Testimonials"
          title={
            <>
              What people <span className="text-gradient">say</span>
            </>
          }
          subtitle="Feedback from clients and colleagues I've had the pleasure of working with."
          align="center"
        />

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 rounded-3xl bg-background border border-border card-hover flex flex-col"
            >
              {/* Quote */}
              <div className="flex-1">
                <div className="text-6xl text-purple-primary/20 font-serif leading-none h-8 italic">
                  &ldquo;
                </div>
                <p className="text-text-secondary text-base leading-relaxed mb-8 italic">
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-primary to-blue-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-text-muted text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-purple-primary hover:text-white hover:border-purple-primary transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-purple-primary hover:text-white hover:border-purple-primary transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl bg-background border border-border"
            >
              <div className="text-6xl text-purple-primary/20 font-serif leading-none h-8 italic">
                &ldquo;
              </div>
              <p className="text-text-secondary text-base leading-relaxed mb-8 italic">
                {testimonials[index].quote}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-primary to-blue-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {testimonials[index].avatar}
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h4 className="text-white font-bold text-sm">{testimonials[index].name}</h4>
                  <p className="text-text-muted text-xs">
                    {testimonials[index].role}, {testimonials[index].company}
                  </p>
                </div>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index ? 'bg-purple-primary w-6' : 'bg-white/20'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}