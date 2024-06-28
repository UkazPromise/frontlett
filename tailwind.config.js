/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(97.5deg, rgba(33, 33, 33, 1) -23.93%, rgba(166, 166, 166, 0) 188.9%)',
      },
      colors: {
        "custom-teal": "#20888F",
        "custom-closewhite": "#F9F9F9",
        "custom-graywhite": "#F4F4F4",
      },
    },
  },
  plugins: [],
};
