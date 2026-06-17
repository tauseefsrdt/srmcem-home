import React from 'react';
import { section, sectionDeep, sectionHeadCenter, eyebrowCenter, sectionTitle, glassCard, iconTile } from '../utils/tw';
import Icon, { IconName } from './Icon';

const facilitiesData: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'monitor', title: 'Smart Classrooms', desc: 'Interactive panels and digital boards in every classroom' },
  { icon: 'cpu', title: 'Robotics, AI & IoT Labs', desc: 'State-of-the-art innovation and research facilities' },
  { icon: 'book', title: 'Central Digital Library', desc: '50,000+ volumes with full digital access and e-resources' },
  { icon: 'beaker', title: 'Department-Specific Labs', desc: 'Specialized labs for each engineering and science stream' },
  { icon: 'wrench', title: 'Workshop Facilities', desc: 'Industry-standard mechanical and fabrication workshops' },
  { icon: 'home', title: 'On-Campus Hostel', desc: 'Separate hostels for boys and girls with 24/7 security' },
  { icon: 'wifi', title: 'Fully Wi-Fi Campus', desc: 'High-speed internet across the entire 100-acre campus' },
  { icon: 'pulse', title: 'Medical & Ambulance', desc: 'On-campus health center with ambulance facility 24/7' },
  { icon: 'gamepad', title: 'Indoor Games', desc: 'Table tennis, chess, carrom and more indoor sports' },
  { icon: 'trophy', title: 'Sports Grounds', desc: 'Cricket, football, basketball, volleyball and athletics' },
  { icon: 'mic', title: 'Auditorium & Seminar Halls', desc: 'Large auditorium and modern seminar halls for events' },
  { icon: 'briefcase', title: 'Dedicated Placement Cell', desc: 'Full-time T&P cell with corporate connections and prep' },
  { icon: 'coffee', title: 'Hygienic Cafeteria', desc: 'Multi-cuisine mess and canteen with nutritious meals' },
  { icon: 'users', title: 'Clubs & Societies', desc: '17+ student clubs from technical to cultural activities' },
  { icon: 'card', title: 'ATM & Stationery Shop', desc: 'On-campus ATM, stationery, and convenience store' }
];

const Facilities = () => {
  return (
    <section className={`${section} ${sectionDeep}`} id="facilities">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={eyebrowCenter}>Campus Infrastructure</div>
        <h2 className={sectionTitle}>World-Class Facilities on 100 Acres</h2>
        <p className="mt-[18px] text-base leading-[1.85] container mx-auto text-brand-gray">A modern campus designed for learning, research and student life — built to support the holistic growth of every student.</p>
      </div>

      <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 reveal">
        {facilitiesData.map((item, i) => (
          <div key={i} className={`${glassCard} flex items-start gap-[15px] px-6 py-7`}>
            <div className={`${iconTile} w-[46px] h-[46px] shrink-0`}><Icon name={item.icon} className="w-[22px] h-[22px]" /></div>
            <div>
              <div className="font-bold text-sm text-ink mb-1">{item.title}</div>
              <div className="text-[11px] leading-[1.6] text-brand-gray">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Admission helpline CTA */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-md bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card px-7 py-6 reveal max-[640px]:flex-col max-[640px]:text-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 grid place-items-center shrink-0 rounded-xl bg-navy-mid/[0.10] border border-navy-mid/20 text-navy-mid"><Icon name="phone" className="w-6 h-6" /></div>
          <div>
            <div className="text-navy-mid font-bold text-[13px] tracking-[1.5px] uppercase mb-1">Admission Helpline</div>
            <div className="text-navy-dark font-display text-2xl tracking-[1px]">1800-103-5298</div>
          </div>
        </div>
        <a
          href="tel:18001035298"
          className="inline-flex items-center justify-center gap-2 px-8 py-[14px] rounded-pill bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] text-navy-deep text-sm font-bold tracking-[0.5px] shadow-glowGold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glowGoldStrong"
        >
          <Icon name="phone" className="w-4 h-4" /> Call Now
        </a>
      </div>
    </section>
  );
};

export default Facilities;
