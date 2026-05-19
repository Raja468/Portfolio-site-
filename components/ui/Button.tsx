'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  href?: string
  className?: string
}

const variants = {
  primary:
    'bg-gradient-to-r from-purple-primary to-blue-accent text-white shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]',
  secondary:
    'bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10',
  outline:
    'border border-purple-primary/30 text-purple-light hover:bg-purple-primary/10',
  ghost:
    'text-text-secondary hover:text-white hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    className: baseClasses,
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {children}
        {icon || <ArrowUpRight size={18} />}
      </motion.a>
    )
  }

  return (
    <motion.button {...motionProps} {...(props as any)}>
      {children}
      {icon || (variant === 'primary' && <ArrowUpRight size={18} />)}
    </motion.button>
  )
}