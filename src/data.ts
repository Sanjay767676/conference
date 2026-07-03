import { ConferenceTrack, TimelineEvent, PricingTier } from "./types";

export const CONFERENCE_TRACKS: ConferenceTrack[] = [
  {
    id: "track-1",
    title: "Generative AI & LLMs",
    description: "Explore custom architectures, Retrieval-Augmented Generation (RAG) systems, parameter-efficient fine-tuning, and robust prompt engineering frameworks.",
    iconName: "BrainCircuit",
    details: ["Large Language Models", "Diffusion & Image Synthesis", "RAG & Knowledge Graphs", "Reinforcement Learning (RLHF)"]
  },
  {
    id: "track-2",
    title: "Deep Learning Systems",
    description: "Focus on multi-layer transformer optimizations, neural ordinary differential equations (ODEs), and scale-up training infrastructures.",
    iconName: "Cpu",
    details: ["Transformer Optimizations", "Graph Neural Networks", "Optimization Algorithms", "Federated Learning"]
  },
  {
    id: "track-3",
    title: "Pattern Recognition & Vision",
    description: "Investigate modern computer vision frameworks, high-precision biometrics, multi-modal semantic search, and object parsing algorithms.",
    iconName: "Eye",
    details: ["Image & Video Segmentation", "Multi-modal Scene Parsing", "Object Detection & Tracking", "Biometrics & Face Recognition"]
  },
  {
    id: "track-4",
    title: "Edge AI & Distributed Systems",
    description: "Design ultra-lightweight neural models, on-device training, low-latency pruning techniques, and specialized hardware compiler stacks.",
    iconName: "Network",
    details: ["Model Pruning & Quantization", "On-device Inference", "Mobile & Wearable Sensing", "Decentralized Edge Stacks"]
  },
  {
    id: "track-5",
    title: "Smart Infrastructure & IoT",
    description: "Apply machine learning to critical power systems, microgrids, adaptive traffic systems, and resilient smart city sensor fabrics.",
    iconName: "Server",
    details: ["Smart City Orchestration", "Intelligent Power Grids", "Automated Fleet Routing", "Sensing Networks & GIS"]
  },
  {
    id: "track-6",
    title: "Autonomous Systems & Robotics",
    description: "Examine robust navigation, visual SLAM, collaborative multi-agent reinforcement learning, and safety-critical control laws.",
    iconName: "Navigation",
    details: ["Visual SLAM & LiDAR Maps", "Multi-Agent Coordination", "Human-Robot Interaction", "Drone Flight Kinematics"]
  },
  {
    id: "track-7",
    title: "Neuromorphic Design & Hardware",
    description: "Optimize neuromorphic computing architectures, in-memory compute blocks, analog accelerators, and quantum-assisted learning engines.",
    iconName: "Microchip",
    details: ["Silicon Neuromorphic Chips", "In-Memory Compute Blocks", "TPU & GPU Compilation", "Quantum Machine Learning"]
  },
  {
    id: "track-8",
    title: "Explainable AI & Ethics",
    description: "Establish mathematical framework interpretability, bias mitigation strategies, data compliance, and human-in-the-loop validation.",
    iconName: "ShieldAlert",
    details: ["Shapley Value Interpretations", "Algorithmic Bias Auditing", "AI Policy & EU Compliance", "Human-in-the-Loop Safeguards"]
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "time-1",
    title: "Paper Submission Portal Opens",
    date: "June 15, 2026",
    description: "Authors are invited to submit original, unpublished research papers via our EasyChair portal.",
    isCompleted: true
  },
  {
    id: "time-2",
    title: "Full Paper Submission Deadline",
    date: "August 30, 2026",
    description: "Strictly enforced final date for original research submissions. No extensions will be granted.",
    isCompleted: false
  },
  {
    id: "time-3",
    title: "Peer-Review Decisions Dispatched",
    date: "September 25, 2026",
    description: "Acceptance notifications, detailed reviewer feedback, and camera-ready templates emailed.",
    isCompleted: false
  },
  {
    id: "time-4",
    title: "Early Bird Registration Gate Closes",
    date: "October 15, 2026",
    description: "Heavily discounted registration rates end. All authors must register by this date to guarantee indexing.",
    isCompleted: false
  },
  {
    id: "time-5",
    title: "Final Registration Gates Close",
    date: "November 05, 2026",
    description: "Late registrations close for session layout planning, badge printing, and dinner bookings.",
    isCompleted: false
  },
  {
    id: "time-6",
    title: "Conference Proceedings (AIET 2026)",
    date: "November 20-21, 2026",
    description: "Opening keynote, 8 presentation tracks, panel debates, and the grand networking gala.",
    isCompleted: false
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "fee-1",
    title: "Student Author",
    category: "author",
    audience: "Undergraduate / Postgraduate / PhD presenting authors",
    priceInternational: "$150",
    priceNational: "₹12,000",
    features: [
      "Present up to 1 approved paper",
      "Full access to all 8 conference tracks",
      "Digital proceedings indexing & DOI issuance",
      "Official presentation certificate",
      "Networking dinner & tea breaks included"
    ]
  },
  {
    id: "fee-2",
    title: "Regular Author",
    category: "author",
    audience: "Academic researchers, faculty, and industry scientists presenting authors",
    priceInternational: "$250",
    priceNational: "₹18,000",
    features: [
      "Present up to 2 approved papers",
      "Full access to all 8 conference tracks",
      "Digital proceedings indexing & DOI issuance",
      "Official presentation certificate",
      "Premium printed conference kit",
      "Networking dinner & tea breaks included"
    ]
  },
  {
    id: "fee-3",
    title: "Student Participant",
    category: "attendee",
    audience: "Undergrad/Grad students attending for knowledge & workshops",
    priceInternational: "$80",
    priceNational: "₹5,000",
    features: [
      "Full attendee access to all sessions",
      "Interactive workshop sessions admission",
      "Official attendance certificate",
      "Digital conference folder materials",
      "Daily lunch & high tea"
    ]
  },
  {
    id: "fee-4",
    title: "Professional Participant",
    category: "attendee",
    audience: "Academic faculty, general delegates, and industry attendees",
    priceInternational: "$120",
    priceNational: "₹9,500",
    features: [
      "Full attendee access to all sessions",
      "Keynote panels & roundtables admission",
      "Official participation certificate",
      "Premium printed conference kit",
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
