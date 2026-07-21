import { Users } from 'lucide-react';

export default function OrganizingCommitteePage() {
  return (
    <main className="relative z-10 pt-24 pb-16 min-h-screen bg-transparent">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Organizing Committee
          </h1>
          <p className="text-lg text-brand-dark max-w-2xl mx-auto">
            Meet the dedicated individuals organizing <span className="font-gambetta tracking-wide font-semibold text-brand-dark">ICAIDIET'26</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">
          {/* Chief Patrons */}
          <div className="w-full bg-[#fdf08a] rounded-2xl shadow-sm">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Chief Patrons</h3>
              <ul className="space-y-4">
                <li>
                  <p className="text-sm text-slate-600">Deiva Thiru</p>
                  <p className="font-semibold text-slate-900">Dr.S.N. Subbramanian</p>
                  <p className="text-sm text-slate-600">Founder Chairman, SNS Group.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.S. Rajalakshmi</p>
                  <p className="text-sm text-slate-600">Correspondent, SNS Group.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.S. Nalin</p>
                  <p className="text-sm text-slate-600">Secretary / Trustee, SNS Group.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Patrons */}
          <div className="w-full bg-[#fdf08a] rounded-2xl shadow-sm">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Patrons</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold text-slate-900">Dr. V. P. Arunachalam</p>
                  <p className="text-sm text-slate-600">Director, SNS Technical Institutions.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. S. Chenthur Pandian</p>
                  <p className="text-sm text-slate-600">Executive Director, SNS Technical Campus.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. S. Charles</p>
                  <p className="text-sm text-slate-600">Principal, SNS College of Technology.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. P. Tamilselvam</p>
                  <p className="text-sm text-slate-600">VP-Admin., SNS College of Technology.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. P. Vivekanandan</p>
                  <p className="text-sm text-slate-600">VP-Academics, SNS College of Technology.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 items-start">
          {/* Convenors */}
          <div className="w-full bg-[#fdf08a] rounded-2xl shadow-sm">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Convenors</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold text-slate-900">Dr. R. Sudhakaran</p>
                  <p className="text-sm text-slate-600">Vice Principal, SNS College of Technology – AI Campus.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. M. Sudha</p>
                  <p className="text-sm text-slate-600">HoD, IV CSE-CT.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Organizing Secretaries */}
          <div className="w-full bg-[#fdf08a] rounded-2xl shadow-sm">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Organizing Secretaries</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold text-slate-900">Dr. L.M.Nithya</p>
                  <p className="text-sm text-slate-600">Dean (CSE&IT) & IQAC Head</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. P. Sumathi</p>
                  <p className="text-sm text-slate-600">III Year Cluster Head(CS)</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. B. Anuradha</p>
                  <p className="text-sm text-slate-600">II Year Cluster Head(CS)</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. K. Periyakaruppan</p>
                  <p className="text-sm text-slate-600">I Year Cluster Head(CS)</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. S. Sundararajan</p>
                  <p className="text-sm text-slate-600">HoD-MCA & COE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. R. Rajasekaran</p>
                  <p className="text-sm text-slate-600">IQAC Co-ordinator</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Joint Organizing Secretaries */}
          <div className="w-full bg-[#fdf08a] rounded-2xl shadow-sm">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Joint Organizing Secretaries</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold text-slate-900">Dr. S. Narayanan</p>
                  <p className="text-sm text-slate-600">HoD, IV IT, AIML-CT.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. K. M. Eazhil</p>
                  <p className="text-sm text-slate-600">HoD, IV CST, IT, AIDS-CE.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. K. Sangeetha</p>
                  <p className="text-sm text-slate-600">HoD, IV CSE, CSD, IOT-CE.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full mb-8 items-start">
          {/* Technical Co-ordinators */}
          <div className="w-full bg-[#fdf08a] rounded-2xl shadow-sm">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Technical Co-ordinators</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 w-full">
                <li>
                  <p className="font-semibold text-slate-900 whitespace-nowrap">Mr. K. Karthikeyan</p>
                  <p className="text-sm text-slate-600">AP | CSE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 whitespace-nowrap">Ms. M. Saranya</p>
                  <p className="text-sm text-slate-600">AP | CSE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 whitespace-nowrap">Ms. N. Vijayalakshmi</p>
                  <p className="text-sm text-slate-600">AP | CSE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 whitespace-nowrap">Ms. G. Swathi</p>
                  <p className="text-sm text-slate-600">AP | CSE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 whitespace-nowrap">Ms. R. Nirmala</p>
                  <p className="text-sm text-slate-600">AP | CSE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 whitespace-nowrap">Mr. R. Ruthuraraj</p>
                  <p className="text-sm text-slate-600">AP | MECH</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 whitespace-nowrap">Ms. R. Saranya</p>
                  <p className="text-sm text-slate-600">AP | ECE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 whitespace-nowrap">Ms. C. Parkavi</p>
                  <p className="text-sm text-slate-600">AP | AIML</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900 whitespace-nowrap">Ms. K. Ranjani</p>
                  <p className="text-sm text-slate-600">AP | CSE-IoT</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
