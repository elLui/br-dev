/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}',],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'flannel-red': '#C33C23',
                'dark-grey': '#2D2D2D',
                'flannel-grey': '#8D8F94',
                'off-white': '#F5F5F5',
                'accented-dark-red': '#7B1F1A',
            },

            fontFamily: {

                "sister-frisky": ["sister-frisky", "cursive", "sans-serif"],
                "graffiti": ["graffiti", "sans-serif"],

            },

        },

    },
    plugins: [],
}
