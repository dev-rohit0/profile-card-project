module.exports = {
  content: ["*"],
  theme: {

    screens: {
      'mobile': '375px',
      'desktop': '720px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        'darkCyan': 'hsl(185, 75%, 39%)',
        'darkGray': 'hsl(0, 0%, 59%)',
        'veryDarkDesaturatedBlue': 'hsl(229, 23%, 23%)',
        'darkGrayishBlue': 'hsl(227, 10%, 46%)'
      },
      fontFamily: {
        'kumbh':['Kumbh Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}