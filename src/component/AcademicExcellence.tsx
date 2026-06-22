import React from 'react';
import { section, sectionHeadCenter, eyebrowCenter, sectionTitle } from '../utils/tw';
import Icon from './Icon';

const counts = [
  { num: '18', label: 'Gold Medalists', ring: 'text-gold-light border-gold/50 bg-gold/15' },
  { num: '12', label: 'Silver Medalists', ring: 'text-[#C6D3E6] border-white/30 bg-white/10' },
  { num: '6', label: 'Bronze Medalists', ring: 'text-gold-dark border-gold-dark/50 bg-gold-dark/15' },
  { num: '192', label: 'University Merit Holders', ring: 'text-gold-light border-gold/50 bg-gold/15' },
];

const AcademicExcellence = () => {
  return (
    <section className={`${section}`} aria-label="Academic excellence">
      <div className="relative z-[1] rounded-lg overflow-hidden bg-[linear-gradient(150deg,#0a1f3d_0%,#0f2f57_100%)] text-white shadow-soft px-7 py-12 sm:px-10 sm:py-14 reveal">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_85%_10%,rgba(242,184,75,0.14)_0%,transparent_60%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,184,75,0.5),transparent)]" />

        <div className={`${sectionHeadCenter} relative z-[1] !mb-10`}>
          <div className={`${eyebrowCenter} text-gold-light`}>AKTU University Rankings</div>
          <h2 className={`${sectionTitle} text-white`}>Academic Excellence</h2>
          <p className="mt-[18px] text-base leading-[1.85] container mx-auto text-white/65">
            SRMCEM students have consistently demonstrated outstanding performance in AKTU examinations,
            reflecting a strong academic culture and dedication to excellence.
          </p>
        </div>

        <div className="relative z-[1] grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {counts.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center text-center py-9 px-5 rounded-[14px] bg-white/[0.06] border border-white/[0.12] transition-all duration-300 hover:-translate-y-[5px] hover:bg-white/10 hover:border-gold/50"
            >
              <span className={`w-14 h-14 mb-4 grid place-items-center rounded-full border-2 ${c.ring}`}>
                <Icon name="award" className="w-7 h-7" />
              </span>
              <div className="font-display text-[clamp(40px,5vw,56px)] leading-none text-white mb-2">{c.num}</div>
              <div className="text-[12px] font-bold tracking-[1.5px] uppercase text-white/60">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellence;
