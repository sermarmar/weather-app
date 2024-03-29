const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        colors: {
            'indigo': {
                '50': '#f0f2fd',
                '100': '#e4e7fb',
                '200': '#ced3f7',
                '300': '#b0b6f1',
                '400': '#9093e9',
                '500': '#7a75df',
                '600': '#695bd0',
                '700': '#5b4bb7',
                '800': '#4a3f94',
                '900': '#3f3976',
                '950': '#100e1d',
            },
            'white': '#E7E7EB',
            'bluedark': {
                '50': '#f2f5fc',
                '100': '#e2eaf7',
                '200': '#ccdaf1',
                '300': '#a9c2e7',
                '400': '#80a3da',
                '500': '#6285cf',
                '600': '#4e6bc2',
                '700': '#445ab1',
                '800': '#3c4b91',
                '900': '#344174',
                '950': '#1d223a',
            },
            'gray': colors.gray,
            'blue': {
                '50': '#edf4ff',
                '100': '#dfeaff',
                '200': '#c5d8ff',
                '300': '#a2bdff',
                '400': '#7d98fc',
                '500': '#5e73f6',
                '600': '#3c47ea',
                '700': '#333acf',
                '800': '#2c33a7',
                '900': '#2b3384',
                '950': '#191b4d',
            },
            'transparent': colors.transparent,
            'inherit': colors.inherit,
            'current': colors.current,
        },
        extend: {},
    },
    plugins: [],
}