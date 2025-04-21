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
                },
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
                {rel: 'manifest', href: '/manifest.json'}

            ],
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
                'object-ungroup',
                'download',
                'bars',
                'xmark',
                'file-text',
                'briefcase',
                'envelope',
                'computer',
                'film',
                'heart',
                'clock'
            ],
            brands: [
                'php',
                'js',
                'git-alt',
                'css3-alt',
                'python',
                'linkedin',
                'github',
                'dev',
                'internet-explorer',
                'apple',
                'android',
                'figma',
                'docker'
            ]
        }
    },

    modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome'],
})