import React from 'react';
import {
  section,
  sectionLight,
  sectionHeadCenter,
  eyebrowCenter,
  sectionTitle,
  pill,
  pillGold,
  linkArrow,
} from '../utils/tw';
import Icon from './Icon';

const events = [
  { title: 'A proud moment for the SRMCEM family!', meta: '8 MARCH 2026' },
  { title: 'SRMCEM Alumni Mr. Suyash awarded by U.P. Govt', meta: 'Alumni · Recognition' },
  { title: 'SRMCEM Robotics Club Triumphs at Intercollege Meet', meta: 'Clubs · Robotics' },
  { title: 'Abhivyakti 2026 — Cultural Extravaganza', meta: 'Events · 2026' }
];

const News = () => {
  return (
    <section className={`${section} ${sectionLight}`} id="news">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={`${eyebrowCenter} text-navy`}>Latest Events &amp; News</div>
        <h2 className={`${sectionTitle} text-ink`}>What's Happening at SRMCEM</h2>
      </div>

      <div className="grid grid-cols-1 min-[993px]:grid-cols-[1.2fr_1fr] gap-6 reveal">
        <article className="group overflow-hidden bg-white border border-[rgba(27,76,127,0.14)] rounded-lg shadow-card transition-all duration-300 hover:-translate-y-[5px] hover:shadow-hover hover:border-[rgba(27,76,127,0.25)]">
          <div className="relative h-[280px] max-[992px]:h-[220px] grid place-items-center overflow-hidden bg-[linear-gradient(140deg,#0a1f3d,#1b4c7f)] after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_70%_30%,rgba(242,184,75,0.2),transparent_60%)]">
            <img className="relative z-[1]" src="https://picsum.photos/seed/event-main/900/420" alt="convocation" />
          </div>
          <div className="p-8">
            <span className={`${pill} ${pillGold}`}>Featured</span>
            <h3 className="font-serif font-bold text-[24px] leading-[1.3] text-ink mt-3.5 mb-3">A proud moment for the SRMCEM family!</h3>
            <p className="text-[14px] leading-[1.65] text-brand-gray mb-6">Our Co-founder and Additional Executive Director, Dr. Pooja Agarwal, was honored by the Hon'ble Governor of Uttar Pradesh on the occasion of International Women's Day (8 March 2026). This prestigious recognition reflects SRMCEM's commitment to excellence and leadership.</p>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 text-[12px] font-semibold text-brand-gray"><Icon name="calendar" className="w-4 h-4 text-navy" /> 8 March 2026 · Lucknow Campus</div>
              <a href="#" className={linkArrow}>Read More →</a>
            </div>
          </div>
        </article>

        <div className="flex flex-col gap-3">
          {events.map((e, i) => (
            <div key={i} className="group flex items-start gap-4 p-5 bg-white border border-[rgba(27,76,127,0.14)] rounded-[14px] shadow-card cursor-pointer transition-all duration-300 hover:-translate-y-[3px] hover:shadow-hover hover:border-[rgba(27,76,127,0.25)]">
              <div className="w-2 h-2 mt-[7px] rounded-full bg-gold shrink-0 transition-all duration-300 group-hover:scale-[1.3] group-hover:shadow-[0_0_10px_rgba(239,166,60,0.6)]"></div>
              <div>
                <div className="font-bold text-[15px] leading-[1.4] text-ink mb-1">{e.title}</div>
                <div className="text-[12px] text-brand-gray">{e.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
