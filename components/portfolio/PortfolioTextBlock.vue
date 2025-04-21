<template>
  <div class="p-8 pb-4">
    <h4 v-if="title"
        class="text-xl font-semibold mb-3 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent inline-block">
      {{ title }}</h4>
    <slot/>
  </div>
</template>
<script>
export default {
  name: "PortfolioTextBlock",
  props: {
    title: String,
  }
}
</script>