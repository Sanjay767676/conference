import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Hero from "../components/Hero";
import About from "../components/About";
import Tracks from "../components/Tracks";
import Committee from "../components/Committee";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-white rounded-xl shadow-lg hover:bg-primary-dark transition-colors duration-300 group"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
}

export default function HomePage() {
  return (
    <main className="relative z-10">
      <Hero onRegisterClick={() => window.open("https://cmt3.research.microsoft.com/ICAIDIET2026", "_blank")} />
      <About />
      <Tracks />
      <Committee />
      <ScrollToTop />
    </main>
  );
}
