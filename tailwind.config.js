/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand tokens — values mirror @theme in globals.css */
        almond:  "#fafaf9",   /* stone-50  — primary background */
        coffee:  "#1c1917",   /* stone-900 — primary text       */
        cartier: "#44403c",   /* stone-700 — accent             */
        gold:    "#e7e5e4",   /* stone-200 — borders            */
        /* Full stone scale */
        stone: {
          50:  "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
      },
      fontFamily: {
        sans:    ["Cabinet Grotesk", "system-ui", "sans-serif"],
        display: ["Cabinet Grotesk", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      borderRadius: {
        none: "0px",
        sm:   "0.125rem",
        DEFAULT: "0.375rem",
        md:   "0.5rem",
        lg:   "0.75rem",
        full: "9999px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
