import React from 'react';
import { section, eyebrow, sectionTitle } from '../utils/tw';
import { unsplash } from '../utils/placeholder';

type EventItem = {
  img: string;
  name: string;
  subtitle: string;
  desc: string;
};

const events: EventItem[] = [
  {
    img: '1503095396549-807759245b35',
    name: 'Abhivyakti',
    subtitle: 'The Annual Cultural Fest',
    desc: "A grand celebration of arts, music, dance, drama, and cultural diversity — one of Lucknow's most anticipated college festivals.",
  },
  {
    img: '1518770660439-4636190af475',
    name: 'Gantavya',
    subtitle: 'The Annual Tech Fest',
    desc: 'Hackathons, robotics competitions, coding challenges, and technical paper presentations bringing out the innovator in every student.',
  },
  {
    img: '1461896836934-ffe607ba8211',
    name: 'Spardhha',
    subtitle: 'The Annual Sports Fest',
    desc: 'Inter-college tournament featuring cricket, football, athletics and chess. SRM Premier League (SRMPL) is the flagship event.',
  },
  {
    img: '1523580494863-6f3031224c94',
    name: 'Alumni Meet',
    subtitle: 'Connecting Generations',
    desc: 'Annual alumni reunion bringing together SRMCEM graduates — from IAS officers to global engineers — for networking and mentorship.',
  },
  {
    img: '1540575467063-178a50c2df87',
    name: 'International Conferences',
    subtitle: 'Global Academic Platform',
    desc: 'IEEE and other international conferences hosted at SRMCEM attracting researchers and academicians from around the world.',
  },
  {
    img: '1562774053-701939374585',
    name: 'Anvarat',
    subtitle: '25 Years of Excellence',
    desc: "A landmark celebration marking 25 glorious years of SRMCEM's journey from a vision to one of Lucknow's premier institutions.",
  },
];

const Events = () => (
  <section className={`${section} bg-[#FFFFFF]`} id="events">
    <div className="mb-14 reveal">
      <div className={eyebrow}>Campus Life</div>
      <h2 className={sectionTitle}>
        Vibrant Events.<br />
        Unforgettable Memories.
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
      {events.map((ev) => (
        <article
          key={ev.name}
          className="group relative overflow-hidden rounded-lg bg-white border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:shadow-hover hover:border-navy-mid/30"
        >
          {/* Image header */}
          <div className="relative h-[200px] overflow-hidden bg-navy-mid/10">
            <img
              src={unsplash(ev.img, 640, 400)}
              alt={ev.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(7,22,43,0.60)_100%)]"
              aria-hidden
            />
            {/* Subtitle pill on image */}
            <div className="absolute bottom-4 left-4 text-[9px] font-black tracking-[2.5px] uppercase text-gold-light">
              {ev.subtitle}
            </div>
          </div>

          {/* Text content */}
          <div className="p-6">
            <h3 className="font-serif font-bold text-[19px] leading-tight text-navy-dark mb-3 transition-colors duration-300 group-hover:text-gold-dark">
              {ev.name}
            </h3>
            <p className="text-[13px] leading-[1.75] text-brand-gray">{ev.desc}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Events;
