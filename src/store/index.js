import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import place from "./place.js";
import items from "./items.js";

export default createStore({
  modules: { place, items },
  plugins: [createPersistedState()],
});
