import React from 'react';
import { section, eyebrow, sectionTitle, sectionDesc, glassCard, pillGhost } from '../utils/tw';
import { unsplash } from '../utils/placeholder';

const cards: { img: string; title: string; desc: string; tag: string }[] = [
  {
    img: '1535378917042-10a22c95931a',
    title: 'Global Robotics Champions',
    desc: 'Grobot team competes and wins at international robotics championships — placing Lucknow on the global map of technical excellence.',
    tag: 'INTERNATIONAL WIN',
  },
  {
    img: '1540575467063-178a50c2df87',
    title: 'IEEE International Conference',
    desc: 'Hosting the prestigious IEEE International Conference under U.P. Section in November 2024 — a global academic milestone for SRMCEM.',
    tag: 'IEEE · U.P. SECTION',
  },
  {
    img: '1581091226825-a6a2a5aee158',
    title: 'Robotics, AI & IoT Labs',
    desc: 'State-of-the-art innovation labs powering next-gen engineers with real-world project, research, and prototype experience.',
    tag: 'INDUSTRY-GRADE LABS',
  },
  {
    img: '1507003211169-0a1dd7228f2d',
    title: 'AKTU Distinguished Alumni',
    desc: 'Abhay Singh (B.Tech ME 2005) — IFS, Gujarat Cadre; Distinguished Alumni Award from AKTU. Our legacy of excellence personified.',
    tag: 'AKTU AWARD',
  },
  {
    img: '1529107386315-e1a2ed48a620',
    title: 'IAS, IPS & IRS Officers',
    desc: 'Disha Srivastava (IAS), Vaibhav Chaudhary (IAS), Sakshi Singh (IPS Bihar Cadre), Akshat Jain (IRS) — our civil service legacy.',
    tag: 'CIVIL SERVICES',
  },
  {
    img: '1457364887197-9150188c107b',
    title: 'ISRO Scientist & Global Engineers',
    desc: 'Abhilash Ojha — Scientist, ISRO. Dharmaveer Gupta — Engineer at Gates Corporation. Vijayeta Suryawanshi — PayPal, Santa Clara.',
    tag: 'WORLD-CLASS ALUMNI',
  },
];

const WorldStage = () => {
  return (
    <section className={`${section} bg-white`} id="achievements">
      {/* Heading */}
      <div className="mb-12 reveal">
        <div className={eyebrow}>Global Recognition</div>
        <h2 className={sectionTitle}>
          Champions on the <span className="text-[#ffb703]">World Stage</span>  
        </h2>
        <p className={`${sectionDesc} !mx-0 max-w-2xl`}>
          SRMCEM's Grobot robotics team has won national and international competitions.<br />
          Our alumni serve in ISRO, IAS, IPS, Defence, and at global corporations.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
        {cards.map((c, i) => (
          <article key={i} className={`${glassCard} flex flex-col`}>
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg bg-navy-light">
              <img
                src={unsplash(c.img, 600, 340)}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-6">
              <h3 className="font-serif font-bold text-[17px] leading-[1.35] text-ink mb-2.5">
                {c.title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-brand-gray flex-1 mb-5">
                {c.desc}
              </p>
              <div>
                <span className={`${pillGhost} text-[10px] tracking-[1.5px]`}>{c.tag}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorldStage;
