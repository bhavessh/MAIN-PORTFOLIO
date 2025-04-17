import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"

export const metadata: Metadata = {
  title: "Bhavesh Jain | Software Developer",
  description: "Portfolio of Bhavesh Jain, a 3rd year BTech student and software developer",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <Hero />

      <SectionTransition id="about-wrapper" className="py-20 bg-white dark:bg-slate-950">
        <About />
      </SectionTransition>

      <SectionTransition id="projects-wrapper" className="py-20 bg-slate-50 dark:bg-slate-900">
        <Projects />
      </SectionTransition>

      <SectionTransition id="experience-wrapper" className="py-20 bg-white dark:bg-slate-950">
        <Experience />
      </SectionTransition>

      <SectionTransition id="skills-wrapper" className="py-20 bg-slate-50 dark:bg-slate-900">
        <Skills />
      </SectionTransition>

      <SectionTransition id="contact-wrapper" className="py-20 bg-white dark:bg-slate-950">
        <Contact />
      </SectionTransition>

      <Footer />
    </main>
  )
}
