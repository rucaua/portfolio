<template>
  <section class="container mx-auto py-20">
    <div v-for="item in data" :key="item.name" class="mb-20">
      <div class="absolute left-0 top-0 h-full flex items-center">
        <div class="w-1 bg-green-500 ml-1"></div>
      </div>
      <div>
        <div class="flex items-center mb-2 ">
          <span class="flex items-center justify-center text-teal-500 mr-2">
            <font-awesome :icon="item.icon" size="2x"/>
          </span>
          <h2 class="ml-2 text-lg font-bold text-white">{{ item.name }}</h2>
        </div>
        <div class="bg-gray-700 rounded-full w-full h-2.5 my-5">
          <div
              class="h-2.5 bg-gradient-to-r from-[#7F5AF0] to-[#2cb67d] rounded-full"
              :style="{
                width: `${item.progress}%`
              }" />
        </div>
        <div class="text-gray-300">
          <p>{{ isExpanded[item.name] ? item.text : truncateText(item.text) }}</p>
          <button
              v-if="item.text.length > 150"
              @click="toggleExpand(item.name)"
              class="text-sky-400 hover:text-sky-300 text-sm mt-1 focus:outline-none"
          >
            {{ isExpanded[item.name] ? 'Show less' : 'Show more' }}
          </button>
        </div>
        <a :href="item.link" class="text-sky-500">Learn more about my {{ item.title }} experience</a>
        <span v-if="item.caseStudy" class="ml-4 inline-block bg-gray-800 text-white px-2 py-1 rounded">Case Study</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isExpanded: {}
    };
  },
  mounted() {
    // Initialize all items as collapsed
    this.data.forEach(item => {
      this.isExpanded[item.name] = item.text.length < 300;
    });
  },
  methods: {
    truncateText(text) {
      return text.substring(0, 300) + '...';
    },
    toggleExpand(itemName) {
      this.isExpanded[itemName] = !this.isExpanded[itemName];
    }
  }
};
</script>

<style scoped>
</style>