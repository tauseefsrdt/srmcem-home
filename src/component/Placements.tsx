import React from 'react';
import { section, sectionHeadCenter, eyebrowCenter, sectionTitle, sectionDesc } from '../utils/tw';

const minis = [
  { num: '4.52 LPA', label: 'Average Package' },
  { num: '35%', label: 'Students Secured Multiple Job Offers' },
  { num: '100%', label: 'Placement in Core Engineering' }
];

const rows = [
  { num: '1200+', title: 'Job Offers', sub: '' },
  { num: '350+', title: 'Corporates Hiring From Campus', sub: '' },
  { num: '225', title: 'Students Selected at CTC of 5 LPA & Above', sub: '' },
  { num: '93%', title: 'Placement in Management', sub: '' }
];

const Placements = () => {
  return (
    <section className={`${section} overflow-hidden`} id="placements">
      <div className="absolute right-[4vw] top-1/2 -translate-y-1/2 -rotate-90 font-display text-[clamp(120px,18vw,180px)] tracking-[10px] text-navy-mid/[0.05] pointer-events-none z-0 max-[900px]:hidden">PLACEMENTS</div>

      <div className={`${sectionHeadCenter} reveal relative z-[1]`}>
        <div className={eyebrowCenter}>A Legacy of Success</div>
        <h2 className={sectionTitle}>Building Careers Since 1999</h2>
        <p className={`${sectionDesc} mx-auto`}>For over two decades, SRMCEM has been preparing students for successful careers through industry-focused learning, practical exposure, innovation-driven projects, and strong corporate partnerships. From Fortune 500 companies and global technology firms to core engineering organizations and public sector enterprises, our graduates are creating impact across industries and around the world.</p>
      </div>

      <div className="relative z-[1] grid grid-cols-2 gap-20 items-center mt-4 max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <div className="reveal">
          <div className="font-display text-[clamp(96px,14vw,150px)] leading-[0.85] text-ink mb-3">25<span className="text-[0.3em] text-gold-dark ml-2">LPA</span></div>
          <div className="text-xs tracking-[3px] uppercase text-brand-gray font-bold mb-10">Highest Package Achieved</div>
          <div className="flex flex-wrap gap-10">
            {minis.map((m, i) => (
              <div key={i}>
                <div className="font-display text-[34px] text-ink">{m.num}</div>
                <div className="text-[10px] tracking-[2px] uppercase text-brand-gray font-bold max-w-[150px]">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col reveal">
          {rows.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-[30px] py-5 px-[22px] border border-[rgba(15,47,87,0.10)] rounded-[14px] bg-white/70 backdrop-blur-glass shadow-card transition-[transform,box-shadow,border-color] duration-300 mb-4 last:mb-0 hover:-translate-y-[3px] hover:bg-white hover:shadow-hover hover:border-navy-mid/30"
            >
              <div className="font-display text-[34px] text-ink w-[92px] flex-shrink-0">{r.num}{r.unit && <span className="text-[0.55em] text-gold-dark">{r.unit}</span>}</div>
              <div>
                <div className="font-bold text-sm text-ink uppercase tracking-[1px] mb-1">{r.title}</div>
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
