import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cartier: "#3a3a3a",
        coffee: "#1a1a1a",
        almond: "#f5f5f5",
        gold: "#d4d4d4",
      },
      fontFamily: {
        sans: ["var(--font-josefin)", "sans-serif"],
        serif: ["var(--font-josefin)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#3a3a3a",
            background: "#f5f5f5",
            foreground: "#1a1a1a",
            focus: "#3a3a3a",
          },
        },
      },
    }),
  ],
};
