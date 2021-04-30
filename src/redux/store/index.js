import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "../reducers";

var store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;