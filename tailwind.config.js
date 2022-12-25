/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        abel : ['"Abel"']
      }
    },
  },
  screens: {
    xs: '475px',
    ...defaultTheme.screens,
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin'),
  ],
}
