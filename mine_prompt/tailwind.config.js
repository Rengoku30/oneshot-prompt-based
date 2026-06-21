/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-fg': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-fg': 'var(--accent-foreground)',
        border: 'var(--border)',
        'border-light': 'var(--border-light)',
        card: 'var(--card)',
        'card-fg': 'var(--card-foreground)',
        ring: 'var(--ring)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // dramatic editorial scale
        '7xl': ['6rem', { lineHeight: '1' }],   // 96px
        '8xl': ['8rem', { lineHeight: '1' }],   // 128px
        '9xl': ['10rem', { lineHeight: '1' }],  // 160px
        '10xl': ['13rem', { lineHeight: '0.9' }], // 208px — oversized statements
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      transitionDuration: {
        '0': '0ms',
      },
      borderRadius: {
        none: '0px',
        sm: '0px',
        DEFAULT: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'rise': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out both',
        'rise': 'rise 250ms ease-out both',
      },
    },
  },
  plugins: [],
}
