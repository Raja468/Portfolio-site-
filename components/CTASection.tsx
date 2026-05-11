'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] bg-surface overflow-hidden border border-border"
        >
          {/* Decor */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="bg-orb w-[400px] h-[400px] bg-purple-glow/20 left-[-10%] top-[-10%]" />
            <div className="absolute top-1/2 right-[10%] -translate-y-1/2 hidden lg:block">
              <div className="relative w-64 h-64">
                <motion.div
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-full rounded-full bg-gradient-to-br from-purple-primary via-purple-glow to-blue-accent shadow-[0_0_80px_rgba(124,58,237,0.3)] opacity-80"
                />
                <div className="absolute inset-0 border-[0.5px] border-white/20 rounded-full scale-110 rotate-[25deg]" />
                <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-full scale-125 -rotate-[15deg]" />
              </div>
            </div>
          </div>

          <div className="relative z-10 px-6 py-16 md:p-12 lg:p-20 flex flex-col items-center lg:items-start text-center lg:text-left lg:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6 leading-tight">
              Ready to Build Something Amazing Together?
            </h2>
            <p className="text-text-secondary text-base md:text-lg mb-8 md:mb-10 max-w-lg">
              Let's turn your ideas into powerful digital experiences that stand out and deliver results.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
              <button className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-lg text-white gradient-hero hover:scale-105 active:scale-95 transition-all shadow-[0_10px_40px_rgba(124,58,237,0.4)]">
                Start Your Project ↗
              </button>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-text-muted text-sm uppercase tracking-widest font-bold">or email us</span>
                <a href="mailto:hello@drexa.digital" className="text-purple-light font-bold text-lg hover:text-white transition-colors underline underline-offset-8 decoration-purple-primary/30">
                  hello@drexa.digital
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
