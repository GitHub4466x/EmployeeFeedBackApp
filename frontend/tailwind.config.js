/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      scrollBehavior: {
        smooth: 'smooth',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};