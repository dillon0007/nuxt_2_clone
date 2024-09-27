<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Web Developer Portfolio | Dillon Girkar",
  author: {
    "@type": "Person",
    "@id": "#dillongirkar",
  },
  url: "https://localhost:3000",
  description:
    "Personal Portfolio Website. Hi, I am Dillon Girkar. I'm a Developer based in Vasai, Mumbai. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
  keywords:
    "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Dillon Girkar, Vasai, Mumbai, India",
  image: "",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#dillongirkar",
  name: "Dillon Girkar",
  email: "Dillongirkar30@gmail.com",
  url: "https://localhost:3000",
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json",
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json",
    },
  ],
});
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="main">
    <Header />
  </NuxtLayout>
</template>
