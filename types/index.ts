export interface PersonalDetails {
  name: string
  title: string
  about: string
  email: string
  phone: string
  location: string
  resumeLink: string
  profileImage: string
}

export interface Education {
  institution: string
  degree: string
  gpa?: string
  percentage?: string
  startYear?: number
  endYear: number
}

export interface Experience {
  company: string
  role: string
  startDate: string
  endDate: string
  description: string[]
  technologies: string[]
  logo: string
}

export interface WebProject {
  name: string
  description: string[]
  techStack: string[]
  demo?: string
  github?: string
  image?: string
}

export interface MLProject {
  name: string
  description: string[]
  techStack: string[]
  demo?: string
  github?: string
  image?: string
}

export interface Skill {
  name: string
  icon: string
}

export interface Skills {
  languages: Skill[]
  frontend: Skill[]
  backend: Skill[]
  databases: Skill[]
  mlAi: Skill[]
  dataTools: Skill[]
  tools: Skill[]
}

export interface Certification {
  title: string
  provider: string
  year: number
}

export interface Socials {
  linkedin: string
  github: string
  leetcode: string
  peerlist: string
  portfolio: string
  resume: string
}
