<template>
  <portfolio-item :link-text="projectLinklabel" :link-url="projectLink" :subtitle="subtitle" :title="title">
    <portfolio-item-graphic>
      <portfolio-image :alt="title" :src="image"/>
      <portfolio-info :sub-title="subInfo" :title="info"/>
      <icon-list :icons="icons"/>
    </portfolio-item-graphic>
    <portfolio-item-text>
      <portfolio-item-text-wrapper>

        <portfolio-text-block title="Challenge">
          <p>Maintaining the existing CRM functionality while simultaneously updating to newer versions of PHP and
            implementing modern development standards. Also labor unions needed a comprehensive digital solution to
            manage members, communications, and operations efficiently. The challenge was to create a unified suite of
            applications that could work across different platforms while handling large amounts of data and providing
            essential features for union management.
          </p>
        </portfolio-text-block>

        <portfolio-text-block title="Solution">
          <p class="text-zinc-400">Maintained and improved existing products. Developed various Apps, a suite of
            interconnected products including:</p>
          <ul class="list-rainbow-circle">
            <li v-for="(item, index) in solutionPoints"
                :key="index"
                v-html="item"></li>
          </ul>
        </portfolio-text-block>

        <portfolio-text-block title="Technical Challenges">
          <ul class="list-rainbow-circle">
            <li v-for="(challenge, index) in technicalChallenges"
                :key="index"
                v-html="challenge"></li>
          </ul>
        </portfolio-text-block>
      </portfolio-item-text-wrapper>
      <tags :tags="technologies" title="Technologies Used:" class="py-8 md:p-8"/>
    </portfolio-item-text>
  </portfolio-item>
</template>

<script>
export default {
  name: "Union",
  data() {
    return {
      title: 'UN1ON',
      projectLink: 'https://union1software.com/',
      projectLinklabel: 'Project Page',
      subtitle: 'Comprehensive IT solutions for labor unions',
      icons: [
        {title: 'web', icon: ['fab', 'internet-explorer']},
        {title: 'ios', icon: ['fab', 'apple']},
        {title: 'android', icon: ['fab', 'android']},
        {title: 'desktop', icon: ['fas', 'computer']},
      ],
      image: '/images/union.svg',
      info: 'Cross-Platform',
      subInfo: 'SaaS, Mobile & Desktop',
      technologies: [
        {name: 'PHP', highlight: true},
        {name: 'JavaScript', highlight: true},
        {name: 'MySQL', highlight: true},
        {name: 'AWS', highlight: false},
        {name: 'EC2', highlight: false},
        {name: 'ECS', highlight: false},
        {name: 'RDS', highlight: false},
        {name: 'VueJS', highlight: false},
        {name: 'Jquery', highlight: false},
        {name: 'iOS', highlight: false},
        {name: 'Android', highlight: false},
        {name: 'Desktop Apps', highlight: false},
      ],
      solutionPoints: [
        "Modernized the <strong>SaaS CRM system</strong> with PHP backend and JavaScript frontend",
        "<strong>Developed Mobile applications</strong> for iOS and Android platforms",
        "Developed Several <strong>desktop applications</strong> for comprehensive accessibility",
        "Created tools for mass email and SMS campaigns",
        "Created video conferencing capabilities for remote meetings"
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