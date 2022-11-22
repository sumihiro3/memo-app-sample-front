import {
  createClient,
  ssrExchange,
  dedupExchange,
  fetchExchange,
  Client,
} from '@urql/core'
import { defineNuxtPlugin } from '#app'
import { ref } from 'vue'
const ssrKey = '__URQL_DATA__'
export default defineNuxtPlugin((nuxt) => {
  const { vueApp } = nuxt
  const config = useRuntimeConfig()
  const ssr = ssrExchange({
    isClient: process.client,
  })
  if (process.client) {
    nuxt.hook('app:created', () => {
      ssr.restoreData(nuxt.payload[ssrKey])
    })
  }
  if (process.server) {
    nuxt.hook('app:rendered', () => {
      nuxt.payload[ssrKey] = ssr.extractData()
    })
  }
  const client = createClient({
    url: config.GRAPHQL_URL,
    fetchOptions: {
      headers: {
        'x-hasura-admin-secret': config.HASURA_ADMIN_PASSWORD,
      },
    },
    exchanges: [dedupExchange, ssr, fetchExchange],
  })
  nuxt.provide('urql', client)
  vueApp.provide('$urql', ref(client))
})
declare module '#app' {
  interface NuxtApp {
    $urql: Client
  }
}
