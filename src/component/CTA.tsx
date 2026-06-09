import React from 'react';

const CTA = () => {
  return (
    <section className="section cta">
      <div className="cta__glow"></div>
      <div className="cta__pattern"></div>
      <div className="cta__content">
        <div className="cta__eyebrow">Admissions 2025-26</div>
        <h2 className="cta__title">Your Engineering<br />Journey Starts Here</h2>
      </div>
      <div className="cta__actions">
        <a href="#" className="btn btn--primary">Apply Online →</a>
        <a href="#" className="btn btn--outline"><span>📞</span> Call Admissions</a>
      </div>
    </section>
  );
};

export default CTA;
