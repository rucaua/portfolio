<template>
  <article class="rounded-md flex flex-col justify-start text-grey h-full">
    <div class="relative">
      <img :alt="title" :src="img"
           class="w-full h-48 object-cover object-[center_80%] bg-gradient-to-r from-main-dark to-alternative rounded-t-md"/>
      <h3 :class="inverseTitle ? 'text-dark' : 'text-grey'"
          class="absolute bottom-3 left-3 text-md md:text-xl font-bold px-1 md:px-3 py-1 rounded-md bg-main/50">{{ title }}</h3>
    </div>
    <div class="flex flex-col justify-between h-full bg-dark-diagonal rounded-b-md">
      <div class="mb-2 md:mb-5 p-2 md:p-5 space-y-3 flex flex-col">
        <slot/>
      </div>
      <div class="mx-2 md:mx-6 mb-4 md:mb-6">
        <a :href="linkUrl" class="btn rainbow" target="_blank">
          {{ linkText }}
        </a>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Article",
  props: {
    img: String,
    title: String,
    linkText: String,
    linkUrl: String,
    inverseTitle: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>

</style>