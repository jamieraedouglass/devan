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
          green: '#1E3A2F',
          beige: '#F5F0EA',
          charcoal: '#1A1A1A',
          gray: '#555555',
        },
      },
      spacing: {
        '4.5': '1.125rem', // Used in RecentItem.tsx
      },
    },
  },
  plugins: [],
};
export default config;
