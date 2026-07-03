import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, Check, ArrowRight, ArrowLeft, User, Mail, 
  Building2, Globe2, CreditCard, Sparkles, FileText, CheckCircle2 
} from "lucide-react";
import { CONFERENCE_TRACKS, PRICING_TIERS } from "../data";
import { RegistrationFormData } from "../types";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    institution: "",
    country: "",
    designation: "academic",
    category: "author",
    region: "international",
    trackId: CONFERENCE_TRACKS[0].id,
    paperTitle: "",
    paperAbstract: "",
    agreeToTerms: false,
  });

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const computeFee = () => {
    const { designation, category, region } = formData;
    let tierId = "fee-1"; // Default Student Author

    if (category === "author") {
      tierId = designation === "student" ? "fee-1" : "fee-2";
    } else {
      tierId = designation === "student" ? "fee-3" : "fee-4";
    }

    const matchedTier = PRICING_TIERS.find((t) => t.id === tierId);
    if (!matchedTier) return "$0";

    return formData.region === "international" 
      ? matchedTier.priceInternational 
      : matchedTier.priceNational;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.institution || !formData.country) {
        alert("Please complete all personal profile fields.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (formData.category === "author" && (!formData.paperTitle || !formData.paperAbstract)) {
        alert("Please provide your paper title and abstract for author registration.");
        return;
      }
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardName || !cardNumber || !cardExpiry || !cardCvv) {
      alert("Please provide complete credit card information for simulation.");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("Please accept the conference terms and data processing policies.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedTicket = "AIET-" + Math.floor(100000 + Math.random() * 900000);
      setTicketId(generatedTicket);
      setStep(4);
    }, 1800);
  };

  const fillTestCard = () => {
    setCardName(formData.name || "Dr. Alex Johnson");
    setCardNumber("4242 •••• •••• 4242");
    setCardExpiry("12/28");
    setCardCvv("415");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 overflow-y-auto flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 border border-slate-100 flex flex-col justify-between"
          id="registration-modal-container"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-800 leading-tight">
                  AIET 2026 Registration
                </h3>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                  Step {step === 4 ? "Complete" : `${step} of 3`}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 hover:bg-slate-200 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress bar */}
          {step < 4 && (
            <div className="w-full bg-slate-100 h-1">
              <div
                className="bg-primary h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          )}

          {/* Content Container */}
          <div className="p-6 sm:p-8 overflow-y-auto max-h-[70vh]">
            
            {/* STEP 1: PERSONAL PROFILE */}
            {step === 1 && (
              <div className="space-y-6" id="modal-step-1">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-800">Delegate Profile</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Provide your academic affiliations and standard contact coordinates.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Prof. Emily Carter"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" /> Professional Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. emily@harvard.edu"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Affiliation */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" /> University / Institution
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      placeholder="e.g. Harvard University"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Country */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                      <Globe2 className="w-3.5 h-3.5 text-slate-400" /> Country / Jurisdiction
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="e.g. United States"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Professional designation */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600">Designation</label>
                    <select
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="student">Student (Undergrad/PhD)</option>
                      <option value="academic">Academic Faculty/Professor</option>
                      <option value="industry">Industry Specialist/Researcher</option>
                    </select>
                  </div>

                  {/* Region selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-600">Residency Region</label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="international">International Delegate</option>
                      <option value="national">National (Indian Residency)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: CATEGORY & PAPERS FOR AUTHORS */}
            {step === 2 && (
              <div className="space-y-6" id="modal-step-2">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-800">Participation Category</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Specify whether you are presenting original research, or joining as a general listener.
                  </p>
                </div>

                {/* Categories Toggle Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div
                    onClick={() => setFormData((p) => ({ ...p, category: "author" }))}
                    className={`p-4 border-2 rounded-2xl cursor-pointer text-left transition-all ${
                      formData.category === "author"
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-slate-100 bg-slate-50/50 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${
                        formData.category === "author" ? "bg-primary text-white" : "bg-slate-200 text-slate-500"
                      }`}>
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm text-slate-800">Author</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Intend to present a paper and publish in Scopus/Wiley proceedings.
                    </p>
                  </div>

                  <div
                    onClick={() => setFormData((p) => ({ ...p, category: "attendee" }))}
                    className={`p-4 border-2 rounded-2xl cursor-pointer text-left transition-all ${
                      formData.category === "attendee"
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-slate-100 bg-slate-50/50 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${
                        formData.category === "attendee" ? "bg-primary text-white" : "bg-slate-200 text-slate-500"
                      }`}>
                        <User className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm text-slate-800">Listener / Attendee</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Attend all sessions, panel keynotes, and receive certificates.
                    </p>
                  </div>
                </div>

                {/* Conditional Form fields: Author Paper details */}
                <AnimatePresence mode="wait">
                  {formData.category === "author" ? (
                    <motion.div
                      key="author-fields"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4 pt-4 border-t border-slate-100"
                    >
                      <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                        Manuscript Information
                      </h5>

                      {/* Track dropdown */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-600">Select Target Track</label>
                        <select
                          name="trackId"
                          value={formData.trackId}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                        >
                          {CONFERENCE_TRACKS.map((t) => (
                            <option key={t.id} value={t.id}>
                              {t.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Paper Title */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-600">Draft Paper Title</label>
                        <input
                          type="text"
                          name="paperTitle"
                          value={formData.paperTitle}
                          onChange={handleInputChange}
                          placeholder="e.g. Robust Quantum Convolutional Encoders for Low-Light Vision"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                          required
                        />
                      </div>

                      {/* Paper Abstract */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-600">Brief Abstract Summary</label>
                        <textarea
                          name="paperAbstract"
                          value={formData.paperAbstract}
                          onChange={handleInputChange}
                          placeholder="Provide a 3-4 sentence academic abstract..."
                          rows={3}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                          required
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="attendee-fields"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3 mt-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-slate-800">Delegate Registration Included:</h5>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                          Full badge credentials, proceedings access links, high tea and catering vouchers for physical attendees, and dynamic login links for virtual participants.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* STEP 3: PRICE DETAILS & SECURE SIMULATED PAYMENT */}
            {step === 3 && (
              <form onSubmit={handleSubmitPayment} className="space-y-6" id="modal-step-3">
                <div className="flex justify-between items-center bg-primary-light p-4 rounded-2xl border border-primary/20">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-primary font-bold">
                      Calculated Fee
                    </span>
                    <span className="text-xs text-slate-500 capitalize">
                      {formData.category} ({formData.designation})
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-primary">
                      {computeFee()}
                    </span>
                  </div>
                </div>

                {/* Secure checkout headers */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                      Secure Payment Simulator
                    </h4>
                    <button
                      type="button"
                      onClick={fillTestCard}
                      className="text-[10px] font-bold text-primary hover:underline hover:text-primary-dark"
                    >
                      Fill Demo Credentials
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    This is a secure, sandboxed testing gateway. No actual funds will be transferred.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Card name */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-semibold text-slate-600">Cardholder Name</label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      placeholder="Dr. Emily Carter"
                      className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Card Number */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-semibold text-slate-600">Credit Card Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="4242 4242 4242 4242"
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                        required
                      />
                      <CreditCard className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Expiry & CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-slate-600">Expiry Date</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-slate-600">CVV</label>
                      <input
                        type="password"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        placeholder="•••"
                        maxLength={4}
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-primary focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Agreement Box */}
                  <div className="pt-2 flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-primary border-slate-200 rounded focus:ring-primary focus:ring-2"
                      id="agree-checkbox"
                      required
                    />
                    <label htmlFor="agree-checkbox" className="text-[10px] text-slate-500 leading-relaxed cursor-pointer select-none">
                      I authorize the secure submission of this credential simulator. I agree to receive official AIET 2026 scheduling updates, and permit double-blind academic evaluation procedures.
                    </label>
                  </div>
                </div>
              </form>
            )}

            {/* STEP 4: REGISTRATION TICKET SUCCESS CONFIRMATION */}
            {step === 4 && (
              <div className="text-center py-6 space-y-6" id="modal-step-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 mx-auto shadow-sm">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-brand-dark tracking-tight">
                    Registration Confirmed!
                  </h4>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Welcome to AIET 2026. A secure confirmation invoice, receipts, and instructions have been sent to <strong className="text-slate-700">{formData.email}</strong>.
                  </p>
                </div>

                {/* Aesthetic confirmation ticket box */}
                <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl max-w-sm mx-auto text-left relative overflow-hidden" id="confirmation-ticket">
                  {/* Decorative circular notch left */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-r border-slate-100 rounded-full" />
                  {/* Decorative circular notch right */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-l border-slate-100 rounded-full" />

                  <div className="flex flex-col gap-3.5">
                    <div className="flex justify-between text-xs border-b border-dashed border-slate-200 pb-3">
                      <span className="text-slate-400 font-mono">TICKET ID</span>
                      <span className="font-mono font-bold text-brand-dark">{ticketId}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="flex flex-col">
                        <span className="text-slate-400">DELEGATE</span>
                        <span className="font-semibold text-slate-800">{formData.name}</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-slate-400">AFFILIATION</span>
                        <span className="font-semibold text-slate-800 truncate" title={formData.institution}>
                          {formData.institution}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-slate-400">CATEGORY</span>
                        <span className="font-semibold text-slate-800 uppercase tracking-wider">{formData.category}</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-slate-400">TOTAL FEE PAID</span>
                        <span className="font-bold text-primary">{computeFee()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-brand-dark text-white font-semibold rounded-xl text-sm hover:bg-opacity-95 transition-all w-full max-w-sm"
                  >
                    Close Portal
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Footer Controls */}
          {step < 4 && (
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <div>
                {step > 1 ? (
                  <button
                    onClick={handlePrevStep}
                    className="flex items-center gap-1.5 px-4 py-2.5 text-slate-500 hover:text-brand-dark font-semibold text-xs transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : (
                  <span className="text-xs text-slate-400">Pre-registration phase</span>
                )}
              </div>

              <div>
                {step < 3 ? (
                  <button
                    onClick={handleNextStep}
                    className="flex items-center gap-1.5 px-5 py-2.5 bg-brand-dark text-white font-semibold rounded-xl text-xs hover:bg-opacity-95 shadow-sm transform active:scale-95 transition-all"
                  >
                    Next Step <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitPayment}
                    disabled={isSubmitting}
                    className={`flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-xl text-xs hover:bg-primary-dark transition-colors shadow-md ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Validating...
                      </>
                    ) : (
                      <>
                        Authorize Fee {computeFee()} <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
