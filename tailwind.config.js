/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arimo: ["Arimo", "sans-serif"],
        elite: ["Special Elite", "sans-serif"],
      },
      screens: {
        xs: "460px",
      },
    },
  },
  plugins: [],
};
