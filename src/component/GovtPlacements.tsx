import React from 'react';

const cells = [
  { icon: '🏛️', title: '20+ Alumni in Indian Civil Services', desc: 'Serving the nation through prestigious roles in the IAS, IPS, IRS and other civil services, contributing to governance, policy-making and public administration.' },
  { icon: '🎖️', title: '30+ Alumni in Indian Armed Forces', desc: 'Leading with courage and discipline across the Indian Army, Air Force and other defence services, safeguarding the nation and serving with distinction.' },
  { icon: '🏭', title: '150+ Alumni in Public Sector Undertakings', desc: "Building India's infrastructure, energy and industrial future through careers in leading PSUs including BHEL, NTPC, ONGC, GAIL, PGCIL and other government enterprises." },
  { icon: '🏦', title: '1000+ Alumni in Public Sector Banks', desc: "Driving India's financial sector through successful careers in SBI, PNB, Bank of Baroda, Canara Bank, Union Bank and other leading public sector banks." }
];

const GovtPlacements = () => {
  return (
    <section className="section govt">
      <div className="govt__glow"></div>
      <div className="section-head section-head--center reveal">
        <div className="eyebrow eyebrow--light">Nation Builders</div>
        <h2 className="section-title section-title--light">From Campus to National Service</h2>
        <p className="section-desc section-desc--light">For over two decades, SRMCEM graduates have contributed to India's progress through distinguished careers in the Civil Services, Armed Forces, Research Organizations, Public Sector Undertakings, and Government Departments. Their achievements reflect a culture of excellence, discipline, and leadership.</p>
      </div>

      <div className="govt__grid reveal">
        {cells.map((c, i) => (
          <div key={i} className="glass-cell govt-cell">
            <span className="govt-cell__icon">{c.icon}</span>
            <div className="govt-cell__title">{c.title}</div>
            <div className="govt-cell__desc">{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GovtPlacements;
