/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: { "0.5xl": "10px" },
      spacing: {
        22: "5.5rem",
        2.001: "-0.5rem",
      },
      width: {
        0.25: "1px",
        0.75: "0.1875rem",
        1.25: "0.3125rem",
        15: "3.75rem",
        18: "4.5rem",
        25: "6.25rem",
        26: "6.5rem",
        60.75: "15.1875rem",
        14.5: "3.625rem",
        12.25: "3.0625rem",
        13: "3.25rem",
        10.75: "2.6875rem",
        31.75: "7.9375rem",
        43.25: "10.8125rem",
        46.5: "11.625rem",
        47: "11.75rem",
        66: "15.5rem",
        59.75: "14.9375rem",
        190: "40rem",
        38: "9.5rem",
        42: "10.5rem",
        112: "28rem",
        128.5: "32.125rem",
        66: "16.5rem",
        120: "31rem",
        100: "26rem",
        92: "20.5rem",
        81: "18rem",
        70: "13rem",
        102: "25.5rem",
        49.5: "12.375rem",
        91: "23rem",
        191: "47.5rem",
        89.5: "22.375rem",
        154.25: "38.5625rem",
        77: "19.25rem",
        38.5: "9.625rem",
        111: "27.75rem",
      },
      height: {
        0.25: "1px",
        0.75: "0.1875rem",
        14.0575: "3.514375rem",
        14.25: "3.5625rem",
        18: "4.5rem",
        15: "3.75rem",
        15.5: "3.875",
        25: "6.25rem",
        12.25: "3.0625rem",
        13: "3.25rem",
        31.75: "7.9375rem",
        43.25: "10.8125rem",
        38: "9.5rem",
        34: "8.5rem",
        38.75: "9.6875",
        41: "10.25rem",
        47: "11.75rem",
        58: "16.5rem",
        54: "13.5rem",
        59.75: "14.9375rem",
        26: "6.5rem",
        200: "32rem",
        47.5: "11.875rem",
        42: "10.5rem",
        scroll: "60.5vh",
        10.75: "2.6875rem",
        119.5: "29.875rem",
        15.25: "3.8125rem",
        26.75: "6.6875rem",
        25.75: "6.4375rem",
        22.25: "5.5625rem",
        13.25: "3.3125rem",
      },
      margin: {
        0.75: "0.1875rem",
        4.75: "1.1875rem",
        3.25: "0.8225rem",
        4.25: "1.0625rem",
        5.25: "1.3125rem",
        6.25: "1.5625rem",
        7.25: "1.8125rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        11.75: "2.9375rem",
        21: "5.25rem",
        22: "5.375rem",
        13: "3.125rem",
        15: "3.25rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        22: "5.5rem",
        23: "1.4375rem",
        23.5: "5.75rem",
        24.25: "6.0625rem",
        25: "5.75rem",
        26.5: "6.625rem",
        10.5: "2.625rem",
        7.5: "1.875rem",
        19: "4.75rem",
      },
      padding: {
        1.25: "0.3125rem",
        42.75: "10.75rem",
        4.125: "1.03125rem",
        2.875: "0.71875rem",
        42.25: "10.5625rem",
        18: "4.5rem",
        22: "5.5rem",
      },
      colors: {
        custom: {
          bg: "#A5A4A4",
          icon: "#666666;",
          border: "#ADADAD",
          sum: "#F477FF",
          "btn-primary": "#00C2FF",
          "btn-success": "#00FF19",
          "btn-text": "#FFFDFD",
        },
        active: {
          50: "#0feaf8",
        },
      },
      backgroundImage: {
        logo: "url('https://s3-alpha-sig.figma.com/img/b6e8/93c4/d34c78218f2e618bae4d316ce9b46881?Expires=1681084800&Signature=Yv2c95Bg-CvCb49J4aWJIcbWJZq1px819CvRwzL6RyiqtyuPmEeiFAuzgQFs1Y~jipWWKZnIiK-AKZZ8kS9TAZTo7ZtIhzMoyHykw5V8wk0Yal1fZ229Uf852j7-2MucJfXEpB~hpOmBrjtdPT1HlENkM2rX0T9qPDksf8WSMWeKJkbI4x3SjEeyXiagWKMSbpC01~Rv9YcW19~Xt26IzPSvaugolwWGXA2rtMexwSR~k227LrpZoUqlWD-ydzU6Zd0yk~CzWo1w0VHaBU8UQYsiEew9HZqWHh3sRjFjrBXTeD1-GzRRSBFsWCFr-m6-kN~b1BJUYPh-mLkg1jSoTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
        "icon-cart":
          "url('https://s3-alpha-sig.figma.com/img/ce36/d3d0/9dedaa937941fd09c5856bc305270cb6?Expires=1681084800&Signature=hI8y7MaK04Wex~26PBX3azwfPGftd0VwcZfZ8jTZorvBGG4kcOIy4AaTiZCfJvFBJywYxag9ZtTQbITBEq6UoUAB18Db2q4LPppjSxCEXwS62kdsF~yuG4lFZvwQiWSuBDY-G8yUgExPOLo~uJ7m6O-Jb7fixXNjmEMAjnHa663yRmBaxtIT5JAHh6nY6HeKqTMTtgzlw64n0utmwFT74hQxqHzubT9fUISSnFNqTFl9~wbVXRKMCK8NxBn2LP0gKK491qpSs-wPIh61RBs4UlFqGGliAQoRWLaQie2UoRBYy66bG8B5sVaxT07q0F4K-081GBaYHVxdHYhDuZ9XLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
      },
      fontSize: {
        "2.5xl": "1.75rem",
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
