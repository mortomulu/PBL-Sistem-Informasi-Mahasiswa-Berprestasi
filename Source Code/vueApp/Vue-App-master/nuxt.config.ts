
// https://nuxt.com/docs/api/configuration/nuxt-config
// import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon"],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
      poppins: [400, 500, 600, 800, 900],
      montserrat: [400, 500],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/tailwind.css'],
  build: {
    transpile: ['chart.js']
  }
});

server: {
  hmr: { overlay: true }
}



 

// export default defineNuxtPlugin(() => {
//   Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
// })