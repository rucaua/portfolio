<template>
  <article class="bg-contrast rounded-xl flex flex-col justify-between text-grey h-full">
    <div class="relative">
        <img :src="img" alt="Personal Website" class="w-full h-48 object-cover bg-gradient-to-r from-main-dark to-alternative"/>
        <h3 class="absolute bottom-3 left-3  text-xl font-bold p-3 rounded" :class="inverseTitle ? 'text-dark bg-white/60' : 'text-white bg-dark/90'">{{title}}</h3>
      </div>
      <div class="p-5 space-y-3 flex flex-col">
        <slot/>
      </div>
      <div class="m-6">
        <a :href="linkUrl" class="btn rainbow">
          {{linkText}}
        </a>
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