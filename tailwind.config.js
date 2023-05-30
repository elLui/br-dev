/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}',],
    theme: {

        screens: {
            'xs': '20rem', // 320px
            'sm': '24rem', // 384px
            'md': '28rem', // 448px
            'lg': '32rem', // 512px
            'xl': '36rem', // 576px
            '2xl': '42rem', // 672px
            '3xl': '48rem', // 768px
            '4xl': '56rem', // 896px
            '5xl': '64rem', // 1024px
            '6xl': '72rem', // 1152px
            '7xl': '80rem', // 1280px
        },

        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'video-background': 'url("/video/AdobeStock_122654532_20s_loop_static_effect.mp4")',
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
