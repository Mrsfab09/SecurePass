/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        buttonColorStart: "#6B37FF",
        buttonColorGenerate: "rgb(6 182 212)",
        buttonColor1: "#6c37ff5d",
        buttonColor2: "rgb(103 232 249)",
        buttonColorHoverS: "#6c37ffb9",
        buttonColorHoverG: "rgb(34 211 238)",
      },
      boxShadow: {
        "3xl": "200px 200px 200px 50px rgb(2 132 199)",
      },
    },
  },
  plugins: [],
};
