<template>
  <div class="flex flex-col justify-start items-start text-3xl w-1/2">
    <div class="flex flex-col justify-start items-start p-4 bg-grey-dark/5 rounded-xl h-full">
      <div class="bg-secondary/10 rounded-xl p-2">
        <font-awesome :icon="icon" class="text-main" fixed-width/>
      </div>
      <div class="flex flex-col justify-between text-left py-4 pr-2 h-full">
        <strong class="text-2xl mb-auto pb-6">{{ title }}</strong>
        <p class="text-base mt-auto">{{ subTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigInfoData",
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