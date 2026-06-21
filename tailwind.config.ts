import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Page & card backgrounds
        warm: {
          50: '#f7f5f1',
          100: '#f4f2ee',
          200: '#efece6',
          300: '#e7e4de',
          400: '#e2ddd5',
          500: '#dcd7cf',
          600: '#d2ccc2',
        },
        // Sage green (primary accent)
        sage: {
          100: '#e3ede2',
          200: '#c3d3c1',
          300: '#b9cdb7',
          400: '#9bb59a',
          500: '#8fa68e',
          600: '#6e8a6c',
        },
        // Warm ink (text)
        ink: {
          50: '#a39d92',
          100: '#8a857c',
          200: '#7a756c',
          300: '#5b574f',
          400: '#3b3833',
          500: '#2f2c27',
        },
        // Secondary accents
        sky: '#93acbd',
        terra: '#c6a394',
        chip: '#ece9e3',
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        card: '14px',
        'card-lg': '18px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(60,55,48,.04), 0 12px 26px -18px rgba(60,55,48,.18)',
        'card-lg': '0 1px 2px rgba(60,55,48,.04), 0 16px 32px -20px rgba(60,55,48,.22)',
      },
      keyframes: {
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(143,166,142,.5)' },
          '70%': { boxShadow: '0 0 0 7px rgba(143,166,142,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(143,166,142,0)' },
        },
      },
      animation: {
        pulse: 'pulse 2.4s infinite',
      },
    },
  },
}

export default config
