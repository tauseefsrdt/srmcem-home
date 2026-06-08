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
          <div className="hero__badge">Admissions Open 2025-26</div>
          <h1 className="hero__title">
            Top Choice of AKTU Aspirants in the Region
            <span>Innovate, Transform, Empower &amp; Succeed with AKTU Score Based Scholarships</span>
          </h1>
          <p className="hero__sub">
            SRMCEM has achieved distinction for its value-based institutional culture focusing on
            in-depth knowledge and employability enhancement — join a campus committed to
            outcomes, scholarships and real-world experience.
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
          <div className="hero__media">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="SRMCEM Campus" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
