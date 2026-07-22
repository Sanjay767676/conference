import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Registration from "../components/Registration";

export default function RegistrationFeePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative z-10 pt-24 min-h-screen space-y-8 pb-16">
      <Registration onRegisterClick={() => window.open("https://cmt3.research.microsoft.com/ICAIDIET2026", "_blank")} />

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
