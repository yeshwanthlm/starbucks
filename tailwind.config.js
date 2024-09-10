/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      s_bold: ['SoDoSans_Semibold', 'Helvetica', 'sans-serif'],
      bold:['SoDoSans_Bold','Helvetica', 'sans-serif'],
      Regular:['SoDoSans_Regular','Helvetica', 'sans-serif'],
      Light:['SoDoSans_Light','Helvetica', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-hover': 'linear-gradient(359.89deg,rgba(0,0,0,.74) 19.45%,rgba(0,0,0,.383063) 55.07%,rgba(0,0,0,0) 73.63%)',
      },
      boxShadow: {
        'box': '0 4px 15px #a3a3a3ad',
        
      },
    },
  },
  plugins: [

  ],
}