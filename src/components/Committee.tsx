import { Users } from 'lucide-react';
import GlassSurface from './ui/GlassSurface';

export default function Committee() {
  return (
    <section id="committee" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Organizing Committee
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the dedicated individuals organizing <span className="font-gambetta tracking-wide font-semibold text-primary">ICAIDIET'26</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Chief Patrons */}
          <GlassSurface width="100%" height="100%" borderRadius={16} className="w-full h-full">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Chief Patrons</h3>
              <ul className="space-y-4">
                <li>
                  <p className="text-sm text-slate-600">Deiva Thiru</p>
                  <p className="font-semibold text-slate-900">Dr.S.N. Subbramanian</p>
                  <p className="text-sm text-slate-600">Founder Chairman, SNS Institutions.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.S. Rajalakshmi</p>
                  <p className="text-sm text-slate-600">Chairman / Correspondent, SNS Institutions.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.S. Nalin</p>
                  <p className="text-sm text-slate-600">Technical Director, SNS Institutions.</p>
                </li>
              </ul>
            </div>
          </GlassSurface>

          {/* Patrons */}
          <GlassSurface width="100%" height="100%" borderRadius={16} className="w-full h-full">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Patrons</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold text-slate-900">Dr.S. Chenthur Pandian</p>
                  <p className="text-sm text-slate-600">Principal, SNSCT.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.S. Charles</p>
                  <p className="text-sm text-slate-600">Principal, SNSCT.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.P.Tamilselvem</p>
                  <p className="text-sm text-slate-600">VP-Admin., SNSCT.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.P.Vivekakanandan</p>
                  <p className="text-sm text-slate-600">VP-Academics, SNSCT.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.R. Sudhakaran</p>
                  <p className="text-sm text-slate-600">Vice Principal, SNSCT.</p>
                </li>
              </ul>
            </div>
          </GlassSurface>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Convenors */}
          <GlassSurface width="100%" height="100%" borderRadius={16} className="w-full h-full">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Convenors</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold text-slate-900">Dr.M.Sudha</p>
                  <p className="text-sm text-slate-600">HoD, IV CSE-CT</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.K.Sangeetha</p>
                  <p className="text-sm text-slate-600">HoD, IV CSE, CSD, IOT-CE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Prof.K.M.Eazhil</p>
                  <p className="text-sm text-slate-600">HoD, IV CST, IT, AIDS-CE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.S.Narayanan</p>
                  <p className="text-sm text-slate-600">HoD, IV IT, AIML-CT</p>
                </li>
              </ul>
            </div>
          </GlassSurface>

          {/* Co-ordinators */}
          <GlassSurface width="100%" height="100%" borderRadius={16} className="w-full h-full">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Co-ordinators</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold text-slate-900">Mr.K.Karthikeyan</p>
                  <p className="text-sm text-slate-600">AP, CSE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Ms.G.Swathi</p>
                  <p className="text-sm text-slate-600">AP, CSE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.Indhu Naiar</p>
                  <p className="text-sm text-slate-600">AsP, AIDS</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Mr.R.Ruthuraraj</p>
                  <p className="text-sm text-slate-600">AP, MECH</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Ms.C.Parkavi</p>
                  <p className="text-sm text-slate-600">AP, AIML</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Ms.D.Nirmala</p>
                  <p className="text-sm text-slate-600">AP, CSE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Ms.K.Ranjani</p>
                  <p className="text-sm text-slate-600">AP, CSE-IOT</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Ms.S.Sangeetha</p>
                  <p className="text-sm text-slate-600">AP, CSD</p>
                </li>
              </ul>
            </div>
          </GlassSurface>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {/* Advisory Committee */}
          <GlassSurface width="100%" height="100%" borderRadius={16} className="w-full">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Advisory Committee</h3>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <li>
                  <p className="font-semibold text-slate-900">Dr.A.Johnson Santhosh</p>
                  <p className="text-sm text-slate-600">Associate Professor, Department of Mechanical Engineering,<br/>Jimma University, Ethiopia.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.Sudip Roy</p>
                  <p className="text-sm text-slate-600">Associate Professor, CSE,<br/>IIT, Roorkee.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.Hitesh Shrimali</p>
                  <p className="text-sm text-slate-600">Professor, School of Computing and Electrical Engineering,<br/>IIT, Mandi.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.Ajay Pratap</p>
                  <p className="text-sm text-slate-600">Assistant Professor, CSE,<br/>IIT, Varanasi.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. S. Jaya Nirmala</p>
                  <p className="text-sm text-slate-600">Associate Professor, CSE,<br/>NIT, Trichy.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Shihabudheen M. Maliyekkal</p>
                  <p className="text-sm text-slate-600">Professor, Civil & Environmental Engineering,<br/>IIT, Tirupati.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Prof. Hemant Ingale</p>
                  <p className="text-sm text-slate-600">Dean (Academics),<br/>Godavari College of Engineering, Jalgaon, Maharashtra.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. M.Shanmugakumar</p>
                  <p className="text-sm text-slate-600">Founder and CEO (MATIC)<br/>Chennai.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Partha Pratim Gogoi</p>
                  <p className="text-sm text-slate-600">Technical Lead, Nokia Solutions,<br/>Delhi.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.M.Santhoshkumar</p>
                  <p className="text-sm text-slate-600">Senoir Research Engineer,<br/>CEWiT IITM, Chennai.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Moovarkku Mudhalvan</p>
                  <p className="text-sm text-slate-600">OCI ExaCS Senior Software Development Manager,<br/>Oracle - Japan</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Anand Kumaravel</p>
                  <p className="text-sm text-slate-600">Software Development Manager,<br/>Amazon - Texas, United States</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.Sriram Ananthan</p>
                  <p className="text-sm text-slate-600">Professor,<br/>Yorkville University, Canada</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Meena Ramanathan</p>
                  <p className="text-sm text-slate-600">Configuration Management,<br/>Qualcomm, Bengaluru</p>
                </li>
              </ul>
            </div>
          </GlassSurface>
        </div>
      </div>
    </section>
  );
}
