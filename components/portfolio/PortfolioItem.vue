<template>
  <div class="flex flex-col text-grey-dark w-full">
    <div class="mb-8 w-full">
      <h2 v-if="title" class="text-6xl mb-4 text-soft-rainbow">{{ title }}</h2>
      <h3 v-if="subtitle" class="text-3xl">{{ subtitle }}</h3>
      <p v-if="description" class="py-8">{{ description }}</p>
    </div>
    <div class="flex flex-row w-full">
      <slot/>
    </div>
    <div v-if="linkUrl" class="p-8 text-right w-full">
      <a :href="linkUrl" class="btn btn-big rainbow"
         target="_blank">
        {{ linkText }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "PortfolioItem",
  props: {
    title: String,
    subtitle: String,
    linkUrl: String,
    linkText: String,
    description: String,
  }
}
</script>