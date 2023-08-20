import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'PublicSans': ['Public Sans', 'sans-serif']
    },
    colors: {
      primarySecond: "#21212F",
      footerHeadText: "#FFFFFF",
      footerText: "#CFD3D6",
      footerText2: "#E7E9EB",
      btnGrad1: "#FFC27A",
      btnGrad2: "#FFA337", 
      color: colors,
    },
    extend: {},
  },
  plugins: [],
}