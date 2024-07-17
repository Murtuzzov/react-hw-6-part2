/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryYellow: "#F9B800",
      },
      maxWidth: {
        headerWidth: "1920px",
      },
      width: {
        navWidth: "1600px",
        buttonBoxWidth: "600px",
      },
    },
  },
  plugins: [],
};
