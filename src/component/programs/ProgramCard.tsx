import React from 'react';
import { Link } from 'react-router-dom';

export type Course = {
  id: number;
  name: string;
  icon: string;
  path: string;
  tags?: string[];
  /** When true the card links out via <a target="_blank"> instead of a router <Link>. */
  isLink?: boolean;
};

const ProgramCard: React.FC<{ course: Course; image?: string }> = ({ course, image }) => {
  const inner = (
    <div className="group flex flex-col h-full p-5">
      {/* thumbnail */}
      <div className="w-[72px] h-[72px] rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm">
        <img
          src={image ?? course.icon}
          alt={course.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* title */}
      <h3 className="mt-4 text-[15px] font-extrabold text-[#1B3A6F] leading-snug">
        {course.name}
      </h3>

      {/* tags */}
      {course.tags && course.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-0.5 rounded-full border border-gray-300 text-gray-500 text-[11px] font-semibold tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* learn more */}
      <div className="mt-auto pt-4">
        <span className="text-[#1B3A6F] text-[13px] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
          Learn more <span aria-hidden>→</span>
        </span>
      </div>
    </div>
  );

  const cardClasses =
    'block w-full rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-[box-shadow,transform] duration-300 hover:-translate-y-1 cursor-pointer';

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
