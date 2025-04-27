<template>
  <div class="flex flex-col gap-6 md:w-1/3">
    <div class="md:pr-10 flex flex-col gap-6">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  name: "PortfolioItemGraphic"
}
</script>