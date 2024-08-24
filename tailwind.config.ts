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
        devSky: '#a3e4d7',
        devSkyLight: '#dff3f0',
        devPurple: '#d2b4de',
        devPurpleLight: '#f3e4f9',
        devYellow: '#abebc6',
        devYellowLight: '#d5f0e0',
      }
    },
  },
  plugins: [],
};
export default config;
