// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@sentry/nuxt/module"],

  sentry: {
    sourceMapsUploadOptions: {
      org: "sentry-sdks",
      project: "javascript-nuxt-ol",
    },
  },

  sourcemap: {
    client: "hidden",
  },
});
