<template>
  <portfolio-item :link-text="projectLinklabel" :link-url="projectLink" :subtitle="subtitle" :title="title">
    <portfolio-item-graphic>
      <portfolio-image :alt="title" :src="image"/>
      <portfolio-info :sub-title="subInfo" :title="info"/>
      <div class="flex flex-row gap-3">
        <info-data v-for="(data,k) in infoData" :key="k" :icon="data.icon" :sub-title="data.subTitle"
                   :title="data.title"/>
      </div>
    </portfolio-item-graphic>
    <portfolio-item-text>
      <portfolio-item-text-wrapper>

        <portfolio-text-block title="Project Overview">
          <p>Years ago, I ran a YouTube channel about development with the YII2 framework (PHP + OOP + AR). While it's
            less popular in North America than Laravel, the frameworks share many similarities.</p>
          <p>I still occasionally upload new content to the channel, which remains active with around 3,000 subscribers.
            The videos were never studio-quality productions — everything was recorded in a single take. I even
            conducted live programming sessions!</p>
        </portfolio-text-block>

        <portfolio-text-block title="Community Impact">
          <p>The channel fostered an incredible community with a friendly, supportive atmosphere. This experience
            demonstrates my leadership abilities, creative thinking, and skill in mentoring junior developers. Many
            subscribers have reached out to share that they've progressed to senior developer roles and thanked me for
            helping them take their first steps in programming — an achievement I'm particularly proud of.</p>
          <blockquote class="my-8 border-l-4 border-secondary/90 p-8 bg-secondary/10">
            <p class="italic mb-3">
              "Your YII2 tutorials were my starting point as a developer. I'm now working as a senior PHP developer, and
              I owe much of my foundation to your clear explanations and real-world examples."
            </p>
            <p class="text-right">
              <strong>— Former Subscriber, now Senior Developer</strong>
            </p>
          </blockquote>
        </portfolio-text-block>

        <portfolio-text-block title="Content Focus">
          <ul class="list-rainbow-circle">
            <li v-for="(item, index) in focus"
                :key="index"
                v-html="item"></li>
          </ul>
        </portfolio-text-block>
      </portfolio-item-text-wrapper>

      <tags :tags="technologies" class="py-8 md:p-8" title="Content Focus:"/>
    </portfolio-item-text>
  </portfolio-item>
</template>

<script>
export default {
  name: "MyWebSite",
  data() {
    return {
      title: 'YII2 Framework YouTube Channel',
      projectLink: 'https://www.youtube.com/@rucaua',
      projectLinklabel: 'Visit Channel',
      subtitle: 'Educating developers through hands-on programming',
      image: '/images/youtube.webp',
      infoData: [
        {icon: ['fa', 'film'], title: '~100', subTitle: 'Videos'},
        {icon: ['fa', 'heart'], title: '400,000+', subTitle: 'Total Views'},
        {icon: ['fa', 'clock'], title: '35,000+', subTitle: 'Watch Hours'},
      ],
      info: '3,000+',
      subInfo: 'Subscribers',
      portfolioCards: [
        {title: 'Projects', content: 'Showcasing my professional work and personal projects'},
        {title: 'Skills', content: 'Technical expertise and development capabilities'},
        {title: 'Experience', content: 'Professional background and career achievements'},
        {title: 'AI Assistant', content: 'Chat with a custom OpenAI-powered assistant'}
      ],
      technologies: [
        {name: 'Yii Framework', highlight: true},
        {name: 'PHP', highlight: true},
        {name: 'Sql', highlight: true},
        {name: 'HTML', highlight: false},
        {name: 'CSS', highlight: false},
        {name: 'JQuery', highlight: false},
        {name: 'AJAX', highlight: false},
        {name: 'Active Records', highlight: false},
        {name: 'Composer', highlight: false},
        {name: 'MVC', highlight: false},
      ],
      features: [
        'Responsive design with Tailwind CSS for optimal viewing on all devices',
        'Server-side rendering with Nuxt.js for improved performance and SEO',
        'Interactive project showcases with detailed case studies',
        'AI-powered chat assistant using OpenAI API for visitor interaction',
        'Streamlined deployment through GitHub and AWS Amplify',
      ],
      focus: [
        'Framework architecture and components',
        'Authentication and role-based access control',
        'Database operations with Active Record',
        'Frontend integration with AJAX and Pjax',
        'Internationalization and localization',
        'Building e-commerce functionality',
        'Performance optimization techniques',
      ]
    }
  }
}
</script>