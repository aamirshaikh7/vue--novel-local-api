<template>
  <div>
    <h1>Non-Fiction Books</h1>
    <b-table striped hover :items="nonfictionbooks"></b-table>
  </div>
</template>

<script>
import nonfictionbooks from '@/data/nonfictionbooks'

export default {
  name: 'NonFictionBooks',

  data () {
    return {
      nonfictionbooks
    }
  }
}
</script>

<style></style>
