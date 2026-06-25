import React from 'react';
import { section, eyebrow, sectionTitle, sectionDesc } from '../utils/tw';
import bestPackages from '../assets/best-packages.png';

const minis = [
  { num: '450+',  label: 'Multiple Offers / Student' },
  { num: '1000+', label: 'Multi-Million $ Selections' },
  { num: '90%+',  label: 'CMM Level 5 Companies' },
];

const rows = [
  { num: '100%',  title: 'Placement — CS & IT',        sub: 'Computer Science and Information Technology branches', gold: true },
  { num: '100%',  title: 'Placement — Management',     sub: 'MBA placement with top BFSI and consulting firms',    gold: true },
  { num: '50+',   title: 'Core Engineering Companies', sub: 'Daikin, Torrent Power, Prism Johnson & more',        gold: false },
  { num: '8119+', title: 'Alumni Network',             sub: 'Placed across TCS, HCL, Wipro, Paytm & beyond',     gold: false },
];

const Placements = () => {
  return (
    <section
      className={`${section} overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#1B5EA8_0%,#0F4A85_45%,#0A3060_100%)]`}
      id="placements"
    >
      {/* Background depth layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_85%_75%,rgba(242,184,75,0.09)_0%,transparent_70%)]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_45%_at_5%_55%,rgba(27,76,127,0.55)_0%,transparent_65%)]" aria-hidden />

      {/* Watermark */}
      <div className="absolute right-[4vw] top-1/2 -translate-y-1/2 -rotate-90 font-display text-[clamp(120px,18vw,180px)] tracking-[10px] text-white/[0.04] pointer-events-none z-0 max-[900px]:hidden select-none">
        PLACEMENTS
      </div>

      {/* Decorative rings */}
      <div className="absolute top-16 right-16 w-72 h-72 rounded-full border border-white/[0.04] pointer-events-none" aria-hidden />
      <div className="absolute top-20 right-20 w-52 h-52 rounded-full border border-gold/[0.07] pointer-events-none" aria-hidden />

      {/* Section header */}
      <div className="mb-14 reveal relative z-[1]">
        <div className={`${eyebrow} !text-gold-light`}>Career Success</div>
        <h2 className={`${sectionTitle} text-white`}>
          2500+ Job Offers.<br />Every Year.
        </h2>
        <p className={`${sectionDesc} !text-white/65 !mx-0`}>
          100%+ Placement Score in CS &amp; IT, Management, Computer Applications, and Polytechnic.
          Our dedicated T&amp;P Cell works with 250+ companies — from CMM Level 5 giants to core engineering firms.
        </p>
      </div>

      {/* Main content grid */}
      <div className="relative z-[1] grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">

        {/* LEFT — Student image + quote */}
        <div className="reveal">
          <div className="group relative">
            {/* Glow halo */}
            <div
              className="absolute -inset-2 rounded-2xl blur-2xl opacity-50 bg-[linear-gradient(135deg,rgba(242,184,75,0.35),rgba(27,76,127,0.25))]"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] shadow-[0_32px_80px_rgba(7,22,46,0.65)]">
              {/* Gold shimmer at top */}
              <div
                className="absolute top-0 inset-x-0 h-[3px] z-10 bg-[linear-gradient(90deg,transparent_0%,#F2B84B_40%,#F7CF75_60%,transparent_100%)]"
                aria-hidden
              />

              <img
                src={bestPackages}
                alt="SRMCEM campus topper Aman Verma placed at 47 LPA"
                loading="lazy"
                className="w-full h-[clamp(360px,42vw,520px)] object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,43,0.02)_0%,transparent_35%,rgba(7,22,43,0.88)_100%)]"
                aria-hidden
              />

              {/* Highest-package badge */}
              <div className="absolute top-5 left-5 flex flex-col items-start rounded-[16px] bg-white/92 backdrop-blur-glass border border-white/80 shadow-[0_10px_36px_rgba(0,0,0,0.22)] px-5 py-3">
                <div className="font-display text-[clamp(40px,5vw,58px)] leading-[0.85] text-white">
                  47<span className="text-[0.32em] text-gold-dark ml-1.5 align-baseline">LPA</span>
                </div>
                <div className="mt-1 text-[10px] tracking-[2px] uppercase text-white/70 font-bold">
                  Highest Package Achieved
                </div>
              </div>

              {/* Topper caption */}
              <div className="absolute left-0 right-0 bottom-0 p-6">
                <div className="text-[11px] font-bold tracking-[2.5px] uppercase text-gold mb-1">
                  Campus Topper · 2024
                </div>
                <div className="font-serif text-[22px] font-extrabold leading-tight text-white">
                  Aman Verma
                </div>
                <div className="mt-0.5 text-[13px] text-white/70">
                  B.Tech CSE · Placed at a global tech leader
                </div>
              </div>
            </div>
          </div>

          {/* Quote block */}
         
        </div>

        {/* RIGHT — Mini stats + row stats + CTA */}
        <div>
          {/* Mini stat cards */}
          <div className="grid grid-cols-3 gap-3 mb-7">
            {minis.map((m, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl bg-white/[0.07] border border-white/[0.10] backdrop-blur-sm px-4 py-5 text-center hover:bg-white/[0.13] hover:border-gold/20 transition-all duration-300"
              >
                <div
                  className="absolute top-0 inset-x-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(242,184,75,0.7),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden
                />
                <div className="font-display text-[26px] text-gold leading-none mb-1.5">
                  {m.num}
                </div>
                <div className="text-[9px] tracking-[1.5px] uppercase text-white/45 font-bold leading-[1.5]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Row stat cards */}
          <div className="flex flex-col gap-3 reveal">
            {rows.map((r, i) => (
              <div
                key={i}
                className="group relative flex items-center gap-5 py-5 px-6 rounded-xl bg-white/[0.07] border border-white/[0.10] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.12] hover:border-white/20 hover:-translate-y-0.5 overflow-hidden"
              >
                {/* Left accent bar */}
                <div
                  className={`absolute left-0 inset-y-0 w-[3px] rounded-r-full transition-opacity duration-300 ${r.gold ? 'bg-[linear-gradient(180deg,#F7CF75,#F2B84B)] opacity-80 group-hover:opacity-100' : 'bg-white/20 group-hover:bg-white/40'}`}
                  aria-hidden
                />

                <div className={`font-display text-[32px] leading-none flex-shrink-0 w-[84px] ${r.gold ? 'text-gold' : 'text-white'}`}>
                  {r.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[12px] text-white uppercase tracking-[1px] mb-0.5">
                    {r.title}
                  </div>
                  <div className="text-[12px] text-white/45 leading-[1.5]">{r.sub}</div>
                </div>
                <svg
                  className="flex-shrink-0 text-white/20 group-hover:text-gold/50 transition-colors duration-300"
                  width="17" height="17" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#"
            className="mt-6 flex items-center justify-center gap-2.5 w-full py-[15px] rounded-xl bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] text-navy-deep text-sm font-bold tracking-[0.6px] shadow-[0_10px_36px_rgba(242,184,75,0.38)] hover:-translate-y-0.5 hover:shadow-[0_14px_44px_rgba(242,184,75,0.55)] transition-all duration-300"
          >
            Explore Placement Records
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Placements;
