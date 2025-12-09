/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        background: "rgb(var(--color-background ))",
        foreground: "rgb(var(--color-foreground))",
        acent: "rgb(var(--color-acent))"
      },
      fontFamily: {
        firaCode: ['Fira Code', 'monospace'],
        openSans: ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};
