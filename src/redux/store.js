import { combineReducers, createStore } from "redux";
import customerReducer from "./customerReducer";
import pizzaDataReducer from "./pizzaDataReducer";
import cartDataReducer from "./cartDataReducer";
const rootReducer = combineReducers({
  customer: customerReducer,
  pizzaData: pizzaDataReducer,
  cartData: cartDataReducer,
});
const store = createStore(rootReducer);

export default store;
