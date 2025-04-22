<template>
  <div class="flex flex-col w-2/3">
    <h3 class="tex-soft-rainbow" v-if="title">{{ title }}</h3>
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