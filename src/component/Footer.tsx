import React from 'react';
import Icon from './Icon';

const quickLinks = ['Home', 'Programs', 'Placements', 'Admissions', 'About SRMCEM', 'Contact'];

const programs = ['B.Tech CSE / AI-ML', 'B.Tech ECE / IT', 'B.Tech ME / CE', 'MBA & MCA', 'B.Com (Hons.)', 'Diploma Programs'];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#0A1F3D_0%,#07162B_100%)] text-white/55 border-t-4 border-gold pt-20 pb-9 px-[max(24px,calc((100%-1220px)/2))]">
      {/* gold hairline + soft glow at the top edge */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,184,75,0.6),transparent)]" />
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-navy-mid/20 blur-[120px]" />

      <div className="relative grid grid-cols-[2fr_1.2fr_1fr_1fr] gap-14 pb-14 border-b border-white/[0.06] max-[900px]:grid-cols-2 max-[900px]:gap-10 max-[560px]:grid-cols-1">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 grid place-items-center flex-shrink-0 rounded-[10px] bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] font-display text-sm tracking-[0.025em] text-navy-deep shadow-gold">SRM</div>
            <div>
              <div className="font-serif font-black text-[19px] text-white leading-tight">Shri Ramswaroop Memorial</div>
              <div className="text-[10px] tracking-[2px] uppercase text-gold-light">College of Engineering &amp; Management</div>
            </div>
          </div>
          <div className="text-[13px] text-white/80 leading-[1.8] max-w-[340px]">
            SRMCEM combines academic rigour, industry exposure and student-first innovation. Tiwariganj,
            Faizabad Road, Lucknow (U.P.) — 226028. NBA Accredited · AICTE Approved · AKTU Affiliated.
          </div>
        </div>

        {/* Admissions */}
        <div>
          <div className="text-[11px] tracking-[3px] uppercase font-bold text-gold-light mb-[18px]">Admissions</div>
          <div className="text-[12px] tracking-[1.5px] uppercase text-white/55 mb-1">Admission Helpline</div>
          <a href="tel:18001035298" className="inline-flex items-center gap-2 font-display text-2xl text-white tracking-[1px] mb-5 transition-colors hover:text-gold-light">
            <Icon name="phone" className="w-5 h-5 text-gold-light" /> 1800-103-5298
          </a>
          <a
            href="#admissions"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-pill bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] text-navy-deep text-[13px] font-bold tracking-[0.5px] shadow-glowGold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glowGoldStrong"
          >
            <Icon name="file" className="w-4 h-4" /> Apply Through Google Form
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-[11px] tracking-[3px] uppercase font-bold text-gold-light mb-[18px]">Quick Links</div>
          <div className="flex flex-col gap-[11px]">
            {quickLinks.map((link) => (
              <a key={link} href="#" className="text-[13px] text-white inline-block transition-all duration-200 hover:text-gold-light hover:translate-x-1">{link}</a>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <div className="text-[11px] tracking-[3px] uppercase font-bold text-gold-light mb-[18px]">Programs</div>
          <div className="flex flex-col gap-[11px]">
            {programs.map((link) => (
              <a key={link} href="#programs" className="text-[13px] text-white inline-block transition-all duration-200 hover:text-gold-light hover:translate-x-1">{link}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-between flex-wrap gap-3.5 pt-7 text-xs max-w-container mx-auto px-0 max-[560px]:flex-col max-[560px]:items-start">
        <div className="text-white/80">© {new Date().getFullYear()} Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM). All rights reserved.</div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-gold/[0.14] border border-gold/40 text-gold-light text-[11px] font-bold tracking-[1.5px] uppercase">
          Admissions Open 2026-27
        </div>
      </div>
    </footer>
  );
};

export default Footer;
