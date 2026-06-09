import React from 'react';

const eventsData = [
  { title: 'ABHIVYAKTI', subtitle: 'The Annual Cultural Fest', desc: "A grand celebration of arts, music, dance, drama, and cultural diversity — one of Lucknow's most anticipated college festivals.", color: 'var(--navy-dark)', icon: '🎭' },
  { title: 'GANTAVYA', subtitle: 'The Annual Tech Fest', desc: 'Hackathons, robotics competitions, coding challenges, and technical paper presentations bringing out the innovator in every student.', color: 'var(--navy)', icon: '⚙️' },
  { title: 'SPARDHA', subtitle: 'The Annual Sports Fest', desc: 'Inter-college tournament featuring cricket, football, athletics and chess. SRM Premier League (SRMPL) is the flagship event.', color: 'var(--navy-mid)', icon: '🏃' },
  { title: 'ALUMNI MEET', subtitle: 'Connecting Generations', desc: 'Annual alumni reunion bringing together SRMCEM graduates from IAS officers to global engineers for networking and mentorship.', color: '#B5841F', icon: '🤝' },
  { title: 'INTERNATIONAL CONFERENCES', subtitle: 'Global Academic Platform', desc: 'IEEE and other international conferences hosted at SRMCEM attracting researchers and academicians from around the world.', color: '#15407F', icon: '🌐' },
  { title: 'ANVARAT', subtitle: '25 Years of Excellence', desc: "A landmark celebration marking 25 glorious years of SRMCEM's journey from a vision to one of Lucknow's premier institutions.", color: '#9C6B16', icon: '🏆' }
];

const Events = () => {
  return (
    <section className="section section--light" id="events">
      <div className="section-head section-head--center reveal">
        <div className="eyebrow">Campus Life</div>
        <h2 className="section-title">Vibrant Events. Unforgettable Memories.</h2>
      </div>

      <div className="grid grid--3 reveal">
        {eventsData.map((event, i) => (
          <div key={i} className="card event-card">
            <div className="event-card__media" style={{ background: event.color }}>
              <span>{event.icon}</span>
            </div>
            <div className="event-card__body">
              <div className="event-card__title">{event.title}</div>
              <div className="event-card__sub">{event.subtitle}</div>
              <div className="event-card__desc">{event.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
