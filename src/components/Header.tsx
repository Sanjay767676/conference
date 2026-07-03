import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, BrainCircuit } from "lucide-react";
import snsctLogo from "../../assets/images/SNSCT.png";
interface HeaderProps {
  onRegisterClick: () => void;
}

export default function Header({ onRegisterClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple scroll spy
      const sections = ["home", "about", "tracks", "timeline", "pricing"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Tracks", href: "#tracks", id: "tracks" },
    { name: "Timeline", href: "#timeline", id: "timeline" },
    { name: "Fee", href: "#pricing", id: "pricing" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center">
              <img src={snsctLogo} alt="SNSCT Logo" className="h-10 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative text-sm font-medium transition-colors py-2 ${
                      activeSection === link.id
                        ? "text-primary font-semibold"
                        : "text-slate-600 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-4 w-px bg-slate-200" />

            <button
              id="desktop-nav-cta"
              onClick={onRegisterClick}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-brand-dark text-white font-semibold rounded-lg text-sm hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={onRegisterClick}
              className="px-4 py-2 bg-brand-dark text-white font-semibold rounded-lg text-xs hover:bg-opacity-90 transition-all duration-200"
            >
              Register
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-brand-dark hover:bg-slate-50 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md"
            id="mobile-drawer"
          >
            <div className="px-4 py-6 space-y-4">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                        activeSection === link.id
                          ? "bg-primary-light text-primary font-semibold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100">
                <button
                  id="mobile-drawer-cta"
                  onClick={() => {
                    setIsOpen(false);
                    onRegisterClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white font-semibold rounded-xl text-sm shadow-md hover:bg-primary-dark transition-colors"
                >
                  Register for AIET 2026
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
