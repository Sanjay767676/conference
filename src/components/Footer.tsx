import React from "react";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-6 relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          <div className="flex flex-col gap-2">
            <h3 className="font-display font-bold text-lg text-[#F4F9FF] mb-1">ICAIDIET'26</h3>
            <div className="flex items-start gap-2 text-[#F4F9FF]">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
              <p className="text-xs leading-relaxed">
                <strong>Convenor-ICAIDIET'26</strong><br/>
                SNS College of Technology, Sathy Main Road, SNS Kalvi Nagar,<br/>
                Saravanampatti [PO], Coimbatore-641 035, Tamil Nadu
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#F4F9FF] hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:icaidiet26@gmail.com" className="text-xs">
                icaidiet26@gmail.com
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-slate-800 mt-5 pt-5 text-center text-[10px] text-[#F4F9FF] opacity-70">
          <p>© 2026 ICAIDIET'26 Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
