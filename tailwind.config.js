/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light': {
          1: '#ffffff',
          2: '#fafafa',
          3: '#f5f5f5',
          4: '#f0f0f0',
          5: '#d9d9d9',
          6: '#bfbfbf'
        },
        'neutral': '#8c8c8c',
        'dark': {
          1: '#595959',
          2: '#434343',
          3: '#262626',
          4: '#1f1f1f',
          5: '#141414',
          6: '#000000'
        }
      }
    },
    screens: {
      'sm': '425px', // 640px
      'md': '768px', // 768px
      'lg': '1024px', // 1024px
      'xl': '1280px', // 1280px
      '2xl': '1536px', // 1536px
    },
    fontFamily: {
      'Gotham': ['Gotham', 'sans-serif'],
      'GothamItalic': ['GothamItalic', 'sans-serif'],
      'GothamBold': ['GothamBold', 'sans-serif'],
      'GothamBoldItalic': ['GothamBoldItalic', 'sans-serif']
    }
  },
  plugins: []
}
