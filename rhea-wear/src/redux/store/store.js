// src/store/store.js
import { legacy_createStore as createStore, applyMiddleware } from "redux";

import { thunk } from "redux-thunk"; // Correct way to import
import { rootReducer } from "../reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
