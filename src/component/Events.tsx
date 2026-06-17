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
  (SlickSlider as unknown as { default?: typeof SlickSlider }).default ?? SlickSlider;

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<(typeof newsData)[number] | null>(null);
  const featuredEvent = newsData[0];
  const otherEvents = newsData.slice(1);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className={`${section} ${sectionLight}`} id="events">
      <div className={`${sectionHeadCenter} reveal text-center`}>
        <div className={eyebrowCenter}>Campus Life</div>
        <h2 className={`${sectionTitle} text-ink`}>Latest News and Events</h2>
        <p className={`${sectionDesc} text-brand-gray mx-auto `}>
          Campus celebrations, technical forums and student activities that keep SRMCEM vibrant through the year.
        </p>
      </div>

      <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] gap-6 max-[980px]:grid-cols-1 reveal mt-8 lg:grid-cols-3">
        <article className="group relative p-5 bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover hover:border-navy-mid/30 overflow-hidden rounded-2xl shadow-card lg:col-span-2">
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(27,76,127,0.18),transparent)]" aria-hidden />
          <div className="w-full bg-navy-light/50 rounded-lg">
              {featuredEvent.image.imagePart && featuredEvent.image.imagePart.length > 1 ? (
                <Slider {...sliderSettings} className="h-full w-full">
                  {featuredEvent.image.imagePart.map((src: string, idx: number) => (
                    <div key={idx} className="h-full w-full rounded-lg overflow-hidden">
                      <img className="block max-h-[200px] rounded-lg w-full object-cover " src={src} alt={`${featuredEvent.title} ${idx + 1}`} />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="h-full w-full">
                  <img className="block max-h-[200px] rounded-lg w-full object-cover" src={featuredEvent.image.imagePart[0]} alt={featuredEvent.title} />
                </div>
              )}
          </div>
          <div className="relative flex w-full flex-col justify-center p-6 lg:p-8">
              <span className="inline-block w-fit bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] text-navy-deep px-3 py-1 rounded-full text-sm font-semibold shadow-glowGold">Featured Event</span>
              <h3 className="mt-4 text-2xl lg:text-3xl font-bold leading-tight text-ink">{featuredEvent.title}</h3>
              <div className="text-sm font-medium tracking-[0.2em] uppercase text-gold-dark mt-3">{featuredEvent.date}</div>
              <p className="mt-5 text-brand-gray leading-7">{featuredEvent.description}</p>
              <button
                type="button"
                className="mt-8 inline-flex w-fit items-center rounded-full bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] px-5 py-3 text-sm font-semibold text-navy-deep shadow-glowGold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glowGoldStrong"
                onClick={() => setSelectedEvent(featuredEvent)}
              >
                View Details
              </button>
            </div>
        </article>

        <div className="lg:col-span-1 grid gap-4">
          {otherEvents.map((event) => (
            <button
              type="button"
              key={event.id}
              className="w-full text-left bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.1)] shadow-card cursor-pointer transition-all duration-300 hover:-translate-y-[3px] hover:bg-white hover:border-navy-mid/30 hover:shadow-hover flex items-start gap-4 p-3 rounded-md"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="bg-navy-light/60 w-28 h-20 shrink-0 rounded-md overflow-hidden">
                <img className="w-full h-full object-cover" src={event.image.imagePart[0]} alt={event.title} />
              </div>
              <div className="min-w-0 text-left">
                <div className="font-extrabold tracking-[1.4px] uppercase mb-1.5 text-sm text-gold-dark">{event.date}</div>
                <div className="font-serif text-[18px] leading-[1.2] text-navy-dark font-semibold">{event.title}</div>
                <div className="mt-[7px] text-sm text-brand-gray line-clamp-2">{event.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div className="p-6 fixed inset-0 z-50 flex items-center justify-center">
          <button
            type="button"
            className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
            aria-label="Close event details"
            onClick={() => setSelectedEvent(null)}
          />
          <div className="max-h-[min(760px,calc(100vh-48px))] relative max-w-4xl w-full mx-4 bg-white border border-[rgba(15,47,87,0.12)] rounded-2xl shadow-[0_40px_90px_rgba(10,31,61,0.35)] overflow-hidden">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1B4C7F,#F2B84B)]" aria-hidden />
            <button
              type="button"
              className="absolute top-3 right-3 z-10 grid place-items-center w-9 h-9 bg-navy-light/70 border border-[rgba(15,47,87,0.14)] text-navy-dark rounded-full leading-none text-xl transition-colors duration-200 hover:bg-navy hover:text-white hover:border-navy"
              aria-label="Close event details"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>

            <div className="grid lg:grid-cols-2">
              <div className="p-4">
                {selectedEvent.image.imagePart && selectedEvent.image.imagePart.length > 1 ? (
                  <Slider {...{
                    dots: true,
                    arrows: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }}>
                    {selectedEvent.image.imagePart.map((src: string, idx: number) => (
                      <div key={idx} className="rounded-md overflow-hidden">
                        <img className="w-full h-72 object-cover" src={src} alt={`${selectedEvent.title} ${idx + 1}`} />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="rounded-md overflow-hidden">
                    <img className="w-full h-72 object-cover" src={selectedEvent.image.imagePart[0]} alt={selectedEvent.title} />
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="text-sm font-semibold tracking-[0.15em] uppercase text-gold-dark">{selectedEvent.date}</div>
                <h3 id="event-modal-title" className="font-serif text-2xl font-bold mt-2 text-ink">{selectedEvent.title}</h3>
                <p className="mt-4 text-brand-gray leading-7">{selectedEvent.description}</p>
                {(selectedEvent as any).guest && (
                  <p className="mt-4 text-brand-gray">
                    <strong className="text-navy-dark">Chief Guest:</strong> {(selectedEvent as any).guest}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
