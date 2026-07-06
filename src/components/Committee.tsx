import { Users } from 'lucide-react';

export default function Committee() {
  return (
    <section id="committee" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Organizing Committee
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the dedicated individuals organizing ICAIDIET'26.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Chief Patrons */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Chief Patrons</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold text-slate-900">Deiva Thiru Dr.S.N. Subbramanian</p>
                <p className="text-sm text-slate-600">Founder Chairman, SNS Group</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Dr.S. Rajalakshmi</p>
                <p className="text-sm text-slate-600">Correspondent, SNS Group</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Dr.Nalin.SNS</p>
                <p className="text-sm text-slate-600">Secretary / Trustee, SNS Group</p>
              </li>
            </ul>
          </div>

          {/* Patrons */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Patrons</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold text-slate-900">Dr.V.P. Arunachalam</p>
                <p className="text-sm text-slate-600">Director, SNS Technical Institutions</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Dr.S. Chenthur Pandian</p>
                <p className="text-sm text-slate-600">Executive Director, SNS Technical Campus</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Dr.S. Charles</p>
                <p className="text-sm text-slate-600">Principal, SNS College of Technology</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Dr.P. Tamilselvam</p>
                <p className="text-sm text-slate-600">VP-Admin., SNS College of Technology</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Dr.P. Vivekanandan</p>
                <p className="text-sm text-slate-600">VP-Academics, SNS College of Technology</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Dr.L.M. Nithya</p>
                <p className="text-sm text-slate-600">Head IQAC, SNS College of Technology</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Convenors */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Convenors</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold text-slate-900">Dr.R. Sudhakaran</p>
                <p className="text-sm text-slate-600">Vice Principal, SNS College of Technology - AI Campus</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Dr.M.Sudha</p>
                <p className="text-sm text-slate-600">HoD, IV CSE-CT</p>
              </li>
            </ul>
          </div>

          {/* Organizing Secretaries */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Organizing Secretaries</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold text-slate-900">Dr.S.Narayanan</p>
                <p className="text-sm text-slate-600">HoD, IV IT, AIML-CT</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Dr.K.M.Eazhil</p>
                <p className="text-sm text-slate-600">HoD, IV CST, IT, AIDS-CE</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Dr.K.Sangeetha</p>
                <p className="text-sm text-slate-600">HoD, IV CSE, CSD, IOT-CE</p>
              </li>
            </ul>
          </div>

          {/* Co-ordinators */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Co-ordinators</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold text-slate-900">Mr.K.Karthikeyan</p>
                <p className="text-sm text-slate-600">AP, CSE</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Ms.M.Saranya</p>
                <p className="text-sm text-slate-600">AP, CSE</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Ms.N. Vijayalakshmi</p>
                <p className="text-sm text-slate-600">AP, CSE</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Ms.G. Swathi</p>
                <p className="text-sm text-slate-600">AP, CSE</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Ms.R. Nirmala</p>
                <p className="text-sm text-slate-600">AP, CSE</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
