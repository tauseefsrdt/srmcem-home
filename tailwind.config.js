/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2F57',
          dark: '#0A1F3D',
          deep: '#07162B',
          mid: '#1B4C7F',
          light: '#E6EEF9',
        },
        gold: {
          DEFAULT: '#F2B84B',
          dark: '#D89A2F',
          light: '#F7CF75',
          text: '#8C651A',
        },
        ink: '#101828',
        'brand-gray': '#475467',
        'off-white': '#F6F7FB',
        'card-bg': '#F9FAFC',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        display: ['Sora', 'Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '22px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 6px 22px rgba(15, 23, 42, 0.08)',
        hover: '0 26px 60px rgba(15, 23, 42, 0.16)',
        soft: '0 14px 40px rgba(15, 23, 42, 0.12)',
        gold: '0 10px 28px rgba(242, 184, 75, 0.4)',
      },
      maxWidth: {
        container: '1220px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'none' },
        },
        softPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        softPulse: 'softPulse 2s infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        marqueeSlow: 'marquee 55s linear infinite',
        spinSlow: 'spinSlow 22s linear infinite',
      },
    },
  },
  plugins: [],
}
