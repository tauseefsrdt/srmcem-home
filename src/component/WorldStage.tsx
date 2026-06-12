import React from 'react';
import { section, sectionLight, sectionHeadCenter, eyebrowCenter, sectionTitle, sectionDesc, pill, pillGhost } from '../utils/tw';

const cards = [
  { icon: '🤖', title: 'Global Robotics Champions', desc: 'Grobot team competes and wins at international robotics championships — placing Lucknow on the global map of technical excellence.', tag: 'International Win' },
  { icon: '🌐', title: 'IEEE International Conference', desc: 'Hosting the prestigious IEEE International Conference under U.P. Section in November 2024 — a global academic milestone for SRMCEM.', tag: 'IEEE · U.P. Section' },
  { icon: '⚡', title: 'Robotics, AI & IoT Labs', desc: 'State-of-the-art innovation labs powering next-gen engineers with real-world project, research, and prototype experience.', tag: 'Industry-Grade Labs' },
  { icon: '🥇', title: 'AKTU Distinguished Alumni', desc: 'Abhay Singh (B.Tech ME 2005) — IFS, Gujarat Cadre; Distinguished Alumni Award from AKTU. Our legacy of excellence personified.', tag: 'AKTU Award' },
  { icon: '🏛️', title: 'IAS, IPS & IRS Officers', desc: 'Disha Srivastava (IAS), Vaibhav Chaudhary (IAS), Sakshi Singh (IPS Bihar Cadre), Akshat Jain (IRS) — our civil service legacy.', tag: 'Civil Services' },
  { icon: '🚀', title: 'ISRO Scientist & Global Engineers', desc: 'Abhilash Ojha — Scientist, ISRO. Dharmaveer Gupta — Engineer at Gates Corporation. Vijayata Suryawanshi — PayPal, Santa Clara.', tag: 'World-Class Alumni' }
];

const WorldStage = () => {
  return (
    <section className={`${section} ${sectionLight}`} id="achievements">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={`${eyebrowCenter} text-navy`}>Achievements &amp; Recognition</div>
        <h2 className={`${sectionTitle} text-ink`}>Celebrating Excellence Across Every Frontier</h2>
        <p className={`${sectionDesc} text-brand-gray mx-auto`}>From robotics championships and prestigious IEEE conferences to accomplished alumni in civil services, ISRO, and global corporations, SRMCEM continues to create achievers who make their mark across industries, institutions, and nations.</p>
      </div>

      <div className="grid gap-[22px] grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 reveal">
        {cards.map((c, i) => (
          <div
            key={i}
            className="group relative overflow-hidden p-8 bg-white border border-[rgba(27,76,127,0.14)] rounded-md shadow-card transition-[transform,box-shadow,border-color,background] duration-300 hover:-translate-y-1.5 hover:shadow-hover hover:border-[rgba(27,76,127,0.25)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[linear-gradient(90deg,#F2B84B,#1B4C7F)]"
          >
            <div className="text-[40px] mb-5 transition-transform duration-300 group-hover:scale-110">{c.icon}</div>
            <div className="font-serif font-bold text-[18px] leading-[1.3] text-ink mb-3">{c.title}</div>
            <div className="text-[13px] leading-[1.65] text-brand-gray mb-7">{c.desc}</div>
            <span className={`${pill} ${pillGhost}`}>{c.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorldStage;
