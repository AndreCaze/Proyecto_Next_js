/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      primary: '#8d99ae',
      secundary: '#edf2f4',
      terciary: '#6C7273',
      menu: '#6CA7D0',
      text: '#000000',
      transparent: '#56FAFF',
      hiper: '#2EADC7',
      alert_color: '#F01606',
      table: '#79E8F7'
    },
  },
  plugins: [],
}
