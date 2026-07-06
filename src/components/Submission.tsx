import { FileText, Upload, CheckCircle2, Link as LinkIcon, ArrowRight, BookOpen } from 'lucide-react';
import GlassSurface from './ui/GlassSurface';

export default function Submission() {
  return (
    <section id="submission" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-4">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Paper Submission
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Guidelines and instructions for submitting your paper to ICAIDIET'26.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Author Guidelines */}
          <GlassSurface width="100%" height="100%" borderRadius={16} className="w-full h-full">
            <div className="w-full flex flex-col items-start text-left p-6">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">Author Guidelines</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-left">Submissions must be original and should not have been published previously or be under consideration for publication while being evaluated for this conference.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-left">The manuscript should be written in English.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-left">Paper length must not exceed 8 pages, including figures, tables, and references.</span>
                </li>
              </ul>
            </div>
          </GlassSurface>

          {/* Submission Guidelines */}
          <GlassSurface width="100%" height="100%" borderRadius={16} className="w-full h-full">
            <div className="w-full flex flex-col items-start text-left p-6">
              <div className="flex items-center gap-3 mb-6">
                <Upload className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">Submission Guidelines</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-left">All papers must be submitted electronically in PDF format.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-left">Follow the standard IEEE conference template for paper formatting.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-left">Ensure a double-blind review process by removing author names and affiliations from the initial manuscript.</span>
                </li>
              </ul>
            </div>
          </GlassSurface>
        </div>

        {/* Publication Info */}
        <div className="mb-12">
          <GlassSurface width="100%" height="100%" borderRadius={16} className="w-full">
            <div className="w-full flex flex-col items-start text-left p-6">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">Publication</h3>
              </div>
              <p className="text-slate-600 font-medium text-lg text-left">
                All the accepted and presented papers will be published as Scopus-indexed conference proceedings. Assigned ISBN and DOI (as per publisher norms).
              </p>
            </div>
          </GlassSurface>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Where to Submit */}
          <GlassSurface width="100%" height="100%" borderRadius={16} className="w-full h-full">
            <div className="w-full flex flex-col items-start text-left p-6">
              <div className="flex items-center gap-3 mb-6">
                <LinkIcon className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">Where to Submit</h3>
              </div>
              <p className="text-slate-600 mb-4 font-medium text-left">
                CMT submission link will be coming shortly.
              </p>
              <p className="text-slate-600 mb-4 text-sm text-left">
                All submissions will be handled electronically via the Microsoft CMT platform once the portal is open.
              </p>
              <button 
                disabled
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-slate-400 cursor-not-allowed w-full sm:w-auto mt-auto"
              >
                Portal Opening Soon
              </button>
            </div>
          </GlassSurface>

          {/* How to Submit */}
          <GlassSurface width="100%" height="100%" borderRadius={16} className="w-full h-full">
            <div className="w-full flex flex-col items-start text-left p-6">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">How to Submit</h3>
              </div>
              <p className="text-slate-600 mb-4 font-medium text-left">
                You will need to have a CMT account before you try to submit your paper.
              </p>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-2">
                  <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                  <a href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium text-left">
                    Click here for instructions on how to create a CMT account
                  </a>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                  <a href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium text-left">
                    Click here for instructions on how to submit a paper
                  </a>
                </li>
              </ul>
            </div>
          </GlassSurface>
        </div>
      </div>
    </section>
  );
}
