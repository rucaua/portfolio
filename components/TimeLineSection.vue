<template>
  <section class="container mx-auto py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-10 text-center">Professional Experience</h2>

      <div class="timeline relative">
        <!-- Timeline line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-200"></div>

        <!-- Timeline items -->
        <div v-for="(job, index) in data" :key="index"
             class="timeline-item relative mb-16">
          <!-- Date indicator -->
          <div
              class="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center z-10">
            <span class="text-sky-950 font-bold text-sm">{{ index + 1 }}</span>
          </div>

          <!-- Content box -->
          <div :class="[
            'bg-sky-200 rounded-lg shadow-lg p-6 w-5/12',
            index % 2 === 0 ? 'ml-auto' : 'mr-auto'
          ]">
            <div class="mb-2 flex justify-between items-center text-sky-950">
              <h3 class="text-xl font-bold">{{ job.title }}</h3>
              <span class="text-sm font-medium">{{ job.period }}</span>
            </div>

            <div class="mb-4">
              <div class="text-gray-700 font-medium">{{ job.company }}</div>
              <div class="text-gray-500 text-sm">{{ job.location }}</div>
            </div>

            <div class="mb-4">
              <h4 class="font-semibold text-gray-800 mb-2">Responsibilities:</h4>
              <ul class="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                <li v-for="(responsibility, rIndex) in job.responsibilities"
                    :key="'r-' + rIndex">
                  {{ responsibility }}
                </li>
              </ul>
            </div>

            <div v-if="job.achievements">
              <h4 class="font-semibold text-gray-800 mb-2">Achievements:</h4>
              <ul class="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                <li v-for="(achievement, aIndex) in job.achievements"
                    :key="'a-' + aIndex">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimeLineSection',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>