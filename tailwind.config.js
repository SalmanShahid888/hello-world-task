/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
        ...defaultTheme.screens,
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        mulish: ["mulish", "sans-serif"],
        jakarta: ["plus-jakarta-sans", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
      },
      keyframes: {
        pop: {
          "50%": { transform: "scale(1.1)" },
        },
        rotate: {
          "0%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        rotateReverse: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        pop: "pop 0.15s ease-in-out",
        bounce: "bounce 1s ease-in-out",
        rotatefull: "rotate 0.4s ease-in-out",
        rotatefullReverse: "rotateReverse 0.4s ease-in-out",
      },
    },
  },
  darkMode: "media",
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
