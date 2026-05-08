/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0a1020',
        panel: '#0e1528',
        border: 'rgba(255,255,255,0.1)',
        electric: '#40b8ff',
        neon: '#8d5bff',
        gold: '#cfa65c',
        goldSoft: '#f8d992',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 20px 80px rgba(64,184,255,0.18)',
        neon: '0 0 30px rgba(141,91,255,0.35)',
        gold: '0 0 40px rgba(207,166,92,0.22)',
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, rgba(248,217,146,1) 0%, rgba(207,166,92,1) 45%, rgba(139,101,37,1) 100%)',
        'hero-grid':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseSoft: 'pulseSoft 4s ease-in-out infinite',
        marquee: 'marquee 24s linear infinite',
        beam: 'beam 10s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        beam: {
          from: { transform: 'translate3d(-5%, -2%, 0) rotate(8deg)' },
          to: { transform: 'translate3d(5%, 2%, 0) rotate(-6deg)' },
        },
      },
    },
  },
  plugins: [],
}
