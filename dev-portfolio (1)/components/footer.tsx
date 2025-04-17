"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

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
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-2xl font-bold">
              Bhavesh<span className="text-violet-500">.</span>
            </Link>
            <p className="text-slate-400 mt-2">Building digital experiences with passion and precision.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <div className="flex space-x-6">
              <Link
                href="#home"
                onClick={(e) => handleNavClick(e, "#home")}
                className="text-slate-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="text-slate-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="text-slate-400 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="text-slate-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Bhavesh Jain. All rights reserved.</p>
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-violet-600 hover:bg-violet-700 rounded-full text-white transition-colors mt-4 md:mt-0"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
