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
        cartier: "#f5f5f4",
        coffee: "#d6d3d1",
        almond: "#0c0a09",
        gold: "#44403c",
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
            primary: "#f5f5f4",
            background: "#0c0a09",
            foreground: "#d6d3d1",
            focus: "#f5f5f4",
          },
        },
      },
    }),
  ],
};
