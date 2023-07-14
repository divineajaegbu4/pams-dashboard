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
        mycolor: '#fff',
        fd0: '#fd0',
        background: "#F7FAFC",
        active: "#02469438",
        'corn-flower': '#6495ED'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },


    },
    // colors: {
    //   black: "#4A5568",
    //   orange: "#e6af0a"
    // },

    // colors: {
    //   // Custom colors go here
    //   fd0: '#fd0',
    //   black: "#3e3e3e",

    // },
  },
  plugins: [],
}
