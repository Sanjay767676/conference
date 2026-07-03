import { ConferenceTrack, TimelineEvent, PricingTier } from "./types";

export const CONFERENCE_TRACKS: ConferenceTrack[] = [
  {
    id: "track-1",
    title: "Artificial Intelligence & Intelligent Systems",
    description: "Generative AI, Large Language Models, Multimodal Architectures, Reinforcement Learning, Explainable AI, and Computational Optimization.",
    iconName: "BrainCircuit",
    details: ["Generative AI & LLMs", "Multimodal Architectures", "Reinforcement Learning", "Explainable & Trustworthy AI"]
  },
  {
    id: "track-2",
    title: "Machine Learning & Advanced Analytics",
    description: "Supervised & Unsupervised Learning, Transfer Learning, AutoML, Time-Series Analysis, and Feature Engineering.",
    iconName: "Cpu",
    details: ["Supervised & Unsupervised Learning", "Transfer Learning", "AutoML", "Time-Series Analysis"]
  },
  {
    id: "track-3",
    title: "Data Science & Decision Intelligence",
    description: "Real-Time Streaming Analytics, Data Visualization, Decision Intelligence Systems, Privacy Frameworks, and AI for Business.",
    iconName: "BarChart",
    details: ["Streaming Data Analytics", "Data Visualization", "Decision Intelligence", "AI for Business"]
  },
  {
    id: "track-4",
    title: "IoT, Edge Computing & Embedded Systems",
    description: "AI-Enabled IoT, Edge AI, TinyML, Sensor Networks, Embedded Systems, and Collaborative Architectures.",
    iconName: "Network",
    details: ["AI-Enabled IoT", "Edge AI & TinyML", "Sensor Networks", "Embedded Systems"]
  },
  {
    id: "track-5",
    title: "Communication Systems & Network Technologies",
    description: "5G/6G Networks, Wireless Communication, Optical Systems, RF Microwave Engineering, and Satellite Technologies.",
    iconName: "Wifi",
    details: ["5G/6G Networks", "Wireless Communication", "Optical Systems", "Satellite Technologies"]
  },
  {
    id: "track-6",
    title: "Cybersecurity & Secure Computing",
    description: "AI-Driven Threat Detection, Intrusion Detection, Digital Forensics, Zero-Trust Architectures, and Secure Cloud Computing.",
    iconName: "Shield",
    details: ["AI-Driven Cybersecurity", "Intrusion Detection", "Digital Forensics", "Zero-Trust Architectures"]
  },
  {
    id: "track-7",
    title: "Robotics, Automation & Smart Industry",
    description: "Autonomous Robots, Robotics Vision, Motion Planning, Smart Manufacturing (Industry 4.0), and Digital Twins.",
    iconName: "Bot",
    details: ["Autonomous Robots", "Robotics Vision", "Smart Manufacturing", "Digital Twins"]
  },
  {
    id: "track-8",
    title: "Emerging Technologies, Sustainability & AI Management",
    description: "Quantum Computing, Blockchain, Metaverse, AI for Sustainable Energy, and Digital Transformation.",
    iconName: "Globe",
    details: ["Quantum Computing", "Blockchain Technologies", "Metaverse & AR/VR", "AI for Sustainable Energy"]
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "time-1",
    title: "Paper Submission Deadline",
    date: "October 16, 2026",
    description: "Strictly enforced final date for original research submissions.",
    isCompleted: false
  },
  {
    id: "time-2",
    title: "Acceptance Notification",
    date: "October 20, 2026",
    description: "Acceptance notifications and detailed reviewer feedback dispatched.",
    isCompleted: false
  },
  {
    id: "time-3",
    title: "Early Bird Registration",
    date: "October 22, 2026",
    description: "Deadline to avail the discounted registration rates.",
    isCompleted: false
  },
  {
    id: "time-4",
    title: "Late Registration",
    date: "October 23-28, 2026",
    description: "Standard late registration period.",
    isCompleted: false
  },
  {
    id: "time-5",
    title: "Final Manuscript Notification",
    date: "November 02, 2026",
    description: "Notification for final camera-ready manuscript acceptance.",
    isCompleted: false
  },
  {
    id: "time-6",
    title: "Conference Dates (ICAIDIET'26)",
    date: "November 20-21, 2026",
    description: "Opening keynote, presentation tracks, and networking.",
    isCompleted: false
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "fee-1",
    title: "Author (Indian)",
    category: "author",
    audience: "Indian authors presenting approved research papers",
    priceInternational: "-",
    priceNational: "₹2,000 - ₹11,000",
    features: [
      "Early Bird (Conference alone): ₹2,000",
      "Early Bird (With Scopus proceedings): ₹10,000",
      "Late Fee (Conference alone): ₹2,500",
      "Late Fee (With Scopus proceedings): ₹11,000",
      "Official presentation certificate",
      "Networking dinner & tea breaks included"
    ]
  },
  {
    id: "fee-2",
    title: "Author (Foreign)",
    category: "author",
    audience: "International authors presenting approved research papers",
    priceInternational: "$350 - $400",
    priceNational: "-",
    features: [
      "Early Bird: $350",
      "Late Fee: $400",
      "Scopus-indexed conference book proceedings",
      "Official presentation certificate",
      "Networking dinner & tea breaks included"
    ]
  },
  {
    id: "fee-3",
    title: "Industry Delegates",
    category: "attendee",
    audience: "Industry professionals attending the conference",
    priceInternational: "-",
    priceNational: "₹11,000 - ₹12,000",
    features: [
      "Early Bird: ₹11,000",
      "Late Fee: ₹12,000",
      "Keynote panels & roundtables admission",
      "Official participation certificate",
      "Gala networking dinner entry",
      "Daily lunch & high tea"
    ]
  }
];

export const PARTNERS = [
  { name: "WILEY", logoUrl: "https://api.iconify.design/logos:wiley.svg?height=28" },
  { name: "YORKVILLE UNIVERSITY", logoUrl: "https://api.iconify.design/academicons:crossref.svg?height=32&color=64748b" },
  { name: "IEEE", logoUrl: "https://api.iconify.design/simple-icons:ieee.svg?height=30&color=006699" },
  { name: "SPRINGER", logoUrl: "https://api.iconify.design/simple-icons:springer.svg?height=28&color=001c3d" },
  { name: "ACADEMY OF SCIENCES", logoUrl: "https://api.iconify.design/academicons:open-access.svg?height=30&color=64748b" }
];
