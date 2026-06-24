import React from 'react';
import {
  section,
  sectionGlass,
  sectionHeadCenter,
  eyebrowCenter,
  sectionTitle,
  pill,
  pillGold,
  linkArrow,
  glassSheen,
} from '../utils/tw';
import Icon from './Icon';
import { unsplash } from '../utils/placeholder';

const featured = {
  img: '1573164713988-8665fc963095',
  title: 'A proud moment for the SRMCEM family!',
  excerpt:
    "Our Co-founder and Additional Executive Director, Dr. Pooja Agarwal, was honored by the Hon'ble Governor of Uttar Pradesh on the occasion of International Women's Day (8 March 2026). This prestigious recognition reflects SRMCEM's commitment to excellence and leadership.",
  meta: '8 March 2026 · Lucknow Campus',
};

const events = [
  { title: 'A proud moment for the SRMCEM family!', meta: '8 MARCH 2026', img: '1523580494863-6f3031224c94' },
  { title: 'SRMCEM Alumni Mr. Suyash awarded by U.P. Govt', meta: 'Alumni · Recognition', img: '1529107386315-e1a2ed48a620' },
  { title: 'SRMCEM Robotics Club Triumphs at Intercollege Meet', meta: 'Clubs · Robotics', img: '1485827404703-89b55fcc595e' },
  { title: 'Abhivyakti 2026 — Cultural Extravaganza', meta: 'Events · 2026', img: '1511671782779-c97d3d27a1d4' },
];

const News = () => {
  return (
    <section className={`${section} ${sectionGlass}`} id="news">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={`${eyebrowCenter} text-navy-mid`}>Latest Events &amp; News</div>
        <h2 className={`${sectionTitle} text-ink`}>What's Happening at SRMCEM</h2>
      </div>

      <div className="grid grid-cols-1 min-[993px]:grid-cols-[1.2fr_1fr] gap-6 reveal">
        {/* Featured story */}
        <article className="group relative overflow-hidden flex flex-col bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-lg shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover">
          <span className={glassSheen} aria-hidden />
          <div className="relative h-[300px] max-[992px]:h-[230px] overflow-hidden bg-navy-mid/10">
            <img
              src={unsplash(featured.img, 960, 600)}
              alt={featured.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,22,43,0.55)_100%)]" aria-hidden />
            <span className={`${pill} ${pillGold} absolute top-4 left-4`}>Featured</span>
            <div className="absolute left-5 bottom-4 inline-flex items-center gap-2 text-[12px] font-semibold text-white">
              <Icon name="calendar" className="w-4 h-4 text-gold-light" /> {featured.meta}
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <h3 className="font-serif font-bold text-[24px] leading-[1.3] text-ink mb-3">{featured.title}</h3>
            <p className="text-[14px] leading-[1.65] text-brand-gray mb-6">{featured.excerpt}</p>
            <a href="#" className={`${linkArrow} mt-auto`}>Read More →</a>
          </div>
        </article>

        {/* Side list with thumbnails */}
        <div className="flex flex-col gap-3">
          {events.map((e, i) => (
            <a
              key={i}
              href="#"
              className="group flex items-center gap-4 p-3.5 bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-[14px] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover"
            >
              <div className="relative w-[88px] h-[72px] shrink-0 overflow-hidden rounded-[11px] bg-navy-mid/10 ring-1 ring-[rgba(15,47,87,0.10)]">
                <img
                  src={unsplash(e.img, 200, 160)}
                  alt={e.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-[15px] leading-[1.35] text-navy-dark mb-1 transition-colors duration-300 group-hover:text-gold-dark">{e.title}</div>
                <div className="text-[12px] text-brand-gray">{e.meta}</div>
              </div>
              <Icon name="arrow-right" className="w-4 h-4 shrink-0 text-navy-mid/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-dark" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
