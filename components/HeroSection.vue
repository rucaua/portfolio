<template>
  <section id="contact" class="container my-4 xl:my-28 p-1 md:p-0">
    <div class="flex flex-col xl:flex-row items-start justify-between">
      <div class="w-full xl:w-5/12 text-center xl:text-left">
        <h2 class="text-6xl md:text-9xl font-bold drop-shadow-2xl">{{ heroTitle }}</h2>
        <div class="flex flex-row w-full py-10 gap-4 justify-start items-center rounded-md" data-highlight="contact">
          <div
              class="flex flex-col md:flex-row w-full gap-4 justify-center xl:justify-start items-center px-10 md:px-0">
            <a :href="mailLink" class="btn rainbow inline w-full md:w-auto">
              <font-awesome class="mr-2" icon="at" size="xs"/>
              Mail Me
            </a>
            <a :href="phoneLink" class="btn rainbow inline w-full md:w-auto">
              <font-awesome :icon="['fas', 'mobile-screen-button']" class="mr-2" size="xs"/>
              Call Me
            </a>
            <TeleportAlert/>
            <div id="social"
                 class="border-l-0 md:border-l-4 border-main text-grey ml-4 pl-0 md:pl-6 pt-4 md:p-0 flex flex-row justify-around w-full md:gap-4 items-center">
              <a :href="linkedInLink" class="link" target="_blank">
                <font-awesome icon="fa-brands fa-linkedin" size="2x"/>
              </a>
              <a :href="gitHubLink" class="link" target="_blank">
                <font-awesome icon="fa-brands fa-github" size="2xl"/>
              </a>
              <a :href="devDevLink" class="link" target="_blank">
                <font-awesome icon="fa-brands fa-dev" size="2xl"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full xl:w-5/12">
        <AIChat/>
      </div>
    </div>
  </section>
</template>

<script>
import AIChat from "@components/AIChat.vue";
import TeleportAlert from "@components/TeleportAlert.vue";

export default {
  name: 'HeroSection',
  components: {AIChat, TeleportAlert},
  data() {
    return {
      heroTitle: 'Senior Software <Dev/>',
      mailLink: 'mailto:tymofeiev.m@gmail.com',
      phoneLink: 'tel:+14168908703',
      linkedInLink: 'https://www.linkedin.com/in/max-tymofeiev/',
      gitHubLink: 'https://github.com/rucaua/',
      devDevLink: 'https://app.daily.dev/rucaua'
    }
  }
}
</script>