import React from 'react';
import './CSR.css';

const csrData = [
  { icon: '🩸', title: 'Blood Donation Camp', desc: 'Regular blood donation drives with hundreds of student volunteers saving lives in the community' },
  { icon: '🪖', title: 'NCC', desc: 'National Cadet Corps unit developing discipline, leadership and national service among students' },
  { icon: '🤲', title: 'Arpan', desc: 'Community outreach initiative providing educational support and resources to underprivileged children' },
  { icon: '🌱', title: 'Plantation Drive', desc: 'Thousands of trees planted annually as part of our commitment to environmental sustainability' }
];

const CSR = () => {
  return (
    <section className="section csr" id="csr">
      <div className="section-head section-head--center reveal">
        <div className="eyebrow eyebrow--muted">Social Responsibility</div>
        <h2 className="section-title section-title--light">CSR Initiatives — Giving Back to Society</h2>
      </div>

      <div className="csr-grid reveal">
        {csrData.map((item, i) => (
          <div key={i} className="csr-cell">
            <div className="csr-cell__icon">{item.icon}</div>
            <div className="csr-cell__title">{item.title}</div>
            <div className="csr-cell__desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CSR;
