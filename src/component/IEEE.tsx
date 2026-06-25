import React from "react";
import {
  section,
  eyebrow,
  sectionTitle,
} from "../utils/tw";
import Icon, { IconName } from "./Icon";

const chapters: { icon: IconName; name: string; type: string }[] = [
  { icon: "cpu",     name: "Robotics & Automation",   type: "IEEE RAS Branch"          },
  { icon: "radio",   name: "Signal Processing",        type: "SRMCEM Student Chapter"   },
  { icon: "zap",     name: "IEEE Student Branch",      type: "Main SRMCEM Branch"       },
  { icon: "battery", name: "Power & Energy Society",   type: "IEEE PES Chapter"         },
  { icon: "users",   name: "Women in Engineering",     type: "WIE Affinity Group"       },
];

const IEEE = () => {
  return (
    <section className={`${section} bg-[#0F4A85]`}>
      <div className="mb-14 reveal">
        <div className={`${eyebrow} !text-white/80`}>Memberships &amp; Associations</div>

        <h2 className={`${sectionTitle} text-white`}>
          IEEE Student Branch<br />&amp; Global Chapters
        </h2>

        <p className="mt-[18px] text-base leading-[1.85] text-white/70 max-w-[820px]">
          At SRMCEM, IEEE membership opens the door to innovation, global networking, and professional
          excellence. Our vibrant IEEE Student Branch actively organises workshops, seminars and technical
          events to empower students with the latest in technology and leadership skills. A proud milestone
          — hosting the <strong>IEEE International Conference</strong> under the U.P. Section in November 2024.
        </p>
      </div>

      {/* Chapter cards */}
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 reveal">
        {chapters.map((chapter, index) => (
          <article
            key={index}
            className="group flex flex-col items-start gap-4 p-6 rounded-xl bg-white/70 backdrop-blur-glass border border-[rgba(15,47,87,0.10)] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:border-navy-mid/30 hover:shadow-hover"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-mid/[0.10] border border-navy-mid/20 text-navy-mid transition-all duration-300 group-hover:bg-gold/15 group-hover:border-gold/40 group-hover:text-gold-dark">
              <Icon name={chapter.icon} className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-[14px] leading-snug text-navy-dark mb-1">
                {chapter.name}
              </h3>
              <p className="text-[11px] font-semibold tracking-[1px] uppercase text-red-600/80">
                {chapter.type}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* IEEE Conference highlight */}
      <div className="mt-8 reveal flex items-start gap-5 rounded-lg bg-[linear-gradient(135deg,#0F2F57,#1B4C7F)] border-l-4 border-gold px-8 py-6">
        <div className="flex-shrink-0 w-12 h-12 grid place-items-center rounded-xl bg-gold/20 text-gold-light">
          <Icon name="globe" className="w-6 h-6" />
        </div>
        <div>
          <div className="font-serif font-bold text-[18px] text-white mb-1">
            IEEE International Conference — November 2024
          </div>
          <div className="text-[13px] leading-[1.65] text-white/70">
            SRMCEM proudly hosts the IEEE International Conference under the U.P. Section — showcasing our commitment to global academic and research excellence.
          </div>
        </div>
      </div>
    </section>
  );
};

export default IEEE;
