<template>
  <section class="container my-28" id="contact">
    <div class="flex flex-col lg:flex-row items-start justify-between">
      <div class="w-5/12">
        <h2 class="text-9xl font-bold drop-shadow-2xl">Welcome to my Portfolio</h2>
        <div class="flex flex-row w-full py-10 gap-4 justify-start items-center rounded" data-highlight="contact">
          <div class="flex flex-row w-full gap-4 justify-start items-center rounded">
            <a :href="mailLink" class="btn rainbow inline">
              <font-awesome icon="at" size="xs" class="mr-2"/>
              Mail Me
            </a>
            <a :href="phoneLink" class="btn rainbow inline">
              <font-awesome size="xs" :icon="['fas', 'mobile-screen-button']" class="mr-2"/>
              Call Me
            </a>
            <TeleportAlert/>
            <div
                class="border-l-4 border-main
              text-grey ml-4 pl-6
               flex flex-row gap-2 lg:gap-4 items-center"
                id="social">
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
      <div class="w-5/12">
        <AIChat />
      </div>
    </div>
  </section>
</template>

<script>
import AIChat from "~/components/AIChat.vue";
import TeleportAlert from "~/components/TeleportAlert.vue";

export default {
  name: 'HeroSection',
  components: {AIChat, TeleportAlert},
  data() {
    return {
      mailLink: 'mailto:tymofeiev.m@gmail.com',
      phoneLink: 'tel:+14168908703',
      linkedInLink: 'https://www.linkedin.com/in/max-tymofeiev/',
      gitHubLink: 'https://github.com/rucaua/',
      devDevLink: 'https://app.daily.dev/rucaua'
    }
  }
}
</script>