import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import items from "./items.js";
import place from "./place.js";

export default createStore({
  modules: { place, items },
  plugins: [createPersistedState()],
});
