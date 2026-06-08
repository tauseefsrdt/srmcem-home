import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  const navItems = [
    {
      name: 'About Us',
      links: ['About SRMCEM', 'Vision & Mission', 'Management', 'Principal\'s Message', 'NBA Accreditation', 'NIRF Ranking', 'AKTU Affiliation', 'UPTAC']
    },
    {
      name: 'Departments',
      links: ['Computer Science (CSE)', 'Information Technology (IT)', 'Electronics & Comm. (ECE)', 'Electrical Engineering (EE)', 'Mechanical Engineering (ME)', 'Civil Engineering (CE)', 'MBA', 'MCA / M.Tech']
    },
    {
      name: 'Admission',
      links: ['B.Tech Admission', 'MBA Admission', 'MCA Admission', 'M.Tech Admission', 'Diploma / Polytechnic', 'Fee Structure', 'Scholarship', 'UPTAC Counselling']
    },
    {
      name: 'Placements',
      links: ['Placement Overview', 'Recruiters List', 'Placement Statistics', 'Training & Development', 'Internship Cell']
    },
    {
      name: 'Facilities',
      links: ['Smart Classrooms', 'Laboratories & Labs', 'Library', 'Hostel', 'Sports & Gym', 'Medical Center']
    }
  ];

  return (
    <nav className="nav">
      <div className="nav__inner">
        {/* Brand Logo */}
        <a className="nav__brand" href="https://srmcem.ac.in" target="_blank" rel="noreferrer">
          <div className="nav__logo">SRM</div>
          <div className="nav__brand-text">SRMCEM<span>Est. 2001 · Lucknow</span></div>
        </a>

        {/* Desktop Nav Items */}
        <div className="nav__menu">
          {navItems.map((item, idx) => (
            <div key={idx} className="nav__item">
              <a href="#" className="nav__link">
                {item.name} <span>▾</span>
              </a>
              <div className="nav__dropdown">
                {item.links.map((link, lIdx) => (
                  <a key={lIdx} href="#">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons & Hamburger (Mobile) */}
        <div className="nav__actions">
          <a href="#admissions" className="nav__apply">Apply 2025–26 →</a>
          <button className="nav__burger" aria-label="Open menu" onClick={() => setIsMobileMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Slider Overlay */}
      {isMobileMenuOpen && (
        <div className="nav__overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Mobile Slider Menu */}
      <div className={`nav__drawer ${isMobileMenuOpen ? 'is-open' : ''}`}>
        {/* Slider Header */}
        <div className="nav__drawer-head">
          <div className="nav__drawer-brand">
            <div className="nav__drawer-logo">SRM</div>
            <div className="nav__drawer-title">Menu</div>
          </div>
          <button className="nav__close" aria-label="Close menu" onClick={() => setIsMobileMenuOpen(false)}>×</button>
        </div>

        {/* Slider Links (Accordion) */}
        <div className="nav__acc">
          {navItems.map((item, idx) => (
            <div key={idx} className="nav__acc-item">
              <button
                className="nav__acc-trigger"
                aria-expanded={openAccordion === item.name}
                onClick={() => toggleAccordion(item.name)}
              >
                {item.name}
                <span className="nav__acc-icon">▼</span>
              </button>

              {openAccordion === item.name && (
                <div className="nav__acc-panel">
                  {item.links.map((link, lIdx) => (
                    <a key={lIdx} href="#" onClick={() => setIsMobileMenuOpen(false)}>{link}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="nav__drawer-foot">
          <a href="#admissions" onClick={() => setIsMobileMenuOpen(false)}>Apply for Admission 2025</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
