/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#999999',
        navy: '#001E5A',
        blue: '#003C82',
        white: '#FFFFFF',
        orange: '#FF7D00',
        yellow: '#FAA41F',
      },
      textColor: {
        'gray-700': '#505050',
      },
    },
  },
  plugins: [],
};
