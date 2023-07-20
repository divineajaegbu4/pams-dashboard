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
        'active': "rgba(2,70,148,.2196078431372549)",
        'corn-flower': '#6495ED',
        "black": "#2c2c2c",
        "shadow": "rgba(0, 0, 0, 0) 0px 0px 0px 0px"
        // 'pink-100': '#FFC0CB',
        // 'blue-100': '#1E90FF',
        // 'red-100': '#FF0000',
        // 'blue-200': '#0000FF',
        // 'corn-flower-100': '#6495ED',
      },
      gridTemplateColumns: {
        '2x100': 'repeat(2, 250px)',
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
