/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      width: {
        18: "4.5rem",
        25: "6.25rem",
      },
      height: {
        18: "4.5rem",
        25: "6.25rem",
      },
      margin: {
        22: "5.375rem",
        13: "3.125rem",
        15: "3.25rem",
        18: "4.5rem",
        23: "1.4375rem",
        25: "5.75rem",
      },
      padding: {},
      colors: {
        brand: {
          50: "##A5A4A4",
          100: "#666666;",
          200: "linear-gradient(180deg, #01aeef 0%, #0093e9 100%)",
          300: "#83a0f6",
          400: "#5a80f3",
          500: "#3860f0",
          600: "#2c4ec6",
          700: "#213c9c",
          800: "#172a72",
          900: "#0b183f",
        },
      },
    },

    fontFamily: {
      sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      serif: ["Roboto", "Georgia", "Cambria", "serif"],
      mono: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/forms"), // plugin định nghĩa các lớp CSS cho các thành phần biểu mẫu
    require("@tailwindcss/typography"), // plugin định nghĩa các lớp CSS cho kiểu chữ và định dạng văn bản
    require("@tailwindcss/aspect-ratio"),
  ],
};
