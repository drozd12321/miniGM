export default {
  namespaced: true,
  state() {
    return {
      counter: 3,
    };
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload;
    },
  },
  actions: {
    AsyncIncrement(context, payload) {
      setTimeout(() => {
        context.commit("increment", payload.value);
      }, payload.delay);
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
    doubleCounter(state, getters, rootState, rootGeters) {
      console.log("rootState", rootState);
      console.log("rootGeters", rootGeters);
      return getters.counter * 2;
    },
  },
};
