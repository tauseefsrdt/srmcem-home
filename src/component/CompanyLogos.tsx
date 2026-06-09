import React from 'react';

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
    <section className="section companies" id="companies">
      <div className="section-head section-head--center reveal">
        <div className="eyebrow eyebrow--light">250+ Recruiters</div>
        <h2 className="section-title section-title--light">Companies That Hire Our Graduates</h2>
      </div>

      {categories.map((cat, i) => (
        <div key={i} className="company-cat reveal">
          <div className="company-cat__label">{cat.label}</div>
          <div className="company-chips">
            {cat.hl.map((c, j) => <div key={`h${j}`} className="chip chip--hl">{c}</div>)}
            {cat.rest.map((c, j) => <div key={`r${j}`} className="chip">{c}</div>)}
          </div>
        </div>
      ))}
    </section>
  );
};

export default CompanyLogos;
