const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bebas)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "cs-pink": "#ea3968",
        "cs-gray": "#0A0A0A",
      },
      animation: {
        fade: "fade 1s ease-in-out",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
};
