import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

export const viewport = {
  themeColor: '#08080f',
}

export const metadata: Metadata = {
  title: 'Ahmed Bilal — Full-Stack Developer | Drexa Digital',
  description:
    'Full-stack developer crafting premium digital experiences with modern web technologies. Specializing in React, Next.js, and performance-first engineering.',
  keywords: 'frontend developer, full-stack developer, React, Next.js, TypeScript, portfolio, web developer Pakistan, Drexa Digital',
  openGraph: {
    title: 'Ahmed Bilal — Full-Stack Developer | Drexa Digital',
    description: 'Crafting premium digital experiences with modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-text-primary font-sans antialiased overflow-x-hidden">
        <div className="noise-overlay">
          <SmoothScroll ease={0.08} disableOnTouch={true}>
            {children}
          </SmoothScroll>
        </div>
      </body>
    </html>
  )
}