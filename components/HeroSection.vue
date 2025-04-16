<template>
  <section class="container my-28">
    <div class="flex flex-col lg:flex-row items-center">
      <div>
        <h2 class="text-9xl font-bold drop-shadow-2xl">Welcome to My Portfolio</h2>
        <div class="flex flex-row gap-4 mt-20">
          <NuxtLink :to="mailLink" class="btn rainbow flex items-center justify-center">
            <font-awesome icon="at" size="2xl" class="mr-2"/> Mail Me
          </NuxtLink>
          <NuxtLink :to="phoneLink" class="btn rainbow flex items-center justify-center">
            <font-awesome icon="mobile-button" size="2xl" class="mr-2"/>
            Call Me
          </NuxtLink>
          <TeleportAlert />
          <div
              class="border-l-4 border-secondary-bright
              text-contrast ml-4 pl-6
               flex flex-row gap-2 lg:gap-4 items-center"
              id="social">
            <NuxtLink :to="linkedInLink" class="link" target="_blank">
              <font-awesome icon="fa-brands fa-linkedin" size="2x"/>
            </NuxtLink>
            <NuxtLink :to="gitHubLink" class="link" target="_blank">
              <font-awesome icon="fa-brands fa-github" size="2xl"/>
            </NuxtLink>
            <NuxtLink :to="devDevLink" class="link" target="_blank">
              <font-awesome icon="fa-brands fa-dev" size="2xl"/>
            </NuxtLink>
          </div>
        </div>
      </div>

      <AIChat/>
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
      mailLink: 'mailto::tymofeiev.m@gmail.com',
      phoneLink: 'tel::+14168908703',
      linkedInLink: 'https://www.linkedin.com/in/max-tymofeiev/',
      gitHubLink: 'https://github.com/rucaua/',
      devDevLink: 'https://app.daily.dev/rucaua'
    }
  },
  methods: {
    teleport() {
      alert('🤣 Nice try! Teleportation technology still loading... Please wait another 50 years!')
    }
  }
}
</script>

<style scoped>
/* Add this to your CSS */
.custom-alert {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  justify-content: center;
  align-items: center;
}

.alert-content {
  background: linear-gradient(45deg, #2b3595, #7045af);
  color: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
}

.alert-icon {
  font-size: 40px;
  margin-bottom: 15px;
  display: block;
}

.teleport-animation {
  height: 5px;
  background: linear-gradient(90deg, #ff9966, #ff5e62);
  margin: 20px 0;
  border-radius: 10px;
  animation: teleport 3s infinite;
}

@keyframes teleport {
  0% { width: 0; }
  100% { width: 100%; }
}

button {
  background-color: #ffffff;
  color: #7045af;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  margin-top: 10px;
}

button:hover {
  background-color: #f1f1f1;
  transform: scale(1.05);
}

/* Success alert style */
.alert-success {
  background: linear-gradient(45deg, #00b09b, #96c93d);
}

/* Error alert style */
.alert-error {
  background: linear-gradient(45deg, #8B0000, #FF5733);
}

/* Permission request style */
.permission-request {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.permission-request button {
  flex: 1;
  margin: 0 5px;
}

.permission-request button.allow {
  background-color: #4CAF50;
  color: white;
}

.permission-request button.deny {
  background-color: #F44336;
  color: white;
}
</style>