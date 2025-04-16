<template>
  <section class="container mx-auto py-20">
    <div class="flex flex-row flex-wrap justify-between -mx-4">
      <div class="flex flex-col flex-wrap w-full md:w-6/12 lg:w-3/12 px-4 my-4"
           v-for="(feature, index) in data" :key="index">
        <div class="w-full feature-card bg-gradient-to-br from-main to-secondary p-8 rounded-lg shadow-lg
        flex flex-col justify-center items-center">
        <div class="relative inline-block">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-alternative-bright to-secondary-bright text-5xl font-bold">
            {{ feature.title }}
          </span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-alternative-bright to-secondary-bright"></span>
        </div>
        <span class="text-base mt-2 uppercase text-grey">{{feature.subTitle}}</span>
      </div>
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