import { createStore, combineReducers } from 'redux';
import list from "../reducers/list";

const reducer = combineReducers({
  list
});

/* eslint-disable no-underscore-dangle */
const todoStore = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
/* eslint-enable */
export default todoStore;
