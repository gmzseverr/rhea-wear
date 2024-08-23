import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { clientReducer } from "./clientReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  global: globalReducer,
  client: clientReducer,
  category: categoryReducer,
  product: productReducer,
});
