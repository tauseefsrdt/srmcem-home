import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export type Course = {
  id: number;
  name: string;
  icon: string;
  path: string;
  tags?: string[];
  isLink?: boolean;
};

const ProgramCard: React.FC<{ course: Course; image?: string }> = ({ course, image }) => {
  const inner = (
    <div className="group flex flex-col h-full p-5">
      <div className="w-[72px] h-[72px] rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm">
        <img
          src={image ?? course.icon}
          alt={course.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-4 text-[15px] font-extrabold text-[#1B3A6F] leading-snug">
        {course.name}
      </h3>

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

      <div className="mt-auto pt-4">
        <span className="text-[#1B3A6F] text-[13px] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
          Learn more <span aria-hidden>→</span>
        </span>
      </div>
    </div>
  );

  const cardClasses =
    'block w-full h-full rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-[box-shadow,transform] duration-300 hover:-translate-y-1 cursor-pointer';

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

const ArrowBtn: React.FC<{ dir: 'prev' | 'next'; disabled: boolean; onClick: () => void }> = ({
  dir,
  disabled,
  onClick,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={dir === 'prev' ? 'Previous' : 'Next'}
    className={`absolute top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-200
      ${dir === 'prev' ? '-left-4' : '-right-4'}
      ${disabled
        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
        : 'border-gray-300 text-[#1B3A6F] hover:bg-[#1B3A6F] hover:text-white hover:border-[#1B3A6F]'
      }`}
  >
    {dir === 'prev' ? (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </button>
);

const ProgramGrid: React.FC<{ courses: Course[]; images?: string[] }> = ({ courses, images }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scroll = (dir: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'next' ? 260 : -260, behavior: 'smooth' });
    setTimeout(updateArrows, 400);
  };

  if (courses.length <= 5) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-[700px]:gap-4 w-full">
        {courses.map((course) => (
          <ProgramCard key={course.id} course={course} image={images?.[course.id]} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full px-5">
      <ArrowBtn dir="prev" disabled={!canPrev} onClick={() => scroll('prev')} />

      <div
        ref={scrollRef}
        onScroll={updateArrows}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {courses.map((course) => (
          <div key={course.id} className="flex-none w-[220px] snap-start self-stretch flex flex-col">
            <ProgramCard course={course} image={images?.[course.id]} />
          </div>
        ))}
      </div>

      <ArrowBtn dir="next" disabled={!canNext} onClick={() => scroll('next')} />
    </div>
  );
};

export default ProgramGrid;
