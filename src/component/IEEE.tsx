import React from "react";
import reels1 from "../assets/reels/Abhiyukti.mp4";
import reels2 from "../assets/reels/Spardha.mp4";
import reels3 from "../assets/reels/best women coder award.mp4";
import reels4 from "../assets/reels/gantavya.mp4";

import {
  section,
  sectionGlass,
  eyebrowCenter,
  sectionTitle,
  sectionDesc,
} from "../utils/tw";

import Icon, { IconName } from "./Icon";

const chapters: {
  icon: IconName;
  title: string;
  video: string;
}[] = [
  {
    icon: "cpu",
    title: "Abhiyukti",
    video: reels1,
  },
  {
    icon: "radio",
    title: "Spardha",
    video: reels2,
  },
  {
    icon: "zap",
    title: "Best Women Coder Award",
    video: reels3,
  },
  {
    icon: "battery",
    title: "Gantavya",
    video: reels4,
  },
];

const IEEE = () => {
  return (
    <section className={`${section} ${sectionGlass}`}>
      <div className="container mx-auto mb-14 text-center reveal">
        <div className={eyebrowCenter}>Student Activities & Achievements</div>

        <h2 className={sectionTitle}>
          Campus Events, Competitions & Success Stories
        </h2>

        <p className={`${sectionDesc} mx-auto`}>
          Discover the vibrant student life at SRMCEM through technical fests,
          competitions, achievements, and memorable campus experiences that
          inspire innovation, leadership, and excellence.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 reveal">
        {chapters.map((chapter, index) => (
          <article
            key={index}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[9/16] overflow-hidden">
              <video
                src={chapter.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center gap-3 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-navy-mid">
                <Icon name={chapter.icon} className="h-5 w-5" />
              </div>

              <h3 className="text-sm font-semibold text-navy-dark">
                {chapter.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default IEEE;