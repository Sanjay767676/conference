import Timeline from "../components/Timeline";
import Submission from "../components/Submission";
import Registration from "../components/Registration";

export default function PaperSubmissionPage() {
  return (
    <main className="relative z-10 pt-24 min-h-screen space-y-8 pb-16">
      {/* 1. Guidelines */}
      <Submission />
      
      {/* 2. Timeline / Important Dates */}
      <Timeline />
      
      {/* 3. Registration Fees & Registration */}
      <Registration onRegisterClick={() => alert("Registration Opening Soon")} />
    </main>
  );
}
