import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Timeline from "./components/Timeline";
import Committee from "./components/Committee";
import Submission from "./components/Submission";
import Registration from "./components/Registration";
import RegisterModal from "./components/RegisterModal";
import Aurora from "./components/ui/Aurora";
import Footer from "./components/Footer";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-primary selection:text-white">
      {/* Full Website Aurora Background */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <Aurora
          colorStops={["#7cff67", "#B497CF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Dynamic Navigation Header */}
      <div className="relative z-50">
        <Header onRegisterClick={() => window.open("https://tinyurl.com/3sfr5uae", "_blank")} />
      </div>
      
      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onRegisterClick={() => window.open("https://tinyurl.com/3sfr5uae", "_blank")} />
        <About />
        <Tracks />
        <Committee />
        <Submission />
        <Timeline />
        <Registration onRegisterClick={() => window.open("https://tinyurl.com/3sfr5uae", "_blank")} />
      </main>

      {/* Interactive multi-step Registration Wizard Modal */}
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
