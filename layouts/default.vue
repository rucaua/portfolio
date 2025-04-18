<template>
  <div class="min-h-screen flex flex-col bg-dark text-grey text-md md:text-xl pt-[60px]">
    <div
        @click="menuToggle"
        class="fixed w-full h-screen top-[60px] left-0 z-10 transition-all duration-300"
        :class="isMenuOpen ? 'display-block bg-opacity-90 backdrop-blur-sm' : 'hidden bg-opacity-0'"
    ></div>
    <!-- Site Header -->
    <header class="fixed top-0 left-0 right-0 h-[60px] z-10 border-b py-4 bg-opacity-90 backdrop-blur-sm px-10 md:px-0">
      <div class="flex items-center justify-between container mx-auto">
        <div>
          <!-- Logo/Brand -->
          <NuxtLink to="/" class="font-bold text-2xl"><h1>{{ title }}</h1></NuxtLink>
        </div>
        <div class="flex items-center">

          <!-- Main Navigation -->
          <nav class="hidden md:block">
            <ul class="flex gap-4">
              <li v-for="link in menu" :key="link.label">
                <NuxtLink :to="link.link" class="nav-link">
                  {{link.label}}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Mobile Navigation -->
          <div class="md:hidden">
            <button @click="menuToggle" type="button" class="z-30">
              <font-awesome
                  :icon="isMenuOpen ? 'xmark' : 'bars'"
                  :class="{'scale-125': isMenuOpen}"
              />
            </button>
            <div
                class="fixed top-[60px] right-0 h-screen transition-transform duration-300 transform flex flex-row justify-end w-9/12 z-20"
                :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
            >
              <div class="bg-dark shadow-lg h-full w-full">
                <ul class="flex flex-col p-8">
                  <li v-for="linkObj in menu" :key="linkObj.label">
                    <NuxtLink
                        :to="linkObj.link || '/'"
                        class="block py-2 px-4 text-lg hover:text-main transition-colors duration-200"
                        @click="menuToggle"
                    >
                      <font-awesome :icon="linkObj.icon" :fixedWidth="true" class="mr-4 text-main" />{{linkObj.label}}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>

    <Breadcrumbs/>

    <main class="flex-grow">
      <slot/>
    </main>

    <footer class="border-t py-4 md:py-14 text-md md:text-xl font-light w-full">
      <div class="container flex flex-col md:flex-row items-center mx-auto">
        <div class="relative p-4 md:p-0 md:pr-20 md:min-w-60 flex flex-row md:flex-col">
          <p>© {{ new Date().getFullYear() }}</p>
          <p class="ml-2 md:ml-0">Tymofeiev Max</p>
          <div class="absolute top-0 bottom-0 right-0 w-[6px] bg-gradient-to-b from-main to-secondary hidden md:block"></div>
        </div>
        <div class="p-4 md:p-0 md:pl-20">
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
      menuOpen: false,
      title: 'Max Tymofeiev',
      /**
       * @type {Array<{label: string, link: string, icon: string}>}
       */
      menu: [
        {
          label: 'Home',
          link: '/',
          icon: 'home'
        },
        {
          label: 'Resume',
          link: '/resume',
          icon: 'file-text'
        },
        {
          label: 'Portfolio',
          link: '/portfolio',
          icon: 'briefcase'
        },
        {
          label: 'Contacts',
          link: '/#contact',
          icon: 'envelope'
        }
      ]
    }
  },
  computed: {
    isMenuOpen() {
      return this.menuOpen
    }
  },
  methods: {
    menuToggle() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>