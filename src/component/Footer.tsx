import React from 'react';
import './Footer.css';

const columns = [
  {
    title: 'Programs',
    links: ['B.Tech CSE / AI-ML', 'B.Tech ECE / IT', 'B.Tech ME / CE', 'MBA (120 Seats)', 'MCA / M.Tech', 'Diploma Programs']
  },
  {
    title: 'Recognitions',
    links: ['AKTU Affiliation', 'NIRF Ranking', 'UPTAC', 'NBA Accreditation', 'AICTE Approval', 'ISO Certification']
  },
  {
    title: 'Career',
    links: ['Faculty Positions', 'Staff Recruitment', 'Current Openings', 'Application Form', 'srmcem.ac.in']
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <div className="footer__brand-title">Shri Ramswaroop Memorial</div>
          <div className="footer__brand-sub">College of Engineering & Management</div>
          <div className="footer__brand-text">Tiwariganj, Faizabad Road, Lucknow, Uttar Pradesh 226010. Established 2001. NBA Accredited · AICTE Approved · AKTU Affiliated.</div>
        </div>
        {columns.map((col, i) => (
          <div key={i}>
            <div className="footer__col-title">{col.title}</div>
            <div className="footer__links">
              {col.links.map((link, j) => <a key={j} href="#">{link}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div className="footer__bottom">
        <div className="footer__copy">© {new Date().getFullYear()} Shri Ramswaroop Memorial College of Engineering & Management. All rights reserved.</div>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Grievance Cell</a>
          <a href="#">RTI</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
