import React from "react";

export const recruiters = [
  { name: "Adani", logo: "/assets/hiring_network/adani.png" },
  { name: "Amazon", logo: "/assets/hiring_network/amazon.png" },
  { name: "Capgemini", logo: "/assets/hiring_network/Capgemini.png" },
  { name: "Daikin", logo: "/assets/hiring_network/daikin.png" },
  { name: "GSK", logo: "/assets/hiring_network/gsk.png" },
  { name: "Infosys", logo: "/assets/hiring_network/infosys.png" },
  { name: "L&T", logo: "/assets/hiring_network/l&t.png" },
  { name: "Ranbaxy", logo: "/assets/hiring_network/ranbaxy.png" },
  { name: "SAP", logo: "/assets/hiring_network/sap.png" },
  { name: "Tata Steel", logo: "/assets/hiring_network/tata steel.png" },
];

const HiringNetwork = () => {
  const loop = [...recruiters, ...recruiters];

  return (
    <section className="relative bg-white/55 backdrop-blur-glass border-y border-[rgba(15,47,87,0.08)] py-7 overflow-hidden">
      <div className="max-w-container mx-auto px-6 flex items-center gap-6 flex-col lg:flex-row">
        <div className="shrink-0 flex items-center gap-2.5 text-navy-mid">
          <span className="w-2 h-2 rounded-full bg-gold animate-softPulse"></span>
          <span className="text-[11px] font-bold tracking-[3px] uppercase">
            Hiring Network
          </span>
        </div>

        <div className="relative flex-1 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max items-center gap-10 animate-marquee hover:[animation-play-state:paused]">
            {loop.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-5 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringNetwork;