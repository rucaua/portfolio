<template>
  <section class="mt-4 md:mt-20 text-center">
    <h3 class="text-soft-rainbow">Core Competencies</h3>
    <div class="container mx-auto py-4 md:py-20 flex flex-col lg:flex-row flex-wrap justify-around text-left">
      <div v-for="item in data" :key="item.name" class="w-full lg:w-6/12 mx-0 md:-mx-10">
        <div class="p-4 md:p-10 h-full">
          <div class="p-10 bg-dark-diagonal rounded-md h-full">
            <div class="flex items-center mb-2">
              <span class="flex items-center justify-center text-main mr-4">
                <font-awesome :icon="item.icon" size="2x"/>
              </span>
              <h4>{{ item.name }}</h4>
            </div>
            <div class="bg-grey rounded-full w-full h-2.5 my-5">
              <div
                  :style="{
                width: item.progress + '%'
              }"
                  class="h-2.5 bg-gradient-to-r from-secondary to-main rounded-full"/>
            </div>
            <div class="text-grey">
              <p>{{ isExpanded[item.name] ? item.text : truncateText(item.text) }}</p>
              <button
                  v-if="item.text.length > 150"
                  class="text-main hover:text-grey text-sm mt-1 focus:outline-none"
                  @click="toggleExpand(item.name)"
              >
                {{ isExpanded[item.name] ? 'Show less' : 'Show more' }}
              </button>
            </div>
          </div>
        </div>
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