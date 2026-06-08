import React from 'react';
import './Clubs.css';

const culturalClubs = [
  'WIWA Club', 'Choreography Club', 'Dramatics Club', 'Music Club', 'Photography Club',
  'Fashion Show Club', 'Artsy Crafty Club', 'Media Club', '1090 Women Power Line', 'Spiritual Club'
];

const technicalClubs = [
  'Grobot (Robotics)', 'Technical Club', "D'Coders Club", 'Literary Club',
  'Environmental Club', 'Social Activists Club', 'Sports Club', 'NCC Unit'
];

const ClubItem = ({ name }: { name: string }) => (
  <div className="club-item">
    <span className="club-item__marker"></span>
    <span className="club-item__name">{name}</span>
  </div>
);

const Clubs = () => {
  return (
    <section className="section section--white" id="clubs">
      <div className="section-head section-head--center reveal">
        <div className="eyebrow">Student Life</div>
        <h2 className="section-title">17+ Clubs &amp; Societies — Find Your Tribe</h2>
        <p className="section-desc">Becoming part of a student club at SRMCEM is more than a pastime — it's a journey of transformation. It links you to a dynamic community, fosters personal growth and ensures endless fun!</p>
      </div>

      <div className="clubs-cols reveal">
        <div>
          <div className="clubs-col__label">Cultural &amp; Lifestyle</div>
          <div className="clubs-items">
            {culturalClubs.map((club, i) => <ClubItem key={i} name={club} />)}
          </div>
        </div>
        <div>
          <div className="clubs-col__label">Technical &amp; Social</div>
          <div className="clubs-items">
            {technicalClubs.map((club, i) => <ClubItem key={i} name={club} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clubs;
