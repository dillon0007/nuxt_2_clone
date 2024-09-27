<template>
  <section
    id="about"
    class="overflow-x-hidden flex items-center bg-white py-8 2xl:pb-10 md:py-20 lg:py-0 dark:bg-[#121212]"
  >
    <div class="px-6 mx-auto md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
      <div class="items-center justify-between lg:flex lg:space-x-10">
        <div class="lg:w-7/12 leftText">
          <h2 class="profile-title">Who am I?</h2>
          <div class="profile-description-container">
            
            <p>
              Hi there!  Currently completed my Computer Science Engineering
              Degree in St. Francis Institute of Technology,
              After discovering my passion for web development, I made a career
              in becoming a Software developer.  Currently, I'm a Fresher and eagerly
              to work on.
            </p>

            <p>
              I'm passionate in learning new technologies, building responsive
              websites, and documenting my working process when it comes to
              complicated features.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <div class="summary-skill-list-container">
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>NextJs</li>
              <li>Vue</li>
            </ul>
            <ul>
              <li>TypeScript</li>
              <li>jQuery</li>
              <li>Shopify Liquid</li>
              <li>TailwindCSS</li>
            </ul>
          </div>

          <div class="profile-social-icons">
            

            <a
              href="https://www.linkedin.com/in/dillon-girkar/"
              aria-label="Linkden"
              target="blank"
            >
              <IconsLinkedInIcon />
            </a>

            <a
              href="https://github.com/dillon0007"
              aria-label="Github"
              target="blank"
            >
              <IconsGithubIcon />
            </a>
          </div>
        </div>

        <div class="mt-8 lg:mt-0 lg:w-4/12 xl:w-4/12 right-img-container">
          <div class="flex items-center justify-center lg:justify-end group">
            <div class="profile-img-container">
              <img
                src="/profile-pics/Dillon_pic.jpeg"
                width="350"
                height="350"
                alt="profile image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import gsap from "gsap";

onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".leftText",
      start: "top center",
      end: "top center",
      // markers: true,
      // toggleActions: "restart pause reverse pause",
      // scrub: 1, // scrub is use set the amount of time to catch up, it kinda looks the scroll animation with ur scroller
    },
  });
  tl.addLabel("start")
    .from(".leftText", { opacity: 0, translateX: "-100px" })
    .addLabel("entering")
    .to(".leftText", { opacity: 1, translateX: "0px", duration: 1 })
    .addLabel("end");

  let imgTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".right-img-container",
      start: "top center",
      end: "top center",
      // markers: true,
    },
  });
  imgTl
    .addLabel("start")
    .from(".right-img-container", { opacity: 0, translateX: "100px" })
    .addLabel("entering")
    .to(".right-img-container", {
      opacity: 1,
      translateX: "0px",
      duration: 1,
    })
    .addLabel("end");
});
</script>
<style scoped>
@media screen and (min-width: 1024px) {
  section {
    height: calc(100vh - 227px);
  }
}
</style>
