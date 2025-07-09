/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mocha: {
          base: "#1e1e2e", // Base (dark)
          mantle: "#181825", // Mantle (darker)
          crust: "#11111b", // Crust (darkest)

          text: "#cdd6f4", // Text (light)
          subtext1: "#bac2de", // Subtext 1
          subtext0: "#a6adc8", // Subtext 0

          overlay2: "#9399b2", // Overlay 2
          overlay1: "#7f849c", // Overlay 1
          overlay0: "#6c7086", // Overlay 0

          surface2: "#585b70", // Surface 2
          surface1: "#45475a", // Surface 1
          surface0: "#313244", // Surface 0

          blue: "#89b4fa", // Accent: Blue
          lavender: "#b4befe", // Accent: Lavender
          sapphire: "#74c7ec", // Accent: Sapphire
          pink: "#f5c2e7", // Accent: Pink
          mauve: "#cba6f7", // Accent: Mauve
          red: "#f38ba8", // Accent: Red
          peach: "#fab387", // Accent: Peach
          yellow: "#f9e2af", // Accent: Yellow
          green: "#a6e3a1", // Accent: Green
          teal: "#94e2d5", // Accent: Teal
          flamingo: "#f2cdcd", // Accent: Flamingo
          rosewater: "#f5e0dc", // Accent: Rosewater
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
