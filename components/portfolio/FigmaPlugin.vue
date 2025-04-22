<template>
  <portfolio-item :link-text="projectLinklabel" :link-url="projectLink" :subtitle="subtitle"
                  :title="title">
    <portfolio-item-graphic>
      <video :src="image" autoplay></video>
      <portfolio-info :sub-title="subInfo" :title="info"/>
    </portfolio-item-graphic>
    <portfolio-item-text>
      <portfolio-item-text-wrapper>

        <portfolio-text-block title="Challenge">
          <p>Designers frequently struggle with repetitive tasks and inefficient workflows—especially when working on
            data-heavy prototypes. These bottlenecks don’t just slow down designers; they also impact developers and PMs
            who rely on fast, accurate design outputs to keep projects moving.
          </p>
        </portfolio-text-block>

        <portfolio-text-block title="Solution">
          <p>To address these challenges, I identified key workflow pain points and built a scalable solution: the
            Ananas Table plugin for Figma. Developed using Vue.js and the Figma Plugin API, this custom plugin allows
            users to:</p>
          <ul class="list-rainbow-circle">
            <li v-for="(item, index) in solutionPoints"
                :key="index"
                v-html="item"></li>
          </ul>
        </portfolio-text-block>

        <portfolio-text-block title="Impact">
          <ul class="list-rainbow-circle">
            <li v-for="(item, index) in impact"
                :key="index"
                v-html="item"></li>
          </ul>
        </portfolio-text-block>
      </portfolio-item-text-wrapper>

      <tags :tags="technologies" class="p-8" title="Technologies Used:"/>
    </portfolio-item-text>
  </portfolio-item>
</template>

<script>
export default {
  name: "FigmaPlugin",
  data() {
    return {
      title: 'Figma: the Plugin Project',
      subtitle: null,
      image: '/images/figma-plugin.mp4',
      projectLink: 'https://www.figma.com/community/plugin/1374168501688267750/ananas-table',
      projectLinklabel: 'Try the Plugin',
      info: 'over 1300',
      subInfo: 'active users',
      technologies: [
        {name: 'Figma Plugin API', highlight: true},
        {name: 'TypeScript', highlight: true},
        {name: 'VueJS', highlight: true},
        {name: 'NodeJS', highlight: false},
        {name: 'Vite', highlight: false},
        {name: 'HTML', highlight: false},
        {name: 'CSS', highlight: false},
        {name: 'CSV', highlight: false},
      ],
      solutionPoints: [
        'Import CSV data directly into Figma',
        'Generate fully styled, responsive tables',
        'Align with existing design systems',
        'Complete the process in just two clicks',
      ],
      impact: [
        '<strong>Accelerated design workflows:</strong> Reduced repetitive work and saved hours on data-related prototyping',
        '<strong>Improved team efficiency:</strong> Faster handoffs and clearer outputs for developers and PMs',
        '<strong>Enhanced consistency:</strong> Design system compliance built into the workflow',
        '<strong>Stronger adoption:</strong> Quickly became a trusted tool across cross-functional teams',
      ]
    }
  }
}
</script>