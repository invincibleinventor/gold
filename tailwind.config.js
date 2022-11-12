/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
   
    extend: {
      screens:
      {
        '3xl': '1640px',
      },
      backgroundImage:
         {
           'banner': "url('../banner.svg')"
         },
         fontFamily: {
          neue: ["Neue Machina", "sans"],
          mori: ["Mori Gothic", "sans"],
        },
     }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    
  ],
  
  variants: {
    scrollbar: ['rounded']
}
};
