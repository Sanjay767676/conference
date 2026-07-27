import wileyLogo from '../../assets/images/wiley.png';
import scopusLogo from '../../assets/images/scopus.png';
import yorkLogo from '../../assets/images/york.jpg';

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-20">
          
          {/* Academic Partner */}
          <div className="text-center w-full flex flex-col items-center">
            <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">IN ASSOCIATION WITH</span>
            <h2 className="text-2xl md:text-[32px] font-bold text-slate-900 mb-4">
              International <span className="text-primary font-bold">Academic Partner</span>
            </h2>
            <p className="text-slate-700 text-sm md:text-base mb-10 max-w-2xl leading-relaxed">
              <span className="font-gambetta font-semibold">ICAIDIET'26</span> collaborates with globally recognized academic institutions to foster international research excellence.
            </p>
            <div className="bg-[#ffbf00] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-900/10 p-6 flex items-center justify-center w-full max-w-[540px] h-[200px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="bg-white px-8 py-4 rounded-xl shadow-sm w-full h-full flex items-center justify-center">
                <img src={yorkLogo} alt="Yorkville University" className="max-h-28 object-contain" />
              </div>
            </div>
          </div>

          {/* Publishing Partner */}
          <div className="text-center w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-[32px] font-bold text-slate-900 mb-4">
              Publishing <span className="text-primary font-bold">Partner</span>
            </h2>
            <p className="text-slate-700 text-sm md:text-base mb-10 max-w-2xl leading-relaxed">
              Accepted papers will be published with international visibility through our official publishing partner.
            </p>
            <div className="bg-[#ffbf00] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-900/10 p-6 flex items-center justify-center w-full max-w-[540px] h-[200px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="bg-white px-8 py-4 rounded-xl shadow-sm w-full h-full flex items-center justify-center">
                <img src={wileyLogo} alt="Wiley" className="max-h-24 object-contain" />
              </div>
            </div>
          </div>

          {/* Indexing & Abstracting */}
          <div className="text-center w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-[32px] font-bold text-slate-900 mb-4">
              Indexing & <span className="text-primary font-bold">Abstracting</span>
            </h2>
            <p className="text-slate-700 text-sm md:text-base mb-10 max-w-2xl leading-relaxed">
              Conference proceedings are indexed to maximize citation impact and academic reach.
            </p>
            <div className="bg-[#ffbf00] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-900/10 p-6 flex items-center justify-center w-full max-w-[540px] h-[200px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="bg-white px-8 py-4 rounded-xl shadow-sm w-full h-full flex items-center justify-center">
                <img src={scopusLogo} alt="Scopus" className="max-h-20 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
