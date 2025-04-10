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
      "With a strong foundation in software development and an eye for scalable, impactful solutions, I thrive at the intersection of technology and innovation. I specialize in building end-to-end web applications and crafting intelligent systems using machine learning and deep learning techniques. From deploying production-grade full-stack platforms to designing ML models for real-world problems, I bring a problem-solving mindset and a product-oriented approach to every project I undertake.",
    email: "igniterofficial909505@gmail.com",
    phone: "+91-8102051183",
    location: "India",
    resumeLink: "https://drive.google.com/file/d/1Pk5NXCGgSIw_BtuURbFtg0lEM5riFDth/view?usp=sharing",
    profileImage: "/projects/profile.jpg",
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
        description: [
          "Full-stack gym management platform",
          "Admin dashboard with analytics and control",
          "User tracking and attendance system",
          "Integrated e-commerce for supplements and plans",
          "Blog/content section to boost user engagement"
        ],
        techStack: ["React", "Express", "MongoDB", "Node.js", "JWT"],
        demo: "https://slimnastics.vercel.app",
        github: "https://github.com/roshan3101/Slimnastics",
        image: "/projects/gym.png"
      },
      {
        name: "Translingo - Chat App",
        description: [
          "Real-time chat application using Socket.io",
          "Supports file sharing and secure messaging",
          "Cloud-based storage with Multer and Cloudinary",
          "Robust authentication and user management"
        ],
        techStack: ["React", "Socket.io", "MongoDB", "Node.js", "Multer", "Cloudinary"],
        demo: "https://translingo-mu.vercel.app",
        github: "https://github.com/roshan3101/Translingo",
        image:"/projects/translingo.png"
      },
      {
        name: "IntelliScrape",
        description: [
          "No-code platform for web automation and data scraping",
          "Visual workflow builder with drag-and-drop UI",
          "Supports multiple task types and API integration",
          "Scheduled executions, real-time monitoring, credit system",
          "Secure credential management and detailed analytics"
        ],
        techStack: ["React", "Node.js", "Prisma", "SQLite", "Tailwind CSS"],
        demo: "https://intelliscrape.vercel.app",
        github: "https://github.com/roshan3101/IntelliScrape",
        image: "/projects/intelliscrape.png"
      },
      {
        "name": "ShadowNet",
        "description": [
          "Cybersecurity platform for detecting APT (Advanced Persistent Threat) attacks, phishing attempts, and zero-day vulnerabilities.",
          "Performs deep network scans, intrusion detection, and anomaly analysis using machine learning.",
          "Provides a real-time dashboard with visualizations of threats, alerts, and system logs.",
          "Implements modules for packet capture, protocol inspection, and threat intelligence integration.",
        ],
        "techStack": ["Python", "Scapy", "React", "Flask", "Machine Learning", "Nmap", "Socket Programming"],
        "github": "https://github.com/roshan3101/HackTU_AI",
        "image": "/projects/shadownet.png"
      }      
    ] as WebProject[],

    mlAi: [
      {
        name: "Medical Chatbot",
        description: [
          "RAG-based chatbot for medical queries",
          "Integrated LLaMA with Pinecone and Hugging Face",
          "Handled 14,000+ queries with 92% response accuracy",
          "Optimized for low-latency and relevant answers"
        ],
        techStack: ["Python", "Flask", "LLaMA", "Pinecone", "Hugging Face"],
        github: "https://github.com/roshan3101/Medical_chatbot",
        image:"/projects/medical.jpeg"
      },
      {
        name: "Parking Slot Detector",
        description: [
          "CNN-based detection of available parking slots",
          "99% accuracy using real-time video streams",
          "Optimized for smart city and IoT systems"
        ],
        techStack: ["Python", "OpenCV", "TensorFlow"],
        github: "https://github.com/roshan3101/Parking_slot",
        image: "/projects/carPark.jpeg"
      },
      {
        name: "Text Summarizer using Pegasus",
        description: [
          "Abstractive summarization using fine-tuned Pegasus model",
          "Trained on domain-specific datasets",
          "Achieved ROUGE-1 score of 0.45",
          "Designed for documents, blogs, and articles"
        ],
        techStack: ["Python", "Hugging Face", "Pegasus"],
        github: "https://github.com/roshan3101/text_summarizer",
        image: "/projects/summarizer.jpeg"
      },
      {
        name: "Age and Gender Prediction",
        description: [
          "Real-time CNN model for predicting age and gender",
          "Gender prediction accuracy of 93.4%",
          "Mean squared error of 14.53 for age",
          "Webcam-based inference using OpenCV"
        ],
        techStack: ["Python", "Flask", "OpenCV"],
        github: "https://github.com/roshan3101/age_and_gender_prediction",
        image:"/projects/age.jpeg"
      }
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
      title: "AI Accelera's 2024 Bootcamp: Generative AI, LLM Apps, AI Agents, Cursor AI",
      provider: "AI Accelera",
      year: 2024,
    },
    {
      title: "Hitesh Choudhary - Complete Full Stack Web Development Course",
      provider: "Hitesh Choudhary",
      year: 2025,
    },
    {
      title: "Data Analytics Corporate Training",
      provider: "Jobaaj Learnings",
      year: 2024,
    },
  ] as Certification[],

  achievements: [
    "Secured First Position in Coders' FaceOff Event at IIIT Una.",
    "Participated in major hackathons like HackTU 5.0 (Thapar University), Electrothon (NIT Hamirpur), HackTheHills (IIIT Una) and several others.",
    "4 Star coder at CodeChef",
    "Third Position in college coding contest organized by Force Club, IIIT Una.",
  ],

  socials: {
    linkedin: "https://www.linkedin.com/in/roshan-kumar-sahu-60069628a",
    github: "https://github.com/roshan3101",
    leetcode: "https://leetcode.com/u/Igniter01",
    peerlist: "https://peerlist.io/igniter",
    portfolio: "https://main.d3jkcgtx1ye59b.amplifyapp.com",
    resume: "https://drive.google.com/file/d/1Pk5NXCGgSIw_BtuURbFtg0lEM5riFDth/view?usp=sharing",
  } as Socials,
}
