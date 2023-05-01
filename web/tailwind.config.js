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
        darkBlue: '#020C1B',
        'darkGray-700': '#282828',
        'darkGray-900': '#191919',
        mediumGray: '#8892B0',
        mediumGreen: '#2D372B',
        lightGreen: '#7ED56F',
        darkGreen: '#28B485',
        darkPink: '#F31260',
        customYellow: '#FFB900'
      },
    }
  },
  plugins: [],
}
