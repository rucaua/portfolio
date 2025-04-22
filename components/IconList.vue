<template>
  <div class="flex gap-4 mt-6 ">
    <div v-for="(iconData, k) in icons" :key="k" class="flex flex-col items-center">
      <div class="w-15 h-15 bg-white/5 border border-white/10 rounded-full p-3 flex items-center justify-center">
        <font-awesome :icon="iconData.icon" class="text-gradient-start"/>
      </div>
      <span class="text-sm text-grey mt-2 text-soft-rainbow">{{ iconData.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconList",
  props: {
    icons: Array,
  }
}
</script>