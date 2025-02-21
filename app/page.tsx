import HeroSection from '@/app/components/HeroSection'
import ProjectsSection from '@/app/components/ProjectsSection'
import Contact from '@/app/components/contact/contact'
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProjectsSection />
      <Contact />
    </main>
  )
}