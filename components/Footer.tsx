import { Zap, Twitter, Linkedin, Instagram, Dribbble } from 'lucide-react'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'

interface FooterLink { name: string; href: string }
interface Social { icon: LucideIcon; href: string }

const footerLinks: Record<string, FooterLink[]> = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
  ],
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'AI Integration', href: '#services' },
    { name: 'SaaS Development', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
  ],
}

const socials: Social[] = [
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Dribbble, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-purple-primary rounded-lg flex items-center justify-center">
                <Zap className="text-white fill-white" size={24} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-white uppercase font-display">Drexa</span>
                <span className="text-[10px] text-purple-light font-medium uppercase tracking-[0.2em]">Digital</span>
              </div>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-[280px]">
              We build digital experiences that drive growth and create lasting impact for brands that dare to lead.
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:border-purple-primary hover:text-purple-primary transition-all">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-display">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-text-muted text-sm hover:text-purple-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-display">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-text-muted text-sm hover:text-purple-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-display">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="text-text-muted text-sm">
                <span className="block text-white font-semibold mb-1">Email</span>
                <a href="mailto:hello@drexa.digital" className="hover:text-purple-primary transition-colors">hello@drexa.digital</a>
              </li>
              <li className="text-text-muted text-sm">
                <span className="block text-white font-semibold mb-1">Phone</span>
                <a href="tel:+1234567890" className="hover:text-purple-primary transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="text-text-muted text-sm">
                <span className="block text-white font-semibold mb-1">Location</span>
                <span>Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">© 2026 Drexa Digital. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-text-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
