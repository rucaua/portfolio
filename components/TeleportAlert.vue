<template>
  <div>
    <button
        class="btn rainbow flex items-center justify-center"
        @click="startTeleportation"
    >
      <font-awesome icon="object-ungroup" size="xs" class="mr-2"/>
      Teleport to Me
    </button>

    <!-- Custom Alert Component -->
    <div
        v-show="alertVisible"
        class="fixed inset-0 bg-black/70 z-50 flex justify-center items-center"
    >
      <div
          class="w-full max-w-2xl p-8 rounded-2xl text-center text-contrast shadow-xl transition-all duration-300 bg-gradient-to-r from-secondary to-alternative">
        <span class="text-4xl block mb-4">{{ alertIcon }}</span>
        <h3 class="text-2xl font-bold mb-2">{{ alertTitle }}</h3>
        <p class="my-6 text-xl whitespace-pre-line text-left">{{ alertMessage }}</p>

        <div class="h-1 relative rounded-full overflow-hidden mb-6">
          <div class="w-full h-full bg-white/20 absolute"></div>
          <div class="h-full rainbow rounded-full teleport-animation"></div>
        </div>

        <button class="btn rainbow" @click="closeAlert">{{ buttonText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alertVisible: false,
      alertTitle: '',
      alertMessage: '',
      alertIcon: '',
      buttonText: '',
      alertClass: '',
      teleportationAllowed: false,
      userLocation: null,
      countdownInterval: null
    }
  },

  methods: {
    startTeleportation() {
      this.alertVisible = true
      this.alertTitle = 'Teleportation Initiated'
      this.alertMessage = 'Preparing quantum tunneling to your location!'
      this.alertIcon = '🌀'
      this.buttonText = 'Cancel Teleportation'
      this.alertClass = ''

      // Begin teleportation sequence
      this.teleportPhases()
    },

    async teleportPhases() {

      await this.delay(5000)

      this.updateAlert(
          'Checking your location',
          'Requesting permission to access your coordinates...',
          '📍'
      )

      // Actually request geolocation permission from the browser
      this.requestBrowserGeolocation()
    },

    requestBrowserGeolocation() {
      if (!navigator.geolocation) {
        this.handleGeolocationError({code: 0, message: 'Geolocation not supported by your browser'})
        return
      }

      navigator.geolocation.getCurrentPosition(
          this.handleGeolocationSuccess,
          this.handleGeolocationError,
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
          }
      )
    },


    handleGeolocationSuccess(position) {
      // Store user location
      this.userLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy
      }

      // Continue with teleportation flow
      this.continueWithTeleportation()
    },

    handleGeolocationError(error) {
      let errorMessage = 'Unknown location error'

      // Handle specific error cases
      switch (error.code) {
        case 1: // PERMISSION_DENIED
          errorMessage = 'Location permission denied.'
          break
        case 2: // POSITION_UNAVAILABLE
          errorMessage = 'Location information unavailable.'
          break
        case 3: // TIMEOUT
          errorMessage = 'Location request timed out.'
          break
      }

      this.showErrorAlert(errorMessage)
    },

    showErrorAlert(message = 'Cannot teleport without knowing your location.') {
      this.alertClass = 'alert-error'
      this.updateAlert(
          'Teleportation Aborted',
          message,
          '❌'
      )
      this.buttonText = 'Close'
    },

    async continueWithTeleportation() {

      this.updateAlert(
          'Finding the nearest teleportation node to you',
          `Your location: \n
           ${this.formatCoordinates(this.userLocation.latitude, this.userLocation.longitude)}.`,
          '🔍'
      )
      await this.delay()

      this.updateAlert(
          'Building tunnel',
          'Preparing a critical mass of node_modules folder to rip through space-time...',
          '⚛️'
      )
      await this.delay()

      this.updateAlert(
          'Preparing backup',
          'Calculating the positions of each atom in your body.\n' +
          'Please do not move or breathe.',
          '⏱️'
      )
      await this.delay()

      this.updateAlert(
          'Almost done',
          'All that remains is to disintegrate your body.\n' +
          'You can breathe, but please do not move.',
          '🧬'
      )
      await this.delay()

      // Start countdown timer
      this.startFutureCountdown();
    },

    startFutureCountdown() {
      // Clear any existing interval
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
      }

      // Set target date: March 26, 2082
      const targetDate = new Date(2082, 2, 26); // Month is 0-indexed (2 = March)

      // Update countdown every second
      this.countdownInterval = setInterval(() => {
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff <= 0) {
          clearInterval(this.countdownInterval);
          this.updateAlert(
              'Teleportation Available!',
              'Teleportation has been invented! Congratulations on living to see this day!',
              '🎉'
          );
          return;
        }

        // Calculate time components
        const timeLeft = this.calculateTimeRemaining(timeDiff);

        this.updateAlert(
            'Delay!',
            `Sorry for the delay!!!\n\nCommercial teleport will be invented just in:\n\n${timeLeft.years} years\n${timeLeft.months} months\n${timeLeft.days} days\n${timeLeft.hours} hours\n${timeLeft.minutes} minutes\n${timeLeft.seconds} seconds\n`,
            '⏳'
        );
      }, 1000);
    },

    calculateTimeRemaining(timeDiff) {
      // Constants for time calculations
      const msPerSecond = 1000;
      const msPerMinute = msPerSecond * 60;
      const msPerHour = msPerMinute * 60;
      const msPerDay = msPerHour * 24;
      const msPerMonth = msPerDay * 30.436875; // Average days per month
      const msPerYear = msPerDay * 365.25; // Account for leap years

      // Calculate each time component
      const years = Math.floor(timeDiff / msPerYear);
      let remainder = timeDiff % msPerYear;

      const months = Math.floor(remainder / msPerMonth);
      remainder = remainder % msPerMonth;

      const days = Math.floor(remainder / msPerDay);
      remainder = remainder % msPerDay;

      const hours = Math.floor(remainder / msPerHour);
      remainder = remainder % msPerHour;

      const minutes = Math.floor(remainder / msPerMinute);
      remainder = remainder % msPerMinute;

      const seconds = Math.floor(remainder / msPerSecond);

      return {years, months, days, hours, minutes, seconds};
    },

    closeAlert() {
      // Clear countdown interval
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;
      }

      this.alertVisible = false;

      // Reset state for next time
      setTimeout(() => {
        this.alertClass = '';
        this.buttonText = 'Cancel Teleportation';
      }, 300);
    },

    updateAlert(title, message, icon) {
      this.alertTitle = title
      this.alertMessage = message
      this.alertIcon = icon
    },

    formatCoordinates(latitude, longitude) {
      const latDir = latitude >= 0 ? 'N' : 'S'
      const longDir = longitude >= 0 ? 'E' : 'W'
      const latDeg = Math.abs(latitude).toFixed(2)
      const longDeg = Math.abs(longitude).toFixed(2)

      return `${latDeg}° ${latDir}, ${longDeg}° ${longDir}`
    },

    // Helper method for creating delays
    delay() {
      return new Promise(resolve => setTimeout(resolve, 5000))
    }
  }
}
</script>

<style scoped>
@keyframes teleport {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.teleport-animation {
  animation: teleport 5s infinite;
}
</style>