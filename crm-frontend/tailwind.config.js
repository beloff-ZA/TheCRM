/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // scans all JS/TS files in src and subfolders
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: "#0a2540",
        gold: "#d4af37",
        white: "#ffffff",
      },
      flex: {
        "2/3": "2 2 0%",
        "1/3": "1 1 0%",
      },
    },
  },
  plugins: [],
};
