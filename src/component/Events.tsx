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
        <div className={`${eyebrowCenter} text-navy`}>Campus Life</div>
        <h2 className={`${sectionTitle} text-ink text-3xl lg:text-4xl font-semibold`}>Latest News and Events</h2>
        <p className={`${sectionDesc} max-w-2xl mx-auto text-gray-600`}>
          Campus celebrations, technical forums and student activities that keep SRMCEM vibrant through the year.
        </p>
      </div>

      <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] gap-6 max-[980px]:grid-cols-1 reveal mt-8 lg:grid-cols-3">
        <article className="p-5 border border-[rgba(27,76,127,0.14)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover hover:border-[rgba(27,76,127,0.25)] overflow-hidden rounded-2xl shadow-lg lg:col-span-2 bg-white ">
          <div className="w-full   bg-slate-100">
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
          <div className="flex w-full flex-col justify-center p-6 lg:p-8">
              <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">Featured Event</span>
              <h3 className="mt-4 text-2xl lg:text-3xl font-bold leading-tight text-slate-900">{featuredEvent.title}</h3>
              <div className="text-sm font-medium tracking-[0.2em] uppercase text-slate-500 mt-3">{featuredEvent.date}</div>
              <p className="mt-5 text-gray-700 leading-7">{featuredEvent.description}</p>
              <button
                type="button"
                className="mt-8 inline-flex w-fit items-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-600"
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
              className="w-full text-left border border-[rgba(27,76,127,0.14)] shadow-card cursor-pointer transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(27,76,127,0.28)] flex items-start gap-4 p-3 rounded-md hover:shadow-md bg-white"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="bg-navy-light w-28 h-20 shrink-0 rounded-md overflow-hidden">
                <img className="w-full h-full object-cover" src={event.image.imagePart[0]} alt={event.title} />
              </div>
              <div className="min-w-0 text-left">
                <div className="font-extrabold tracking-[1.4px] uppercase mb-1.5 text-sm text-gray-500">{event.date}</div>
                <div className="font-serif text-[18px] leading-[1.2] text-navy-dark font-semibold">{event.title}</div>
                <div className="mt-[7px] text-sm text-gray-600 line-clamp-2">{event.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div className="p-6 fixed inset-0 z-50 flex items-center justify-center">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close event details"
            onClick={() => setSelectedEvent(null)}
          />
          <div className="max-h-[min(760px,calc(100vh-48px))] relative max-w-4xl w-full mx-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              type="button"
              className="absolute top-3 right-3 bg-white rounded-full p-1 shadow"
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
                <div className="text-sm text-gray-500">{selectedEvent.date}</div>
                <h3 id="event-modal-title" className="text-2xl font-bold mt-2">{selectedEvent.title}</h3>
                <p className="mt-4 text-gray-700">{selectedEvent.description}</p>
                {(selectedEvent as any).guest && (
                  <p className="mt-4">
                    <strong>Chief Guest:</strong> {(selectedEvent as any).guest}
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
