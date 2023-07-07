/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "25px",
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
