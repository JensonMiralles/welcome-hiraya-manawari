/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        champagne: {
          DEFAULT: '#D4AF7A',
          light: '#E1C699',
          dark: '#B8945F',
          muted: '#A08660',
        },
        midnight: {
          DEFAULT: '#0A0A0F',
          100: '#1A1A24',
          200: '#12121A',
          300: '#0F0F17',
        },
        ivory: {
          DEFAULT: '#F5F0EB',
          muted: '#E8E0D8',
        },
        warm: {
          gray: '#6B6560',
        },
        rose: {
          warm: '#8B6B6B',
          muted: '#6B4F4F',
          glow: '#A07070',
        },
        plum: {
          DEFAULT: '#2A1F2E',
          light: '#3D2E42',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-up-delay-1': 'fade-in-up 0.8s ease-out 0.15s forwards',
        'fade-in-up-delay-2': 'fade-in-up 0.8s ease-out 0.3s forwards',
        'fade-in-up-delay-3': 'fade-in-up 0.8s ease-out 0.45s forwards',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
