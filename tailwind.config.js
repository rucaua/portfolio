import colors from 'tailwindcss/colors'

export default {
    content: [],
    theme: {
        extend: {
            /* @see https://v3.tailwindcss.com/docs/customizing-colors */
            colors: {
                main: colors.teal["500"],
                'main-dark': colors.teal["950"],
                secondary: colors.purple["500"],
                dark: colors.zinc["900"],
                grey: colors.zinc["200"],
                'grey-dark': colors.zinc["400"],
                alternative: colors.blue["950"],
                'gradient-start': '#7F5AF0',
                'gradient-end': '#2CB67D',
            },
            fontFamily: {
                'sans': ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif']
            },
            fontSize: {
                '9xl': ['10rem', {
                    lineHeight: '11rem',
                    letterSpacing: '0',
                    fontWeight: '500',
                }]
            }
        },
    },
    plugins: [],
}

