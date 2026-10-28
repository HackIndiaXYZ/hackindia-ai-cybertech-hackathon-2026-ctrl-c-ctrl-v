/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#effaf8',
          100: '#d8f1ed',
          200: '#b0e1da',
          300: '#82cfc3',
          400: '#51b7aa',
          500: '#27978b',
          600: '#0F766E',
          700: '#115e59',
          800: '#164e4a',
          900: '#16324F',
          950: '#10263b'
        },
        sky: {
          50: '#effaf8',
          100: '#d8f1ed',
          200: '#b0e1da',
          300: '#82cfc3',
          400: '#51b7aa',
          500: '#27978b',
          600: '#0F766E',
          700: '#115e59',
          800: '#164e4a',
          900: '#16324F',
          950: '#10263b'
        },
        indigo: {
          50: '#f1f5f8',
          100: '#e3eaf0',
          200: '#c7d4e0',
          300: '#a3b7c9',
          400: '#7894ad',
          500: '#526f89',
          600: '#3b5873',
          700: '#2b4560',
          800: '#203b57',
          900: '#16324F',
          950: '#10263b'
        },
        emerald: {
          50: '#f0f7f3',
          100: '#dcece2',
          200: '#bddbc9',
          300: '#91c2a5',
          400: '#65a77f',
          500: '#438e63',
          600: '#34784f',
          700: '#287A58',
          800: '#226348',
          900: '#1b4e3a',
          950: '#123628'
        },
        amber: {
          50: '#fff8eb',
          100: '#fcecc9',
          200: '#f7d99a',
          300: '#efbf63',
          400: '#dda139',
          500: '#c6841f',
          600: '#b27115',
          700: '#A8640A',
          800: '#8a4f08',
          900: '#70410a',
          950: '#432407'
        },
        red: {
          50: '#fff3f3',
          100: '#ffe1e2',
          200: '#ffc8cb',
          300: '#ffa0a6',
          400: '#f66e78',
          500: '#e54855',
          600: '#cf3341',
          700: '#B4232F',
          800: '#91202a',
          900: '#781f27',
          950: '#430d13'
        },
        brand: {
          teal: '#0F766E',
          navy: '#16324F',
          background: '#F5F8FA',
          muted: '#52677D',
          border: '#DFE7EC',
          success: '#287A58',
          warning: '#A8640A',
          critical: '#B4232F'
        },
        kiosk: {
          blue: '#0F766E',
          lightBlue: '#effaf8',
          green: '#287A58',
          amber: '#A8640A',
          red: '#B4232F',
          ayush: '#287A58'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
