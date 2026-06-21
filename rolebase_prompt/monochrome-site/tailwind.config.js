/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
        muted: "#F5F5F5",
        mutedForeground: "#525252",
        accent: "#000000",
        accentForeground: "#FFFFFF",
        border: "#000000",
        borderLight: "#E5E5E5",
        card: "#FFFFFF",
        cardForeground: "#000000",
        ring: "#000000",
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.5rem',
        '6xl': '4.5rem',
        '7xl': '6rem',
        '8xl': '8rem',
        '9xl': '10rem',
      },
      borderRadius: {
        none: '0px',
      },
      borderWidth: {
        hairline: '1px',
        thin: '1px',
        medium: '2px',
        thick: '4px',
        ultra: '8px',
      },
    },
  },
  plugins: [],
}
