"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, BookOpen, Award } from "lucide-react"

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const stats = [
    { label: "Projects Completed", value: "15+", icon: Code },
    { label: "Technologies", value: "10+", icon: BookOpen },
    { label: "Achievements", value: "5+", icon: Award },
  ]

  return (
    <div id="about" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-violet-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-violet-500/20 to-cyan-500/20 dark:from-violet-500/10 dark:to-cyan-500/10 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold mb-6">
                    BJ
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Bhavesh Jain</h3>
                  <p className="text-slate-600 dark:text-slate-400">3rd Year BTech Student</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-violet-500/20 dark:bg-violet-500/10"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-cyan-500/20 dark:bg-cyan-500/10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Software Developer 
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Hey, I'm Bhavesh Jain — a Software Developer with a passion for clean code, thoughtful design, and meaningful user experiences.

Currently pursuing my Bachelor's in Computer Science, I specialize in building scalable web applications, intuitive user interfaces, and turning ideas into functional products. Whether it’s designing robust backend systems or crafting pixel-perfect frontend views, I love solving real-world problems through code.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
             But beyond the logic and syntax, I’m also a storyteller — someone who believes that every line of code tells a story. From contributing to team projects to building personal tools, I approach software like I approach life: with curiosity, creativity, and a hunger to grow.

I’m actively exploring full-stack development, system design, and emerging tech like AR/VR. Open to collaborations, internships, and new challenges that push me out of my comfort zone.

Let’s build something cool together!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm text-center"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-violet-600" />
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
