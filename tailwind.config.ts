import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        brand: {
          forest: '#1E3A2F',
          'forest-hover': '#2d5544',
          beige: '#F5F0EA',
          charcoal: '#1A1A1A',
          mid: '#555555',
          muted: '#888880',
          light: '#AAAAAA',
          rule: '#D8D2C8',
        },
      },
      spacing: {
        '4.5': '1.125rem',
        '22px': '22px',
        '28px': '28px',
        '36px': '36px',
        '44px': '44px',
        '60px': '60px',
        '80px': '80px',
        '100px': '100px',
      },
      fontSize: {
        '52px': '52px',
        '76px': '76px',
        '20px': '20px',
        '28px': '28px',
        '32px': '32px',
        '15px': '15px',
        '19px': '19px',
      },
      lineHeight: {
        '0.95': '0.95',
        '1.1': '1.1',
        '1.5': '1.5',
        '1.55': '1.55',
        '1.8': '1.8',
      },
      letterSpacing: {
        tightest: '-0.01em',
        wider: '0.08em',
        widest: '0.1em',
        'super-wide': '0.18em',
        'ultra-wide': '0.2em',
      },
      maxWidth: {
        '460px': '460px',
        '620px': '620px',
        '780px': '780px',
      },
      opacity: {
        '0.032': '0.032',
        '0.18': '0.18',
      },
    },
  },
  plugins: [],
};
export default config;