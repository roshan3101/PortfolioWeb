"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  id: string
  className?: string
}

export default function AnimatedSection({ children, id, className = "" }: AnimatedSectionProps) {
  // Skip the gradient background for the hero section
  const isHeroSection = id === "hero"
  
  return (
    <motion.section
      id={id}
      className={cn(
        "py-16 md:py-24 scroll-mt-16 relative",
        !isHeroSection && "before:absolute before:inset-0 before:bg-gradient-to-b before:from-purple-50/30 before:via-indigo-50/20 before:to-pink-50/30 dark:before:from-purple-950/30 dark:before:via-indigo-950/20 dark:before:to-pink-950/30 before:-z-10",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">{children}</div>
    </motion.section>
  )
}
