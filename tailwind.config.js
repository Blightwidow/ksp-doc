/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      sky: colors.sky,
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      primary: '#5393e2',
      bgColor: '#16181d',
    },
    extend: {},
  },
  plugins: [],
}
