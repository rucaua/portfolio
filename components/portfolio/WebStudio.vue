<template>
  <portfolio-item :subtitle="subtitle" :title="title">
    <portfolio-item-graphic class="flex flex-col gap-6 md:w-2/4">
      <portfolio-item-text-wrapper>
        <div class="flex flex-row justify-between p-4 md:p-8">
          <div>
            <h4 class="text-4xl font-semibold mb-3">Full Stack Developer & Co-Founder</h4>
            <div class="flex flex-row justify-start items-center my-6">
              <span class="bg-secondary/15 px-6 py-4 rounded-xl">Web Studio</span>
              <span class="ml-6">Kharkiv, Ukraine – Remote</span>
            </div>
          </div>
          <div
              class="ml-8 rounded-full w-24 aspect-square p-0 mb-auto bg-grey-dark/5 border border-white/5 flex items-center justify-center">
            <span class="text-center text-soft-rainbow">10+</span>
          </div>
        </div>

        <portfolio-text-block title="Challenge">
          <p>
            As a full-stack developer, I've had the opportunity to work on numerous projects. While most were web-based
            SaaS solutions, my experience extends far beyond that. I've worked with an extensive range of web, mobile,
            and desktop applications. This included running my own electronics e-commerce store, developing travel
            portals, creating PortretMe (a freelance marketplace for artists), building an online tender system for
            large industrial equipment, and many other ventures.
          </p>
        </portfolio-text-block>

        <portfolio-text-block title="Solution">
          <p class="pb-6">
            Developed and maintained full-stack web solutions using Yii2, Vue.js, React, and various PHP-based CMS
            platforms (WordPress, MODx, Moodle). Built responsive frontends with HTML, CSS (Flexbox, Grid, Tailwind,
            Bootstrap, etc.), and JavaScript, adhering to UI/UX best practices and WCAG standards.
          </p>
          <p class="pb-6">
            Integrated third-party services such as Stripe, Twilio, SendGrid, Amazon services (S3, OCR), cPanel, and
            marketing platforms (SMS, voice, email). Delivered robust, test-covered code (unit, integration, functional)
            and followed Agile practices using Jira and SMART goals.
          </p>
          <p>
            Created scalable solutions across industries—tender management systems, pharmaceutical logistics, painter
            service platforms, conference backends (Jitsi), and dozens of websites and e-commerce projects in
            construction, education, music, fashion, electronics, and more.
          </p>
        </portfolio-text-block>

        <portfolio-text-block title="Achievements">
          <p class="pb-6">
            Diverse portfolio encompasses a wide spectrum of accomplished projects: management systems for tenders;
            pharmaceutical warehouse management solutions; a platform for painters to provide their services; a backend
            for managing conferences based on Jitsi.
          </p>
          <p>
            Created dozens of websites and e-commerce projects across various industries, such as construction, housing
            repair services, education, music labels, clothing, electronics, cosmetics, construction materials,
            services, webinars, and other sectors.
          </p>
        </portfolio-text-block>

      </portfolio-item-text-wrapper>
    </portfolio-item-graphic>
    <portfolio-item-text class="flex flex-col gap-6 md:w-2/4">
      <portfolio-item-text-wrapper class="flex flex-col p-4 md:p-8 gap-10">
        <h4 class="text-4xl font-semibold mb-3">Technologies & Projects</h4>
        <tags :tags="frontendTechnologies" title="Frontend Technologies"/>
        <tags :tags="backendTechnologies" title="Backend Technologies"/>
        <tags :tags="cloudTechnologies" title="Cloud Technologies"/>
        <tags :tags="integrations" title="Integrations"/>
        <tags :tags="hybrid" title="Hybrid Development"/>
        <h4 class="text-4xl font-semibold mb-3">Project Types</h4>
        <div class="flex flex-col md:flex-row flex-wrap -m-4">
          <div
              v-for="project in projectTypes"
              :key="project.type"
              class="md:w-1/2 p-4">
            <div class="p-4 text-base rounded-xl border border-white/5 bg-white/5 h-full">
              <h5 class="text-gradient-start text-2xl mb-4">{{ project.type }}</h5>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
      </portfolio-item-text-wrapper>
    </portfolio-item-text>
  </portfolio-item>
</template>

<script>

export default {
  name: "WebStudio",
  data() {
    return {
      title: 'Web Studio Co-Founder',
      subtitle: 'Building innovative digital solutions across web, mobile, and desktop platforms for diverse industries',
      info: 'Global Leader',
      subInfo: 'in Lottery Digital Displays',
      projectTypes: {
        saas: {
          type: 'SaaS',
          description: 'Web-based SaaS solutions for wide range of industries'
        },
        ecommerce: {
          type: 'E-commerce',
          description: 'Online stores for electronics and cosmetics'
        },
        travel: {
          type: 'Tender Management',
          description: 'Systems for industrial equipment procurement.'
        },
        freelance: {
          type: 'Freelance Board',
          description: 'Marketplace for artists'
        },
      },
      frontendTechnologies: [
        {name: 'HTML5', highlight: true},
        {name: 'CSS3', highlight: true},
        {name: 'JavaScript', highlight: true},
        {name: 'Vue.js', highlight: false},
        {name: 'ReactJS', highlight: false},
        {name: 'Bootstrap', highlight: false},
        {name: 'Tailwind CSS', highlight: false},
        {name: 'SASS/SCSS', highlight: false},
        {name: 'LESS', highlight: false},
        {name: 'Flexbox', highlight: false},
        {name: 'CSS Grid', highlight: false},
        {name: 'SVG', highlight: false},
      ],
      backendTechnologies: [
        {name: 'PHP', highlight: true},
        {name: 'NodeJS', highlight: true},
        {name: 'Yii', highlight: true},
        {name: 'Laravel', highlight: true},
        {name: 'Nuxt', highlight: true},
        {name: 'Next', highlight: false},
        {name: 'MySQL', highlight: false},
        {name: 'MongoDB', highlight: false},
        {name: 'TypeScript', highlight: false},
        {name: 'Codeception', highlight: false},
        {name: 'Unit Tests', highlight: false},
        {name: 'Acceptance Tests', highlight: false},
        {name: 'Functional Tests', highlight: false},
        {name: 'Gulp', highlight: false},
        {name: 'Webpack', highlight: false},
        {name: 'Vite', highlight: false},
      ],
      cloudTechnologies: [
        {name: 'Docker', highlight: true},
        {name: 'AWS EC2', highlight: true},
        {name: 'AWS ECS', highlight: true},
        {name: 'AWS RDS', highlight: true},
        {name: 'AWS Amplify', highlight: true},
        {name: 'AWS Route 52', highlight: false},
        {name: 'AWS IAM', highlight: false},
        {name: 'AWS Cognito', highlight: false}
      ],
      integrations: [
        {name: 'Twilio', highlight: true},
        {name: 'Sendgrid', highlight: true},
        {name: 'cPanel', highlight: true},
        {name: 'Stripe', highlight: true},
        {name: 'Google Maps', highlight: true},
        {name: 'openAI', highlight: true},
      ],
      hybrid: [
        {name: 'Electron', highlight: true},
        {name: 'ReactNative', highlight: true},
        {name: 'Cordova', highlight: false},
        {name: 'Capacitor', highlight: false},
      ]
    }
  }
}
</script>