// tailwindHamburgers = require('tailwind-hamburgers');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html,js}"
  ],
  darkMode : 'class',
  theme: {
    screens: {
      'xs' : '530px',
      // 'xs2' : '520px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      "sm2" : '720px',
      'md': '768px',
      'madThree' : '772px',
      'mdFour' : '798px',
      // => @media (min-width: 768px) { ... }
      // "md2" : "790px" ,
      'md2': '820px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      container : {
        "container" : "true",
      },
      maxHeight : {
        '26' : '104px'
      },
      transitionProperty : {
        'max-height': 'max-height',
      },
      screens : {
        'md2' : "930px",
        'md3' : '880px',
        'xs' : '490px',
        'lg2': '1100',
        'xl': '1280px',
        'xl2' : '1480px'
      },
      borderRadius : {
        '6xl' : '200px'
      },
      fontFamily : {
        "Dana" : "dana",
        "Dana-Medium" : "dana-Medium", 
        "Dana-DemiBold" : "dana-DemiBold",
        "Dana-Bold" : "dana-Bold",
        "Dana-Light" : "dana-Light"
      },
      
      width: {
        "60" : "250px"
      },
      height: {
        "140" : "450px",
        "88" : "350px",
        '25' : '100px'
      },
      colors : {
        Primary_color :  '#03071c', //'#040921' //'#11151c'
        light : 'rgba(23, 23, 143, 0.81)',
        heavy : 'rgba(2, 2, 49, 0.941)',
        whiteGlowing: 'rgba(255, 255, 255, 1)', // Pure white color
      },
      animation: {
        'pause': 'paused',
      },
      borderRadius : {
        '6xl' : '200px',
        '4xl' : '121px'
      },
      transitionProperty: {
        'animation': 'animation-play-state',
      },
      height: {
        '98vh': '98vh',
      },
    }
  },
  plugins: [ 
    function ({addVariant}) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
    // tailwindHamburgers
  ]
};



