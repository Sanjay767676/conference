import { BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import wileyLogo from '../../assets/images/wiley.png';

export default function Publication() {
  return (
    <section id="publication" className="py-16 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Publication Details
          </h2>
        </div>

        <div className="bg-[#ffbf00] rounded-2xl shadow-sm border border-slate-900/10 overflow-hidden hover:-translate-y-1 transition-all duration-300">
          <div className="flex flex-col md:flex-row">
            {/* Left side with logo */}
            <div className="md:w-1/3 bg-black/5 flex flex-col items-center justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-900/10">
              <div className="w-full max-w-[220px] flex flex-col items-start">
                <div className="flex items-center gap-2 mb-5 relative -top-8 -left-9">
                  <BookOpen className="w-4 h-4 text-brand-dark shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider whitespace-nowrap">
                    Publication Partner
                  </span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm w-full flex items-center justify-center">
                  <img src={wileyLogo} alt="Wiley" className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Right side with content */}
            <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
              <p className="text-brand-dark/80 text-lg font-medium leading-relaxed mb-6">
                All accepted and presented papers will be published as Scopus-indexed conference Book proceedings with assigned ISBN and DOI, as per publisher norms.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-slate-900/10">
                  <CheckCircle2 className="w-4 h-4 text-slate-900" />
                  <span className="text-sm font-semibold text-slate-950">Scopus Indexed</span>
                </div>
              </div>

              <a
                href="https://cmt3.research.microsoft.com/ICAIDIET2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                Submit Paper
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
