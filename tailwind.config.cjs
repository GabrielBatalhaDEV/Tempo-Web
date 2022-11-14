/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 24,
      xl: 32,
    },

    colors: {
      white: {
        900: "#ffffff",
        300: "#FAFAFC",
      },

      black: {
        900: "#1C1C28",
        600: "#28293D",
      },

      red: {
        900: "#FF3B3B",
      },

      blue: {
        900: "#0063F7",
      },
    },

    extend: {},
  },
  plugins: [],
};
