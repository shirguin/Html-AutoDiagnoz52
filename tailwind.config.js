/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        pulse_1: "pulse_1 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        // vibrate: "vibrate 0.2s liner infinity both",
      },
      keyframes: {
        pulse_1: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        // vibrate: {
        //   "0%": { transform: "translate(0)" },
        //   "20%": { transform: 'translate("-2px", "2px")' },
        //   "40%": { transform: 'translate("-2px", "-2px")' },
        //   "60%": { transform: 'translate("2px", "2px")' },
        //   "80%": { transform: 'translate("2px", "-2px")' },
        //   "100%": { transform: "translate(0)" },
        // },
      },
      screens: {
        mobile: "360px",
      },
      colors: {
        mainWhite: "#FFFFFF",
        mainGray: "#6C6C6C",
        secondGray: "#3A3A3A",
        mainBlack: "#000000",
        secondBlack: "#303030",
        shadowBlack: "rgba(0, 0, 0, 0.9)",
        mainRed: "#B91C23",
        secondRed: "#530D10",
        currentColor: "#FFFFFF",
      },
      transitionProperty: {
        left: "left",
        color: "color",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
      },
    },
  },
  plugins: [],
};
