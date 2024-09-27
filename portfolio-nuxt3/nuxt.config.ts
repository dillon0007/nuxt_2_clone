import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.d
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Web Developer Portfolio | Dillon Girkar",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Personal Portfolio Website. Hi, Dillon Girkar. I'm a Front-End Web Developer based in Kuala Lumpur, Malaysia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Dillon Girkar" },
        {
          name: "keywords",
          content:
            "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer",
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "Web Developer Portfolio | Dillon Girkar",
        },
        {
          property: "og:site",
          content: "https://localhost:3000",
        },
        {
          property: "og:title",
          content: "Web Developer Portfolio | Dillon Girkar",
        },
        {
          property: "og:description",
          content:
            "Personal Portfolio Website. Dillon Girkar. I'm a Front-End Web Developer based in Kuala Lumpur, Malaysia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
        },
        // sharing thumbmail img
        {
          property: "og:image",
          content: "", ///favicon-wb.png
        },
        // google site verification
        {
          name: "google-site-verification",
          content: "CpKqeACrIS7JLwdilAnMgoDicJnoBaNmupPoq6fUtFs",
        },
      ],
      link: [{ rel: "", href: "" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
  runtimeConfig: {
    public: {
      NUXT_GTM_ID: process.env.NUXT_GTM_ID,
    },
  },
});
