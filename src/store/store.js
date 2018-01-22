import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from './reducer';

const store = createStore(combineReducers({ store: reducer }));

export default store;
