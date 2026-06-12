import React from 'react';
import { section, sectionHeadCenter, eyebrowCenter, sectionTitle, sectionDesc } from '../utils/tw';

const cells = [
  { icon: '🏛️', title: '20+ Alumni in Indian Civil Services', desc: 'Serving the nation through prestigious roles in the IAS, IPS, IRS and other civil services, contributing to governance, policy-making and public administration.' },
  { icon: '🎖️', title: '30+ Alumni in Indian Armed Forces', desc: 'Leading with courage and discipline across the Indian Army, Air Force and other defence services, safeguarding the nation and serving with distinction.' },
  { icon: '🏭', title: '150+ Alumni in Public Sector Undertakings', desc: "Building India's infrastructure, energy and industrial future through careers in leading PSUs including BHEL, NTPC, ONGC, GAIL, PGCIL and other government enterprises." },
  { icon: '🏦', title: '1000+ Alumni in Public Sector Banks', desc: "Driving India's financial sector through successful careers in SBI, PNB, Bank of Baroda, Canara Bank, Union Bank and other leading public sector banks." }
];

const GovtPlacements = () => {
  return (
    <section className={`${section} bg-[linear-gradient(145deg,#0a1f3d_0%,#0f2f57_100%)] overflow-hidden [&>*]:relative [&>*]:z-[1]`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_20%_40%,rgba(27,76,127,0.4)_0%,transparent_60%)]"></div>
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={`${eyebrowCenter} text-gold-light`}>Nation Builders</div>
        <h2 className={`${sectionTitle} text-white`}>From Campus to National Service</h2>
        <p className={`${sectionDesc} text-white/60 mx-auto`}>For over two decades, SRMCEM graduates have contributed to India's progress through distinguished careers in the Civil Services, Armed Forces, Research Organizations, Public Sector Undertakings, and Government Departments. Their achievements reflect a culture of excellence, discipline, and leadership.</p>
      </div>

      <div className="grid grid-cols-4 gap-[18px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 reveal">
        {cells.map((c, i) => (
          <div
            key={i}
            className="rounded-md bg-white/[0.06] border border-white/[0.12] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(7,22,43,0.45)] hover:border-[rgba(242,184,75,0.35)] py-[34px] px-[26px]"
          >
            <span className="block text-[38px] mb-[18px]">{c.icon}</span>
            <div className="text-[15px] font-bold text-gold-light mb-2">{c.title}</div>
            <div className="text-[13px] leading-[1.6] text-white/[0.42]">{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GovtPlacements;
