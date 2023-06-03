/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
     "doctor-primary": "#07332F",
     "doctor-btn": "#F7A582",
     "doctor-input": "#133D39",
     "doctor-login-input": "#F3F3F3",
     "dashboard-body": "#F1F5F9",
     'white': '#ffffff',
     'purple': '#3f3cbb',
     'midnight': '#121063',
     'metal': '#565584',
     'tahiti': '#3ab7bf',
     'silver': '#ecebff',
     'bubble-gum': '#ff77e9',
     'bermuda': '#78dcca',

    }
  },
  plugins: [require("daisyui")],

}