import React from 'react';
import { section, sectionGlass, eyebrow, sectionTitle, sectionDesc, btnNavy, pill, pillGhost, glassSheen } from '../utils/tw';
import Icon, { IconName } from './Icon';

const cards: { icon: IconName; title: string; desc: string; tag: string }[] = [
  { icon: 'cpu', title: 'Global Robotics Champions', desc: 'Grobot team competes and wins at international robotics championships — placing Lucknow on the global map of technical excellence.', tag: 'International Win' },
  { icon: 'globe', title: 'IEEE International Conference', desc: 'Hosting the prestigious IEEE International Conference under U.P. Section in November 2024 — a global academic milestone for SRMCEM.', tag: 'IEEE · U.P. Section' },
  { icon: 'zap', title: 'Robotics, AI & IoT Labs', desc: 'State-of-the-art innovation labs powering next-gen engineers with real-world project, research, and prototype experience.', tag: 'Industry-Grade Labs' },
  { icon: 'award', title: 'AKTU Distinguished Alumni', desc: 'Abhay Singh (B.Tech ME 2005) — IFS, Gujarat Cadre; Distinguished Alumni Award from AKTU. Our legacy of excellence personified.', tag: 'AKTU Award' },
  { icon: 'landmark', title: 'IAS, IPS & IRS Officers', desc: 'Disha Srivastava (IAS), Vaibhav Chaudhary (IAS), Sakshi Singh (IPS Bihar Cadre), Akshat Jain (IRS) — our civil service legacy.', tag: 'Civil Services' },
  { icon: 'rocket', title: 'ISRO Scientist & Global Engineers', desc: 'Abhilash Ojha — Scientist, ISRO. Dharmaveer Gupta — Engineer at Gates Corporation. Vijayata Suryawanshi — PayPal, Santa Clara.', tag: 'World-Class Alumni' }
];

const highlights = [
  { num: '27', unit: 'Yrs', label: 'Of academic legacy since 1999' },
  { num: '100', unit: 'Ac', label: 'Wi-Fi enabled green campus' },
];

const WorldStage = () => {
  return (
    <section className={`${section} ${sectionGlass}`} id="achievements">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.4fr)] gap-10 lg:gap-14 items-start">
        {/* LEFT — why panel (sticky on desktop) */}
        <div className="lg:sticky lg:top-24 reveal">
          <div className="relative overflow-hidden rounded-lg bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card p-8 sm:p-10">
            <span className={glassSheen} aria-hidden />
            <div className={eyebrow}>Why SRMCEM Is Preferred</div>
            <h2 className={sectionTitle}>Celebrating Excellence Across Every Frontier</h2>
            <p className={sectionDesc}>From robotics championships and prestigious IEEE conferences to accomplished alumni in civil services, ISRO, and global corporations, SRMCEM continues to create achievers who make their mark across industries, institutions, and nations.</p>

            <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
              {highlights.map((h) => (
                <div key={h.label} className="rounded-md bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] p-4 shadow-card">
                  <div className="font-display text-[40px] leading-none text-ink">{h.num}<span className="text-[0.4em] text-gold-dark ml-1 align-top">{h.unit}</span></div>
                  <div className="mt-1.5 text-[11px] leading-[1.5] font-semibold text-brand-gray">{h.label}</div>
                </div>
              ))}
            </div>

            <a href="#programs" className={btnNavy}>Explore Programs →</a>
          </div>
        </div>

        {/* RIGHT — achievement cards */}
        <div className="grid gap-[18px] grid-cols-1 sm:grid-cols-2 reveal">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group relative overflow-hidden p-7 bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-md shadow-card transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-hover hover:border-navy-mid/30 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[linear-gradient(90deg,#F2B84B,#1B4C7F)]"
            >
              <div className="w-12 h-12 mb-5 grid place-items-center rounded-[12px] bg-navy-mid/[0.10] border border-navy-mid/20 text-navy-mid transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/15 group-hover:text-gold-dark"><Icon name={c.icon} className="w-6 h-6" /></div>
              <div className="font-serif font-bold text-[18px] leading-[1.3] text-ink mb-2.5">{c.title}</div>
              <div className="text-[13px] leading-[1.65] text-brand-gray mb-6">{c.desc}</div>
              <span className={`${pill} ${pillGhost} !bg-gold/[0.12] !text-gold-text !border-gold/30`}>{c.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldStage;
