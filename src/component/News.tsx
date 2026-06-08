import React from 'react';
import './News.css';

const events = [
  { title: 'ABHIVYAKTI — Annual Cultural Fest 2025', meta: 'Cultural · Upcoming 2025' },
  { title: 'GANTAVYA — Tech Fest: Hackathon, Robotics & Paper Presentations', meta: 'Technical · Annual Event' },
  { title: 'SPARDHA — Annual Sports Fest & SRM Premier League', meta: 'Sports · Annual Event' },
  { title: 'Campus Placement Drive — 250+ Companies Visiting', meta: 'Placements · 2025 Season' },
  { title: 'ANVARAT — 25 Years of Excellence Celebration', meta: 'Milestone · Silver Jubilee' },
  { title: 'Blood Donation Camp & NCC Annual Parade', meta: 'CSR / NCC · Regular Initiative' }
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
          <div className="news-featured__media"><span>🌐</span></div>
          <div className="news-featured__body">
            <span className="pill pill--gold">Featured</span>
            <h3 className="news-featured__title">IEEE International Conference — U.P. Section, November 2024</h3>
            <p className="news-featured__desc">SRMCEM becomes the proud host of the prestigious IEEE International Conference under the U.P. Section — a landmark achievement bringing global researchers, academicians and engineers to our campus.</p>
            <div className="news-featured__meta">
              <div className="news-featured__date"><span>📅</span> November 2024 · Lucknow Campus</div>
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
