import { FAILUARE_REQ, REGISTER_REQ, SUCCESS_REQ } from "./actiontype";

const initstate = {
  isAuth: false,
  isloading: false,
  isError: false,
};
export const registerReducer = (state = initstate, action) => {
  const { type } = action;

  switch (type) {
    case REGISTER_REQ:
      return {
        ...state,
        isloading: true,
      };
    case SUCCESS_REQ:
      return {
        ...state,
        isloading: false,
      };
    case FAILUARE_REQ:
      return {
        ...state,
        isloading: false,
        isError: true,
      };
    default:
      return state;
  }
};
