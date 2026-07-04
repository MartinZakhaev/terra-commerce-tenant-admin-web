export default defineNuxtConfig({
  compatibilityDate: "2026-07-04",
  devtools: { enabled: true },
  ssr: false,
  typescript: {
    strict: true,
    typeCheck: true,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? "/api/v1",
    },
  },
  app: {
    head: {
      title: "Terra Commerce Tenant Admin",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "noindex, nofollow" },
      ],
    },
  },
})
