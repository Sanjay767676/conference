import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PaperSubmissionPage from "./pages/PaperSubmissionPage";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen selection:bg-primary selection:text-white bg-transparent">
        {/* Dynamic Navigation Header */}
        <div className="relative z-50">
          <Header onRegisterClick={() => alert("Registration Opening Soon")} />
        </div>

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/paper-submission" element={<PaperSubmissionPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}
