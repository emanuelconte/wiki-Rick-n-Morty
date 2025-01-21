/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        schwifty: ['Get Schwifty', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '2px #bfde42',
          'text-stroke': '2px #bfde42',
        },
      });
    }),
  ],
};
