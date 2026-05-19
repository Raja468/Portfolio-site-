import type { Variants, Transition } from 'framer-motion'

// ─── Easing Presets ───────────────────────────────────────
export const easeOutExpo: Readonly<[number, number, number, number]> = [0.16, 1, 0.3, 1]
export const easeInOutExpo: Readonly<[number, number, number, number]> = [0.87, 0, 0.13, 1]
export const easeSpring: Readonly<[number, number, number, number]> = [0.34, 1.56, 0.64, 1]

// ─── Transitions ───────────────────────────────────────────
export const smoothTransition: Transition = {
  duration: 0.7,
  ease: easeOutExpo,
}

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
}

// ─── Fade Up ───────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
}

// ─── Fade In ────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: smoothTransition,
  },
}

// ─── Scale In ───────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition,
  },
}

// ─── Slide In From Left ─────────────────────────────────────
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
}

// ─── Slide In From Right ────────────────────────────────────
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
}

// ─── Stagger Container ──────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
      ease: easeOutExpo,
    },
  },
}

// ─── Stagger Item (for use inside staggerContainer) ─────────
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
}

// ─── Card Hover ─────────────────────────────────────────────
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4, transition: springTransition },
  tap: { scale: 0.98 },
}

// ─── Section Header ─────────────────────────────────────────
export const sectionHeader: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
}