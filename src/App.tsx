import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Timeline from "./components/Timeline";
import Registration from "./components/Registration";
import RegisterModal from "./components/RegisterModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-primary selection:text-white">
      {/* Dynamic Navigation Header */}
      <Header onRegisterClick={() => setIsModalOpen(true)} />
      
      {/* Main Sections */}
      <main>
        <Hero onRegisterClick={() => setIsModalOpen(true)} />
        <About />
        <Tracks />
        <Timeline />
        <Registration onRegisterClick={() => setIsModalOpen(true)} />
      </main>

      {/* Interactive multi-step Registration Wizard Modal */}
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
