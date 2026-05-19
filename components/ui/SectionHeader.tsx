'use client'

import { motion } from 'framer-motion'
import { sectionHeader } from '@/lib/animations'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  label: string
  title: ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={sectionHeader}
      className={`flex flex-col ${alignClasses} gap-4 mb-16 ${className}`}
    >
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-primary/10 border border-purple-primary/20 text-purple-light text-xs font-bold uppercase tracking-[0.2em]">
        <span className="w-1.5 h-1.5 bg-purple-primary rounded-full" />
        {label}
      </span>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-[1.1] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}