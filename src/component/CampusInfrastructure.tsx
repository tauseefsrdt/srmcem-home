import {
  section,
  eyebrow,
  sectionTitle,
  titleAccent,
  glassCard,
  btnGold,
  btnOutline,
} from '../utils/tw';

const facilities = [
  { icon: '🖥️', title: 'Smart Classrooms',         desc: 'Interactive panels and digital boards in every classroom for tech-led learning.' },
  { icon: '🤖', title: 'Robotics, AI & IoT Labs',   desc: 'State-of-the-art innovation and research facilities for next-gen engineers.' },
  { icon: '📚', title: 'Central Digital Library',   desc: '50,000+ volumes with full digital access, e-resources and reading zones.' },
  { icon: '🔬', title: 'Department-Specific Labs',  desc: 'Specialized labs for each engineering and science stream with industry-grade equipment.' },
  { icon: '🔧', title: 'Workshop Facilities',       desc: 'Industry-standard mechanical and fabrication workshops for hands-on training.' },
  { icon: '🏠', title: 'On-Campus Hostel',          desc: 'Separate hostels for boys and girls with 24/7 security and modern amenities.' },
  { icon: '📶', title: 'Fully Wi-Fi Campus',        desc: 'High-speed internet connectivity across the entire 100-acre campus, 24/7.' },
  { icon: '🏥', title: 'Medical & Ambulance',       desc: 'On-campus health centre with a resident doctor and ambulance facility 24/7.' },
  { icon: '🎮', title: 'Indoor Games',              desc: 'Table tennis, chess, carrom and a wide range of indoor sports and recreation.' },
  { icon: '⚽', title: 'Sports Grounds',            desc: 'Cricket, football, basketball, volleyball and full athletics infrastructure.' },
  { icon: '🎭', title: 'Auditorium & Seminar Halls',desc: 'Large air-conditioned auditorium and modern seminar halls for events and fests.' },
  { icon: '💼', title: 'Dedicated Placement Cell',  desc: 'Full-time T&P cell with corporate tie-ups, mock interviews and aptitude prep.' },
  { icon: '🍽️', title: 'Hygienic Cafeteria',       desc: 'Multi-cuisine mess and canteen with nutritious, hygienic meals every day.' },
  { icon: '🎯', title: 'Clubs & Societies',         desc: '17+ student clubs spanning technical, cultural, social and entrepreneurial activities.' },
  { icon: '🏧', title: 'ATM & Stationery Shop',     desc: 'On-campus ATM, stationery, and convenience store for everyday student needs.' },
];

const stats = [
  { value: '100', suffix: '+', label: 'Acre Campus' },
  { value: '15',  suffix: '+', label: 'Facilities'  },
  { value: '50K', suffix: '+', label: 'Library Books'},
  { value: '24',  suffix: '/7', label: 'Security'   },
];

const CampusInfrastructure = () => (
  <section
    className={`${section} bg-[linear-gradient(180deg,#eef3fb_0%,#e6eef9_100%)] border-y border-[rgba(15,47,87,0.08)]`}
    id="facilities"
  >
    {/* Decorative blobs */}
    <div aria-hidden className="pointer-events-none absolute -top-24 right-[-4%] w-[400px] h-[400px] rounded-full bg-gold/[0.10] blur-[110px]" />
    <div aria-hidden className="pointer-events-none absolute -bottom-20 left-[-6%] w-[440px] h-[440px] rounded-full bg-navy-mid/[0.08] blur-[120px]" />

    {/* ── Header ── */}
    <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 reveal">
      <div>
        <div className={eyebrow}>Campus Infrastructure</div>
        <h2 className={sectionTitle}>
          World-Class Facilities<br />
          <span className={titleAccent}>on 100 Acres</span>
        </h2>
      </div>
      <p className="text-brand-gray text-[15px] leading-[1.8] max-w-[380px] lg:text-right">
        A vibrant campus designed to support learning, research, sports and holistic
        student wellbeing — all under one roof.
      </p>
    </div>

    {/* ── Stats strip ── */}
    <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 reveal">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center justify-center py-6 px-4 text-center bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-xl shadow-card"
        >
          <div className="font-black text-[32px] leading-none text-navy-dark">
            {s.value}
            <span className="text-gold text-[22px]">{s.suffix}</span>
          </div>
          <div className="text-navy-mid text-[11px] font-bold tracking-[2px] uppercase mt-2">{s.label}</div>
        </div>
      ))}
    </div>

    {/* ── Facilities grid ── */}
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {facilities.map((f, i) => (
        <div
          key={f.title}
          className={`${glassCard} flex items-start gap-4 p-5 reveal`}
          style={{ animationDelay: `${i * 35}ms` }}
        >
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-[12px] flex items-center justify-center text-2xl bg-navy-mid/[0.08] border border-navy-mid/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/15 group-hover:border-gold/40">
            {f.icon}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-[14px] font-bold text-navy-dark leading-snug mb-1.5">
              {f.title}
            </h3>
            <p className="text-[13px] leading-[1.65] text-brand-gray">
              {f.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* ── CTA ── */}
    <div className="relative z-10 mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
      <a href="#admissions" className={btnGold}>Apply for 2025–26 →</a>
      <a href="#facilities"  className={btnOutline}>Virtual Campus Tour</a>
    </div>
  </section>
);

export default CampusInfrastructure;
