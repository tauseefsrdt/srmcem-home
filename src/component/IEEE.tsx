import React from 'react';

const chapters = [
  { icon: '🤖', title: 'Robotics & Automation', cap: 'IEEE RAS Branch' },
  { icon: '📡', title: 'Signal Processing', cap: 'SRMCEM Student Chapter' },
  { icon: '⚡', title: 'IEEE Student Branch', cap: 'Main SRMCEM Branch' },
  { icon: '🔋', title: 'Power & Energy Society', cap: 'IEEE PES Chapter' },
  { icon: '👩‍💻', title: 'Women in Engineering', cap: 'WIE Affinity Group' }
];

const IEEE = () => {
  return (
    <section className="section section--light">
      <div className="section-head section-head--center section-head--wide reveal">
        <div className="eyebrow">Memberships &amp; Associations</div>
        <h2 className="section-title">IEEE Student Branch &amp; Global Chapters</h2>
        <p className="section-desc">At SRMCEM, IEEE membership opens the door to innovation, global networking, and professional excellence. Our vibrant IEEE Student Branch actively organizes workshops, seminars and technical events to empower students with the latest in technology and leadership skills — a proud milestone being the IEEE International Conference under the U.P. Section in November 2024.</p>
      </div>

      <div className="grid grid--5 reveal">
        {chapters.map((c, i) => (
          <div key={i} className="surface-card ieee-card">
            <div className="ieee-card__icon">{c.icon}</div>
            <div className="ieee-card__title">{c.title}</div>
            <div className="ieee-card__cap">{c.cap}</div>
          </div>
        ))}
      </div>

      <div className="ieee-banner reveal">
        <span className="ieee-banner__icon">🌐</span>
        <div>
          <div className="ieee-banner__title">IEEE International Conference — November 2024</div>
          <div className="ieee-banner__desc">SRMCEM proudly hosts the IEEE International Conference under the U.P. Section — showcasing our commitment to global academic and research excellence.</div>
        </div>
      </div>
    </section>
  );
};

export default IEEE;
