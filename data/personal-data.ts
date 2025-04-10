import type {
  PersonalDetails,
  Education,
  Experience,
  WebProject,
  MLProject,
  Skills,
  Certification,
  Socials,
} from "@/types"

export const personalData = {
  personalDetails: {
    name: "Roshan Kumar Sahu",
    title: "Full-Stack Web Developer | AI/ML Engineer | Data Analyst",
    about:
      "B.Tech student at IIIT Una in Electronics and Communication Engineering with a strong foundation in full-stack development, machine learning, and AI. Passionate about building scalable and impactful solutions. Skilled in both frontend and backend technologies, ML modeling, and data-driven insights.",
    email: "igniterofficial909505@gmail.com",
    phone: "+91-8102051183",
    location: "India",
    resumeLink: "https://example.com/resume.pdf",
    profileImage: "https://example.com/profile.jpg",
  } as PersonalDetails,

  education: [
    {
      institution: "Indian Institute of Information Technology, Una",
      degree: "B.Tech in Electronics and Communication Engineering",
      gpa: "9.00/10",
      startYear: 2022,
      endYear: 2026,
    },
    {
      institution: "Delhi Public School, Ranchi",
      degree: "Senior Secondary (CBSE)",
      percentage: "95.7%",
      startYear: 2019,
      endYear: 2021,
    },
    {
      institution: "Oxford Public School, Ranchi",
      degree: "Matriculation (CBSE)",
      percentage: "96.7%",
      endYear: 2019,
    }
  ] as Education[],

  experience: [
    {
      company: "Fluencer Digital",
      role: "Data Science and Machine Learning Intern",
      startDate: "May 2024",
      endDate: "July 2024",
      description: [
        "Developed an ML model predicting steel prices with 94% accuracy.",
        "Created an automated alert system for price drop detection, reducing losses by 4.2%.",
        "Conducted detailed analysis on steel market data to identify trends and top competitors.",
      ],
      logo: "https://ykandoi20330.github.io/fluencer-digital/static/media/Logo.ae68474872e6d257d0f3.png",
      technologies: ["Python","Excel","SQL","Machine Learning","Data Analysis"]
    },
    {
      company: "ProCapitas",
      role: "Investment Banking Intern",
      startDate: "Jan 2025",
      endDate: "Present",
      description: [
        "Assisted in preparing pitch decks, financial models, and market research reports for mergers & acquisitions.",
        "Conducted valuation analysis using DCF, comparable company analysis, and precedent transactions.",
        "Collaborated with senior analysts to evaluate startup funding opportunities and investor outreach.",
        "Supported due diligence processes and data room preparation for potential deals.",
        "Gained hands-on experience in financial strategy, equity research, and deal structuring."
      ],
      logo: "https://www.procapitas.com/assets/procapitas/procapitas.png", // Optional - replace with your asset path
      technologies: ["Excel", "PowerPoint", "Financial Modeling", "Market Research", "Valuation"]
    }
  ] as Experience[],

  projects: {
    web: [
      {
        name: "Slimnastics",
        description:
          "Full-stack gym management platform with admin dashboard, user tracking, e-commerce integration, and content engagement.",
        techStack: ["React", "Express", "MongoDB", "Node.js", "JWT"],
        demo: "https://slimnastics.vercel.app",
        github: "https://github.com/Igniter-909/Slimnastics",
        image: "/projects/gym.png"
      },
      {
        name: "Translingo - Chat App",
        description: "Real-time chat app with file sharing, cloud-based storage, and secure authentication.",
        techStack: ["React", "Socket.io", "MongoDB", "Node.js", "Multer", "Cloudinary"],
        demo: "https://translingo-mu.vercel.app",
        github: "https://github.com/Igniter-909/Translingo",
        image:"/projects/translingo.png"
      },
      {
        name: "Portfolio Website",
        description:
          "Interactive personal portfolio website with EmailJS integration, built using React and deployed via Vercel.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "EmailJS"],
        demo: "https://www.roshan909.live",
        github: "https://github.com/Igniter-909/Portfolio",
        image: "/projects/portfolio.png"
      },
    ] as WebProject[],

    mlAi: [
      {
        name: "Medical Chatbot",
        description:
          "RAG-based medical chatbot using LLaMA, Pinecone, and Hugging Face. Handled 14,000+ entries with 92% response accuracy.",
        techStack: ["Python", "Flask", "LLaMA", "Pinecone", "Hugging Face"],
        github: "https://github.com/Igniter-909/Medical_chatbot",
        image:"/projects/medical.jpeg"
      },
      {
        name: "Parking Slot Detector",
        description: "CNN-based real-time system for detecting vacant parking slots with 99% accuracy.",
        techStack: ["Python", "OpenCV", "TensorFlow"],
        github: "https://github.com/Igniter-909/Parking_slot",
        image: "/projects/carPark.jpeg"
      },
      {
        name: "Text Summarizer using Pegasus",
        description:
          "Abstractive text summarizer using Pegasus achieving ROUGE-1: 0.45. Fine-tuned on domain-specific datasets.",
        techStack: ["Python", "Hugging Face", "Pegasus"],
        github: "https://github.com/Igniter-909/text_summarizer",
        image: "/projects/summarizer.jpeg"
      },
      {
        name: "Age and Gender Prediction",
        description: "Real-time prediction system using CNN with 93.4% gender accuracy and age MSE of 14.53.",
        techStack: ["Python", "Flask", "OpenCV"],
        github: "https://github.com/Igniter-909/age_and_gender_prediction",
        image:"/projects/age.jpeg"
      },
      {
        name: "Student Score Predictor",
        description: "Flask app predicting student scores based on demographics with 88% accuracy.",
        techStack: ["Python", "Flask", "Pandas", "Sklearn"],
        demo: "https://score-prediction-0b83.onrender.com",
        image:"https://asset.cloudinary.com/dicfvq6fj/c4434ad567b92f9dcb666ea53386632e"
      },
      {
        name: "2019 Election Analysis",
        description:
          "Analyzed Indian elections using Python, SQL, and Excel to derive key voter and candidate insights.",
        techStack: ["Python", "Pandas", "Matplotlib", "SQL"],
        github: "https://github.com/Igniter-909/2019_Election_Analysis",
      },
    ] as MLProject[],
  },
  
  skills: {
    languages: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ],
    frontend: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
    ],
    backend: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" }
    ],
    databases: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB Atlas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "SQL Server", icon: "https://img.icons8.com/color/48/000000/microsoft-sql-server.png" }
    ],
    mlAi: [
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Keras", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
      { name: "OpenCV", icon: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
      { name: "Hugging Face", icon: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg" },
      { name: "Pinecone", icon: "https://avatars.githubusercontent.com/u/78027884?s=200&v=4" },
      { name: "NLP", icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-natural-language-processing-artificial-intelligence-flaticons-flat-flat-icons.png" },
      { name: "RAG", icon: "https://cdn-icons-png.flaticon.com/512/9342/9342732.png" },
      { name: "Computer Vision", icon: "https://img.icons8.com/color/48/computer-vision.png" }
    ],
    dataTools: [
      { name: "Tableau", icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
      { name: "MS Excel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/excel/excel-original.svg" },
      { name: "PowerBI", icon: "https://seeklogo.com/images/P/power-bi-logo-AFBB1CC676-seeklogo.com.png" },
      { name: "Looker Studio", icon: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_data_studio.svg" }
    ],
    tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "EmailJS", icon: "https://avatars.githubusercontent.com/u/71004742?s=200&v=4" },
      { name: "Cloudinary", icon: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1665152497/brand/Cloudinary_Logomark_Blue.svg" },
      { name: "Multer", icon: "https://raw.githubusercontent.com/expressjs/multer/master/logo.png" }
    ]
  } as Skills,

  certifications: [
    {
      title: "Data Analytics Corporate Training",
      provider: "Jobaaj Learnings",
      year: 2024,
    },
  ] as Certification[],

  achievements: [
    "Secured First Position in Coders' FaceOff Event at IIIT Una.",
    "Participated in major hackathons like HackTU 5.0 (Thapar University), Electrothon (NIT Hamirpur), and several others.",
    "Third Position in college coding contest organized by Force Club, IIIT Una.",
    "Active participant in Meraki and other college tech events.",
  ],

  socials: {
    linkedin: "https://www.linkedin.com/in/roshan-kumar-sahu-60069628a",
    github: "https://github.com/Igniter-909",
    leetcode: "https://leetcode.com/u/Igniter01",
    peerlist: "https://peerlist.io/igniter",
    portfolio: "https://www.roshan909.live",
  } as Socials,
}
