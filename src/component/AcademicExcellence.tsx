import { eyebrow, glassSheen } from "../utils/tw";
import { avatar } from "../utils/placeholder";

const stats = [
  {
    num: "18",
    label: "Gold Medalists",
    emoji: "🥇",
    accent: "#D4930A",
    bg: "from-amber-50/80 to-yellow-50/60",
    border: "border-amber-200/60",
    shadow: "shadow-[0_4px_24px_rgba(212,147,10,0.12)]",
    glow: "bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(242,184,75,0.18),transparent)]",
  },
  {
    num: "12",
    label: "Silver Medalists",
    emoji: "🥈",
    accent: "#637B98",
    bg: "from-slate-50/80 to-blue-50/50",
    border: "border-slate-200/60",
    shadow: "shadow-[0_4px_24px_rgba(99,123,152,0.10)]",
    glow: "bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(189,201,219,0.20),transparent)]",
  },
  {
    num: "6",
    label: "Bronze Medalists",
    emoji: "🥉",
    accent: "#B5622A",
    bg: "from-orange-50/80 to-amber-50/50",
    border: "border-orange-200/50",
    shadow: "shadow-[0_4px_24px_rgba(181,98,42,0.10)]",
    glow: "bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,144,90,0.18),transparent)]",
  },
  {
    num: "192",
    label: "University Merit Holders",
    emoji: "🏆",
    accent: "#D4930A",
    bg: "from-amber-50/80 to-yellow-50/60",
    border: "border-amber-200/60",
    shadow: "shadow-[0_4px_24px_rgba(212,147,10,0.12)]",
    glow: "bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(242,184,75,0.16),transparent)]",
  },
];

const toppers = [
  {
    position: "1st",
    rank: 1,
    label: "1st · University",
    name: "Anjali Raj",
    branch: "B.Tech (EE)",
    avatarId: 47,
    year: "2023–24",
  },
  {
    position: "2nd",
    rank: 2,
    label: "2nd · University",
    name: "Nimish",
    branch: "B.Tech (CE)",
    avatarId: 11,
    year: "2023–24",
  },
  {
    position: "2nd",
    rank: 2,
    label: "2nd · University",
    name: "Sakshi Singh",
    branch: "B.Tech (IT)",
    avatarId: 26,
    year: "2023–24",
  },
  {
    position: "3rd",
    rank: 3,
    label: "3rd · University",
    name: "Akshat Rastogi",
    branch: "B.Tech (ME)",
    avatarId: 3,
    year: "2023–24",
  },
];

const rankConfig: Record<string, {
  ring: string;
  badge: string;
  cardBg: string;
  cardBorder: string;
  medalBg: string;
  glow: string;
}> = {
  "1st": {
    ring: "ring-2 ring-[#ffb703] ring-offset-1 ring-offset-white",
    badge: "bg-[linear-gradient(135deg,#F7CF75,#D4930A)] text-white",
    cardBg: "bg-[linear-gradient(160deg,#FFFBF0_0%,#FFF7E0_100%)]",
    cardBorder: "border-amber-200",
    medalBg: "bg-[linear-gradient(135deg,#F7CF75,#D4930A)]",
    glow: "shadow-[0_4px_20px_rgba(212,147,10,0.14)]",
  },
  "2nd": {
    ring: "ring-2 ring-slate-300 ring-offset-1 ring-offset-white",
    badge: "bg-[linear-gradient(135deg,#D8E3EF,#9AAFC4)] text-[#1B4C7F]",
    cardBg: "bg-[linear-gradient(160deg,#F5F8FC_0%,#EEF4FA_100%)]",
    cardBorder: "border-slate-200",
    medalBg: "bg-[linear-gradient(135deg,#D8E3EF,#9AAFC4)]",
    glow: "shadow-[0_4px_16px_rgba(99,123,152,0.12)]",
  },
  "3rd": {
    ring: "ring-2 ring-orange-300 ring-offset-1 ring-offset-white",
    badge: "bg-[linear-gradient(135deg,#F0A07A,#B5622A)] text-white",
    cardBg: "bg-[linear-gradient(160deg,#FFF8F4_0%,#FDF1E8_100%)]",
    cardBorder: "border-orange-200",
    medalBg: "bg-[linear-gradient(135deg,#F0A07A,#B5622A)]",
    glow: "shadow-[0_4px_16px_rgba(181,98,42,0.12)]",
  },
};

