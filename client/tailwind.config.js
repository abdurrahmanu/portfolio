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
      colors: {
        baseBlack: '#121212;',
      },
      fontSize: {
        'custom-sm': '30px',
        'custom-md': '38px',
        'custom-lg': '46px',
        'custom-xl': '56px',
        'custom-2xl': '66px',
        'custom-3xl': '76px',
      },
      screens: {
        'screen-xxxs': {'min': '400px'},
        'screen-xxs': {'min': '500px'},
        'screen-xs': {'min': '600px'},
        'screen-sm': { 'min': '800px' },
        'screen-md': { 'min': '900px' },
        'screen-lg': { 'min': '1055px' },
        'screen-xl': { 'min': '1202px' },
        'screen-2xl': { 'min': '1310px' },
        'screen-3xl': { 'min': '1415px' },
      },
    },
  },
  plugins: [

  ],
}