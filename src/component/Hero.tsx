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
  return (
    <section className="hero" id="home">
      <div className="hero__glow"></div>
      <div className="hero__grid"></div>
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">Admissions Open 2025-26</div>
          <h1 className="hero__title">
            Top Choice of AKTU Aspirants in the Region
            <span>Innovate, Transform, Empower &amp; Succeed with AKTU Score Based Scholarships</span>
          </h1>
          <p className="hero__sub">
            SRMCEM has achieved distinction for its value-based institutional culture focusing on
            in-depth knowledge and employability enhancement — join a campus committed to
            outcomes, scholarships and real-world experience.
          </p>
         
          <div className="hero__cta">
            <a href="https://srmcem.ac.in" target="_blank" rel="noreferrer" className="btn btn--primary">Apply for Admission →</a>
            <a href="#placements" className="btn btn--outline">View Placements</a>
          </div>
          <div className="hero__stats" ref={statsRef} aria-hidden={false}>
            {[
              { label: 'Years Of Experience', suffix: '+', idx: 0 },
              { label: 'Number Of Courses', suffix: '+', idx: 1 },
              { label: 'Students', suffix: '+', idx: 2 },
              { label: 'Number Of Placements', suffix: '+', idx: 3 },
            ].map((s) => (
              <div className="hero__stat" key={s.label}>
                <div className="hero__stat-number">{counts[s.idx].toLocaleString()}{s.suffix}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="hero__trust">
            <span className="hero__trust-label">Trusted by</span>
            <div className="hero__trust-items">
              <span>Industry partners</span>
              <span>Research collaborators</span>
              <span>Scholarship sponsors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
