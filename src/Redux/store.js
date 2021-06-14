import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./LoginAuth/reducer";
import { registerReducer } from "./Register/reducer";
import { searchreducer } from "./SearchDataHome/reducer";

const rootreducer = combineReducers({
  search: searchreducer,
  register: registerReducer,
  login: LoginReducer,
});

export const store = createStore(
  rootreducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
