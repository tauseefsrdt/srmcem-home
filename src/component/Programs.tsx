import React from 'react';
import './Programs.css';

const programs = [
  { icon: '💻', title: 'B.Tech Computer Science', cap: 'CSE · AI/ML · Data Science · Cyber Security', desc: 'Industry-aligned curriculum with tracks in AI, Machine Learning, Data Science & Cyber Security. 100% placement record.' },
  { icon: '📡', title: 'B.Tech Electronics', cap: 'ECE · IT · EE — AKTU Affiliated', desc: 'Strong foundation in electronics, communications & embedded systems with state-of-the-art labs. Multiple AKTU gold medalists.' },
  { icon: '⚙️', title: 'B.Tech Mechanical & Civil', cap: 'ME · CE — Core Engineering Programs', desc: 'Hands-on engineering with industry partnerships at Torrent Power, Daikin, JBM and more. Dedicated core placement drive.' },
  { icon: '📊', title: 'MBA — 120 Seats', cap: 'Marketing · Finance · HR · Operations', desc: 'Two-year program with HSBC, Axis Bank, IDFC placements. 100%+ placement score. Via CAT/MAT/CUET PG scores.' },
  { icon: '🖥️', title: 'MCA — 120 Seats', cap: 'Master of Computer Applications · 3 Years', desc: '100% placement in computer applications. Strong IT tie-ups with SAP, Informatica, Infosys. Via CUET PG.' },
  { icon: '🎓', title: 'M.Tech + Diploma Programs', cap: '9 Specializations via GATE · Polytechnic', desc: 'Post-graduate specializations via GATE. Polytechnic programs with 100% placement record in industry.' }
];

const Programs = () => {
  return (
    <section className="section section--white" id="programs">
      <div className="section-head section-head--center reveal">
        <div className="eyebrow">Academic Programs</div>
        <h2 className="section-title">Choose Your Path to Excellence</h2>
      </div>

      <div className="grid grid--3 reveal">
        {programs.map((p, i) => (
          <div key={i} className="prog-card">
            <div className="prog-card__icon">{p.icon}</div>
            <div className="prog-card__title">{p.title}</div>
            <div className="prog-card__cap">{p.cap}</div>
            <div className="prog-card__desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
