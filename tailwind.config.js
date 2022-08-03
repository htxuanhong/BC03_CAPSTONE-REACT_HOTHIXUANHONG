/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        19: "19px",
      },
      colors: {
        grayxh: "#9e9e9e",
        blackxh: "#212121",
        pick: "#06283D",
        greenxh: "#18978F",
        violetxh: "#7A4069",
        greenlight: "#00ac4d",
        redLight: "#EB4747",
        greenlightxh: "#8bc34a",
        blackDark: "rgba(0,0,0,0.5)",
        bluexh: "#46E1FF",
        grayLight: "#bbb",
      },
      height: {
        400: "400px",
        600: "600px",
        430: "430px",
      },
    },
  },
  plugins: [],
};
