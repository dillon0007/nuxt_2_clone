<template>
  <div>
    <NavBar />
    <!-- <SideNavigation
      :left-link="leftLink"
      :right-link="rightLink"
      :show-right-link="showRightLink"
    >
      <slot />
    </SideNavigation> -->
    <slot />
    <Footer />
  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const gtag = `
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "${runtimeConfig.public.NUXT_GTM_ID}");
`;
useHead({
  script: [
    {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${runtimeConfig.public.NUXT_GTM_ID}`,
    },
    {
      type: "text/javascript",
      innerHTML: gtag,
    },
    {
      type: "text/javascript",
      src: "js/useCopy.js",
    },
  ],
});
</script>

