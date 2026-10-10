/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand tokens — Ink & Navy */
        background: "#FFFFFF",  /* White      — clean page bg      */
        foreground: "#0F172A",  /* Ink        — near-black text    */
        primary:    "#1E3A8A",  /* Navy     — blue accent        */
        surface:    "#F1F5F9",  /* Slate-100  — cards/borders      */
        muted:      "#475569",  /* Slate-600  — secondary text     */
        /* Full stone scale */
        stone: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans:    ["Jost", "system-ui", "sans-serif"],
        display: ["Jost", "system-ui", "sans-serif"],
        serif:   ["Jost", "system-ui", "sans-serif"],
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

export default config;
