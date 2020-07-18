export default {
  addBook: ({ commit }, payload) => {
    commit('appendBook', payload)
  }
}
