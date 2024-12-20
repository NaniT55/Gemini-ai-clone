/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-text": "linear-gradient(45deg, #ff6b6b, #f7b42c)", // Example gradient
      },
      animation: {
        loader: "loader 3s linear infinite",
      },
      keyframes: {
        loader: {
          "0%": {
            "background-position": "-800px 0px",
          },
          "100%": {
            "background-position": "800px 0px",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    function ({ addUtilities }) {
      addUtilities({
        ".bg-clip-text": {
          backgroundClip: "text",
          WebkitBackgroundClip: "text", // for Safari
          color: "transparent",
        },
        ".text-fill-transparent": {
          "-webkit-text-fill-color": "transparent", // Safari-specific
        },
      });
    },
  ],
};
