import { FileText, Upload, CheckCircle2, Link as LinkIcon, ArrowRight, BookOpen } from 'lucide-react';


export default function Submission() {
  return (
    <section id="submission" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Paper Submission
          </h2>
          <p className="text-lg text-brand-dark max-w-2xl mx-auto">
            Guidelines and instructions for submitting your paper to <span className="font-gambetta tracking-wide font-semibold text-brand-dark">ICAIDIET'26</span>.
          </p>
        </div>

        <div className="mb-12">
          {/* Author Submission Guidelines */}
          <div className="w-full bg-[#fdf08a] rounded-2xl shadow-sm">
            <div className="w-full flex flex-col items-start text-left p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">Author Submission Guidelines</h3>
              </div>

              <p className="text-slate-700 mb-6 font-medium">
                Authors are invited to submit original, unpublished, and high-quality research papers that are not under consideration for publication elsewhere. All submissions must strictly adhere to the following guidelines in line with Wiley publication standards and indexing requirements:
              </p>

              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-left leading-relaxed">Manuscripts must be prepared using the official conference template and written in formal academic English.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-left leading-relaxed">The paper length must be 10–14 pages, including references, figures, and tables.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-left leading-relaxed">Formatting should follow: Times New Roman, 12 pt font, single line spacing, with properly structured sections.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-left leading-relaxed">All figures, tables, and illustrations must be of high resolution (minimum 300 dpi) and appropriately captioned.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-left leading-relaxed">References must follow a numeric citation style [1], [2], [3]… and be properly formatted.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-left leading-relaxed">The overall similarity index must be below 15%, with no significant overlap from a single source.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-left leading-relaxed">Submissions must represent original scholarly work. Plagiarism, duplicate submission, or unethical practices will lead to rejection.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-left leading-relaxed">Manuscripts must comply with publisher screening, peer-review standards, and editorial policies.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-left leading-relaxed">Papers not conforming to formatting and ethical requirements will be desk rejected without review.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-left leading-relaxed">Upon acceptance, authors must complete registration and payment within the stipulated timeline for inclusion in the proceedings.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-left leading-relaxed">Final acceptance and publication are subject to publisher quality checks and indexing criteria; inclusion in indexed databases (e.g., Scopus) depends on meeting all required standards.</span>
                </li>
              </ul>

              <p className="text-slate-700 mt-6 font-medium italic border-l-4 border-primary pl-4 py-1">
                Authors are strongly advised to carefully review these guidelines and ensure full compliance to facilitate smooth review and publication processing.
              </p>
            </div>
          </div>
        </div>

        {/* Publication Info */}
        <div className="mb-12">
          <div className="w-full bg-[#fdf08a] rounded-2xl shadow-sm">
            <div className="w-full flex flex-col items-start text-left p-6">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">Publication</h3>
              </div>
              <p className="text-slate-600 font-medium text-lg text-left">
                All the accepted and presented papers will be published as Scopus-indexed conference proceedings. Assigned ISBN and DOI (as per publisher norms).
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Where to Submit */}
          <div className="w-full h-full bg-[#fdf08a] rounded-2xl shadow-sm">
            <div className="w-full flex flex-col items-start text-left p-6">
              <div className="flex items-center gap-3 mb-6">
                <LinkIcon className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">Where to Submit</h3>
              </div>
              <p className="text-slate-600 mb-4 font-medium text-left">
                Through CMT.
              </p>
              <p className="text-slate-600 mb-4 text-sm text-left">
                All submissions will be handled electronically via the Microsoft CMT platform once the portal is open.
              </p>
            </div>
          </div>

          {/* How to Submit */}
          <div className="w-full h-full bg-[#fdf08a] rounded-2xl shadow-sm">
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
          </div>
        </div>
      </div>
    </section>
  );
}
