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
    <section className={`${section} bg-[linear-gradient(150deg,#0a1f3d_0%,#0f2f57_100%)] overflow-hidden`} id="csr">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={`${eyebrowCenter} text-white/65`}>Social Responsibility</div>
        <h2 className={`${sectionTitle} text-white`}>CSR Initiatives — Giving Back to Society</h2>
      </div>

      <div className="grid grid-cols-4 gap-[18px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 reveal">
        {csrData.map((item, i) => (
          <div key={i} className="group rounded-md bg-white/[0.06] border border-white/[0.12] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(7,22,43,0.45)] hover:border-gold/35 px-7 py-9 text-center">
            <div className="w-12 h-12 mx-auto mb-5 grid place-items-center rounded-[12px] bg-white/[0.08] border border-white/[0.16] text-gold-light transition-transform duration-300 group-hover:scale-[1.12]"><Icon name={item.icon} className="w-6 h-6" /></div>
            <div className="font-serif font-bold text-base text-white mb-3">{item.title}</div>
            <div className="text-xs leading-[1.6] text-white/50 max-w-[220px] mx-auto">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CSR;
