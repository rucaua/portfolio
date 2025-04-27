<template>
  <div class="flex flex-col md:w-2/3">
    <h3 v-if="title" class="tex-soft-rainbow">{{ title }}</h3>
    <slot/>
  </div>
</template>
<script>
export default {
  name: "PortfolioItemText",
  props: {
    title: String,
  }
}
</script>