import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { 
  kawaiCraft, 
  quatera, 
  penguin, 
  angleCoast, 
  questwin,
  roseAsmora,
  calming,
  swagume,
  silentDream
} from "@/lib/fonts"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "sonner"
import { Mail, Phone, Github, Linkedin, Code } from "lucide-react"
import Link from "next/link"
import { personalData } from "@/data/personal-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Roshan Kumar Sahu | Full-Stack Developer & AI/ML Engineer",
  description: "Portfolio of Roshan Kumar Sahu, a Full-Stack Web Developer, AI/ML Engineer, and Data Analyst",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`scroll-smooth ${kawaiCraft.variable} ${quatera.variable} ${penguin.variable} ${angleCoast.variable} ${questwin.variable} ${roseAsmora.variable} ${calming.variable} ${swagume.variable} ${silentDream.variable}`}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div suppressHydrationWarning>
            <Navbar />
            {children}
            <footer className="py-8 border-t border-muted-foreground/20">
              <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                      © {new Date().getFullYear()} Roshan Kumar Sahu. All rights reserved.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    <Link 
                      href={`mailto:${personalData.personalDetails.email}`} 
                      className="text-xs flex items-center gap-1.5 text-muted-foreground hover:text-purple-400 transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>{personalData.personalDetails.email}</span>
                    </Link>
                    
                    <Link 
                      href={`tel:${personalData.personalDetails.phone}`} 
                      className="text-xs flex items-center gap-1.5 text-muted-foreground hover:text-purple-400 transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>{personalData.personalDetails.phone}</span>
                    </Link>
                    
                    <Link 
                      href={personalData.socials.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs flex items-center gap-1.5 text-muted-foreground hover:text-purple-400 transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </Link>
                    
                    <Link 
                      href={personalData.socials.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs flex items-center gap-1.5 text-muted-foreground hover:text-purple-400 transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      <span>LinkedIn</span>
                    </Link>
                    
                    <Link 
                      href={personalData.socials.leetcode} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs flex items-center gap-1.5 text-muted-foreground hover:text-purple-400 transition-colors"
                    >
                      <Code className="h-3.5 w-3.5" />
                      <span>LeetCode</span>
                    </Link>
                  
                  </div>
                </div>
              </div>
            </footer>
            <Toaster />
            <Sonner richColors position="bottom-right" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'