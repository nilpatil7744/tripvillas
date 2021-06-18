import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./LoginAuth/reducer";
import { pricingReducer } from "./Pricing_Final/reducer";
import { registerReducer } from "./Register/reducer";
import { hotelsReducer } from "./SingleHotel/reducer";

const rootreducer = combineReducers({
  register: registerReducer,
  login: LoginReducer,
  singleHotels: hotelsReducer,
  pricing: pricingReducer,
});

export const store = createStore(
  rootreducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
