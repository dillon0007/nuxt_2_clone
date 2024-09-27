<script setup>
//const
const { hobbies, timeline } = useConstants();
useHead({
  meta: [
    {
      property: "og:site",
      content: "https://localhost:3000/about",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="about-section">
      <Profile />
      <div class="empty-left-content"></div>
      <div class="right-content">
        <section>
          <h2>About</h2>
          <p class="mt-2">
            Hi there!  Currently completed my Computer Science Engineering
              Degree in St. Francis Institute of Technology,
              After discovering my passion for web development, I made a career
              in becoming a Software developer.  Currently, I'm a Fresher and eagerly
              to work on.
            
          </p>
          <p class="mt-2">
            I'm passionate in learning new technologies, building responsive
            websites, and documenting my working process when it comes to
            complicated features.
          </p>
          <p class="mt-2">
            Here are a few technologies I've been working with recently:
          </p>

          <div class="flex gap-10 mt-2 pl-3">
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>NextJs</li>
              <li>Vue</li>
            </ul>
            <ul>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>Material UI</li>
              <li>jQuery</li>
            </ul>
          </div>
        </section>

        <section>
          <!-- <h2>Timeline</h2> -->
          <CardsCareer v-for="career in timeline" :career-details="career" />
        </section>

        <HobbySection :hobbies="hobbies" />
      </div>
    </div>
  </NuxtLayout>
</template>
