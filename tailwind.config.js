const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Bebas Neue', "sans-serif"],
      },
      colors: {
        'cs-pink': "#ea3968",
        'cs-gray': "#0A0A0A",
      }
    },
  },
  plugins: [],
}
