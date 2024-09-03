import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { clientReducer } from "./clientReducer";
import { productReducer } from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export const rootReducer = combineReducers({
  global: globalReducer,
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});
