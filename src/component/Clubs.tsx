import React from 'react';
import {
  section,
  sectionHeadCenter,
  eyebrowCenter,
  sectionTitle,
  sectionDesc,
  glassSheen,
} from '../utils/tw';
import Icon, { IconName } from './Icon';
import { unsplash } from '../utils/placeholder';

type Club = { name: string; vibe: string; img: string };

const culturalClubs: Club[] = [
  { name: 'WIWA Club', vibe: 'Welfare & arts', img: '1573164713988-8665fc963095' },
  { name: 'Choreography Club', vibe: 'Dance & movement', img: '1508700115892-45ecd05ae2ad' },
  { name: 'Dramatics Club', vibe: 'Theatre & stage', img: '1503095396549-807759245b35' },
  { name: 'Music Club', vibe: 'Bands & vocals', img: '1511671782779-c97d3d27a1d4' },
  { name: 'Photography Club', vibe: 'Frames & stories', img: '1452780212940-6f5c0d14d848' },
  { name: 'Fashion Show Club', vibe: 'Runway & style', img: '1469334031218-e382a71b716b' },
  { name: 'Artsy Crafty Club', vibe: 'Art & craft', img: '1513364776144-60967b0f800f' },
  { name: 'Media Club', vibe: 'Content & coverage', img: '1504711434969-e33886168f5c' },
  { name: '1090 Women Power Line', vibe: 'Safety & support', img: '1521791136064-7986c2920216' },
  { name: 'Spiritual Club', vibe: 'Mindful living', img: '1506126613408-eca07ce68773' },
];

const technicalClubs: Club[] = [
  { name: 'Grobot (Robotics)', vibe: 'Bots & automation', img: '1485827404703-89b55fcc595e' },
  { name: 'Technical Club', vibe: 'Build & innovate', img: '1518770660439-4636190af475' },
  { name: "D'Coders Club", vibe: 'Code & compete', img: '1461749280684-dccba630e2f6' },
  { name: 'Literary Club', vibe: 'Words & debate', img: '1481627834876-b7833e8f5570' },
  { name: 'Environmental Club', vibe: 'Green campus', img: '1441974231531-c6227db76b6e' },
  { name: 'Social Activists Club', vibe: 'Causes & impact', img: '1559027615-cd4628902d4a' },
  { name: 'Sports Club', vibe: 'Play & compete', img: '1517649763962-0c623066013b' },
  { name: 'NCC Unit', vibe: 'Discipline & service', img: '1541872703-74c5e44368f9' },
];

const ClubCard = ({ club }: { club: Club }) => (
  <div className="group relative overflow-hidden flex items-center gap-3.5 p-3 rounded-[14px] bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card cursor-default transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover">
    <span className={glassSheen} aria-hidden />
    {/* Club thumbnail — placeholder image (swap for real club photos). */}
    <div className="relative w-[54px] h-[54px] shrink-0 overflow-hidden rounded-[11px] bg-navy-mid/10 ring-1 ring-[rgba(15,47,87,0.10)]">
      <img
        src={unsplash(club.img, 120, 120)}
        alt={club.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <span className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[11px]" aria-hidden />
    </div>
    <div className="min-w-0">
      <div className="font-bold text-[13.5px] leading-tight text-navy-dark truncate transition-colors duration-300 group-hover:text-gold-dark">{club.name}</div>
      <div className="text-[11px] leading-tight text-brand-gray mt-0.5">{club.vibe}</div>
    </div>
  </div>
);

const CategoryHeader = ({ icon, title, count }: { icon: IconName; title: string; count: number }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="w-9 h-9 grid place-items-center rounded-[10px] bg-[linear-gradient(135deg,#1B4C7F,#0F2F57)] text-white shadow-[0_6px_18px_rgba(27,76,127,0.3)]">
      <Icon name={icon} className="w-[18px] h-[18px]" />
    </span>
    <div className="text-navy-mid font-bold text-[13px] tracking-[2px] uppercase">{title}</div>
    <span className="ml-auto inline-flex items-center px-2.5 py-1 rounded-pill text-[11px] font-bold bg-gold/15 border border-gold/40 text-gold-text">{count} Clubs</span>
  </div>
);

const Clubs = () => {
  return (
    <section className={`${section} bg-white/55 backdrop-blur-glass border-y border-[rgba(15,47,87,0.08)]`} id="clubs" >
      <div aria-hidden className="pointer-events-none absolute -top-16 right-[-6%] w-[420px] h-[420px] rounded-full bg-gold/[0.10] blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 left-[-8%] w-[440px] h-[440px] rounded-full bg-navy-mid/[0.10] blur-[120px]" />

      <div className={`${sectionHeadCenter} reveal relative z-[1]`}>
        <div className={eyebrowCenter}>Student Life</div>
        <h2 className={sectionTitle}>17+ Clubs &amp; Societies — Find Your Tribe</h2>
        <p className={`${sectionDesc} mx-auto`}>Becoming part of a student club at SRMCEM is more than a pastime — it's a journey of transformation. It links you to a dynamic community, fosters personal growth and ensures endless fun!</p>
      </div>

      <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 reveal">
        <div>
          <CategoryHeader icon="star" title="Cultural & Lifestyle" count={culturalClubs.length} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {culturalClubs.map((club) => <ClubCard key={club.name} club={club} />)}
          </div>
        </div>
        <div>
          <CategoryHeader icon="cpu" title="Technical & Social" count={technicalClubs.length} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {technicalClubs.map((club) => <ClubCard key={club.name} club={club} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clubs;
