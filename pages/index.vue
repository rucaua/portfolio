<template>
  <div class="container mx-auto">
    <hero-section />
    <key-features-section :data="keyFeaturesData" />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import KeyFeaturesSection from "~/components/KeyFeaturesSection.vue";
export default {
  name: 'IndexPage',
  components: {KeyFeaturesSection, HeroSection},
  setup() {
    const runtimeConfig = useRuntimeConfig()
    return {keyFeaturesData: runtimeConfig.public.keyFeatures}
  },
  head() {
    return {
      title: 'Tymofeiev Max - Portfolio',
      meta: [
        { name: 'description', content: 'Professional portfolio showcasing my work, skills, and experience' }
      ]
    }
  }
}
</script>