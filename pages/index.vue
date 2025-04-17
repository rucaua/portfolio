<template>
  <div class="container mx-auto">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Meta name="og:title" :content="title" />
      <Meta name="og:description" :content="description" />
      <Meta name="og:type" content="website" />
      <Meta name="og:url" :content="currentUrl" />
    </Head>
    <hero-section />
    <key-features-section :data="keyFeatures" />
    <tech-stack-section :data="techData"/>
    <time-line-section :data="jobsData"></time-line-section>
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import KeyFeaturesSection from "~/components/KeyFeaturesSection.vue";
export default {
  name: 'IndexPage',
  components: {KeyFeaturesSection, HeroSection},
  setup() {
    return {
      currentUrl: useRequestURL()?.hash || ''
    }
  },
  mounted() {
    // Watch for hash changes
    this.$router.afterEach((to) => {
      if (to.hash === '#contact') {
        this.$nextTick(() => {
          const contactElement = document.querySelector('[data-highlight="contact"]');
          if (contactElement) {
            contactElement.classList.add('highlight-animation');
            setTimeout(() => {
              contactElement.classList.remove('highlight-animation');
            }, 2000);
          }
        });
      }
    });
  },
  data() {
    return {
      title: 'Tymofeiev Max - Portfolio',
      description: 'Professional portfolio showcasing Tymofeiev Max (Maksym) work, skills, and experience',
      keyFeatures: [
        {title: '15+', subTitle: 'years of experience'},
        {title: 'SaaS', subTitle: 'solutions for business'},
        {title: 'Senior', subTitle: 'full stack developer'},
        {title: 'AI', subTitle: 'generative model'},
      ],
      jobsData: [
        {
          title: "Software Developer",
          company: "Carmanah Signs (STRATACACHE)",
          location: "Remote",
          period: "Oct 2024 – Apr 2025",
          responsibilities: [
            "Created CMS to manage digital signs content and scheduling for the Lottery & Gaming Division of STRATACACHE, the global leader in digital signage solutions",
            "Built automation tools including Figma plugins to streamline design workflows",
            "Developed desktop applications to automate company routines"
          ]
        },
        {
          title: "Full Stack Web Developer",
          company: "Sole Proprietor",
          location: "Calgary, AB, Canada (remote)",
          period: "Oct 2023 – Present",
          responsibilities: [
            "Revolutionized flexible and reactive CRM using Next.js, React, KNEX, and MySQL, enabling custom entities creation and relationships following OOP, KISS, and SOLID principles",
            "Developed parsers utilizing AI techniques to extract information from various websites, exploring emerging technologies with chatGPT and OpenAI API",
            "Created personal AI assistant chatbot hosted on AWS Tier, utilizing EC2 and Route53",
            "Developed Figma plugin to generate tables using JavaScript (VueJS), allowing quick table generation from CSV files or clipboard data with customizable styles and auto-save feature",
            "Implemented rigorous unit and functional testing to ensure code quality"
          ]
        },
        {
          title: "Web Application Engineer",
          company: "Union Digital (software company)",
          location: "Toronto, ON, Canada (remote)",
          period: "May 2019 – Sep 2023",
          responsibilities: [
            "Maintained and developed large-scale PHP project (450K+ lines of code, 7,450+ classes), implementing optimizations for SOLID principles, speed, and stability",
            "Optimized database performance, managed synchronization lags, crafted complex SQL statements with various ORMs (ActiveRecord, Doctrine, Eloquent, RedBean) and developed custom ORMs",
            "Implemented solutions using modern JavaScript, Node.js, and frameworks (Vue.js, NextJS, React) with Webpack, developing web applications, mobile apps, and Electron desktop applications",
            "Utilized GitHub, GitLab, and Bitbucket with CI/CD practices and semantic versioning for effective project management",
            "Specialized in AWS cloud technologies (Route53, S3, EC2, RDS, ElasticCache, IAM), managing scaling and transitions",
            "Mastered Docker for Linux and Windows environments, streamlining programming tasks",
            "Developed secure voting systems for union elections including desktop application, mobile application and RESTful API",
            "Focused on problem-solving, seeking optimal solutions through various avenues including team collaboration",
            "Contributed to mobile application development using Cordova, Metro, React Native, Vue.js, and Onsen UI"
          ],
          achievements: [
            "Upgraded project from PHP 5.6 to 7.4 to enhance performance and mitigate security vulnerabilities",
            "Led SaaS project migration from on-premises to AWS, resolving RDS reader latency and S3 synchronization issues",
            "Improved system performance by reducing hard-coded elements, enhancing ORM, and updating user permissions logic",
            "Developed cross-platform applications for web, mobile (Android/iOS), and desktop (Windows/Linux)"
          ]
        },
        {
          title: "Full Stack Developer",
          company: "Web studio (sole proprietor)",
          location: "Kharkiv, Ukraine (remote)",
          period: "Feb 2009 – May 2019",
          responsibilities: [
            "Developed and maintained websites using Yii2, VueJS and modern web technologies, including PHP-based CMS platforms (WordPress, MODx, Moodle)",
            "Created comprehensive testing suites including unit, integration, and functional tests",
            "Built website frontends using HTML, CSS, JavaScript, SVG with modern frameworks like Vue.js, React, and Bootstrap",
            "Integrated third-party services including payment systems, Amazon services (OCR, S3), cPanel, marketing services (SMS, voice, email)",
            "Implemented APIs including Twilio, SendGrid, and Stripe",
            "Applied CSS expertise including Flexbox, Grid, and frameworks (Bootstrap, Tailwind, Skeleton, Foundation, Material Design)",
            "Developed strategic MVP approach within comprehensive planning, utilizing project management systems (Jira) and Agile methodologies",
            "Implemented SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) for effective project objectives"
          ]
        }
      ],
      techData: [
        {
          name: 'PHP',
          icon: 'fa-brands fa-php',
          progress: 90,
          version: '5.x - 8.x',
          experience: '15+ years',
          technologies: ['Yii', 'Symfony', 'Laravel', 'WordPress', 'MODx', 'Moodle'],
          text: "Despite my favorite PHP framework being Yii and having devoted a large portion of my time to it, that doesn't mean I was limited to it. I am also proficient with Symfony and Laravel. Additionally, I've encountered PHP-based CMS platforms, including WordPress, MODx, Moodle etc. My diverse portfolio encompasses a wide spectrum of projects: CRM systems, A platform for painters to provide their services, Tender management systems, Pharmaceutical warehouse management solutions, A REST API for voting systems, A backend for managing conferences based on Jitsi. Furthermore, I have hands-on experience integrating third-party APIs such as Twilio, SendGrid, Stripe etc. I am a strong proponent of Object-Oriented Programming (OOP) and consistently apply the SOLID and KISS principles to ensure clean, maintainable, and scalable code. My approach ensures that systems are robust, efficient, and adaptable to change. Despite the common preference for starting from scratch, I have extensive experience working with Legacy code. This has involved optimizing, fixing, transferring to new versions of PHP, containerizing, and adapting for cloud deployment. Rigorous unit and functional testing are integral to ensuring top-notch code quality."
        },
        {
          name: 'SQL',
          icon: 'fa-solid fa-database',
          progress: 80,
          experience: '15+ years',
          technologies: ['mariaDB', 'MySQL', 'Amazon RDS'],
          text: "Proficient in complex SQL queries, stored procedures, and views. Prioritize load optimization techniques to improve database performance. My experience with database replication has equipped me with the skills to effectively manage synchronization lags. I am proficient in crafting intricate SQL statements and have worked extensively with a variety of ORMs, including ActiveRecord, Doctrine, Eloquent, and RedBean. Additionally, I have demonstrated my capability by developing a custom ORM tailored to meet the unique requirements of a specific project."
        },
        {
          name: 'JavaScript (ES6)',
          icon: 'fa-brands fa-js',
          progress: 70,
          experience: '15+ years',
          technologies: ['NodeJS', 'VueJS', 'NextJS', 'React', 'jQuery', 'Webpack', 'Electron'],
          text: "My journey in web development began 15 years ago with jQuery and basic web design principles. However, the past five years have marked a significant shift towards modern JavaScript, with a focus on ES6, Node.js, and a variety of leading frameworks. Among these, Vue.js both versions 2 and 3 stands out as my preferred choice, complemented by its ecosystem of Vuex/Pinia and Vue Router. This preference for Vue.js doesn't imply exclusivity; I've also gained substantial experience with NextJS, React and React Native, and I possess a foundational understanding of Angular. In terms of build tools, Webpack is part of my regular toolkit, and I fondly recall working with predecessors like Gulp. My professional portfolio spans front-end web applications, mobile app development, some back-end work, and even a foray into desktop application development with Electron. Throughout these projects, I've integrated a host of popular libraries, including Lodash, RJS, Chart.js, Moment.js, etc., to deliver robust and dynamic user experiences. In addition to my web development journey, I've also delved into the world of design tools. Specifically, I've gained experience in developing plugins for Figma using JavaScript. One such creation is the Ananas Table plugin for Figma, which I developed using VueJS. This plugin is designed to enhance the functionality of Figma by allowing users to create and manage tables efficiently within their design environment."
        },
        {
          name: 'Version Control',
          icon: 'fa-brands fa-git-alt',
          progress: 70,
          experience: '7+ years',
          technologies: ['Git', 'Github', 'Gitlab', 'Bitbucket'],
          text: "My experience with Git spans approximately 15 years, with active usage over the past 7 years. During this time, I've worked with platforms such as GitHub, GitLab, and Bitbucket, gaining expertise in CI/CD practices. Additionally, I'm well-versed in the principles of semantic versioning, which allows me to effectively manage project versions."
        },
        {
          name: 'CSS',
          icon: 'fa-brands fa-css3-alt',
          progress: 90,
          technologies: ['LESS', 'SASS/SCSS', 'Bootstrap', 'Tailwind'],
          text: "I possess a comprehensive understanding of CSS and its preprocessors like LESS and SASS/SCSS. I'm experienced with both Bootstrap and Tailwind frameworks for responsive design."
        },
        {
          name: 'DevOps',
          icon: 'fa-solid fa-gears',
          progress: 60,
          experience: '5+ years',
          technologies: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Cloud Deployment'],
          text: "Experienced in containerization using Docker and orchestration with Kubernetes. Proficient in setting up CI/CD pipelines for automated testing and deployment. Skilled in cloud deployment strategies and infrastructure management across various platforms."
        },
        {
          name: 'Testing',
          icon: 'fa-solid fa-vial',
          progress: 60,
          experience: '10+ years',
          technologies: ['PHPUnit', 'Jest', 'Cypress', 'TDD', 'BDD'],
          text: "Strong advocate for test-driven development methodologies. Experienced in writing comprehensive unit tests, integration tests, and end-to-end tests to ensure code quality and reliability. Proficient with testing frameworks like PHPUnit for PHP and Jest/Cypress for JavaScript applications."
        },
        {
          name: 'Cloud Services',
          icon: 'fa-solid fa-cloud',
          progress: 50,
          experience: '5+ years',
          technologies: ['AWS', 'Google Cloud', 'Azure', 'Heroku', 'Digital Ocean'],
          text: "Extensive experience with cloud deployment and infrastructure management across multiple platforms including AWS, Google Cloud, and Azure. Proficient in setting up scalable architectures, implementing serverless solutions, managing cloud databases, and optimizing costs. Experienced in deploying and managing containerized applications in cloud environments using services like AWS ECS, Google Kubernetes Engine, and Azure Container Instances. Skilled in implementing cloud security best practices and disaster recovery strategies."
        },
        {
          name: 'Python',
          icon: 'fa-brands fa-python',
          progress: 20,
          experience: '3+ years',
          technologies: ['Django', 'Flask', 'NumPy', 'Pandas', 'Jupyter'],
          text: "Proficient in Python development for both web applications and data analysis tasks. Experience with Django and Flask frameworks for building robust web applications. Skilled in using Python for data processing and analysis with libraries like NumPy and Pandas. Familiar with Jupyter notebooks for exploratory data analysis and documentation. Have implemented machine learning models using scikit-learn and TensorFlow for various data prediction projects."
        },
        {
          name: 'Mobile Development',
          icon: 'fa-solid fa-mobile-screen',
          progress: 40,
          experience: '4+ years',
          technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
          text: "Experienced in cross-platform mobile application development using React Native and Flutter. Created and deployed multiple applications to both iOS App Store and Google Play Store. Proficient in implementing responsive UI designs, handling device-specific features, and optimizing performance for mobile platforms. Experience integrating with device hardware features like camera, GPS, and biometric authentication. Knowledgeable in mobile app deployment processes, testing strategies, and user experience optimization for mobile interfaces."
        },
        {
          name: 'UI/UX Design',
          icon: 'fa-solid fa-pen-ruler',
          progress: 85,
          experience: '6+ years',
          technologies: ['Figma', 'Adobe XD', 'Sketch', 'Responsive Design', 'Design Systems'],
          text: "Strong understanding of UI/UX principles and practices with experience creating intuitive, accessible user interfaces. Skilled in developing design systems that ensure consistency across applications. Experienced in conducting user research and usability testing to inform design decisions. Proficient with design tools like Figma, Adobe XD, and Sketch for creating wireframes, mockups, and interactive prototypes. Advocate for accessibility standards and inclusive design practices in all projects."
        },
        {
          name: 'API Development',
          icon: 'fa-solid fa-code',
          progress: 90,
          experience: '8+ years',
          technologies: ['REST', 'GraphQL', 'OpenAPI', 'Swagger', 'OAuth'],
          text: "Extensive experience designing and implementing robust APIs using both REST and GraphQL architectures. Skilled in API security implementation including OAuth, JWT, and API keys. Proficient in API documentation using OpenAPI/Swagger. Experienced in versioning strategies, rate limiting, and caching for optimized API performance. History of successfully integrating diverse third-party APIs into applications and creating developer-friendly, well-documented APIs for public consumption."
        },
        {
          name: 'DevOps & Infrastructure',
          icon: 'fa-solid fa-server',
          progress: 60,
          experience: '5+ years',
          technologies: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'CircleCI'],
          text: "Proficient in containerization technologies and orchestration with Docker and Kubernetes. Experienced in infrastructure as code using Terraform to provision and manage cloud resources. Skilled in setting up and optimizing CI/CD pipelines with tools like Jenkins, GitHub Actions, and CircleCI. Knowledgeable in monitoring and logging solutions like Prometheus, Grafana, and ELK stack. Focus on implementing security best practices throughout the development and deployment process to maintain robust, reliable systems."
        }
      ]
    }
  },
  head() {
    return {
      title: 'Tymofeiev Max - Portfolio',
      meta: [
        { name: 'description', content: 'Professional portfolio showcasing my work, skills, and experience' }
      ]
    }
  }
}
</script>
