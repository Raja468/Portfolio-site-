'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin, Globe } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { personal } from '@/lib/data'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000))
    setIsSubmitting(false)
    setFormState({ name: '', email: '', message: '' })
    alert('Thanks for reaching out! I\'ll get back to you soon.')
  }

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="glow-orb w-[600px] h-[600px] bg-purple-primary/10 top-[-20%] right-[-10%] animate-pulse-slow" />
        <div className="glow-orb w-[400px] h-[400px] bg-blue-accent/10 bottom-[-10%] left-[-5%] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 grid-background opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Contact"
          title={
            <>
              Let's <span className="text-gradient">work together</span>
            </>
          }
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
          align="center"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <motion.div variants={staggerItem} className="p-6 rounded-2xl bg-surface border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-primary/10 flex items-center justify-center text-purple-light">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-text-muted text-xs font-medium uppercase tracking-wider">Email</p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-white font-medium text-sm hover:text-purple-light transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="p-6 rounded-2xl bg-surface border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-primary/10 flex items-center justify-center text-purple-light">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-text-muted text-xs font-medium uppercase tracking-wider">Location</p>
                  <p className="text-white font-medium text-sm">{personal.location}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="p-6 rounded-2xl bg-gradient-to-br from-purple-primary/10 to-blue-accent/5 border border-purple-primary/20">
              <p className="text-white font-bold text-sm mb-3 font-display">Follow Me</p>
              <div className="flex gap-3">
                  {[
                    { icon: Github, href: personal.github, label: 'GitHub' },
                    { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                    { icon: Globe, href: personal.portfolio, label: 'Portfolio' },
                  ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-purple-primary/20 hover:border-purple-primary/30 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-surface border border-border">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-white placeholder:text-text-muted/50 focus:border-purple-primary/50 focus:outline-none focus:ring-1 focus:ring-purple-primary/30 transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-white placeholder:text-text-muted/50 focus:border-purple-primary/50 focus:outline-none focus:ring-1 focus:ring-purple-primary/30 transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-white placeholder:text-text-muted/50 focus:border-purple-primary/50 focus:outline-none focus:ring-1 focus:ring-purple-primary/30 transition-all text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send size={16} />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}