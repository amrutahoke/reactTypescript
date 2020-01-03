import { createStore, applyMiddleware } from "redux";
import { withoutImmerReducer } from "./reducers/withoutImmer";

import thunk from "redux-thunk";

const store = createStore(withoutImmerReducer, applyMiddleware(thunk));

export default store;