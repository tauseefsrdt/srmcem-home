import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <div className="topbar__group">
          <a href="#" className="topbar__link">📞 0522-2970510</a>
          <a href="#" className="topbar__link">✉ info@srmcem.ac.in</a>
          <div className="topbar__divider"></div>
          <a href="#" className="topbar__tag topbar__tag--gold">⭐ UPTAC-2025</a>
          <a href="#" className="topbar__tag topbar__tag--navy">📊 NIRF-2026</a>
        </div>
        <div className="topbar__group">
          <a href="#" className="topbar__btn">🔔 Notice Board</a>
          <div className="topbar__divider"></div>
          <a href="#" className="topbar__btn">📊 Result</a>
          <div className="topbar__divider"></div>
          <a href="#" className="topbar__btn">🔐 Login</a>
          <div className="topbar__divider"></div>
          <a href="#" className="topbar__btn topbar__btn--apply">Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
