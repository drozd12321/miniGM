import { createStore, createLogger } from "vuex";
import countModul from "./modules/countModul";
export default createStore({
  plugins: [createLogger()],
  modules: {
    count: countModul,
  },
  state() {
    return {
      appTitle: "Vuex Modul",
    };
  },
  getters: {
    toUpperTitle(state) {
      return state.appTitle.toUpperCase();
    },
  },
});
