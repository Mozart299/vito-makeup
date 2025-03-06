/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': {
          '50': '#F8F3EE',
          '100': '#F3EBE3',
          '200': '#EDE0D4',
          '300': '#E6D5C6',
          '400': '#DABDA7',
          '500': '#D4A89A',
          '600': '#C09891',
          '700': '#A78B84',
          '800': '#8D7973',
          '900': '#6A5A55',
        },
        'pink': {
          '50': '#FFF0F5',
          '100': '#FFE4EE',
          '200': '#FFD4E5',
          '300': '#FFC1DB',
          '400': '#FFADD1',
          '500': '#FF96C6',
          '600': '#FF80BC',
          '700': '#FF69B0',
          '800': '#FF5AA8',
          '900': '#FF429A',
        },
      },
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
        'playfair': ['"Playfair Display"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'girly': '0 4px 10px rgba(212, 168, 154, 0.2)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}