"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import SectionHeading from "@/components/section-heading"
import type { Skills as SkillsType } from "@/types"
import Image from "next/image"
import { Code2, Database, Cpu, Globe, Layers, Wrench, Terminal } from "lucide-react"
import { useState, useEffect } from "react"

interface SkillsProps {
  data: SkillsType
}

export default function Skills({ data }: SkillsProps) {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})
  const [allImagesLoaded, setAllImagesLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Preload all images
  useEffect(() => {
    const allSkills = [
      ...data.languages,
      ...data.frontend,
      ...data.backend,
      ...data.databases,
      ...data.mlAi,
      ...data.dataTools,
      ...data.tools
    ]
    
    let loadedCount = 0
    const totalImages = allSkills.length
    
    allSkills.forEach(skill => {
      const img = new window.Image()
      img.src = skill.icon
      img.onload = () => {
        loadedCount++
        setLoadedImages(prev => ({ ...prev, [skill.name]: true }))
        setLoadingProgress(Math.round((loadedCount / totalImages) * 100))
        
        if (loadedCount === totalImages) {
          setAllImagesLoaded(true)
        }
      }
      img.onerror = () => {
        // If image fails to load, mark it as loaded to avoid infinite loading
        loadedCount++
        setLoadedImages(prev => ({ ...prev, [skill.name]: true }))
        setLoadingProgress(Math.round((loadedCount / totalImages) * 100))
        
        if (loadedCount === totalImages) {
          setAllImagesLoaded(true)
        }
      }
    })
  }, [data])

  const skillCategories = [
    { 
      name: "Languages", 
      skills: data.languages, 
      icon: <Code2 className="h-5 w-5" />, 
      gradient: "from-blue-500 to-cyan-400",
      cardGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
      borderGradient: "border-blue-100/50 dark:border-blue-900/30",
      textGradient: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
    },
    { 
      name: "Frontend", 
      skills: data.frontend, 
      icon: <Globe className="h-5 w-5" />, 
      gradient: "from-purple-500 to-pink-400",
      cardGradient: "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30",
      borderGradient: "border-purple-100/50 dark:border-purple-900/30",
      textGradient: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
    },
    { 
      name: "Backend", 
      skills: data.backend, 
      icon: <Terminal className="h-5 w-5" />, 
      gradient: "from-green-500 to-emerald-400",
      cardGradient: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
      borderGradient: "border-green-100/50 dark:border-green-900/30",
      textGradient: "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400"
    },
    { 
      name: "Databases", 
      skills: data.databases, 
      icon: <Database className="h-5 w-5" />, 
      gradient: "from-amber-500 to-orange-400",
      cardGradient: "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
      borderGradient: "border-amber-100/50 dark:border-amber-900/30",
      textGradient: "from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400"
    },
    { 
      name: "ML/AI", 
      skills: data.mlAi, 
      icon: <Cpu className="h-5 w-5" />, 
      gradient: "from-red-500 to-rose-400",
      cardGradient: "from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30",
      borderGradient: "border-red-100/50 dark:border-red-900/30",
      textGradient: "from-red-600 to-rose-600 dark:from-red-400 dark:to-rose-400"
    },
    { 
      name: "Data Tools", 
      skills: data.dataTools, 
      icon: <Layers className="h-5 w-5" />, 
      gradient: "from-indigo-500 to-violet-400",
      cardGradient: "from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30",
      borderGradient: "border-indigo-100/50 dark:border-indigo-900/30",
      textGradient: "from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400"
    },
    { 
      name: "Other Tools", 
      skills: data.tools, 
      icon: <Wrench className="h-5 w-5" />, 
      gradient: "from-teal-500 to-cyan-400",
      cardGradient: "from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30",
      borderGradient: "border-teal-100/50 dark:border-teal-900/30",
      textGradient: "from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400"
    },
  ]

  const skillGradients = [
    "from-blue-300/50 to-cyan-300/45",
    "from-purple-300/45 to-pink-300/45",
    "from-green-300/45 to-emerald-300/45",
    "from-amber-300/45 to-orange-300/45",
    "from-red-300/45 to-rose-300/45",
    "from-indigo-300/45 to-violet-300/45",
    "from-teal-300/45 to-cyan-300/45",
    "from-yellow-300/45 to-amber-300/45",
    "from-lime-300/45 to-green-300/45",
    "from-fuchsia-300/45 to-pink-300/45"
  ]

  return (
    <AnimatedSection id="skills">
      <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

      <div className="max-w-5xl mx-auto">
        {!allImagesLoaded && (
          <div className="mb-8 text-center">
            <div className="w-full max-w-md mx-auto bg-gray-200 dark:bg-gray-800 rounded-full h-2.5 mb-2">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-sm text-muted-foreground font-penguin">
              Loading skills... {loadingProgress}%
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${category.cardGradient} rounded-xl p-5 sm:p-6 shadow-sm border ${category.borderGradient} backdrop-blur-sm`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`bg-gradient-to-r ${category.gradient} p-2 rounded-lg text-white shadow-md`}>
                  {category.icon}
                </div>
                <h3 className={`text-lg sm:text-xl font-questwin font-bold bg-clip-text text-transparent bg-gradient-to-r ${category.textGradient}`}>
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => {
                  const gradientIndex = (i) % skillGradients.length;
                  const isLoaded = loadedImages[skill.name];
                  
                  return (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-1.5 bg-gradient-to-r ${skillGradients[gradientIndex]} rounded-full px-3 py-1.5 shadow-md`}
                      whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="relative w-4 h-4 sm:w-5 sm:h-5 bg-white/90 rounded-full p-0.5">
                        {!isLoaded && (
                          <motion.div 
                            className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full"
                            animate={{ 
                              opacity: [0.5, 0.8, 0.5],
                              scale: [0.95, 1, 0.95]
                            }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}
                        <Image 
                          src={skill.icon} 
                          alt={skill.name} 
                          fill
                          className={`object-contain p-0.5 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                          priority={true}
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-penguin text-gray-800 dark:text-gray-200">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
