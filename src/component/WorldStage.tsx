import React from 'react';
import { section, sectionGlass, eyebrow, sectionTitle, sectionDesc, btnNavy, pill, glassSheen } from '../utils/tw';
import Icon, { IconName } from './Icon';
import { unsplash, themeImg } from '../utils/placeholder';

const cards: { icon: IconName; title: string; desc: string; tag: string; img: string }[] = [
  { icon: 'cpu', title: 'Global Robotics Champions', desc: 'Grobot team competes and wins at international robotics championships — placing Lucknow on the global map of technical excellence.', tag: 'International Win', img: '1485827404703-89b55fcc595e' },
  { icon: 'globe', title: 'IEEE International Conference', desc: 'Hosting the prestigious IEEE International Conference under U.P. Section in November 2024 — a global academic milestone for SRMCEM.', tag: 'IEEE · U.P. Section', img: '1540575467063-178a50c2df87' },
  { icon: 'zap', title: 'Robotics, AI & IoT Labs', desc: 'State-of-the-art innovation labs powering next-gen engineers with real-world project, research, and prototype experience.', tag: 'Industry-Grade Labs', img: '1518770660439-4636190af475' },
  { icon: 'award', title: 'AKTU Distinguished Alumni', desc: 'Abhay Singh (B.Tech ME 2005) — IFS, Gujarat Cadre; Distinguished Alumni Award from AKTU. Our legacy of excellence personified.', tag: 'AKTU Award', img: '1507003211169-0a1dd7228f2d' },
  { icon: 'landmark', title: 'IAS, IPS & IRS Officers', desc: 'Disha Srivastava (IAS), Vaibhav Chaudhary (IAS), Sakshi Singh (IPS Bihar Cadre), Akshat Jain (IRS) — our civil service legacy.', tag: 'Civil Services', img: '1529107386315-e1a2ed48a620' },
  { icon: 'rocket', title: 'ISRO Scientist & Global Engineers', desc: 'Abhilash Ojha — Scientist, ISRO. Dharmaveer Gupta — Engineer at Gates Corporation. Vijayata Suryawanshi — PayPal, Santa Clara.', tag: 'World-Class Alumni', img: '1457364887197-9150188c107b' },
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
          <div className="relative overflow-hidden rounded-lg bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card">
            <span className={glassSheen} aria-hidden />
            {/* Header image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-navy-mid/10">
              <img
                src={unsplash(themeImg.graduates, 760, 430)}
                alt="SRMCEM achievers across every frontier"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,43,0.10)_0%,transparent_35%,rgba(255,255,255,0.9)_100%)]" aria-hidden />
            </div>

            <div className="p-8 sm:p-10 pt-2 sm:pt-3">
              <div className={eyebrow}>Achievements &amp; Recognition</div>
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
        </div>

        {/* RIGHT — achievement cards with imagery */}
        <div className="grid gap-[18px] grid-cols-1 sm:grid-cols-2 reveal">
          {cards.map((c, i) => (
            <article
              key={i}
              className="group relative overflow-hidden flex flex-col bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-md shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-hover hover:border-navy-mid/30"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-navy-mid/10">
                <img
                  src={unsplash(c.img, 600, 360)}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(7,22,43,0.55)_100%)]" aria-hidden />
                <span className={`${pill} !bg-gold/90 !text-navy-deep !border-transparent absolute top-3 left-3 shadow-sm`}>{c.tag}</span>
                {/* Icon badge overlapping the image */}
                <span className="absolute -bottom-5 left-6 w-11 h-11 grid place-items-center rounded-[12px] bg-white border border-[rgba(15,47,87,0.10)] shadow-card text-navy-mid transition-colors duration-300 group-hover:text-gold-dark">
                  <Icon name={c.icon} className="w-[22px] h-[22px]" />
                </span>
              </div>
              <div className="pt-9 px-6 pb-6">
                <h3 className="font-serif font-bold text-[18px] leading-[1.3] text-ink mb-2.5">{c.title}</h3>
                <p className="text-[13px] leading-[1.65] text-brand-gray">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldStage;
