<template>
  <div class="min-h-screen flex flex-col bg-sky-950 text-sky-100">
    <!-- Site Header -->
    <header class="border-b py-4">
      <div class="flex items-center justify-between">
        <div class="container mx-auto">
          <!-- Logo/Brand -->
          <NuxtLink to="/" class="font-bold text-xl"><h1>{{title}}</h1></NuxtLink>
        </div>

        <div class="flex items-center">
          <!-- Navigation -->
          <nav class="hidden md:block">
          </nav>

        </div>
      </div>

      <!-- Mobile menu (hidden by default) -->
      <div v-if="isMenuOpen" class="md:hidden py-4">
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot/>
    </main>

    <!-- Site Footer -->
    <footer class="border-t py-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div>
          <p>© {{ new Date().getFullYear() }} Your Name</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'DefaultLayout',
  setup() {
    const runtimeConfig = useRuntimeConfig()
    return {title: runtimeConfig.public.fullName}
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
  }
}
</script>