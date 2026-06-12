// Shared Tailwind utility-class strings — single source of truth for the design
// patterns that used to live as global classes in index.css (.section, .eyebrow,
// .card, .btn, .pill, …). Components compose these with component-specific
// utilities inline. This keeps styling 100% Tailwind (no .css component classes)
// while staying DRY and visually consistent.

/* ----------------------------------- Layout ---------------------------------- */
export const container = 'w-full max-w-container mx-auto px-6';

// Section: vertical clamp padding + horizontal gutters that center a 1220px column.
// Append a background modifier (sectionLight / sectionNavy / …).
export const section =
  'relative py-[clamp(64px,7vw,112px)] px-[max(24px,calc((100%-1220px)/2))]';
export const sectionTight =
  'relative py-[clamp(44px,5vw,76px)] px-[max(24px,calc((100%-1220px)/2))]';

// Section background modifiers (append after `section`):
export const sectionLight = 'bg-off-white';
export const sectionWhite = 'bg-white';
export const sectionNavy = 'bg-navy text-white';
export const sectionNavyDark = 'bg-navy-dark text-white';
export const sectionGradient = 'bg-[linear-gradient(150deg,#0a1f3d_0%,#133a6b_100%)] text-white';
export const sectionTintBlue = 'bg-navy-light';

/* -------------------------------- Section head -------------------------------- */
export const sectionHead = 'max-w-[680px] mb-14';
export const sectionHeadCenter = 'max-w-[680px] mb-14 mx-auto text-center';
export const sectionHeadWide = 'max-w-[820px] mb-14';

// Eyebrow label — COLOR-FREE. Append a color: `text-navy` (default), `text-gold-light`
// (--light), or `text-white/65` (--muted).
export const eyebrow =
  "inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[4px] uppercase mb-[18px] before:content-[''] before:w-[30px] before:h-0.5 before:bg-gold";
// Centered variant: centers the row and adds a trailing line (matches .section-head--center .eyebrow).
export const eyebrowCenter =
  "inline-flex justify-center items-center gap-2.5 text-[11px] font-bold tracking-[4px] uppercase mb-[18px] before:content-[''] before:w-[30px] before:h-0.5 before:bg-gold after:content-[''] after:w-[30px] after:h-0.5 after:bg-gold";

// Section title — COLOR-FREE. Append `text-ink` (default) or `text-white` (--light).
export const sectionTitle =
  'font-serif font-black text-[clamp(28px,3.8vw,50px)] leading-[1.12] tracking-[-0.5px]';

// Section description — COLOR-FREE. Append `text-brand-gray` (default) or `text-white/60` (--light).
// For centered heads add `mx-auto`.
export const sectionDesc = 'mt-[18px] text-base leading-[1.85] max-w-[640px]';

/* ------------------------------------ Cards ----------------------------------- */
export const card =
  'bg-white border border-[rgba(27,76,127,0.14)] rounded-md shadow-card transition-all duration-[350ms] hover:-translate-y-1.5 hover:shadow-hover hover:border-[rgba(28,78,157,0.28)]';
export const cardSoft =
  'bg-card-bg border border-[rgba(27,76,127,0.14)] rounded-md shadow-card transition-all duration-[350ms] hover:-translate-y-1.5 hover:bg-white hover:shadow-hover hover:border-[rgba(28,78,157,0.28)]';
export const cardDark =
  'bg-navy-dark border border-white/[0.12] text-white rounded-md shadow-card transition-all duration-[350ms] hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_24px_50px_rgba(10,20,45,0.45)]';
export const cardPad = 'p-8';

/* ----------------------------------- Buttons ---------------------------------- */
// Base size/shape. Color variants below already include it.
export const btn =
  'inline-flex items-center justify-center gap-2 px-[30px] py-[14px] text-sm font-bold tracking-[0.4px] rounded-sm whitespace-nowrap transition-all duration-300 active:translate-y-0';
export const btnPrimary = `${btn} bg-gold text-navy-dark shadow-[0_6px_20px_rgba(239,166,60,0.38)] hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(239,166,60,0.5)]`;
export const btnOutline = `${btn} font-semibold bg-transparent text-white border-2 border-white/40 hover:border-white hover:bg-white/10 hover:-translate-y-0.5`;
export const btnLight = `${btn} bg-white text-navy-dark shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-navy-dark hover:text-white hover:-translate-y-0.5`;
export const btnNavy = `${btn} bg-navy text-white shadow-[0_6px_20px_rgba(28,78,157,0.32)] hover:bg-navy-dark hover:-translate-y-0.5`;
// Small size: compose color classes onto this instead of the default btn padding.
export const btnSm =
  'inline-flex items-center justify-center gap-2 px-[22px] py-2.5 text-[13px] font-bold tracking-[0.4px] rounded-sm whitespace-nowrap transition-all duration-300 active:translate-y-0';

/* ------------------------------- Pills & links -------------------------------- */
export const pill =
  'inline-flex items-center gap-1.5 px-3.5 py-[5px] rounded-pill text-[10px] font-bold tracking-[1px] uppercase';
export const pillGold = 'bg-[#FDEFD3] text-[#8A5A12]';
export const pillGhost = 'bg-gold/[0.12] border border-gold/30 text-gold-light';

export const linkArrow =
  'inline-flex items-center gap-1.5 text-[13px] font-bold text-navy transition-all duration-[250ms] hover:gap-2.5';
