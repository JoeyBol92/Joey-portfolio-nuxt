// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,

  routeRules: {
    "/*/**": { ssr: true },
  },

  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  buildModules: ["@nuxtjs/tailwindcss"],

  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-09-29",
  modules: ["@nuxt/image", "@nuxt/fonts"],
});
