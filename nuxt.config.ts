// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    // Server-only keys
    openaiApiKey: process.env.OPENAI_API_KEY,
    openaiAssistantId: process.env.OPENAI_ASSISTANT_ID,
    public: {
      fullName: 'Max Tymofeiev'
    }
  },
})
