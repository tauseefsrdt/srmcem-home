import React from 'react';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        {/* Contact + tags */}
        <div className="topbar__group">
          <a href="#" className="topbar__link topbar__link--phone">📞 <span>0522-2970510</span></a>
          <a href="#" className="topbar__link topbar__link--email">✉ info@srmcem.ac.in</a>
          <div className="topbar__divider"></div>
          <a href="#" className="topbar__tag topbar__tag--gold">⭐ UPTAC-2025</a>
          <a href="#" className="topbar__tag topbar__tag--navy">📊 NIRF-2026</a>
        </div>

        {/* Quick actions */}
        <div className="topbar__actions">
          <a href="#" className="topbar__btn topbar__btn--notice">🔔 Notice Board</a>
          <a href="#" className="topbar__btn topbar__btn--result">📊 Result</a>
          <a href="#" className="topbar__btn topbar__btn--login">🔐 Login</a>
          <a href="#" className="topbar__btn topbar__btn--apply">Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
