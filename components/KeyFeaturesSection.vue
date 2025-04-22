<template>
  <section class="container mx-auto py-2 md:py-20">
    <div class="flex flex-row flex-wrap justify-between mx-0 md:-mx-4">
      <div v-for="(feature, index) in data"
           :key="index" class="flex flex-col flex-wrap w-full md:w-6/12 xl:w-3/12 px-4 my-4">
        <div class="w-full feature-card bg-dark-diagonal p-8 rounded-md shadow-lg
     flex flex-col justify-center items-center h-full">
          <div class="relative inline-block">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-main text-5xl font-bold">
              {{ feature.title }}
            </span>
            <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-main"></span>
          </div>
          <span class="text-base mt-2 uppercase text-grey h-full">{{ feature.subTitle }}</span>
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