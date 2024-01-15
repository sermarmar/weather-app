const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        colors: {
            'indigo': '#100E1D',
            'white': '#E7E7EB',
            'bluedark': '#1D223A',
            'gray': colors.gray,
            'blue': '#3C47EA'
        },
        extend: {},
    },
    plugins: [],
}