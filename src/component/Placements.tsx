import React from 'react';
import './Placements.css';

const minis = [
  { num: '35%', label: 'Students Secured Multiple Job Offers' },
  { num: '225', label: 'Selected at CTC 5 LPA & Above' },
  { num: '1200+', label: 'Job Offers' }
];

const rows = [
  { num: '350+', title: 'Corporates Hiring', sub: 'Top companies recruiting from campus' },
  { num: '100%', title: 'Placement in Core Engineering', sub: 'Outstanding opportunities in core sector roles' },
  { num: '93%', title: 'Placement in Management', sub: 'High success rate for management students' },
  { num: '4.52', unit: 'LPA', title: 'Average Package', sub: 'Consistently growing average compensation' }
];

const Placements = () => {
  return (
    <section className="section placements" id="placements">
      <div className="placements__wm">PLACEMENTS</div>

      <div className="section-head section-head--center reveal">
        <div className="eyebrow">A Legacy of Success</div>
        <h2 className="section-title">Building Careers Since 1999</h2>
        <p className="section-desc">For over two decades, SRMCEM has been preparing students for successful careers through industry-focused learning, practical exposure, innovation-driven projects, and strong corporate partnerships. From Fortune 500 companies and global technology firms to core engineering organizations and public sector enterprises, our graduates are creating impact across industries and around the world.</p>
      </div>

      <div className="placements__grid">
        <div className="reveal">
          <div className="placements__big">25<span>LPA</span></div>
          <div className="placements__big-label">Highest Package Achieved</div>
          <div className="placements__minis">
            {minis.map((m, i) => (
              <div key={i}>
                <div className="placements__mini-num">{m.num}</div>
                <div className="placements__mini-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="placements__rows reveal">
          {rows.map((r, i) => (
            <div key={i} className="placement-row">
              <div className="placement-row__num">{r.num}{r.unit && <span>{r.unit}</span>}</div>
              <div>
                <div className="placement-row__title">{r.title}</div>
                <div className="placement-row__sub">{r.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placements;
