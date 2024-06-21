/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "selector",

  theme: {
    extend: {
      colors: {
        primary: "#DE002D",
        secondary: "#ac24f6",
        accent: "#261b23",
        darkbg: "#131414",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
