import { ADD_ITEM, REMOVE_ITEM } from "../AppConstants";
import { createStore } from "redux";

var _store = {
  list: []
};

var reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter((todo, index) => index !== action.payload);
    default:
      return state;
  }
};

const todoStore = createStore(reducer, _store.list);
export default todoStore;
