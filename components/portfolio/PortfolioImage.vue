<template>
  <div class="w-full rounded-xl overflow-hidden border border-grey/5 shadow-xl">
    <img :alt="alt" :src="src"/>
  </div>
</template>
<script>
export default {
  name: "PortfolioImage",
  props: {
    src: String,
    alt: String
  }
}
</script>