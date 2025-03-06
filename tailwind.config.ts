import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': {
          '50': '#FFF0F5',
          '100': '#FFE4EE',
          '200': '#FFD4E5',
          '300': '#FFC1DB',
          '400': '#FFA4C6',
          '500': '#FF80AB',
          '600': '#E9578C',
          '700': '#D4367D',
          '800': '#B71C64',
          '900': '#880E4F',
        },
        'pink': {
          '50': '#FFF0F5',
          '100': '#FFE4EE',
          '200': '#FFD4E5',
          '300': '#FFC1DB',
          '400': '#FFA4C6',
          '500': '#FF80AB',
          '600': '#FF4081',
          '700': '#F50057',
          '800': '#C51162',
          '900': '#880E4F',
        },
      },
      fontFamily: {
        'dancing': ['var(--font-dancing)', 'cursive'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'girly': '0 4px 10px rgba(255, 128, 171, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;