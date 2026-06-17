import React from "react";

import innovation1 from "../assets/innovations/innovation1.png";
import innovation2 from "../assets/innovations/innovation2.jpg";
import innovation3 from "../assets/innovations/innovation3.jpg";

import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { section, sectionGlass, sectionTitle, sectionDesc, pill, pillGold } from "../utils/tw";

const Slider =
  (SlickSlider as unknown as { default?: typeof SlickSlider }).default ??
  SlickSlider;

export const InnovationData = [
  {
    id: 0,
    title: "Smokeless Stove",
    icon: innovation3,
    content:
      "The Invention provides a modern, comfortable & all weather air conditioned atmosphere to the passenger on motorbikes. This project is developed by students of Mechanical Engineering.",
    listHeading: "Project Group Members:",
    listData: [
      {
        id: 0,
        item: "Kuldeep Verma - B.Tech (ME)",
      },
      {
        id: 1,
        item: "Kumar Samarth - B.Tech (ME)",
      },
    ],
  },
  {
    id: 1,
    title: "Air Conditioning System for bikers",
    icon: innovation1,
    content:
      "The project aimed to design and develop a low cost kart with high power to weight ratio and powered by a four stroke I.C Engine.",
    listHeading: "Project Group Members:",
    listData: [
      {
        id: 0,
        item: "Vinamra Shivhare",
      },
      {
        id: 1,
        item: "Ajendra Gahlot",
      },
      {
        id: 2,
        item: "Anas Khan",
      },
      {
        id: 3,
        item: "Anirudh Khare",
      },
      {
        id: 4,
        item: "Anshul Shrivastava",
      },
    ],
  },
  {
    id: 2,
    title: "Go-Kart Using IC Engine",
    icon: innovation2,
    content:
      "The Invention provides a modern, comfortable & all weather air conditioned atmosphere to the passenger on motorbikes. This project is developed by students of Mechanical Engineering.",
    listHeading: "Project Group Members:",
    listData: [
      {
        id: 0,
        item: "Kuldeep Verma - B.Tech (ME)",
      },
      {
        id: 1,
        item: "Kumar Samarth - B.Tech (ME)",
      },
    ],
  },
];

const Innovation: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const cardBase =
    "group relative overflow-hidden grid bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-lg shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-gold before:opacity-90 before:z-[2]";

  const variantClass: Record<"wide" | "feature" | "slide", string> = {
    wide: "grid-cols-[250px_minmax(0,1fr)] min-h-[250px]",
    feature: "h-full",
    slide: "max-[1024px]:min-h-full",
  };

  const renderInnovationCard = (
    item: (typeof InnovationData)[number],
    variant: "wide" | "feature" | "slide" = "wide",
  ) => (
    <article className={`${cardBase} ${variantClass[variant]}`}>
      <div className="relative min-h-[230px] max-[640px]:min-h-[210px] overflow-hidden bg-navy-mid/40 after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_45%,rgba(7,22,43,0.5)_100%)]">
        <img
          src={item.icon}
          alt={item.title}
          className="w-full h-full min-h-[230px] max-[640px]:min-h-[210px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col items-start p-[30px] max-[640px]:p-6">
        <span className={`${pill} ${pillGold}`}>Student Project</span>
        <h3 className="mt-4 font-serif text-[25px] max-[640px]:text-[22px] font-extrabold leading-[1.18] text-ink">{item.title}</h3>
        <p className="mt-3 text-sm leading-[1.75] text-brand-gray">{item.content}</p>

        <div className="w-full mt-[22px] pt-5 border-t border-[rgba(15,47,87,0.10)]">
          <div className="mb-2.5 text-[11px] font-extrabold tracking-[1.3px] uppercase text-navy-mid">{item.listHeading}</div>
          <ul className="grid gap-2 list-none">
            {item.listData.map((ele) => (
              <li
                key={ele.id}
                className="relative pl-4 text-[13px] leading-[1.45] text-navy-dark before:content-[''] before:absolute before:top-[0.7em] before:left-0 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gold before:-translate-y-1/2"
              >
                {ele.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );

  return (
    <section className={`${section} ${sectionGlass}`} id="innovation">
      <div className="container mb-9 lg:mb-12 mx-auto text-center reveal">
        <div className="inline-flex justify-center items-center gap-2.5 text-[11px] font-bold tracking-[4px] uppercase mb-[18px] text-navy-mid before:content-[''] before:w-[30px] before:h-0.5 before:bg-gold after:content-[''] after:w-[30px] after:h-0.5 after:bg-gold">Applied Learning</div>
        <h2 className={sectionTitle}>Student Innovations</h2>
        <p className={`${sectionDesc} mx-auto`}>
          Hands-on projects, technical experimentation and innovation-led problem
          solving — practical prototypes and engineering ideas shaped by SRMCEM
          students through mentorship.
        </p>
      </div>

  

      {/* Desktop Layout */}
      <div className="grid grid-cols-[minmax(0,1.45fr)_minmax(320px,0.85fr)] gap-6 max-[1024px]:hidden reveal">
        <div className="grid gap-[18px]">
          {InnovationData.slice(0, 2).map((item) => (
            <React.Fragment key={item.id}>
              {renderInnovationCard(item)}
            </React.Fragment>
          ))}
        </div>

        <div className="min-h-full">
          {InnovationData.slice(2, 3).map((item) => (
            <React.Fragment key={item.id}>
              {renderInnovationCard(item, "feature")}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Mobile Slick Slider */}
      <div className="hidden max-[1024px]:block reveal [&_.slick-dots]:bottom-[-18px]">
        <Slider {...settings}>
          {InnovationData.map((item) => (
            <div key={item.id} className="px-[3px] pb-3 pt-0">
              {renderInnovationCard(item, "slide")}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Innovation;
