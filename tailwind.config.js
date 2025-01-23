/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    '50': '#eefffb',
                    '100': '#c5fff6',
                    '200': '#8bffee',
                    '300': '#48ffe5',
                    '400': '#10dac3',
                    '500': '#00d1bc',
                    '600': '#00a99b',
                    '700': '#00867d',
                    '800': '#056a64',
                    '900': '#0a5753',
                    '950': '#003635',
                },
            },
        },
    },
    plugins: [],
}

