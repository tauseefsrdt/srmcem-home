import { eyebrow, section, sectionTitle } from '../utils/tw';
import { avatar } from '../utils/placeholder';

const stats = [
  { num: '18',  label: 'Gold Medalists',          emoji: '🥇', accent: '#F2B84B', glow: 'rgba(242,184,75,0.18)'  },
  { num: '12',  label: 'Silver Medalists',         emoji: '🥈', accent: '#BDC9DB', glow: 'rgba(189,201,219,0.14)' },
  { num: '6',   label: 'Bronze Medalists',         emoji: '🥉', accent: '#D4905A', glow: 'rgba(212,144,90,0.16)'  },
  { num: '192', label: 'University Merit Holders', emoji: '🏆', accent: '#F2B84B', glow: 'rgba(242,184,75,0.14)'  },
];

const toppers = [
  { position: '1st', label: '1st · University', name: 'Anjali Raj',     branch: 'B.Tech (EE)', avatarId: 47 },
  { position: '2nd', label: '2nd · University', name: 'Nimish',         branch: 'B.Tech (CE)', avatarId: 11 },
  { position: '2nd', label: '2nd · University', name: 'Sakshi Singh',   branch: 'B.Tech (IT)', avatarId: 26 },
  { position: '3rd', label: '3rd · University', name: 'Akshat Rastogi', branch: 'B.Tech (ME)', avatarId: 3  },
];

const posStyle: Record<string, { ring: string; badge: string }> = {
  '1st': { ring: 'border-[#F2B84B]',  badge: 'bg-[#F2B84B] text-[#0A1F3D]'  },
  '2nd': { ring: 'border-[#BDC9DB]',  badge: 'bg-[#BDC9DB] text-[#0A1F3D]'  },
  '3rd': { ring: 'border-[#D4905A]',  badge: 'bg-[#D4905A] text-white'       },
};

const AcademicExcellence = () => (
  <section className={`${section} bg-[linear-gradient(180deg,#CEE0EF_0%,#E8F3FB_100%)]`} aria-label="Academic excellence">
    <div className="relative z-[1] rounded-2xl overflow-hidden bg-[linear-gradient(150deg,#0a1f3d_0%,#0f2f57_100%)] text-white shadow-soft reveal">
      {/* Decorative glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_80%_5%,rgba(242,184,75,0.09)_0%,transparent_55%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,184,75,0.55),transparent)]" />

      <div className="relative z-[1] px-6 pt-9 pb-8 sm:px-10 sm:pt-11">
        {/* Header */}
        <div className="mb-8">
          <div className={`${eyebrow} text-[#f2b84b]`}>AKTU University Rankings</div>
          <h2 className={`${sectionTitle} text-white`}>Our Toppers,Our Pride</h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative flex flex-col items-center text-center px-4 py-7 rounded-2xl bg-white/[0.06] border border-white/[0.10] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.10] hover:border-white/[0.18]"
            >
              {/* Subtle glow behind emoji */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                style={{ background: s.glow }}
                aria-hidden
              />

              {/* Emoji icon in frosted tile */}
              <div className="relative mb-4 w-14 h-14 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-[30px] leading-none select-none">
                {s.emoji}
              </div>

              {/* Number */}
              <div
                className="font-display text-[clamp(36px,4.5vw,50px)] leading-none font-black mb-2"
                style={{ color: s.accent }}
              >
                {s.num}
              </div>

              {/* Label */}
              <div className="text-[11px] font-semibold tracking-[0.5px] text-white/55 leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-white/[0.09]" />
          <span className="text-[9px] font-bold tracking-[2px] uppercase text-white/35 px-3">University Toppers</span>
          <div className="flex-1 h-px bg-white/[0.09]" />
        </div>

        {/* Toppers row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {toppers.map((t, i) => {
            const ps = posStyle[t.position];
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-3 rounded-[14px] bg-white/[0.04] border border-white/[0.09] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.18]"
              >
                {/* Avatar photo with rank-coloured ring */}
                <div className={`relative shrink-0 w-11 h-11 rounded-full overflow-hidden border-2 ${ps.ring}`}>
                  <img
                    src={avatar(t.avatarId)}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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
