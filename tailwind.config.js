/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "piedmont": 'url("/images/piedmont-park.png")'
      }
    }
  },
  daisyui: {
    themes: ["lemonade"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')]
}

