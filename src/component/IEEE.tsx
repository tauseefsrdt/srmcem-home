import React from 'react';
import {
  section,
  sectionLight,
  eyebrowCenter,
  sectionTitle,
  sectionDesc,
} from '../utils/tw';
import Icon, { IconName } from './Icon';

const chapters: { icon: IconName; title: string; cap: string }[] = [
  { icon: 'cpu', title: 'Robotics & Automation', cap: 'IEEE RAS Branch' },
  { icon: 'radio', title: 'Signal Processing', cap: 'SRMCEM Student Chapter' },
  { icon: 'zap', title: 'IEEE Student Branch', cap: 'Main SRMCEM Branch' },
  { icon: 'battery', title: 'Power & Energy Society', cap: 'IEEE PES Chapter' },
  { icon: 'users', title: 'Women in Engineering', cap: 'WIE Affinity Group' }
];

const surfaceCard =
  'bg-white border border-[rgba(27,76,127,0.14)] rounded-md shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover hover:border-[rgba(27,76,127,0.25)]';

const IEEE = () => {
  return (
    <section className={`${section} ${sectionLight}`}>
      <div className="max-w-[820px] mb-14 mx-auto text-center reveal">
        <div className={`${eyebrowCenter} text-navy`}>Memberships &amp; Associations</div>
        <h2 className={`${sectionTitle} text-ink`}>IEEE Student Branch &amp; Global Chapters</h2>
        <p className={`${sectionDesc} text-brand-gray mx-auto`}>At SRMCEM, IEEE membership opens the door to innovation, global networking, and professional excellence. Our vibrant IEEE Student Branch actively organizes workshops, seminars and technical events to empower students with the latest in technology and leadership skills — a proud milestone being the IEEE International Conference under the U.P. Section in November 2024.</p>
      </div>

      <div className="grid gap-[22px] grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1100px]:grid-cols-5 reveal">
        {chapters.map((c, i) => (
          <div key={i} className={`${surfaceCard} group flex flex-col items-center text-center px-5 py-[26px]`}>
            <div className="w-12 h-12 mb-4 grid place-items-center rounded-[12px] bg-navy-light text-navy transition-transform duration-300 group-hover:scale-[1.12]"><Icon name={c.icon} className="w-6 h-6" /></div>
            <div className="text-[13px] font-bold text-ink mb-1.5">{c.title}</div>
            <div className="text-[10px] font-bold tracking-[1px] uppercase text-gold-text">{c.cap}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6 mt-10 px-9 py-7 bg-[linear-gradient(135deg,#0a1f3d_0%,#133a6b_100%)] border border-white/[0.08] rounded-md shadow-soft text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-gold/[0.35] hover:shadow-[0_28px_55px_rgba(10,20,45,0.28)] max-[560px]:flex-col max-[560px]:text-center max-[560px]:px-6 reveal">
        <span className="w-14 h-14 shrink-0 grid place-items-center rounded-[14px] bg-white/[0.08] border border-white/[0.16] text-gold-light"><Icon name="globe" className="w-7 h-7" /></span>
        <div>
          <div className="font-serif font-bold text-[20px] tracking-[0.5px] mb-1.5">IEEE International Conference — November 2024</div>
          <div className="text-[13px] leading-[1.6] text-white/70">SRMCEM proudly hosts the IEEE International Conference under the U.P. Section — showcasing our commitment to global academic and research excellence.</div>
        </div>
      </div>
    </section>
  );
};

export default IEEE;
