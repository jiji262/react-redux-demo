import { createStore,  combineReducers} from "redux";
import list from "../reducers/list";

const reducer = combineReducers({
  list
});

const todoStore = createStore(reducer);
export default todoStore;
