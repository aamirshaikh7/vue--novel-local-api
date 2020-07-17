<template>
  <div>
    <h1>Fiction Books</h1>
    <b-table striped hover :items="fictionbooks">
      <template v-slot:cell(title)="data">
        <router-link :to="`/books/fictionbooks/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FictionBooks',

  data () {
    return {}
  },

  computed: {
    ...mapState([
      'fictionbooks'
    ])
  }
}
</script>

<style></style>
