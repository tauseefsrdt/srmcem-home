import React from 'react';
import { section, sectionHeadCenter, eyebrowCenter, sectionTitle } from '../utils/tw';

const facilitiesData = [
  { icon: '🖥️', title: 'Smart Classrooms', desc: 'Interactive panels and digital boards in every classroom' },
  { icon: '🤖', title: 'Robotics, AI & IoT Labs', desc: 'State-of-the-art innovation and research facilities' },
  { icon: '📚', title: 'Central Digital Library', desc: '50,000+ volumes with full digital access and e-resources' },
  { icon: '🔬', title: 'Department-Specific Labs', desc: 'Specialized labs for each engineering and science stream' },
  { icon: '🏗️', title: 'Workshop Facilities', desc: 'Industry-standard mechanical and fabrication workshops' },
  { icon: '🏠', title: 'On-Campus Hostel', desc: 'Separate hostels for boys and girls with 24/7 security' },
  { icon: '📶', title: 'Fully Wi-Fi Campus', desc: 'High-speed internet across the entire 100-acre campus' },
  { icon: '🏥', title: 'Medical & Ambulance', desc: 'On-campus health center with ambulance facility 24/7' },
  { icon: '🎮', title: 'Indoor Games', desc: 'Table tennis, chess, carrom and more indoor sports' },
  { icon: '🏟️', title: 'Sports Grounds', desc: 'Cricket, football, basketball, volleyball and athletics' },
  { icon: '🎭', title: 'Auditorium & Seminar Halls', desc: 'Large auditorium and modern seminar halls for events' },
  { icon: '💼', title: 'Dedicated Placement Cell', desc: 'Full-time T&P cell with corporate connections and prep' },
  { icon: '🍽️', title: 'Hygienic Cafeteria', desc: 'Multi-cuisine mess and canteen with nutritious meals' },
  { icon: '🎯', title: 'Clubs & Societies', desc: '17+ student clubs from technical to cultural activities' },
  { icon: '🏧', title: 'ATM & Stationery Shop', desc: 'On-campus ATM, stationery, and convenience store' }
];

const Facilities = () => {
  return (
    <section className={`${section} bg-[linear-gradient(150deg,#0a1f3d_0%,#0f2f57_100%)] text-white`} id="facilities">
      <div className={`${sectionHeadCenter} reveal`}>
        <div className={`${eyebrowCenter} text-gold-light`}>Campus Infrastructure</div>
        <h2 className={`${sectionTitle} text-white`}>World-Class Facilities on 100 Acres</h2>
      </div>

      <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 reveal">
        {facilitiesData.map((item, i) => (
          <div key={i} className="group flex items-start gap-[15px] px-6 py-7 rounded-[14px] bg-white/[0.06] border border-white/[0.12] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(7,22,43,0.45)] hover:border-gold/35">
            <div className="w-[46px] h-[46px] grid place-items-center shrink-0 rounded-[10px] bg-[rgba(27,76,127,0.3)] border border-[rgba(27,76,127,0.5)] text-[21px] transition-all duration-300 group-hover:bg-[rgba(239,166,60,0.25)] group-hover:border-[rgba(239,166,60,0.5)] group-hover:scale-105">{item.icon}</div>
            <div>
              <div className="font-bold text-sm text-white mb-1">{item.title}</div>
              <div className="text-[11px] leading-[1.6] text-white/50">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
