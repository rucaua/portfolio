<template>
  <div id="moving-back">
    <span class="text-main/50 text-5xl">{{ currentText }}</span>
  </div>
</template>

<script>
export default {
  name: "AnimatedBack",
  data() {
    return {
      texts: [
        '<hire-max urgent="true"/>',
        '<call when="today">Best Time to Call Max</call>',
        '<hire data-who="max">Best Time to Hire Max</hire>',
        '<code>Portfolio</code>',
        '<developer status="available"/>',
        '<skills php="true" js="true">Full Stack Dev</skills>',
        '<skills level="expert">Full Stack Dev</skills>',
        '<h1>15+ exp</h1>',
        '<tech stack="modern">Latest Technologies</tech>',
        '<collaborate type="team">Team Player</collaborate>',
        '<innovation status="always">Creative Solutions</innovation>',
        '<debug mode="on">Problem Solver</debug>',
        '<deploy env="production">Ready to Start</deploy>',
      ],
      currentText: "",
      textIndex: 0,
      typingSpeed: 50,
      untypingSpeed: 30,
      pauseAfterTyping: 2500,
      pauseBetweenTextChanges: 1000,
    };
  },
  mounted() {
    this.startTyping();
    this.animateMovement();
  },
  methods: {
    async startTyping() {
      while (true) {
        const text = this.texts[this.textIndex];
        await this.typeTextWithTags(text);
        await this.sleep(this.pauseAfterTyping);
        await this.untypeText();
        await this.sleep(this.pauseBetweenTextChanges);
        this.textIndex = (this.textIndex + 1) % this.texts.length;
      }
    },
    async typeTextWithTags(text) {
      let tagOpen = "";
      let innerContent = "";
      let tagClose = "";
      const tagMatch = text.match(/^(<[^>]+>)([\s\S]*)(<\/[^>]+>|\/>?)$/);

      if (tagMatch) {
        tagOpen = tagMatch[1] || "";
        innerContent = tagMatch[2] || "";
        tagClose = tagMatch[3] || "";
      } else {
        innerContent = text;
      }

      for (let i = 0; i < tagOpen.length; i++) {
        this.currentText += tagOpen[i];
        await this.sleep(this.typingSpeed);
      }

      for (let i = 0; i < innerContent.length; i++) {
        this.currentText += innerContent[i];
        await this.sleep(this.typingSpeed);
      }

      for (let i = 0; i < tagClose.length; i++) {
        this.currentText += tagClose[i];
        await this.sleep(this.typingSpeed);
      }
    },
    async untypeText() {
      while (this.currentText.length > 0) {
        this.currentText = this.currentText.slice(0, -1);
        await this.sleep(this.untypingSpeed);
      }
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    animateMovement() {
      const movingElement = document.getElementById("moving-back");
      let x = 0,
          y = 0,
          dx = 2,
          dy = 2;

      const move = () => {
        const elementWidth = movingElement.offsetWidth || 0;
        const elementHeight = movingElement.offsetHeight || 0;

        const screenWidth = window.innerWidth || 0;
        const screenHeight = window.innerHeight || 0;

        if (x + elementWidth >= screenWidth || x <= 0) {
          dx *= -1;
        }
        if (y + elementHeight >= screenHeight || y <= 0) {
          dy *= -1;
        }

        x = Math.max(0, Math.min(screenWidth - elementWidth, x + dx));
        y = Math.max(0, Math.min(screenHeight - elementHeight, y + dy));

        movingElement.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(move);
      };

      move();
    },
  },
};
</script>

<style scoped>
#moving-back {
  position: absolute;
  font-family: monospace;
  white-space: pre;
}
</style>