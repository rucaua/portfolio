<template>
  <section class="container mx-auto">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description"/>
      <Meta name="og:title" :content="title"/>
      <Meta name="og:description" :content="description"/>
      <Meta name="og:type" content="website"/>
      <Meta name="og:url" :content="currentUrl"/>
    </Head>
    <div class="page">
      <figma-plugin/>
      <union/>
      <youtube/>
      <carmanah/>
      <my-web-site/>
      <web-studio/>
    </div>
  </section>
</template>

<script>
import Union from "~/components/portfolio/Union.vue";
import MyWebSite from "~/components/portfolio/MyWebSite.vue";
import Youtube from "~/components/portfolio/Youtube.vue";
import Carmanah from "~/components/portfolio/Carmanah.vue";
import FigmaPlugin from "~/components/portfolio/FigmaPlugin.vue";
import WebStudio from "~/components/portfolio/WebStudio.vue";
export default {
  name: 'PortfolioPage',
  components: {WebStudio, FigmaPlugin, Carmanah, Union, MyWebSite, Youtube},
  data() {
    return {
      title: 'Portfolio - Max Tymofeiev | Full-Stack Developer',
      description: "Max Tymofeiev's work and projects",
      currentUrl: useRequestURL()?.hash || '',
    }
  }
}
</script>