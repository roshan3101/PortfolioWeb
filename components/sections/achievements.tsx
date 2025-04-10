"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import SectionHeading from "@/components/section-heading"
import { Trophy, Medal, Award, Star } from "lucide-react"

interface AchievementsProps {
  data: string[]
}

const achievementIcons = [Trophy, Medal, Award, Star]
const gradients = [
  {
    bg: "from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30",
    border: "border-amber-100/50 dark:border-amber-900/30",
    icon: "from-amber-500 to-yellow-500",
    text: "from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400"
  },
  {
    bg: "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30",
    border: "border-purple-100/50 dark:border-purple-900/30",
    icon: "from-purple-500 to-pink-500",
    text: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
  },
  {
    bg: "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
    border: "border-blue-100/50 dark:border-blue-900/30",
    icon: "from-blue-500 to-indigo-500",
    text: "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
  },
  {
    bg: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
    border: "border-green-100/50 dark:border-green-900/30",
    icon: "from-green-500 to-emerald-500",
    text: "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400"
  }
]

export default function Achievements({ data }: AchievementsProps) {
  return (
    <AnimatedSection id="achievements">
      <SectionHeading title="Achievements & Hackathons" subtitle="Recognition and participation in tech events" />

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {data.map((achievement, index) => {
            const IconComponent = achievementIcons[index % achievementIcons.length]
            const gradient = gradients[index % gradients.length]
            
            return (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${gradient.bg} rounded-xl p-5 sm:p-6 shadow-sm border ${gradient.border} backdrop-blur-sm`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex gap-4">
                  <div className={`bg-gradient-to-r ${gradient.icon} p-2.5 rounded-lg text-white shadow-md h-fit`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm sm:text-base font-penguin bg-clip-text text-transparent bg-gradient-to-r ${gradient.text}`}>
                      {achievement}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
