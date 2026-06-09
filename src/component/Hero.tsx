import React from 'react';

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
      </div>
    </section>
  );
};

export default Hero;
