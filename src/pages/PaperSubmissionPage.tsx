import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Timeline from "../components/Timeline";
import Submission from "../components/Submission";
import Registration from "../components/Registration";

export default function PaperSubmissionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative z-10 pt-24 min-h-screen space-y-8 pb-16">
      {/* 1. Guidelines */}
      <Submission />
      
      {/* 2. Timeline / Important Dates */}
      <Timeline />
      
      {/* 3. Registration Fees & Registration */}
      <Registration onRegisterClick={() => alert("Registration Opening Soon")} />

      {/* Back to Home Button */}
      <Link
        to="/"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-3 bg-primary text-white rounded-xl shadow-lg hover:bg-primary-dark transition-colors duration-300 group"
        aria-label="Back to home page"
      >
        <Home className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
        <span className="hidden sm:inline font-medium pr-1">Back to Home</span>
      </Link>
    </main>
  );
}
