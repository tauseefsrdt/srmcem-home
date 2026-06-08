import React from 'react';
import './Programs.css';

const programs = [
  { icon: '💻', title: 'Computer Science & Engineering', cap: 'CSE', desc: 'Core CSE program with specialization options in AI, ML, Data Science and Cyber Security.' },
  { icon: '🧠', title: 'Computer Science — AI & ML', cap: 'CSE · AI/ML', desc: 'Focused AI & ML track with labs, industry mentors and capstone projects.' },
  { icon: '📊', title: 'Computer Science — Data Science', cap: 'CSE · Data Science', desc: 'Data science pathway with strong industry collaboration and project opportunities.' },
  { icon: '🔐', title: 'Computer Science — Cyber Security', cap: 'CSE · Cyber Security', desc: 'Security-focused curriculum with practical labs and internships.' },
  { icon: '📡', title: 'Electronics & Communication Engineering', cap: 'ECE', desc: 'Embedded systems, VLSI and communication engineering with modern labs.' },
  { icon: '🖧', title: 'Information Technology', cap: 'IT', desc: 'IT program with software engineering practices and industry tie-ups.' },
  { icon: '⚙️', title: 'Mechanical Engineering', cap: 'ME', desc: 'Practical mechanical engineering training and workshop-based learning.' },
  { icon: '🏗️', title: 'Civil Engineering', cap: 'CE', desc: 'Civil engineering for infrastructure, construction and design projects.' },
  { icon: '🔋', title: 'Electrical Engineering', cap: 'EE', desc: 'Power systems, control and electrical design electives.' },
  { icon: '💼', title: 'Management (MBA)', cap: 'MBA', desc: 'Two-year management program focusing on employability and industry projects.' }
];

const Programs = () => {
  return (
    <section className="section section--white" id="programs">
      <div className="section-head section-head--center reveal">
        <div className="eyebrow">Our Courses</div>
        <h2 className="section-title">Our Courses</h2>
        <p className="section-desc">On the college's dynamic campus, you will be part of a diverse and inclusive academic community that fosters intellectual growth and equips you with essential life skills in a supportive environment.</p>
      </div>

      <div className="grid grid--3 programs-grid">
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
