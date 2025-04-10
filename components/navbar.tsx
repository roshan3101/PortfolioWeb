"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Star, User, GraduationCap, Briefcase, Code2, Trophy, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"
import { handleSmoothScroll } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "#home", icon: Star },
  { name: "About", href: "#about", icon: User },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code2 },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Achievements", href: "#achievements", icon: Trophy },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      setIsScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle navigation click with smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleSmoothScroll(e, href, () => {
      if (isOpen) setIsOpen(false)
      const sectionId = href.startsWith('#') ? href.substring(1) : href
      setActiveSection(sectionId)
    })
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-purple-50/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-[0_0_15px_rgba(139,92,246,0.2)]" 
          : "bg-gradient-to-r from-purple-50/50 to-indigo-50/50 dark:from-gray-800/50 dark:to-gray-900/50"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-3xl font-kawai text-purple-800 dark:text-purple-400 tracking-widest hover:animate-wiggle relative group"
            >
              <span className="relative z-10 font-anime">ROSHAN</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 dark:from-purple-500/20 dark:to-indigo-500/20 blur-lg group-hover:animate-glow"></span>
            </Link>
          </div>
  
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "px-3 py-2 text-sm font-kawai rounded-md transition-all duration-300 flex items-center gap-2 cursor-pointer",
                      activeSection === item.href.substring(1)
                        ? "text-purple-800 dark:text-purple-400 scale-110 bg-purple-100/50 dark:bg-gray-700/50 shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                        : "text-purple-700 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-400 hover:scale-105 hover:bg-purple-100/30 dark:hover:bg-gray-700/30",
                    )}
                  >
                    <Icon className="w-4 h-4 animate-sparkle" />
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>
  
          <div className="hidden md:block">
            <ModeToggle />
          </div>
  
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-2 hover:animate-wiggle" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6 text-purple-800 dark:text-purple-400" /> : <Menu className="h-6 w-6 text-purple-800 dark:text-purple-400" />}
            </Button>
          </div>
        </div>
      </div>
  
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-40">
          <div className="absolute top-0 left-0 right-0 bg-purple-50/95 dark:bg-gray-800/95 backdrop-blur-lg border-b border-purple-100 dark:border-gray-700">
            <div className="flex items-center justify-between px-4 py-3">
              <Link 
                href="/" 
                className="text-2xl font-kawai text-purple-800 dark:text-purple-400 tracking-widest hover:animate-wiggle relative group"
              >
                <span className="relative z-10 font-anime">ROSHAN</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 dark:from-purple-500/20 dark:to-indigo-500/20 blur-lg group-hover:animate-glow"></span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="hover:animate-wiggle"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6 text-purple-800 dark:text-purple-400" />
              </Button>
            </div>
            <div className="px-4 pt-1 pb-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-kawai transition-all duration-200 flex items-center gap-2 cursor-pointer",
                      activeSection === item.href.substring(1)
                        ? "text-purple-800 dark:text-purple-400 bg-purple-100/50 dark:bg-gray-700/50 shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                        : "text-purple-700 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-400 hover:bg-purple-100/30 dark:hover:bg-gray-700/30",
                    )}
                  >
                    <Icon className="w-4 h-4 animate-sparkle" />
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
