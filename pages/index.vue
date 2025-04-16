<template>
  <div class="container mx-auto">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Meta name="og:title" :content="title" />
      <Meta name="og:description" :content="description" />
      <Meta name="og:type" content="website" />
      <Meta name="og:url" :content="currentUrl" />
    </Head>
    <hero-section />
    <key-features-section :data="keyFeaturesData" />
    <tech-stack-section :data="techData"/>
    <time-line-section :data="jobsData"></time-line-section>
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
    return {
      keyFeaturesData: runtimeConfig.public.keyFeatures,
      jobsData: runtimeConfig.public.jobs,
      techData: runtimeConfig.public.techList,
      currentUrl: useRequestURL()?.hash || ''
    }
  },
  data() {
    return {
      title: 'Tymofeiev Max - Portfolio',
      description: 'Professional portfolio showcasing Tymofeiev Max (Maksym) work, skills, and experience'
    }
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