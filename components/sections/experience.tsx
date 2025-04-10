"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import SectionHeading from "@/components/section-heading"
import type { Experience as ExperienceType } from "@/types"
import { Briefcase } from "lucide-react"
import Image from "next/image"

interface ExperienceProps {
  data: ExperienceType[]
}

// Array of gradient color combinations for technology tags
const techGradients = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-green-500 to-emerald-400",
  "from-amber-500 to-orange-400",
  "from-red-500 to-rose-400",
  "from-indigo-500 to-violet-400",
  "from-teal-500 to-cyan-400",
  "from-fuchsia-500 to-pink-400",
  "from-lime-500 to-green-400",
  "from-yellow-500 to-amber-400"
];

// Array of role text colors
const roleColors = [
  "text-blue-600 dark:text-blue-400",
  "text-purple-600 dark:text-purple-400",
  "text-green-600 dark:text-green-400",
  "text-amber-600 dark:text-amber-400",
  "text-red-600 dark:text-red-400",
  "text-indigo-600 dark:text-indigo-400",
  "text-teal-600 dark:text-teal-400",
  "text-fuchsia-600 dark:text-fuchsia-400",
  "text-lime-600 dark:text-lime-400",
  "text-yellow-600 dark:text-yellow-400"
];

export default function Experience({ data }: ExperienceProps) {
  return (
    <AnimatedSection id="experience">
      <SectionHeading title="Experience" subtitle="My professional journey and work experience" />

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-primary/30 pl-6 sm:pl-8 ml-3 sm:ml-4">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 sm:mb-12 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full -left-[2.2rem] sm:-left-[2.6rem] top-1.5 border-4 border-background dark:border-muted shadow-md" />
              <div className="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl p-4 sm:p-6 shadow-sm border border-indigo-100/50 dark:border-indigo-900/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    {item.logo ? (
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                        <Image 
                          src={item.logo} 
                          alt={`${item.company} logo`} 
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 sm:mb-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-questwin font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{item.company}</h3>
                      <span className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-0">
                        {item.startDate} - {item.endDate}
                      </span>
                    </div>
                    <p className={`text-sm sm:text-base md:text-lg font-penguin mb-2 sm:mb-4 ${roleColors[index % roleColors.length]}`}>{item.role}</p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 mr-1.5 sm:mr-2 mt-1.5 flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="mt-2">
                        <h4 className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1.5">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {item.technologies.map((tech, i) => {
                            const gradientIndex = (index + i) % techGradients.length;
                            return (
                              <span 
                                key={i} 
                                className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${techGradients[gradientIndex]} text-white font-medium shadow-sm`}
                              >
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
