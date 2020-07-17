<template>
  <div>
    {{ book().title }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Book',

  data () {
    return {}
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

  methods: {
    book () {
      const book = this[this.$route.params.type][this.$route.params.id]
      return book
    }
  }
}
</script>

<style></style>
