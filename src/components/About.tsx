import { motion } from "motion/react";
import { Check, Cpu, Globe2, Sparkles, Trophy } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Double-Blind Peer Review",
      desc: "All submissions undergo rigorous, objective double-blind review by international experts.",
      icon: Cpu,
    },
    {
      title: "Scopus & Wiley Indexing",
      desc: "Accepted papers will be compiled and submitted for inclusion in Wiley and Scopus indexed proceedings.",
      icon: Trophy,
    },
    {
      title: "Hybrid Presentation Format",
      desc: "Present your research on-site at the main campus or stream globally through high-fidelity digital streams.",
      icon: Globe2,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Details */}
          <div className="lg:col-span-7 flex flex-col items-start" id="about-info-col">
            <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>About the Conference</span>
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight mb-6" id="about-title">
              Bridging Global Research with Next-Gen Intelligence
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              The International Conference on <strong>AI-Driven Innovation in Engineering and Technology (AIET 2026)</strong> is the premier global forum for sharing pioneering breakthroughs at the intersection of neural networks, cyber-physical architectures, and distributed systems.
            </p>
            
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
              We bring together world-class researchers, academic professors, and leading industry engineers to discuss deep learning, edge systems, smart grids, and computer vision. Our agenda includes curated peer presentations, keynotes, and high-energy developer panels designed to fast-track research collaboration.
            </p>

            {/* Structured benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full" id="about-highlights-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm text-brand-dark mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Glass Architectural Feature */}
          <div className="lg:col-span-5 relative" id="about-visual-col">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            
            <div className="relative border border-slate-100 bg-slate-50 p-6 rounded-3xl shadow-md overflow-hidden aspect-square flex flex-col justify-between">
              {/* Abstract High-Tech Blueprint Background */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
              
              {/* Glass Panels drawing of a Building */}
              <div className="relative w-full h-full flex items-center justify-center min-h-[260px]">
                {/* SVG Architecture Outline */}
                <svg className="w-5/6 h-5/6 text-slate-300 drop-shadow-sm" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <line x1="50" y1="350" x2="350" y2="350" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50" y1="50" x2="50" y2="350" stroke="#E2E8F0" strokeWidth="1" />
                  <line x1="200" y1="50" x2="200" y2="350" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="350" y1="50" x2="350" y2="350" stroke="#E2E8F0" strokeWidth="1" />

                  {/* Modern Glass Building Shape */}
                  {/* Panel 1 */}
                  <rect x="80" y="150" width="100" height="200" rx="8" fill="url(#glass-gradient-1)" stroke="#1A68FF" strokeWidth="1.5" strokeOpacity="0.4" />
                  {/* Panel 2 */}
                  <rect x="150" y="80" width="120" height="270" rx="12" fill="url(#glass-gradient-2)" stroke="#1A68FF" strokeWidth="2" strokeOpacity="0.6" className="backdrop-blur-sm" />
                  {/* Panel 3 */}
                  <rect x="240" y="190" width="80" height="160" rx="8" fill="url(#glass-gradient-3)" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.5" />

                  {/* Grid diagonals (futuristic styling) */}
                  <path d="M150 80 L270 350 M80 350 L180 150 M240 350 L320 190" stroke="#1A68FF" strokeWidth="1" strokeOpacity="0.15" />

                  {/* Data Points */}
                  <circle cx="150" cy="80" r="4" fill="#1A68FF" />
                  <circle cx="270" cy="80" r="4" fill="#1A68FF" />
                  <circle cx="240" cy="190" r="3.5" fill="#FBBF24" />
                  <circle cx="80" cy="150" r="3.5" fill="#1A68FF" />

                  {/* Glow lines */}
                  <line x1="150" y1="80" x2="200" y2="50" stroke="#1A68FF" strokeWidth="1" strokeOpacity="0.4" />
                  <line x1="270" y1="80" x2="200" y2="50" stroke="#1A68FF" strokeWidth="1" strokeOpacity="0.4" />
                  <circle cx="200" cy="50" r="6" fill="#1A68FF" fillOpacity="0.2" />
                  <circle cx="200" cy="50" r="2.5" fill="#1A68FF" />

                  {/* Gradient Definitions */}
                  <defs>
                    <linearGradient id="glass-gradient-1" x1="130" y1="150" x2="130" y2="350" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1A68FF" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#1A68FF" stopOpacity="0.01" />
                    </linearGradient>
                    <linearGradient id="glass-gradient-2" x1="210" y1="80" x2="210" y2="350" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1A68FF" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#1A68FF" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="glass-gradient-3" x1="280" y1="190" x2="280" y2="350" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.01" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Animated Particles floating */}
                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-24 left-1/4 w-2 h-2 rounded-full bg-primary"
                />
                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute top-44 right-1/4 w-1.5 h-1.5 rounded-full bg-amber-400"
                />
              </div>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
