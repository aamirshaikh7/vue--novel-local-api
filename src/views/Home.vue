<template>
  <div class="home">
    <h2>Discover good books</h2>
    <button @click="toggleBookForm" class="btn btn-primary">Add Book</button>

    <b-form class="transition" @submit.prevent="handleSubmit" v-if="showBookForm">

      <b-form-group class="transition" id="input-group-2" label="Title: " label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.title"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Type: " label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.type"
          :options="['fictionbooks', 'nonfictionbooks']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="isbn: " label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="form.isbn"
          required
          placeholder="Enter isbn"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',

  data () {
    return {
      showBookForm: false,
      form: {
        title: '',
        type: '',
        isbn: 0
      }
    }
  },

  methods: {
    ...mapActions(['addBook']),

    toggleBookForm () {
      this.showBookForm = !this.showBookForm
    },

    handleSubmit () {
      const { type, title, isbn } = this.form
      const payload = {
        type,
        book: {
          title,
          isbn
        }
      }
      this.addBook(payload)

      this.form = {
        title: '',
        type: '',
        isbn: 0
      }
    }
  }
}
</script>

<style scoped>
.btn {
  margin-bottom: 10px;
}
.transition {
  transition: all 1s;
}
</style>
