/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      width: {
        0.25: "1px",
        0.75: "0.1875rem",
        1.25: "0.3125rem",
        15: "3.75rem",
        18: "4.5rem",
        25: "6.25rem",
        60.75: "15.1875rem",
        14.5: "3.625rem",
      },
      height: {
        0.25: "1px",
        0.75: "0.1875rem",
        18: "4.5rem",
        15: "3.75rem",
        15.5: "3.875",
        25: "6.25rem",
      },
      margin: {
        0.75: "0.1875rem",
        3.25: "0.8225rem",
        4.25: "1.0625rem",
        5.25: "1.3125rem",
        7.5: "1.875rem",
        22: "5.375rem",
        13: "3.125rem",
        15: "3.25rem",
        18: "4.5rem",
        23: "1.4375rem",
        25: "5.75rem",
      },
      padding: {
        42.75: "10.75rem",
        4.125: "1.03125rem",
        2.875: "0.71875rem",
        42.25: "10.5625rem",
      },
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
        active: {
          50: "#0feaf8",
        },
      },
      backgroundImage: {
        logo: "url('https://s3-alpha-sig.figma.com/img/b6e8/93c4/d34c78218f2e618bae4d316ce9b46881?Expires=1681084800&Signature=Yv2c95Bg-CvCb49J4aWJIcbWJZq1px819CvRwzL6RyiqtyuPmEeiFAuzgQFs1Y~jipWWKZnIiK-AKZZ8kS9TAZTo7ZtIhzMoyHykw5V8wk0Yal1fZ229Uf852j7-2MucJfXEpB~hpOmBrjtdPT1HlENkM2rX0T9qPDksf8WSMWeKJkbI4x3SjEeyXiagWKMSbpC01~Rv9YcW19~Xt26IzPSvaugolwWGXA2rtMexwSR~k227LrpZoUqlWD-ydzU6Zd0yk~CzWo1w0VHaBU8UQYsiEew9HZqWHh3sRjFjrBXTeD1-GzRRSBFsWCFr-m6-kN~b1BJUYPh-mLkg1jSoTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
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
    require("@tailwindcss/line-clamp"),
  ],
};
