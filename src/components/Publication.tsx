import { BookOpen } from 'lucide-react';

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
