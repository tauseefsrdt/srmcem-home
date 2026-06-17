import React from 'react';

const badges = [
  { abbr: 'AICTE', label: 'AICTE Approved', sub: 'All India Council for Technical Education' },
  { abbr: 'NBA', label: 'NBA Accredited', sub: 'National Board of Accreditation' },
  { abbr: 'AKTU', label: 'AKTU Affiliated', sub: 'Dr. A.P.J. Abdul Kalam Technical University' },
  { abbr: 'LU', label: 'LU Recognised', sub: 'University of Lucknow' },
];

const Accreditation = () => {
  return (
    <section className="relative bg-white/55 backdrop-blur-glass border-y border-[rgba(15,47,87,0.08)]" aria-label="Accreditations and approvals">
      <div className="max-w-container mx-auto px-6 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {badges.map((b) => (
            <div key={b.abbr} className="group flex flex-col items-center text-center">
              <div className="relative w-[78px] h-[78px] mb-4 grid place-items-center">
                <span className="absolute inset-0 rounded-full border-2 border-dashed border-gold/50 transition-transform duration-700 group-hover:rotate-180" aria-hidden></span>
                <span className="w-[60px] h-[60px] grid place-items-center rounded-full bg-white/80 backdrop-blur-glass border border-navy-mid/20 text-navy-mid font-display font-bold text-[15px] tracking-tight shadow-card transition-all duration-300 group-hover:scale-105 group-hover:text-gold-dark group-hover:border-gold/40">
                  {b.abbr}
                </span>
              </div>
              <div className="text-[13px] font-bold tracking-[1.5px] uppercase text-ink">{b.label}</div>
              <div className="mt-1 text-[11px] leading-[1.5] text-brand-gray max-w-[180px]">{b.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditation;
