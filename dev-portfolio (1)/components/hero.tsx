"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Navbar from "./navbar"

export default function Hero() {
  const handleNavClick = (e, href) => {
    e.preventDefault()

    // Extract the section ID from the href
    const sectionId = href.substring(1)
    const section = document.getElementById(sectionId)

    if (section) {
      // Scroll to section with smooth animation
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for the navbar height
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
                  Bhavesh
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-6">
                <span className="font-medium">Software Developer </span> & Data Analyst
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-xl">
                 I build thoughtful digital experiences using modern tech stacks.
                With a deep love for clean code and clever solutions,
                I enjoy turning complex problems into elegant, user-friendly products.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-700"
                  onClick={(e) => handleNavClick(e, "#projects")}
                >
                  <Link href="#projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" onClick={(e) => handleNavClick(e, "#contact")}>
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>

              <div className="flex gap-4 mt-8">
                <motion.a
                  href="https://github.com/bhavessh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/bhavessh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="mailto:jbhavesh.in@gmail.com"
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-violet-500/20 to-cyan-500/20 dark:from-violet-500/10 dark:to-cyan-500/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-white text-6xl font-bold">
                      BJ
                    </div>
                    <div className="mt-6 text-slate-700 dark:text-slate-300 font-medium">Full Stack Developer</div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-violet-500/20 dark:bg-violet-500/10"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-cyan-500/20 dark:bg-cyan-500/10"></div>
                <div className="absolute top-1/2 right-20 w-16 h-16 rounded-full bg-yellow-500/20 dark:bg-yellow-500/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center">
          <span className="text-slate-500 dark:text-slate-400 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
