import React from 'react';

const alumniData = [
  { init: 'AS', name: 'Abhay Singh', batch: 'B.Tech ME · 2005', role: 'IFS, Gujarat Cadre · AKTU Distinguished Alumni', tone: 'is-navy' },
  { init: 'SS', name: 'Sakshi Singh', batch: 'B.Tech EE · 2013', role: 'IPS Officer · Bihar Cadre', tone: 'is-mid' },
  { init: 'DS', name: 'Disha Srivastava', batch: 'B.Tech CS · 2017', role: 'IAS Officer · Govt of India', tone: 'is-navy' },
  { init: 'DG', name: 'Dharmaveer Gupta', batch: 'B.Tech ME · 2017', role: 'Hydraulics Eng. · Gates Corp.', tone: 'is-mid' },
  { init: 'AJ', name: 'Akshat Jain', batch: 'B.Tech EC · 2011', role: 'IRS · Govt. of India', tone: 'is-mid' },
  { init: 'VC', name: 'Vaibhav Chaudhary', batch: 'B.Tech CE · 2015', role: 'IAS Officer · Govt of India', tone: 'is-navy' },
  { init: 'AO', name: 'Abhilash Ojha', batch: 'B.Tech ME · 2015', role: 'Scientist · ISRO', tone: 'is-deep' },
  { init: 'VM', name: 'Vaishnavi Mishra', batch: 'B.Tech EC · 2018', role: 'UPSC · ESE · Govt. of India', tone: 'is-mid' },
  { init: 'SA', name: 'Shivanchal Asthana', batch: 'B.Tech EC · 2008', role: 'Wing Commander · Indian Air Force', tone: 'is-deep' },
  { init: 'NS', name: 'Nitinash Sharma', batch: 'B.Tech CS · 2003', role: 'VP Talent Acquisition · Paytm', tone: 'is-navy' },
  { init: 'VS', name: 'Vijayeta Suryawanshi', batch: 'B.Tech CS · 2005', role: 'Software Engineer · PayPal, Santa Clara', tone: 'is-deep' },
  { init: 'BT', name: 'Bhavesh Thakur', batch: 'B.Tech CS · 2011', role: 'Technical Lead · IBM Security', tone: 'is-deep' },
  { init: 'AK', name: 'Anshika Jaiswal', batch: 'B.Tech CS · 2009', role: 'Technical Lead · Cognizant', tone: 'is-mid' },
  { init: 'MG', name: 'Manish Gaur', batch: 'B.Tech EC · 2007', role: 'Software Consultant · National Australian Bank', tone: 'is-mid' },
  { init: 'GB', name: 'Gaurav Bajpai', batch: 'B.Tech EC · 2007', role: 'Financial Software Eng. · Mississauga', tone: 'is-deep' },
  { init: 'LS', name: 'Luv Shukla', batch: 'B.Tech CS · 2014', role: 'System Programmer Analyst · TCS', tone: 'is-deep' },
  { init: 'SP', name: 'Santosh James Pandey', batch: 'MCA · 2008', role: 'Account Manager · Dataman USA', tone: 'is-deep' },
  { init: 'AV', name: 'Anurag Verma', batch: 'B.Tech EC · 2017', role: 'Jr. Research Engineer · RDSO', tone: 'is-navy' }
];

const Alumni = () => {
  return (
    <section className="section section--white" id="alumni">
      <div className="section-head section-head--center reveal">
        <div className="eyebrow">Legacy of Excellence</div>
        <h2 className="section-title">Alumni Who Make Us Proud</h2>
        <p className="section-desc">From IAS officers and scientists to global tech leaders and military officers — SRMCEM's 8119+ alumni are shaping India and the world.</p>
      </div>

      <div className="grid grid--6 reveal">
        {alumniData.map((a, i) => (
          <div key={i} className="alumni-card">
            <div className={`alumni-card__avatar ${a.tone}`}>{a.init}</div>
            <div className="alumni-card__name">{a.name}</div>
            <div className="alumni-card__batch">{a.batch}</div>
            <div className="alumni-card__role">{a.role}</div>
          </div>
        ))}
      </div>

      <div className="alumni-stats reveal">
        <div>
          <div className="alumni-stat__num">30000<sup>+</sup></div>
          <div className="alumni-stat__label">Alumni Network Worldwide</div>
        </div>
        <div>
          <div className="alumni-stat__num">2000<sup>+</sup></div>
          <div className="alumni-stat__label">Alumni in Fortune 500 & MNCs</div>
        </div>
        <div>
          <div className="alumni-stat__num">100<sup>+</sup></div>
          <div className="alumni-stat__label">Alumni at CTC of 1 Cr.+</div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
