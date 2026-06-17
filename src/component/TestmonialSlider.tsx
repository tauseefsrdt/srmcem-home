import React from "react";
import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Classes from "../utils/styles/Global.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { alumniData } from "../data/aluminiData";

// react-slick is CJS; under Vite its default import arrives as a namespace
// object, so unwrap `.default` the same way Innovation.tsx / Events.tsx do.
const Slider =
  (SlickSlider as unknown as { default?: typeof SlickSlider }).default ??
  SlickSlider;


// Custom arrow components
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const arrowBase =
  "absolute top-[80px] p-1 sm:top-[calc(50%-24px)] lg:text-[22px] 2xl:text-[26px] xl:p-2 2xl:p-3 transform sm:-translate-y-1/2 z-10 cursor-pointer grid place-items-center rounded-full text-navy-mid bg-white border border-navy-mid/30 shadow-card transition-all duration-300 hover:text-white hover:bg-navy hover:border-navy hover:shadow-soft";

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className={`${arrowBase} -right-2 xl:-right-8 2xl:-right-10`} onClick={onClick}>
    <FaChevronRight />
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className={`${arrowBase} -left-2 xl:-left-8 2xl:-left-10`} onClick={onClick}>
    <FaChevronLeft />
  </div>
);

// Slider component
const TestmonialSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${Classes.container} py-10 md:py-18 lg:py-24`}>
      <div className="testimonial-part relative w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-[680px] mx-auto mb-12 reveal">
            <div className="inline-flex justify-center items-center gap-2.5 text-[11px] font-bold tracking-[4px] uppercase mb-[18px] text-navy-mid before:content-[''] before:w-[30px] before:h-0.5 before:bg-gold after:content-[''] after:w-[30px] after:h-0.5 after:bg-gold">In Their Words</div>
            <h2 className="font-serif font-black text-[clamp(28px,3.8vw,46px)] leading-[1.12] tracking-[-0.5px] text-ink">Alumni Testimonials</h2>
          </div>
          {/* Frosted glass stage that holds the slider */}
          <div className="relative rounded-[22px] bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.1)] shadow-card px-6 sm:px-10 lg:px-14 py-6 reveal">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(27,76,127,0.18),transparent)]" aria-hidden />
            <span className="pointer-events-none absolute top-6 left-7 font-serif text-[120px] leading-none text-gold/25 select-none" aria-hidden>&ldquo;</span>
            <div className="relative py-6 testimonial">
            <Slider {...settings}>
              {alumniData.map((alumnus, index) => (
                <div key={index} className="px-2">
                  <div className="md:flex items-center gap-x-8 justify-between">
                    <div className="min-w-[300px] md:border-r border-navy-mid/15 py-5">
                      <div className=" min-w-[180px] w-[300px] flex flex-col items-center mx-auto">
                        <img src={alumnus.image} alt={alumnus.name} className="w-full max-w-[200px] h-[200px] md:max-w-[160px] md:h-[160px] rounded-2xl object-top object-cover ring-2 ring-gold/50 shadow-gold" />
                        <p className="text-center text-navy-dark font-semibold mt-4">{alumnus.name}</p>
                        <p className="text-center text-gold-dark text-sm mt-0.5">{alumnus.degree}</p>
                        <p className="text-center text-brand-gray text-sm">{alumnus.company}</p>
                      </div>
                    </div>
                    <div className="md:mx-10 py-5">
                      <p className="text-brand-gray leading-[1.9] mt-4 md:mt-0 text-justify sm:pr-3">{alumnus.content}</p>
                    </div>
                    {/* <div className="hidden lg:block blur-part">
                      <div className="w-full min-w-[150px] flex flex-col items-center ">
                        <img src={alumnus.image1} alt={alumnus.name} className="w-full max-w-[140px] h-[140px]  rounded-lg  object-cover" />
                        <p className="text-center text-white font-semibold mt-2 ">{alumnus.name1}</p>
                        <p className="text-center text-white   ">{alumnus.degree1}</p>
                        <p className="text-center text-white   ">{alumnus.company1}</p>
                      </div>
                    </div> */}
                  </div>
                </div>
              ))}
            </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestmonialSlider
