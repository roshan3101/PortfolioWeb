"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react"
import type { PersonalDetails, Socials } from "@/types"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { handleSmoothScroll } from "@/lib/utils"

interface HeroProps {
  data: PersonalDetails
  socials: Socials
}

export default function Hero({ data, socials }: HeroProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [isMounted, setIsMounted] = useState(false)
  
  // Use refs for generating stable random values
  const particleRefs = useRef(
    Array.from({ length: 20 }, () => ({
      x: Math.random(),
      y: Math.random(),
      scale: Math.random() * 0.5 + 0.5,
      animX: Math.random() * 100 - 50,
      animY: Math.random() * -100,
      duration: Math.random() * 3 + 2
    }))
  )
  
  useEffect(() => {
    // Mark as mounted to avoid hydration mismatches
    setIsMounted(true)
    
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
    
    // Update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  useEffect(() => {
    if (currentIndex < data.title.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + data.title[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, data.title])

  // Don't render animations until client-side
  if (!isMounted) {
    return (
      <section
        id="home"
        className="relative min-h-[90vh] flex flex-col items-center justify-center scroll-mt-16 overflow-hidden py-12 md:py-0"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex-1 flex flex-col items-center justify-center relative">
          {/* Simple loading placeholder */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center scroll-mt-16 overflow-hidden py-12 md:py-0"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-pink-500/10 dark:from-purple-900/20 dark:via-indigo-900/20 dark:to-pink-900/20 animate-gradient" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {particleRefs.current.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 dark:bg-purple-500/30 rounded-full"
            initial={{
              x: particle.x * windowSize.width,
              y: particle.y * windowSize.height,
              scale: particle.scale,
            }}
            animate={{
              y: [null, particle.y * windowSize.height + particle.animY],
              x: [null, particle.x * windowSize.width + particle.animX],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
  
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex-1 flex flex-col items-center justify-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-kawai tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 dark:from-purple-400 dark:via-indigo-400 dark:to-pink-400">
                {data.name}
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-indigo-500/20 to-pink-500/20 dark:from-purple-400/20 dark:via-indigo-400/20 dark:to-pink-400/20 blur-xl -z-10" />
            </motion.div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-questwin text-purple-800 dark:text-purple-300 relative min-h-[1.5em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="relative z-10">
                {displayText}
                <span className="inline-block w-1 h-4 sm:h-5 md:h-6 bg-purple-800 dark:bg-purple-300 ml-1 animate-blink"></span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 dark:from-purple-500/10 dark:to-indigo-500/10 blur-lg -z-10" />
            </motion.h2>

            <motion.div 
              className="flex justify-center md:justify-start gap-4 md:gap-6 pt-4 md:pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href={socials.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:animate-wiggle h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-400 transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#333] dark:bg-[#24292e] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 relative z-10 text-purple-800 dark:text-purple-300 group-hover:text-white transition-colors duration-300" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:animate-wiggle h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-400 transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#0077b5] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 relative z-10 text-purple-800 dark:text-purple-300 group-hover:text-white transition-colors duration-300" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href={socials.resume} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:animate-wiggle h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-400 transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6 relative z-10 text-purple-800 dark:text-purple-300 group-hover:text-white transition-colors duration-300" />
                  <span className="sr-only">Resume</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 relative order-1 md:order-2 mb-6 md:mb-0"
          >
            <div className="relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-pink-500/30 dark:from-purple-500/40 dark:via-indigo-500/40 dark:to-pink-500/40 rounded-full blur-3xl animate-pulse" />
              <div className="relative">
                <Image
                  src="/heroImage.png"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="rounded-full object-cover border-4 border-purple-200 dark:border-purple-800 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-shadow duration-300"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Explore Button at Bottom Center with Animated Arrow */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <a
          href="#about"
          onClick={(e) => handleSmoothScroll(e, "#about")}
          className="inline-block"
        >
          <Button 
            variant="outline" 
            className="rounded-full hover:animate-wiggle border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-400 transition-colors px-4 sm:px-6 py-1.5 sm:py-2 h-auto text-sm sm:text-base group"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 font-anime">
              Explore My World
            </span>
            <motion.span
              className="ml-2 inline-block"
              animate={{ 
                y: [0, 5, 0],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600 dark:text-purple-400" />
            </motion.span>
          </Button>
        </a>
      </motion.div>
    </section>
  )
}
