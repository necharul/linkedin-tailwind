/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'container': '850px',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
      },
      colors: {
        'deepwhite': '#E5E5E5',
        'offblack': '#181818',
      },
    },
  },
  plugins: [],
}
