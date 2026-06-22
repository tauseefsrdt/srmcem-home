import React from 'react';
import { section, sectionHeadCenter, eyebrowCenter, sectionTitle, sectionDesc } from '../utils/tw';
import { unsplash, themeImg } from '../utils/placeholder';

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
          {/* Big student image — topper with the highest 25 LPA package
              (placeholder; swap for the real student/placement photo). */}
          <div className="group relative overflow-hidden rounded-lg border border-[rgba(15,47,87,0.10)] shadow-soft bg-navy-mid/10">
            <img
              src={unsplash(themeImg.student, 760, 900)}
              alt="SRMCEM student placed at the highest package of 25 LPA"
              loading="lazy"
              className="w-full h-[clamp(360px,42vw,520px)] object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,43,0.05)_0%,transparent_30%,rgba(7,22,43,0.78)_100%)]" aria-hidden />

            {/* Highest-package badge */}
            <div className="absolute top-5 left-5 flex flex-col items-start rounded-[14px] bg-white/85 backdrop-blur-glass border border-white/70 shadow-card px-5 py-3">
              <div className="font-display text-[clamp(40px,5vw,58px)] leading-[0.85] text-ink">25<span className="text-[0.32em] text-gold-dark ml-1.5 align-baseline">LPA</span></div>
              <div className="mt-1 text-[10px] tracking-[2px] uppercase text-brand-gray font-bold">Highest Package Achieved</div>
            </div>

            {/* Topper caption */}
            <div className="absolute left-6 bottom-5 text-white">
              <div className="text-[11px] font-bold tracking-[2px] uppercase text-gold-light mb-0.5">Campus Topper · 2024</div>
              <div className="font-serif text-xl font-extrabold leading-tight">Aman Verma</div>
              <div className="text-[13px] text-white/80">B.Tech CSE · Placed at a global tech leader</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 mt-9">
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
