import React from 'react';
import {
  section,
  sectionHeadCenter,
  eyebrowCenter,
  sectionTitle,
} from '../utils/tw';

const categories = [
  {
    label: 'IT Companies',
    hl: ['SAP', 'Informatica', 'Infosys'],
    rest: ['TCS', 'Wipro', 'HCLTech', 'Capgemini', 'Cognizant', 'Accenture', 'Deloitte', 'IBM', 'Tech Mahindra', 'Genpact', 'Paytm']
  },
  {
    label: 'Core Engineering Companies',
    hl: ['Torrent Power', 'Daikin', 'Prism Johnson Ltd.'],
    rest: ['UltraTech Cement', 'Polycab', 'JBM Group', 'Reliance Digital', 'BHEL', 'NTPC']
  },
  {
    label: 'Management & BFSI',
    hl: ['Axis Bank', 'IDFC First Bank', 'HSBC'],
    rest: ['ICICI Bank', 'V-Mart', 'PWC']
  }
];

const CompanyLogos = () => {
  return (
    <section className={`${section} bg-[linear-gradient(180deg,#eef3fb_0%,#e6eef9_100%)] border-y border-[rgba(15,47,87,0.08)]`} id="companies">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={eyebrowCenter}>250+ Recruiters</div>
        <h2 className={sectionTitle}>Companies That Hire Our Graduates</h2>
      </div>

      {categories.map((cat, i) => (
        <div key={i} className="text-center mb-10 last:mb-0 reveal">
          <div className="inline-block bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] border-l-[3px] border-l-gold px-4 py-1.5 mb-5 text-[11px] font-bold tracking-[3px] uppercase text-navy-mid">{cat.label}</div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {cat.hl.map((c, j) => <div key={`h${j}`} className="px-5 py-2.5 border border-gold/40 rounded-pill bg-gold/15 text-[12px] font-semibold text-gold-text transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold/25 hover:border-gold hover:text-gold-text">{c}</div>)}
            {cat.rest.map((c, j) => <div key={`r${j}`} className="px-5 py-2.5 border border-[rgba(15,47,87,0.10)] rounded-pill bg-white/70 backdrop-blur-glass text-[12px] font-semibold text-navy-dark transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:border-navy-mid/30 hover:text-navy">{c}</div>)}
          </div>
        </div>
      ))}
    </section>
  );
};

export default CompanyLogos;
