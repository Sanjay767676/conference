import { useState, useEffect, type MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import snsctLogo from "../../assets/images/SNSCT.png";
import snsdtLogo from "../../assets/SNS-DT Logo.png";

interface HeaderProps {
  onRegisterClick: () => void;
}

export default function Header({ onRegisterClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmissionDropdownOpen, setIsSubmissionDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      if (location.pathname !== "/") return;

      const sections = ["home", "about", "tracks", "committee"];
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
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Call For Papers ", href: "/#tracks", id: "tracks" },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsSubmissionDropdownOpen(false);
    if (href.startsWith("/#")) {
      e.preventDefault();
      const hash = href.substring(2);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
          }
        }, 100);
      } else {
        const target = document.getElementById(hash);
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col ${
        isScrolled || location.pathname !== "/" || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isScrolled || location.pathname !== "/" ? "py-2.5 sm:py-3" : "py-3 sm:py-5"
      }`}>
        <div className="flex items-center justify-between w-full gap-2">
          {/* Logo */}
          <div className="flex items-center shrink-0 min-w-0">
            <Link to="/#home" onClick={(e) => handleLinkClick(e, "/#home")} className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <img src={snsctLogo} alt="SNSCT Logo" className="h-7 sm:h-9 md:h-12 w-auto object-contain shrink-0" />
              <div className="w-px h-5 sm:h-7 md:h-9 bg-slate-300 shrink-0" />
              <img src={snsdtLogo} alt="SNS-DT Logo" className="h-7 sm:h-9 md:h-12 w-auto object-contain shrink-0" />
            </Link>
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
                      activeSection === link.id && location.pathname === "/"
                        ? "text-brand-dark font-semibold"
                        : "text-brand-dark hover:opacity-80"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.id && location.pathname === "/" && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dark rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}

              <li
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 relative text-sm font-medium transition-colors py-2 ${
                    location.pathname.includes("committee")
                      ? "text-brand-dark font-semibold"
                      : "text-brand-dark hover:opacity-80"
                  }`}
                >
                  Committees
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                  {location.pathname.includes("committee") && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dark rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2 mt-1"
                    >
                      <Link
                        to="/organizing-committee"
                        onClick={() => setIsDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.pathname === "/organizing-committee"
                            ? "bg-primary-light text-primary font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                        }`}
                      >
                        Organizing Committees
                      </Link>
                      <Link
                        to="/advisory-committee"
                        onClick={() => setIsDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.pathname === "/advisory-committee"
                            ? "bg-primary-light text-primary font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                        }`}
                      >
                        Advisory Committees
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li
                className="relative"
                onMouseEnter={() => setIsSubmissionDropdownOpen(true)}
                onMouseLeave={() => setIsSubmissionDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 relative text-sm font-medium transition-colors py-2 ${
                    ['/paper-submission', '/registration-fee', '/submission-timeline', '/publication'].includes(location.pathname)
                      ? "text-brand-dark font-semibold"
                      : "text-brand-dark hover:opacity-80"
                  }`}
                >
                  For Authors
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSubmissionDropdownOpen ? "rotate-180" : ""}`} />
                  {['/paper-submission', '/registration-fee', '/submission-timeline', '/publication'].includes(location.pathname) && (
                    <motion.div
                      layoutId="activeUnderlineSub"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dark rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {isSubmissionDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2 mt-1"
                    >
                      <Link
                        to="/paper-submission"
                        onClick={() => setIsSubmissionDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.pathname === "/paper-submission"
                            ? "bg-primary-light text-primary font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                        }`}
                      >
                        Paper Submission Guidelines
                      </Link>
                      <Link
                        to="/submission-timeline"
                        onClick={() => setIsSubmissionDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.pathname === "/submission-timeline"
                            ? "bg-primary-light text-primary font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                        }`}
                      >
                        Important Dates
                      </Link>
                      <Link
                        to="/registration-fee"
                        onClick={() => setIsSubmissionDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.pathname === "/registration-fee"
                            ? "bg-primary-light text-primary font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                        }`}
                      >
                        Registration Fee
                      </Link>
                      <Link
                        to="/publication"
                        onClick={() => setIsSubmissionDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.pathname === "/publication"
                            ? "bg-primary-light text-primary font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                        }`}
                      >
                        Publication Details
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li className="relative">
                <a
                  href="/brochure.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm font-medium transition-colors py-2 text-brand-dark hover:opacity-80"
                >
                  Brochure
                </a>
              </li>
              <li className="relative">
                <a
                  href="https://snsct.org/old/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm font-medium transition-colors py-2 text-brand-dark hover:opacity-80"
                >
                  SNSCT
                </a>
              </li>
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
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden shrink-0">
            <button
              onClick={onRegisterClick}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-brand-dark text-white font-semibold rounded-lg text-xs sm:text-sm hover:bg-opacity-90 active:scale-95 transition-all duration-150 shadow-sm"
            >
              Register
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 sm:p-2 text-slate-700 hover:text-brand-dark hover:bg-slate-100 rounded-lg transition-colors active:scale-95"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
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
            className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md shadow-xl overflow-hidden"
            id="mobile-drawer"
          >
            <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto px-4 py-4 space-y-3">
              <ul className="space-y-1.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === link.id && location.pathname === "/"
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-brand-dark"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}

                <li>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-slate-700 hover:bg-slate-50 hover:text-brand-dark"
                  >
                    <span>Committees</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-primary" : "text-slate-400"}`} />
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 ml-3 border-l-2 border-slate-200 py-1 space-y-1 my-1">
                          <Link
                            to="/organizing-committee"
                            onClick={() => {
                              setIsOpen(false);
                              setIsDropdownOpen(false);
                            }}
                            className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                              location.pathname === "/organizing-committee"
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                            }`}
                          >
                            Organizing Committees
                          </Link>
                          <Link
                            to="/advisory-committee"
                            onClick={() => {
                              setIsOpen(false);
                              setIsDropdownOpen(false);
                            }}
                            className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                              location.pathname === "/advisory-committee"
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                            }`}
                          >
                            Advisory Committees
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <button
                    onClick={() => setIsSubmissionDropdownOpen(!isSubmissionDropdownOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-slate-700 hover:bg-slate-50 hover:text-brand-dark"
                  >
                    <span>For Authors</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSubmissionDropdownOpen ? "rotate-180 text-primary" : "text-slate-400"}`} />
                  </button>
                  <AnimatePresence>
                    {isSubmissionDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 ml-3 border-l-2 border-slate-200 py-1 space-y-1 my-1">
                          <Link
                            to="/paper-submission"
                            onClick={() => {
                              setIsOpen(false);
                              setIsSubmissionDropdownOpen(false);
                            }}
                            className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                              location.pathname === "/paper-submission"
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                            }`}
                          >
                            Paper Submission Guidelines
                          </Link>
                          <Link
                            to="/submission-timeline"
                            onClick={() => {
                              setIsOpen(false);
                              setIsSubmissionDropdownOpen(false);
                            }}
                            className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                              location.pathname === "/submission-timeline"
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                            }`}
                          >
                            Important Dates
                          </Link>
                          <Link
                            to="/registration-fee"
                            onClick={() => {
                              setIsOpen(false);
                              setIsSubmissionDropdownOpen(false);
                            }}
                            className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                              location.pathname === "/registration-fee"
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                            }`}
                          >
                            Registration Fee
                          </Link>
                          <Link
                            to="/publication"
                            onClick={() => {
                              setIsOpen(false);
                              setIsSubmissionDropdownOpen(false);
                            }}
                            className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                              location.pathname === "/publication"
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-slate-600 hover:bg-slate-50 hover:text-brand-dark"
                            }`}
                          >
                            Publication Details
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <a
                    href="/brochure.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-slate-700 hover:bg-slate-50 hover:text-brand-dark"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="https://snsct.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-slate-700 hover:bg-slate-50 hover:text-brand-dark"
                  >
                    SNSCT
                  </a>
                </li>
              </ul>

              <div className="pt-3 border-t border-slate-100">
                <button
                  id="mobile-drawer-cta"
                  onClick={() => {
                    setIsOpen(false);
                    onRegisterClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-white font-semibold rounded-xl text-sm shadow-md hover:bg-primary-dark transition-colors active:scale-98"
                >
                  Register for <span className="font-gambetta tracking-wide">ICAIDIET'26</span>
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
