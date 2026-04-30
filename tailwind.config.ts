import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'vardent-g1':   '#0A4A30',
        'vardent-g2':   '#0F5E3D',
        'vardent-g3':   '#168A5A',
        'vardent-g4':   '#1FAD72',
        'vardent-tint': '#EAF5EF',
        'vardent-pale': '#F2FAF5',
        'vardent-ink':  '#0C1117',
        'vardent-ink2': '#2D3440',
        'vardent-ink3': '#5A6474',
        'vardent-ink4': '#8D96A3',
        'vardent-bg':   '#FAFAF8',
        'vardent-bg2':  '#F4F3EE',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
      },
      boxShadow: {
        'vardent-xs': '0 1px 2px rgba(0,0,0,0.04)',
        'vardent-sm': '0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'vardent-md': '0 8px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        'vardent-lg': '0 20px 60px rgba(0,0,0,0.10), 0 8px 20px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        'vardent-sm': '8px',
        'vardent-md': '14px',
        'vardent-lg': '20px',
        'vardent-xl': '28px',
      },
    },
  },
  plugins: [],
};

export default config;
