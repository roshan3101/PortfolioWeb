import AnimatedSection from "@/components/animated-section"
import SectionHeading from "@/components/section-heading"
import type { PersonalDetails } from "@/types"
import { Mail, Phone, MapPin, Star } from "lucide-react"

interface AboutProps {
  data: PersonalDetails
}

export default function About({ data }: AboutProps) {
  return (
    <AnimatedSection id="about">
      <SectionHeading title="About Me" subtitle="Get to know more about my background and skills" />

      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto font-angle-coast tracking-widest">{data.about}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            className="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl p-6 shadow-sm border border-indigo-100/50 dark:border-indigo-900/30"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-kawai mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-indigo-500 dark:text-indigo-400" />
                <div>
                  <span className="font-medium block text-xs sm:text-sm text-muted-foreground">Email</span>
                  <a href={`mailto:${data.email}`} className="text-sm sm:text-base text-primary hover:underline">
                    {data.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-indigo-500 dark:text-indigo-400" />
                <div>
                  <span className="font-medium block text-xs sm:text-sm text-muted-foreground">Phone</span>
                  <span className="text-sm sm:text-base">{data.phone}</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-indigo-500 dark:text-indigo-400" />
                <div>
                  <span className="font-medium block text-xs sm:text-sm text-muted-foreground">Location</span>
                  <span className="text-sm sm:text-base">{data.location}</span>
                </div>
              </li>
            </ul>
          </div>

          <div 
            className="bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-pink-950/30 dark:to-purple-950/30 rounded-xl p-6 shadow-sm border border-pink-100/50 dark:border-pink-900/30 font-calming"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-kawai mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">Key Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Star className="h-5 w-5 mr-3 mt-0.5 text-pink-500 dark:text-pink-400 flex-shrink-0" />
                <span className="text-xs md:text-base">Full-Stack Web Developer with React, Node.js expertise</span>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 mr-3 mt-0.5 text-pink-500 dark:text-pink-400 flex-shrink-0" />
                <span className="text-xs md:text-base">AI/ML Engineer with experience in TensorFlow, PyTorch</span>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 mr-3 mt-0.5 text-pink-500 dark:text-pink-400 flex-shrink-0" />
                <span className="text-xs md:text-base">Data Analyst proficient in Python, SQL, and visualization tools</span>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 mr-3 mt-0.5 text-pink-500 dark:text-pink-400 flex-shrink-0" />
                <span className="text-xs md:text-base">B.Tech student at IIIT Una in Electronics and Communication</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
