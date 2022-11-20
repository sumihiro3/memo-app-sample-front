<script setup lang="ts">
import { MemoListDocument } from '~/graphql/queries/memo'
import { useClientHandle } from '@urql/vue'
const urql = useClientHandle()
const { data, fetching } = await urql.useQuery({ query: MemoListDocument })
</script>

<template>
  <section>
    <h1>Memo</h1>
    <div v-if="fetching">Loading...</div>
    <div v-if="data">
      <table v-if="data.memo">
        <tbody>
          <tr v-for="m in data.memo" :key="m.id">
            <td>{{ m.id }}</td>
            <td>{{ m.memo }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <em>no results</em>
      </div>
    </div>
  </section>
</template>
