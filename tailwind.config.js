/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // AjansRatel ana rengi
        "ajans-bg": "#04000d",
        "ajans-bg-dark": "#020008",
        "ajans-bg-light": "#0a0a2e",
      },
    },
  },
  plugins: [],
};
