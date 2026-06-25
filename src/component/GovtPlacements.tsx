import React from 'react';
import { section, eyebrow, sectionTitle } from '../utils/tw';
import Icon, { IconName } from './Icon';
import { unsplash } from '../utils/placeholder';

const cells: { icon: IconName; title: string; desc: string; img: string }[] = [
  { icon: 'landmark', title: 'UPSC / Civil Services', desc: 'Disha Srivastava (IAS), Vaibhav Chaudhary (IAS), Akshat Jain (IRS), Shivanchal Asthana (Wing Commander, IAF)', img: '1529107386315-e1a2ed48a620' },
  { icon: 'shield', title: 'IPS & Police Services', desc: 'Sakshi Singh — Indian Police Service (IPS), Bihar Cadre, Batch 2022. Proudly representing SRMCEM in national security.', img: '1541872703-74c5e44368f9' },
  { icon: 'factory', title: 'Defence & Research', desc: 'Abhilash Ojha — Scientist at ISRO. Anurag Verma — Jr. Research Engineer, RDSO. Neeraj Upadhyay — Patent Officer, Govt. of India.', img: '1473341304170-971dccb5ac1e' },
  { icon: 'wallet', title: 'PSU & UPSC-ESE', desc: 'Vaishnavi Mishra — UPSC-ESE (Govt. of India). Regular selections in BHEL, NTPC, ONGC through GATE & direct recruitment.', img: '1554224155-6726b3ff858f' },
];

const GovtPlacements = () => {
  return (
    <section className={`${section} bg-[#FFFFFF] overflow-hidden [&>*]:relative [&>*]:z-[1]`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_20%_40%,rgba(27,76,127,0.10)_0%,transparent_60%)]"></div>
      <div className="mb-14 reveal">
        <div className={`${eyebrow} text-navy-mid`}>Government Sector</div>
        <h2 className={`${sectionTitle} text-ink`}>Proudly Serving the Nation</h2>
        <p className="mt-[18px] text-base leading-[1.85] text-brand-gray max-w-[680px]">From IAS to ISRO — SRMCEM alumni serve at the highest levels of India's government and public sector.</p>
      </div>

      <div className="grid grid-cols-4 gap-[18px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 reveal">
        {cells.map((c, i) => (
          <article
            key={i}
            className="group relative flex flex-col overflow-hidden rounded-lg bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-navy-mid/10">
              <img
                src={unsplash(c.img, 480, 300)}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,22,43,0.45)_100%)]" aria-hidden />
              {/* icon badge centered, overlapping the image */}
              {/* <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 grid place-items-center rounded-[12px] bg-white border border-[rgba(15,47,87,0.10)] shadow-card text-navy-mid transition-colors duration-300 group-hover:text-gold-dark">
                <Icon name={c.icon} className="w-[22px] h-[22px]" />
              </span> */}
            </div>
            <div className="pt-9 px-6 pb-7 text-center">
              <div className="text-[15px] font-bold text-navy-dark mb-2">{c.title}</div>
              <div className="text-[13px] leading-[1.6] text-brand-gray">{c.desc}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GovtPlacements;
