<template>
  <section class="container mx-auto">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description"/>
      <Meta name="og:title" :content="title"/>
      <Meta name="og:description" :content="description"/>
      <Meta name="og:type" content="website"/>
      <Meta name="og:url" :content="currentUrl"/>
    </Head>
    <div class="mb-20">
      <div class="flex flex-col w-full">
        <h2 class="text-4xl font-bold">My works and projects</h2>
        <div class="my-20 text-2xl">
          <p>Unfortunately, as I primarily work with SaaS solutions, I don't have many projects that are accessible via
            the web. However, I do have a couple of personal projects that you can view and try out.</p>
        </div>

        <div class="flex flex-row flex-wrap gap-y-12">
          <div class="w-1/2 p-3">
            <Article title="Ananas Table" :inverseTitle="true" img="/ananasTable.png" link-text="Try the Plugin"
                     link-url="https://www.figma.com/community/plugin/1374168501688267750/ananas-table">
              <p>
                A Figma plugin built with Vue.js and Figma Plugin API. It helps eliminate routine work by generating
                tables in Figma with just two clicks. Works with both CSV data and empty tables. Customizable styles
                and
                more.
              </p>
              <p>
                The plugin has already found over 1,300 satisfied users and demonstrates my UI/UX and Vue.js skills.
              </p>
              <p>
                The plugin is free, so you can try it without any issues.
              </p>
              <p>
                About the name: "Ananas" means "Pineapple" in many Slavic languages. As time and ideas permit, I plan
                to
                create an umbrella brand with a wide range of plugins.
              </p>
            </Article>
          </div>
          <div class="w-1/2 p-3">
            <Article title="My Personal Portfolio" img="/portfolio.png" link-text="View Repository"
                     link-url="https://github.com/rucaua/portfolio">
              <p>
                My personal portfolio website built with:
                Vue.js (Nuxt SSR), Tailwind, Node.js, OpenAI API for <a href="/" target="_blank" class="link">chat
                assistant</a> and deployed via GitHub + AWS Amplify.
              </p>
              <p>
                This site showcases my projects, skills, and professional experience in web development and UI/UX
                design.
              </p>
              <p>
                You can measure my full-stack skills, style filing and UI/UX capabilities. All code is open on
                <a href="https://github.com/rucaua/portfolio" target="_blank" class="link">GitHub</a>, so feel free to
                review it, reuse it, or contribute.
              </p>
              <p>
                The source code demonstrates best practices in modern frontend development with Vue.js and
                TypeScript.
              </p>
            </Article>
          </div>
          <div class="w-1/2 p-3">
            <Article title="UN1ON" img="/union1.webp" link-text="Link to company website"
                     link-url="https://union1software.com/" :inverseTitle="true">
              <p>
                During my first 5 years in Canada, I worked on solutions for labor unions. This involved a suite of products: a SaaS CRM system built with PHP backend and JavaScript frontend, mobile applications across different platforms, and several desktop applications.
              </p>
              <p>
                UN1ON apps provide comprehensive IT and marketing solutions for labor unions, helping them manage members, create mass email and SMS campaigns, host video conferences, and more.
              </p>
              <p>
                I developed some services from scratch, while maintaining and enhancing others alongside team members. We tackled many interesting challenges, including upgrading a large PHP codebase to a newer version, migrating projects to modern cloud infrastructure (AWS: ECS, EC2, RDS, etc.), working with large volumes of data, handling background jobs with queues, and more.
              </p>
              <p>
                I'm very grateful to UN1ON for this great experience working with a diverse technology stack and alongside excellent teammates.
              </p>
            </Article>
          </div>
          <div class="w-1/2 p-3">
            <Article title="Carmanah Signs" img="/carmanahsign.png" link-text="Link to company website"
                     link-url="https://carmanahsigns.com/" :inverseTitle="true">
              <p>
                Carmanah Signs is a world leader in the manufacturing, installation, and maintenance of digital displays for the lottery industry. It operates as the Lottery & Gaming Division of the even larger corporation, STRATACACHE.
              </p>
              <p>
                I was fortunate to work with the team of professionals at Carmanah Signs on their content management and delivery system for digital displays. As a Software Developer, I also had the opportunity to develop tools for automating various company processes, including a Figma plugin and a desktop application that enables one-click deployment of products to Docker.
              </p>
            </Article>
          </div>
        </div>

        <div class="my-20 text-2xl">
          <p>This represents only the last five to six years of my career, focusing exclusively on my Canadian experience. Prior to this, I had over 10 years of experience in CIS countries working on diverse projects. This included running my own electronics e-commerce store, developing travel portals, creating PortretMe (a freelance marketplace for artists), building an online tender system for large industrial equipment, and many other ventures. While you may not have time to read about all of this, I'd be happy to share more details if any part of my experience interests you.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      title: 'Portfolio - Max Tymofeiev | Full-Stack Developer',
      description: "Max Tymofeiev's work and projects",
      currentUrl: useRequestURL()?.hash || '',
    }
  }
}
</script>

<style scoped>
</style>