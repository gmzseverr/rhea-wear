import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { clientReducer } from "./clientReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  global: globalReducer,
  client: clientReducer,
  product: productReducer,
});
