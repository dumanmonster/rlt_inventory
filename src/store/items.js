export default {
  state: {
    items: [
      { id: 1, color: "#7FAA65", name: "item test", x: 3, y: 2, amount: 3 },
    ],
  },
  getters: {
    getAllItems: (state) => state.items,

    getItemByXY:
      (state) =>
      ({ x, y }) =>
        state.items.filter((item) => item.x === x && item.y === y),
    getLastItem: (state) => state.items[state.items.length - 1],
  },
  mutations: {
    addItem(state, action) {
      state.items.push(action);
    },
    removeItem(state, action) {
      state.items = state.items.filter((el) => el.id !== action.id);
    },
    setItemByXY(state, { itemId, cellX, cellY }) {
      state.items = state.items.map((item) =>
        item.id == itemId ? { ...item, x: cellX, y: cellY } : { ...item }
      );
    },
  },
};
