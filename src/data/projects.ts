export interface Project {
  id: string
  name: string
  tagline: string
  logo?: string
  thumbnail?: string
  status: 'completed' | 'in-progress' | 'planned'
  tags: string[]
  description: string
  whatWeLearned: string[]
  howWeBuiltIt: string
  whereWeAre: string
  whereWeAreGoing: string
  images: string[]
  websiteUrl?: string
  appUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 'aea',
    name: 'AEA',
    tagline: 'Automated Executive Assistant',
    thumbnail: '/project_logos/AEA_Logo1.png', // tight crop — swap with logo below to try the splash screen
    logo: '/project_logos/AEA_Logo2.png',
    status: 'in-progress',
    tags: ["Full Stack", "UI Design", "AI Integration", "App Dev"],
    description: 'The Automated Executive Assistant (AEA) is an intelligent productivity assistant. It integrates AI technologies to monitor and analyze user behavior during goal-oriented tasks such as studying, coding, and writing. By observing user emotions and screen activity, AEA provides valuable feedback and scheduling suggestions to optimize work efficiency and focus.',
    whatWeLearned: [],
    howWeBuiltIt: '',
    whereWeAre: 'We have reached the MVP1 phase of the project have covered the full structure',
    whereWeAreGoing: 'MVP 2: Stricter Configuration Enforcements (Blocking), More UI features, AI Enhancement',
    images: [
      '/project_snaps/AEA/Screenshot 2026-03-12 160427.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 230014.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 230028.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 230059.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 231055.png',
      '/project_snaps/AEA/Screenshot 2026-03-11 231107.png',
    ],
  },
  {
    id: 'iams',
    name: 'IAMS',
    tagline: 'Coming soon.',
    status: 'in-progress',
    tags: [],
    description: '',
    whatWeLearned: [],
    howWeBuiltIt: '',
    whereWeAre: '',
    whereWeAreGoing: '',
    images: [],
  },
  {
    id: 'deeds',
    name: 'Deeds',
    tagline: 'Coming soon.',
    status: 'in-progress',
    tags: [],
    description: '',
    whatWeLearned: [],
    howWeBuiltIt: '',
    whereWeAre: '',
    whereWeAreGoing: '',
    images: [],
  },
  {
    id: 'alamra',
    name: 'Alamra Website',
    tagline: 'Coming soon.',
    status: 'in-progress',
    tags: [],
    description: '',
    whatWeLearned: [],
    howWeBuiltIt: '',
    whereWeAre: '',
    whereWeAreGoing: '',
    images: [],
  },
  {
    id: 'kord',
    name: 'Kord Keyboard',
    tagline: 'Coming soon.',
    status: 'in-progress',
    tags: [],
    description: '',
    whatWeLearned: [],
    howWeBuiltIt: '',
    whereWeAre: '',
    whereWeAreGoing: '',
    images: [],
  },
]
