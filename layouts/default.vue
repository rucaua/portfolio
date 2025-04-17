<template>
  <div class="min-h-screen flex flex-col bg-dark text-grey text-xl pt-20">
    <!-- Site Header -->
    <header class="fixed top-0 left-0 right-0 z-10 border-b py-4 bg-opacity-90 backdrop-blur-sm shadow-md">
      <div class="flex items-center justify-between container mx-auto">
        <div>
          <!-- Logo/Brand -->
          <NuxtLink to="/" class="font-bold text-2xl"><h1>{{ title }}</h1></NuxtLink>
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
              <li>
                <NuxtLink to="/portfolio" class="px-3 py-2 hover:text-primary transition">Portfolio</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#contact" class="px-3 py-2 hover:text-primary transition">Contacts</NuxtLink>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>

    <Breadcrumbs/>

    <main class="flex-grow">
      <slot/>
    </main>

    <footer class="border-t py-14 text-xl font-light w-full">
      <div class="container flex flex-row items-center mx-auto">
        <div class="relative pr-20 min-w-60">
          <p>© {{ new Date().getFullYear() }}</p>
          <p>Tymofeiev Max</p>
          <div class="absolute top-0 bottom-0 right-0 w-[6px] bg-gradient-to-b from-main to-secondary"></div>
        </div>
        <div class="pl-20">
          <p>This site was created by Max Tymofeiev with VueJS (Nuxt.js) + Tailwind CSS and deployed via AWS Amplify. If
            you need something similar, I have shared it on <a href="https://github.com/rucaua/portfolio" class="link"
                                                               target="_blank">GitHub</a>, so feel free to use it. But
            please don't forget to add a star.</p>
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
  data() {
    return {
      title: 'Max Tymofeiev'
    }
  },
  methods: {}
}
</script>