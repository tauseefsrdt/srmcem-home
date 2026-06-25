import React from 'react';
import {
  section,
  eyebrow,
  sectionTitle,
} from '../utils/tw';

/* ─────────────────────────────────────────────
   Company logo definitions
   logo  → local asset path (if we have the file)
   bg    → brand primary colour
   fg    → text / icon colour on that bg
   abbr  → short label rendered as the logo mark
───────────────────────────────────────────── */
type Company = {
  name: string;
  logo: string;
};

const itCompanies: Company[] = [
  { name: 'SAP',           logo: '/assets/hiring_network/sap.png' },
  { name: 'Infosys',       logo: '/assets/hiring_network/infosys.png' },
  { name: 'Capgemini',     logo: '/assets/hiring_network/Capgemini.png' },
  { name: 'Informatica',   logo: '/assets/hiring_network/informatica.svg' },
  { name: 'TCS',           logo: '/assets/hiring_network/tcs.svg' },
  { name: 'Wipro',         logo: '/assets/hiring_network/wipro.svg' },
  { name: 'HCLTech',       logo: '/assets/hiring_network/hcltech.svg' },
  { name: 'Cognizant',     logo: '/assets/hiring_network/cognizant.svg' },
  { name: 'Accenture',     logo: '/assets/hiring_network/accenture.svg' },
  { name: 'Deloitte',      logo: '/assets/hiring_network/deloitte.svg' },
  { name: 'IBM',           logo: '/assets/hiring_network/ibm.svg' },
  { name: 'Tech Mahindra', logo: '/assets/hiring_network/techmahindra.svg' },
  { name: 'Genpact',       logo: '/assets/hiring_network/genpact.svg' },
  { name: 'Paytm',         logo: '/assets/hiring_network/paytm.svg' },
];

const coreCompanies: Company[] = [
  { name: 'Daikin',           logo: '/assets/hiring_network/daikin.png' },
  { name: 'Adani',            logo: '/assets/hiring_network/adani.png'  },
  { name: 'L&T',              logo: '/assets/hiring_network/l&t.png'    },
  { name: 'Tata Steel',       logo: '/assets/hiring_network/tata steel.png' },
  { name: 'Torrent Power',    logo: '/assets/hiring_network/torrentpower.svg' },
  { name: 'Prism Johnson',    logo: '/assets/hiring_network/prismjohnson.svg' },
  { name: 'UltraTech Cement', logo: '/assets/hiring_network/ultratechcement.svg' },
  { name: 'Polycab',          logo: '/assets/hiring_network/polycab.svg' },
  { name: 'JBM Group',        logo: '/assets/hiring_network/jbmgroup.svg' },
  { name: 'Reliance Digital', logo: '/assets/hiring_network/reliancedigital.svg' },
  { name: 'BHEL',             logo: '/assets/hiring_network/bhel.svg' },
  { name: 'NTPC',             logo: '/assets/hiring_network/ntpc.svg' },
];

const bfsiCompanies: Company[] = [
  { name: 'GSK',             logo: '/assets/hiring_network/gsk.png'    },
  { name: 'Amazon',          logo: '/assets/hiring_network/amazon.png' },
  { name: 'Ranbaxy',         logo: '/assets/hiring_network/ranbaxy.png'},
  { name: 'Axis Bank',       logo: '/assets/hiring_network/axisbank.svg' },
  { name: 'IDFC First Bank', logo: '/assets/hiring_network/idfcfirstbank.svg' },
  { name: 'HSBC',            logo: '/assets/hiring_network/hsbc.svg' },
  { name: 'ICICI Bank',      logo: '/assets/hiring_network/icicibank.svg' },
  { name: 'V-Mart',          logo: '/assets/hiring_network/vmart.svg' },
  { name: 'PWC',             logo: '/assets/hiring_network/pwc.svg' },
];

const categories = [
  { label: 'IT Companies',          companies: itCompanies,   dir: 'left'  },
  { label: 'Core Engineering',      companies: coreCompanies, dir: 'right' },
  { label: 'Management & BFSI',     companies: bfsiCompanies, dir: 'left'  },
];

/* ─── Single logo card ─────────────────────── */
const LogoCard = ({ company }: { company: Company }) => (
  <div className="flex-shrink-0 mx-3 h-16 px-5 flex items-center justify-center bg-white rounded-xl border border-[rgba(15,47,87,0.10)] shadow-sm">
    <img
      src={company.logo}
      alt={company.name}
      className="h-9 w-auto max-w-[120px] object-contain"
    />
  </div>
);

/* ─── Infinite-scroll row ──────────────────── */
const MarqueeRow = ({
  companies,
  reverse,
  speed = 40,
}: {
  companies: Company[];
  reverse: boolean;
  speed?: number;
}) => {
  const loop = [...companies, ...companies, ...companies];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] py-2">
      <div
        className="flex w-max items-center hover:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? 'marqueeReverse' : 'marquee'} ${speed}s linear infinite`,
        }}
      >
        {loop.map((c, idx) => (
          <LogoCard key={idx} company={c} />
        ))}
      </div>
    </div>
  );
};

/* ─── Section ──────────────────────────────── */
const CompanyLogos = () => (
  <>
    {/* Keyframe styles injected once */}
    <style>{`
      @keyframes marquee        { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
      @keyframes marqueeReverse { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }
    `}</style>

    <section
      className={`${section} bg-[linear-gradient(180deg,#FFFFFF_0%,#E6E6E7_100%)]`}
      id="companies"
    >
      <div className="mb-14 reveal">
        <div className={eyebrow}>250+ Recruiters</div>
        <h2 className={sectionTitle}>Companies That<br />Hire Our Graduates</h2>
      </div>

      <div className="space-y-10">
        {categories.map((cat, i) => (
          <div key={i} className="reveal">
            <div className="mb-5">
              <span className="inline-block bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] border-l-[3px] border-l-gold px-4 py-1.5 text-[11px] font-bold tracking-[3px] uppercase text-navy-mid">
                {cat.label}
              </span>
            </div>
            <MarqueeRow
              companies={cat.companies}
              reverse={cat.dir === 'right'}
              speed={i === 1 ? 35 : 42}
            />
          </div>
        ))}
      </div>
    </section>
  </>
);

export default CompanyLogos;
