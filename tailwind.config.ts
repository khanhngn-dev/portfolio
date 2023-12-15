import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-850': '#1b1b1b',
        primary: '#ba68c8',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
