/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./DemoCafe.html'],
  theme: {
    extend: {
      colors: {
        espresso: '#1A1310',
        cream: '#F2EBDD',
        paper: '#FAF6EE',
        bark: '#5C4B3B',
        copper: '#A5623A',
        olive: '#6C6A47',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'serif'],
        body: ['"Public Sans"', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
};
