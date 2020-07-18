<template>
  <div class="justify">
    <h1><strong>Title : </strong>{{ book.title }}</h1>
    <p><strong>Pages : </strong>{{ book.pageCount }}</p>
    <p><strong>Link : </strong><a :href="book.thumbnailUrl">{{ book.thumbnailUrl }}</a></p>
    <p><strong>Short Description : </strong>{{ book.shortDescription }}</p>
    <!-- <p v-for="(author, index) in authors" :key="index">Author(s) : {{ book.author }}</p> -->
    <p><strong>Author(s) : </strong>{{ book.authors[0] }} {{ book.authors[1] }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Book',

  data () {
    return {
      book: {}
    }
  },

  computed: {
    // fictionbooks () {
    //   return this.$store.state.fictionbooks
    // },
    ...mapState([
      'fictionbooks',
      'nonfictionbooks'
    ])
  },

  mounted () {
    const book = this[this.$route.params.type][this.$route.params.id]
    this.book = book
  }
}
</script>

<style>
</style>
