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
      <Header onRegisterClick={() => alert("Registration will open soon!")} />
      
      {/* Main Sections */}
      <main>
        <Hero onRegisterClick={() => alert("Registration will open soon!")} />
        <About />
        <Tracks />
        <Timeline />
        <Registration onRegisterClick={() => alert("Registration will open soon!")} />
      </main>

      {/* Interactive multi-step Registration Wizard Modal */}
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
