import React from 'react';
import {
  section,
  sectionGlass,
  eyebrowCenter,
  sectionTitle,
  sectionDesc,
  pill,
  pillGold,
  glassSheen,
} from '../utils/tw';
import Icon, { IconName } from './Icon';
import { unsplash } from '../utils/placeholder';

const chapters: { icon: IconName; title: string; cap: string; img: string }[] = [
  { icon: 'cpu', title: 'Robotics & Automation', cap: 'IEEE RAS Branch', img: '1485827404703-89b55fcc595e' },
  { icon: 'radio', title: 'Signal Processing', cap: 'SRMCEM Student Chapter', img: '1518770660439-4636190af475' },
  { icon: 'zap', title: 'IEEE Student Branch', cap: 'Main SRMCEM Branch', img: '1540575467063-178a50c2df87' },
  { icon: 'battery', title: 'Power & Energy Society', cap: 'IEEE PES Chapter', img: '1509391366360-2e959784a276' },
  { icon: 'users', title: 'Women in Engineering', cap: 'WIE Affinity Group', img: '1573164713988-8665fc963095' },
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
          <article
            key={i}
            className="group relative flex flex-col items-center text-center overflow-hidden bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-lg shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-navy-mid/10">
              <img
                src={unsplash(c.img, 420, 280)}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,22,43,0.4)_100%)]" aria-hidden />
            </div>
            <span className="-mt-7 z-[1] w-14 h-14 grid place-items-center rounded-[14px] bg-white border border-[rgba(15,47,87,0.10)] shadow-card text-navy-mid transition-colors duration-300 group-hover:text-gold-dark">
              <Icon name={c.icon} className="w-6 h-6" />
            </span>
            <div className="px-5 pt-3 pb-6">
              <div className="text-[14px] font-bold text-navy-dark mb-1.5">{c.title}</div>
              <div className="text-[10px] font-bold tracking-[1px] uppercase text-gold-dark">{c.cap}</div>
            </div>
          </article>
        ))}
      </div>

      {/* Conference highlight banner with imagery */}
      <div className="group relative overflow-hidden grid md:grid-cols-[300px_minmax(0,1fr)] mt-10 bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-lg shadow-card transition-all duration-300 hover:-translate-y-[3px] hover:border-navy-mid/30 hover:shadow-hover reveal">
        <span className={glassSheen} aria-hidden />
        <div className="relative min-h-[200px] overflow-hidden bg-navy-mid/10">
          <img
            src={unsplash('1505373877841-8d25f7d46678', 600, 480)}
            alt="IEEE International Conference"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.85)_100%)] hidden md:block" aria-hidden />
          <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,22,43,0.5)_100%)] md:hidden" aria-hidden />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-10">
          <span className={`${pill} ${pillGold} mb-3`}>IEEE · U.P. Section · 2024</span>
          <div className="font-serif font-bold text-[22px] tracking-[0.5px] mb-2 text-ink">IEEE International Conference — November 2024</div>
          <div className="text-[14px] leading-[1.7] text-brand-gray max-w-[640px]">SRMCEM proudly hosts the IEEE International Conference under the U.P. Section — showcasing our commitment to global academic and research excellence, and connecting our students with leading researchers and innovators.</div>
        </div>
      </div>
    </section>
  );
};

export default IEEE;
