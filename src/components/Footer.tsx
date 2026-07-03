import React from "react";
import { BrainCircuit, Mail, MapPin, Linkedin, Twitter, Facebook, Globe, MessageSquare } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-brand-dark text-slate-400 border-t border-white/5 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative radial gradient */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1 - Brand & Address (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4" id="footer-col-1">
            <div className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary to-amber-400 p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-[7px] bg-brand-dark flex items-center justify-center">
                  <BrainCircuit className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="font-display font-bold text-base text-white tracking-tight">
                AIET <span className="text-primary">2026</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs mt-2">
              International Conference on AI-Driven Innovation in Engineering and Technology. Unifying researchers, academia, and industry leaders under hybrid digital proceeds.
            </p>

            <div className="flex flex-col gap-2.5 mt-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Executive Plaza Tower, New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:registry@aiet2026.org">registry@aiet2026.org</a>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links (2.5 cols) */}
          <div className="lg:col-span-2.5 flex flex-col items-start gap-4" id="footer-col-2">
            <h4 className="text-xs font-bold uppercase tracking-widest font-mono text-white">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="hover:text-white transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="hover:text-white transition-colors">
                  Conference Objective
                </a>
              </li>
              <li>
                <a href="#tracks" onClick={(e) => handleScrollTo(e, "#tracks")} className="hover:text-white transition-colors">
                  Academic Tracks
                </a>
              </li>
              <li>
                <a href="#timeline" onClick={(e) => handleScrollTo(e, "#timeline")} className="hover:text-white transition-colors">
                  Key Deadlines
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleScrollTo(e, "#pricing")} className="hover:text-white transition-colors">
                  Registration Fees
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources (2.5 cols) */}
          <div className="lg:col-span-2.5 flex flex-col items-start gap-4" id="footer-col-3">
            <h4 className="text-xs font-bold uppercase tracking-widest font-mono text-white">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a href="#timeline" onClick={(e) => handleScrollTo(e, "#timeline")} className="hover:text-white hover:underline transition-colors">
                  Manuscript Templates (.docx / LaTeX)
                </a>
              </li>
              <li>
                <a href="#timeline" onClick={(e) => handleScrollTo(e, "#timeline")} className="hover:text-white hover:underline transition-colors">
                  Wiley Guidelines & Polices
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleScrollTo(e, "#pricing")} className="hover:text-white hover:underline transition-colors">
                  FAQ & Invoicing Details
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-white hover:underline transition-colors">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Connect & Social (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4" id="footer-col-4">
            <h4 className="text-xs font-bold uppercase tracking-widest font-mono text-white">
              Connect Globally
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Stay in touch for real-time schedule alterations, peer coordination streams, and panel seat announcements.
            </p>
            <div className="flex items-center gap-3.5 mt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Global Support"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom divider and Copyright statement */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>
            © 2026 AIET Conference. Organized under academic advisory boards. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Evaluation Clauses</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
