"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, ExternalLink, Send, Mail, MessageSquare } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { toast as sonnerToast } from "sonner"
import Link from "next/link"
import type { Socials } from "@/types"

interface ContactProps {
  email: string
  socials: Socials
}

export default function Contact({ email, socials }: ContactProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // Show Sonner toast for success
        sonnerToast.success("Message sent!", {
          description: "Thank you for your message. I'll get back to you soon.",
          duration: 5000,
          position: "top-center",
          style: {
            background: "linear-gradient(to right, #4f46e5, #7c3aed)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "16px",
            fontFamily: "var(--font-penguin)",
          },
        })
        
        // Also show the default toast for backward compatibility
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        
        setFormData({ name: "", email: "", message: "" })
      } else {
        // Show Sonner toast for error
        sonnerToast.error("Error", {
          description: data.error || "Failed to send message. Please try again.",
          duration: 5000,
          position: "top-center",
        })
        
        // Also show the default toast for backward compatibility
        toast({
          title: "Error",
          description: data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      
      // Show Sonner toast for error
      sonnerToast.error("Error", {
        description: "Failed to send message. Please try again.",
        duration: 5000,
        position: "top-center",
      })
      
      // Also show the default toast for backward compatibility
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatedSection id="contact">
      <SectionHeading title="Contact Me" subtitle="Get in touch for collaborations or opportunities" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-6 sm:p-8 shadow-sm border border-purple-100/50 dark:border-purple-900/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-400 p-2 rounded-lg text-white shadow-md">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-questwin font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Let's Connect
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-8 font-penguin">
              Feel free to reach out for collaborations, job opportunities, or just to say hello! I'll get back to you
              as soon as possible.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg border border-purple-100/30 dark:border-purple-900/30">
                <h4 className="text-lg font-questwin font-semibold mb-3 text-purple-700 dark:text-purple-300">Email</h4>
                <a 
                  href={`mailto:${email}`} 
                  className="text-primary hover:underline flex items-center group transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-full mr-3 text-white group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-penguin">{email}</span>
                </a>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg border border-purple-100/30 dark:border-purple-900/30">
                <h4 className="text-lg font-questwin font-semibold mb-3 text-purple-700 dark:text-purple-300">Social Profiles</h4>
                <div className="flex gap-4">
                  <Link href={socials.github} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="relative overflow-hidden rounded-md"
                    >
                      <Button variant="outline" size="icon" className="bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-transparent relative z-10 h-10 w-10">
                        <Github className="h-5 w-5 relative z-10" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                      <motion.div 
                        className="absolute inset-0 bg-gray-800 z-0"
                        initial={{ y: "100%" }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center z-20"
                        initial={{ color: "rgb(75, 85, 99)" }}
                        whileHover={{ color: "white" }}
                        transition={{ duration: 0.3 }}
                      >
                        <Github className="h-5 w-5" />
                      </motion.div>
                    </motion.div>
                  </Link>
                  <Link href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="relative overflow-hidden rounded-md"
                    >
                      <Button variant="outline" size="icon" className="bg-transparent text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-700 hover:bg-transparent relative z-10 h-10 w-10">
                        <Linkedin className="h-5 w-5 relative z-10" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                      <motion.div 
                        className="absolute inset-0 bg-blue-600 z-0"
                        initial={{ y: "100%" }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center z-20"
                        initial={{ color: "rgb(37, 99, 235)" }}
                        whileHover={{ color: "white" }}
                        transition={{ duration: 0.3 }}
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.div>
                    </motion.div>
                  </Link>
                  <Link href={socials.portfolio} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="relative overflow-hidden rounded-md"
                    >
                      <Button variant="outline" size="icon" className="bg-transparent text-purple-600 dark:text-purple-400 border-purple-300 dark:border-purple-700 hover:bg-transparent relative z-10 h-10 w-10">
                        <ExternalLink className="h-5 w-5 relative z-10" />
                        <span className="sr-only">Portfolio</span>
                      </Button>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 z-0"
                        initial={{ y: "100%" }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center z-20"
                        initial={{ color: "rgb(147, 51, 234)" }}
                        whileHover={{ color: "white" }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-6 sm:p-8 shadow-sm border border-blue-100/50 dark:border-blue-900/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-lg text-white shadow-md">
                <Send className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-questwin font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                Send a Message
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-penguin font-medium mb-2 text-blue-700 dark:text-blue-300">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white/70 dark:bg-gray-800/70 border-blue-200 dark:border-blue-800 focus:border-blue-400 dark:focus:border-blue-600 focus:ring-blue-400 dark:focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-penguin font-medium mb-2 text-blue-700 dark:text-blue-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="bg-white/70 dark:bg-gray-800/70 border-blue-200 dark:border-blue-800 focus:border-blue-400 dark:focus:border-blue-600 focus:ring-blue-400 dark:focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-penguin font-medium mb-2 text-blue-700 dark:text-blue-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                  className="bg-white/70 dark:bg-gray-800/70 border-blue-200 dark:border-blue-800 focus:border-blue-400 dark:focus:border-blue-600 focus:ring-blue-400 dark:focus:ring-blue-600"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-penguin shadow-md transition-all duration-300 hover:shadow-lg" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
