export default {
  addApple: function (context, count) {
    context.commit('addCount', count)
  },
  removeApple: function (context, count) {
    context.commit('removeCount', count)
  }
}
