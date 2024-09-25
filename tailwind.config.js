// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '60px': '60px',
        '70px': '70px',
        '40px': '40px',
        '30px': '30px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};