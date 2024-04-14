import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./Reducer/productReducer";
import basketReducer from "./Reducer/basketReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  productReducer,
  basketReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));
