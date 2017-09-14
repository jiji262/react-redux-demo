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
/* eslint-disable no-underscore-dangle */
const todoStore = createStore(reducer, _store.list,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
/* eslint-enable */
export default todoStore;
