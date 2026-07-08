import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Timeline from "./components/Timeline";
import Committee from "./components/Committee";
import Submission from "./components/Submission";
import Registration from "./components/Registration";
import Aurora from "./components/ui/Aurora";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-primary selection:text-white">
      {/* Full Website Aurora Background */}
      <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
        <Aurora
          colorStops={["#7cff67", "#B497CF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Dynamic Navigation Header */}
      <div className="relative z-50">
        <Header onRegisterClick={() => alert("Registration Opening Soon")} />
      </div>

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onRegisterClick={() => alert("Registration Opening Soon")} />
        <About />
        <Tracks />
        <Committee />
        <Submission />
        <Timeline />
        <Registration onRegisterClick={() => alert("Registration Opening Soon")} />
      </main>

      {/* Footer */}
      <Footer />
      <Analytics />
    </div>
  );
}
