import Image from 'next/image'
import Link from 'next/link'

export default function MockopediaPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974"
            alt="Mockopedia Platform"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10">
          <Link 
            href="/#projects" 
            className="text-white hover:text-primary-hover mb-8 inline-block"
          >
            ← Back to Projects
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">Mockopedia</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            AI-Driven Learning Management System with Advanced Proctoring, 
            adopted by Chitkara University for 5K+ students
          </p>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-background-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-foreground">AI Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Test Generation
              </h3>
              <p className="text-foreground-secondary">
                One-click creation of questions and answers using advanced LLMs, 
                with automatic database storage post-review.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Smart Proctoring
              </h3>
              <p className="text-foreground-secondary">
                Real-time detection of tab switching, screen sharing, and unauthorized 
                device usage during exams.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                RAG Chatbot
              </h3>
              <p className="text-foreground-secondary">
                Course-specific AI assistant trained on study materials for 
                instant query resolution and guidance.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                PDF Processing
              </h3>
              <p className="text-foreground-secondary">
                Automated conversion of PDF materials into structured tests 
                with detailed explanations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Demo */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Platform Overview</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070"
                  alt="Platform Demo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-[100px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070"
                    alt="Feature 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[100px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070"
                    alt="Feature 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[100px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070"
                    alt="Feature 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-foreground">
                Key Achievements
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">65%</div>
                  <div className="text-foreground-secondary">
                    Reduction in test creation time for educators
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5K+</div>
                  <div className="text-foreground-secondary">
                    Active student users at Chitkara University
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-foreground-secondary">
                    Accuracy in proctoring violations detection
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-background-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Tech Stack</h2>
          <div className="flex flex-wrap gap-4">
            {[
              "Next.js",
              "LLMs",
              "RAG",
              "Proctoring Algorithms",
              "PostgreSQL",
              "Vector DB",
              "WebRTC",
              "TensorFlow"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-background-secondary text-foreground-secondary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Transform Your Institution
          </h2>
          <div className="flex justify-center gap-6">
            <a 
              href="https://dev.mockopedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
            >
              Try Demo
            </a>
            <Link
              href="/#contact"
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 