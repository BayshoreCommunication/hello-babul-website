const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 25px 60px -15px rgba(78, 116, 30, 0.55)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "float-slow": "float 3s ease-in-out infinite",
      },
      fontFamily: {
        baskervville: ["var(--font-baskervville)", "serif"],
        acumin: ["var(--font-acumin)", "sans-serif"],
        lumios: ["var(--font-lumios)", "cursive"],
        sansation: ["Sansation", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["28px", { lineHeight: "1.3", fontWeight: "500" }],
        body: ["16px", { lineHeight: "1.75", fontWeight: "400" }],
        caption: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      colors: {
        "prestige-yellow": "#FFCE07",
        "prestige-black": "#000000",
        "prestige-gray": "#6B7280",
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#BA8E2D", // primary-one
            secondary: "#BBD8DB", // primary-two
            background: "#FFFFFF", // secondary-one
            foreground: "#FFF4ED", // secondary-two
          },
        },
      },
    }),
  ],
};

module.exports = config;
