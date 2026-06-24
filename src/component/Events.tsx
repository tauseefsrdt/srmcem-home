import React, { useState } from "react";
import { newsData } from "../data/homeData";
import {
  section,
  sectionLight,
  sectionHeadCenter,
  eyebrowCenter,
  sectionTitle,
  sectionDesc,
} from "../utils/tw";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider =
  (SlickSlider as unknown as { default?: typeof SlickSlider }).default ??
  SlickSlider;

type EventItem = (typeof newsData)[number] & { imgs: string[] };

const Events: React.FC = () => {
  const items: EventItem[] = newsData.map((e) => ({
    ...e,
    imgs: e.image.imagePart,
  }));
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const featuredEvent = items[0];
  const otherEvents = items.slice(1);

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

  return (
    <>
      <section className={`${section} ${sectionLight}`} id="events">
        <div className={`${sectionHeadCenter} reveal text-center`}>
          <div className={eyebrowCenter}>Campus Life</div>
          <h2 className={`${sectionTitle} text-ink`}>Latest News and Events</h2>
          <p className={`${sectionDesc} text-brand-gray mx-auto `}>
            Campus celebrations, technical forums and student activities that
            keep SRMCEM vibrant through the year.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 reveal mt-8">
          {/* Featured event */}
          <article className="group relative flex flex-col bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover hover:border-navy-mid/30 overflow-hidden rounded-2xl shadow-card lg:col-span-2">
            <span
              className="pointer-events-none absolute inset-x-0 top-0 h-px z-[2] bg-[linear-gradient(90deg,transparent,rgba(27,76,127,0.18),transparent)]"
              aria-hidden
            />
            <div className="relative w-full bg-navy-mid/10 [&_.slick-dots]:bottom-3 [&_.slick-dots_li_button:before]:text-white [&_.slick-dots_li.slick-active_button:before]:!text-gold-light">
              <Slider {...sliderSettings} className="w-full">
                {featuredEvent.imgs.map((id, idx) => (
                  <div key={idx} className="relative overflow-hidden">
                    <img
                      className="block h-[340px] max-[992px]:h-[240px] w-full object-cover"
                      src={id}
                      alt={`${featuredEvent.title} ${idx + 1}`}
                      loading="lazy"
                    />
                    <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(7,22,43,0.45)_100%)]" aria-hidden />
                  </div>
                ))}
              </Slider>
              <span className="absolute top-4 left-4 z-[2] inline-block bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] text-navy-deep px-3 py-1 rounded-full text-[12px] font-bold tracking-wide shadow-glowGold">
                Featured Event
              </span>
            </div>
            <div className="relative flex w-full flex-col flex-1 p-6 lg:p-8">
              <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold-dark">
                {featuredEvent.date}
              </div>
              <h3 className="mt-2 font-serif text-2xl lg:text-[28px] font-bold leading-tight text-ink">
                {featuredEvent.title}
              </h3>
              <p className="mt-4 text-brand-gray leading-7 line-clamp-4">
                {featuredEvent.description}
              </p>
              <button
                type="button"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] px-6 py-3 text-sm font-bold text-navy-deep shadow-glowGold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glowGoldStrong"
                onClick={() => setSelectedEvent(featuredEvent)}
              >
                View Details →
              </button>
            </div>
          </article>

          {/* Side events */}
          <div className="lg:col-span-1 grid gap-4 content-start">
            {otherEvents.map((event) => (
              <article
                key={event.id}
                role="button"
                tabIndex={0}
                className="group w-full text-left bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.1)] shadow-card cursor-pointer transition-all duration-300 hover:-translate-y-[3px] hover:bg-white hover:border-navy-mid/30 hover:shadow-hover overflow-hidden rounded-xl"
                onClick={() => setSelectedEvent(event)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedEvent(event); } }}
              >
                <div className="relative bg-navy-mid/10 overflow-hidden">
                  <img
                    className="w-full h-[150px] object-cover transition-transform duration-500 group-hover:scale-105"
                    src={event.imgs[0]}
                    alt={event.title}
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(7,22,43,0.5)_100%)]" aria-hidden />
                  <div className="absolute left-3 bottom-2.5 text-[11px] font-bold tracking-[1.2px] uppercase text-gold-light">
                    {event.date}
                  </div>
                </div>
                <div className="min-w-0 p-4">
                  <div className="font-serif text-[16px] leading-[1.3] text-navy-dark font-semibold transition-colors duration-300 group-hover:text-gold-dark line-clamp-2">
                    {event.title}
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-navy-mid transition-all duration-300 group-hover:gap-2.5 group-hover:text-gold-dark">
                    View Details →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedEvent && (
        <div className="p-6 fixed top-0 left-0 inset-0 z-[9999] flex items-center justify-center">
          <button
            type="button"
            className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
            aria-label="Close event details"
            onClick={() => setSelectedEvent(null)}
          />
          <div className="max-h-[min(760px,calc(100vh-48px))] relative max-w-4xl w-full mx-4 bg-white border border-[rgba(15,47,87,0.12)] rounded-2xl shadow-[0_40px_90px_rgba(10,31,61,0.35)] overflow-hidden">
            <span
              className="pointer-events-none absolute inset-x-0 top-0 h-1 z-10 bg-[linear-gradient(90deg,#1B4C7F,#F2B84B)]"
              aria-hidden
            />
            <button
              type="button"
              className="absolute top-3 right-3 z-10 grid place-items-center w-9 h-9 bg-navy-light/70 border border-[rgba(15,47,87,0.14)] text-navy-dark rounded-full leading-none text-xl transition-colors duration-200 hover:bg-navy hover:text-white hover:border-navy"
              aria-label="Close event details"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>

            <div className="w-full">
              <div className="p-4">
                {selectedEvent.imgs.length > 1 ? (
                  <Slider
                    {...{
                      dots: true,
                      arrows: true,
                      infinite: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }}
                  >
                    {selectedEvent.imgs.map((id, idx) => (
                      <div key={idx} className="rounded-md overflow-hidden">
                        <img
                          className="w-full h-72 object-cover"
                          src={id}
                          alt={`${selectedEvent.title} ${idx + 1}`}
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="rounded-md overflow-hidden">
                    <img
                      className="w-full h-72 object-cover"
                      src={selectedEvent.imgs[0]}
                      alt={selectedEvent.title}
                    />
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="text-sm font-semibold tracking-[0.15em] uppercase text-gold-dark">
                  {selectedEvent.date}
                </div>
                <h3
                  id="event-modal-title"
                  className="font-serif text-2xl font-bold mt-2 text-ink"
                >
                  {selectedEvent.title}
                </h3>
                <div className="h-full max-h-[250px] overflow-y-auto">
                  <p className="mt-4 text-brand-gray leading-7">
                    {selectedEvent.description}
                  </p>
                  {(selectedEvent as any).guest && (
                    <p className="mt-4 text-brand-gray">
                      <strong className="text-navy-dark">Chief Guest:</strong>{" "}
                      {(selectedEvent as any).guest}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Events;
