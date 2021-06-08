import { loadData, saveData } from "../../utils/localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT_PAGE,
} from "./actiontype";

let isAuth = loadData("auth") || false;
const initstate = {
  isAuth: isAuth,
  isloading: false,
  isError: false,
  username: "",
};
export const LoginReducer = (state = initstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQ:
      return {
        ...state,
        isloading: true,
      };
    case LOGIN_SUCCESS:
      saveData("auth", true);
      return {
        ...state,
        isloading: false,
        username: payload.username,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isloading: false,
        isError: true,
      };
    case LOGOUT_PAGE:
      saveData("auth", false);
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
