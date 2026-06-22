import React, { useState, useEffect } from 'react';

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
    <nav className="sticky top-0 z-[999] bg-white/75 border-b border-[rgba(15,47,87,0.1)] shadow-card backdrop-blur-glass">
      <div className="max-w-container mx-auto flex items-stretch justify-between min-h-[66px] px-4 sm:px-6">
        {/* Brand Logo */}
        <a className="flex items-center gap-[14px] py-2.5" href="https://srmcem.ac.in" target="_blank" rel="noreferrer">
          <div className="w-11 h-11 grid place-items-center flex-shrink-0 rounded-[10px] bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] font-display text-sm tracking-[0.025em] text-navy-deep shadow-gold">SRM</div>
          <div className="font-serif text-[17px] font-bold leading-[1.25] text-navy-dark">SRMCEM<span className="block font-sans text-[10px] font-normal tracking-[2px] uppercase text-brand-gray">Est. 2001 · Lucknow</span></div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-stretch">
          {navItems.map((item, idx) => (
            <div key={idx} className="group relative flex items-center">
              <a href="#" className="flex items-center h-full gap-1.5 px-[18px] text-[13px] font-medium tracking-[0.025em] text-navy-dark/80 whitespace-nowrap transition-[background,color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-navy-mid/[0.06] group-hover:text-navy-dark">
                {item.name} <span className="text-[9px] opacity-60">▾</span>
              </a>
              <div className="absolute top-full left-0 z-[200] min-w-[210px] flex flex-col py-1.5 bg-white/95 backdrop-blur-glass border border-[rgba(15,47,87,0.1)] border-t-2 border-t-gold rounded-b-[14px] shadow-soft opacity-0 invisible translate-y-2 transition-[opacity,transform,visibility] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                {item.links.map((link, lIdx) => (
                  <a key={lIdx} href="#" className="py-[11px] px-5 text-[13px] text-brand-gray border-l-2 border-l-transparent transition-[background,color,padding,border-color] duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-navy-mid/[0.05] hover:text-navy-dark hover:pl-[26px] hover:border-l-gold">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons & Hamburger (Mobile) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="#admissions" className="hidden sm:inline-flex py-2.5 px-[22px] rounded-pill bg-[linear-gradient(135deg,#1B4C7F,#0F2F57)] text-white text-xs font-bold tracking-[0.025em] whitespace-nowrap shadow-[0_8px_22px_rgba(27,76,127,0.35)] transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-px hover:shadow-[0_12px_28px_rgba(27,76,127,0.5)]">Apply 2025–26 →</a>
          <button className="flex lg:hidden flex-col justify-center gap-1.5 w-8 h-8" aria-label="Open menu" onClick={() => setIsMobileMenuOpen(true)}>
            <span className="block h-[3px] rounded-pill bg-navy-dark transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"></span>
            <span className="block h-[3px] rounded-pill bg-navy-dark transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] w-4/5 ml-auto"></span>
            <span className="block h-[3px] rounded-pill bg-navy-dark transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"></span>
          </button>
        </div>
      </div>

      {/* Mobile Slider Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[2000] bg-black/60" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Mobile Slider Menu — white frosted glass */}
      <div className={`fixed top-0 right-0 bottom-0 z-[2001] flex flex-col w-[85vw] max-w-[380px] bg-white/95 backdrop-blur-glass border-l border-[rgba(15,47,87,0.1)] shadow-[-20px_0_60px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Slider Header */}
        <div className="flex items-center justify-between py-[22px] px-6 bg-navy-light/60 border-b border-[rgba(15,47,87,0.1)]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 grid place-items-center rounded-lg bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] font-display text-sm tracking-[0.025em] text-navy-deep shadow-gold">SRM</div>
            <div className="text-[15px] font-bold tracking-[0.025em] uppercase text-navy-dark">Menu</div>
          </div>
          <button className="w-9 h-9 grid place-items-center rounded-lg border border-[rgba(15,47,87,0.14)] bg-white text-2xl leading-none text-navy-dark transition-[background,border-color,color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-navy-mid hover:bg-navy hover:text-white" aria-label="Close menu" onClick={() => setIsMobileMenuOpen(false)}>×</button>
        </div>

        {/* Slider Links (Accordion) */}
        <div className="flex-1 overflow-y-auto py-2.5">
          {navItems.map((item, idx) => (
            <div key={idx} className="mx-6 border-b border-[rgba(15,47,87,0.1)]">
              <button
                className="w-full py-[18px] flex items-center justify-between text-left text-sm font-bold tracking-[0.025em] uppercase text-navy-dark group"
                aria-expanded={openAccordion === item.name}
                onClick={() => toggleAccordion(item.name)}
              >
                {item.name}
                <span className="w-7 h-7 grid place-items-center rounded-[5px] border border-[rgba(15,47,87,0.12)] bg-navy-light/60 text-xs text-brand-gray transition-[transform,background,color,border-color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-aria-expanded:rotate-180 group-aria-expanded:bg-gold/[0.18] group-aria-expanded:text-gold-dark group-aria-expanded:border-gold/40">▼</span>
              </button>

              {openAccordion === item.name && (
                <div className="flex flex-col gap-[14px] pt-1 pb-5 pl-3 animate-[fadeUp_0.3s_cubic-bezier(0.4,0,0.2,1)_both]">
                  {item.links.map((link, lIdx) => (
                    <a key={lIdx} href="#" className="text-sm font-medium text-brand-gray transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-navy-mid" onClick={() => setIsMobileMenuOpen(false)}>{link}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="p-6 bg-navy-light/50 border-t border-[rgba(15,47,87,0.1)]">
          <a href="#admissions" className="block w-full py-[14px] text-center rounded-pill bg-[linear-gradient(135deg,#1B4C7F,#0F2F57)] text-white text-sm font-bold tracking-[0.025em] uppercase shadow-[0_8px_22px_rgba(27,76,127,0.35)]" onClick={() => setIsMobileMenuOpen(false)}>Apply for Admission 2025</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
