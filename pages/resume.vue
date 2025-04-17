<template>
  <section class="container mx-auto">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Meta name="og:title" :content="title" />
      <Meta name="og:description" :content="description" />
      <Meta name="og:type" content="website" />
      <Meta name="og:url" :content="currentUrl" />
    </Head>
    <div class="mb-20">
      <div class="flex items-center justify-between w-full">
        <h2 class="text-4xl font-bold">{{ title }}</h2>
        <a :href="pdfSrc" target="_blank" download class="btn rainbow">
          Download Resume
        </a>
      </div>
    </div>

    <div class="pdf-container mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 overflow-hidden">
      <ClientOnly>
        <iframe
            :src="pdfSrc"
            class="w-full h-[800px] border-0 rounded-lg pdf-iframe"
            title="Resume PDF"
        ></iframe>
      </ClientOnly>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResumePage',
  data(){
    return {
      pdfSrc: '/Full-Stack-Dev-Maksym-Tymofeiev.pdf',
      title: 'Resume - Maksym Tymofeiev | Full-Stack Developer',
      description: 'View the professional resume of Maksym Tymofeiev, a Full-Stack Developer with expertise in modern web technologies.',
      currentUrl: useRequestURL()?.hash || ''
    }
  }
}
</script>

<style scoped>

@media (prefers-color-scheme: dark) {
  .pdf-iframe {
    opacity: 0.9;
  }
}

@media (max-width: 768px) {
  .pdf-iframe {
    height: 600px;
  }
}

@media (max-width: 480px) {
  .pdf-iframe {
    height: 500px;
  }
}
</style>