import React from 'react';

const columns = [
  {
    title: 'Programs',
    links: ['B.Tech CSE / AI-ML', 'B.Tech ECE / IT', 'B.Tech ME / CE', 'MBA (120 Seats)', 'MCA / M.Tech', 'Diploma Programs']
  },
  {
    title: 'Recognitions',
    links: ['AKTU Affiliation', 'NIRF Ranking', 'UPTAC', 'NBA Accreditation', 'AICTE Approval', 'ISO Certification']
  },
  {
    title: 'Career',
    links: ['Faculty Positions', 'Staff Recruitment', 'Current Openings', 'Application Form', 'srmcem.ac.in']
  }
];

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white/55 border-t border-white/[0.08] pt-20 pb-9 px-[max(24px,calc((100%-1220px)/2))]">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-14 pb-14 border-b border-white/[0.06] max-[900px]:grid-cols-2 max-[900px]:gap-10 max-[560px]:grid-cols-1">
        <div>
          <div className="font-serif font-black text-[21px] text-white mb-[7px]">Shri Ramswaroop Memorial</div>
          <div className="text-[11px] tracking-[2px] uppercase text-gold-light mb-[18px]">College of Engineering & Management</div>
          <div className="text-[13px] leading-[1.8] max-w-[320px]">Tiwariganj, Faizabad Road, Lucknow (U.P.) - 226028. NBA Accredited · AICTE Approved · AKTU Affiliated.</div>
        </div>
        {columns.map((col, i) => (
          <div key={i}>
            <div className="text-[11px] tracking-[3px] uppercase font-bold text-gold-light mb-[18px]">{col.title}</div>
            <div className="flex flex-col gap-[11px]">
              {col.links.map((link, j) => <a key={j} href="#" className="text-[13px] text-white/40 inline-block transition-all duration-200 hover:text-gold-light hover:translate-x-1">{link}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between flex-wrap gap-3.5 pt-7 text-xs max-w-container mx-auto px-0 max-[560px]:flex-col max-[560px]:items-start">
        <div className="text-white/30">© {new Date().getFullYear()} SHRI RAMSWAROOP. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="text-white/30 transition-colors duration-200 hover:text-gold-light">Privacy Policy</a>
          <a href="#" className="text-white/30 transition-colors duration-200 hover:text-gold-light">Terms of Use</a>
          <a href="#" className="text-white/30 transition-colors duration-200 hover:text-gold-light">Grievance Cell</a>
          <a href="#" className="text-white/30 transition-colors duration-200 hover:text-gold-light">RTI</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
