/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      spacing: {
        'left-try': '36rem',
        'top-try': '124px',
        'left-2':'487px',
        'top261': '305px',
        'left311': '311px',
        '15px': '15px',
        '19px': '19x',
        '358px':'358px',
        '536': '536px',
      },
      fontSize: {
        '2xl': ['25px', {
          lineHeight: '2.188rem',
          
          
        }],
      },
      width: {
        'w-2': '600px',
        '560': '560px',
        '501': '501px',
      },
      colors: {
        'regal-blue': '#C5C5D2',
        'blue': '#222132',
        'ghia':'#C5C5D2',
        'footer-c':'#2F2E41',
        'ash':'#9291A1',
      },
      height: {
        '428': '428px',
      },
      padding: {
        '5px': '5px',
      }
      
    },
  },
  plugins: [],
}

