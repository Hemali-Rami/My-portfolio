/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        screens: {
          sm: "767px",
          xs: "480px",
          xxs:"360px",
          xxxs:"320px",
      },
    },
  },
  plugins: [],
};
