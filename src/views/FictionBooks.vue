<template>
  <div>
    <h1>Fiction Books</h1>
    <b-table striped hover :items="fictionbooks"></b-table>
  </div>
</template>

<script>
import fictionbooks from '@/data/fictionbooks'

export default {
  name: 'FictionBooks',

  data () {
    return {
      fictionbooks
    }
  }
}
</script>

<style></style>
