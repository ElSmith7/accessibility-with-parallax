/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arimo: ["Arimo", "sans-serif"],
        libre: ["Libre Baskerville", "sans-serif"],
      },
    },
  },
  plugins: [],
};
