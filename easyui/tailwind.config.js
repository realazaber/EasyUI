/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "selector",

  theme: {
    extend: {
      colors: {
        primary: "#DE002D",
        secondary: "#de506a",
        accent: "#261b23",
      },
    },
  },
  plugins: [],
};
