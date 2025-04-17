<template>
  <article class="rounded-md flex flex-col justify-start text-grey h-full">
    <div class="relative">
      <img :src="img" alt="Personal Website"
     class="w-full h-48 object-cover object-[center_80%] bg-gradient-to-r from-main-dark to-alternative rounded-t-md"/>
      <h3 class="absolute bottom-3 left-3  text-xl font-bold px-3 py-1 rounded-md bg-main/50"
          :class="inverseTitle ? 'text-dark' : 'text-grey'">{{ title }}</h3>
    </div>
    <div class="flex flex-col justify-between h-full bg-dark-diagonal rounded-b-md">
      <div class="p-5 space-y-3 flex flex-col">
        <slot/>
      </div>
      <div class="m-6">
        <a :href="linkUrl" target="_blank" class="btn rainbow">
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