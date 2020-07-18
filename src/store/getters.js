export default {
  booksCount: (state) => {
    return state.fictionbooks.length + state.nonfictionbooks.length
  },

  getAllFictionbooks: (state) => {
    return state.books.filter((book) => {
      return book.type === 'Fiction'
    })
  },

  getAllNonFictionbooks: (state) => {
    return state.books.filter((book) => {
      return book.type === 'Non-Fiction'
    })
  }
}
