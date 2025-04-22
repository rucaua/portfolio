<template>
  <div v-if="!isHome" class="container mx-auto w-full p-10 md:px-0 py-4 md:py-10 text-grey">
    <nav aria-label="Breadcrumb" class="flex items-center text-sm font-medium">
      <NuxtLink
          class="text-main hover:text-main-dark transition-colors duration-200 flex items-center"
          to="/"
      >
        <font-awesome class="mr-2" icon="home"/>
        Home
      </NuxtLink>

      <font-awesome class="mx-2" icon="chevron-right" size="xs"/>

      <span class="text-primary font-semibold capitalize">
        {{ currentRoute }}
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  setup() {
    const route = useRoute()
    return {
      route
    }
  },
  computed: {
    isHome() {
      return this.route.path === '/'
    },
    currentRoute() {
      return this.route.name
    }
  }
}
</script>

<style scoped>

</style>