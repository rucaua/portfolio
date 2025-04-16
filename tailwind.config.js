import colors from 'tailwindcss/colors'
export default {
  content: [],
  theme: {
    extend: {
      /* @see https://v3.tailwindcss.com/docs/customizing-colors */
      colors: {
        main: colors.zinc["950"],
        contrast: colors.zinc["200"],
        grey: colors.zinc["500"],
        secondary: colors.teal["950"],
        'secondary-bright': colors.emerald["700"],
        alternative: colors.blue["950"],
        'alternative-bright': colors.purple["700"]
      }
    },
  },
  plugins: [],
}

