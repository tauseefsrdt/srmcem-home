import React from 'react';
import './RecreatedHome.css';

const RecreatedHome: React.FC = () => {
    return (
        <div className="rh-root">
            <header className="rh-header">
                <div className="rh-topbar">
                    <div className="rh-container rh-topbar-inner">
                        <div>📞 0522-2970510 • ✉ info@srmcem.ac.in</div>
                        <div className="rh-top-actions">
                            <a className="rh-pill" href="#uptac">UPTAC-2025</a>
                            <a className="rh-pill rh-pill--muted" href="#nirf">NIRF-2026</a>
                        </div>
                    </div>
                </div>

                <div className="rh-nav">
                    <div className="rh-container rh-nav-inner">
                        <a className="rh-brand" href="#home">
                            <div className="rh-logo">SRM</div>
                            <div className="rh-brand-text">SRMCEM</div>
                        </a>
                        <nav className="rh-main-nav" aria-label="Main navigation">
                            <a href="#about">About</a>
                            <a href="#programs">Programs</a>
                            <a href="#admissions">Admissions</a>
                            <a href="#placements">Placements</a>
                            <a href="#contact">Contact</a>
                        </nav>
                        <div className="rh-cta">
                            <a className="rh-btn" href="#apply">Apply 2025</a>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section className="rh-hero">
                    <div className="rh-container rh-hero-inner">
                        <div className="rh-hero-copy">
                            <p className="rh-eyebrow">Admissions Open 2025-26</p>
                            <h1>Top Choice of AKTU Aspirants in the Region</h1>
                            <p className="rh-lead">Build your future with outcome-driven programs, hands-on projects, and a campus culture designed for leadership and innovation.</p>
                            <div className="rh-hero-actions">
                                <a className="rh-btn rh-btn--primary" href="#apply">Apply for Admission</a>
                                <a className="rh-link" href="#placements">View Placements</a>
                            </div>
                        </div>
                        <div className="rh-hero-media" aria-hidden>
                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="Campus" />
                        </div>
                    </div>
                </section>

                <section className="rh-stats rh-section">
                    <div className="rh-container rh-stats-grid">
                        <div className="rh-card">
                            <div className="rh-stat-num">8+</div>
                            <div className="rh-stat-label">Years Of Experience</div>
                        </div>
                        <div className="rh-card">
                            <div className="rh-stat-num">8+</div>
                            <div className="rh-stat-label">Number Of Courses</div>
                        </div>
                        <div className="rh-card">
                            <div className="rh-stat-num">486+</div>
                            <div className="rh-stat-label">Students</div>
                        </div>
                        <div className="rh-card">
                            <div className="rh-stat-num">96+</div>
                            <div className="rh-stat-label">Number Of Placements</div>
                        </div>
                    </div>
                </section>

                <section id="programs" className="rh-section">
                    <div className="rh-container">
                        <h2 className="rh-section-title">Our Courses</h2>
                        <p className="rh-section-sub">A diverse set of programs focused on employability and industry-aligned outcomes.</p>
                        <div className="rh-grid rh-grid--3">
                            {['Computer Science & Engineering', 'Information Technology', 'Mechanical Engineering', 'Civil Engineering', 'Electronics & Communication', 'MBA'].map((t, i) => (
                                <article key={i} className="rh-course">
                                    <div className="rh-course-media"><img src={`https://picsum.photos/seed/course${i}/400/240`} alt="" /></div>
                                    <h3>{t}</h3>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="placements" className="rh-section rh-section--light">
                    <div className="rh-container">
                        <h2 className="rh-section-title">Placement Highlights</h2>
                        <div className="rh-grid rh-grid--3">
                            <div className="rh-placement-card rh-card">
                                <div className="rh-placement-num">91%</div>
                                <div className="rh-placement-label">Placement in Computer Science Engineering</div>
                            </div>
                            <div className="rh-placement-card rh-card">
                                <div className="rh-placement-num">29 LPA</div>
                                <div className="rh-placement-label">Highest Package (2024)</div>
                            </div>
                            <div className="rh-placement-card rh-card">
                                <div className="rh-placement-num">623+</div>
                                <div className="rh-placement-label">Students placed in Fortune 500</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rh-section">
                    <div className="rh-container">
                        <h2 className="rh-section-title">Latest News & Events</h2>
                        <div className="rh-grid rh-grid--2">
                            <article className="rh-news-card rh-card">
                                <img src="https://picsum.photos/seed/event1/800/420" alt="event" />
                                <h3>Annual Convocation & Awards</h3>
                                <p>SRMCEM celebrated achievements at the annual convocation ceremony with industry leaders and faculty.</p>
                                <a className="rh-link" href="#">Read More</a>
                            </article>
                            <aside className="rh-side-list">
                                {[1, 2, 3].map(n => (
                                    <div key={n} className="rh-side-item rh-card">
                                        <h4>News title {n}</h4>
                                        <p>Short summary of the news item.</p>
                                    </div>
                                ))}
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="rh-section rh-testimonials">
                    <div className="rh-container">
                        <h2 className="rh-section-title">Testimonials</h2>
                        <div className="rh-card rh-testimonial-card">
                            <p>"The faculty & industry exposure helped me secure my dream job."</p>
                            <div className="rh-testimonial-author">— Alumnus, SRMCEM</div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="rh-footer">
                <div className="rh-container">
                    <div className="rh-footer-grid">
                        <div>
                            <h4>SRMCEM</h4>
                            <p>Address: Faizabad Road, Lucknow (UP) - 226028</p>
                            <p>Phone: 0522-2970510</p>
                        </div>
                        <div>
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Admissions</a></li>
                                <li><a href="#">Programs</a></li>
                                <li><a href="#">Placements</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Contact</h4>
                            <p>info@srmcem.ac.in</p>
                        </div>
                    </div>
                    <div className="rh-footer-bottom">© SRMCEM 2025</div>
                </div>
            </footer>
        </div>
    );
};

export default RecreatedHome;
