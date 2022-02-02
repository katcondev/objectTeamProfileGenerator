module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: {
        light: '#f8bbd0',
        DEFAULT: '#485933',
        dark: '#1e2616',
      },
      pink: {
        light: '#7b8c52',
        DEFAULT: '#e91e63',
        dark: '#880e4f',
      },
      gray: {
        DEFAULT: '#f2f2f2', 
        dark: '#3D413B',
  },
  variants: {
    extend: {},
  },
  plugins: [],
}}}
