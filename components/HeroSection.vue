<template>
  <section class="container my-28">
    <div class="flex flex-col lg:flex-row items-center">
      <div>
        <h2 class="text-9xl font-bold drop-shadow-2xl">Welcome to My Portfolio</h2>
      </div>

      <AIChat />
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