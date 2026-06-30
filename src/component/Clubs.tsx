import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  section,
  eyebrow,
  sectionTitle,
  sectionDesc,
  pill,
  pillGold,
  pillGhost,
} from '../utils/tw';
import { unsplash } from '../utils/placeholder';

const Slider =
  (SlickSlider as unknown as { default?: typeof SlickSlider }).default ?? SlickSlider;

type Club = { name: string; vibe: string; img: string; cat: 'Cultural' | 'Technical' };

const clubs: Club[] = [
  { name: 'WIWA Club', vibe: 'Welfare & arts', img: '1573164713988-8665fc963095', cat: 'Cultural' },
  { name: 'Choreography Club', vibe: 'Dance & movement', img: '1508700115892-45ecd05ae2ad', cat: 'Cultural' },
  { name: 'Dramatics Club', vibe: 'Theatre & stage', img: '1503095396549-807759245b35', cat: 'Cultural' },
  { name: 'Music Club', vibe: 'Bands & vocals', img: '1511671782779-c97d3d27a1d4', cat: 'Cultural' },
  { name: 'Photography Club', vibe: 'Frames & stories', img: '1452780212940-6f5c0d14d848', cat: 'Cultural' },
  { name: 'Fashion Show Club', vibe: 'Runway & style', img: '1469334031218-e382a71b716b', cat: 'Cultural' },
  { name: 'Artsy Crafty Club', vibe: 'Art & craft', img: '1513364776144-60967b0f800f', cat: 'Cultural' },
  { name: 'Media Club', vibe: 'Content & coverage', img: '1504711434969-e33886168f5c', cat: 'Cultural' },
  { name: '1090 Women Power Line', vibe: 'Safety & support', img: '1521791136064-7986c2920216', cat: 'Cultural' },
  { name: 'Spiritual Club', vibe: 'Mindful living', img: '1506126613408-eca07ce68773', cat: 'Cultural' },
  { name: 'Grobot (Robotics)', vibe: 'Bots & automation', img: '1485827404703-89b55fcc595e', cat: 'Technical' },
  { name: 'Technical Club', vibe: 'Build & innovate', img: '1518770660439-4636190af475', cat: 'Technical' },
  { name: "D'Coders Club", vibe: 'Code & compete', img: '1461749280684-dccba630e2f6', cat: 'Technical' },
  { name: 'Literary Club', vibe: 'Words & debate', img: '1481627834876-b7833e8f5570', cat: 'Technical' },
  { name: 'Environmental Club', vibe: 'Green campus', img: '1441974231531-c6227db76b6e', cat: 'Technical' },
  { name: 'Social Activists Club', vibe: 'Causes & impact', img: '1559027615-cd4628902d4a', cat: 'Technical' },
  { name: 'Sports Club', vibe: 'Play & compete', img: '1517649763962-0c623066013b', cat: 'Technical' },
  { name: 'NCC Unit', vibe: 'Discipline & service', img: '1541872703-74c5e44368f9', cat: 'Technical' },
];

const ClubCard = ({ club }: { club: Club }) => (
  <article className="group relative overflow-hidden h-full rounded-lg bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover">
    <div className="relative aspect-[4/3] overflow-hidden bg-navy-mid/10">
      <img
        src={unsplash(club.img, 520, 400)}
        alt={club.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,22,43,0.45)_100%)]" aria-hidden />
      <span className={`${pill} ${club.cat === 'Technical' ? pillGhost : pillGold} absolute top-3 left-3`}>{club.cat}</span>
    </div>
    <div className="p-5">
      <h3 className="font-bold text-[15px] leading-tight text-navy-dark transition-colors duration-300 group-hover:text-gold-dark">{club.name}</h3>
      <p className="text-[12px] leading-snug text-brand-gray mt-1">{club.vibe}</p>
    </div>
  </article>
);

const Clubs = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3200,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 560, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={`${section} bg-[#FFFFFF]`} id="clubs">
      <div aria-hidden className="pointer-events-none absolute -top-16 right-[-6%] w-[420px] h-[420px] rounded-full bg-gold/[0.10] blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 left-[-8%] w-[440px] h-[440px] rounded-full bg-navy-mid/[0.10] blur-[120px]" />

      <div className="mb-14 reveal relative z-[1]">
        <div className={eyebrow}>Student Life</div>
        <h2 className={sectionTitle}>17+ Clubs &amp; Societies <span className="text-[#ffb703]">Find Your Tribe</span></h2>
        <p className="mt-[18px] text-base leading-[1.85] text-brand-gray">Becoming part of a student club at SRMCEM is more than a pastime — it's a journey of transformation. It links you to a dynamic community, fosters personal growth and ensures endless fun!</p>
      </div>

      <div className="relative z-[1] reveal [&_.slick-track]:flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full [&_.slick-dots]:bottom-[-42px]">
        <Slider {...settings}>
          {clubs.map((club) => (
            <div key={club.name} className="h-full px-2.5 pb-2">
              <ClubCard club={club} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clubs;
