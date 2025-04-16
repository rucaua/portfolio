<template>
  <div class="container mx-auto w-full py-10 text-grey" v-if="!isHome">
    <nav aria-label="Breadcrumb" class="flex items-center text-sm font-medium">
      <NuxtLink
          to="/"
          class="text-secondary-bright hover:text-secondary transition-colors duration-200 flex items-center"
      >
        <font-awesome icon="home" class="mr-2" />
        Home
      </NuxtLink>

      <font-awesome icon="chevron-right" size="xs" class="mx-2" />

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