import { eyebrowCenter, section, sectionTitle } from '../utils/tw';

const stats = [
  { num: '18',  label: 'Gold Medalists',         accent: '#F2B84B', accentBg: 'rgba(242,184,75,0.11)',  accentBorder: 'rgba(242,184,75,0.40)',  rankLabel: 'GOLD'   },
  { num: '12',  label: 'Silver Medalists',        accent: '#BDC9DB', accentBg: 'rgba(189,201,219,0.08)', accentBorder: 'rgba(189,201,219,0.30)', rankLabel: 'SILVER' },
  { num: '6',   label: 'Bronze Medalists',        accent: '#D4905A', accentBg: 'rgba(212,144,90,0.09)',  accentBorder: 'rgba(212,144,90,0.35)',  rankLabel: 'BRONZE' },
  { num: '192', label: 'University Merit Holders', accent: '#F2B84B', accentBg: 'rgba(242,184,75,0.07)',  accentBorder: 'rgba(242,184,75,0.25)',  rankLabel: 'MERIT'  },
];

const toppers = [
  { position: '1st', label: '1st · University', name: 'Anjali Raj',     branch: 'B.Tech (EE)', photo: 'https://i.pravatar.cc/150?img=47' },
  { position: '2nd', label: '2nd · University', name: 'Nimish',         branch: 'B.Tech (CE)', photo: 'https://i.pravatar.cc/150?img=68' },
  { position: '2nd', label: '2nd · University', name: 'Sakshi Singh',   branch: 'B.Tech (IT)', photo: 'https://i.pravatar.cc/150?img=32' },
  { position: '3rd', label: '3rd · University', name: 'Akshat Rastogi', branch: 'B.Tech (ME)', photo: 'https://i.pravatar.cc/150?img=53' },
];

const posStyle: Record<string, { ring: string; badge: string }> = {
  '1st': { ring: 'border-[#F2B84B]',  badge: 'bg-[#F2B84B] text-[#0A1F3D]'  },
  '2nd': { ring: 'border-[#BDC9DB]',  badge: 'bg-[#BDC9DB] text-[#0A1F3D]'  },
  '3rd': { ring: 'border-[#D4905A]',  badge: 'bg-[#D4905A] text-white'       },
};

const AcademicExcellence = () => (
  <section className={section} aria-label="Academic excellence">
    <div className="relative z-[1] rounded-lg overflow-hidden bg-[linear-gradient(150deg,#0a1f3d_0%,#0f2f57_100%)] text-white shadow-soft reveal">
      {/* Decorative glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_80%_5%,rgba(242,184,75,0.09)_0%,transparent_55%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,184,75,0.55),transparent)]" />

      <div className="relative z-[1] px-6 pt-9 pb-8 sm:px-10 sm:pt-11">
        {/* Header */}
        <div className="text-center mb-7">
          {/* <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-gold/15 border border-gold/35 text-[10px] font-bold tracking-[2.5px] uppercase text-gold-light">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              AKTU University Rankings
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            </span>
          </div> */}
          <div className={`${eyebrowCenter} text-[#f2b84b]`}>AKTU University Rankings</div>
          <h2 className={`${sectionTitle} text-white`}>Our Toppers,
Our Pride</h2>
          <p className="mt-3 text-sm leading-relaxed  mx-auto text-white/55">
            SRMCEM students have consistently demonstrated outstanding performance in AKTU examinations,
            reflecting a strong academic culture and dedication to excellence.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative flex flex-col items-center text-center pt-5 pb-5 px-4 rounded-[12px] border overflow-hidden transition-all duration-300 hover:-translate-y-[3px]"
              style={{ backgroundColor: s.accentBg, borderColor: s.accentBorder }}
            >
              <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: `linear-gradient(90deg,transparent,${s.accent},transparent)` }} />
              <div className="text-[8px] font-black tracking-[2.5px] uppercase mb-2.5 px-2 py-[2px] rounded-pill border" style={{ color: s.accent, borderColor: `${s.accent}38`, backgroundColor: `${s.accent}12` }}>
                {s.rankLabel}
              </div>
              <div className="font-display text-[clamp(34px,4.5vw,46px)] leading-none font-black mb-1" style={{ color: s.accent }}>
                {s.num}
              </div>
              <div className="text-[10px] font-medium tracking-[0.5px] uppercase text-white/50 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-white/[0.09]" />
          <span className="text-[9px] font-bold tracking-[2px] uppercase text-white/35 px-3">University Toppers</span>
          <div className="flex-1 h-px bg-white/[0.09]" />
        </div>

        {/* Toppers row — horizontal cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {toppers.map((t, i) => {
            const ps = posStyle[t.position];
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-3 rounded-[12px] bg-white/[0.04] border border-white/[0.09] transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.16]"
              >
                <div className="relative shrink-0">
                  <img src={t.photo} alt={t.name} className={`w-10 h-10 rounded-full object-cover border-2 ${ps.ring}`} />
                </div>
                <div className="min-w-0">
                  <div className={`text-[8px] font-black tracking-[1.5px] uppercase mb-0.5 px-1.5 py-[2px] rounded-sm inline-block ${ps.badge}`}>
                    {t.label}
                  </div>
                  <div className="text-white font-semibold text-[12px] leading-tight truncate">{t.name}</div>
                  <div className="text-white/40 text-[10px] mt-0.5">{t.branch}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default AcademicExcellence;
