import React from 'react';

const TopBar = () => {
  const link =
    'inline-flex items-center gap-1.5 text-white/70 transition-colors duration-200 hover:text-gold-light';
  const tag =
    'hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1 rounded-pill text-[11px] font-bold tracking-wide uppercase transition duration-200';
  const btn =
    'hidden px-3.5 py-1 rounded-[4px] text-[11px] font-semibold tracking-wide uppercase text-white border border-white/20 whitespace-nowrap transition-colors duration-200 hover:bg-white/10';

  return (
    <div className="relative z-[900] bg-[rgba(7,22,43,0.95)] border-b border-white/[0.06] text-xs text-white/70">
      <div className="max-w-container mx-auto flex items-center justify-between gap-x-4 gap-y-2 px-4 py-2 sm:px-6">
        {/* Contact + tags */}
        <div className="flex items-center min-w-0 gap-2 sm:gap-3 md:gap-4">
          <a href="#" className={`${link} shrink-0`}>
            📞 <span className="overflow-hidden text-ellipsis whitespace-nowrap">0522-2970510</span>
          </a>
          <a href="#" className={`${link} hidden sm:inline-flex`}>✉ info@srmcem.ac.in</a>
          <div className="hidden md:block w-px h-3.5 bg-white/20"></div>
          <a
            href="#"
            className={`${tag} bg-gold text-navy-dark shadow-[0_2px_8px_rgba(239,166,60,0.4)] hover:bg-gold-dark hover:-translate-y-px`}
          >
            ⭐ UPTAC-2025
          </a>
          <a
            href="#"
            className={`${tag} bg-white/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)] hover:bg-white/[0.16] hover:-translate-y-px`}
          >
            📊 NIRF-2026
          </a>
        </div>

        {/* Quick actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <a href="#" className={`${btn} md:inline-flex`}>🔔 Notice Board</a>
          <a href="#" className={`${btn} lg:inline-flex`}>📊 Result</a>
          <a href="#" className={`${btn} sm:inline-flex`}>🔐 Login</a>
          <a
            href="#"
            className="inline-flex px-3.5 py-1 rounded-[4px] text-[11px] font-semibold tracking-wide uppercase whitespace-nowrap bg-gold text-navy-dark border border-gold transition-colors duration-200 hover:bg-gold-dark"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
