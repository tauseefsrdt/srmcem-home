import React from 'react';
import { section, btnGold } from '../utils/tw';
import Icon from './Icon';

const CTA = () => {
  return (
    <section className={`${section}`} aria-label="Admissions call to action">
      <div className="relative z-[1] overflow-hidden rounded-lg bg-[linear-gradient(135deg,#0F2F57_0%,#1B4C7F_100%)] border border-gold/30 shadow-soft flex items-center justify-between flex-wrap gap-10 px-8 py-12 sm:px-12 sm:py-14 reveal">
        {/* theme accents */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,184,75,0.6),transparent)]" aria-hidden />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_88%_20%,rgba(242,184,75,0.22)_0%,transparent_60%),radial-gradient(ellipse_50%_70%_at_5%_90%,rgba(27,76,127,0.5)_0%,transparent_55%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:54px_54px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />

        <div className="relative z-[1]">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[3px] uppercase text-gold-light mb-3.5 before:content-[''] before:w-[26px] before:h-0.5 before:bg-gold">Admissions 2026-27</div>
          <h2 className="font-serif font-black text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.5px] text-white">Your Engineering<br />Journey Starts Here</h2>
        </div>
        <div className="relative z-[1] flex flex-wrap gap-4 max-[560px]:w-full">
          <a href="#admissions" className={`${btnGold} max-[560px]:flex-1`}>Apply Online →</a>
          <a href="tel:18001035298" className="inline-flex items-center justify-center gap-2 px-[30px] py-[14px] text-sm font-semibold tracking-[0.4px] rounded-pill whitespace-nowrap transition-all duration-300 bg-white/10 backdrop-blur-sm text-white border border-white/40 hover:bg-white/20 hover:border-white hover:-translate-y-0.5 max-[560px]:flex-1"><Icon name="phone" className="w-4 h-4" /> Call Admissions</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
