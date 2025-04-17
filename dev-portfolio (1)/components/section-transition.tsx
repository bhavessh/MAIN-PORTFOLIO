"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface SectionTransitionProps {
  children: ReactNode
  id: string
  className?: string
}

export default function SectionTransition({ children, id, className = "" }: SectionTransitionProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id={id} ref={sectionRef} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  )
}
