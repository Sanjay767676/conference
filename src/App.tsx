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

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-primary selection:text-white">
      {/* Dynamic Navigation Header */}
      <Header onRegisterClick={() => window.open("https://tinyurl.com/3sfr5uae", "_blank")} />
      
      {/* Main Sections */}
      <main>
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
    </div>
  );
}
