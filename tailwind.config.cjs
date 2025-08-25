/**** Tailwind Config ****/
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"General Sans Variable"', 'Inter', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        ink: '#0B0F19',
        accent: '#4F46E5',
        accent2: '#6366F1',
        soft: '#F5F7FB',
        edge: '#101828'
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(0,0,0,0.04), 0 2px 4px -2px rgba(0,0,0,0.06)'
      },
      maxWidth: {
        prose: '62ch'
      },
      backgroundImage: {
        'noise': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      }
    },
  },
  plugins: [
  ],
};
