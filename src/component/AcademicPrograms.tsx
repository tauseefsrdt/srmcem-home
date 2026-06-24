import React from 'react';
import computerScience from "../assets/course/image1.png";
import electronics from "../assets/course/image10.png";
import mechanical from "../assets/course/image7.png";
import mba from "../assets/course/image18.png";
import mca from "../assets/course/image15.png";
import mtech from "../assets/course/image13.png";
import {
  section,
  sectionHeadCenter,
  eyebrowCenter,
  sectionTitle,
  sectionDesc,
  glassCard,
  cardPad,
  iconTile,
  btnGold,
  pillGold,
  pillGhost,
  glassSheen,
} from '../utils/tw';

type Program = {
  icon: string;
  title: string;
  tags: string[];
  tagVariant: 'gold' | 'ghost';
  desc: string;
  seats?: string;
  badge?: string;
};

const programs: Program[] = [
  {
    icon: computerScience,
    title: 'B.Tech Computer Science',
    tags: ['CSE', 'AI/ML', 'Data Science', 'Cyber Security'],
    tagVariant: 'gold',
    desc: 'Industry-aligned curriculum with tracks in AI, Machine Learning, Data Science & Cyber Security. 100% placement record.',
    badge: 'Most Popular',
  },
  {
    icon: electronics,
    title: 'B.Tech Electronics',
    tags: ['ECE', 'IT', 'EE', 'AKTU Affiliated'],
    tagVariant: 'ghost',
    desc: 'Strong foundation in electronics, communications & embedded systems with state-of-the-art labs. Multiple AKTU gold medalists.',
  },
  {
    icon: mechanical,
    title: 'B.Tech Mechanical & Civil',
    tags: ['ME', 'CE', 'Core Engineering'],
    tagVariant: 'ghost',
    desc: 'Hands-on engineering with industry partnerships at Torrent Power, Daikin, JBM and more. Dedicated core placement drive.',
  },
  {
    icon: mba,
    title: 'MBA',
    seats: '120 Seats',
    tags: ['Marketing', 'Finance', 'HR', 'Operations'],
    tagVariant: 'gold',
    desc: 'Two-year program with HSBC, Axis Bank, IDFC placements. 100%+ placement score. Via CAT/MAT/CUET PG scores.',
  },
  {
    icon: mca,
    title: 'MCA',
    seats: '120 Seats',
    tags: ['Master of Computer Applications', '3 Years'],
    tagVariant: 'ghost',
    desc: '100% placement in computer applications. Strong IT tie-ups with SAP, Informatica, Infosys. Via CUET PG.',
  },
  {
    icon: mtech,
    title: 'M.Tech + Diploma Programs',
    tags: ['9 Specializations via GATE', 'Polytechnic'],
    tagVariant: 'ghost',
    desc: 'Post-graduate specializations via GATE. Polytechnic programs with 100% placement record in industry.',
  },
];

const ProgramCard = ({ program }: { program: Program }) => (
  <div className={`${glassCard} ${cardPad} flex flex-col gap-5 reveal`}>
    <span className={glassSheen} aria-hidden />

    {/* Icon + optional badge row */}
    <div className="flex items-start justify-between">
      <div className={` w-[80px] h-[80px] `}>
       <img src={program.icon} alt={program.title} className="w-full h-full object-contain" />
      </div>
      {program.badge && (
        <span className="text-[10px] font-bold tracking-[1px] uppercase px-3 py-1 rounded-pill bg-gold/20 border border-gold/40 text-gold-text">
          {program.badge}
        </span>
      )}
    </div>

    {/* Title + seats */}
    <div>
      <h3 className="font-serif font-black text-[19px] leading-[1.2] text-ink">
        {program.title}
        {program.seats && (
          <span className="ml-2 font-sans font-semibold text-[14px] text-navy-mid">
            — {program.seats}
          </span>
        )}
      </h3>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5">
      {program.tags.map((tag) => (
        <span
          key={tag}
          className={`inline-flex items-center px-2.5 py-[4px] rounded-pill text-[10px] font-bold tracking-[0.8px] uppercase ${
            program.tagVariant === 'gold' ? pillGold : pillGhost
          }`}
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Description */}
    <p className="text-[14px] leading-[1.75] text-brand-gray flex-1">
      {program.desc}
    </p>

    {/* CTA */}
    <a
      href="#admissions"
      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-navy-mid transition-all duration-250 hover:gap-2.5 hover:text-navy-dark mt-auto"
    >
      Learn more <span aria-hidden>→</span>
    </a>
  </div>
);

const AcademicPrograms = () => (
  <section
    className={`${section} bg-white/55 backdrop-blur-glass border-y border-[rgba(15,47,87,0.08)]`}
    id="academic-programs"
  >
    {/* Decorative blobs */}
    <div
      aria-hidden
      className="pointer-events-none absolute -top-24 right-[-5%] w-[420px] h-[420px] rounded-full bg-gold/[0.10] blur-[110px]"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -bottom-28 left-[-6%] w-[440px] h-[440px] rounded-full bg-navy-mid/[0.09] blur-[120px]"
    />

    {/* Heading */}
    <div className={`${sectionHeadCenter} reveal`}>
      <div className={eyebrowCenter}>Academic Programs</div>
      <h2 className={sectionTitle}>
        Choose Your Path to{' '}
        <span className="bg-[linear-gradient(120deg,#1B4C7F,#0F2F57)] bg-clip-text text-transparent">
          Excellence
        </span>
      </h2>
      <p className={`${sectionDesc} max-w-[620px]`}>
        AKTU-affiliated programs built around industry demand — with dedicated placement
        drives, cutting-edge labs, and a proven 100% placement track record.
      </p>
    </div>

    {/* Card grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((p) => (
        <ProgramCard key={p.title} program={p} />
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
      <a href="#admissions" className={btnGold}>
        Apply for 2025–26 →
      </a>
      <a
        href="#programs"
        className="inline-flex items-center justify-center gap-2 px-[30px] py-[14px] text-sm font-bold tracking-[0.4px] rounded-pill whitespace-nowrap transition-all duration-300 bg-white/60 backdrop-blur-sm text-navy-dark border border-navy-mid/30 hover:border-navy-mid hover:bg-white hover:-translate-y-0.5"
      >
        View All Programs
      </a>
    </div>
  </section>
);

export default AcademicPrograms;
