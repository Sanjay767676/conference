import ShinyText from '../components/ShinyText';
import sriramImg from '../../assets/images/sriramananthan.jpeg';
import anwarImg from '../../assets/images/anwar.jpeg';
import saahiraImg from '../../assets/images/Dr sahira banu.jpeg';
import bhuvaneswariImg from '../../assets/images/Dr. A. Bhuvaneswari.jpeg';
import srimanImg from '../../assets/images/Dr. Sriman B.jpeg';
import hareeshImg from '../../assets/images/Hareesh  Janakiraman.jpeg';

export default function AdvisoryCommitteePage() {
  return (
    <main className="relative z-10 pt-24 pb-16 min-h-screen bg-transparent">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Advisory Committee
          </h1>
          <p className="text-lg text-brand-dark max-w-2xl mx-auto">
            Our esteemed advisory board for <span className="font-gambetta tracking-wide font-semibold text-brand-dark">ICAIDIET'26</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 items-start">
          <div className="w-full rounded-2xl shadow-sm overflow-hidden border border-slate-100 flex flex-col mb-8">
            <div className="w-full bg-white px-8 py-5 border-b border-slate-100">
              <h3 className="text-xl font-bold w-full">
                <ShinyText text="Keynote Speakers" disabled={false} speed={2} className="text-xl font-bold w-full" color="#0f172a" shineColor="#ffffff" spread={120} direction="left" yoyo={false} pauseOnHover={false} />
              </h3>
            </div>
            <div className="w-full bg-[#ffbf00] bg-opacity-10 p-8 text-center flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center">
                {/* 1. Dr. Sriram Ananthan */}
                <div className="flex flex-col items-center h-full w-full max-w-sm">
                  <div className="w-44 h-44 rounded-full mb-4 shadow-md border-4 border-white overflow-hidden shrink-0 bg-white">
                    <img src={sriramImg} alt="Dr. Sriram Ananthan" className="w-full h-full object-cover object-top scale-110" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Dr. Sriram Ananthan</h4>
                  <div className="flex flex-col items-center h-16 justify-start">
                    <p className="text-sm text-slate-700 font-medium text-center">Associate Professor,</p>
                    <p className="text-sm text-slate-700 text-center">Yorkville University, Canada.</p>
                  </div>
                  <p className="text-sm text-slate-600 mt-4 text-justify px-2">
                    Sriram Ananthan is an academic leader, entrepreneur, coach, professor, and writer with a background in banking and business management. Holding a Ph.D. and MBA, he brings over 20 years of experience across academia and business. He has served as a professor at Yorkville University and Acsenda School of Management, contributing to student success, curriculum development, and AI-driven learning. He has authored and contributed to books and peer-reviewed journal articles published by reputed academic publishers, including IGI Global, Emerald, Springer, and Wiley.
                  </p>
                </div>

                {/* 2. Dr. Anwar Basha H */}
                <div className="flex flex-col items-center h-full w-full max-w-sm">
                  <div className="w-44 h-44 rounded-full mb-4 shadow-md border-4 border-white overflow-hidden shrink-0 bg-white">
                    <img src={anwarImg} alt="Dr. Anwar Basha H" className="w-full h-full object-cover object-top scale-110" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Dr. Anwar Basha H</h4>
                  <div className="flex flex-col items-center h-16 justify-start">
                    <p className="text-sm text-slate-700 font-medium text-center">Senior Lecturer, Data Science &amp; IT</p>
                    <p className="text-sm text-slate-700 text-center">INTI International University, Nilai, Malaysia</p>
                  </div>
                  <p className="text-sm text-slate-600 mt-4 text-justify px-2">
                    Dr. Anwar Basha H is a Senior Lecturer in the Faculty of Data Science and Information Technology at INTI International University, Nilai, Malaysia. He holds a Ph.D. in Computer Science and Engineering and has over 19 years of experience in teaching and the IT industry. He has published research articles in peer-reviewed international journals and presented papers at conferences globally. His research interests include Multi-Cloud Storage, Cybersecurity, Quantum Cryptography, Edge Computing, and Big Data Analytics.
                  </p>
                </div>

                {/* 3. Dr. Saahira Banu */}
                <div className="flex flex-col items-center h-full w-full max-w-sm">
                  <div className="w-44 h-44 rounded-full mb-4 shadow-md border-4 border-white overflow-hidden shrink-0 bg-white">
                    <img src={saahiraImg} alt="Dr. Saahira Banu" className="w-full h-full object-cover object-center scale-105" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Dr. Saahira Banu</h4>
                  <div className="flex flex-col items-center h-16 justify-start">
                    <p className="text-sm text-slate-700 font-medium text-center">Associate Professor &amp; Research Committee Head</p>
                    <p className="text-sm text-slate-700 text-center">Jazan University, Saudi Arabia</p>
                  </div>
                  <p className="text-sm text-slate-600 mt-4 text-justify px-2">
                    Dr. Saahira Banu is an accomplished academician and researcher with over 20 years of experience in higher education. She serves as an Associate Professor at Jazan University, Saudi Arabia, and Research Committee Head at the Engineering and Technology Research Center, Dept. of Computer Science. She is also pursuing Postdoctoral Research at SGS, Lincoln University College, Malaysia. Her focus areas include emerging technologies, digital transformation, research funding, and international academic collaboration.
                  </p>
                </div>

                {/* 4. Dr. A. Bhuvaneswari */}
                <div className="flex flex-col items-center h-full w-full max-w-sm">
                  <div className="w-44 h-44 rounded-full mb-4 shadow-md border-4 border-white overflow-hidden shrink-0 bg-white">
                    <img src={bhuvaneswariImg} alt="Dr. A. Bhuvaneswari" className="w-full h-full object-cover object-top" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Dr. A. Bhuvaneswari</h4>
                  <div className="flex flex-col items-center h-16 justify-start">
                    <p className="text-sm text-slate-700 font-medium text-center">Professor &amp; Head, Information Technology</p>
                    <p className="text-sm text-slate-700 text-center">Adhiparasakthi Engineering College, Tamil Nadu, India</p>
                  </div>
                  <p className="text-sm text-slate-600 mt-4 text-justify px-2">
                    Dr. A. Bhuvaneswari is a Professor and Head of the Department of Information Technology at Adhiparasakthi Engineering College, Melmaruvathur, Tamil Nadu. Holding an M.E. and Ph.D., she has decades of pedagogical and research leadership, guiding numerous scholars and driving research initiatives in Intelligent Systems and Information Technology.
                  </p>
                </div>

                {/* 5. Dr. Sriman B */}
                <div className="flex flex-col items-center h-full w-full max-w-sm">
                  <div className="w-44 h-44 rounded-full mb-4 shadow-md border-4 border-white overflow-hidden shrink-0 bg-white">
                    <img src={srimanImg} alt="Dr. Sriman B" className="w-full h-full object-cover object-top" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Dr. Sriman B</h4>
                  <div className="flex flex-col items-center h-16 justify-start">
                    <p className="text-sm text-slate-700 font-medium text-center">Assistant Professor, CSE / IT</p>
                    <p className="text-sm text-slate-700 text-center">Vel Tech R&amp;D Institute of Science and Technology, India</p>
                  </div>
                  <p className="text-sm text-slate-600 mt-4 text-justify px-2">
                    Dr. Sriman B is an academic researcher and Assistant Professor specializing in Computer Science and Engineering. He received his Ph.D. from SRM Institute of Science and Technology, with primary research interests in Blockchain Security, Post-Quantum Cryptography, Cyber Security, and Decentralized Finance (DeFi), authoring multiple peer-reviewed papers.
                  </p>
                </div>

                {/* 6. Hareesh Janakiraman */}
                <div className="flex flex-col items-center h-full w-full max-w-sm">
                  <div className="w-44 h-44 rounded-full mb-4 shadow-md border-4 border-white overflow-hidden shrink-0 bg-white">
                    <img src={hareeshImg} alt="Hareesh Janakiraman" className="w-full h-full object-cover object-center" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Hareesh Janakiraman</h4>
                  <div className="flex flex-col items-center h-16 justify-start">
                    <p className="text-sm text-slate-700 font-medium text-center">Director, Embedded-Guru LLC | Fulbright Specialist</p>
                    <p className="text-sm text-slate-700 text-center">Houston, Texas, United States</p>
                  </div>
                  <p className="text-sm text-slate-600 mt-4 text-justify px-2">
                    Hareesh Janakiraman brings 40 years of expertise in Microprocessors (µP), Microcontrollers (MCU), and DSPs, spanning 27 years at Texas Instruments in silicon validation, debug, design, and engineering management. Selected as a Fulbright Specialist in 2024 by the U.S. Dept. of State, he is the Director of Embedded-Guru LLC and a Distinguished Visiting / Adjunct Professor sharing industry knowledge across international universities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full rounded-2xl shadow-sm overflow-hidden border border-slate-100 flex flex-col mb-8">
            <div className="w-full bg-white px-8 py-5 border-b border-slate-100">
              <h3 className="text-xl font-bold w-full">
                <ShinyText text="Advisory Committee" disabled={false} speed={2} className="text-xl font-bold w-full" color="#0f172a" shineColor="#ffffff" spread={120} direction="left" yoyo={false} pauseOnHover={false} />
              </h3>
            </div>
            <div className="w-full bg-[#ffbf00] p-8 text-left flex-1">
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <li>
                  <p className="font-semibold text-slate-900">Dr.Sriram Ananthan</p>
                  <p className="text-sm text-slate-600">Associate Professor, </p>
                  <p className="text-sm text-slate-600">Yorkville University, Canada.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Amit Kohli</p>
                  <p className="text-sm text-slate-600">Associate Professor,</p>
                  <p className="text-sm text-slate-600">University Canada West, Canada.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Arokiaraj David</p>
                  <p className="text-sm text-slate-600">Associate Professor,</p>
                  <p className="text-sm text-slate-600">SBS Swiss Business School, UAE.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.A.Johnson Santhosh</p>
                  <p className="text-sm text-slate-600">Associate Professor,</p>
                  <p className="text-sm text-slate-600">Jimma University, Ethiopia.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. A.SAAHIRA BANU</p>
                  <p className="text-sm text-slate-600">Assistant Professor, Dept. of Computer Science , </p>
                  <p className="text-sm text-slate-600">Jazan University, Saudi Arabia. </p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Moovarkku Mudhalvan</p>
                  <p className="text-sm text-slate-600">Senior Software Development Manager, <br />Oracle, Japan.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Anand Kumaravel</p>
                  <p className="text-sm text-slate-600">Software Development Manager, <br /> Amazon, Texas, United States.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Kathirvel Nallappan</p>
                  <p className="text-sm text-slate-600">Senior Optical Systems Engineer,<br /> Zhone Technologies Inc, Canada.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.Hitesh Shrimali</p>
                  <p className="text-sm text-slate-600">Professor, <br />IIT Mandi, Himachal Pradesh, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Prof. Hemant Ingale</p>
                  <p className="text-sm text-slate-600">Dean (Academics), <br /> Godavari College of Engineering,<br />Jalgaon, Maharashtra, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Srinivas Konda</p>
                  <p className="text-sm text-slate-600">Professor & Dean of CSE, <br />Kaveri University,<br />Hyderabad, Telangana, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Arun Malik</p>
                  <p className="text-sm text-slate-600">Professor & Additional Dean, <br />Lovely Professional University,<br />Punjab, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. A. Bhuvaneswari </p>
                  <p className="text-sm text-slate-600">Professor, IT<br /> Adhiparasakthi Engineering College,<br />Chengalpattu, Tamil Nadu, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Somasekar J </p>
                  <p className="text-sm text-slate-600">Professor, CSE, <br />JAIN University,<br />Bengaluru, Karnataka, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. S.SEENUVASAMURTHI</p>
                  <p className="text-sm text-slate-600">Principal, <br /> Sri Lakshmi Narayana College of Engineering,<br />Puducherry, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.Hitesh Shrimali</p>
                  <p className="text-sm text-slate-600">Professor, <br />IIT Mandi, Himachal Pradesh, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Shihabudheen M. Maliyekkal</p>
                  <p className="text-sm text-slate-600">Professor, <br />IIT Tirupati, Andhra Pradesh, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Jyoti Singhai</p>
                  <p className="text-sm text-slate-600">Professor, CSE, <br />MANIT Bhopal, Madhya Pradesh, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.Sudip Roy</p>
                  <p className="text-sm text-slate-600">Associate Professor, CSE, <br />IIT Roorkee, Uttarakhand, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. S. Jaya Nirmala</p>
                  <p className="text-sm text-slate-600">Associate Professor, CSE,<br /> NIT Trichy,Tamil Nadu, India.</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. Abhinoy Singh </p>
                  <p className="text-sm text-slate-600">Assistant Professor, <br /> IIT Patna, Bihar, India</p>
                </li>
                <li>

                  <p className="font-semibold text-slate-900">Dr.Ajay Pratap</p>
                  <p className="text-sm text-slate-600">Assistant Professor, CSE, <br /> IIT Varanasi, Uttar Pradesh, India</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr. M.Shanmugakumar</p>
                  <p className="text-sm text-slate-600">Founder and CEO, MATIC,<br />Chennai, Tamil Nadu, India</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Partha Pratim Gogoi</p>
                  <p className="text-sm text-slate-600">Technical Lead,<br /> Nokia Solutions,Delhi, India</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Dr.M.Santhoshkumar</p>
                  <p className="text-sm text-slate-600">Senoir Research Engineer, CEWiT IITM,<br />Chennai, Tamil Nadu, India</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Meena Ramanathan</p>
                  <p className="text-sm text-slate-600">Configuration Management, Qualcomm,<br />Bengaluru, Karnataka,India</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
