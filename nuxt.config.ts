// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: './src',
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
      GRAPHQL_URL: process.env.GRAPHQL_URL,
      HASURA_ADMIN_PASSWORD: process.env.HASURA_ADMIN_PASSWORD,
    },
  },
})
