import React from 'react';
import './Medals.css';

const counts = [
  { num: '18', cls: 'is-gold', label: 'Gold Medals', sub: 'AKTU University' },
  { num: '12', cls: 'is-silver', label: 'Silver Medals', sub: 'AKTU University' },
  { num: '06', cls: 'is-bronze', label: 'Bronze Medals', sub: 'AKTU University' },
  { num: '192', cls: 'is-merit', label: 'Merit Holders', sub: 'AKTU University' }
];

const merit = [
  { pos: '1st Position — University', init: 'AR', name: 'Anjali Raj', branch: 'B.Tech (EE)' },
  { pos: '2nd Position — University', init: 'NI', name: 'Nimish', branch: 'B.Tech (CE)' },
  { pos: '2nd Position — University', init: 'SS', name: 'Sakshi Singh', branch: 'B.Tech (IT)' },
  { pos: '3rd Position — University', init: 'AR', name: 'Akshat Rastogi', branch: 'B.Tech (ME)' }
];

const Medals = () => {
  return (
    <section className="section medals">
      <div className="section-head section-head--center reveal">
        <div className="eyebrow eyebrow--light">AKTU University Rankings</div>
        <h2 className="section-title section-title--light">A Legacy of Academic Excellence</h2>
      </div>

      <div className="medals__counts reveal">
        {counts.map((c, i) => (
          <div key={i} className="medal-count">
            <div className={`medal-count__num ${c.cls}`}>{c.num}</div>
            <div className="medal-count__label">{c.label}</div>
            <div className="medal-count__sub">{c.sub}</div>
          </div>
        ))}
      </div>

      <div className="medals__merit reveal">
        {merit.map((m, i) => (
          <div key={i} className="merit-card">
            <div className="merit-card__pos">{m.pos}</div>
            <div className="merit-card__avatar">{m.init}</div>
            <div className="merit-card__name">{m.name}</div>
            <div className="merit-card__branch">{m.branch}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Medals;
