<template>
  <div class="min-h-screen flex flex-col bg-main text-contrast">
    <!-- Site Header -->
    <header class="border-b py-4">
      <div class="flex items-center justify-between container mx-auto">
        <div>
          <!-- Logo/Brand -->
          <NuxtLink to="/" class="font-bold text-2xl"><h1>{{title}}</h1></NuxtLink>
        </div>

        <div class="flex items-center">
          <!-- Navigation -->
          <nav class="hidden md:block">
            <ul class="flex gap-4">
              <li>
                <NuxtLink to="/" class="px-3 py-2 hover:text-primary transition">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/resume" class="px-3 py-2 hover:text-primary transition">Resume</NuxtLink>
              </li>
            </ul>
          </nav>

        </div>
      </div>

      <!-- Mobile menu (hidden by default) -->
      <div v-if="isMenuOpen" class="md:hidden py-4">
      </div>
    </header>

    <Breadcrumbs />

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

import Breadcrumbs from "~/components/Breadcrumbs.vue";

export default {
  name: 'DefaultLayout',
  components: {Breadcrumbs},
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