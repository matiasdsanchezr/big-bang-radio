import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FF3300",
      },
      keyframes: {
        playing: {
          "0%": { transform: "scale(1)", fill: "white" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)", fill: "white" },
        },
      },
      animation: {
        playing: "playing 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
