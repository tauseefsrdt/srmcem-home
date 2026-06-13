import React from 'react';

const companies = [
  'Amazon', 'Capgemini', 'Daikin', 'TCS', 'Wipro', 'Infosys', 'HCLTech', 'Cognizant',
  'Accenture', 'Deloitte', 'IBM', 'SAP', 'Tech Mahindra', 'Genpact', 'Paytm',
  'Torrent Power', 'UltraTech', 'Polycab', 'BHEL', 'NTPC', 'Axis Bank', 'HSBC', 'ICICI Bank', 'PwC',
];

const HiringNetwork = () => {
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...companies, ...companies];

  return (
    <section className="relative bg-[linear-gradient(180deg,#08162e_0%,#0b2142_100%)] border-t border-white/[0.06] py-7 overflow-hidden" aria-label="Recruiting partners">
      <div className="max-w-container mx-auto px-6 flex items-center gap-6 flex-col lg:flex-row">
        <div className="shrink-0 flex items-center gap-2.5 text-gold-light">
          <span className="w-2 h-2 rounded-full bg-gold animate-softPulse"></span>
          <span className="text-[11px] font-bold tracking-[3px] uppercase">Hiring Network</span>
        </div>

        <div className="relative flex-1 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max items-center gap-10 animate-marquee hover:[animation-play-state:paused]">
            {loop.map((c, i) => (
              <span
                key={i}
                className="text-[15px] font-display font-bold tracking-wide text-white/55 whitespace-nowrap transition-colors duration-200 hover:text-gold-light"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringNetwork;
