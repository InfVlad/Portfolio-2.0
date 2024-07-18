/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#0E100F",
        "primary-lila": "#A98AFF",
        "primary-blue": "#17d1f1",
        "secondary-blue": "#18A0FB",
        bline: "rgb(50 50 40)",
      },
      dropShadow: {
        dark: "0 -10px 20px rgb(23, 209, 241,0.3)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          "2xl": "1300px",
        },
      },
    },
  },
  plugins: [],
};
