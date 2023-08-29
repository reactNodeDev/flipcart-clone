/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        searchBarBg : '#F0F5FF',
        primaryButtonBg : '#427AE9'
        
      },
      textColor : {
        searchBarText : '#717478',
      },
      boxShadow : {
        BottomShadow : 'inset 0 -40px 30px -30px #64748b'
      }
    },
  },
  plugins: [],
}

