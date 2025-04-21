<template>
  <div class="bg-grey-dark/5 rounded-xl border border-white/5 shadow-lg flex flex-col">
    <slot/>
  </div>
</template>
<script>
export default {
  name: "PortfolioItemTextWrapper",
  props: {
    title: String,
  }
}
</script>