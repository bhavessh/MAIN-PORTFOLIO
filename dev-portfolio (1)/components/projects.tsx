"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product catalog, and payment integration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/",
      demo: "https://example.com/",
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality and real-time updates.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/",
      demo: "https://example.com/",
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard that displays current and forecasted weather data from multiple locations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "API Integration", "CSS"],
      github: "https://github.com/",
      demo: "https://example.com/",
    },
    {
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts with user authentication.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      github: "https://github.com/",
      demo: "https://example.com/",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div id="projects" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-violet-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }}>
              <Card className="overflow-hidden h-full border-0 shadow-lg dark:bg-slate-800 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-violet-600 hover:bg-violet-700">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
