<template>
  <div>
    {{ $route.params.type }}
    {{ $route.params.id }}
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
  }
}
</script>

<style></style>
