<script setup>
//const
const { projects } = useConstants();
useHead({
  title: "Web Developer Portfolio | Personal Projects",
  meta: [
    {
      property: "og:title",
      content: "Web Developer Portfolio | Personal Projects",
    },
    {
      property: "og:site_name",
      content: "Web Developer Portfolio | Personal Projects",
    },
    {
      property: "og:site",
      content: "https://localhost:3000/projects",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <ProjectSection :projects="projects" />
  </NuxtLayout>
</template>
