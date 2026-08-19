import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            <span className="font-gambetta tracking-wide font-bold text-brand-dark"> Get in Touch</span>
          </h2>
          <p className="text-lg text-slate-950 max-w-2xl mx-auto font-medium">
            Reach out to the <span className="font-gambetta tracking-wide font-bold text-brand-dark">ICAIDIET'26</span> organizing committee for any conference-related queries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-4">
            {/* Email Card */}
            <div className="bg-[#ffbf00] p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-white/50 rounded-xl text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Email</h4>
                <a href="mailto:icaidiet26@gmail.com" className="text-slate-800 mt-1 font-medium">
                  icaidiet26@gmail.com
                </a>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#ffbf00] p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-white/50 rounded-xl text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Contact</h4>
                <div className="flex flex-col gap-1">
                  <a href="tel:+918903444955" className="text-slate-800 mt-1 font-medium">
                    Dr. M. Sudha - +91-8903444955
                  </a>
                  <a href="tel:+918428260671" className="text-slate-800 mt-1 font-medium">
                    Prof. G. Swathi - +91-8428260671
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#ffbf00] p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-white/50 rounded-xl text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Location</h4>
                <p className="text-lg font-semibold text-slate-900 mt-2">
                  SNS College of Technology
                </p>
                <p className="text-slate-800 mt-1 font-medium">
                  Sathy Main Road, SNS Kalvi Nagar,
                  <br />
                  Saravanampatti [PO], Coimbatore-641 035, Tamil Nadu
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-sm">
            <iframe
              className="w-full h-full min-h-[400px]"
              src="https://www.google.com/maps?q=sns+college+of+technology&z=16&t=m&hl=en&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              title="SNS College of Technology Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
