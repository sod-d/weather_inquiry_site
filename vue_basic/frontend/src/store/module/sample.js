
export default {
  namespaced: true,
  state: () => ({
    test: 0,
  }),
  // 비동기적 setter
  actions: {
    //this.$store.dispatch('test/acTest', "1234");
    addNum(context, value) {
      context.commit("muTest");
    },
  },
  // 동기적 setter
  mutations: {
    //this.$store.commit('test/muTest', "1234");
		muTest(state, value) {
      state.test += 1;
      console.log(state.test);
    },
  },

  // getter
  getters: {
    //this.$store.getters['test/getTest']
    getTest(state) {
      return state.test;
    },
  },
};
