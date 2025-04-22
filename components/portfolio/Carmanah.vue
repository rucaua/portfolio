<template>
  <portfolio-item :description="description" :link-text="projectLinklabel" :link-url="projectLink" :subtitle="subtitle"
                  :title="title">
    <portfolio-item-graphic>
      <div class="relative mt-6 h-64 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-800 to-purple-800 opacity-80"></div>
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/70 z-0"></div>
        <div class="relative z-10 h-full flex flex-col items-center justify-center p-6 text-white text-center">
          <div class="absolute top-4 right-4 text-sm font-bold text-white">POWERBALL</div>
          <div class="text-4xl font-bold mb-2 drop-shadow-md">JACKPOT</div>
          <div class="text-3xl font-bold text-yellow-400 mb-2 drop-shadow-md">$245 MILLION</div>
          <div class="text-xl mb-6 drop-shadow-md">Next Drawing: Wednesday</div>
        </div>
        <div class="absolute bottom-0 left-0 w-full p-2 bg-black/50 flex justify-between items-center text-xs">
          <div class="text-gray-300">April 20, 2025</div>
          <div class="text-white">Play Responsibly</div>
        </div>
      </div>
      <portfolio-info :sub-title="subInfo" :title="info"/>
      <div class="flex flex-row gap-3">
        <big-info-data v-for="(data,k) in infoData" :key="k" :icon="data.icon" :sub-title="data.subTitle"
                       :title="data.title"/>
      </div>
    </portfolio-item-graphic>
    <portfolio-item-text>
      <portfolio-item-text-wrapper>

        <portfolio-text-block title="Challenge">
          <p>The company needed to enhance their existing digital signage solutions and develop new tools to support
            content creators, designers, and deployment teams. The challenge was to create efficient, reliable systems
            that could handle the demanding requirements of lottery displays worldwide.
          </p>
        </portfolio-text-block>

        <portfolio-text-block title="Solution">
          <p class="text-zinc-400">As a Software Developer on the Carmanah Signs team, I contributed to the development
            of their content management and delivery system for digital lottery displays. My responsibilities
            included:</p>
          <ul class="list-rainbow-circle">
            <li v-for="(item, index) in solutionPoints"
                :key="index"
                v-html="item"></li>
          </ul>
        </portfolio-text-block>

        <portfolio-text-block title="Technical Details">
          <p>Working with Carmanah Signs provided me with experience in both frontend and backend development for
            mission-critical systems. The digital signage industry requires highly reliable solutions that can operate
            continuously in various environments.</p>
          <p>The Docker deployment tool significantly reduced deployment time and minimized human error by automating
            the container setup process. Meanwhile, the Figma plugin bridged the gap between design and development
            teams, creating a more streamlined workflow for implementing new display designs.</p>
        </portfolio-text-block>

        <portfolio-text-block title="Results">
          <p>The tools and systems I helped develop contributed to Carmanah Signs' continued leadership in the lottery
            digital display market. By automating key processes and improving the content management system, we enhanced
            the company's ability to deploy and maintain digital signage solutions efficiently across their global
            customer base.</p>
        </portfolio-text-block>
      </portfolio-item-text-wrapper>

      <div class="p-8">
        <h3 class="text-xl font-semibold mb-4">Technologies Used:</h3>
        <div class="flex flex-wrap gap-2">
            <span
                v-for="tech in technologies"
                :key="tech.name"
                :class="tech.highlight ? 'bg-secondary/15 border-secondary/20' : 'bg-white/5'"
                class="px-3 py-2 text-sm rounded-md border border-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/10 hover:text-zinc-100">
              {{ tech.name }}
            </span>
        </div>
      </div>
    </portfolio-item-text>
  </portfolio-item>
</template>

<script>
export default {
  name: "Carmanah",
  data() {
    return {
      title: 'Carmanah Signs',
      projectLink: 'https://carmanahsigns.com/',
      projectLinklabel: 'To Company WebPage',
      subtitle: 'Digital display management for the lottery industry',
      description: 'Carmanah Signs, a world leader in manufacturing, installation, and maintenance of digital displays for the lottery industry, needed to streamline their content management and delivery system. As part of the larger STRATACACHE corporation, they required robust tools to automate processes and improve workflow efficiency for their digital signage products.',
      info: 'Global Leader',
      subInfo: 'in Lottery Digital Displays',
      infoData: [
        {
          icon: ['fab', 'docker'],
          title: 'Docker Deployment',
          subTitle: 'One-click deployment tool for Docker containers'
        },
        {icon: ['fab', 'figma'], title: 'Figma Plugin', subTitle: 'Custom plugin for streamlining design workflows'},
      ],
      technologies: [
        {name: 'PHP', highlight: true},
        {name: 'Yii', highlight: true},
        {name: 'SQL', highlight: true},
        {name: 'JS', highlight: true},
        {name: 'Docker', highlight: false},
        {name: 'git', highlight: false},
        {name: 'Electron', highlight: false},
        {name: 'Figma', highlight: false},
        {name: 'HTML', highlight: false},
        {name: 'CSS', highlight: false},
      ],
      solutionPoints: [
        'Developing and maintaining the core content management system for digital displays',
        'Creating a custom Figma plugin to streamline design-to-development workflow',
        'Building a desktop application for one-click deployment of products to Docker',
        'Automating various company processes to improve operational efficiency',
        'Integrating systems across the lottery digital display ecosystem',
      ],
      technicalChallenges: [
        "<strong>Legacy modernization</strong>: Upgrading a large PHP codebase to newer versions",
        "<strong>Cloud migration</strong>: Moving infrastructure to AWS (ECS, EC2, RDS)",
        "<strong>Data management</strong>: Working with large volumes of membership data",
        "<strong>Background processing</strong>: Implementing queuing systems for efficient job handling",
        "<strong>Cross-platform development</strong>: Ensuring consistent experience across web, mobile, and desktop"
      ]
    }
  }
}
</script>