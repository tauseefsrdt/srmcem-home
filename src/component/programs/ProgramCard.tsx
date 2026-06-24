import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

export type Course = {
  id: number;
  name: string;
  icon: string;
  path: string;
  /** When true the card links out via <a target="_blank"> instead of a router <Link>. */
  isLink?: boolean;
};

/* Shared card chrome — image-cover tile with a bottom gradient label, gold
   hover border + lift, image zoom, and a reveal "Explore" CTA. Single source
   of truth for all five program tabs. */
const cardClasses =
  'group relative block w-full aspect-[4/5] overflow-hidden rounded-[18px] cursor-pointer border border-navy-mid/15 shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-hover';

const ProgramCard: React.FC<{ course: Course; image?: string }> = ({ course, image }) => {
  const inner = (
    <>
      <img
        src={image ?? course.icon}
        alt={course.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-110"
      />
      {/* legibility gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,43,0.05)_0%,rgba(7,22,43,0.35)_45%,rgba(7,22,43,0.86)_100%)] transition-opacity duration-300" aria-hidden />
      {/* gold sheen sweep on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(120%_80%_at_50%_120%,rgba(242,184,75,0.30)_0%,transparent_60%)]" aria-hidden />

      {/* hover arrow badge */}
      <span className="absolute top-3.5 right-3.5 w-9 h-9 grid place-items-center rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-gold group-hover:text-navy-deep group-hover:border-transparent">
        <Icon name="arrow-right" className="w-4 h-4" />
      </span>

      {/* label */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-white text-[14px] font-extrabold leading-[1.3] [text-shadow:0_1px_3px_rgba(0,0,0,0.6)] transition-colors duration-300 group-hover:text-gold-light max-[700px]:text-[13px]">
          {course.name}
        </h3>
        <span className="inline-flex items-center gap-1.5 mt-2 text-gold-light text-[11px] font-bold tracking-[0.5px] uppercase opacity-0 max-h-0 -translate-y-1 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-6 group-hover:translate-y-0">
          Explore Program <Icon name="arrow-right" className="w-3.5 h-3.5" />
        </span>
      </div>
    </>
  );

  return course.isLink ? (
    <a href={course.path} target="_blank" rel="noreferrer" className={cardClasses}>
      {inner}
    </a>
  ) : (
    <Link to={course.path} className={cardClasses}>
      {inner}
    </Link>
  );
};

/** Responsive grid of program cards — used by every program tab. */
const ProgramGrid: React.FC<{ courses: Course[]; images?: string[] }> = ({ courses, images }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-[700px]:gap-4 w-full">
    {courses.map((course) => (
      <ProgramCard key={course.id} course={course} image={images?.[course.id]} />
    ))}
  </div>
);

export default ProgramGrid;
