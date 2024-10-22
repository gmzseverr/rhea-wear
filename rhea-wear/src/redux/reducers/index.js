import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";

import { productReducer } from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";

import { clientReducer } from "./clientReducer";

import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  global: globalReducer,
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  auth: authReducer,
});
