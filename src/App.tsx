import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PaperSubmissionPage from "./pages/PaperSubmissionPage";
import AdvisoryCommitteePage from "./pages/AdvisoryCommitteePage";
import OrganizingCommitteePage from "./pages/OrganizingCommitteePage";
import RegistrationFeePage from "./pages/RegistrationFeePage";
import SubmissionTimelinePage from "./pages/SubmissionTimelinePage";
import PublicationPage from "./pages/PublicationPage";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen selection:bg-primary selection:text-white bg-transparent">
        {/* Dynamic Navigation Header */}
        <div className="relative z-50">
          <Header onRegisterClick={() => window.open("https://cmt3.research.microsoft.com/ICAIDIET2026", "_blank")} />
        </div>

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/paper-submission" element={<PaperSubmissionPage />} />
          <Route path="/registration-fee" element={<RegistrationFeePage />} />
          <Route path="/submission-timeline" element={<SubmissionTimelinePage />} />
          <Route path="/publication" element={<PublicationPage />} />
          <Route path="/advisory-committee" element={<AdvisoryCommitteePage />} />
          <Route path="/organizing-committee" element={<OrganizingCommitteePage />} />
        </Routes>

        {/* Footer */}
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}
