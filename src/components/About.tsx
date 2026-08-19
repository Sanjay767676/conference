import { motion } from "motion/react";
import { Cpu, Globe2, Sparkles, Trophy } from "lucide-react";
import GlassSurface from "./ui/GlassSurface";

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
    <section id="about" className="py-16 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

          {/* Text Details */}
          <div className="flex flex-col items-center" id="about-info-col">
            <div className="font-display font-bold text-2xl sm:text-3xl text-brand-dark tracking-tight leading-tight">
              <span className="font-gambetta tracking-wide font-bold text-brand-dark">About The Conference</span>
            </div>

            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-dark tracking-tight leading-tight mb-4" id="about-title">
              Bridging Global Research with Next-Gen Intelligence
            </h2>

            <p className="text-brand-dark text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
              The International Conference on <strong>AI-Driven Innovation in Engineering and Technology (<span className="font-gambetta tracking-wide">ICAIDIET'26</span>)</strong> is a global platform that brings together researchers, academicians, industry experts, and innovators to explore the latest advancements in Artificial Intelligence and emerging technologies
            </p>

            <p className="text-brand-dark text-sm sm:text-base leading-relaxed mb-10 max-w-3xl">
              The conference promotes innovation, collaboration, and knowledge sharing through keynote sessions, technical paper presentations, and expert discussions. Hosted by SNS College of Technology in collaboration with Yorkville University, Canada, ICAIDIET'26 aims to inspire research excellence and foster intelligent, sustainable solutions for real-world challenges.
            </p>

            {/* Structured benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left" id="about-highlights-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="h-full">
                  <div className="w-full h-full bg-[#ffbf00] rounded-2xl shadow-sm transition-transform hover:-translate-y-1">
                    <div className="flex flex-col items-start p-6 w-full h-full">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4 shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-semibold text-base text-brand-dark mb-2 text-left">{item.title}</h4>
                      <p className="text-slate-950 font-medium text-sm leading-relaxed text-left">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
