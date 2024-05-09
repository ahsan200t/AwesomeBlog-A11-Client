const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    flowbite.content(),
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:"'Lato', 'sans-serif'"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    require('daisyui'),
  ],
}