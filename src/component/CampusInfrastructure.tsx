import {
  section,
  eyebrow,
  sectionTitle,
  glassCard,
  btnGold,
  btnOutline,
} from "../utils/tw";

import faclties from "../assets/facelties.png";

const facilities = [
  {
    icon: "🖥️",
    title: "Smart Classrooms",
    desc: "Interactive panels and digital boards in every classroom",
  },
  {
    icon: "🤖",
    title: "Robotics, AI & IoT Labs",
    desc: "State-of-the-art innovation and research facilities",
  },
  {
    icon: "📚",
    title: "Central Digital Library",
    desc: "50,000+ volumes with full digital access and e-resources",
  },
  {
    icon: "🔬",
    title: "Department-Specific Labs",
    desc: "Specialized labs for each engineering and science stream",
  },
  {
    icon: "🏗️",
    title: "Workshop Facilities",
    desc: "Industry-standard mechanical and fabrication workshops",
  },
  {
    icon: "🏠",
    title: "On-Campus Hostel",
    desc: "Separate hostels for boys and girls with 24/7 security",
  },
  {
    icon: "📶",
    title: "Fully Wi-Fi Campus",
    desc: "High-speed internet across the entire 100-acre campus",
  },
  {
    icon: "🏥",
    title: "Medical & Ambulance",
    desc: "On-campus health center with ambulance facility 24/7",
  },
  {
    icon: "🎮",
    title: "Indoor Games",
    desc: "Table tennis, chess, carrom and more indoor sports",
  },
  {
    icon: "🏟️",
    title: "Sports Grounds",
    desc: "Cricket, football, basketball, volleyball and athletics",
  },
  {
    icon: "🎭",
    title: "Auditorium & Seminar Halls",
    desc: "Large auditorium and modern seminar halls for events",
  },
  {
    icon: "💼",
    title: "Dedicated Placement Cell",
    desc: "Full-time T&P cell with corporate connections and prep",
  },
  {
    icon: "🍽️",
    title: "Hygienic Cafeteria",
    desc: "Multi-cuisine mess and canteen with nutritious meals",
  },
  {
    icon: "🎯",
    title: "Clubs & Societies",
    desc: "17+ student clubs from technical to cultural activities",
  },
  {
    icon: "🏧",
    title: "ATM & Stationery Shop",
    desc: "On-campus ATM, stationery, and convenience store",
  },
];

const CampusInfrastructure = () => {
  return (
    <section
      id="facilities"
      className={`${section} relative overflow-hidden border-y border-white/10`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(15,39,79,0.82), rgba(15,39,79,0.82)),
          url(${faclties})
        `,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Decorative Blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-4%] h-[400px] w-[400px] rounded-full bg-gold/10 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-[-6%] h-[440px] w-[440px] rounded-full bg-white/5 blur-[120px]"
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-14 reveal">
          <div className={`${eyebrow} !text-gold`}>
            Campus Infrastructure
          </div>

          <h2 className={`${sectionTitle} text-white`}>
            World-Class <span className="text-[#ffb703]">Facilities</span>
          </h2>

          <p className="mt-[18px]  text-base leading-[1.85] text-white/80">
            A vibrant campus designed to support learning, research, sports and
            holistic student wellbeing — all under one roof.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <div
              key={f.title}
              className={`${glassCard} group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-navy hover:bg-navy hover:shadow-md`}
              style={{ animationDelay: `${i * 35}ms` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-2xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                {f.icon}
              </div>

              <div>
                <h3 className="mb-2 text-[15px] font-semibold text-slate-800 transition-colors duration-300 group-hover:text-[#000]">
                  {f.title}
                </h3>

                <p className="text-[13px] leading-[1.7] text-slate-500 transition-colors duration-300 group-hover:text-[#000]/70">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#admissions" className={btnGold}>
            Apply for 2025–26 →
          </a>

          <a
            href="#facilities"
            className={`${btnOutline} border-white/30 text-white hover:border-gold hover:bg-white/10`}
          >
            Virtual Campus Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default CampusInfrastructure;