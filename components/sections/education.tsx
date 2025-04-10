"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import SectionHeading from "@/components/section-heading"
import type { Education as EducationType } from "@/types"
import { GraduationCap } from "lucide-react"

interface EducationProps {
  data: EducationType[]
}

export default function Education({ data }: EducationProps) {
  return (
    <AnimatedSection id="education">
      <SectionHeading title="Education" subtitle="My academic background and qualifications" />

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
              <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -left-[2.2rem] sm:-left-[2.6rem] top-1.5 border-4 border-background dark:border-muted shadow-md" />
              <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-4 sm:p-6 shadow-sm border border-purple-100/50 dark:border-purple-900/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 p-2 sm:p-3 rounded-lg">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 sm:mb-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-questwin font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">{item.institution}</h3>
                      <span className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-0">
                        {item.startYear ? `${item.startYear} - ${item.endYear}` : item.endYear}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-penguin">{item.degree}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {item.gpa ? (
                        <span className="inline-flex items-center">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 mr-1.5 sm:mr-2"></span>
                          GPA: {item.gpa}
                        </span>
                      ) : item.percentage ? (
                        <span className="inline-flex items-center">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 mr-1.5 sm:mr-2"></span>
                          Percentage: {item.percentage}
                        </span>
                      ) : null}
                    </p>
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
