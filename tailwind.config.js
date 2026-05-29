/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "rgba(var(--color-bg-primary), <alpha-value>)",
          secondary: "rgba(var(--color-bg-secondary), <alpha-value>)",
          card: "rgba(var(--color-bg-card), <alpha-value>)",
        },
        text: {
          primary: "rgba(var(--color-text-primary), <alpha-value>)",
          secondary: "rgba(var(--color-text-secondary), <alpha-value>)",
        },
        accent: {
          orange: "rgba(var(--color-accent-orange), <alpha-value>)",
          purple: "rgba(var(--color-accent-purple), <alpha-value>)",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      spacing: {
        // Explicitly ensuring 8px grid alignments
        'grid-1': '8px',
        'grid-2': '16px',
        'grid-3': '24px',
        'grid-4': '32px',
        'grid-5': '40px',
        'grid-6': '48px',
        'grid-8': '64px',
        'grid-12': '96px',
      }
    },
  },
  plugins: [],
}
