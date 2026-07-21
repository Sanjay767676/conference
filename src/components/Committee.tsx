import { Users } from 'lucide-react';


export default function Committee() {
  return (
    <section id="committee" className="pt-4 pb-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Committee
          </h2>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 items-start">
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

          {/* Technical Co-ordinators */}
          <div className="w-full bg-[#fdf08a] rounded-2xl shadow-sm">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Technical Co-ordinators</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold text-slate-900">Mr. K. Karthikeyan</p>
                  <p className="text-sm text-slate-600">AP | CSE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Ms. M. Saranya</p>
                  <p className="text-sm text-slate-600">AP | CSE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Ms. N. Vijayalakshmi</p>
                  <p className="text-sm text-slate-600">AP | CSE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Ms. G. Swathi</p>
                  <p className="text-sm text-slate-600">AP | CSE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Ms. R. Nirmala</p>
                  <p className="text-sm text-slate-600">AP | CSE</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 items-start">
          {/* Advisory Committee */}
          <div className="w-full bg-[#fdf08a] rounded-2xl shadow-sm">
            <div className="w-full flex flex-col items-start p-8 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 w-full">Advisory Committee</h3>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <li>
                  <p className="font-semibold text-slate-900">Dr. Uma Perumal</p>
                  <p className="text-sm text-slate-600">Assistant Professor, College of Engineering and Computer Science,<br />Jazan University, Saudi Arabia</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Arokiaraj David</p>
                  <p className="text-sm text-slate-600">Associate Professor,<br />SBS Swiss Business School, RAK Campus, UAE</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.Sriram Ananthan</p>
                  <p className="text-sm text-slate-600">Professor,<br />Yorkville University, Canada</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Moovarkku Mudhalvan</p>
                  <p className="text-sm text-slate-600">OCI ExaCS Senior Software Development Manager,<br />Oracle - Japan</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Anand Kumaravel</p>
                  <p className="text-sm text-slate-600">Software Development Manager,<br />Amazon - Texas, United States</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.A.Johnson Santhosh</p>
                  <p className="text-sm text-slate-600">Associate Professor, Department of Mechanical Engineering,<br />Jimma University, Ethiopia.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Srinivas Konda</p>
                  <p className="text-sm text-slate-600">Professor & Dean of CSE ,<br />School of Engineering & Technology ,Kaveri University Gowraram, Hyderabad.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Abhinoy Singh </p>
                  <p className="text-sm text-slate-600">Assistant Professor,<br />IIT Patna</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.Sudip Roy</p>
                  <p className="text-sm text-slate-600">Associate Professor, CSE,<br />IIT, Roorkee.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. A. Bhuvaneswari </p>
                  <p className="text-sm text-slate-600">Professor ,IT,<br />Adhiparasakthi Engineering College , <br /> Chengalpattu </p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Somasekar J </p>
                  <p className="text-sm text-slate-600">Professor, CSE<br /> JAIN University, Bengaluru</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.Hitesh Shrimali</p>
                  <p className="text-sm text-slate-600">Professor, School of Computing and Electrical Engineering,<br />IIT, Mandi.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.Ajay Pratap</p>
                  <p className="text-sm text-slate-600">Assistant Professor, CSE,<br />IIT, Varanasi.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Shihabudheen M. Maliyekkal</p>
                  <p className="text-sm text-slate-600">Professor, Civil & Environmental Engineering,<br />IIT, Tirupati.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. S. Jaya Nirmala</p>
                  <p className="text-sm text-slate-600">Associate Professor, CSE,<br />NIT, Trichy.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. S.SEENUVASAMURTHI</p>
                  <p className="text-sm text-slate-600">Principal,<br />Sri Lakshmi Narayana College of Engineering, Puducherry.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Prof. Hemant Ingale</p>
                  <p className="text-sm text-slate-600">Dean (Academics),<br />Godavari College of Engineering, Jalgaon, Maharashtra.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Arun Malik</p>
                  <p className="text-sm text-slate-600">Professor & Additional Dean, Head of School (School of Computing and Artificial Intelligence),<br />Lovely Professional University, Punjab.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Jyoti Singhai</p>
                  <p className="text-sm text-slate-600">Professor, MANIT<br />Bhopal, Madhya Pradesh, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. M.Shanmugakumar</p>
                  <p className="text-sm text-slate-600">Founder and CEO (MATIC)<br />Chennai.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Partha Pratim Gogoi</p>
                  <p className="text-sm text-slate-600">Technical Lead, Nokia Solutions,<br />Delhi.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.M.Santhoshkumar</p>
                  <p className="text-sm text-slate-600">Senoir Research Engineer,<br />CEWiT IITM, Chennai.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Meena Ramanathan</p>
                  <p className="text-sm text-slate-600">Configuration Management,<br />Qualcomm, Bengaluru</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
