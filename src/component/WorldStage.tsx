import React from 'react';

const cards = [
  { icon: '🤖', title: 'Global Robotics Champions', desc: 'Grobot team competes and wins at international robotics championships — placing Lucknow on the global map of technical excellence.', tag: 'International Win' },
  { icon: '🌐', title: 'IEEE International Conference', desc: 'Hosting the prestigious IEEE International Conference under U.P. Section in November 2024 — a global academic milestone for SRMCEM.', tag: 'IEEE · U.P. Section' },
  { icon: '⚡', title: 'Robotics, AI & IoT Labs', desc: 'State-of-the-art innovation labs powering next-gen engineers with real-world project, research, and prototype experience.', tag: 'Industry-Grade Labs' },
  { icon: '🥇', title: 'AKTU Distinguished Alumni', desc: 'Abhay Singh (B.Tech ME 2005) — IFS, Gujarat Cadre; Distinguished Alumni Award from AKTU. Our legacy of excellence personified.', tag: 'AKTU Award' },
  { icon: '🏛️', title: 'IAS, IPS & IRS Officers', desc: 'Disha Srivastava (IAS), Vaibhav Chaudhary (IAS), Sakshi Singh (IPS Bihar Cadre), Akshat Jain (IRS) — our civil service legacy.', tag: 'Civil Services' },
  { icon: '🚀', title: 'ISRO Scientist & Global Engineers', desc: 'Abhilash Ojha — Scientist, ISRO. Dharmaveer Gupta — Engineer at Gates Corporation. Vijayata Suryawanshi — PayPal, Santa Clara.', tag: 'World-Class Alumni' }
];

const WorldStage = () => {
  return (
    <section className="section section--light" id="achievements">
      <div className="section-head section-head--center reveal">
        <div className="eyebrow">Achievements &amp; Recognition</div>
        <h2 className="section-title">Celebrating Excellence Across Every Frontier</h2>
        <p className="section-desc">From robotics championships and prestigious IEEE conferences to accomplished alumni in civil services, ISRO, and global corporations, SRMCEM continues to create achievers who make their mark across industries, institutions, and nations.</p>
      </div>

      <div className="grid grid--3 reveal">
        {cards.map((c, i) => (
          <div key={i} className="surface-card ws-card">
            <div className="ws-card__icon">{c.icon}</div>
            <div className="ws-card__title">{c.title}</div>
            <div className="ws-card__desc">{c.desc}</div>
            <span className="pill pill--ghost">{c.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorldStage;
