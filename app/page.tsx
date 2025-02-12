import HeroSection from '@/app/components/HeroSection'
import ProjectsSection from '@/app/components/ProjectsSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProjectsSection />
    </main>
  )
}