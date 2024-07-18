import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        reckless: ['var(--font-reckless-neue)'],
        inter: ['var(--font-inter)'],
      },
      fontWeight: {
        'reckless-thin': '100',
        'reckless-light': '300',
        'reckless-normal': '400',
        'reckless-medium': '500',
        'reckless-semibold': '600',
        'reckless-bold': '700',
        'reckless-heavy': '900',
      },
      backgroundImage: {
        'why-better-bg': "url('/why-better-bg.png')",
        'calc-bg': "url('/calc-bg.png')",
        'investing-bg-1': "url('/investing-bg-1.png')",
        'track-idea-bg': "url('/track-ideas-bg.png')",
        'chart-bg': "url('/chart-bg.png')",
        'hero-bg-1': "url('/hero-bg-1.png')",
      },
      colors: {
        gray1: '#7B7E7D',
        appBlack: '#101516',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        'responsive-title': 'clamp(2.5rem, 5vw, 4.5rem)',
        'responsive-section-title': 'clamp(1.25rem, 5vw, 2.75rem)',
      },
      lineHeight: {
        'responsive-line-height-title': 'clamp(1.5rem, 5vw, 3.125rem)',
      },
      padding: {
        'responsive-x': 'clamp(1rem, 4.17vw, 3.75rem)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },

        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
