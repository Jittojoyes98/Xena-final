module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
       colors: {
         "primary": "#f90066"
       },
       backgroundImage:{
         'brand-background':"url('/public/Rectangle 609.svg')",
         'v-background':"url('/public/v-background.svg')",
       },
       boxShadow:{
        '3xl': '8px 8px 2px 0px rgba(97,90,90,0.75)',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '10': '10rem',
      },
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}