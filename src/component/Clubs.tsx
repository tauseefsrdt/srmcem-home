import React from 'react';
import {
  section,
  sectionWhite,
  sectionHeadCenter,
  eyebrowCenter,
  sectionTitle,
  sectionDesc,
} from '../utils/tw';

const culturalClubs = [
  'WIWA Club', 'Choreography Club', 'Dramatics Club', 'Music Club', 'Photography Club',
  'Fashion Show Club', 'Artsy Crafty Club', 'Media Club', '1090 Women Power Line', 'Spiritual Club'
];

const technicalClubs = [
  'Grobot (Robotics)', 'Technical Club', "D'Coders Club", 'Literary Club',
  'Environmental Club', 'Social Activists Club', 'Sports Club', 'NCC Unit'
];

const ClubItem = ({ name }: { name: string }) => (
  <div className="group flex items-center gap-2.5 px-[18px] py-3.5 bg-white border border-[rgba(27,76,127,0.14)] rounded-[10px] cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:border-[rgba(27,76,127,0.3)] hover:shadow-card">
    <span className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-[6px] border-l-gold shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"></span>
    <span className="text-[13px] font-bold text-ink transition-colors duration-300 group-hover:text-navy-dark">{name}</span>
  </div>
);

const Clubs = () => {
  return (
    <section className={`${section} ${sectionWhite}`} id="clubs">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={`${eyebrowCenter} text-navy`}>Student Life</div>
        <h2 className={`${sectionTitle} text-ink`}>17+ Clubs &amp; Societies — Find Your Tribe</h2>
        <p className={`${sectionDesc} text-brand-gray mx-auto`}>Becoming part of a student club at SRMCEM is more than a pastime — it's a journey of transformation. It links you to a dynamic community, fosters personal growth and ensures endless fun!</p>
      </div>

      <div className="grid grid-cols-2 gap-[72px] mt-2 max-[900px]:grid-cols-1 max-[900px]:gap-12 reveal">
        <div>
          <div className="text-gold-text font-bold text-[13px] tracking-[2px] uppercase mb-6">Cultural &amp; Lifestyle</div>
          <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
            {culturalClubs.map((club, i) => <ClubItem key={i} name={club} />)}
          </div>
        </div>
        <div>
          <div className="text-gold-text font-bold text-[13px] tracking-[2px] uppercase mb-6">Technical &amp; Social</div>
          <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
            {technicalClubs.map((club, i) => <ClubItem key={i} name={club} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clubs;
