"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "relative h-9 w-9 rounded-full transition-all duration-300 hover:scale-110",
          "bg-purple-100/50 dark:bg-gray-700/50",
          "hover:bg-purple-200/50 dark:hover:bg-gray-600/50",
          "hover:animate-wiggle"
        )}
      >
        <span className="sr-only">Loading theme...</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "relative h-9 w-9 rounded-full transition-all duration-300 hover:scale-110",
        "bg-purple-100/50 dark:bg-gray-700/50",
        "hover:bg-purple-200/50 dark:hover:bg-gray-600/50",
        "hover:animate-wiggle"
      )}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className={cn(
        "h-5 w-5 text-purple-800 dark:text-purple-400",
        "transition-all duration-300",
        "absolute inset-0 m-auto",
        theme === "dark" ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
      )} />
      <Moon className={cn(
        "h-5 w-5 text-purple-800 dark:text-purple-400",
        "transition-all duration-300",
        "absolute inset-0 m-auto",
        theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
      )} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
