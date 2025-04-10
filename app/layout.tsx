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
            <footer className="py-6 text-center text-sm text-muted-foreground border-t">
              <p>© {new Date().getFullYear()} Roshan Kumar Sahu. All rights reserved.</p>
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