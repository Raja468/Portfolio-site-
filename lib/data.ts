import {
  Code2,
  Palette,
  Server,
  Database,
  GitBranch,
  Terminal,
  Figma,
  Globe,
  type LucideIcon,
} from 'lucide-react'

// ─── Personal Info ──────────────────────────────────────────
export const personal = {
  name: 'Ahmed Bilal',
  title: 'Full Stack Developer | AI Automation Engineer | Software Engineer',
  tagline: 'Full Stack Developer and AI Automation Engineer building production-grade web applications and intelligent systems.',
  email: 'ahmed584131@gmail.com',
  phone: '+92 336 9165630',
  location: 'Chakwal, Pakistan',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/in/',
  twitter: '#',
  portfolio: '#',
}

// ─── Navigation ─────────────────────────────────────────────
export interface NavLink {
  name: string
  href: string
}

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

// ─── Skills ─────────────────────────────────────────────────
export interface Skill {
  name: string
  icon: LucideIcon
  items: string[]
}

export const skills: Skill[] = [
  {
    name: 'Languages',
    icon: Code2,
    items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'HTML5', 'CSS3'],
  },
  {
    name: 'Frontend',
    icon: Palette,
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    name: 'Backend & AI',
    icon: Server,
    items: ['Node.js', 'Flask', 'REST APIs', 'OpenAI API', 'AI/LLM Integration'],
  },
  {
    name: 'Tools & Database',
    icon: Terminal,
    items: ['Git & GitHub', 'SQL / SQLite', 'Vercel', 'Automation Scripts'],
  },
]

// ─── Projects ───────────────────────────────────────────────
export interface Project {
  id: number
  title: string
  description: string
  category: string
  tags: string[]
  image: string
  gradient: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Drex AI Assistant',
    description: 'Jarvis-inspired Personal AI Voice Assistant currently running in production. Built with Python and OpenAI API for intelligent conversation, task automation, and workflow orchestration.',
    category: 'AI Application',
    tags: ['Python', 'OpenAI', 'AI Automation', 'LLM'],
    image: '/projects/drex-ai.jpg',
    gradient: 'from-violet-600 to-purple-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'School Management System',
    description: 'A responsive web application built with React.js to manage student records, attendance, and academic operations efficiently with real-time data handling.',
    category: 'Web Application',
    tags: ['React.js', 'JavaScript', 'SQL'],
    image: '/projects/school.jpg',
    gradient: 'from-emerald-500 to-cyan-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Password Manager',
    description: 'A secure desktop application using Python and SQLite with encryption-based password storage, user authentication, and industry-standard security libraries.',
    category: 'Desktop Application',
    tags: ['Python', 'SQLite', 'Encryption', 'Security'],
    image: '/projects/password.jpg',
    gradient: 'from-rose-500 to-pink-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Client Websites',
    description: 'Developed and currently maintaining three production WordPress websites for active clients: ccci.com.pk, perfumebays.com, and hyundaichakwal.com.',
    category: 'Web Development',
    tags: ['WordPress', 'PHP', 'Responsive Design', 'Client Management'],
    image: '/projects/clients.jpg',
    gradient: 'from-amber-500 to-orange-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React.js, Next.js, and Tailwind CSS. Deployed on Vercel with clean UI/UX and optimized performance.',
    category: 'Frontend',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Vercel'],
    image: '/projects/portfolio.jpg',
    gradient: 'from-sky-500 to-indigo-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
]

// ─── Experience ─────────────────────────────────────────────
export interface Experience {
  id: number
  role: string
  company: string
  companyUrl?: string
  period: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Web Developer',
    company: 'Zitsol — Chakwal, Pakistan',
    period: 'Feb 2025 – Present',
    description: 'Building and maintaining production websites for active clients, managing the full project lifecycle.',
    highlights: [
      'Built and currently maintain three production WordPress websites (ccci.com.pk, perfumebays.com, hyundaichakwal.com)',
      'Managed full project lifecycle from requirements gathering to deployment and maintenance',
      'Delivered high-quality, responsive websites with consistent on-time completion',
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer & AI Automation Engineer',
    company: 'Self-Employed',
    period: 'Nov 2024 – Present',
    description: 'Developing production-grade AI systems, web applications, and secure tools for diverse use cases.',
    highlights: [
      'Built Drex AI Assistant — a scalable AI assistant using Python and OpenAI API for intelligent conversation and task automation',
      'Implemented automation scripts for productivity tasks and custom commands with modular architecture',
      'Developed School Management System — responsive React.js web app for student records, attendance, and multi-role access',
      'Built secure Password Manager desktop app with Python, SQLite, and encryption-based storage',
      'Designed and deployed modern portfolio using React.js and Tailwind CSS on Vercel',
    ],
  },
]

// ─── Education ──────────────────────────────────────────────
export interface Education {
  id: number
  degree: string
  institution: string
  period: string
}

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Computer Science',
    institution: 'Virtual University of Pakistan, Chakwal',
    period: 'Jan 2024 – Present',
  },
]

// ─── Testimonials ───────────────────────────────────────────
export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Client Feedback',
    role: 'Client',
    company: 'Perfume Bays',
    avatar: 'PB',
    quote: 'Ahmed delivered a professional, responsive website that perfectly captured our brand. His attention to detail and timely communication made the entire process smooth.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Client Feedback',
    role: 'Client',
    company: 'Hyundai Chakwal',
    avatar: 'HC',
    quote: 'Working with Ahmed was a great experience. He understood our requirements quickly and delivered a website that exceeded our expectations.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Client Feedback',
    role: 'Client',
    company: 'CCCI',
    avatar: 'CC',
    quote: 'Professional, reliable, and technically skilled. Ahmed built a website that perfectly serves our business needs.',
    rating: 5,
  },
]

// ─── Stats ──────────────────────────────────────────────────
export const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Delivered', value: '5+' },
  { label: 'Happy Clients', value: '3+' },
  { label: 'Technologies', value: '10+' },
]