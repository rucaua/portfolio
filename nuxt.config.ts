// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    // Server-only keys
    openaiApiKey: process.env.NUXT_OPENAI_API_KEY,
    openaiAssistantId: process.env.NUXT_OPENAI_ASSISTANT_ID,
    public: {
      fullName: 'Max Tymofeiev',
      keyFeatures: [
        {title: '15+', subTitle: 'years of experience'},
        {title: 'SaaS', subTitle: 'solutions for business'},
        {title: 'Senior', subTitle: 'full stack developer'},
        {title: 'AI', subTitle: 'generative model'},
      ]
    }
  },

  fontawesome: {
    icons: {
      solid: ['paper-plane']
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome'],
})