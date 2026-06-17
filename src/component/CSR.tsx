import React from 'react';
import { section, sectionHeadCenter, eyebrowCenter, sectionTitle } from '../utils/tw';
import Icon, { IconName } from './Icon';

const csrData: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'droplet', title: 'Blood Donation Camp', desc: 'Regular blood donation drives with hundreds of student volunteers saving lives in the community' },
  { icon: 'shield', title: 'NCC', desc: 'National Cadet Corps unit developing discipline, leadership and national service among students' },
  { icon: 'heart', title: 'Arpan', desc: 'Community outreach initiative providing educational support and resources to underprivileged children' },
  { icon: 'sprout', title: 'Plantation Drive', desc: 'Thousands of trees planted annually as part of our commitment to environmental sustainability' }
];

const CSR = () => {
  return (
    <section className={`${section} bg-[linear-gradient(180deg,#eef3fb,#e6eef9)] overflow-hidden`} id="csr">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={eyebrowCenter}>Social Responsibility</div>
        <h2 className={sectionTitle}>CSR Initiatives — Giving Back to Society</h2>
      </div>

      <div className="grid grid-cols-4 gap-[18px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 reveal">
        {csrData.map((item, i) => (
          <div key={i} className="group relative overflow-hidden rounded-md bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-hover hover:border-navy-mid/30 px-7 py-9 text-center">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(27,76,127,0.18),transparent)]" aria-hidden />
            <div className="w-12 h-12 mx-auto mb-5 grid place-items-center rounded-[12px] bg-navy-mid/[0.10] border border-navy-mid/20 text-navy-mid transition-all duration-300 group-hover:scale-[1.12] group-hover:bg-gold/15 group-hover:text-gold-dark"><Icon name={item.icon} className="w-6 h-6" /></div>
            <div className="font-serif font-bold text-base text-ink mb-3">{item.title}</div>
            <div className="text-xs leading-[1.6] text-brand-gray max-w-[220px] mx-auto">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CSR;
