/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E3FFE6',
        secondary: '#F4F2DF',
        orange: '#F4E8E8',
        offOrange:'#FEE2E2',
        blue:'#0EA5E9',
        offBlue: '#DFE5ED',
        green: '#66D78F',
        dark: '#0F172A',
        white: '#FFFFFF',
        offWhite:'#F7F7F9',
        red:'#EF4444',
        yellow:'#FBBF24',
        violet: '#F3E8FF',
      },
    },
  },
  plugins: [],
}