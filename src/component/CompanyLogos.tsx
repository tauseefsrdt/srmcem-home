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
    <section className={`${section} bg-[linear-gradient(160deg,#0f2f57_0%,#0b2142_100%)] text-white`} id="companies">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={`${eyebrowCenter} text-gold-light`}>250+ Recruiters</div>
        <h2 className={`${sectionTitle} text-white`}>Companies That Hire Our Graduates</h2>
      </div>

      {categories.map((cat, i) => (
        <div key={i} className="text-center mb-10 last:mb-0 reveal">
          <div className="inline-block bg-white/[0.08] border border-white/[0.14] border-l-[3px] border-l-gold px-4 py-1.5 mb-5 text-[11px] font-bold tracking-[3px] uppercase text-gold-light">{cat.label}</div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {cat.hl.map((c, j) => <div key={`h${j}`} className="px-5 py-2.5 border border-gold/[0.45] rounded-pill bg-gold/[0.18] text-[12px] font-semibold text-gold-light transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold/[0.12] hover:border-gold-light hover:text-gold-light">{c}</div>)}
            {cat.rest.map((c, j) => <div key={`r${j}`} className="px-5 py-2.5 border border-white/[0.18] rounded-pill bg-white/[0.06] text-[12px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold/[0.12] hover:border-gold-light hover:text-gold-light">{c}</div>)}
          </div>
        </div>
      ))}
    </section>
  );
};

export default CompanyLogos;
