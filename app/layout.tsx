import type { Metadata } from 'next'
import './globals.css'


export const viewport = {
  themeColor: '#08080f',
}

export const metadata: Metadata = {
  title: 'Drexa Digital — Next-Gen Digital Agency',
  description:
    'We combine creativity, technology and strategy to help brands grow, engage and stand out in the digital world.',
  keywords: 'digital agency, web development, UI/UX design, AI integration, SaaS development Pakistan',
  openGraph: {
    title: 'Drexa Digital — Next-Gen Digital Agency',
    description: 'We build modern digital experiences that feel alive.',
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
    <html lang="en">
      <body className="bg-background text-text-primary font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
