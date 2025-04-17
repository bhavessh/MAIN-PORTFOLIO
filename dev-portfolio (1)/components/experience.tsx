"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const experiences = [
    {
      title: "Software Development Intern",
      company: "Tech Innovations Inc.",
      location: "Remote",
      period: "May 2023 - Aug 2023",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with the team to implement new features and fix bugs.",
    },
    {
      title: "Web Development Intern",
      company: "Digital Solutions Ltd.",
      location: "Bangalore, India",
      period: "Dec 2022 - Feb 2023",
      description:
        "Assisted in the development of responsive websites. Worked with HTML, CSS, and JavaScript to create user-friendly interfaces.",
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      location: "Remote",
      period: "Jan 2022 - Present",
      description:
        "Actively contribute to open-source projects. Fixed bugs and implemented new features in various JavaScript and Python repositories.",
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <div id="experience" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Work <span className="text-violet-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my skills and knowledge.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-violet-200 dark:bg-violet-900/30 transform md:translate-x-[-50%] hidden md:block"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-violet-600 border-4 border-white dark:border-slate-950"></div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800">
                      <CardHeader>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                        <div className="text-violet-600 font-medium">{exp.company}</div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-slate-500 dark:text-slate-400 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-slate-500 dark:text-slate-400 mb-4">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
