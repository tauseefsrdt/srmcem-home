import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const stats = [20, 20, 3700, 1000];
    const duration = 1400; // ms

    let started = false;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (index: number, target: number) => {
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / duration);
        const val = Math.round(easeOut(t) * target);
        setCounts(prev => {
          const next = [...prev];
          next[index] = val;
          return next;
        });
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      if (started) return;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          started = true;
          stats.forEach((s, i) => animate(i, s));
        }
      });
    };

    const obs = new IntersectionObserver(onIntersect, { threshold: 0.2 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);
  const btnPrimary =
    'inline-flex items-center justify-center gap-2 px-[30px] py-[14px] text-sm font-bold tracking-[0.4px] rounded-sm whitespace-nowrap transition-all duration-300 active:translate-y-0 bg-gold text-navy-dark shadow-[0_6px_20px_rgba(239,166,60,0.38)] hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(239,166,60,0.5)] max-[640px]:w-full';
  const btnOutline =
    'inline-flex items-center justify-center gap-2 px-[30px] py-[14px] text-sm font-semibold tracking-[0.4px] rounded-sm whitespace-nowrap transition-all duration-300 active:translate-y-0 bg-transparent text-white border-2 border-white/40 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 max-[640px]:w-full';

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_10%,#173c6f_0%,#0b2142_48%,#08162e_100%)]"
      id="home"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_110%_50%,rgba(242,184,75,0.18)_0%,transparent_65%),radial-gradient(ellipse_50%_60%_at_-10%_70%,rgba(27,76,127,0.5)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_40%,transparent_100%)]"></div>
      <div className="relative z-[2] max-w-container mx-auto px-6 py-[clamp(88px,11vw,150px)] min-h-[88vh] flex items-center justify-center max-[992px]:[min-height:auto]">
        <div className="max-w-[860px] flex flex-col items-center text-center">
          <div className="animate-fadeUp [animation-delay:0.05s] inline-flex items-center w-fit px-[18px] py-2 mb-[26px] rounded-pill bg-gold/[0.16] border border-gold/[0.45] text-gold-light text-[11px] font-semibold tracking-[3px] uppercase">
            <span className="w-1.5 h-1.5 mr-2.5 rounded-full bg-gold shadow-[0_0_8px_rgba(242,184,75,0.9)] animate-softPulse"></span>
            Admissions Open 2025-26
          </div>
          <h1 className="animate-fadeUp [animation-delay:0.15s] font-serif font-black text-[clamp(30px,4.1vw,56px)] leading-[1.12] text-white mb-3">
            Top Choice of AKTU Aspirants in the Region
            <span className="block mt-2 font-bold text-[clamp(16px,2vw,22px)] text-white/80">Innovate, Transform, Empower &amp; Succeed with AKTU Score Based Scholarships</span>
          </h1>
          <p className="animate-fadeUp [animation-delay:0.25s] text-base leading-[1.85] text-white/70 max-w-[640px] mx-auto mb-6">
            SRMCEM has achieved distinction for its value-based institutional culture focusing on
            in-depth knowledge and employability enhancement — join a campus committed to
            outcomes, scholarships and real-world experience.
          </p>

          <div className="animate-fadeUp [animation-delay:0.32s] flex flex-wrap justify-center gap-4 max-[640px]:w-full">
            <a href="https://srmcem.ac.in" target="_blank" rel="noreferrer" className={btnPrimary}>Apply for Admission →</a>
            <a href="#placements" className={btnOutline}>View Placements</a>
          </div>
          <div
            className="animate-fadeUp [animation-delay:0.38s] flex gap-10 justify-center items-center mt-[26px] text-white/85 max-[640px]:gap-[18px] max-[640px]:flex-wrap"
            ref={statsRef}
            aria-hidden={false}
          >
            {[
              { label: 'Years Of Experience', suffix: '+', idx: 0 },
              { label: 'Number Of Courses', suffix: '+', idx: 1 },
              { label: 'Students', suffix: '+', idx: 2 },
              { label: 'Number Of Placements', suffix: '+', idx: 3 },
            ].map((s) => (
              <div className="flex flex-col items-center" key={s.label}>
                <div className="font-serif font-black text-[28px] text-gold leading-none [text-shadow:0_6px_18px_rgba(7,22,46,0.6)] max-[640px]:text-[22px]">{counts[s.idx].toLocaleString()}{s.suffix}</div>
                <div className="mt-1.5 text-xs text-white/65 normal-case">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="animate-fadeUp [animation-delay:0.45s] mt-[26px] flex flex-wrap items-center justify-center gap-3 text-white/55 text-xs tracking-[1px] uppercase">
            <span className="text-gold-light font-bold">Trusted by</span>
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 rounded-pill bg-white/[0.06] border border-white/10">Industry partners</span>
              <span className="px-3 py-1.5 rounded-pill bg-white/[0.06] border border-white/10">Research collaborators</span>
              <span className="px-3 py-1.5 rounded-pill bg-white/[0.06] border border-white/10">Scholarship sponsors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
