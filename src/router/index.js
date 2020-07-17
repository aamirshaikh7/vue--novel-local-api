import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FictionBooks from '../views/FictionBooks.vue'
import NonFictionBooks from '../views/NonFictionBooks.vue'
import Book from '../views/Book.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},

{
  path: '/fictionbooks',
  name: 'fictionbooks',
  component: FictionBooks
},

{
  path: '/nonfictionbooks',
  name: 'nonfictionbooks',
  component: NonFictionBooks
},

{
  path: '/books/:type/:id',
  name: 'book',
  component: Book
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
