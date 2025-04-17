// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
                }
            ]
        }
    },

    runtimeConfig: {
        // Server-only keys
        openaiApiKey: process.env.NUXT_OPENAI_API_KEY,
        openaiAssistantId: process.env.NUXT_OPENAI_ASSISTANT_ID,
    },

    fontawesome: {
        icons: {
            solid: [
                'paper-plane',
                'database',
                'gears',
                'vial',
                'cloud',
                'mobile-screen',
                'pen-ruler',
                'code',
                'server',
                'home',
                'chevron-right',
                'mobile-screen-button',
                'at',
                'object-ungroup'
            ],
            brands: [
                'php',
                'js',
                'git-alt',
                'css3-alt',
                'python',
                'linkedin',
                'github',
                'dev'
            ]
        }
    },

    modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome'],
})