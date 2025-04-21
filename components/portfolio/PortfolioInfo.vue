<template>
  <div class="bg-secondary/10 rounded-xl border border-white/5 py-5 px-4 text-center">
    <div
        class="text-4xl font-extrabold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
      {{ title }}
    </div>
    <div class="text-sm text-zinc-400 mt-1">{{ subTitle }}</div>
  </div>
</template>
<script>
export default {
  name: "PortfolioInfo",
  props: {
    title: String,
    subTitle: String
  }
}
</script>