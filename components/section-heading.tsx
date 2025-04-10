import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3 text-center mb-12 relative", className)}>
      <div className="relative inline-block">
        <h2 className="text-3xl font-quatera tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 dark:from-purple-400 dark:via-indigo-400 dark:to-pink-400 relative z-10">
          {title}
        </h2>
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-indigo-500/20 to-pink-500/20 dark:from-purple-400/20 dark:via-indigo-400/20 dark:to-pink-400/20 blur-xl -z-10"></div>
      </div>
      
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto font-anime text-sm md:text-lg">
          {subtitle}
        </p>
      )}
      
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 dark:from-purple-400 dark:via-indigo-400 dark:to-pink-400 rounded-full"></div>
    </div>
  )
}
