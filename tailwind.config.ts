import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2E7D32",
          dark: "#1B5E20",
          accent: "#4CAF50",
          soft: "#66BB6A"
        }
      }
    }
  },
  plugins: []
};

export default config;
