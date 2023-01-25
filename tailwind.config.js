const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-switzer)', ...fontFamily.sans]
      },
      colors: require('./color.config.js')
    }
  },
  plugins: []
};
