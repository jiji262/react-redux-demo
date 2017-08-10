import { actionConstants } from '../AppConstants';
import {createStore} from 'redux';

var _store = {
  list: []
};

var reducer = (state, action) => {
  switch(action.type){
    case actionConstants.ADD_ITEM:
      return [...state, action.data];
    case actionConstants.REMOVE_ITEM:
      return state.filter((todo, index) =>
        (index !== action.data));
    default:
      return state;
  }
}

const todoStore = createStore(reducer, _store.list);
export default todoStore;
