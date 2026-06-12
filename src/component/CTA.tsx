import React from 'react';
import { section, btnPrimary, btnOutline } from '../utils/tw';

const CTA = () => {
  return (
    <section className={`${section} relative overflow-hidden bg-[linear-gradient(135deg,#0a1f3d_0%,#163a6b_100%)] flex items-center justify-between flex-wrap gap-10`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_88%_20%,rgba(242,184,75,0.2)_0%,transparent_60%),radial-gradient(ellipse_50%_70%_at_5%_90%,rgba(27,76,127,0.45)_0%,transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:54px_54px]"></div>
      <div className="relative z-[1]">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[3px] uppercase text-gold-light mb-3.5 before:content-[''] before:w-[26px] before:h-0.5 before:bg-gold">Admissions 2025-26</div>
        <h2 className="font-serif font-black text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.5px] text-white">Your Engineering<br />Journey Starts Here</h2>
      </div>
      <div className="relative z-[1] flex flex-wrap gap-4 max-[560px]:w-full">
        <a href="#" className={`${btnPrimary} max-[560px]:flex-1`}>Apply Online →</a>
        <a href="#" className={`${btnOutline} max-[560px]:flex-1`}><span>📞</span> Call Admissions</a>
      </div>
    </section>
  );
};

export default CTA;
