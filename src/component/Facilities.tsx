import React from 'react';

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
    <section className="section facilities" id="facilities">
      <div className="section-head section-head--center reveal">
        <div className="eyebrow eyebrow--light">Campus Infrastructure</div>
        <h2 className="section-title section-title--light">World-Class Facilities on 100 Acres</h2>
      </div>

      <div className="fac-grid reveal">
        {facilitiesData.map((item, i) => (
          <div key={i} className="glass-cell fac-cell">
            <div className="fac-cell__icon">{item.icon}</div>
            <div>
              <div className="fac-cell__title">{item.title}</div>
              <div className="fac-cell__desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
