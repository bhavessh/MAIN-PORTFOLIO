"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"

// Skill category tabs
const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools & Others" },
]

// Skills data with categories, names, icons, and ratings
const skills = {
  frontend: [
    { name: "React", icon: "/placeholder.svg?height=60&width=60", rating: 4 },
    { name: "Next.js", icon: "/placeholder.svg?height=60&width=60", rating: 4 },
    { name: "HTML & CSS", icon: "/placeholder.svg?height=60&width=60", rating: 5 },
    { name: "JavaScript", icon: "/placeholder.svg?height=60&width=60", rating: 4 },
    { name: "TypeScript", icon: "/placeholder.svg?height=60&width=60", rating: 3 },
    { name: "Tailwind CSS", icon: "/placeholder.svg?height=60&width=60", rating: 4 },
  ],
  backend: [
    { name: "Node.js", icon: "/placeholder.svg?height=60&width=60", rating: 4 },
    { name: "Express", icon: "/placeholder.svg?height=60&width=60", rating: 4 },
    { name: "MongoDB", icon: "/placeholder.svg?height=60&width=60", rating: 3 },
    { name: "PostgreSQL", icon: "/placeholder.svg?height=60&width=60", rating: 3 },
    { name: "Python", icon: "/placeholder.svg?height=60&width=60", rating: 3 },
    { name: "Firebase", icon: "/placeholder.svg?height=60&width=60", rating: 4 },
  ],
  tools: [
    { name: "Git", icon: "/placeholder.svg?height=60&width=60", rating: 4 },
    { name: "Docker", icon: "/placeholder.svg?height=60&width=60", rating: 3 },
    { name: "VS Code", icon: "/placeholder.svg?height=60&width=60", rating: 5 },
    { name: "Figma", icon: "/placeholder.svg?height=60&width=60", rating: 3 },
    { name: "AWS", icon: "/placeholder.svg?height=60&width=60", rating: 3 },
    { name: "Postman", icon: "/placeholder.svg?height=60&width=60", rating: 4 },
  ],
}

export default function Skills() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [position, setPosition] = useState(0)
  const containerRef = useRef(null)

  // Continuous animation for the skills carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        setPosition((prev) => (prev - 1) % 1200)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  // Reset position when changing categories to ensure smooth animation
  useEffect(() => {
    setPosition(0)
  }, [activeCategory])

  return (
    <div id="skills" ref={sectionRef} className="overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-violet-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-violet-500 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            {/* Infinite Carousel */}
            <div className="overflow-hidden relative py-8">
              <div
                ref={containerRef}
                className="flex"
                style={{
                  transform: `translateX(${position}px)`,
                  width: `${skills[activeCategory].length * 240}px`,
                }}
              >
                {/* First set of skills */}
                {skills[activeCategory].map((skill, index) => (
                  <SkillCard key={`${skill.name}-1-${index}`} skill={skill} />
                ))}

                {/* Duplicate set for infinite scrolling */}
                {skills[activeCategory].map((skill, index) => (
                  <SkillCard key={`${skill.name}-2-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {["DAA", "DBMS", "SQL", "Cloud Computing"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 text-center"
            >
              <div className="text-violet-600 font-bold text-lg">{item}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// Skill Card Component
function SkillCard({ skill }) {
  return (
    <motion.div
      className="w-52 mx-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex flex-col items-center"
      whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-16 h-16 mb-4 relative">
        <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} fill className="object-contain" />
      </div>
      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{skill.name}</h3>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i < skill.rating ? "bg-violet-500" : "bg-slate-200 dark:bg-slate-700"}`}
          />
        ))}
      </div>
    </motion.div>
  )
}
