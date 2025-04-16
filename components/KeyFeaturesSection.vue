<template>
  <section class="container mx-auto py-20">
    <div class="flex flex-row">
      <div class="feature-card bg-gradient-to-br from-main to-secondary
                  m-4 p-8 justify-between rounded-lg shadow-lg w-full flex flex-col items-center"
           v-for="(feature, index) in data" :key="index">
        <div class="relative inline-block">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-alternative-bright to-secondary-bright text-5xl font-bold">
            {{ feature.title }}
          </span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-alternative-bright to-secondary-bright"></span>
        </div>
        <span class="text-base mt-2 uppercase text-grey">{{feature.subTitle}}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'KeyFeaturesSection',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>