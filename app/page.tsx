import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Education from "@/components/sections/education"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Achievements from "@/components/sections/achievements"
import Contact from "@/components/sections/contact"
import { personalData } from "@/data/personal-data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero data={personalData.personalDetails} socials={personalData.socials} />
      <About data={personalData.personalDetails} />
      <Education data={personalData.education} />
      <Experience data={personalData.experience} />
      <Projects webProjects={personalData.projects.web} mlProjects={personalData.projects.mlAi} />
      <Skills data={personalData.skills} />
      <Achievements data={personalData.achievements} />
      <Contact email={personalData.personalDetails.email} socials={personalData.socials} />
    </main>
  )
}
