import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

const CAMPUS_BG =
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=70';

const accreditations = ['NBA Accredited', 'AICTE Approved', 'AKTU Affiliated', 'LU Recognised'];

const qualifications = ['Qualification', '12th / Intermediate', 'Diploma', 'Graduation', 'Post Graduation'];
const programsList = ['Select Program', 'B.Tech', 'M.Tech', 'MBA', 'MCA', 'BBA', 'BCA', 'B.Com (Hons.)', 'Polytechnic'];
const states = ['Select State', 'Uttar Pradesh', 'Bihar', 'Madhya Pradesh', 'Uttarakhand', 'Delhi', 'Other'];
const cities = ['Select City', 'Lucknow', 'Kanpur', 'Varanasi', 'Prayagraj', 'Gorakhpur', 'Other'];

const Hero = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stats = [27, 20, 3700, 1000];
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
    'inline-flex items-center justify-center gap-2 px-[30px] py-[14px] text-sm font-bold tracking-[0.4px] rounded-pill whitespace-nowrap transition-all duration-300 active:translate-y-0 bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] text-navy-deep shadow-glowGold hover:-translate-y-0.5 hover:shadow-glowGoldStrong max-[640px]:w-full';
  const btnOutline =
    'inline-flex items-center justify-center gap-2 px-[30px] py-[14px] text-sm font-semibold tracking-[0.4px] rounded-pill whitespace-nowrap transition-all duration-300 active:translate-y-0 bg-white/[0.06] backdrop-blur-glass text-white border border-white/25 hover:border-gold/60 hover:bg-white/10 hover:-translate-y-0.5 max-[640px]:w-full';

  const field =
    'w-full px-4 py-[11px] text-sm rounded-[10px] bg-white border border-[rgba(15,47,87,0.16)] text-ink placeholder:text-brand-gray/70 outline-none transition-all duration-200 focus:border-navy-mid focus:ring-2 focus:ring-navy-mid/25';
  const selectField = `${field} appearance-none bg-[length:14px] bg-no-repeat bg-[position:right_14px_center] bg-[url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' stroke='%231B4C7F' stroke-width='2' viewBox='0 0 24 24'><path d='M6 9l6 6 6-6'/></svg>")] pr-9 text-brand-gray`;

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_10%,#1B4C7F_0%,#0F2F57_52%,#0A1F3D_100%)]"
      id="home"
      aria-label="Admissions hero"
    >
      {/* Campus photo backdrop with navy wash */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] [mask-image:linear-gradient(180deg,#000_0%,#000_55%,transparent_100%)]"
        style={{ backgroundImage: `url(${CAMPUS_BG})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,22,46,0.92)_0%,rgba(11,33,66,0.78)_45%,rgba(11,33,66,0.55)_100%)]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_110%_50%,rgba(242,184,75,0.18)_0%,transparent_65%),radial-gradient(ellipse_50%_60%_at_-10%_70%,rgba(27,76,127,0.5)_0%,transparent_60%)]" aria-hidden />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_40%,transparent_100%)]" aria-hidden />

      <div className="relative z-[2] max-w-container mx-auto px-6 py-[clamp(56px,7vw,96px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_minmax(0,430px)] gap-12 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div className="flex flex-col items-start text-left max-lg:items-center max-lg:text-center">
            <div className="animate-fadeUp [animation-delay:0.05s] inline-flex items-center w-fit px-[18px] py-2 mb-[22px] rounded-pill bg-gold/[0.16] border border-gold/[0.45] text-gold-light text-[11px] font-semibold tracking-[3px] uppercase">
              <span className="w-1.5 h-1.5 mr-2.5 rounded-full bg-gold shadow-[0_0_8px_rgba(242,184,75,0.9)] animate-softPulse"></span>
              Admissions Open 2026-27
            </div>
            <h1 className="animate-fadeUp [animation-delay:0.15s] font-serif font-black text-[clamp(30px,4.1vw,54px)] leading-[1.12] text-white mb-3">
              Build Your Future at SRMCEM
              <span className="block mt-2 font-bold text-[clamp(16px,2vw,22px)] text-white/80">One of Lucknow&apos;s Most Trusted Engineering &amp; Management Colleges</span>
            </h1>
            <p className="animate-fadeUp [animation-delay:0.25s] text-base leading-[1.85] text-white/70 max-w-[600px] mb-6 max-lg:mx-auto">
              For 27+ years, SRMCEM has been shaping future-ready engineers and managers through
              academic excellence, innovation-driven learning and strong industry exposure. Guided by
              the vision of two IIT Kanpur Gold Medalists, the institution combines quality education
              with practical, career-focused training.
            </p>

            {/* Accreditation chips */}
            <div className="animate-fadeUp [animation-delay:0.3s] flex flex-wrap gap-2.5 mb-7 max-lg:justify-center">
              {accreditations.map(a => (
                <span key={a} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill bg-white/[0.07] border border-white/[0.14] text-[11px] font-semibold tracking-[0.5px] text-white/85">
                  <Icon name="check" className="w-3.5 h-3.5 text-gold" strokeWidth={2.5} /> {a}
                </span>
              ))}
            </div>

            <div className="animate-fadeUp [animation-delay:0.32s] flex flex-wrap gap-4 max-[640px]:w-full max-lg:justify-center">
              <a href="https://srmcem.ac.in" target="_blank" rel="noreferrer" className={btnPrimary}>Apply for Admission →</a>
              <a href="#placements" className={btnOutline}>View Placements</a>
            </div>

            <div
              className="animate-fadeUp [animation-delay:0.38s] flex gap-10 items-center mt-9 pt-7 border-t border-white/10 text-white/85 max-[640px]:gap-[18px] max-[640px]:flex-wrap max-lg:justify-center"
              ref={statsRef}
            >
              {[
                { label: 'Years Of Experience', suffix: '+', idx: 0 },
                { label: 'Number Of Courses', suffix: '+', idx: 1 },
                { label: 'Students', suffix: '+', idx: 2 },
                { label: 'Number Of Placements', suffix: '+', idx: 3 },
              ].map((s) => (
                <div className="flex flex-col items-start max-lg:items-center" key={s.label}>
                  <div className="font-serif font-black text-[28px] text-gold leading-none [text-shadow:0_6px_18px_rgba(7,22,46,0.6)] max-[640px]:text-[22px]">{counts[s.idx].toLocaleString()}{s.suffix}</div>
                  <div className="mt-1.5 text-xs text-white/65 normal-case">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — admissions enquiry form */}
          <div className="animate-fadeUp [animation-delay:0.2s] w-full" id="admissions">
            <div className="relative rounded-[22px] bg-white shadow-[0_30px_70px_rgba(10,31,61,0.4)] border border-white/70 overflow-hidden">
              <div className="px-6 py-4 bg-[linear-gradient(135deg,#0F2F57,#1B4C7F)] text-center">
                <div className="text-[10px] font-bold tracking-[2.5px] uppercase text-gold-light">Admissions Open For</div>
                <div className="text-lg font-serif font-bold text-white">Session 2026-27</div>
              </div>

              {submitted ? (
                <div className="px-6 py-12 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 grid place-items-center rounded-full bg-gold/20 border-2 border-gold text-gold-dark animate-glowPulse"><Icon name="check" className="w-7 h-7" strokeWidth={2.5} /></div>
                  <div className="font-serif font-bold text-xl text-navy-dark mb-2">Thank you!</div>
                  <p className="text-sm text-brand-gray">Your application interest has been received. Our admissions team will reach out shortly.</p>
                </div>
              ) : (
                <form
                  className="px-6 py-5 flex flex-col gap-3"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  <input className={field} type="text" name="name" placeholder="Name" required aria-label="Name" />
                  <input className={field} type="email" name="email" placeholder="Email" required aria-label="Email" />
                  <input className={field} type="tel" name="phone" placeholder="Phone" required aria-label="Phone" />
                  <div className="grid grid-cols-2 gap-3">
                    <select className={selectField} defaultValue="Qualification" aria-label="Qualification" required>
                      {qualifications.map(q => <option key={q} disabled={q === 'Qualification'} value={q}>{q}</option>)}
                    </select>
                    <select className={selectField} defaultValue="Select Program" aria-label="Program" required>
                      {programsList.map(p => <option key={p} disabled={p === 'Select Program'} value={p}>{p}</option>)}
                    </select>
                    <select className={selectField} defaultValue="Select State" aria-label="State" required>
                      {states.map(s => <option key={s} disabled={s === 'Select State'} value={s}>{s}</option>)}
                    </select>
                    <select className={selectField} defaultValue="Select City" aria-label="City" required>
                      {cities.map(c => <option key={c} disabled={c === 'Select City'} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <label className="flex items-start gap-2.5 mt-1 text-[11px] leading-[1.5] text-brand-gray cursor-pointer">
                    <input type="checkbox" required className="mt-0.5 accent-navy-mid w-3.5 h-3.5 shrink-0" />
                    <span>I authorise SRMCEM Group representatives to Call, SMS, Email or Whatsapp me about the programs offered.</span>
                  </label>
                  <button
                    type="submit"
                    className="mt-1.5 w-full py-[13px] rounded-[10px] bg-[linear-gradient(135deg,#F7CF75,#F2B84B)] text-navy-deep text-sm font-bold tracking-[0.5px] shadow-glowGold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glowGoldStrong"
                  >
                    Submit Application Interest
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
