/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        pthinitalic: ["Poppins-ThinItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
