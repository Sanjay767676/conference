import { BookOpen } from 'lucide-react';
import wileyLogo from '../../assets/images/wiley.png';
import scopusLogo from '../../assets/images/scopus.png';

export default function Publication() {
  return (
    <section id="publication" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Publication
          </h2>
        </div>
        
        <div className="mb-12">
          <div className="w-full bg-[#fdf08a] rounded-2xl shadow-sm">
            <div className="w-full flex flex-col items-start text-left p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">Publication Information</h3>
              </div>
              <p className="text-slate-700 font-medium text-lg text-left leading-relaxed">
                All the accepted and presented papers will be published as Scopus-indexed conference proceedings. Assigned ISBN and DOI (as per publisher norms).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8 border-t border-slate-900/10 pt-8">
                <div className="flex flex-col items-center justify-center bg-white/50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 text-center uppercase tracking-wide">Publication Partner</h4>
                  <img src={wileyLogo} alt="Wiley" className="h-16 object-contain mix-blend-multiply" />
                </div>
                <div className="flex flex-col items-center justify-center bg-white/50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 text-center uppercase tracking-wide">Indexed In</h4>
                  <img src={scopusLogo} alt="Scopus" className="h-16 object-contain mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
