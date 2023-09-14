/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: '#e0d6d5',
      secondary: '#F5F5F5',
      tertiary: '#F5F5F5',
      white: '#f8fafc',
      dark: '#F5F5F5',
      text_dark: '#283032',
      icon: '#b16c51',
    },
    fontSize: {
      xs: '0.4rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.115rem',
      header: '6.5rem',
    },
    fontFamily: {
      montserrat: ['var(--font-montserrat)'],
      lovelo: ['var(--font-lovelo)'],
    },
  },
  plugins: [],
}
