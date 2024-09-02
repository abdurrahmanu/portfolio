/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./spa-loading-template.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   baseBlack: '#121212;',
      // },
      // fontSize: {
      //   'custom-sm': '30px',
      // },
      screens: {
        'my-md': {'max': '640px'},
        'my-md': {'max': '640px'},
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}