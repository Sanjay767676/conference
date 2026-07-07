import { motion } from "motion/react";
import { ArrowRight, FileText, Globe2, Calendar } from "lucide-react";
import wileyLogo from "../../assets/images/wiley.png";
import yorkLogo from "../../assets/images/york.jpg";
import CircularText from "./ui/CircularText";
import { AuroraText } from "./ui/AuroraText";
interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  const handleScrollToTimeline = () => {
    const target = document.querySelector("#timeline");
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-8 md:pt-40 md:pb-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-120 h-120 bg-amber-400/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center items-center">
        {/* Main Badge */}

        {/* Circular Text Decoration */}
        <div className="hidden lg:flex absolute -right-[260px] top-[10px] z-20 items-center justify-center pointer-events-auto opacity-70 hover:opacity-100 transition-opacity">
          <CircularText
            text="ICAIDIET'26*CONFERENCE*"
            onHover="speedUp"
            spinDuration={20}
            className="text-primary font-gambetta tracking-wider"
          />
        </div>


        {/* Event Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-4 text-5xl md:text-6xl font-display font-black tracking-widest uppercase"
        >
          <AuroraText className="font-black font-gambetta tracking-wider">ICAIDIET'26</AuroraText>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
          className="font-display font-bold text-center tracking-tight text-brand-dark leading-[1.1] max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8"
          id="hero-title"
        >
          <span className="block mb-0">AI-Driven Innovation in</span>
          <span className="block text-brand-dark">Engineering and Technology</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-slate-600 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed mb-10"
          id="hero-description"
        >
          Join leading global researchers, practitioners, and educators to explore the
          latest trends and breakthroughs at the intersection of AI, Engineering,
          and modern technology frameworks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 w-full px-4 sm:px-8 md:w-auto mb-16 mx-auto"
          id="hero-actions"
        >
          <button
            onClick={onRegisterClick}
            className="w-full md:w-auto px-8 py-4 bg-brand-dark text-white font-semibold rounded-xl text-sm hover:bg-opacity-95 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-slate-900/15 flex items-center justify-center gap-2 group"
          >
            Register Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleScrollToTimeline}
            className="w-full md:w-auto px-8 py-4 bg-white text-slate-700 hover:text-brand-dark font-semibold rounded-xl text-sm border border-slate-200 hover:border-slate-300 transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group"
          >
            <FileText className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
            Submission Guidelines
          </button>
        </motion.div>

        {/* Highlighted quick badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl w-full border border-slate-100 bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm mb-16"
          id="hero-quick-facts"
        >
          <div className="flex items-center gap-3.5 pl-2 md:border-r border-slate-100">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-semibold">
                When
              </span>
              <span className="text-sm font-semibold text-brand-dark">
                Nov 20-21, 2026
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pl-2 md:pl-4 md:border-r border-slate-100">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-500 flex-shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-semibold">
                Format
              </span>
              <span className="text-sm font-semibold text-brand-dark">
                Hybrid Mode
              </span>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center gap-3.5 pl-2 md:pl-4 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-semibold">
                Proceedings
              </span>
              <span className="text-sm font-semibold text-brand-dark">
                Indexed in Wiley / Scopus
              </span>
            </div>
          </div>
        </motion.div>

        {/* Publication & Academic Partners */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full max-w-4xl flex flex-col items-center justify-center mt-4"
        >
          <span className="text-xs tracking-[0.15em] font-mono text-slate-500 font-semibold mb-8 uppercase text-center">
            Publication & Academic Partners
          </span>
          <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24">
            <img src={wileyLogo} alt="Wiley" className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" />
            <img src={yorkLogo} alt="Yorkville University" className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
