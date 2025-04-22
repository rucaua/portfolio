<template>
  <div>
    <h3 v-if="title" class="text-xl font-semibold mb-4">{{ title }}</h3>
    <div class="flex flex-wrap gap-2">
            <span
                v-for="tag in tags"
                :key="tag.name"
                :class="tag.highlight ? 'bg-secondary/15 border-secondary/20' : 'bg-white/5'"
                class="px-3 py-2 text-base rounded-md border border-white/5 transition-all duration-300
                  hover:-translate-y-0.5 hover:bg-secondary/10 hover:text-grey">
              {{ tag.name }}
            </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props: {
    title: {
      type: String,
      default: null
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>