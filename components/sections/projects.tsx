"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { WebProject, MLProject } from "@/types"
import Link from "next/link"
import Image from "next/image"

interface ProjectsProps {
  webProjects: WebProject[]
  mlProjects: MLProject[]
}

export default function Projects({ webProjects, mlProjects }: ProjectsProps) {
  const [projectType, setProjectType] = useState("web")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})
  const [allImagesLoaded, setAllImagesLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  
  const projects = projectType === "web" ? webProjects : mlProjects
  
  // Preload all project images
  useEffect(() => {
    const projectsWithImages = [...webProjects, ...mlProjects].filter(project => project.image)
    
    if (projectsWithImages.length === 0) {
      setAllImagesLoaded(true)
      return
    }
    
    let loadedCount = 0
    const totalImages = projectsWithImages.length
    
    projectsWithImages.forEach(project => {
      if (!project.image) return
      
      const img = new window.Image()
      img.src = project.image
      img.onload = () => {
        loadedCount++
        setLoadedImages(prev => ({ ...prev, [project.image!]: true }))
        setLoadingProgress(Math.round((loadedCount / totalImages) * 100))
        
        if (loadedCount === totalImages) {
          setAllImagesLoaded(true)
        }
      }
      img.onerror = () => {
        // If image fails to load, mark it as loaded to avoid infinite loading
        loadedCount++
        setLoadedImages(prev => ({ ...prev, [project.image!]: true }))
        setLoadingProgress(Math.round((loadedCount / totalImages) * 100))
        
        if (loadedCount === totalImages) {
          setAllImagesLoaded(true)
        }
      }
    })
  }, [webProjects, mlProjects])
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <AnimatedSection id="projects" className="bg-muted/50">
      <SectionHeading title="Projects" subtitle="A showcase of my recent work and personal projects" />

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-questwin font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            {projectType === "web" ? "Web Projects" : "ML/AI Projects"}
          </h3>
          <Select value={projectType} onValueChange={setProjectType}>
            <SelectTrigger className="w-[180px] bg-card">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web">Web Projects</SelectItem>
              <SelectItem value="ml">ML/AI Projects</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {!allImagesLoaded && (
          <div className="mb-8 text-center">
            <div className="w-full max-w-md mx-auto bg-gray-200 dark:bg-gray-800 rounded-full h-2.5 mb-2">
              <motion.div 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-sm text-muted-foreground font-penguin">
              Loading projects... {loadingProgress}%
            </p>
          </div>
        )}

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-4 gap-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl overflow-hidden shadow-sm border border-indigo-100/50 dark:border-indigo-900/30 min-w-[350px] max-w-[350px] flex-shrink-0 snap-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {project.image ? (
                  <div className="relative h-48 w-full overflow-hidden">
                    {!loadedImages[project.image] && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50"
                        animate={{ 
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    <Image 
                      src={project.image} 
                      alt={project.name} 
                      fill
                      className={`object-cover transition-opacity duration-300 ${loadedImages[project.image] ? 'opacity-100' : 'opacity-0'}`}
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                ) : (
                  <div className="h-48 w-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-indigo-300 dark:text-indigo-700" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-questwin font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, i) => {
                      const gradientIndex = (index + i) % 10;
                      const gradients = [
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
                      return (
                        <span 
                          key={i} 
                          className={`text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r ${gradients[gradientIndex]} text-white font-medium shadow-sm`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </Link>
                    )}
                    {project.demo && (
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button variant="default" size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50"
              onClick={scrollRight}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
