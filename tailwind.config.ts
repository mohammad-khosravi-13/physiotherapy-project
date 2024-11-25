import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      plugins: [require("daisyui")],
      boxShadow: {
        custom: "0 10px 20px rgba(.1, .1, .1, .1)",
      },
      screens: {
        xs: "480px",
        lg: "1536px",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
