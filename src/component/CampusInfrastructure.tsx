import React from 'react';
import { section, eyebrow, sectionTitle, titleAccent } from '../utils/tw';
import { unsplash, themeImg } from '../utils/placeholder';
import Icon from './Icon';

const cards = [
  {
    img: themeImg.campus,
    title: 'Smart Academic Blocks',
    desc: 'Interactive smart classrooms, modern labs and digital infrastructure built to support focused, technology-led learning.',
  },
  {
    img: themeImg.robotics,
    title: 'Research & Innovation Labs',
    desc: 'Specialised labs for AI, IoT, robotics and core engineering streams that turn theory into hands-on work and prototypes.',
  },
  {
    img: themeImg.graduates,
    title: 'Student Life & Wellbeing',
    desc: 'Hostels, sports grounds, an on-campus health centre and ambulance access that contribute to holistic student wellbeing.',
  },
];

const CampusInfrastructure = () => {
  return (
    <section className={`${section} bg-[linear-gradient(180deg,#eef3fb,#e6eef9)]`} id="facilities">
      <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-center">
        {/* Copy + CTA */}
        <div className="reveal">
          <div className={eyebrow}>Campus Infrastructure</div>
          <h2 className={sectionTitle}>
            A Modern Campus Designed for <span className={titleAccent}>Learning &amp; Student Life</span>
          </h2>
          <p className="mt-5 text-base leading-[1.85] text-brand-gray max-w-[460px]">
            SRMCEM provides a vibrant academic environment supported by modern infrastructure and a
            student-focused campus, built to support the holistic growth of every student across
            learning, research and student life.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div>
              <div className="text-navy-mid font-bold text-[12px] tracking-[1.5px] uppercase mb-1">Admission Helpline</div>
              <div className="text-navy-dark font-display text-2xl tracking-[1px]">1800-103-5298</div>
            </div>
            <a
              href="tel:18001035298"
              className="inline-flex items-center justify-center gap-2 px-7 py-[13px] rounded-pill bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] text-navy-deep text-sm font-bold tracking-[0.5px] shadow-glowGold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glowGoldStrong"
            >
              <Icon name="phone" className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>

        {/* Image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 reveal">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col overflow-hidden rounded-md bg-white/80 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:shadow-hover hover:border-navy-mid/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-mid/10">
                <img
                  src={unsplash(c.img, 400, 300)}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[14px] font-bold text-navy-dark leading-snug mb-1.5">{c.title}</h3>
                <p className="text-[12px] leading-[1.6] text-brand-gray">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusInfrastructure;
