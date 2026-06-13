import React from 'react';
import { sectionTight } from '../utils/tw';
import Icon from './Icon';

const AdmissionInfo = () => {
  return (
    <section className={`${sectionTight} bg-[linear-gradient(120deg,#08162e_0%,#0b2142_100%)] border-t border-white/[0.06] flex items-center gap-5`}>
      <div className="w-[52px] h-[52px] grid place-items-center flex-shrink-0 rounded-xl bg-gold/[0.18] border border-gold/35 text-gold-light"><Icon name="cap" className="w-6 h-6" /></div>
      <div>
        <div className="text-gold-light font-bold text-[13px] tracking-[1.5px] uppercase mb-1.5">B.Tech Admission</div>
        <div className="text-[#A3B3CC] text-sm leading-[1.6]">Via JEE Main + AKTU UPTAC Counselling. Seats: 120-180 per branch.</div>
      </div>
    </section>
  );
};

export default AdmissionInfo;
