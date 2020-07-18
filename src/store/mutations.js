export default {
  appendBook: (state, { type, book }) => {
    state[type].push(book)
  }
}
