import React from 'react';
import { logo } from '../utils/placeholder';

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
              <div className="relative w-[86px] h-[86px] mb-4 grid place-items-center">
                <span className="absolute inset-0 rounded-full border-2 border-dashed border-gold/50 transition-transform duration-700 group-hover:rotate-180" aria-hidden></span>
                {/* Placeholder emblem — swap for the real accreditation seal. */}
                <img
                  src={logo(b.abbr, 120, 120)}
                  alt={`${b.label} logo`}
                  loading="lazy"
                  className="w-[64px] h-[64px] rounded-full object-cover bg-white border border-navy-mid/20 shadow-card transition-all duration-300 group-hover:scale-105 group-hover:border-gold/40"
                />
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
