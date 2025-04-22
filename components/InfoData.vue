<template>
  <div class="flex flex-row justify-center items-center">
    <font-awesome :icon="icon" class="text-gradient-start"/>
    <div class="flex flex-col justify-center items-center px-4">
      <strong>{{ title }}</strong>
      <span class="text-sm">{{ subTitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconList",
  props: {
    title: String,
    subTitle: String,
    icon: {
      type: Array,
      default: false
    }
  }
}
</script>