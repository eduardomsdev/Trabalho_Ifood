/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#15100C",
          soft: "#1E1712",
          panel: "#241B14",
        },
        cream: "#F6EFE4",
        paprika: {
          DEFAULT: "#FF5A36",
          dim: "#C7441F",
        },
        mango: "#FFC24B",
        leaf: "#2FAE72",
        plum: "#5A3E5C",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Space Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
