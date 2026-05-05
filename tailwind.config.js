/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand tokens — White / Midnight / Moss-900 */
        background: "#FFFFFF",  /* White      — clean page bg      */
        foreground: "#14532d",  /* Moss-900   — deep green text    */
        primary:    "#1C2B40",  /* Midnight   — navy accent        */
        surface:    "#F5F1EA",  /* Off-white  — cards/borders      */
        muted:      "#4a7459",  /* Muted green — secondary text    */
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
        sans:    ["Jost", "system-ui", "sans-serif"],
        display: ["Jost", "system-ui", "sans-serif"],
        serif:   ["Cormorant Garamond", "Georgia", "serif"],
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
