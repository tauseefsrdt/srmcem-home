import React from 'react';
import { newsData } from "../data/homeData";
import {
  section,
  eyebrow,
  sectionTitle,
  pill,
  pillGold,
  linkArrow,
  glassSheen,
} from '../utils/tw';
import Icon from './Icon';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider =
  (SlickSlider as unknown as { default?: typeof SlickSlider }).default ??
  SlickSlider;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
};

const News = () => {
  const featured = newsData[0];
  const sideItems = newsData.slice(1);

  return (
    <section className={`${section} bg-[linear-gradient(180deg,#FFFFFF_0%,#E0F1FF_100%)]`} id="news">
      <div className="mb-14 reveal">
        <div className={`${eyebrow} text-navy-mid`}>Latest Events &amp; News</div>
        <h2 className={`${sectionTitle} text-ink`}>What's Happening<br />at SRMCEM</h2>
      </div>

      <div className="grid grid-cols-1 min-[993px]:grid-cols-[1.2fr_1fr] gap-6 reveal">
        {/* Featured story with slider */}
        <article className="group relative overflow-hidden flex flex-col bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-lg shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover">
          <span className={glassSheen} aria-hidden />
          <div className="relative h-[300px] max-[992px]:h-[230px] overflow-hidden bg-navy-mid/10 [&_.slick-dots]:bottom-3 [&_.slick-dots_li_button:before]:text-white [&_.slick-dots_li.slick-active_button:before]:!text-gold-light [&_.slick-slider]:h-full [&_.slick-list]:h-full [&_.slick-track]:h-full [&_.slick-slide>div]:h-full">
            {featured.image.imagePart.length > 1 ? (
              <Slider {...sliderSettings} className="h-full">
                {featured.image.imagePart.map((src, idx) => (
                  <div key={idx} className="relative h-full">
                    <img
                      src={src}
                      alt={`${featured.title} ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-[300px] max-[992px]:h-[230px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,22,43,0.55)_100%)]" aria-hidden />
                  </div>
                ))}
              </Slider>
            ) : (
              <>
                <img
                  src={featured.image.imagePart[0]}
                  alt={featured.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,22,43,0.55)_100%)]" aria-hidden />
              </>
            )}
            <span className={`${pill} ${pillGold} absolute top-4 left-4 z-[2]`}>Featured</span>
            <div className="absolute left-5 bottom-4 z-[2] inline-flex items-center gap-2 text-[12px] font-semibold text-white">
              <Icon name="calendar" className="w-4 h-4 text-gold-light" /> {featured.date}
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <h3 className="font-serif font-bold text-[24px] leading-[1.3] text-ink mb-3">{featured.title}</h3>
            <p className="text-[14px] leading-[1.65] text-brand-gray mb-6 line-clamp-3">{featured.description}</p>
            <a href="#" className={`${linkArrow} mt-auto`}>Read More →</a>
          </div>
        </article>

        {/* Side list with thumbnails */}
        <div className="flex flex-col gap-3">
          {sideItems.map((e, i) => (
            <a
              key={i}
              href="#"
              className="group flex items-center gap-4 p-3.5 bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] rounded-[14px] shadow-card transition-all duration-[400ms] ease-out hover:-translate-y-1 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover"
            >
              <div className="relative w-[88px] h-[72px] shrink-0 overflow-hidden rounded-[11px] bg-navy-mid/10 ring-1 ring-[rgba(15,47,87,0.10)]">
                <img
                  src={e.image.imagePart[0]}
                  alt={e.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-[15px] leading-[1.35] text-navy-dark mb-1 transition-colors duration-300 group-hover:text-gold-dark line-clamp-2">{e.title}</div>
                <div className="text-[12px] text-brand-gray">{e.date}</div>
              </div>
              <Icon name="arrow-right" className="w-4 h-4 shrink-0 text-navy-mid/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-dark" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
