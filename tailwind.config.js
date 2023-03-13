/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#6b48ff",
        grey: "#f2f4f6",
        cyan: "#1ee3cf",
        black: "#000000",
        linkcolor: "#7e6eda",
      },
    },
  },
  plugins: [],
};
