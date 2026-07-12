import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#18221f",
        palm: "#0b6b5d",
        clinic: "#f7f4ee",
        clay: "#b8502f",
        leaf: "#dce9cf",
        lagoon: "#d8efef"
      },
      boxShadow: {
        soft: "0 20px 70px rgba(24, 34, 31, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
