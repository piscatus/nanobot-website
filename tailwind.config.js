/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#90c6ff",
        secondary: "#ff90c6",
        tertiary: "#c6ff90",
        white: "#EDEDED",
        black: "#000000ff",
        gray: "#A1A1A1",
      },
      keyframes: {
        colors: {
          "0%, 100%": { color: "theme('colors.primary')" },
          "33%": { color: "theme('colors.secondary')" },
          "66%": { color: "theme('colors.tertiary')" },
        },
        colorbg: {
          "0%, 100%": { "background-color": "theme('colors.primary')" },
          "33%": { "background-color": "theme('colors.secondary')" },
          "66%": { "background-color": "theme('colors.tertiary')" },
        },
        colorfill: {
          "0%, 100%": { fill: "theme('colors.primary')" },
          "33%": { fill: "theme('colors.secondary')" },
          "66%": { fill: "theme('colors.tertiary')" },
        },
      },
      animation: {
        color: "colors 12s linear infinite",
        colorbg: "colorbg 12s linear infinite",
        colorfill: "colorfill 12s linear infinite",
      },
      height: {
        "dynamic-screen-minusnav": "calc(100dvh - theme('spacing.16'))",
        "screen-minusnav": "calc(100vh - theme('spacing.16'))",
      },
      minHeight: {
        "screen-minusnav": "calc(100vh - theme('spacing.16'))",
      },
      screens: {
        nontouch: { raw: "(hover: hover)" },
        speech: { raw: "speech" },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          padding: "0 theme('spacing.6')",
          "@screen sm": {
            padding: "0 theme('spacing.12')",
          },
          "@screen lg": {
            padding: "0 theme('spacing.44')",
          },
        },
        ".text-balance": { "text-wrap": "balance" },
      });
    },
  ],
};
