// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    { src: "@/plugins/vueflags.js" }
  ],
  modules: ['@nuxtjs/google-fonts'],
  app: {
    baseURL: '',
    buildAssetsDir: 'assets'
  },
  vite: {
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..'],
      }
    }
}
})
