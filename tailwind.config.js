/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainWhite: "#FFFFFF",
        mainGray: "#6C6C6C",
        mainBlack: "#000000",
        mainRed: "#B91C23",
        secondRed: "#530D10",
        currentColor: "#FFFFFF",
      },
      fontFamily: {
        inter: ["Inter", "sans - serif"],
      },
      transitionProperty: {
        left: "left",
        color: "color",
      },
    },
  },
  plugins: [],
};
