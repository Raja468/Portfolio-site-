'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
  /** LERP ease factor: lower = smoother/more inertia. Recommended: 0.07–0.12 */
  ease?: number
  /** Disable the custom scroll on touch devices to preserve native mobile behavior */
  disableOnTouch?: boolean
}

/**
 * Premium kinetic smooth scroll wrapper.
 *
 * How it works:
 * 1. The real document keeps a native scroll height using a spacer.
 * 2. The visible content is fixed and translated with transform: translate3d().
 * 3. On each RAF tick, we LERP current position toward window.scrollY.
 * 4. Because the native scrollbar remains real, anchor links, keyboard scroll,
 *    browser history, and accessibility remain intact.
 */
export default function SmoothScroll({
  children,
  ease = 0.08,
  disableOnTouch = true,
}: SmoothScrollProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef(0)
  const targetRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const enabledRef = useRef(false)

  useEffect(() => {
    const content = contentRef.current
    const spacer = spacerRef.current
    if (!content || !spacer) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const isSmallScreen = window.matchMedia('(max-width: 767px)').matches

    // Disable smooth scroll by default - use native browser scroll for performance
    if (prefersReducedMotion || (disableOnTouch && isTouch) || isSmallScreen || true) {
      content.style.position = 'relative'
      content.style.transform = 'none'
      spacer.style.height = '0px'
      return
    }

    enabledRef.current = true

    const setBodyHeight = () => {
      if (!content || !spacer) return
      const height = content.getBoundingClientRect().height
      spacer.style.height = `${height}px`
    }

    const updateTarget = () => {
      targetRef.current = window.scrollY || window.pageYOffset
    }

    const raf = () => {
      if (!content) return
      updateTarget()

      const current = currentRef.current
      const target = targetRef.current
      const next = current + (target - current) * ease

      currentRef.current = Math.abs(target - next) < 0.1 ? target : next

      content.style.transform = `translate3d(0, ${-currentRef.current}px, 0)`

      rafRef.current = requestAnimationFrame(raf)
    }

    // Initial setup
    currentRef.current = window.scrollY || window.pageYOffset
    targetRef.current = currentRef.current
    setBodyHeight()
    rafRef.current = requestAnimationFrame(raf)

    // Keep height updated on resize / content changes
    const resizeObserver = new ResizeObserver(setBodyHeight)
    if (content) resizeObserver.observe(content!)

    window.addEventListener('resize', setBodyHeight, { passive: true })
    window.addEventListener('load', setBodyHeight)

    return () => {
      enabledRef.current = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      resizeObserver.disconnect()
      window.removeEventListener('resize', setBodyHeight)
      window.removeEventListener('load', setBodyHeight)
      if (content) content.style.transform = ''
      if (spacer) spacer.style.height = '0px'
    }
  }, [ease, disableOnTouch])

  return (
    <>
      <div
        ref={contentRef}
        className="smooth-scroll-content"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          minHeight: '100vh',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {children}
      </div>

      {/* Maintains real scroll height for native scrollbar/accessibility */}
      <div ref={spacerRef} aria-hidden="true" />
    </>
  )
}
