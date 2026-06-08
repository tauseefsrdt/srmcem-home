import React from 'react';
import './Hero.css';

const stats = [
  { stat: '30000+', text: 'Alumni Network Worldwide' },
  { stat: '228', text: 'University Honors & Medals' },
  { stat: '2300+', text: 'LIVE / Student Projects Completed' },
  { stat: '80+', text: 'Victories Across IIT & National Tech Competitions' },
  { stat: '95', text: 'Innovation Projects Showcased' },
  { stat: '132', text: 'Hours of Industry Connect Every Year' },
  { stat: '323+', text: 'Research Publications' },
  { stat: '11', text: 'Patents Filed & Granted' }
];

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__glow"></div>
      <div className="hero__grid"></div>
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">Admissions 2025-26 now open</div>
          <h1 className="hero__title">
            SRMCEM School of Engineering &amp; Management
            <span>Industry-first learning, research depth, and career outcomes.</span>
          </h1>
          <p className="hero__sub">
            Build your future with outcome-driven programs, hands-on projects, and a campus culture
            designed for leadership and innovation.
          </p>
          <div className="hero__meta">
            <span>Established 1999</span>
            <span>NBA Accredited</span>
            <span>AICTE Approved</span>
            <span>AKTU Affiliated</span>
          </div>
          <ul className="hero__highlights">
            <li><strong>Mentorship</strong> from IIT Kanpur Gold Medalist founders.</li>
            <li><strong>Placements</strong> supported by industry partnerships and live projects.</li>
            <li><strong>Global alumni</strong> network across tech and business leadership.</li>
          </ul>
          <div className="hero__cta">
            <a href="https://srmcem.ac.in" target="_blank" rel="noreferrer" className="btn btn--primary">Apply for Admission →</a>
            <a href="#placements" className="btn btn--outline">View Placements</a>
          </div>
          <div className="hero__trust">
            <span className="hero__trust-label">Trusted by</span>
            <div className="hero__trust-items">
              <span>Industry partners</span>
              <span>Research collaborators</span>
              <span>Scholarship sponsors</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__stats">
            {stats.map((item, idx) => (
              <div key={idx} className="hero__stat" style={{ animationDelay: `${0.5 + idx * 0.08}s` }}>
                <div className="hero__stat-num">
                  {item.stat.replace('+', '')}{item.stat.includes('+') && <sup>+</sup>}
                </div>
                <div className="hero__stat-label">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
