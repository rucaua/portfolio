<template>
  <section class="container my-28">
    <div class="flex flex-col lg:flex-row items-center">
      <div>
        <h2 class="text-9xl font-bold leading-tight mb-6">Welcome to My Portfolio</h2>
      </div>

      <div class="relative">
        <AIChat />
      </div>
    </div>
  </section>
</template>

<script>
import AIChat from "~/components/AIChat.vue";

export default {
  name: 'HeroSection',
  components: {AIChat},
}
</script>