import React from 'react';

const events = [
  { title: 'A proud moment for the SRMCEM family!', meta: '8 MARCH 2026' },
  { title: 'SRMCEM Alumni Mr. Suyash awarded by U.P. Govt', meta: 'Alumni · Recognition' },
  { title: 'SRMCEM Robotics Club Triumphs at Intercollege Meet', meta: 'Clubs · Robotics' },
  { title: 'Abhivyakti 2026 — Cultural Extravaganza', meta: 'Events · 2026' }
];

const News = () => {
  return (
    <section className="section section--light" id="news">
      <div className="section-head section-head--center reveal">
        <div className="eyebrow">Latest Events &amp; News</div>
        <h2 className="section-title">What's Happening at SRMCEM</h2>
      </div>

      <div className="news-grid reveal">
        <article className="news-featured">
          <div className="news-featured__media"><img src="https://picsum.photos/seed/event-main/900/420" alt="convocation" /></div>
          <div className="news-featured__body">
            <span className="pill pill--gold">Featured</span>
            <h3 className="news-featured__title">A proud moment for the SRMCEM family!</h3>
            <p className="news-featured__desc">Our Co-founder and Additional Executive Director, Dr. Pooja Agarwal, was honored by the Hon'ble Governor of Uttar Pradesh on the occasion of International Women's Day (8 March 2026). This prestigious recognition reflects SRMCEM's commitment to excellence and leadership.</p>
            <div className="news-featured__meta">
              <div className="news-featured__date"><span>📅</span> 8 March 2026 · Lucknow Campus</div>
              <a href="#" className="link-arrow">Read More →</a>
            </div>
          </div>
        </article>

        <div className="news-list">
          {events.map((e, i) => (
            <div key={i} className="news-item">
              <div className="news-item__dot"></div>
              <div>
                <div className="news-item__title">{e.title}</div>
                <div className="news-item__meta">{e.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
