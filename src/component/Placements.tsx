import React from 'react';
import { section, sectionHeadCenter, eyebrowCenter, sectionTitle, sectionDesc } from '../utils/tw';

const minis = [
  { num: '91%', label: 'Placement in Computer Science Engineering' },
  { num: '29 LPA', label: 'Highest Package — Morgan Stanley' },
  { num: '87%', label: 'Students placed in CMM Level companies' }
];

const rows = [
  { num: '623+', title: 'Students selected in Fortune 500 companies', sub: '' },
  { num: '38+', title: 'Recruiters Exclusively for Core Engineering', sub: '' },
  { num: '168+', title: 'Students got a package of more than 5 LPA', sub: '' },
  { num: '96%', title: 'Placement achieved in Engineering, Management, Computer Application and Polytechnic', sub: '' }
];

const Placements = () => {
  return (
    <section className={`${section} bg-white overflow-hidden`} id="placements">
      <div className="absolute right-[4vw] top-1/2 -translate-y-1/2 -rotate-90 font-display text-[clamp(120px,18vw,180px)] tracking-[10px] text-[rgba(28,78,157,0.04)] pointer-events-none z-0 max-[900px]:hidden">PLACEMENTS</div>

      <div className={`${sectionHeadCenter} reveal relative z-[1]`}>
        <div className={`${eyebrowCenter} text-navy`}>A Legacy of Success</div>
        <h2 className={`${sectionTitle} text-ink`}>Building Careers Since 1999</h2>
        <p className={`${sectionDesc} text-brand-gray mx-auto`}>For over two decades, SRMCEM has been preparing students for successful careers through industry-focused learning, practical exposure, innovation-driven projects, and strong corporate partnerships. From Fortune 500 companies and global technology firms to core engineering organizations and public sector enterprises, our graduates are creating impact across industries and around the world.</p>
      </div>

      <div className="relative z-[1] grid grid-cols-2 gap-20 items-center mt-4 max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <div className="reveal">
          <div className="font-display text-[clamp(96px,14vw,150px)] leading-[0.85] text-navy-dark mb-3">29<span className="text-[0.3em] text-gold ml-2">LPA</span></div>
          <div className="text-xs tracking-[3px] uppercase text-brand-gray font-bold mb-10">Highest Package Achieved</div>
          <div className="flex flex-wrap gap-10">
            {minis.map((m, i) => (
              <div key={i}>
                <div className="font-display text-[34px] text-navy-dark">{m.num}</div>
                <div className="text-[10px] tracking-[2px] uppercase text-brand-gray font-bold max-w-[150px]">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col reveal">
          {rows.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-[30px] py-5 px-[22px] border border-[rgba(27,76,127,0.14)] rounded-[14px] bg-card-bg shadow-card transition-[transform,box-shadow,border-color] duration-300 mb-4 last:mb-0 hover:-translate-y-[3px] hover:shadow-hover hover:border-[rgba(27,76,127,0.25)]"
            >
              <div className="font-display text-[34px] text-navy-dark w-[92px] flex-shrink-0">{r.num}{r.unit && <span className="text-[0.55em] text-gold">{r.unit}</span>}</div>
              <div>
                <div className="font-bold text-sm text-navy-dark uppercase tracking-[1px] mb-1">{r.title}</div>
                <div className="text-xs text-brand-gray">{r.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placements;