const medalEmoji: Record<string, string> = { "1st": "🥇", "2nd": "🥈", "3rd": "🥉" };

const AcademicExcellence = () => (
  <section
    className="relative py-8 lg:py-12 px-[max(24px,calc((100%-1220px)/2))] bg-[linear-gradient(175deg,#EBF3FA_0%,#F4F9FD_50%,#ECF3FA_100%)] overflow-hidden"
    aria-label="Academic excellence"
  >
    <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-[radial-gradient(ellipse,rgba(242,184,75,0.10)_0%,transparent_70%)]" />
    <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(27,76,127,0.06)_0%,transparent_70%)]" />

    <div className="relative">
      {/* ── Header ── */}
      <div className="mb-7">
        <div className={`${eyebrow} !text-[#ffb703]`}>AKTU University Rankings</div>
        <h2 className="font-serif font-black text-[clamp(24px,2.4vw,34px)] leading-[1.1] tracking-[-0.6px] text-[#0A1F3D]">
          Our Toppers,{" "}
          <span className="!text-[#ffb703] text-transparent">
            Our Pride
          </span>
        </h2>
      </div>

      {/* ── Stats row — horizontal cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`group relative flex items-center gap-3 px-4 py-4 rounded-xl bg-gradient-to-br ${s.bg} border ${s.border} ${s.shadow} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
          >
            <div aria-hidden className={`absolute inset-0 pointer-events-none ${s.glow}`} />
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)]" />

            {/* Icon */}
            <div className="shrink-0 w-10 h-10 rounded-xl bg-white/80 shadow-sm border border-white/90 flex items-center justify-center text-[18px] leading-none select-none">
              {s.emoji}
            </div>

            {/* Number + label */}
            <div className="min-w-0">
              <div
                className="font-serif font-black text-[clamp(26px,3vw,36px)] leading-none tracking-tight"
                style={{ color: s.accent }}
              >
                {s.num}
              </div>
              <div className="mt-0.5 text-[11px] font-semibold text-[#3A536B] leading-tight">
                {s.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-[linear-gradient(90deg,transparent,rgba(27,76,127,0.15))]" />
        <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 border border-[rgba(27,76,127,0.10)] shadow-sm">
          <span className="text-[11px]">🏅</span>
          <span className="text-[10px] font-bold tracking-[2px] uppercase text-[#1B4C7F]">AKTU Toppers</span>
          <span className="text-[11px]">🏅</span>
        </div>
        <div className="flex-1 h-px bg-[linear-gradient(90deg,rgba(27,76,127,0.15),transparent)]" />
      </div>

      {/* ── Toppers row — horizontal cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {toppers.map((t, i) => {
          const rc = rankConfig[t.position];
          const isFirst = t.position === "1st";
          return (
            <div
              key={i}
              className={`group relative flex items-center gap-4 px-4 py-4 rounded-2xl border ${rc.cardBg} ${rc.cardBorder} ${rc.glow} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              <span className={glassSheen} aria-hidden />
              {isFirst && (
                <div aria-hidden className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,transparent,#ffb703,transparent)] rounded-l-2xl" />
              )}

              {/* Avatar */}
              <div className={`relative shrink-0 w-20 h-20 rounded-full overflow-hidden ${rc.ring}`}>
                <img src={avatar(t.avatarId)} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <div className={`inline-flex items-center text-[9px] font-black tracking-[1.5px] uppercase px-2.5 py-[4px] rounded-full mb-1.5 ${rc.badge}`}>
                  {t.label}
                </div>
                <div className="font-semibold text-[14px] leading-tight text-[#0A1F3D] truncate">{t.name}</div>
                <div className="text-[11px] text-[#4A6080] mt-0.5">{t.branch}</div>
              </div>

              {/* Medal corner */}
              <div className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-xl ${rc.medalBg} flex items-center justify-center shadow-sm`}>
                <span className="text-[13px] leading-none select-none">{medalEmoji[t.position]}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AcademicExcellence;
