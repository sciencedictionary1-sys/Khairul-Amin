import { BiographyData } from './types';

export const biographyData: BiographyData = {
  identity: {
    name: "Khairul Amin",
    tagline: "My Story • My Journey • My Vision",
    introduction: "Welcome to my personal biography website. This is a place where I share my story, journey, interests, creative work, projects, and vision for the future.",
    profilePhotoUrl: "/profile.jpg", // Leave empty for placeholder
    logoUrl: "/rok-logo.png", // Add your logo image path here (e.g., "/logo.png")
  },
  quickFacts: [
    { label: "Name", value: "Khairul Amin" },
    { label: "Focus", value: "Technology • Creativity • Learning" },
    { label: "Interests", value: "AI • Programming • Art" },
    { label: "Role", value: "Student • Creator • Developer" },
  ],
  about: {
    text1: "Khairul Amin is a student, artist, creator, designer, and technology enthusiast. He is passionate about creativity and technology and enjoys turning ideas into real projects. His interests include science, technology, artificial intelligence, robotics, design, digital creativity, and software development.",
    text2: "His journey combines education, creativity, technology, and determination. What should people remember about him? \"I want people to remember who I am, what I can do, and what I can create.\" He is not defined only by where he started, but also by what he is learning, creating, and working toward.",
  },
  story: [
    { chapter: "01", title: "My Beginning", content: "My journey began in Myanmar, where I completed Kindergarten (KG) in a Myanmar school. This was the beginning of my education and the first chapter of my journey." },
    { chapter: "02", title: "Starting Again", content: "After coming to Bangladesh, I continued my education at GIFTING HUMANITY Learning Center, beginning from Class 1. Starting my education again in a different environment became an important part of my journey." },
    { chapter: "03", title: "Challenges Along the Way", content: "My journey has included challenges in education and access to opportunities, but those challenges have also encouraged me to keep learning and moving forward." },
    { chapter: "04", title: "Discovering Robotics & AI", content: "One important turning point in my journey was participating in a TIKA training program focused on robotics and artificial intelligence. Through this training, I was introduced to new ideas in technology. It helped me become more interested in Robotics, Artificial intelligence, Technology, Programming, and Creating things with technology." },
    { chapter: "05", title: "Becoming a Creator", content: "After completing the TIKA training, my interest in technology grew stronger. Instead of only learning about technology, I became interested in building my own projects. One of the projects I started developing was Science Dictionary Pro. It represents the moment when my interest in technology began turning into something I could build and share with others." },
  ],
  journey: [
    { year: "Myanmar", title: "KG Education", description: "Completed Kindergarten in a Myanmar school, starting my educational journey." },
    { year: "Bangladesh", title: "GIFTING HUMANITY", description: "Continued education starting from Class 1 at GIFTING HUMANITY Learning Center." },
    { year: "Challenges", title: "Continuing Education", description: "Faced challenges in education and access to opportunities, which encouraged me to keep learning and moving forward." },
    { year: "TIKA", title: "Robotics & AI Training", description: "Discovering a Passion for Technology through TIKA training program focused on robotics and AI." },
    { year: "Creator", title: "Science Dictionary Pro", description: "Started developing Science Dictionary Pro, stepping into my journey as a technology creator." },
    { year: "Future", title: "Continuing My Journey", description: "Always learning, building, and moving forward." },
  ],
  experience: [
    {
      id: "exp-1",
      icon: "🤖",
      title: "TIKA Robotics & AI Training",
      description: "An important training experience where I learned about robotics, AI, coding, and practical technology projects.",
      period: "2022",
      learned: [
        "Robotics",
        "Coding",
        "AI",
        "Practical technology projects"
      ],
      skills: ["Robotics", "Python", "Hardware Integration", "Problem Solving"]
    },
    {
      id: "exp-2",
      icon: "💻",
      title: "Programming & Coding",
      description: "After completing my robotics and AI training, I became interested in programming and started learning through AI tools and online resources.",
      period: "2022 - Present",
      learned: [
        "Web development",
        "Prompt engineering",
        "AI-assisted programming"
      ],
      skills: ["HTML", "Python", "Firebase", "AI Tools"]
    },
    {
      id: "exp-3",
      icon: "🔬",
      title: "Science Dictionary Pro",
      description: "One of the technology projects I began developing after becoming interested in programming and software.",
      period: "2023 - Present",
      learned: [
        "End-to-end application development",
        "Integrating AI features into practical applications",
        "User experience design for educational tools"
      ],
      skills: ["React", "TypeScript", "AI Integration", "Product Design"]
    },
    {
      id: "exp-4",
      icon: "🎨",
      title: "Art & Design",
      description: "Creative work and design are an important part of my identity as an artist, creator, and designer.",
      period: "Ongoing",
      learned: [
        "Visual design",
        "Digital art",
        "Creative expression"
      ],
      skills: ["Drawing", "Digital Art", "Visual Design"]
    }
  ],
  education: [
    { institution: "Myanmar School", level: "Kindergarten (KG)", period: "", description: "The beginning of my education and the first chapter of my journey." },
    { institution: "GIFTING HUMANITY Learning Center", level: "Class 1 and onwards", period: "", description: "Started my education again in a different environment, continuing despite challenges." }
  ],
  technologyJourney: {
    sections: [
      {
        title: "My First Step Into Technology",
        content: [
          "My journey into programming and coding began after completing the TIKA robotics and AI training.",
          "Before that training, I was interested in technology, but the training gave me an opportunity to experience technology through practical projects.",
          "After completing the training, I became more curious about how software and technology are built. That curiosity encouraged me to start learning programming and coding with the help of AI tools and online resources."
        ]
      },
      {
        title: "What I Am Learning",
        content: ["As I continue my technology journey, I have worked with and explored:"],
        list: ["HTML", "Python", "Firebase", "Google AI Studio", "AI-assisted programming and development"],
        quote: "I am still learning these technologies and improving my skills through practical projects."
      },
      {
        title: "What I Learned From TIKA",
        content: [
          "During my TIKA robotics and AI training, I learned practical concepts related to robotics and technology.",
          "I learned how to build robots and how technology can be designed to help people and improve safety.",
          "Some of the projects and concepts I learned about included:"
        ],
        projects: [
          { icon: "🔥", name: "Fire Safety Project", desc: "A robotics/technology project designed around detecting or responding to fire-related situations." },
          { icon: "💧", name: "Water Tank Measurement", desc: "A project involving the measurement of water levels in tanks." },
          { icon: "🛡️", name: "Technology for Safety", desc: "I also learned about essential features that can be used for security and to help humans." }
        ],
        quote: "The training helped me understand that technology is not only about computers—it can also be used to solve real-world problems and help people."
      },
      {
        title: "From Robotics to Software",
        content: [
          "One of the most important changes in my journey happened after the TIKA training.",
          "During the robotics training, I had to work with coding to create projects. My trainers guided me through the process and helped me understand how code can control and operate technology.",
          "While working on these projects, I became curious about other types of programming.",
          "I started seeing code and development resources online and became interested in understanding how applications could be created.",
          "That curiosity eventually led me to start working on my own software projects.",
          "This was an important turning point:"
        ],
        quote: "Robotics introduced me to coding. Coding introduced me to software. Software introduced me to creating my own projects."
      }
    ],
    timeline: [
      { icon: "🤖", title: "TIKA Robotics & AI Training" },
      { icon: "🧩", title: "Learning How Coding Works" },
      { icon: "💻", title: "Becoming Interested in Programming" },
      { icon: "🌐", title: "Exploring HTML & Online Resources" },
      { icon: "🐍", title: "Learning Python" },
      { icon: "🔥", title: "Exploring Firebase" },
      { icon: "✨", title: "Exploring Google AI Studio" },
      { icon: "💡", title: "Developing My Own Ideas" },
      { icon: "🔬", title: "Starting Science Dictionary Pro" }
    ]
  },
  skills: [
    { category: "Technology", items: ["Web development", "App development", "Programming", "Digital tools"] },
    { category: "Artificial Intelligence", items: ["AI tools", "Prompt engineering", "AI-assisted creativity", "Robotics"] },
    { category: "Creativity", items: ["Drawing", "Digital art", "Visual design"] },
  ],
  projects: [
    { name: "Science Dictionary Pro", category: "Technology / Education", description: "A project representing the moment when my interest in technology turned into something I could build and share with others.", status: "In development", link: "", imageUrl: "" },
    { name: "Sentence Pattern Pro", category: "Language / Technology", description: "Language technology project.", status: "In development", link: "", imageUrl: "/sentence-pattern-pro-logo.png" },
  ],
  artwork: [], // Empty to trigger "Coming Soon" empty state
  achievements: [], // Empty to trigger placeholder
  gallery: [], // Empty to trigger placeholder
  vision: [
    "I believe that creativity, technology, knowledge, and determination can open new possibilities.",
    "My journey is still continuing, and I hope to keep creating, learning, building, and contributing something meaningful through my work."
  ],
  contactInformation: {
    email: "mr.khairulamin786@gmail.com",
    phone: "01893976687",
    whatsapp: "+8801830003961",
    facebook: "https://www.facebook.com/share/1Lvjzi2fPm/",
    youtube: "https://www.youtube.com/@KhairulAmin1492",
    instagram: "https://www.instagram.com/khairul.251455?igsh=bHBna3B2bXY2M21k",
    github: "",
    website: "",
    other: ""
  },
  socialLinks: {
    facebook: "",
    youtube: "",
    instagram: "",
    github: "",
    linkedin: ""
  }
};
