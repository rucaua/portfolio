<template>
  <portfolio-item :link-text="projectLinklabel" :link-url="projectLink" :subtitle="subtitle" :title="title">
    <portfolio-item-graphic>
      <div class="w-full rounded-xl overflow-hidden border border-white border-opacity-5 shadow-xl bg-gray-800">
        <!-- Browser Bar -->
        <div class="w-full h-8 bg-gray-700 flex items-center px-3">
          <div class="flex gap-1.5 items-center">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
          <div class="ml-4 bg-gray-800 h-4 rounded-full flex-grow max-w-xs"></div>
        </div>

        <!-- Content -->
        <div class="p-5">
          <!-- Hero Section -->
          <div
              class="bg-gradient-to-br from-purple-900 to-green-900 bg-opacity-10 rounded-lg p-5 mb-5 border border-white border-opacity-5">
            <div
                class="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
              Developer Portfolio
            </div>
            <div class="text-gray-400 text-sm">
              Full-stack development with modern technologies
            </div>
          </div>

          <!-- Grid -->
          <div class="grid grid-cols-2 gap-4 mb-5">
            <div v-for="(card, index) in portfolioCards" :key="index"
                 class="bg-white bg-opacity-5 rounded-lg p-4 flex flex-col gap-2 border border-white border-opacity-5">
              <div class="text-base font-semibold text-gray-100">{{ card.title }}</div>
              <div class="text-gray-400 text-sm">{{ card.content }}</div>
            </div>
          </div>

          <!-- GitHub Section -->
          <div class="flex items-center bg-white bg-opacity-5 p-3 rounded-lg border border-white border-opacity-5">
            <svg class="w-6 h-6 text-gray-100 mr-3" fill="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <div class="text-sm text-gray-400">All code is open on <a class="text-purple-500 font-medium hover:text-green-500 transition-colors"
                                                                      href="#">GitHub</a>,
              so feel free to review it, reuse it, or contribute.
            </div>
          </div>
        </div>
      </div>
      <portfolio-info :sub-title="subInfo" :title="info"/>
      <icon-list :icons="icons"/>
    </portfolio-item-graphic>
    <portfolio-item-text>
      <portfolio-item-text-wrapper>

        <portfolio-text-block title="Overview">
          <p>My personal portfolio website built with: Vue.js (Nuxt SSR), Tailwind, Node.js, OpenAI API for chat
            assistant and deployed via GitHub + AWS Amplify.</p>
          <p>This site showcases my projects, skills, and professional experience in web development and UI/UX
            design.</p>
        </portfolio-text-block>

        <portfolio-text-block title="Features">
          <ul class="list-rainbow-circle">
            <li v-for="(item, index) in features"
                :key="index"
                v-html="item"></li>
          </ul>
        </portfolio-text-block>

        <portfolio-text-block title="Development Approach">
          <p>You can measure my full-stack skills, style filing and UI/UX capabilities through this project. All code is
            open on GitHub, so feel free to review it, reuse it, or contribute.</p>
          <p>The source code demonstrates best practices in modern frontend development with Vue.js and TypeScript,
            including:</p>
          <ul class="list-rainbow-circle">
            <li v-for="(challenge, index) in devApproach"
                :key="index"
                v-html="challenge"></li>
          </ul>
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
  name: "MyWebSite",
  data() {
    return {
      title: 'My Personal Portfolio',
      projectLink: 'https://github.com/rucaua/portfolio',
      projectLinklabel: 'View on GitHub',
      subtitle: 'A showcase of my development journey',
      icons: [],
      info: 'OpenAI API',
      subInfo: 'Integrated Chat Assistant',
      portfolioCards: [
        {title: 'Projects', content: 'Showcasing my professional work and personal projects'},
        {title: 'Skills', content: 'Technical expertise and development capabilities'},
        {title: 'Experience', content: 'Professional background and career achievements'},
        {title: 'AI Assistant', content: 'Chat with a custom OpenAI-powered assistant'}
      ],
      technologies: [
        {name: 'Vue.js', highlight: true},
        {name: 'Nuxt.js', highlight: true},
        {name: 'Tailwind CSS', highlight: true},
        {name: 'Node.js', highlight: false},
        {name: 'AWS Amplify', highlight: false},
        {name: 'OpenAI API', highlight: false},
        {name: 'FontAwesome', highlight: false}
      ],
      features: [
        'Responsive design with Tailwind CSS for optimal viewing on all devices',
        'Server-side rendering with Nuxt.js for improved performance and SEO',
        'Interactive project showcases with detailed case studies',
        'AI-powered chat assistant using OpenAI API for visitor interaction',
        'Streamlined deployment through GitHub and AWS Amplify',
      ],
      devApproach: [
        'Component-based architecture for maintainable code',
        'Type safety with TypeScript integration',
        'State management with Vue\'s Composition API',
        'Responsive design patterns using Tailwind utilities',
        'Integration with third-party APIs for enhanced functionality'
      ]
    }
  }
}
</script>