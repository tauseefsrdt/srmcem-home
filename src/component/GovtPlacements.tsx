import React from 'react';
import { section, sectionHeadCenter, eyebrowCenter, sectionTitle, sectionDesc, glassSheen, iconTile } from '../utils/tw';
import Icon, { IconName } from './Icon';

const cells: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'landmark', title: '20+ Alumni in Indian Civil Services', desc: 'Serving the nation through prestigious roles in the IAS, IPS, IRS and other civil services, contributing to governance, policy-making and public administration.' },
  { icon: 'shield', title: '30+ Alumni in Indian Armed Forces', desc: 'Leading with courage and discipline across the Indian Army, Air Force and other defence services, safeguarding the nation and serving with distinction.' },
  { icon: 'factory', title: '150+ Alumni in Public Sector Undertakings', desc: "Building India's infrastructure, energy and industrial future through careers in leading PSUs including BHEL, NTPC, ONGC, GAIL, PGCIL and other government enterprises." },
  { icon: 'wallet', title: '1000+ Alumni in Public Sector Banks', desc: "Driving India's financial sector through successful careers in SBI, PNB, Bank of Baroda, Canara Bank, Union Bank and other leading public sector banks." }
];

const GovtPlacements = () => {
  return (
    <section className={`${section} bg-[linear-gradient(180deg,#eef3fb,#e6eef9)] overflow-hidden [&>*]:relative [&>*]:z-[1]`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_20%_40%,rgba(27,76,127,0.10)_0%,transparent_60%)]"></div>
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={`${eyebrowCenter} text-navy-mid`}>Nation Builders</div>
        <h2 className={`${sectionTitle} text-ink`}>From Campus to National Service</h2>
        <p className={`${sectionDesc} text-brand-gray mx-auto`}>For over two decades, SRMCEM graduates have contributed to India's progress through distinguished careers in the Civil Services, Armed Forces, Research Organizations, Public Sector Undertakings, and Government Departments. Their achievements reflect a culture of excellence, discipline, and leadership.</p>
      </div>

      <div className="grid grid-cols-4 gap-[18px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 reveal">
        {cells.map((c, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-lg bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover py-[34px] px-[26px]"
          >
            <span className={glassSheen} aria-hidden />
            <span className={`${iconTile} w-12 h-12 mb-[18px]`}><Icon name={c.icon} className="w-6 h-6" /></span>
            <div className="text-[15px] font-bold text-navy-dark mb-2">{c.title}</div>
            <div className="text-[13px] leading-[1.6] text-brand-gray">{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GovtPlacements;
