import Header from '@/components/Header'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen text-foreground max-w-2xl mx-auto sm:py-24 px-6 transition-colors duration-300">
      <div className="flex flex-col min-h-[100dvh] space-y-10">
        <Header />
        <About />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

