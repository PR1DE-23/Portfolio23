/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        
      }
    },
    extend: {
      colors: {
        bg: "rgb(var(--color-bg))",
        fg: "rgb(var(--color-fg))",
        muted: "rgb(var(--color-muted))",
        subtle: "rgb(var(--color-subtle))",
        focus: "rgb(var(--color-focus))"
      },
      fontFamily: {
        firaCode: ['Fira Code', 'monospace'],
        openSans: ['Open Sans', 'sans-serif']
      },
      screens: {
        xs: "600px"
      }
    }
  },
  plugins: []
};
