import React from 'react';
import { Link } from 'react-router-dom';

export type Course = {
  id: number;
  name: string;
  icon: string;
  path: string;
  /** When true the card links out via <a target="_blank"> instead of a router <Link>. */
  isLink?: boolean;
};

/* Shared card chrome — image tile with a deep-navy wash + frosted glass label bar
   and a gold glow on hover. Single source of truth for all five program tabs. */
const cardClasses =
  'group relative block w-full max-w-[202px] h-[181px] overflow-hidden rounded-[18px] bg-cover bg-center cursor-pointer border-2 border-navy-mid/30 shadow-card transition-[transform,box-shadow,border-color] duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:border-gold hover:shadow-gold max-[700px]:max-w-[176px] max-[700px]:h-[158px] max-[700px]:rounded-[16px] max-[390px]:max-w-[202px] max-[390px]:h-[181px]';

const ProgramCard: React.FC<{ course: Course; image?: string }> = ({ course, image }) => {
  const bg = { backgroundImage: `url(${image ?? course.icon})`, backgroundSize: 'cover', backgroundPosition: 'center' } as const;

  const inner = (
    <>
      {/* navy wash for legibility */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,43,0.15)_0%,rgba(7,22,43,0.78)_100%)] transition-opacity duration-300 group-hover:opacity-90" aria-hidden />
      {/* gold sheen sweep on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(120%_80%_at_50%_120%,rgba(242,184,75,0.28)_0%,transparent_60%)]" aria-hidden />
      {/* frosted glass label bar */}
      <div className="absolute left-0 bottom-5 z-[1] w-full border-y border-white/20 bg-[rgba(8,20,40,0.55)] backdrop-blur-md">
        <div className="flex items-center justify-center min-h-[45px] px-[7px] py-2 text-white text-center [text-shadow:0_1px_3px_rgba(0,0,0,0.6)] text-sm font-extrabold leading-[1.28] transition-colors duration-300 group-hover:text-gold-light max-[700px]:text-xs max-[700px]:min-h-[42px]">
          {course.name}
        </div>
      </div>
    </>
  );

  return course.isLink ? (
    <a href={course.path} target="_blank" rel="noreferrer" style={bg} className={cardClasses}>
      {inner}
    </a>
  ) : (
    <Link to={course.path} style={bg} className={cardClasses}>
      {inner}
    </Link>
  );
};

/** Responsive grid of program cards — used by every program tab. */
const ProgramGrid: React.FC<{ courses: Course[]; images?: string[] }> = ({ courses, images }) => (
  <div className="grid grid-cols-[repeat(5,minmax(0,202px))] justify-center justify-items-center gap-y-6 gap-x-8 w-full max-[1180px]:grid-cols-[repeat(4,minmax(0,202px))] max-[940px]:grid-cols-[repeat(3,minmax(0,202px))] max-[700px]:grid-cols-[repeat(2,minmax(0,176px))] max-[700px]:gap-y-5 max-[700px]:gap-x-4 max-[390px]:grid-cols-[minmax(0,202px)]">
    {courses.map((course) => (
      <ProgramCard key={course.id} course={course} image={images?.[course.id]} />
    ))}
  </div>
);

export default ProgramGrid;
