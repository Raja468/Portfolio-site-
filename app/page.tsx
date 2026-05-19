import dynamic from 'next/dynamic'

// Critical: loaded immediately (above the fold)
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'

// Above the fold: loaded eagerly
import StatsBar from '@/components/StatsBar'

// Below the fold: lazy loaded with custom loading
const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <div className="h-[600px] bg-surface" />,
})
const SkillsSection = dynamic(() => import('@/components/SkillsSection'), {
  loading: () => <div className="h-[500px]" />,
})
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
  loading: () => <div className="h-[700px] bg-surface" />,
})
const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'), {
  loading: () => <div className="h-[600px]" />,
})
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div className="h-[400px] bg-surface" />,
})
const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="h-[600px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
