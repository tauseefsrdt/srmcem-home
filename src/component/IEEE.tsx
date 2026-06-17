import React from 'react';
import {
  section,
  sectionGlass,
  eyebrowCenter,
  sectionTitle,
  sectionDesc,
  glassCard,
  iconTile,
  glassSheen,
} from '../utils/tw';
import Icon, { IconName } from './Icon';

const chapters: { icon: IconName; title: string; cap: string }[] = [
  { icon: 'cpu', title: 'Robotics & Automation', cap: 'IEEE RAS Branch' },
  { icon: 'radio', title: 'Signal Processing', cap: 'SRMCEM Student Chapter' },
  { icon: 'zap', title: 'IEEE Student Branch', cap: 'Main SRMCEM Branch' },
  { icon: 'battery', title: 'Power & Energy Society', cap: 'IEEE PES Chapter' },
  { icon: 'users', title: 'Women in Engineering', cap: 'WIE Affinity Group' }
];

const IEEE = () => {
  return (
    <section className={`${section} ${sectionGlass}`}>
      <div className="container mb-14 mx-auto text-center reveal">
        <div className={eyebrowCenter}>Memberships &amp; Associations</div>
        <h2 className={sectionTitle}>IEEE Student Branch &amp; Global Chapters</h2>
        <p className={`${sectionDesc} mx-auto`}>At SRMCEM, IEEE membership opens the door to innovation, global networking, and professional excellence. Our vibrant IEEE Student Branch actively organizes workshops, seminars and technical events to empower students with the latest in technology and leadership skills — a proud milestone being the IEEE International Conference under the U.P. Section in November 2024.</p>
      </div>

      <div className="grid gap-[22px] grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1100px]:grid-cols-5 reveal">
        {chapters.map((c, i) => (
          <div key={i} className={`${glassCard} flex flex-col items-center text-center px-5 py-[26px]`}>
            <div className={`${iconTile} w-12 h-12 mb-4`}><Icon name={c.icon} className="w-6 h-6" /></div>
            <div className="text-[13px] font-bold text-navy-dark mb-1.5">{c.title}</div>
            <div className="text-[10px] font-bold tracking-[1px] uppercase text-gold-dark">{c.cap}</div>
          </div>
        ))}
      </div>

      <div className="group relative overflow-hidden flex items-center gap-6 mt-10 px-9 py-7 bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-lg shadow-card text-navy-dark transition-all duration-300 hover:-translate-y-[3px] hover:border-navy-mid/30 hover:shadow-hover max-[560px]:flex-col max-[560px]:text-center max-[560px]:px-6 reveal">
        <span className={glassSheen} aria-hidden />
        <span className={`${iconTile} w-14 h-14 shrink-0`}><Icon name="globe" className="w-7 h-7" /></span>
        <div>
          <div className="font-serif font-bold text-[20px] tracking-[0.5px] mb-1.5 text-ink">IEEE International Conference — November 2024</div>
          <div className="text-[13px] leading-[1.6] text-brand-gray">SRMCEM proudly hosts the IEEE International Conference under the U.P. Section — showcasing our commitment to global academic and research excellence.</div>
        </div>
      </div>
    </section>
  );
};

export default IEEE;
