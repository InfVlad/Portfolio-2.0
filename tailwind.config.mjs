/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#0E100F",
        "primary-lila": "#A98AFF",
        "primary-blue": "#17D1F1",
        "secondary-blue": "#18A0FB",
        "primary-text": "#FFFFE3",
        "secondary-text": "#D1D1D1",
        bline: "#323228",
        card: "#191917",
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
