<template>
  <div>
    <h1>Non-Fiction Books</h1>
    <b-table striped hover :items="nonfictionbooks">
      <template v-slot:cell(title)="data">
          <router-link :to="`/books/nonfictionbooks/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NonFictionBooks',

  data () {
    return {}
  },

  computed: {
    ...mapState([
      'nonfictionbooks'
    ])
  }
}
</script>

<style></style>
