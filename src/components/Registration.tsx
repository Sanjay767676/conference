import { motion } from "motion/react";
import { Check, CreditCard } from "lucide-react";
import { PRICING_TIERS } from "../data";

interface RegistrationProps {
  onRegisterClick: () => void;
}

export default function Registration({ onRegisterClick }: RegistrationProps) {
  const authorTiers = PRICING_TIERS.filter((t) => t.category === "author");
  const attendeeTiers = PRICING_TIERS.filter((t) => t.category === "attendee");

  return (
    <section id="pricing" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="pricing-header">
          <div className="text-brand-dark font-bold text-sm md:text-base uppercase tracking-wider mb-4">
            Registration Fees
          </div>


        </div>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14" id="pricing-tables-grid">

          {/* LEFT PANEL - AUTHOR TIERS */}
          <div className="flex flex-col gap-6" id="author-pricing-panel">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {authorTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="bg-white/60 backdrop-blur-md border border-slate-100/50 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div>
                    {/* Badge */}
                    <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary font-semibold text-[10px] uppercase tracking-wider rounded-md mb-4">
                      Presenter
                    </span>

                    <h4 className="text-lg font-bold text-brand-dark mb-1">{tier.title}</h4>
                    <p className="text-xs text-slate-500 mb-6 leading-relaxed min-h-[32px]">
                      {tier.audience}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3 pt-6 border-t border-slate-50">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL - ATTENDEE TIERS */}
          <div className="flex flex-col gap-6" id="attendee-pricing-panel">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {attendeeTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="bg-white/60 backdrop-blur-md border border-slate-100/50 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div>
                    {/* Badge */}
                    <span className="inline-block px-2.5 py-1 bg-amber-400/15 text-amber-600 font-semibold text-[10px] uppercase tracking-wider rounded-md mb-4">
                      {tier.id === 'fee-3' ? 'PRESENTER' : 'LISTENER'}
                    </span>

                    <h4 className="text-lg font-bold text-brand-dark mb-1">{tier.title}</h4>
                    <p className="text-xs text-slate-500 mb-6 leading-relaxed min-h-[32px]">
                      {tier.audience}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3 pt-6 border-t border-slate-50">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Registration CTA */}
        <div className="flex flex-col items-center justify-center mt-12 bg-[#fdf08a] p-8 rounded-2xl shadow-sm text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Register?</h3>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Once you have reviewed the guidelines and fees, you can proceed with your registration.
          </p>
          <button
            onClick={onRegisterClick}
            className="px-8 py-4 bg-brand-dark text-white font-semibold rounded-xl text-lg hover:bg-opacity-95 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md flex items-center justify-center gap-2 group"
          >
            Registration
            <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
