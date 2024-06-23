/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        title: "#35465F",
        white: "#ffffff",
      },
      fontFamily: {
        cocogoose: ["Cocogoose Pro Regular"],
      },
    },
  },
  plugins: [],
};
