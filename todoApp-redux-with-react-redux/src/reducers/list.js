import { ADD_ITEM, REMOVE_ITEM } from "../AppConstants";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter((todo, index) => index !== action.payload);
    default:
      return state;
  }
};
