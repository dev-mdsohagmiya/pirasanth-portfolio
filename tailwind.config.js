/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      pdf: '8px',
    },
    extend: {
      colors: {
        primary: '#FFC35B',
        secondary: '#323444',
        'secondary-shaded': '#252734',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
