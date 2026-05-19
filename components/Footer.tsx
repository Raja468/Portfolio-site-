import { Github, Linkedin, Mail, Heart, Globe } from 'lucide-react'
import Link from 'next/link'
import { personal } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-primary to-blue-accent rounded-lg blur-[2px] opacity-80" />
                <div className="relative w-full h-full bg-background rounded-lg flex items-center justify-center border border-white/10">
                  <span className="text-sm font-bold text-white font-display">DD</span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-white font-display uppercase">
                  Drexa
                </span>
                <span className="text-[10px] text-purple-light font-medium uppercase tracking-[0.2em] leading-normal">
                  Digital
                </span>
              </div>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-[280px]">
              Full Stack Developer and AI Automation Engineer building production-grade web applications and intelligent systems.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: personal.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Globe, href: personal.portfolio, label: 'Portfolio' },
                { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-text-muted hover:border-purple-primary hover:text-purple-primary hover:bg-purple-primary/5 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-display">Navigation</h4>
            <ul className="space-y-3.5">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-text-muted text-sm hover:text-purple-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-display">Expertise</h4>
            <ul className="space-y-3.5">
              {['React.js / Next.js', 'Python / AI', 'TypeScript', 'WordPress', 'AI Automation'].map(
                (skill) => (
                  <li key={skill}>
                    <span className="text-text-muted text-sm">{skill}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-display">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="text-text-muted text-sm">
                <span className="block text-white font-semibold mb-1">Email</span>
                <a href={`mailto:${personal.email}`} className="hover:text-purple-primary transition-colors">
                  {personal.email}
                </a>
              </li>
              <li className="text-text-muted text-sm">
                <span className="block text-white font-semibold mb-1">Phone</span>
                <a href={`tel:${personal.phone}`} className="hover:text-purple-primary transition-colors">
                  {personal.phone}
                </a>
              </li>
              <li className="text-text-muted text-sm">
                <span className="block text-white font-semibold mb-1">Location</span>
                <span>{personal.location}</span>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-primary to-blue-accent text-white text-sm font-bold hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all"
                >
                  Start a Project
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs flex items-center gap-1.5">
            © {year} {personal.name}. Made with
            <Heart size={12} className="text-red-400 fill-red-400" />
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}